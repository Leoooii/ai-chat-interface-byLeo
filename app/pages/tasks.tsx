import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Implement chat interface",
      description: "Create a responsive chat interface with message history",
      status: "completed",
      dueDate: "2024-03-15",
    },
    {
      id: 2,
      title: "Add code editor panel",
      description: "Implement a code editor panel for displaying AI-generated code",
      status: "in-progress",
      dueDate: "2024-03-20",
    },
    {
      id: 3,
      title: "Integrate with OpenAI API",
      description: "Connect the chat interface with OpenAI's API for responses",
      status: "pending",
      dueDate: "2024-03-25",
    },
    {
      id: 4,
      title: "Implement user authentication",
      description: "Add user login and registration functionality",
      status: "pending",
      dueDate: "2024-03-30",
    },
  ]

  return (
    <div className="p-6 bg-blue-950/30 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Tasks</h1>
        <Button className="bg-blue-600 hover:bg-blue-500">New Task</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-blue-900/20 border-blue-800">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-blue-100">{task.title}</CardTitle>
                <Badge
                  className={
                    task.status === "completed"
                      ? "bg-green-600"
                      : task.status === "in-progress"
                        ? "bg-blue-600"
                        : "bg-yellow-600"
                  }
                >
                  {task.status === "completed" ? (
                    <CheckCircle className="h-3 w-3 mr-1" />
                  ) : task.status === "in-progress" ? (
                    <Clock className="h-3 w-3 mr-1" />
                  ) : (
                    <AlertCircle className="h-3 w-3 mr-1" />
                  )}
                  {task.status}
                </Badge>
              </div>
              <CardDescription className="text-blue-300">Due: {task.dueDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-blue-200">{task.description}</p>
            </CardContent>
            <CardFooter className="pt-2 flex justify-end gap-2">
              <Button variant="ghost" className="text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
                Edit
              </Button>
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                View
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

