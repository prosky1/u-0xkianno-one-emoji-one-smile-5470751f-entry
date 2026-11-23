# One Emoji, One Smile

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/prosky1/u-0xkianno-one-emoji-one-smile-5470751f-entry/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/prosky1/u-0xkianno-one-emoji-one-smile-5470751f-entry/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [make.fun bounty "One Emoji, One Smile"](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f): send exactly one emoji, the one most likely to make a stranger smile. A judge compares entries two at a time and picks the warmer.

## The emoji

> 🫶

Heart hands — a small, warm, instantly readable gesture of kindness from a stranger, with no words needed.

## How it works

`main.ts` writes exactly that one emoji to `/output/entry.txt` (1 character, 4 bytes UTF-8, no trailing newline, no BOM), after checking it against the competition gate: 1–8 characters, not only whitespace, exactly one grapheme.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
