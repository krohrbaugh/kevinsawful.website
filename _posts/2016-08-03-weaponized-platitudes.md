---
layout: post
title: "Weaponized Platitudes"
date: 2016-08-03
tags: communication code-review
---

[YAGNI][yagni]. [DRY][dry]. [KISS][kiss]. Idiomatic. Readable.

These terms are intended to succinctly communicate a concept, yet easily become
conflict-laden clichés. Avoid them to improve discussions about code.

{% asset posts/hero-gorilla.jpg %}

For instance, _YAGNI_, _DRY_, and _KISS_ are frequently employed as arguments to
simplify needlessly complex code. Unfortunately, they can also be used to wave
away [_essential complexity_][no-silver-bullet], without the need for
understanding the underlying value.

Similarly, _idiomatic_, and _readable_ are ofttimes used to guide toward common
approaches which are easily identifiable by practioners in a particular
community. However, they can also be used to dictate personal aesthetics without
the hassle of justification.

All of the terms refer to a quality that's difficult to take an opposing
position on. After all, who wants to build unnecessary stuff, or write
overly-complex, unreadable code? Due to this, the discussion often devolves into
one of two scenarios: acquiescence or [semantic discord][sem-discord].
Acquiescence means that nobody is improving, since there's no need to educate or
discuss trade-offs. Semantic discord is exhausting, as it means the debate
ceases to be about the code, and becomes about definitions, and arguing first
principles. While it's possible for an individual to _feel_ like they've won
either type of debate, the team as a whole has lost.

# What works better?

Rather than lobbing truisms at one another, focus discussions around the
trade-offs being made. A simple way to do so is to employ the [Socratic
method][socratic]: ask questions, in order to draw out intent, and underlying
presumptions.

When faced with needlessly complex code, ask why the complexity is necessary,
and what value it brings. The discussion may show the complexity to be
warranted.

When providing feedback on code which eschews a common solution, offer the
alternative, along with justification, and ask why it won't work in this
instance. The discussion may highlight how this problem does not fit the
pattern.

When we abandon trite declarations, we make room to evolve our understanding of
the _problem_, along with the solution. Arm yourself with curiosity, not
platitudes.

[yagni]: https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it
[dry]: https://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[kiss]: https://en.wikipedia.org/wiki/KISS_principle
[no-silver-bullet]: https://en.wikipedia.org/wiki/No_Silver_Bullet
[sem-discord]: https://en.wikipedia.org/wiki/Semantic_discord
[socratic]: https://en.wikipedia.org/wiki/Socratic_method
