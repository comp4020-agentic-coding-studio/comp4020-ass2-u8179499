---
title: One Button, Many Hands
description:
  Returning to the Week 7 crossing button to find the exact point where
  its push mechanism stops working for a hand unlike the one that built
  it.
week: 9
date: 2027-04-19
teachers:
  - marisol-quaye
spec:
  - you have reused the exact digital crossing button from Week 7, unchanged, as the object under test
  - you have tested it under at least three changed conditions (for example one-handed use, no visual feedback, keyboard-only activation, a different physical reach) and logged the specific point each one broke
  - your log names a mechanism failure — reach, target size, timing window, sight-only or sound-only acknowledgement, or activation method — for each condition, not a general impression
related:
  - sessions/07-the-button-that-doesnt-work
---

Week 7 asked what a button teaches you once it stops working. This week
asks a narrower question about the same button: working for whom? The
crossing button you built in Week 7 was tested by one person, pressed one
way. Nothing in that log tells you whether the same push mechanism holds
up for a different hand, a different reach, or a different sense.

## Where a button can quietly stop working

- **Reach.** A button placed for a standing adult at a fixed height may
  be out of reach, or require an awkward stretch, for someone shorter,
  seated, or reaching with the opposite hand.
- **Target size.** A press that lands easily with a fingertip may miss
  repeatedly with a gloved hand, a stylus, or reduced fine motor control.
- **Timing window.** A button that only registers a press within a fixed
  window — hold too long or too short and nothing happens — assumes a
  specific, unstated speed.
- **Acknowledgement channel.** A light that confirms the press tells you
  nothing if you can't see it; a click that confirms it tells you nothing
  if you can't hear it.
- **Activation method.** A button that only responds to a direct touch or
  a mouse click may have no equivalent for a keyboard or switch.

None of these is a flaw in the person testing it. Each is a fact about
the exact mechanism Week 7 built, that Week 7's single test never had a
reason to find.

## Break your Week 7 button, on purpose

Take the exact digital crossing button you built in Week 7 — don't
rebuild it, reuse it as it stands. Test it under at least three changed
conditions:

1. one-handed use, with the hand you don't normally use
2. with the visual acknowledgement hidden or disabled
3. keyboard-only activation, no pointer or touch
4. a different physical reach — the device propped further away, or held
   at an angle you don't normally use

## The failure map

For each condition, log the exact point the button stopped functioning
as a usable button — not "it was harder," but which specific mechanism
broke: press missed the target, acknowledgement wasn't perceivable,
timing window wasn't met, or no activation path existed at all.

Submit a map: one condition per row, one named mechanism failure per row.
A row that only says "worked" or "didn't work" isn't a log.
