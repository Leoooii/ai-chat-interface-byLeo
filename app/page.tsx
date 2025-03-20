"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutGrid,
  Settings,
  Users,
  SettingsIcon as Functions,
  Layers,
  Eye,
  BarChart2,
  MessageSquare,
} from "lucide-react"
import CodeSnippets from "./code-snippets"
import ResizablePanel from "./resizable"
import Router from "./router"

export default function Page() {
  const { currentPage, setCurrentPage, renderPage } = Router()

  return (
    <div className="flex h-screen bg-background dark">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-blue-950/80">
        <div className="p-4 border-b border-blue-800">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-blue-500" />
            <span className="font-semibold text-blue-100">GenerativeAgent</span>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-64px)]">
          <div className="space-y-4 p-4">
            <nav className="space-y-2">
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "chat" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("chat")}
              >
                <MessageSquare className="mr-2 h-4 w-4 text-blue-400" />
                AI Chat
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "tasks" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("tasks")}
              >
                <LayoutGrid className="mr-2 h-4 w-4 text-blue-400" />
                Tasks
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "conversations" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("conversations")}
              >
                <MessageSquare className="mr-2 h-4 w-4 text-blue-400" />
                Conversation History
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "functions" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("functions")}
              >
                <Functions className="mr-2 h-4 w-4 text-blue-400" />
                Functions
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "integrations" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("integrations")}
              >
                <Layers className="mr-2 h-4 w-4 text-blue-400" />
                Integrations
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "users" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("users")}
              >
                <Users className="mr-2 h-4 w-4 text-blue-400" />
                Users
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "settings" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("settings")}
              >
                <Settings className="mr-2 h-4 w-4 text-blue-400" />
                Settings
              </Button>
            </nav>
            <div className="pt-4 border-t border-blue-800">
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "preview" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("preview")}
              >
                <Eye className="mr-2 h-4 w-4 text-blue-400" />
                Live preview
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${currentPage === "performance" ? "bg-blue-800/50 text-blue-50" : "text-blue-100 hover:bg-blue-900/50"}`}
                onClick={() => setCurrentPage("performance")}
              >
                <BarChart2 className="mr-2 h-4 w-4 text-blue-400" />
                Performance
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content with Resizable Right Panel */}
      <ResizablePanel rightPanel={<CodeSnippets />} defaultWidth={400} minWidth={300} maxWidth={800}>
        {renderPage()}
      </ResizablePanel>
    </div>
  )
}

