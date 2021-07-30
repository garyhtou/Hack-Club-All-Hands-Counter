# Hack Club #all-hands Welcome Messages

Welcome! This repo is used by the `Hand Counter` Slack bot on the [Hack Club Slack](https://hackclub.com). All the bot does is count the number of hands in the `#all-hands` channel 🤷‍♂️ and then update the channel topic with a random message template from [`messages.json`](/messages.json).

---

## How to add a cool join/leave message template!

1. Check out [`messages.json`](/messages.json) to see what messages are already there.
2. Draft your message! Each message must include `<NUM_HANDS>` and may optionally include `<@USER>`.
3. Last but not least, create a pull request to this repo.

### Variables

- `<NUM_HANDS>`: Will be replaced with the number of hands in the channel.
- `<@USER>`: Will be replaced with the user who joined/left the channel.
- You can also use emojis such as `:joy:`, `:sparkling_heart:`, and `:parrot:`.

## Contribute

```bash
git clone https://github.com/garyhtou/Hack-Club-All-Hands-Counter.git
cd Hack-Club-All-Hands-Counter

cp .env.example .env

npm install
npm run dev

# for testing, you may also want to create a slack bot (required permissions below)
```

### Slack Bot Permissions (Bot Token Scopes)

- `channels:history`
- `channels:manage`
- `channels:read`
- `groups:history`
- `groups:read`
- `groups:write`
