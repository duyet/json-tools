# Makefile for JSON Tools
# Common development tasks

.PHONY: help install start build clean test lint format check deploy

# Default target
help:
	@echo "JSON Tools - Available Commands:"
	@echo ""
	@echo "  make install      Install all dependencies (Ruby + Node)"
	@echo "  make start        Start development server with live reload"
	@echo "  make build        Build the Jekyll site for production"
	@echo "  make clean        Clean build artifacts"
	@echo "  make test         Run all tests"
	@echo "  make lint         Run all linters"
	@echo "  make format       Format all code"
	@echo "  make check        Run lint + test + build (full check)"
	@echo "  make deploy       Build and deploy to GitHub Pages"
	@echo ""

# Install dependencies
install:
	@echo "Installing Ruby dependencies..."
	bundle install
	@echo "Installing Node dependencies..."
	npm install
	@echo "✓ All dependencies installed!"

# Start development server
start:
	@echo "Starting development server..."
	npm start

# Build for production
build:
	@echo "Building Jekyll site..."
	npm run build
	@echo "✓ Build complete! Output in _site/"

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	bundle exec jekyll clean
	rm -rf _site .sass-cache .jekyll-cache .jekyll-metadata
	@echo "✓ Clean complete!"

# Run tests
test:
	@echo "Running tests..."
	npm test

# Run linters
lint:
	@echo "Running linters..."
	npm run lint

# Format code
format:
	@echo "Formatting code..."
	npm run format

# Full check (lint + test + build)
check: lint test build
	@echo "✓ All checks passed!"

# Deploy to GitHub Pages
deploy: check
	@echo "Deploying to GitHub Pages..."
	@echo "Push to main branch to trigger GitHub Actions deployment"
	@echo "Or run: git push origin main"
