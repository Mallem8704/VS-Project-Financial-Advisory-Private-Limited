export type AiRole = "system" | "user" | "assistant";

export interface AiMessage {
  role: AiRole;
  content: string;
}

export interface AiGenerateOptions {
  temperature?: number;
  maxTokens?: number;
  systemPrompt?: string;
  jsonMode?: boolean;
}

export interface AiResponse {
  content: string;
  provider: "gemini" | "openai" | "rule_based_fallback";
  model: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface IAiProvider {
  name: string;
  generateText(messages: AiMessage[], options?: AiGenerateOptions): Promise<AiResponse>;
  generateStructuredJson<T>(messages: AiMessage[], schemaName: string, options?: AiGenerateOptions): Promise<T>;
}
