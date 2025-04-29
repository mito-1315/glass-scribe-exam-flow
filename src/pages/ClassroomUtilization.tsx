
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClassroomUtilization = () => {
  const [selectedRoom, setSelectedRoom] = useState("r101");
  
  // Mock classroom data
  const rooms = [
    { id: "r101", name: "R101", capacity: 60, allocated: 54, status: "active" },
    { id: "r102", name: "R102", capacity: 50, allocated: 45, status: "active" },
    { id: "r103", name: "R103", capacity: 40, allocated: 40, status: "active" },
    { id: "r104", name: "R104", capacity: 70, allocated: 62, status: "active" },
    { id: "r105", name: "R105", capacity: 50, allocated: 48, status: "active" },
    { id: "r106", name: "R106", capacity: 60, allocated: 0, status: "inactive" },
  ];

  const selectedRoomData = rooms.find(room => room.id === selectedRoom) || rooms[0];
  const utilizationPercentage = Math.round((selectedRoomData.allocated / selectedRoomData.capacity) * 100);
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Classroom Utilization</h1>
          <p className="text-muted-foreground">Manage classroom layouts and seating arrangements</p>
        </div>
        <Button className="flex items-center gap-2">
          Update Layout
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-1">
          <GlassCard className="h-full">
            <h2 className="text-lg font-medium mb-4">Classrooms</h2>
            <div className="space-y-2">
              {rooms.map(room => (
                <Button 
                  key={room.id}
                  variant={selectedRoom === room.id ? "default" : "outline"}
                  className="w-full justify-between"
                  onClick={() => setSelectedRoom(room.id)}
                >
                  <span>{room.name}</span>
                  <span className={`
                    text-xs px-2 py-0.5 rounded-full
                    ${room.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'}
                  `}>
                    {room.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </Button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <h3 className="text-sm font-medium mb-3">Filters</h3>
              <div className="space-y-2">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Capacities</SelectItem>
                    <SelectItem value="small">Small (< 50)</SelectItem>
                    <SelectItem value="medium">Medium (50-100)</SelectItem>
                    <SelectItem value="large">Large (> 100)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <GlassCard className="h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">{selectedRoomData.name} Layout</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Utilization:</span>
                <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${
                    utilizationPercentage > 90 ? 'bg-red-500' : 
                    utilizationPercentage > 70 ? 'bg-orange-500' : 
                    'bg-green-500'
                  }`} style={{ width: `${utilizationPercentage}%` }}></div>
                </div>
                <span className="text-xs">{utilizationPercentage}%</span>
              </div>
            </div>

            <Tabs defaultValue="layout">
              <TabsList className="mb-4">
                <TabsTrigger value="layout">Layout View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
              <TabsContent value="layout" className="mt-0">
                <div className="relative bg-white/5 border border-white/10 rounded-lg h-[400px] p-4">
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 rounded-lg text-xs">
                    Teacher's Desk
                  </div>
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-white/20 rounded"></div>

                  <div className="mt-20 grid grid-cols-5 gap-4">
                    {[...Array(20)].map((_, idx) => {
                      const isFilled = idx < selectedRoomData.allocated / 3;
                      const subjectType = idx % 3; // 0: Math, 1: Physics, 2: Chemistry
                      
                      return (
                        <div 
                          key={idx}
                          className={`
                            aspect-video rounded-lg border p-2 flex flex-col justify-between
                            ${isFilled ? 
                              subjectType === 0 ? 'bg-blue-500/20 border-blue-500/30' : 
                              subjectType === 1 ? 'bg-purple-500/20 border-purple-500/30' : 
                              'bg-green-500/20 border-green-500/30'
                              : 'bg-white/5 border-white/10'
                            }
                          `}
                        >
                          <div className="flex justify-between items-start">
                            <div className="text-xs font-medium">B{idx + 1}</div>
                            {isFilled && (
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            )}
                          </div>
                          {isFilled && (
                            <div className="grid grid-cols-3 gap-0.5">
                              <div className="h-1.5 w-full bg-white/20 rounded-sm"></div>
                              <div className="h-1.5 w-full bg-white/20 rounded-sm"></div>
                              <div className="h-1.5 w-full bg-white/20 rounded-sm"></div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/30"></div>
                      <span className="text-[10px]">Math</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm bg-purple-500/20 border border-purple-500/30"></div>
                      <span className="text-[10px]">Physics</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm bg-green-500/20 border border-green-500/30"></div>
                      <span className="text-[10px]">Chemistry</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="list" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-3 px-4 text-left">Bench</th>
                        <th className="py-3 px-4 text-left">Subject</th>
                        <th className="py-3 px-4 text-left">Students</th>
                        <th className="py-3 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...Array(10)].map((_, idx) => {
                        const isFilled = idx < selectedRoomData.allocated / 6;
                        const subjectType = idx % 3; // 0: Math, 1: Physics, 2: Chemistry
                        const subject = subjectType === 0 ? 'Mathematics' : 
                                       subjectType === 1 ? 'Physics' : 'Chemistry';
                        
                        return (
                          <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-3 px-4">B{idx + 1}</td>
                            <td className="py-3 px-4">
                              {isFilled && (
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  subjectType === 0 ? "bg-blue-500/20 text-blue-500" :
                                  subjectType === 1 ? "bg-purple-500/20 text-purple-500" :
                                  "bg-green-500/20 text-green-500"
                                }`}>
                                  {subject}
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4">
                              {isFilled ? '3/3' : '0/3'}
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs ${isFilled ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'}`}>
                                {isFilled ? 'Occupied' : 'Empty'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </GlassCard>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard>
          <h2 className="text-lg font-medium mb-4">Room Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Room Number</span>
              <span>{selectedRoomData.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Floor</span>
              <span>1st Floor</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Capacity</span>
              <span>{selectedRoomData.capacity} students</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Invigilator</span>
              <span>Prof. Roberts</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-medium mb-4">Subject Distribution</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Mathematics</span>
                <span>18 students</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: "33.3%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Physics</span>
                <span>18 students</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full" style={{ width: "33.3%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Chemistry</span>
                <span>18 students</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: "33.3%" }}></div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-medium mb-4">Actions</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Edit Room Layout
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Change Invigilator
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Print Seating Chart
            </Button>
            <Button variant="destructive" className="w-full justify-start">
              Mark as Inactive
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ClassroomUtilization;
