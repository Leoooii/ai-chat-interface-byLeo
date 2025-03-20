"use client"

import { useState } from "react"
import TasksPage from "./pages/tasks"
import ConversationHistoryPage from "./pages/conversation-history"
import FunctionsPage from "./pages/functions"
import IntegrationsPage from "./pages/integrations"
import UsersPage from "./pages/users"
import SettingsPage from "./pages/settings"
import LivePreviewPage from "./pages/live-preview"
import PerformancePage from "./pages/performance"
import ChatInterface from "../chat-interface"

export default function Router() {
  const [currentPage, setCurrentPage] = useState("chat")

  const renderPage = () => {
    switch (currentPage) {
      case "tasks":
        return <TasksPage />
      case "conversations":
        return <ConversationHistoryPage />
      case "functions":
        return <FunctionsPage />
      case "integrations":
        return <IntegrationsPage />
      case "users":
        return <UsersPage />
      case "settings":
        return <SettingsPage />
      case "preview":
        return <LivePreviewPage />
      case "performance":
        return <PerformancePage />
      case "chat":
      default:
        return <ChatInterface />
    }
  }

  return {
    currentPage,
    setCurrentPage,
    renderPage,
  }
}

