"use client"

import { Copy, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeEditorProps {
  code?: string
  language?: string
  filename?: string
}

export default function CodeEditor({ code, language = "typescript", filename = "example.tsx" }: CodeEditorProps) {
  // Default code if none provided
  const displayCode =
    code ||
    `import { useState } from "react";

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
}`

  // Generate line numbers based on code lines
  const lineCount = displayCode.split("\n").length

  return (
    <div className="h-full flex flex-col">
      <div className="h-14 border-b border-blue-800 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
          <h2 className="font-medium text-blue-100">{filename}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-300 hover:text-blue-100 hover:bg-blue-800/30">
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-300 hover:text-blue-100 hover:bg-blue-800/30">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="font-mono text-sm relative">
          <div className="flex">
            {/* Line numbers */}
            <div className="py-4 px-2 text-right text-blue-500 bg-[#0f172a] select-none w-12">
              {Array.from({ length: lineCount }).map((_, i) => (
                <div key={i} className="leading-5">
                  {i + 1}
                </div>
              ))}
            </div>
            {/* Code content */}
            <div className="py-4 px-4 overflow-x-auto flex-1 bg-[#0c1425]">
              <pre className="leading-5 text-blue-100">
                {displayCode.split("\n").map((line, index) => {
                  // Simple syntax highlighting
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
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

