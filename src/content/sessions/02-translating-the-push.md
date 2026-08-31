---
title: Translating the Push
description:
  What a physical button gives you for free — resistance, travel, a click, a
  physical return to its resting position — and what a digital button has to
  fake or simply do without.
week: 2
date: 2027-03-01
teachers:
  - idris-fenn
spec:
  - you have picked one button from your week 1 log and built a minimal digital version of it
  - you can name, for that specific button, every physical cue the digital version had to fake or drop — resistance, travel, click, physical return, tactile confirmation
  - the digital version gives some signal, however small, that the press registered
related:
  - sessions/01-the-button-before-the-screen
---

Press a doorbell and your finger feels it push back. There's resistance
before the contact closes, a short distance of travel, often an audible click
at the moment of contact, and when you let go, a spring returns the button to
where it started. None of that is decoration. It's how you know, without
looking, that the press registered.

A rectangle on a screen has none of it. There's no resistance, because
there's nothing to push against — your finger is on glass, not a switch.
There's no travel, because the rectangle doesn't move. There's no click,
unless the software fakes one. There's no physical return, because there was
no physical departure. Every one of those cues has to be simulated in some
other channel — a colour change, a sound file, a vibration — or the interface
does without it and hopes the user trusts the tap anyway.

## Translating one button from Week 1

Take one button from your Week 1 log — one you know well enough to describe
from memory. Build the smallest possible digital version of it: one
clickable element, one visible response. It doesn't need a backend. It needs
to stand in convincingly for the physical button you chose.

While you build it, keep a running list of every physical cue the original
button gave you that your digital version had to either simulate or drop:

- **Resistance** — did you fake it with a colour or shadow change on press,
  or skip it?
- **Travel** — does your element move at all, or is it flat the whole time?
- **Click** — is there a sound, and if so, is it doing the same job the
  mechanical click did?
- **Physical return** — how does a user know the interaction is over, if
  nothing sprang back?
- **Tactile confirmation** — what replaces the feeling of the press
  succeeding, for someone who can't see the screen change?

## The list

Submit your digital button alongside the cue list. For each cue you dropped
rather than simulated, say what you think was lost by dropping it — not in
general, for your specific button. Dropping tactile confirmation is a
different kind of loss on a panic button than it is on a doorbell.
