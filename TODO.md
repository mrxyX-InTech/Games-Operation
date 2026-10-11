# THE OPERATION — Delivery TODO

- [ ] The browser game opens with a short skippable boot sequence, fictional CIB login, agent name entry, clearance display, authentication feedback and an onboarding briefing in Indonesian.
- [ ] The desktop works in mobile landscape and desktop layouts with a taskbar, clock, network/security status, notifications, profile summary, fullscreen action, rotation guidance, touch-friendly controls, bounded app windows and no hover-only interaction.
- [ ] The game uses a shared validated state with localStorage autosave, Continue/New Game behavior, reset confirmation, session fallback, XP, rank, evidence, case progress, dialog flags, notes, settings and search history.
- [ ] HUMAN DB and VEHICLE DB search deterministic fictional records, show detail profiles, preserve IDs and relationships, support filters/history, and allow connected records to be opened from other apps.
- [ ] CASE FILES exposes mission objectives, evidence requirements, task status, progress percentage, notes and a report action that is gated by actual investigation state.
- [ ] SECURE MAIL, COMMUNICATIONS, FORENSIC LAB, FACE ANALYSIS, PLATE READER, CCTV ARCHIVE, SERVER CONTROL, INTEL MAP, EVIDENCE BOARD and TERMINAL each have a visible working interaction and update the shared game state.
- [ ] The complete Misi 01–04 chain works: mail unlocks a case, CCTV reveals a plate, Plate Reader yields a deterministic result, Vehicle DB finds the registered owner, Human DB reveals the connected person, evidence can be added to the board, and mission reports unlock the next mission.
- [ ] The campaign registry contains exactly the 20 named missions from the supplied brief, grouped into four acts, with missions 05–20 visibly locked behind progression rather than pointing to empty screens.
- [ ] Dialog uses subtitles, type-on presentation, character identity and optional Web Speech API with fallback; audio feedback starts only after interaction and respects mute/settings.
- [ ] The terminal parser accepts only game commands (`help`, `status`, `cases`, `mail`, `evidence`, `search human`, `search vehicle`, `open case`, `clear`) and never executes operating-system commands.
- [ ] The app contains no external API dependency, no real-world identity matching, no real server scanning, no invented media URLs and no claim that JavaScript performs genuine AI analysis.
- [ ] The project serves `GET /manus-routes.json` with the current route manifest and has no syntax errors under the configured runtime checks.
