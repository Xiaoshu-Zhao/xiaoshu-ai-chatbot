import { openai } from '@ai-sdk/openai';
import { fireworks } from '@ai-sdk/fireworks';
import { perplexity } from '@ai-sdk/perplexity';
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
    'chat-model-reasoning': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'chat-model-online': perplexity('pplx-70b-online'),
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
    description: 'openai 的明星模型，适用于更加复杂的场景',
  },
  {
    id: 'chat-model-reasoning',
    name: 'deepseek-r1',
    description: '强大的推理模型，用于解决复杂的，多步骤的逻辑推理问题',
  },
  {
    id: 'chat-model-online',
    name: 'pplx-70b-online',
    description: '联网搜索模型，可以获取最新的在线信息',
  },
];
