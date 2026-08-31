---
title: The Grammar of Pressable
description:
  How a shape earns the right to be pressed — affordance, signifier,
  convention, and invention — read off real interface elements that get it
  wrong in both directions.
week: 3
date: 2027-03-08
teachers:
  - marisol-quaye
spec:
  - you have found one real interface element that is genuinely mis-clickable or visually ambiguous, with a screenshot or link
  - you have named which specific convention it violates — affordance, signifier, or established convention
  - you have proposed the smallest visual change that would fix it, without redesigning the whole element
related:
  - sessions/02-translating-the-push
---

A flat grey rectangle with dark text inside it, on most software built in the
last fifteen years, reads as pressable. Nobody taught you that in a lesson.
You learned it from thousands of other rectangles that behaved the same way
when you pressed them. That's a **convention** — a signal that only works
because everyone involved has seen it before.

**Affordance** is different: a property of the object itself that suggests
what to do with it, independent of anyone having seen one before. A doorknob
affords turning because of its shape, not because you were taught doorknobs
are for turning.

A **signifier** sits between the two: a deliberate signal, placed on an
object, telling you what it affords. A raised edge on a physical button is a
signifier of its affordance. A drop shadow under a rectangle on a screen is
trying to do the same job, by convention rather than by physics — there's no
actual raised edge, just a picture of one.

**Invention** is what happens when none of the above exists yet, and someone
decides a new shape or motion will mean "press me" from now on. Every
convention now in place was, at some point, an invention that hadn't been
tested yet.

## Two failures

- **Looks pressable, isn't.** A flat card with a subtle border, styled
  almost exactly like a button on the same page, that turns out to be
  static text. The signifier is present; the affordance behind it is
  missing.
- **Is pressable, doesn't look it.** A word inside a sentence, coloured no
  differently from the text around it, that is in fact a functioning link.
  The affordance is present; the signifier was never applied.

Both failures come from the same source: the visual signal and the actual
behaviour have come apart. The digital button you built last week only
worked because you kept those two things aligned — this week is about
finding the real interfaces that didn't.

## The diagnosis

Find one real interface element — not invented, not remembered vaguely —
that gets this wrong in either direction. Take a screenshot or keep the
link. Write down:

1. what you expected would happen when you interacted with it, and why you
   expected that
2. what actually happened
3. which of affordance, signifier, or convention was misapplied, and how
4. the smallest visual change — not a redesign — that would have told the
   truth

## Log the diagnosis

Submit the screenshot and the four answers. This is the vocabulary the rest
of the course uses to talk about what a button looks like versus what it
does.
