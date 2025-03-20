import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, LineChart, PieChart, Activity, Download, RefreshCw } from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="p-6 bg-blue-950/30 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Performance</h1>
        <div className="flex gap-2">
          <Select defaultValue="7days">
            <SelectTrigger className="w-[180px] bg-blue-900/20 border-blue-800 text-blue-100">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-blue-900 border-blue-700 text-blue-100">
              <SelectItem value="24hours">Last 24 hours</SelectItem>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-blue-800 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="outline" className="border-blue-800 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-blue-900/20 border-blue-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-blue-300">Total Conversations</CardDescription>
            <CardTitle className="text-3xl text-blue-100">1,248</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-blue-400">
              <span className="text-green-400">↑ 12%</span> from last period
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-900/20 border-blue-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-blue-300">Average Response Time</CardDescription>
            <CardTitle className="text-3xl text-blue-100">1.2s</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-blue-400">
              <span className="text-green-400">↓ 0.3s</span> from last period
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-900/20 border-blue-800">
          <CardHeader className="pb-2">
            <CardDescription className="text-blue-300">API Calls</CardDescription>
            <CardTitle className="text-3xl text-blue-100">8,547</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-blue-400">
              <span className="text-yellow-400">↑ 24%</span> from last period
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="usage" className="w-full">
        <TabsList className="bg-blue-900/20 border border-blue-800 mb-6">
          <TabsTrigger value="usage" className="data-[state=active]:bg-blue-700">
            <Activity className="h-4 w-4 mr-2" />
            Usage
          </TabsTrigger>
          <TabsTrigger value="response-times" className="data-[state=active]:bg-blue-700">
            <LineChart className="h-4 w-4 mr-2" />
            Response Times
          </TabsTrigger>
          <TabsTrigger value="models" className="data-[state=active]:bg-blue-700">
            <PieChart className="h-4 w-4 mr-2" />
            Models
          </TabsTrigger>
          <TabsTrigger value="errors" className="data-[state=active]:bg-blue-700">
            <BarChart className="h-4 w-4 mr-2" />
            Errors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">API Usage Over Time</CardTitle>
              <CardDescription className="text-blue-300">Number of API calls per day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-full h-full bg-blue-950/50 rounded-md flex items-center justify-center">
                  <p className="text-blue-300">Usage chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="response-times" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">Response Time Analysis</CardTitle>
              <CardDescription className="text-blue-300">Average response time in milliseconds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-full h-full bg-blue-950/50 rounded-md flex items-center justify-center">
                  <p className="text-blue-300">Response time chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">Model Usage Distribution</CardTitle>
              <CardDescription className="text-blue-300">Breakdown of API calls by model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-full h-full bg-blue-950/50 rounded-md flex items-center justify-center">
                  <p className="text-blue-300">Model distribution chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="errors" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">Error Analysis</CardTitle>
              <CardDescription className="text-blue-300">Frequency and types of errors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center">
                <div className="w-full h-full bg-blue-950/50 rounded-md flex items-center justify-center">
                  <p className="text-blue-300">Error analysis chart visualization would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

