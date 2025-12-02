# Satori AI SDK Testing

This directory is for testing the local Satori AI SDK library using `bun link`.

## Setup

### 1. Link the local Satori SDK

```bash
# From the satori oss directory
cd ~/git/satori/oss
bun link

# From this test directory  
cd ~/git/memory
bun link @satori-sh/aisdk
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your actual API keys:

```env
OPENAI_API_KEY=your_openai_api_key_here
ANTHROPIC_API_KEY=your_anthropic_api_key_here  
SATORI_API_KEY=your_satori_api_key_here
```

## Usage

Run the example:

```bash
bun run src/example.ts
```

Or use the npm script:

```bash
bun test
```

## What it tests

The example demonstrates:
- Creating a Satori memory-enhanced model
- Basic AI generation with automatic memory storage
- Memory persistence across conversations
- Retrieval of stored memories in context

## Troubleshooting

### Bun link issues
If linking fails, make sure you're in the correct directories:
- `~/git/satori/oss` for the source package
- `~/git/memory` for the test package

### API key errors
Ensure your `.env` file has the required keys:
- `OPENAI_API_KEY` for OpenAI models
- `ANTHROPIC_API_KEY` for Anthropic models  
- `SATORI_API_KEY` for Satori memory API

### Memory API connection
By default, the memory API connects to `http://localhost:8000`. 
You can change this with `SATORI_MEMORY_API_URL` in your `.env`.