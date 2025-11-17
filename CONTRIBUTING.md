# Contributing to JSON Tools

First off, thank you for considering contributing to JSON Tools! It's people like you that make this project better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Submitting Changes](#submitting-changes)
- [Style Guidelines](#style-guidelines)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by respect, kindness, and professionalism. By participating, you are expected to uphold these values. Please report unacceptable behavior to [me@duyetdev.com](mailto:me@duyetdev.com).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the [existing issues](https://github.com/duyetdev/json-tools/issues) to avoid duplicates.

When creating a bug report, include:

- **Clear title**: Describe the problem concisely
- **Steps to reproduce**: Detailed steps to reproduce the issue
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**:
  - Browser name and version
  - Operating system
  - Screen size (for responsive issues)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

- **Check existing feature requests** to avoid duplicates
- **Provide a clear use case**: Why is this feature needed?
- **Describe the solution**: How should it work?
- **Consider alternatives**: Are there other ways to solve this?
- **Think about impact**: How does this affect existing users?

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues, perfect for first-timers
- `help wanted` - Issues where we'd love community input
- `documentation` - Improve our docs (always appreciated!)

### Pull Requests

We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`
2. Add tests if you've added code that should be tested
3. Ensure the test suite passes
4. Make sure your code lints
5. Issue that pull request!

## Development Setup

### Prerequisites

Ensure you have:

- Ruby >= 3.0.0
- Node.js >= 18.0.0
- Git

### Initial Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:

```bash
git clone https://github.com/YOUR-USERNAME/json-tools.git
cd json-tools
```

3. **Add upstream remote**:

```bash
git remote add upstream https://github.com/duyetdev/json-tools.git
```

4. **Install dependencies**:

```bash
# Ruby dependencies
bundle install

# Node.js dependencies
npm install
```

5. **Run the development server**:

```bash
npm start
```

Visit `http://localhost:4000` to see your local version.

## Making Changes

### Branch Naming

Create a descriptive branch name:

- Feature: `feature/add-dark-mode`
- Bug fix: `fix/json-validation-error`
- Documentation: `docs/improve-readme`
- Refactor: `refactor/cleanup-css`

### Commit Messages

Follow these guidelines:

- Use the present tense: "Add feature" not "Added feature"
- Use the imperative mood: "Move cursor to..." not "Moves cursor to..."
- Limit the first line to 72 characters
- Reference issues: "Fix login bug (#123)"

Examples:

```bash
✅ Good:
- Add dark mode toggle to settings
- Fix JSON validation for nested arrays
- Update README with installation steps

❌ Bad:
- added stuff
- fix
- Updated some files
```

### Code Changes

1. **Make your changes** in your feature branch

2. **Test locally**:

```bash
# Run linters
npm run lint

# Run tests
npm test

# Build the site
npm run build
```

3. **Keep commits atomic**: One logical change per commit

4. **Write tests**: If adding functionality, include tests

## Submitting Changes

### Before Submitting

Ensure:

- [ ] Code follows our [style guidelines](#style-guidelines)
- [ ] All tests pass (`npm test`)
- [ ] No linting errors (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Documentation is updated (if needed)
- [ ] You've tested in major browsers (Chrome, Firefox, Safari, Edge)

### Pull Request Process

1. **Update your branch** with latest upstream:

```bash
git fetch upstream
git rebase upstream/main
```

2. **Push to your fork**:

```bash
git push origin your-branch-name
```

3. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description explaining WHAT and WHY
   - Reference to related issues: "Closes #123"
   - Screenshots for UI changes
   - Testing notes

4. **Respond to feedback**: Address review comments promptly

5. **Squash commits if requested**: Keep history clean

### Pull Request Template

```markdown
## Description

Brief description of changes

## Motivation and Context

Why is this change needed? What problem does it solve?

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to change)
- [ ] Documentation update

## How Has This Been Tested?

Describe the tests you ran and browsers you tested in.

## Screenshots (if applicable)

## Checklist

- [ ] My code follows the code style of this project
- [ ] I have updated the documentation accordingly
- [ ] I have read the **CONTRIBUTING** document
- [ ] I have added tests to cover my changes
- [ ] All new and existing tests passed
```

## Style Guidelines

### JavaScript Style

Follow the ESLint configuration in `.eslintrc.json`:

```javascript
// ✅ Good
const getUserData = (userId) => {
  if (!userId) {
    throw new Error('User ID is required');
  }
  return fetchUser(userId);
};

// ❌ Bad
var get_user_data = function (userId) {
  return fetchUser(userId);
};
```

### CSS/SCSS Style

Follow the Stylelint configuration in `.stylelintrc.json`:

```scss
// ✅ Good
.json-editor {
  display: flex;
  padding: $spacing-md;
  background-color: $color-background;

  &__header {
    font-size: $font-size-lg;
  }
}

// ❌ Bad
.jsonEditor {
  DISPLAY: FLEX;
  padding: 20px;
}
```

### Markdown Style

- Use ATX-style headers (`#` not underlines)
- Use fenced code blocks with language tags
- Keep line length reasonable (120 chars)
- Use reference-style links for readability

## Testing Guidelines

### Writing Tests

Tests should be:

- **Clear**: Describe what is being tested
- **Isolated**: Each test independent of others
- **Fast**: Run quickly
- **Reliable**: Same result every time

Example:

```javascript
describe('JSON Parser', () => {
  it('should parse valid JSON', () => {
    const json = '{"key": "value"}';
    const result = parseJSON(json);
    expect(result).toEqual({ key: 'value' });
  });

  it('should throw error for invalid JSON', () => {
    const invalidJSON = '{key: value}';
    expect(() => parseJSON(invalidJSON)).toThrow();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [JSONEditor API](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Writing Good Commit Messages](https://chris.beams.io/posts/git-commit/)

## Questions?

Feel free to:

- Open an issue with the `question` label
- Email the maintainer: [me@duyetdev.com](mailto:me@duyetdev.com)
- Start a discussion in [GitHub Discussions](https://github.com/duyetdev/json-tools/discussions)

## Recognition

Contributors are recognized in:

- GitHub's contributor graph
- Release notes for significant contributions
- The project's README (for major features)

Thank you for contributing! 🎉
