import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Database, Cloud, MessageSquare, Zap, Lock, Plus } from "lucide-react"

export default function IntegrationsPage() {
  const integrations = [
    {
      id: 1,
      name: "OpenAI",
      description: "Connect to OpenAI's GPT models for AI responses",
      icon: <MessageSquare className="h-5 w-5" />,
      status: "connected",
      category: "ai",
    },
    {
      id: 2,
      name: "Supabase",
      description: "Database and authentication provider",
      icon: <Database className="h-5 w-5" />,
      status: "connected",
      category: "database",
    },
    {
      id: 3,
      name: "Vercel Blob",
      description: "Store and serve user-generated content",
      icon: <Cloud className="h-5 w-5" />,
      status: "disconnected",
      category: "storage",
    },
    {
      id: 4,
      name: "Stripe",
      description: "Payment processing for premium features",
      icon: <Zap className="h-5 w-5" />,
      status: "disconnected",
      category: "payment",
    },
    {
      id: 5,
      name: "Auth0",
      description: "Advanced authentication and authorization",
      icon: <Lock className="h-5 w-5" />,
      status: "disconnected",
      category: "auth",
    },
  ]

  return (
    <div className="p-6 bg-blue-950/30 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Integrations</h1>
        <Button className="bg-blue-600 hover:bg-blue-500">
          <Plus className="h-4 w-4 mr-2" />
          Add Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <Card key={integration.id} className="bg-blue-900/20 border-blue-800">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-blue-800 flex items-center justify-center text-blue-200">
                    {integration.icon}
                  </div>
                  <div>
                    <CardTitle className="text-blue-100">{integration.name}</CardTitle>
                    <CardDescription className="text-blue-300">{integration.category}</CardDescription>
                  </div>
                </div>
                <Badge className={integration.status === "connected" ? "bg-green-600" : "bg-blue-800"}>
                  {integration.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-blue-200">{integration.description}</p>
            </CardContent>
            <CardFooter className="pt-2 flex justify-end gap-2">
              <Button
                variant={integration.status === "connected" ? "destructive" : "default"}
                className={
                  integration.status === "connected" ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-500"
                }
              >
                {integration.status === "connected" ? "Disconnect" : "Connect"}
              </Button>
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                Configure
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

