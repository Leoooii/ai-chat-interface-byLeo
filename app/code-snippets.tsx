"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeEditor from "./code-editor"

const SAMPLE_SNIPPETS = [
  {
    id: "snippet1",
    filename: "chat-component.tsx",
    language: "typescript",
    code: `import { useState } from "react";

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");
      // Call API to get AI response
    }
  };

  return (
    <div>
      <div className="messages">...</div>
    </div>
  );
}`,
  },
  {
    id: "snippet2",
    filename: "api-route.ts",
    language: "typescript",
    code: `import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const result = streamText({
    model: openai('gpt-4o'),
    messages,
  });
  
  return result.toDataStreamResponse();
}`,
  },
  {
    id: "snippet3",
    filename: "styles.css",
    language: "css",
    code: `.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1a1a1a;
}

.message {
  margin: 8px;
  padding: 12px;
  border-radius: 8px;
}

.message.user {
  background-color: #2563eb;
  color: white;
  align-self: flex-end;
}

.message.bot {
  background-color: #374151;
  color: white;
  align-self: flex-start;
}`,
  },
]

export default function CodeSnippets() {
  const [activeTab, setActiveTab] = useState("snippet1")

  const activeSnippet = SAMPLE_SNIPPETS.find((snippet) => snippet.id === activeTab) || SAMPLE_SNIPPETS[0]

  return (
    <div className="h-full flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <div className="border-b border-border">
          <TabsList className="bg-transparent h-14 p-0 px-4">
            {SAMPLE_SNIPPETS.map((snippet) => (
              <TabsTrigger
                key={snippet.id}
                value={snippet.id}
                className="data-[state=active]:bg-blue-800/30 data-[state=active]:shadow-none rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 px-4 py-2 text-blue-200"
              >
                {snippet.filename}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="flex-1">
          {SAMPLE_SNIPPETS.map((snippet) => (
            <TabsContent key={snippet.id} value={snippet.id} className="h-full m-0 p-0">
              <CodeEditor code={snippet.code} language={snippet.language} filename={snippet.filename} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}

