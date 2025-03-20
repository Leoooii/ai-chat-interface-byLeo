import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, MessageSquare, Star, Trash2 } from "lucide-react"

export default function ConversationHistoryPage() {
  const conversations = [
    {
      id: 1,
      title: "Project planning assistance",
      preview: "Can you help me plan the architecture for my new web app?",
      date: "Today, 2:30 PM",
      starred: true,
    },
    {
      id: 2,
      title: "Code review for authentication system",
      preview: "I need you to review my authentication implementation",
      date: "Today, 11:15 AM",
      starred: false,
    },
    {
      id: 3,
      title: "Database schema design",
      preview: "What's the best way to structure my database for a social media app?",
      date: "Yesterday, 4:45 PM",
      starred: true,
    },
    {
      id: 4,
      title: "API integration help",
      preview: "I'm having trouble integrating with the payment API",
      date: "Mar 18, 2024",
      starred: false,
    },
    {
      id: 5,
      title: "Debugging React component",
      preview: "My component is re-rendering too many times",
      date: "Mar 17, 2024",
      starred: false,
    },
    {
      id: 6,
      title: "Performance optimization",
      preview: "How can I make my app load faster?",
      date: "Mar 15, 2024",
      starred: false,
    },
  ]

  return (
    <div className="flex flex-col h-full bg-blue-950/30">
      <div className="p-4 border-b border-blue-800">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
            <Input
              placeholder="Search conversations"
              className="pl-9 bg-blue-900/20 border-blue-800 text-blue-100 placeholder:text-blue-400/70"
            />
          </div>
          <Button variant="outline" className="border-blue-800 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
            <Calendar className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y divide-blue-800">
          {conversations.map((conversation) => (
            <div key={conversation.id} className="p-4 hover:bg-blue-900/30 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-400" />
                    <h3 className="font-medium text-blue-100">{conversation.title}</h3>
                    {conversation.starred && <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />}
                  </div>
                  <p className="text-sm text-blue-300 mt-1 line-clamp-1">{conversation.preview}</p>
                </div>
                <span className="text-xs text-blue-400">{conversation.date}</span>
              </div>
              <div className="flex justify-end mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

