
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
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ExamScheduling = () => {
  // Mock exam data
  const exams = [
    { id: "e1", name: "Advanced Mathematics", subject: "Mathematics", date: "2025-05-02", time: "10:00 AM", duration: "3 hours", rooms: ["R101", "R102"] },
    { id: "e2", name: "Quantum Physics", subject: "Physics", date: "2025-05-03", time: "02:00 PM", duration: "3 hours", rooms: ["R103"] },
    { id: "e3", name: "Organic Chemistry", subject: "Chemistry", date: "2025-05-05", time: "09:00 AM", duration: "3 hours", rooms: ["R104", "R105"] },
    { id: "e4", name: "Data Structures", subject: "Computer Science", date: "2025-05-08", time: "10:00 AM", duration: "3 hours", rooms: ["R106"] },
    { id: "e5", name: "Digital Electronics", subject: "Electronics", date: "2025-05-10", time: "02:00 PM", duration: "3 hours", rooms: ["R107"] },
  ];
  
  const [openAddExamDialog, setOpenAddExamDialog] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Exam Scheduling</h1>
          <p className="text-muted-foreground">Manage exam schedules and allocations</p>
        </div>
        <Dialog open={openAddExamDialog} onOpenChange={setOpenAddExamDialog}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Calendar size={16} /> Add Exam
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-card">
            <DialogHeader>
              <DialogTitle>Add New Exam</DialogTitle>
              <DialogDescription>
                Enter the details for the new exam. After adding, you can set up room allocations.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <label htmlFor="exam-name" className="text-sm">Exam Name</label>
                <Input id="exam-name" placeholder="Enter exam name" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="exam-subject" className="text-sm">Subject</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="exam-date" className="text-sm">Date</label>
                  <Input id="exam-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="exam-time" className="text-sm">Time</label>
                  <Input id="exam-time" type="time" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="exam-duration" className="text-sm">Duration</label>
                  <Select>
                    <SelectTrigger id="exam-duration">
                      <SelectValue placeholder="Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.5">1.5 hours</SelectItem>
                      <SelectItem value="2">2 hours</SelectItem>
                      <SelectItem value="3">3 hours</SelectItem>
                      <SelectItem value="4">4 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="exam-department" className="text-sm">Department</label>
                  <Select>
                    <SelectTrigger id="exam-department">
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="ee">Electrical Engineering</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                      <SelectItem value="ce">Civil Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenAddExamDialog(false)}>Cancel</Button>
              <Button onClick={() => setOpenAddExamDialog(false)}>Add Exam</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Exams", value: "5", color: "blue" },
          { title: "Students Registered", value: "1,240", color: "purple" },
          { title: "Classrooms Allocated", value: "8", color: "green" },
          { title: "Upcoming Exams", value: "3", color: "blue" },
        ].map((stat, idx) => (
          <GlassCard key={idx} neonBorder={stat.color as any} glow>
            <h2 className="text-muted-foreground text-sm">{stat.title}</h2>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <h2 className="text-lg font-medium mb-4">Exam Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Time</th>
                <th className="py-3 px-4 text-left">Duration</th>
                <th className="py-3 px-4 text-left">Rooms</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam) => (
                <tr key={exam.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4">{exam.name}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      exam.subject === "Mathematics" ? "bg-blue-500/20 text-blue-500" :
                      exam.subject === "Physics" ? "bg-purple-500/20 text-purple-500" :
                      exam.subject === "Chemistry" ? "bg-green-500/20 text-green-500" :
                      "bg-orange-500/20 text-orange-500"
                    }`}>
                      {exam.subject}
                    </span>
                  </td>
                  <td className="py-3 px-4">{new Date(exam.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">{exam.time}</td>
                  <td className="py-3 px-4">{exam.duration}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1 flex-wrap">
                      {exam.rooms.map(room => (
                        <span key={room} className="px-2 py-1 bg-white/10 rounded text-xs">
                          {room}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Allocate</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Exam Calendar</h2>
            <div className="p-4 bg-white/5 rounded-lg min-h-[300px] flex flex-col">
              <div className="grid grid-cols-7 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-muted-foreground text-sm py-1">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 flex-1">
                {Array(35).fill(0).map((_, idx) => {
                  const day = idx - 3 + 1; // Starting from April 28th (3 days before May)
                  const isCurrentMonth = day > 0 && day <= 31;
                  const hasExam = isCurrentMonth && [2, 3, 5, 8, 10].includes(day);
                  
                  return (
                    <div 
                      key={idx} 
                      className={`
                        rounded-lg border p-2 min-h-[70px] relative
                        ${isCurrentMonth ? 'border-white/10' : 'border-transparent bg-transparent text-muted-foreground/50'}
                        ${hasExam ? 'bg-white/10' : ''}
                      `}
                    >
                      <span className="text-xs font-medium">{isCurrentMonth ? day : day <= 0 ? day + 30 : day - 31}</span>
                      
                      {hasExam && (
                        <div className={`
                          mt-2 p-1 rounded text-[10px] 
                          ${day === 2 ? 'bg-blue-500/20 text-blue-500' : 
                            day === 3 ? 'bg-purple-500/20 text-purple-500' : 
                            day === 5 ? 'bg-green-500/20 text-green-500' : 
                            day === 8 ? 'bg-orange-500/20 text-orange-500' : 
                            'bg-yellow-500/20 text-yellow-500'}
                        `}>
                          Exam
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <div className="flex justify-center mt-4 gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-blue-500/20"></div>
                  <span>Mathematics</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-purple-500/20"></div>
                  <span>Physics</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-green-500/20"></div>
                  <span>Chemistry</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded bg-orange-500/20"></div>
                  <span>CS</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        <div>
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Subject Clash Analysis</h2>
            <div className="space-y-4">
              <div className="p-3 rounded bg-white/5">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Math + Physics</span>
                  <span className="text-sm">15 students</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden flex-1">
                    <div className="bg-red-500 h-full" style={{ width: "60%" }}></div>
                  </div>
                  <span className="text-xs text-red-500">High</span>
                </div>
              </div>
              
              <div className="p-3 rounded bg-white/5">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Physics + Chemistry</span>
                  <span className="text-sm">8 students</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden flex-1">
                    <div className="bg-amber-500 h-full" style={{ width: "30%" }}></div>
                  </div>
                  <span className="text-xs text-amber-500">Medium</span>
                </div>
              </div>
              
              <div className="p-3 rounded bg-white/5">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Chemistry + CS</span>
                  <span className="text-sm">3 students</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden flex-1">
                    <div className="bg-green-500 h-full" style={{ width: "10%" }}></div>
                  </div>
                  <span className="text-xs text-green-500">Low</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <h3 className="text-sm font-medium mb-3">Recommendations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2 text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    <span>Reschedule Mathematics and Physics exams to different days</span>
                  </li>
                  <li className="flex items-start gap-2 mt-1 text-amber-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    <span>Consider separate seating for students with subject clashes</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ExamScheduling;
