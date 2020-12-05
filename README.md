# Node.Js Telegram Bot

Telegram bot prototype written in node.

Add `.env` file with you token:

```
BOT_TOKEN="<your-token-goes-here>"
```

## Run in dev

```
$ yarn dev
```

## Run in prod

```
$ yarn start
```

## Forever

To keep the bot running use `forever`.

### Install

```
$ yarn global add forever
```

### Start

```
$ yarn forever
```

### Stop

```
$ forever stopall
```
