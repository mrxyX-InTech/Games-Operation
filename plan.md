# THE OPERATION — Implementation Plan

## Scope

THE OPERATION is a self-contained Indonesian cyber-investigation simulator delivered as a static browser game. This release prioritizes a complete playable investigation loop instead of decorative breadth:

- A skippable CIB boot sequence and fictional agent login.
- A touch-first investigation desktop with taskbar, clock, network/security status, notifications and draggable application windows.
- A shared local game state with autosave, manual save, reset confirmation, XP, rank, mission progression, evidence, notes, dialogue flags and settings.
- Fifteen connected applications: HUMAN DB, VEHICLE DB, CASE FILES, FORENSIC LAB, FACE ANALYSIS, PLATE READER, CCTV ARCHIVE, COMMUNICATIONS, SECURE MAIL, SERVER CONTROL, INTEL MAP, EVIDENCE BOARD, TERMINAL, AGENT PROFILE and SETTINGS.
- A complete, data-driven chain for missions 01–04: First Login, Missing Identity, The Silent Call and Vehicle at Midnight.
- A 20-mission campaign registry with precise titles, acts, unlock state and content hooks so the remaining campaign is a real roadmap, not a dead button.

## Functional architecture

- `index.html`: semantic shell, boot/login screens, desktop chrome and window host.
- `styles.css`: responsive landscape workstation styling, touch targets, low-motion mode, rotation guidance and app-specific layouts.
- `app.js`: modular plain JavaScript containing:
  - `GAME_DATA`: fictional entities, missions, messages, evidence, locations and contacts.
  - `StateStore`: validated localStorage save/load with session fallback.
  - `MissionEngine`: unlock conditions, task completion, evidence gates, XP and rank.
  - `WindowManager`: open, focus, minimize, maximize and close behavior; drag support on desktop and bounded full-screen panels on mobile.
  - `DatabaseEngine`: deterministic HUMAN DB and VEHICLE DB search, filters, profiles and search history.
  - `EvidenceSystem`: evidence collection, board placement, relationship links and confirmed/possible states.
  - `DialogueEngine`: typed Indonesian dialogue, subtitles and Web Speech API fallback.
  - `NotificationManager`: one-shot in-game notifications for mail, calls, unlocks and task completion.
  - `AudioManager`: Web Audio click/alert feedback after user interaction, with mute setting.
  - `AppViews`: renderers for the fifteen applications and their meaningful interactions.
  - `TerminalParser`: safe game-only command parser (`help`, `status`, `cases`, `mail`, `evidence`, `search human`, `search vehicle`, `open case`, `clear`).

## Investigation loop

1. Agent logs in and receives Maya's onboarding dialogue.
2. Secure Mail exposes the current operation and opens Case 001.
3. Case Files shows tasks and current evidence requirements.
4. HUMAN DB and VEHICLE DB return only known fictional records from the shared data source.
5. CCTV Archive presents a CSS/SVG surveillance frame with timeline markers. Plate Reader converts the discovered plate clue into a deterministic result.
6. Forensic Lab, Face Analysis, Communications and Server Control provide evidence or narrative context.
7. Evidence Board accepts unlocked evidence cards, supports touch-friendly positioning and lets the player label a relationship.
8. Mission tasks complete only when their defined state conditions are true; evidence unlocks subsequent work.
9. The player can submit a case report when all required tasks are complete, receiving XP, rank progress and the next mission unlock.

## Design direction

- **Design movement:** restrained cyber-noir workstation, inspired by forensic control rooms rather than generic sci-fi dashboards.
- **Core principles:** evidence-first clarity, quiet tension, readable density, and tactile precision.
- **Color philosophy:** charcoal and near-black create an investigative room; electric cyan marks actionable data; paper-white keeps long reports readable; warning red is reserved for risk and unresolved contradictions.
- **Layout paradigm:** an asymmetric desktop with a persistent left command rail, a layered workbench and a low-profile taskbar; app windows behave like physical case folders on a desk.
- **Signature elements:** cyan evidence rails, red case-priority marks, and a CIB ring-and-bar wordmark motif.
- **Interaction philosophy:** every action produces a state change, an explanation or a trace in the case log. Touch controls use generous hit areas and do not rely on hover.
- **Animation:** short boot reveals, 160–220ms window transitions, scan sweeps only while an analysis is active, and a low-motion setting that removes nonessential movement.
- **Typography:** `Rajdhani`-style condensed display fallback via system sans for labels, paired with `Inter`/system sans for reports and body copy. Uppercase micro-labels are used sparingly for hierarchy.
- **Brand essence:** an evidence-driven cyber-noir investigation desk for players who enjoy connecting small details into a defensible conclusion. Personality: precise, tense, humane.
- **Brand voice:** direct, calm and procedural. Example lines: “Jangan kejar kecocokan. Kejar bukti yang bisa dipertanggungjawabkan.” and “Sinyal terputus bukan berarti kasus berakhir.”
- **Wordmark/logo:** a segmented CIB ring with a single vertical intrusion bar, paired with a wide tracked `THE OPERATION` wordmark.
- **Signature brand color:** `#4de8ff`, a cold electric cyan used only for action and verified signal.

## Serving and delivery

The app is intentionally dependency-free. A small Node static server listens on the managed Preview port (`3000`) and serves `index.html`, `styles.css`, `app.js` and `public/manus-routes.json`. No backend, online login, external API, real-world scanning or external media is required. The project is checkpointed to the managed canonical repository after validation; publication is not requested.

## Explicit product boundary

The attached brief asks for a very large 20-mission production. This first build makes the foundation and the first four missions genuinely playable, while keeping the exact 20-mission campaign registry, shared entity IDs and mission data contracts in place for subsequent content expansion. It does not claim the remaining sixteen missions are fully authored.
