"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Copy, Download, ThumbsUp, ThumbsDown, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "agent" | "user"
  content: string
  timestamp: string
}

export default function ChatInterface() {
  const [input, setInput] = useState("")
  const [messages] = useState<Message[]>([
    {
      role: "agent",
      content: "Hello, I am a generative AI agent. How may I assist you today?",
      timestamp: "4:08:28 PM",
    },
    {
      role: "user",
      content: "Hi, I'd like to check my bill.",
      timestamp: "4:08:37 PM",
    },
    {
      role: "agent",
      content:
        "Please hold for a second.\n\nOk, I can help you with that\n\nI'm pulling up your current bill information\n\nYour current bill is $150, and it is due on August 31, 2024.\n\nIf you need more details, feel free to ask!",
      timestamp: "4:08:37 PM",
    },
  ])

  return (
    <div className="flex-1 flex flex-col bg-blue-950/30">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={cn("flex gap-2 max-w-[80%]", message.role === "user" && "ml-auto")}>
              {message.role === "agent" && <div className="h-8 w-8 rounded-full bg-blue-500 flex-shrink-0 blue-glow" />}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-100">
                    {message.role === "agent" ? "GenerativeAgent" : "G5"}
                  </span>
                  <span className="text-sm text-blue-300">{message.timestamp}</span>
                </div>
                <div
                  className={cn(
                    "p-3 rounded-lg",
                    message.role === "agent"
                      ? "bg-blue-900/50 border border-blue-700"
                      : "bg-blue-600/30 border border-blue-500",
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap text-blue-50">{message.content}</p>
                </div>
                {message.role === "agent" && (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-blue-800 bg-blue-900/20">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[44px] max-h-32 bg-blue-950/50 border-blue-800 text-blue-50 placeholder:text-blue-400/70"
          />
          <Button className="px-8 bg-blue-600 hover:bg-blue-500 text-white">
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}

