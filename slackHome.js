const HOME_VIEW = {
	type: 'home',
	blocks: [
		{
			type: 'header',
			text: {
				type: 'plain_text',
				text: 'Hey there!',
				emoji: true,
			},
		},
		{
			type: 'section',
			text: {
				type: 'plain_text',
				text: "All I do all day is count hands :man-shrugging:. I know it's kinda weird, but #all-hands needs me!",
			},
		},
		{
			type: 'section',
			text: {
				type: 'mrkdwn',
				text: 'Want to add to my join/leave message templates? Create a pull request in this <https://github.com/garyhtou/All-Hands-Welcome-Messages|GitHub repo>',
			},
		},
		{
			type: 'section',
			text: {
				type: 'mrkdwn',
				text: '*Developed by <https://github.com/garyhtou|@garyhtou>.*',
			},
		},
		{
			type: 'divider',
		},
		{
			type: 'context',
			elements: [
				{
					type: 'mrkdwn',
					text: '<https://github.com/hackclub/dinosaurs/blob/main/dinosaur_waving.png|Credit for dino image in profile pic>',
				},
				{
					type: 'plain_text',
					text: 'pssstt admins, am I getting too annoying?! To turn me off, just kick me from the channel!',
					emoji: true,
				},
			],
		},
	],
};

module.exports = HOME_VIEW;
