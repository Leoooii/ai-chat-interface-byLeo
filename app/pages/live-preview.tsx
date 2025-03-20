"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code, RefreshCw, ExternalLink, MessageSquare } from "lucide-react"

export default function LivePreviewPage() {
  // Sample code to display
  const sampleCode = `import { useState } from "react";

export default function ChatInterface() {
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
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`

  return (
    <div className="p-6 bg-blue-950/30 min-h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Live Preview</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="border-blue-800 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-500">
            <ExternalLink className="h-4 w-4 mr-2" />
            Open in New Tab
          </Button>
        </div>
      </div>

      <Tabs defaultValue="preview" className="flex-1 flex flex-col">
        <div className="border-b border-blue-800 mb-4">
          <TabsList className="bg-transparent h-10">
            <TabsTrigger value="preview" className="data-[state=active]:bg-blue-700">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="data-[state=active]:bg-blue-700">
              <Code className="h-4 w-4 mr-2" />
              Code
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent
          value="preview"
          className="flex-1 mt-0 rounded-md border border-blue-800 bg-blue-900/20 overflow-hidden"
        >
          <div className="p-4 h-full">
            <div className="bg-blue-950 rounded-md h-full flex items-center justify-center">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-blue-100 mb-2">AI Chat Interface</h2>
                <p className="text-blue-300 max-w-md mx-auto mb-4">
                  This is a live preview of your AI chat interface. You can interact with it to test functionality.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-500">Start Conversation</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="flex-1 mt-0">
          <div className="rounded-md border border-blue-800 bg-[#0c1425] overflow-hidden h-full">
            <div className="flex h-full">
              <div className="py-4 px-2 text-right text-blue-500 bg-[#0f172a] select-none w-12">
                {Array.from({ length: sampleCode.split("\n").length }).map((_, i) => (
                  <div key={i} className="leading-5">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="py-4 px-4 overflow-auto flex-1">
                <pre className="leading-5 text-blue-100">
                  <code className="language-typescript">
                    {sampleCode.split("\n").map((line, index) => {
                      // Simple syntax highlighting with regex
                      const highlightedLine = line
                        .replace(
                          /import|from|const|function|return|if/g,
                          (match) => `<span class="text-blue-400">${match}</span>`,
                        )
                        .replace(/\b([A-Za-z0-9_]+)\(/g, (_, name) => `<span class="text-[#dcdcaa]">${name}</span>(`)
                        .replace(
                          /\b(useState|useEffect|useRef)\b/g,
                          (match) => `<span class="text-[#4ec9b0]">${match}</span>`,
                        )
                        .replace(/"([^"]*)"/g, (match) => `<span class="text-[#ce9178]">${match}</span>`)
                        .replace(/\/\/(.*)/g, (match) => `<span class="text-[#676e95]">${match}</span>`)
                        .replace(/\b(div|span|button)\b/g, (match) => `<span class="text-[#4ec9b0]">${match}</span>`)
                        .replace(
                          /\b(className|onClick|onChange)\b/g,
                          (match) => `<span class="text-[#9cdcfe]">${match}</span>`,
                        )
                        .replace(/[{}]/g, (match) => `<span class="text-foreground">${match}</span>`)
                        .replace(/&lt;|&gt;/g, (match) => `<span class="text-[#808080]">${match}</span>`)

                      return <div key={index} dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                    })}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

