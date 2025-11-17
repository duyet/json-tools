# JSON Tools

A beautiful, fast, and user-friendly web-based JSON parser and editor built with [Jekyll](https://jekyllrb.com/) and [JSONEditor](https://github.com/josdejong/jsoneditor) by Jos de Jong.

## Features

- **Dual-pane interface** - Edit JSON in code mode on the left, view in multiple formats on the right
- **Multiple view modes** - Tree, view, form, code, and text modes
- **Real-time validation** - Instant JSON validation as you type
- **Syntax highlighting** - Beautiful code highlighting for better readability
- **Error handling** - Clear error messages when JSON is invalid
- **Responsive design** - Works seamlessly on desktop and mobile devices
- **Zero dependencies** - Runs entirely in your browser, no server required
- **Fast and lightweight** - Static site for blazing-fast performance

## Live Demo

Visit the live demo at: [https://duyetdev.github.io/json-tools](https://duyetdev.github.io/json-tools)

## Development

### Prerequisites

- Ruby >= 3.0.0
- Node.js >= 18.0.0
- Bundler (`gem install bundler`)
- npm >= 9.0.0

### Installation

1. Clone the repository:

```bash
git clone https://github.com/duyetdev/json-tools.git
cd json-tools
```

2. Install Ruby dependencies:

```bash
bundle install
```

3. Install Node.js dependencies:

```bash
npm install
```

### Running Locally

Start the development server with live reload:

```bash
npm start
```

The site will be available at `http://localhost:4000`

Alternatively, use Jekyll directly:

```bash
bundle exec jekyll serve --livereload
```

### Building for Production

Build the static site:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```text
json-tools/
├── _includes/          # Reusable HTML components
│   ├── head.html       # HTML head section
│   ├── header.html     # Site header
│   ├── footer.html     # Site footer
│   └── ga.html         # Analytics tracking
├── _layouts/           # Page templates
│   ├── default.html    # Base layout
│   ├── page.html       # Page layout
│   └── post.html       # Post layout
├── _posts/             # Jekyll posts (includes the parser tool)
│   └── 2015-12-01-parser.markdown
├── _sass/              # SASS partials
│   ├── _base.scss      # Base styles
│   ├── _layout.scss    # Layout styles
│   └── _syntax-highlighting.scss
├── css/                # Stylesheets
│   ├── main.scss       # Main SASS entry
│   └── jsoneditor.*    # JSONEditor styles
├── js/                 # JavaScript files
│   └── jsoneditor.*    # JSONEditor library
├── _config.yml         # Jekyll configuration
├── Gemfile             # Ruby dependencies
├── package.json        # Node.js dependencies
└── index.html          # Home page
```

## Code Quality

This project uses modern tooling to ensure code quality:

### Linting

```bash
# Lint all code
npm run lint

# Lint JavaScript
npm run lint:js

# Lint CSS/SCSS
npm run lint:css

# Lint Markdown
npm run lint:md
```

### Formatting

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Updating Dependencies

### Update JSONEditor Library

To update the JSONEditor library to the latest version:

```bash
npm run update:jsoneditor
```

This will:

1. Install the latest version from npm
2. Copy the distribution files to the correct locations
3. Update both minified and unminified versions

### Update Ruby Dependencies

```bash
bundle update
```

### Update Node.js Dependencies

```bash
npm update
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linters and tests (`npm run lint && npm test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Technology Stack

- **Static Site Generator**: Jekyll 4.3+
- **JSON Editor**: JSONEditor 10.4+
- **CSS Preprocessor**: SASS/SCSS
- **Linting**: ESLint, Stylelint, markdownlint
- **Formatting**: Prettier
- **Testing**: Jest
- **CI/CD**: GitHub Actions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Jos de Jong](https://github.com/josdejong) for the amazing [JSONEditor](https://github.com/josdejong/jsoneditor) library
- [Jekyll](https://jekyllrb.com/) team for the static site generator
- All contributors who have helped improve this project

## Support

- **Issues**: [GitHub Issues](https://github.com/duyetdev/json-tools/issues)
- **Discussions**: [GitHub Discussions](https://github.com/duyetdev/json-tools/discussions)
- **Email**: [me@duyetdev.com](mailto:me@duyetdev.com)

## Links

- [Live Demo](https://duyetdev.github.io/json-tools)
- [JSONEditor Documentation](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md)
- [Jekyll Documentation](https://jekyllrb.com/docs/)

---

Made with ❤️ by [duyetdev](https://github.com/duyetdev)
