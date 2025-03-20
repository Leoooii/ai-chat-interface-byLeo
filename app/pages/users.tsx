import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MoreHorizontal, UserPlus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function UsersPage() {
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "Admin",
      status: "Active",
      lastActive: "Today, 2:30 PM",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      role: "Developer",
      status: "Active",
      lastActive: "Today, 1:15 PM",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      role: "Viewer",
      status: "Inactive",
      lastActive: "Yesterday, 11:30 AM",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      role: "Developer",
      status: "Active",
      lastActive: "Today, 10:45 AM",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      role: "Viewer",
      status: "Active",
      lastActive: "Mar 18, 2024",
    },
  ]

  return (
    <div className="p-6 bg-blue-950/30 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-100">Users</h1>
        <Button className="bg-blue-600 hover:bg-blue-500">
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 h-4 w-4" />
          <Input
            placeholder="Search users"
            className="pl-9 bg-blue-900/20 border-blue-800 text-blue-100 placeholder:text-blue-400/70"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-blue-800 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
            Export
          </Button>
          <Button variant="outline" className="border-blue-800 text-blue-300 hover:text-blue-100 hover:bg-blue-800/50">
            Filter
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-blue-800 overflow-hidden">
        <Table>
          <TableHeader className="bg-blue-900/30">
            <TableRow className="hover:bg-blue-900/50 border-blue-800">
              <TableHead className="text-blue-200">Name</TableHead>
              <TableHead className="text-blue-200">Email</TableHead>
              <TableHead className="text-blue-200">Role</TableHead>
              <TableHead className="text-blue-200">Status</TableHead>
              <TableHead className="text-blue-200">Last Active</TableHead>
              <TableHead className="text-blue-200 w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-blue-900/50 border-blue-800">
                <TableCell className="font-medium text-blue-100">{user.name}</TableCell>
                <TableCell className="text-blue-300">{user.email}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      user.role === "Admin"
                        ? "bg-purple-600"
                        : user.role === "Developer"
                          ? "bg-blue-600"
                          : "bg-gray-600"
                    }
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={user.status === "Active" ? "bg-green-600" : "bg-red-600"}>{user.status}</Badge>
                </TableCell>
                <TableCell className="text-blue-300">{user.lastActive}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-blue-400 hover:text-blue-100 hover:bg-blue-800/50"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-blue-900 border-blue-700 text-blue-100">
                      <DropdownMenuItem className="hover:bg-blue-800 cursor-pointer">Edit</DropdownMenuItem>
                      <DropdownMenuItem className="hover:bg-blue-800 cursor-pointer">View Activity</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 hover:bg-blue-800 hover:text-red-300 cursor-pointer">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

