---
title: Feedback and the Length of a Second
description:
  The interval between a press and its visible result, and how long a
  button can stay silent before that gap reads as failure.
week: 5
date: 2027-03-22
teachers:
  - marisol-quaye
spec:
  - you have built the same button action three times, with a no-feedback delay, a loading-indicator delay, and an immediate-acknowledgement-then-result delay
  - you have logged the fixed delay you used for each version
  - you have recorded, for a real tester on each version, the moment they showed they suspected the press had failed, or logged that they never did
related:
  - sessions/04-what-the-button-promises
---

Every button in Week 4 was a promise about a state change. This week asks
a narrower question about the same promise: how long can it stay
unconfirmed before the person who pressed it assumes it failed?

A submit button and a purchase button can make an identical promise —
"this action has been recorded" — and still feel completely different,
because one confirms in under a second and the other spins for four. The
promise doesn't fail. The silence does.

## Four intervals, four buttons

- **Submit.** A form submission that returns a new page or a confirmation
  message almost immediately gives no room for doubt.
- **Save.** A save that only shows a small icon change, or nothing at
  all, leaves the user checking whether it actually happened.
- **Purchase.** A purchase button that spins for several seconds before
  confirming is trading a slower promise for a more serious one — the
  wait itself can read as the system taking the transaction seriously.
- **Elevator call acknowledgement.** Some panels light the button on
  press; others give no signal until the car arrives, and a rider who
  presses again during that gap isn't confused about elevators, they're
  responding to silence.

## What fills the gap

- **Immediate acknowledgement** — a signal at the moment of press, before
  the actual result exists yet.
- **Loading feedback** — a visible signal that something is happening,
  for the full duration of the gap.
- **Delayed result** — no signal until the actual outcome arrives.
- **Optimistic response** — the interface shows the successful result
  immediately, before confirming it actually happened, and corrects
  itself later if it didn't.

None of these make the gap shorter. Each one changes what a person does
while waiting inside it.

## Three delays, one button

Pick one button action from your Week 4 table, or a new one. Build three
versions of the same action, identical except for what happens between
press and result:

1. no feedback until the result appears
2. a loading indicator for the full duration
3. immediate acknowledgement, followed by the actual result later

Set each version to a fixed delay long enough that a real person pressing
it would have time to doubt it.

## The timing log

Have another person press each version once, without telling them what
you changed. For each version, record the exact delay you set and the
moment they said, gestured, or visibly acted as if they thought it had
failed — not whether they eventually got the result. If they never
doubted a version, log that too, with the delay you used.

Submit the three delays alongside where doubt began for each. A number
with no delay attached, or a delay with no observed reaction, isn't a
log.
