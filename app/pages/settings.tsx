import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="p-6 bg-blue-950/30 min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Settings</h1>
        <p className="text-blue-300 mt-1">Manage your application settings and preferences</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-blue-900/20 border border-blue-800 mb-6">
          <TabsTrigger value="general" className="data-[state=active]:bg-blue-700">
            General
          </TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-blue-700">
            Appearance
          </TabsTrigger>
          <TabsTrigger value="api" className="data-[state=active]:bg-blue-700">
            API
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-blue-700">
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-0 space-y-4">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">General Settings</CardTitle>
              <CardDescription className="text-blue-300">Configure your application settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-name" className="text-blue-200">
                  Application Name
                </Label>
                <Input
                  id="app-name"
                  defaultValue="GenerativeAgent"
                  className="bg-blue-950/50 border-blue-800 text-blue-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language" className="text-blue-200">
                  Language
                </Label>
                <Select defaultValue="en">
                  <SelectTrigger className="bg-blue-950/50 border-blue-800 text-blue-100">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-blue-700 text-blue-100">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="ro">Romanian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-save" className="text-blue-200">
                    Auto-save conversations
                  </Label>
                  <p className="text-sm text-blue-400">Automatically save all conversations</p>
                </div>
                <Switch id="auto-save" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-500">Save Changes</Button>
            </CardFooter>
          </Card>

          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">Account Settings</CardTitle>
              <CardDescription className="text-blue-300">Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-200">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="user@example.com"
                  className="bg-blue-950/50 border-blue-800 text-blue-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-200">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  defaultValue="********"
                  className="bg-blue-950/50 border-blue-800 text-blue-100"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                Cancel
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-500">Update Account</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">Appearance Settings</CardTitle>
              <CardDescription className="text-blue-300">
                Customize the look and feel of the application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-blue-200">Theme</Label>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-blue-700 bg-blue-950 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
                  >
                    Dark
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
                  >
                    Light
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
                  >
                    System
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-blue-200">Accent Color</Label>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer ring-2 ring-blue-300 ring-offset-2 ring-offset-blue-950"></div>
                  <div className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer"></div>
                  <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer"></div>
                  <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"></div>
                  <div className="h-8 w-8 rounded-full bg-orange-500 cursor-pointer"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations" className="text-blue-200">
                    Enable animations
                  </Label>
                  <p className="text-sm text-blue-400">Show animations throughout the interface</p>
                </div>
                <Switch id="animations" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                Reset to Default
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-500">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">API Settings</CardTitle>
              <CardDescription className="text-blue-300">Manage your API keys and configurations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="openai-key" className="text-blue-200">
                  OpenAI API Key
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="openai-key"
                    type="password"
                    defaultValue="sk-••••••••••••••••••••••••"
                    className="bg-blue-950/50 border-blue-800 text-blue-100 flex-1"
                  />
                  <Button
                    variant="outline"
                    className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
                  >
                    Show
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="model" className="text-blue-200">
                  Default Model
                </Label>
                <Select defaultValue="gpt-4o">
                  <SelectTrigger className="bg-blue-950/50 border-blue-800 text-blue-100">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent className="bg-blue-900 border-blue-700 text-blue-100">
                    <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="rate-limit" className="text-blue-200">
                    Enable rate limiting
                  </Label>
                  <p className="text-sm text-blue-400">Limit API requests to prevent excessive usage</p>
                </div>
                <Switch id="rate-limit" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                Test Connection
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-500">Save API Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-0">
          <Card className="bg-blue-900/20 border-blue-800">
            <CardHeader>
              <CardTitle className="text-blue-100">Notification Settings</CardTitle>
              <CardDescription className="text-blue-300">Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications" className="text-blue-200">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-blue-400">Receive notifications via email</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="browser-notifications" className="text-blue-200">
                    Browser Notifications
                  </Label>
                  <p className="text-sm text-blue-400">Show notifications in your browser</p>
                </div>
                <Switch id="browser-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sound-alerts" className="text-blue-200">
                    Sound Alerts
                  </Label>
                  <p className="text-sm text-blue-400">Play sound when receiving notifications</p>
                </div>
                <Switch id="sound-alerts" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button
                variant="outline"
                className="border-blue-700 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50"
              >
                Reset to Default
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-500">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

