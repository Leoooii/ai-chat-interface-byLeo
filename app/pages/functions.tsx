import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Play, Plus, Download } from "lucide-react"

export default function FunctionsPage() {
  const functions = [
    {
      id: 1,
      name: "generateResponse",
      description: "Generate a response based on conversation history",
      code: `async function generateResponse(messages) {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });
  
  return response.json();
}`,
      category: "ai",
    },
    {
      id: 2,
      name: "formatCode",
      description: "Format code snippets with syntax highlighting",
      code: `function formatCode(code, language) {
  // Implementation of syntax highlighting
  return highlightedCode;
}`,
      category: "utility",
    },
    {
      id: 3,
      name: "saveConversation",
      description: "Save the current conversation to database",
      code: `async function saveConversation(conversation) {
  const response = await fetch('/api/conversations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ conversation })
  });
  
  return response.json();
}`,
      category: "data",
    },
    {
      id: 4,
      name: "analyzeUserIntent",
      description: "Analyze user messages to determine intent",
      code: `async function analyzeUserIntent(message) {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  
  return response.json();
}`,
      category: "ai",
    },
  ]

  return (
    <div className="p-6 bg-blue-950/30 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Functions</h1>
        <Button className="bg-blue-600 hover:bg-blue-500">
          <Plus className="h-4 w-4 mr-2" />
          New Function
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-blue-900/20 border border-blue-800 mb-6">
          <TabsTrigger value="all" className="data-[state=active]:bg-blue-700">
            All
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-blue-700">
            AI
          </TabsTrigger>
          <TabsTrigger value="utility" className="data-[state=active]:bg-blue-700">
            Utility
          </TabsTrigger>
          <TabsTrigger value="data" className="data-[state=active]:bg-blue-700">
            Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {functions.map((func) => (
              <FunctionCard key={func.id} func={func} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ai" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {functions
              .filter((f) => f.category === "ai")
              .map((func) => (
                <FunctionCard key={func.id} func={func} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="utility" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {functions
              .filter((f) => f.category === "utility")
              .map((func) => (
                <FunctionCard key={func.id} func={func} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {functions
              .filter((f) => f.category === "data")
              .map((func) => (
                <FunctionCard key={func.id} func={func} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function FunctionCard({ func }) {
  return (
    <Card className="bg-blue-900/20 border-blue-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-blue-100 flex items-center">
            <Code className="h-4 w-4 mr-2 text-blue-400" />
            {func.name}
          </CardTitle>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
            >
              <Play className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardDescription className="text-blue-300">{func.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <pre className="bg-blue-950 p-3 rounded text-xs text-blue-100 overflow-x-auto">{func.code}</pre>
      </CardContent>
      <CardFooter className="pt-2 flex justify-end gap-2">
        <Button variant="ghost" className="text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
          Edit
        </Button>
        <Button variant="outline" className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
          Test
        </Button>
      </CardFooter>
    </Card>
  )
}

