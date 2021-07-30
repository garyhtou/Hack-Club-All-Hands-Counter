require('dotenv').config();

const MEMBER_OFFSET = 7;
const MESSAGES = require('./messages');
const SLACK_HOME_VIEW = require('./slackHome');

const { App } = require('@slack/bolt');

const app = new App({
	token: process.env.HAND_COUNTER_SLACK_BOT_TOKEN,
	signingSecret: process.env.HAND_COUNTER_SLACK_SIGNING_SECRET,
});

app.event('member_joined_channel', async ({ event }) => {
	console.log(`${event.channel} joined ${event.channel}`);
	updateTopicWithHands(event, await getRandomMessageTemplate(true));
});

app.event('member_left_channel', async ({ event }) => {
	console.log(`${event.user} left ${event.channel}`);
	updateTopicWithHands(event, await getRandomMessageTemplate(false));
});

app.event('app_home_opened', async ({ event, client }) => {
	if (event.tab !== 'home') return;
	console.log(`${event.user} opened app home!`);

	client.views.publish({
		user_id: event.user,
		view: SLACK_HOME_VIEW,
	});
});

(async () => {
	const port = process.env.PORT || 3000;
	await app.start(port);

	console.log(`Hack Club #all-hands Counter is running on port ${port}`);
})();

// ============== HELPERS ==============

async function updateTopicWithHands(event, message) {
	const user = event.user;
	const channel = event.channel;
	const numMembers = await getNumMembers(channel);
	const topic = message
		.replace(/<@USER>/g, `<@${user}>`)
		.replace(/<NUM_HANDS>/g, `${numMembers * 2}`);

	await app.client.conversations.setTopic({
		channel,
		topic,
	});
	console.log(`Changed ${channel} topic to "${topic}"`);
}

async function getNumMembers(channel) {
	const response = await app.client.conversations.info({
		channel,
		include_num_members: true,
	});
	// For some reason, slack include bots in the number of channel members ¯\_(ツ)_/¯
	return response.channel.num_members - MEMBER_OFFSET;
}

async function getRandomMessageTemplate(join) {
	const length = Object.keys(join ? MESSAGES.join : MESSAGES.leave).length;
	const random = Math.floor(Math.random() * length);

	return MESSAGES[join ? 'join' : 'leave'][random];
}

module.exports = {
	updateTopicWithHands,
	getRandomMessageTemplate,
};
