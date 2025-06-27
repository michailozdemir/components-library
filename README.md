# Component Library Monorepo

A modern, scalable React component library built with TypeScript, CVA (Class Variance Authority), and Radix UI. Components are published as individual npm packages for optimal bundle sizes and flexibility.

## 🏗️ Architecture Overview

This monorepo uses Turborepo for efficient builds and workspace management. Each component is a separate package that can be installed individually.

### Project Structure

```
component-library/
├── .github/
│   └── workflows/          # GitHub Actions workflows
│       ├── ci.yml         # Continuous Integration
│       ├── pr.yml         # Pull Request checks
│       └── release.yml    # Automated publishing
├── apps/
│   └── playground/        # Vite app for testing components
├── packages/
│   ├── ui-button/        # Button component package
│   └── ui-utils/         # Shared utilities (cva, clsx exports)
├── .changeset/           # Version management
├── eslint.config.mjs     # ESLint configuration
├── turbo.json           # Turborepo configuration
└── package.json         # Root workspace configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 10

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd component-library

# Install dependencies
npm install

# Build all packages
npm run build

# Start development
npm run dev
```

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start playground in watch mode
npm run build           # Build all packages
npm run clean           # Clean all build artifacts

# Quality Assurance
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run format          # Format code with Prettier
npm run format:check    # Check code formatting
npm run type-check      # Run TypeScript checks

# Publishing
npm run changeset       # Create a changeset
npm run version-packages # Version packages
npm run release         # Build and publish to npm
```

## 📦 Current Packages

### @michailozdemir/ui-button
A flexible button component with multiple variants built on Radix UI Slot.

```bash
npm install @michailozdemir/ui-button
```

```tsx
import { Button } from '@michailozdemir/ui-button';

<Button variant="destructive" size="lg">
  Delete Item
</Button>
```

### @michailozdemir/ui-utils
Shared utilities for building components.

```bash
npm install @michailozdemir/ui-utils
```

```tsx
import { cva, clsx } from '@michailozdemir/ui-utils';
```

## 🛠️ Adding New Components

### 1. Create Component Package

```bash
# Copy existing component as template
cp -r packages/ui-button packages/ui-[component-name]

# Update package.json
# - Change name to @michailozdemir/ui-[component-name]
# - Reset version to 0.0.0
# - Update dependencies as needed
```

### 2. Component Package Structure

```
packages/ui-[component]/
├── src/
│   ├── index.tsx           # Main exports
│   └── [Component].tsx     # Component implementation
├── package.json           # Package configuration
└── tsconfig.json          # TypeScript config
```

### 3. Example package.json Template

```json
{
  "name": "@michailozdemir/ui-[component]",
  "version": "0.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "sideEffects": false,
  "files": ["dist/**"],
  "scripts": {
    "build": "tsup src/index.tsx --format esm,cjs --dts --external react,react-dom",
    "dev": "tsup src/index.tsx --format esm,cjs --watch --dts --external react,react-dom",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist",
    "lint": "eslint src --ext .ts,.tsx",
    "type-check": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "dependencies": {
    "@michailozdemir/ui-utils": "0.1.0"
  }
}
```

### 4. Test in Playground

```bash
# Add to playground dependencies
cd apps/playground
npm install @michailozdemir/ui-[component]@file:../../packages/ui-[component]

# Import and test
import { Component } from '@michailozdemir/ui-[component]';
```

### 5. Create Changeset

```bash
npm run changeset
# Select the new package
# Choose "minor" for new features
# Write a clear description
```

## 🚀 CI/CD Workflows

### Continuous Integration (ci.yml)
- Runs on every push and PR
- Executes linting, type checking, building, and formatting checks
- Ensures code quality before merging

### Pull Request Checks (pr.yml)
- Validates builds work correctly
- Reminds developers to add changesets for user-facing changes
- Provides helpful feedback for contributors

### Release Workflow (release.yml)
- Automatically publishes packages when changes are merged to main
- Uses Changesets for proper semantic versioning
- Creates release PRs for coordinated updates

## 🛠️ Tech Stack

- **Turborepo**: Monorepo orchestration and caching
- **tsup**: Fast TypeScript bundler with zero config
- **Changesets**: Version management and changelogs
- **Vite**: Playground app bundler
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **GitHub Actions**: CI/CD automation

## 📚 Best Practices

### Component Development
- **Use CVA for variants**: Define component variants using class-variance-authority
- **Leverage Radix UI**: Use unstyled primitives for accessibility
- **Composition over configuration**: Use the `asChild` pattern for flexibility
- **Type safety**: Export component props interfaces

### Styling
- **Utility classes**: Use utility classes for styling
- **CVA variants**: Define variants using class-variance-authority
- **clsx for conditionals**: Use clsx for conditional class names
- **Consistent design tokens**: Use shared design system values

### Package Management
- **Peer dependencies**: React should always be a peer dependency
- **Minimal dependencies**: Keep component packages lightweight
- **Version management**: Use changesets for coordinated releases
- **Tree shaking**: Ensure proper ESM exports

## 🔄 Publishing Workflow

1. **Make changes** to components
2. **Run changeset**: `npm run changeset`
3. **Select packages** that have changed
4. **Choose version bump** (patch/minor/major)
5. **Write changelog** entry
6. **Commit and push** changeset file
7. **Create PR** and merge to main
8. **Automatic release** via GitHub Actions

## 🔍 Monitoring

- **GitHub Actions**: View workflow runs in the Actions tab
- **Status checks**: PRs must pass all checks before merging
- **Automated publishing**: Successful main branch builds trigger releases

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks: `npm run lint && npm run type-check && npm run build`
5. Run `npm run changeset` to document changes
6. Submit a pull request

## 📄 License

MIT © [Your Name]
