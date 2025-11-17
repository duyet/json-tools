# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Comprehensive development infrastructure with linting, testing, and CI/CD
- GitHub Actions workflows for continuous integration and deployment
- Jest testing framework with sample tests
- ESLint, Stylelint, Prettier, and markdownlint for code quality
- Husky pre-commit hooks with lint-staged
- Comprehensive documentation (README, CLAUDE.md, CONTRIBUTING.md)
- SEO optimization with Open Graph and Twitter Cards
- Accessibility features (ARIA labels, semantic HTML, keyboard navigation)
- Modern homepage with hero section and feature showcase
- Robots.txt for search engine crawling
- Editor configuration files (.editorconfig, .nvmrc)

### Changed
- Refactored parser page to separate concerns (CSS and JavaScript)
- Updated Jekyll configuration with better SEO metadata
- Improved About page with detailed project information
- Enhanced head.html with comprehensive meta tags and structured data

### Fixed
- Typo in variable name: jsonVoewOptions → jsonViewOptions
- Hardcoded URLs now use Jekyll variables
- HTTP URLs converted to HTTPS

### Removed
- Build artifacts from version control (_site/, .sass-cache/, .jekyll-metadata)
- Inline styles from parser.markdown

## [1.0.0] - 2015-12-01

### Added
- Initial release
- Basic JSON parser with JSONEditor integration
- Jekyll-based static site
- Simple documentation

[Unreleased]: https://github.com/duyetdev/json-tools/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/duyetdev/json-tools/releases/tag/v1.0.0
