# CLAUDE.md - Project Philosophy & Standards

## Vision

This project exists to solve a simple but important problem: developers need a fast, reliable, beautiful tool to work with JSON. Not just functional—**delightful**. Every interaction should feel effortless. Every feature should feel inevitable.

## Core Principles

### 1. Simplicity First

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci

- **One purpose, done excellently**: This is a JSON editor. Not a Swiss Army knife.
- **Zero cognitive load**: Users should never wonder what to do next.
- **No unnecessary features**: Every feature must earn its place.

### 2. Performance is a Feature

- **Fast is not fast enough**: Target sub-100ms interactions.
- **Respect user's resources**: Minimize bundle size, optimize images, lazy load when sensible.
- **Static-first**: No servers, no databases, no complexity. Pure static files.

### 3. Beauty in Details

- **Pixel-perfect matters**: Alignment, spacing, typography—sweat the details.
- **Responsive by default**: Mobile-first design. Works everywhere.
- **Accessible to all**: WCAG 2.1 AA compliance minimum. Keyboard navigation. Screen reader support.

### 4. Code as Craft

- **Read like prose**: Code should be self-documenting. Variable names should tell stories.
- **Test what matters**: Every user-facing feature must have tests.
- **No broken windows**: Fix lint errors, update dependencies, remove dead code.

## Technical Standards

### Code Style

**JavaScript:**

- ES6+ features when appropriate
- `const` by default, `let` when mutation needed, never `var`
- Pure functions preferred over mutations
- JSDoc comments for public APIs
- Single responsibility principle

**CSS/SCSS:**

- Mobile-first responsive design
- BEM naming convention for custom styles
- Variables for colors, spacing, typography
- Never use `!important` (except for true overrides)
- Sass features: variables, mixins, nesting (max 3 levels)

**Markdown:**

- ATX-style headers (`#` not underlines)
- Fenced code blocks with language tags
- Lists with consistent indentation
- Links with descriptive text

### File Organization

```text
Layouts → _layouts/       # Page templates
Includes → _includes/     # Reusable components
Content → _posts/         # Content (uses Jekyll's post system)
Styles → _sass/           # SCSS partials
Public → css/, js/        # Compiled/vendored assets
```

### Git Workflow

**Commits:**

- Present tense, imperative mood: "Add feature" not "Added feature"
- Keep commits atomic and focused
- Reference issues when relevant: "Fix login bug (#123)"

**Branches:**

- `main` is always deployable
- Feature branches: `feature/descriptive-name`
- Bug fixes: `fix/descriptive-name`
- Chores: `chore/descriptive-name`

**Pull Requests:**

- Clear title describing the change
- Description with context and testing notes
- Screenshots for UI changes
- All CI checks must pass
- Code review required before merge

## Quality Gates

Before any code ships, it must pass:

1. **Linting**: `npm run lint` — No errors, no warnings
2. **Formatting**: `npm run format:check` — Code is formatted consistently
3. **Tests**: `npm test` — All tests pass
4. **Build**: `npm run build` — Production build succeeds
5. **Manual testing**: Actually use the feature

## Architecture Decisions

### Why Jekyll?

- **Static-first philosophy**: No server complexity
- **GitHub Pages integration**: Free hosting, automatic deployment
- **Proven and stable**: Mature ecosystem, well-documented
- **Markdown-friendly**: Easy content management

### Why JSONEditor by Jos de Jong?

- **Battle-tested**: Used by thousands of projects
- **Feature-complete**: Tree view, code view, form view, validation
- **Well-maintained**: Active development and community
- **MIT license**: Compatible with our license

### Why SASS?

- **Variables and mixins**: DRY principles for styles
- **Nested rules**: Easier to organize complex styles
- **Widely supported**: Jekyll has built-in SASS support

## Development Workflow

### Starting a New Feature

1. **Understand the "why"**: What problem are we solving?
2. **Plan the solution**: Think before coding. Sketch if helpful.
3. **Write tests first**: TDD when possible.
4. **Implement incrementally**: Small commits, working code always.
5. **Refactor ruthlessly**: Make it work, make it right, make it fast.
6. **Document**: Update README, add JSDoc, write comments for complex logic.
7. **Review your own code**: Read the diff before pushing.

### Code Review Philosophy

- **Be kind**: Critique code, not people.
- **Be thorough**: Look for logic errors, edge cases, performance issues.
- **Be constructive**: Suggest improvements, don't just point out problems.
- **Be appreciative**: Acknowledge good work.

## Security Guidelines

- **Keep dependencies updated**: Run `npm audit` regularly
- **No secrets in code**: Use environment variables
- **Validate all inputs**: Even from trusted sources
- **HTTPS everywhere**: No mixed content
- **CSP headers**: Prevent XSS attacks
- **Dependency pinning**: Lock file versions

## Performance Budget

- **Initial page load**: < 2 seconds on 3G
- **Time to interactive**: < 3 seconds on 3G
- **JavaScript bundle**: < 500KB (minified + gzipped)
- **CSS bundle**: < 50KB (minified + gzipped)
- **Images**: Optimized, responsive, lazy-loaded

## Accessibility Requirements

- **Semantic HTML**: Use the right element for the job
- **Keyboard navigation**: Everything accessible via keyboard
- **Screen reader support**: ARIA labels where needed
- **Color contrast**: WCAG AA minimum (4.5:1 for text)
- **Focus indicators**: Clear visual focus states
- **Alt text**: Meaningful descriptions for images

## Testing Strategy

### What to Test

- **User interactions**: Editing JSON, switching views, error states
- **Edge cases**: Empty input, malformed JSON, large files
- **Browser compatibility**: Latest Chrome, Firefox, Safari, Edge
- **Accessibility**: Keyboard navigation, screen reader announcements

### What NOT to Test

- **Third-party libraries**: Trust JSONEditor's own tests
- **Styling pixels**: Visual regression testing is overkill for this project
- **Jekyll internals**: Trust the framework

## Documentation Philosophy

Good documentation is:

- **Accurate**: Always up-to-date with the code
- **Complete**: Covers installation, usage, contributing
- **Concise**: Respect the reader's time
- **Scannable**: Use headers, lists, code blocks
- **Friendly**: Write for humans, not robots

## When to Break the Rules

These are guidelines, not laws. Break them when:

- **User experience demands it**: UX > purity
- **Performance requires it**: Fast > beautiful code
- **Accessibility needs it**: A11y > aesthetics
- **Security mandates it**: Safety > convenience

But always document WHY you broke the rule.

## Questions to Ask

Before adding any feature, ask:

1. **Does this serve our users?** Not "would be cool" but "solves a real problem"
2. **Is it simple enough?** Can we make it simpler?
3. **Is it fast enough?** Will users notice slowness?
4. **Is it accessible?** Can everyone use it?
5. **Can we maintain it?** Is the complexity worth it?

If you can't answer "yes" to all five, reconsider.

## Continuous Improvement

This document evolves. If you find a better way:

1. Try it on a small feature
2. Document the results
3. Propose an update to this file
4. Get team consensus
5. Update standards

## Success Metrics

We're successful when:

- Users say "this just works"
- Developers say "this code is clean"
- Contributors say "I understand this project"
- Metrics show fast, accessible, reliable

---

## Final Thoughts

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
> — Antoine de Saint-Exupéry

Build with intention. Every line of code is a decision. Make it count.

**Updated**: 2025-01-16
**Maintained by**: duyetdev and contributors
