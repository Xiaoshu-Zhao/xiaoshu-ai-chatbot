import { Message as BaseMessage } from 'ai';

export interface Citation {
  url: string;
  title?: string;
}

export interface Message extends BaseMessage {
  citations?: Citation[];
  reasoning?: string;
} 