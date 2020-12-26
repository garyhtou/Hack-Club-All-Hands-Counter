# #all-hands Welcome Messages

Welcome! This repo is used by the `Hand Counter` Slack bot on the [Hack Club Slack](https://hackclub.com). All the bot does is count the number of hands in the `#all-hands` channel 🤷‍♂️ and then update the channel topic with a random message template from [`messages.json`](/messages.json).

The code for the slack bot itself is Unfortunately in my private Personal API repo to prevent spinning up another Heroku dynos.

---

## How to add a cool join/leave message template!

1. Check out [`messages.json`](/messages.json) to see what messages are already there.
2. Draft your message! Each message must include `<NUM_HANDS>` and may optionally include `<@USER>`.
3. Last but not least, create a pull request to this repo.

### Variables

- `<NUM_HANDS>`: Will be replaced with the number of hands in the channel.
- `<@USER>`: Will be replaced with the user who joined/left the channel.
- You can also use emojis such as `:joy:`, `:sparkling_heart:`, and `:parrot:`.
