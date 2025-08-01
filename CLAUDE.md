# CLAUDE.md - Ethereum Follow Protocol Documentation

## Overview
This is the documentation repository for the Ethereum Follow Protocol (EFP), an onchain social graph protocol for Ethereum accounts. The repository contains comprehensive technical documentation built with Astro and Starlight.

## Tech Stack
- **Framework**: Astro (v4.2.4) with Starlight documentation theme
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom styles
- **Package Manager**: Bun (v1.0.25)
- **Build Tool**: Astro build system
- **Deployment**: Static site generation

## Key Scripts
- `bun run dev` - Start development server
- `bun run build` - Build production site
- `bun run preview` - Preview built site
- `bun run lint` - Run ESLint with auto-fix
- `bun run format` - Format code with Prettier
- `bun run typecheck` - Run TypeScript type checking
- `bun run clean` - Clean build artifacts and dependencies

## Repository Structure

### Core Configuration
- `astro.config.ts` - Main Astro configuration with Starlight setup
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS configuration

### Content Structure
- `src/content/docs/` - All documentation MDX files
- `src/content/config.ts` - Content collection configuration
- `public/` - Static assets (images, logos, etc.)

### Documentation Sections

#### Introduction (`src/content/docs/intro/`)
- Core protocol concepts
- EFP List NFT system
- Roles (Owner, Manager, User)
- Tags and social graph mechanics

#### Specification (`src/content/docs/design/`)
- `list-registry.mdx` - ERC-721 List Registry contract
- `roles.mdx` - Role definitions and permissions
- `account-metadata.mdx` - Account metadata system
- `list-metadata.mdx` - List metadata structure
- `list-storage-location.mdx` - Storage location specifications
- `list-records.mdx` - List record structure
- `tags.mdx` - Tagging system (block, mute, top8, custom)
- `list-ops.mdx` - List operations structure
- `glossary.mdx` - Protocol terminology

#### Production (`src/content/docs/production/`)
- `deployments.mdx` - Smart contract addresses (Base, OP Mainnet, Ethereum)
- `interpreting-state.mdx` - Data interpretation guide
- `multisig.mdx` - Multisig wallet information
- `infra.mdx` - Infrastructure overview
- `silo.mdx` - Railway deployment template
- `follow-bot.mdx` - Telegram bot functionality
- `emergency-response.mdx` - Emergency procedures

#### Additional Content
- `faq.mdx` - Frequently asked questions
- `bugbounty.mdx` - Bug bounty program
- `translationbounty.mdx` - Translation bounty program
- `llmstxt.mdx` - LLM-friendly protocol documentation
- `playground/` - Interactive examples

### Design Components
- `design-components/colors.mdx` - Color specifications
- `design-components/logos.mdx` - Logo assets and usage

## Key Features

### Protocol Concepts
- **EFP List NFT**: Free-to-mint NFTs representing social lists
- **Three-Role System**: Owner, Manager, User with distinct permissions
- **Multi-Chain Support**: Base, OP Mainnet, Ethereum deployments
- **Tag System**: Standard tags (block, mute, top8) + custom tags
- **Primary List**: Account's designated main social graph

### Technical Infrastructure
- **Smart Contracts**: ERC-721 registry, list records, account metadata
- **API**: Comprehensive REST API via ethidentitykit.com
- **Indexer**: Open-source indexing system
- **Multi-Chain**: L1 and L2 deployments

### Content Management
- **MDX Support**: Rich documentation with embedded components
- **Version Control**: Git-based documentation workflow
- **Starlight**: Advanced documentation features (search, navigation, theming)

## Development Workflow

### Adding Documentation
1. Create MDX files in appropriate `src/content/docs/` subdirectory
2. Update `astro.config.ts` sidebar configuration if needed
3. Use frontmatter for page metadata
4. Test locally with `bun run dev`

### Code Quality
- **ESLint**: Configured with TypeScript, Astro, and MDX support
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Strict type checking
- **Link Validation**: Automated internal link checking

### Assets
- **Public Directory**: Static assets accessible at root
- **Logo Assets**: Multiple formats (PNG, SVG) for different use cases
- **Images**: Protocol diagrams, screenshots, QR codes

## External Resources

### API Documentation
- Comprehensive API docs at ethidentitykit.com
- Endpoints for users, lists, stats, leaderboards
- Real-time data via indexer

### Related Repositories
- `app` - Main EFP web application
- `api` - Public API service
- `contracts` - Smart contract implementations
- `indexer` - Data indexing service
- `services` - Backend services
- `follow-bot` - Telegram bot

### Community
- **Discord**: https://discord.efp.app
- **Twitter**: https://x.com/efp
- **Forum**: https://forum.ethfollow.xyz/

## Deployment Information

### Production Contracts
- **Base**: Full deployment with all contracts
- **OP Mainnet**: List Records only
- **Ethereum**: List Records only

### Development Environment
- **Base Sepolia**: Full testnet deployment
- **OP Sepolia**: List Records testnet
- **Ethereum Sepolia**: List Records testnet

## Security Considerations
- Bug bounty program active
- Emergency response procedures documented
- Multisig wallet governance
- Open-source codebase for transparency

## Contributing
- Simple contribution guidelines: "good vibes only"
- Open to community contributions
- Translation bounty program available
- GitHub-based workflow with PR previews

This documentation serves as the canonical technical reference for the Ethereum Follow Protocol, providing comprehensive coverage of the protocol's design, implementation, and operational aspects.