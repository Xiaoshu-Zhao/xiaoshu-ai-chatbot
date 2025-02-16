import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'chat-model-small';

export const myProvider = customProvider({
  languageModels: {
    'chat-model-small': openai('gpt-4o-mini'),
    'chat-model-large': openai('gpt-4o-2024-11-20'),
    'chat-model-reasoning': openai('o3-mini-2025-01-31'),
    'title-model': openai('gpt-4-turbo'),
    'block-model': openai('gpt-4o-mini'),
  },
  imageModels: {
    'small-model': openai.image('dall-e-2'),
    'large-model': openai.image('dall-e-3'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model-small',
    name: 'gpt-4o-mini',
    description: '小模型用于快速、轻量级的任务',
  },
  {
    id: 'chat-model-large',
    name: 'gpt-4o',
    description: 'openai 的门面模型，适用于更加复杂的场景',
  },
  {
    id: 'chat-model-reasoning',
    name: 'o3',
    description: '当前最强的推理模型，用于解决复杂的，多步骤的逻辑推理问题',
  },
];
