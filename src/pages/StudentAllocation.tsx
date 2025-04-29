
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Download } from "lucide-react";

const StudentAllocation = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    year: "",
    department: "",
    section: "",
    subject: "",
  });

  // Mock student data
  const students = [
    { id: "S001", name: "Alex Johnson", rollNo: "CS2021001", section: "A", subject: "Mathematics", seat: "R101-B05-S1" },
    { id: "S002", name: "Jamie Smith", rollNo: "CS2021002", section: "A", subject: "Physics", seat: "R101-B06-S2" },
    { id: "S003", name: "Casey Brown", rollNo: "CS2021003", section: "A", subject: "Chemistry", seat: "R102-B01-S1" },
    { id: "S004", name: "Taylor Davis", rollNo: "CS2021004", section: "B", subject: "Mathematics", seat: "R102-B02-S2" },
    { id: "S005", name: "Jordan Wilson", rollNo: "CS2021005", section: "B", subject: "Physics", seat: "R103-B03-S1" },
    { id: "S006", name: "Riley Martinez", rollNo: "CS2021006", section: "B", subject: "Chemistry", seat: "R103-B04-S2" },
    { id: "S007", name: "Quinn Anderson", rollNo: "CS2021007", section: "C", subject: "Mathematics", seat: "R104-B01-S1" },
    { id: "S008", name: "Avery Garcia", rollNo: "CS2021008", section: "C", subject: "Physics", seat: "R104-B02-S2" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Student Allocation</h1>
          <p className="text-muted-foreground">Manage student seating arrangements</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download size={16} /> Export
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            Auto Allocate
          </Button>
        </div>
      </div>

      <GlassCard>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-10" />
            </div>
          </div>
          <Select
            value={selectedFilters.year}
            onValueChange={(value) => setSelectedFilters({ ...selectedFilters, year: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={selectedFilters.department}
            onValueChange={(value) => setSelectedFilters({ ...selectedFilters, department: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="ee">Electrical Engineering</SelectItem>
              <SelectItem value="me">Mechanical Engineering</SelectItem>
              <SelectItem value="ce">Civil Engineering</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={selectedFilters.section}
            onValueChange={(value) => setSelectedFilters({ ...selectedFilters, section: value })}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Section A</SelectItem>
              <SelectItem value="b">Section B</SelectItem>
              <SelectItem value="c">Section C</SelectItem>
              <SelectItem value="d">Section D</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={selectedFilters.subject}
            onValueChange={(value) => setSelectedFilters({ ...selectedFilters, subject: value })}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="math">Mathematics</SelectItem>
              <SelectItem value="phy">Physics</SelectItem>
              <SelectItem value="chem">Chemistry</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-left">Roll No.</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Section</th>
                <th className="py-3 px-4 text-left">Subject</th>
                <th className="py-3 px-4 text-left">Seat Allocation</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4">{student.rollNo}</td>
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.section}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      student.subject === "Mathematics" ? "bg-blue-500/20 text-blue-500" :
                      student.subject === "Physics" ? "bg-purple-500/20 text-purple-500" :
                      "bg-green-500/20 text-green-500"
                    }`}>
                      {student.subject}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-mono bg-white/10 rounded px-2 py-1 text-sm">
                      {student.seat}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 8 of 240 students</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="col-span-2">
          <h2 className="text-lg font-medium mb-4">Seating Matrix Preview</h2>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(15)].map((_, idx) => (
              <div 
                key={idx} 
                className={`aspect-[3/2] rounded-lg p-3 flex flex-col justify-between ${
                  idx % 3 === 0 ? "bg-blue-500/20 border border-blue-500/30" : 
                  idx % 3 === 1 ? "bg-purple-500/20 border border-purple-500/30" : 
                  "bg-green-500/20 border border-green-500/30"
                }`}
              >
                <div className="text-xs font-medium">Bench {idx + 1}</div>
                <div className="text-[10px] text-muted-foreground">
                  {idx % 3 === 0 ? "Mathematics" : 
                   idx % 3 === 1 ? "Physics" : "Chemistry"}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500/20 border border-blue-500/30"></div>
              <span className="text-xs">Mathematics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500/20 border border-purple-500/30"></div>
              <span className="text-xs">Physics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500/20 border border-green-500/30"></div>
              <span className="text-xs">Chemistry</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-medium mb-4">Allocation Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Seats</span>
              <span className="font-medium">250</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Allocated Seats</span>
              <span className="font-medium">240</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Empty Seats</span>
              <span className="font-medium">10</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="bg-primary h-full" style={{ width: "96%" }}></div>
            </div>
            <div className="text-xs text-right text-muted-foreground">96% filled</div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-sm font-medium mb-3">Distribution by Subject</h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Mathematics</span>
                    <span>120 students</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Physics</span>
                    <span>80 students</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full" style={{ width: "33.3%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Chemistry</span>
                    <span>40 students</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: "16.7%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default StudentAllocation;
