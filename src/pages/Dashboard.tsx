
import { Users, School, CalendarClock, UserSquare2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import GlassCard from "@/components/GlassCard";
import StatCard from "@/components/StatCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Mock data for charts
  const examDistributionData = [
    { name: 'Mathematics', students: 320 },
    { name: 'Physics', students: 280 },
    { name: 'Chemistry', students: 240 },
    { name: 'Biology', students: 180 },
    { name: 'Computer Science', students: 220 },
  ];

  const roomUtilizationData = [
    { name: 'R101', capacity: 60, allocated: 54 },
    { name: 'R102', capacity: 50, allocated: 45 },
    { name: 'R103', capacity: 40, allocated: 40 },
    { name: 'R104', capacity: 70, allocated: 62 },
    { name: 'R105', capacity: 50, allocated: 48 },
  ];

  const invigilationData = [
    { name: 'Assigned', value: 42 },
    { name: 'Unassigned', value: 8 },
  ];

  const COLORS = ['#4dabf7', '#9775fa', '#51cf66', '#ffa94d', '#ff6b6b'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your exam management dashboard</p>
        </div>
        <button className="px-4 py-2 bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value="1,240"
          icon={<Users className="text-neon-blue" />}
          trend={{ value: 8, isPositive: true }}
          neonBorder="blue"
        />
        <StatCard
          title="Total Classrooms"
          value="18"
          icon={<School className="text-neon-purple" />}
          neonBorder="purple"
        />
        <StatCard
          title="Active Exams"
          value="7"
          icon={<CalendarClock className="text-neon-green" />}
          trend={{ value: 12, isPositive: true }}
          neonBorder="green"
        />
        <StatCard
          title="Invigilators"
          value="50"
          icon={<UserSquare2 className="text-neon-blue" />}
          neonBorder="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <h2 className="text-lg font-medium mb-4">Exam Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={examDistributionData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="students" fill="#4dabf7" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-lg font-medium mb-4">Room Utilization</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={roomUtilizationData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '8px' }} />
                <Legend />
                <Bar dataKey="capacity" fill="#9775fa" radius={[4, 4, 0, 0]} />
                <Bar dataKey="allocated" fill="#51cf66" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="col-span-1">
          <h2 className="text-lg font-medium mb-4">Invigilation Status</h2>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={invigilationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {invigilationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '8px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="col-span-2">
          <h2 className="text-lg font-medium mb-4">Upcoming Exams</h2>
          <div className="space-y-4">
            {[
              { date: 'May 2', time: '10:00 AM', name: 'Advanced Mathematics', department: 'Engineering' },
              { date: 'May 3', time: '02:00 PM', name: 'Quantum Physics', department: 'Science' },
              { date: 'May 5', time: '09:00 AM', name: 'Data Structures', department: 'Computer Science' }
            ].map((exam, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white/10 dark:bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {exam.date.split(' ')[1]}
                  </div>
                  <div>
                    <p className="font-medium">{exam.name}</p>
                    <p className="text-sm text-muted-foreground">{exam.department}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">{exam.date}, {exam.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <button className="text-sm text-primary hover:underline">View All Exams</button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
