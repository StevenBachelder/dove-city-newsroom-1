# Dove City Newsroom — Reference Sound Renders

These .wav files are faithful offline renders of the game's synthesized palette
(see SOUND_LIBRARY.md in the repo root for the full mapping and design rules).

**The game does not use these files.** All in-game audio is synthesized live by
Web Audio code in index.html; these renders exist for sound-design review,
future design work, and for the Unreal team to adopt the same sonic identity
in Levels 1 and 3 as native assets.

Technical notes:
- 44.1 kHz, 16-bit mono WAV.
- A uniform +12 dB audition gain is applied; **relative** loudness between files
  matches the in-game mix (navigation ticks quiet, stamp/finales heavy).
- `chord_right_call` / `thud_wrong_call` include the generated convolution
  reverb tail; the two tally ticks show the accelerating counter's range
  (tick 1 = 500 Hz through tick 14 = 1000 Hz — in-game it glides through
  every step between).
- `flip_to_back` / `flip_to_front` are the full whoosh-then-landing composites,
  with the landing at 560 ms to match the card's 0.6 s rotation.

To retune a sound: edit the recipe in index.html (frequencies, durations,
gains), and re-render this set with tools/render_sounds.py for review.
