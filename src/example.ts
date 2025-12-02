/**
 * Example: Testing Satori AI SDK with Memory
 * 
 * This example demonstrates basic AI generation with automatic memory storage
 * and retrieval using the Satori AI SDK.
 */

import { satori } from '@satori-sh/aisdk';
import { generateText } from 'ai';

async function main() {
  // Create a Satori-enhanced model with memory
  const model = satori('openai:gpt-4o');

  const result1 = await generateText({
    model,
    prompt: 'My name is Alice and I love hiking.',
  });

  console.log('Assistant:', result1.text);
  const metadata1 = (result1 as any).response?.providerMetadata?.satori || (result1 as any).providerMetadata?.satori;
  console.log('Memory Layer ID:', metadata1?.memoryLayerId);
  console.log('Memories Stored:', metadata1?.memoriesStored);
  console.log();

  console.log('📝 Second conversation (should remember)...');
  const result2 = await generateText({
    model,
    prompt: 'What is my name and what do I love?',
  });

  console.log('Assistant:', result2.text);
  const metadata2 = (result2 as any).response?.providerMetadata?.satori || (result2 as any).providerMetadata?.satori;
  console.log('Memory Layer ID:', metadata2?.memoryLayerId);
  console.log('Memories Retrieved:', metadata2?.memoriesRetrieved);
  console.log();

  console.log('📝 Third conversation (adding more context)...');
  const result3 = await generateText({
    model,
    prompt: 'I also live in Seattle and work as a software engineer.',
  });

  console.log('Assistant:', result3.text);
  const metadata3 = (result3 as any).response?.providerMetadata?.satori || (result3 as any).providerMetadata?.satori;
  console.log('Memories Retrieved:', metadata3?.memoriesRetrieved);
  console.log('Memories Stored:', metadata3?.memoriesStored);
  console.log();

  console.log('📝 Final conversation (testing full memory)...');
  const result4 = await generateText({
    model,
    prompt: 'Can you summarize everything you know about me?',
  });

  console.log('Assistant:', result4.text);
  const metadata4 = (result4 as any).response?.providerMetadata?.satori || (result4 as any).providerMetadata?.satori;
  console.log('Memories Retrieved:', metadata4?.memoriesRetrieved);
  console.log();

  console.log('✅ Test complete!');
}

main().catch(console.error);