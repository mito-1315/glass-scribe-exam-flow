
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const StaffInvigilation = () => {
  const [openAssignDialog, setOpenAssignDialog] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  
  // Mock staff data
  const staff = [
    { id: "s1", name: "Dr. Sarah Johnson", department: "Mathematics", assigned: ["R101"], teaching: "Mathematics" },
    { id: "s2", name: "Prof. Michael Brown", department: "Physics", assigned: ["R102"], teaching: "Physics" },
    { id: "s3", name: "Dr. Emily Davis", department: "Chemistry", assigned: ["R103"], teaching: "Chemistry" },
    { id: "s4", name: "Prof. David Wilson", department: "Mathematics", assigned: [], teaching: "Mathematics" },
    { id: "s5", name: "Dr. Lisa Anderson", department: "Physics", assigned: [], teaching: "Physics" },
    { id: "s6", name: "Prof. Robert Martinez", department: "Chemistry", assigned: [], teaching: "Chemistry" },
    { id: "s7", name: "Dr. Jennifer Harris", department: "Mathematics", assigned: [], teaching: "Mathematics" },
    { id: "s8", name: "Prof. Thomas Clark", department: "Physics", assigned: ["R104", "R105"], teaching: "Physics" },
  ];
  
  const rooms = [
    { id: "r101", name: "R101", subject: "Mathematics", status: "assigned" },
    { id: "r102", name: "R102", subject: "Physics", status: "assigned" },
    { id: "r103", name: "R103", subject: "Chemistry", status: "assigned" },
    { id: "r104", name: "R104", subject: "Physics", status: "assigned" },
    { id: "r105", name: "R105", subject: "Physics", status: "assigned" },
    { id: "r106", name: "R106", subject: "Mathematics", status: "unassigned" },
    { id: "r107", name: "R107", subject: "Chemistry", status: "unassigned" },
    { id: "r108", name: "R108", subject: "Physics", status: "unassigned" },
  ];

  const handleAssignStaff = (staffId: string) => {
    setSelectedStaff(staffId);
    setOpenAssignDialog(true);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Staff Invigilation</h1>
          <p className="text-muted-foreground">Manage staff invigilation assignments</p>
        </div>
        <Button className="flex items-center gap-2">
          Auto Assign
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search staff..." className="pl-10" />
                </div>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="unassigned">Unassigned</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Department</th>
                    <th className="py-3 px-4 text-left">Teaching Subject</th>
                    <th className="py-3 px-4 text-left">Room Assigned</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((s) => (
                    <tr key={s.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">{s.name}</td>
                      <td className="py-3 px-4">{s.department}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          s.teaching === "Mathematics" ? "bg-blue-500/20 text-blue-500" :
                          s.teaching === "Physics" ? "bg-purple-500/20 text-purple-500" :
                          "bg-green-500/20 text-green-500"
                        }`}>
                          {s.teaching}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {s.assigned.length > 0 ? (
                          <div className="flex gap-1 flex-wrap">
                            {s.assigned.map(room => (
                              <span key={room} className="px-2 py-1 bg-white/10 rounded text-xs">
                                {room}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-muted-foreground text-sm">Not assigned</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleAssignStaff(s.id)}
                        >
                          Assign
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing 8 of 24 staff</p>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </GlassCard>
        </div>

        <div>
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Room Assignment Status</h2>
            
            <div className="space-y-4">
              {rooms.map(room => (
                <div key={room.id} className="flex items-center justify-between p-3 bg-white/10 dark:bg-white/5 rounded-lg">
                  <div>
                    <p className="font-medium">{room.name}</p>
                    <div className="mt-1 flex items-center gap-1">
                      <span className={`h-2 w-2 rounded-full ${
                        room.subject === "Mathematics" ? "bg-blue-500" :
                        room.subject === "Physics" ? "bg-purple-500" :
                        "bg-green-500"
                      }`}></span>
                      <p className="text-xs text-muted-foreground">{room.subject}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      room.status === "assigned" ? "bg-green-500/20 text-green-500" :
                      "bg-orange-500/20 text-orange-500"
                    }`}>
                      {room.status === "assigned" ? "Assigned" : "Unassigned"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-3">Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-white/5">
                  <p className="text-xs text-muted-foreground">Assigned Rooms</p>
                  <p className="text-xl font-bold">5</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <p className="text-xs text-muted-foreground">Unassigned Rooms</p>
                  <p className="text-xl font-bold">3</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <p className="text-xs text-muted-foreground">Assigned Staff</p>
                  <p className="text-xl font-bold">4</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <p className="text-xs text-muted-foreground">Unassigned Staff</p>
                  <p className="text-xl font-bold">4</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      <Dialog open={openAssignDialog} onOpenChange={setOpenAssignDialog}>
        <DialogContent className="glass-card">
          <DialogHeader>
            <DialogTitle>Assign Invigilator</DialogTitle>
            <DialogDescription>
              Choose a room to assign to the selected invigilator.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Staff</label>
              <div className="p-2 rounded bg-white/10">
                {selectedStaff && staff.find(s => s.id === selectedStaff)?.name}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm">Select Room</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a room" />
                </SelectTrigger>
                <SelectContent>
                  {rooms
                    .filter(room => room.status === "unassigned")
                    .map(room => (
                      <SelectItem key={room.id} value={room.id}>
                        {room.name} - {room.subject}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <span className="text-amber-400 text-xs flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                Warning: This staff teaches the same subject as this exam.
              </span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenAssignDialog(false)}>Cancel</Button>
            <Button onClick={() => setOpenAssignDialog(false)}>Confirm Assignment</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StaffInvigilation;
