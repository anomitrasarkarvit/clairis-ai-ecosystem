import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Send, Bot, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface OllamaModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
}

const SYSTEM_PROMPT =
  "You are CLAIRIS, an advanced AI assistant. Please respond in markdown format using appropriate formatting like headings, lists, code blocks, and emphasis when helpful. Keep your responses clear and well-structured.";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [availableModels, setAvailableModels] = useState<OllamaModel[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch available models on component mount
  useEffect(() => {
    fetchAvailableModels();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchAvailableModels = async () => {
    try {
      const response = await fetch("http://82.112.238.215/api/tags");
      const data = await response.json();
      setAvailableModels(data.models || []);
      if (data.models && data.models.length > 0) {
        setSelectedModel(data.models[0].name);
      }
    } catch (error) {
      console.error("Failed to fetch models:", error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !selectedModel) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Build conversation context with system prompt
      const conversationHistory = messages
        .map(
          (msg) =>
            `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
        )
        .join("\n\n");

      const fullPrompt = `${SYSTEM_PROMPT}\n\nConversation history:\n${conversationHistory}\n\nUser: ${input.trim()}\n\nAssistant:`;

      const response = await fetch("http://82.112.238.215/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: selectedModel,
          prompt: fullPrompt,
          stream: true,
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter((line) => line.trim());

        for (const line of lines) {
          try {
            const data = JSON.parse(line);
            if (data.response) {
              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === assistantMessage.id
                    ? { ...msg, content: msg.content + data.response }
                    : msg
                )
              );
            }
          } catch (e) {
            // Skip invalid JSON lines
          }
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Sorry, I encountered an error. Please make sure Ollama is running on 82.112.238.215.",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/5 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to CLAIRIS
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-aurora-primary" />
                <h1 className="text-xl font-bold font-rajdhani">
                  CLAIRIS Chat
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  {availableModels.map((model) => (
                    <SelectItem key={model.name} value={model.name}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <Bot className="w-12 h-12 text-aurora-primary mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Welcome to CLAIRIS
                </h2>
                <p className="text-muted-foreground">
                  Start a conversation with your AI assistant. Ask me anything!
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-aurora-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-aurora-primary" />
                  </div>
                )}

                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-aurora-primary text-primary-foreground ml-auto"
                      : "bg-card/50 border border-border/50"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:font-rajdhani prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  )}
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-4 justify-start">
                <div className="w-8 h-8 rounded-full bg-aurora-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-aurora-primary animate-pulse" />
                </div>
                <div className="bg-card/50 border border-border/50 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-aurora-primary/60 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-aurora-primary/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-aurora-primary/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t border-border/50 bg-card/5 backdrop-blur-md p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-background/50 border-border/50"
                disabled={isLoading || !selectedModel}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !input.trim() || !selectedModel}
                size="icon"
                className="bg-aurora-primary hover:bg-aurora-primary/90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            {!selectedModel && (
              <p className="text-sm text-muted-foreground mt-2">
                Please select a model to start chatting
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
