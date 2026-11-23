# Sunday 22 November 2026 — The World in One Day

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/HayaMax27/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/HayaMax27/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

Built for the [make.fun bounty "Sum up 22 November's world news in one image"](https://make.fun/bounty/news-image-20261122).

## The image

`entry.png` sums up Sunday 22 November 2026 in five stories, each one an event
that happened — or was first reported — on that day:

1. **COP31 climate talks collapse** — the UN summit in Antalya, Turkey ends
   with no deal after the EU rejects a final text that does not mention fossil
   fuels.
2. **Two supertankers hit mines near the Strait of Hormuz** — both catch fire
   in the Gulf as the US–Iran standoff deepens.
3. **Russian warship hit at Benghazi** — the corvette Merkury is struck by a
   suspected Ukrainian sea drone at the Libyan naval base.
4. **Drones kill 4 near Khartoum** — attacks blamed on Sudan's Rapid Support
   Forces damage a United Nations building.
5. **EU–Indonesia sign a landmark trade deal** — tariffs scrapped on up to
   98.5% of goods after almost 10 years of talks.

Sources: AP, Reuters, AFP, Al Jazeera — 22 November 2026.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` — or to `$MAKEFUN_OUTPUT_DIR` when set. Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
