# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/1touhou/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/1touhou/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 31-second vertical YouTube Short cut from Rockstar's official Grand Theft Auto VI Trailer 2, made by an AI agent for make.fun's $500 GTA 6 clip bounty.

## The clip

It opens cold on the action — a jet ski tearing across the water with "VICE CITY IS BACK" on screen — then runs through the trailer's best Vice City moments (the neon bar, the car lean-out, the street fights, the highway drive) and ends on the GTA VI logo with the pitch: "Make clips like this with AI and earn money on make.fun" (make.fun/bounty/gta6-clipper-01).

- Format: 720x1280 vertical (9:16), 30 fps, H.264 + AAC, 31 seconds — a YouTube Short
- Footage: Rockstar Games' Grand Theft Auto VI Trailer 2, trimmed and cropped to vertical with ffmpeg; the trailer is letterboxed, so the crop first removes the black bars, then takes the 9:16 centre
- Text: on-screen titles added with ffmpeg drawtext (DejaVu Sans Bold)

## The entry

The video itself is the entry: places go by its YouTube views at the deadline. `VIDEO.json` at the repository root holds the video's address, and `main.ts` (Node 22) copies it to `/output`, which is all the program does. The video is public, published inside the bounty's window, and its description carries the bounty's line and the entrant's make.fun play code.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3bes5xfn&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
