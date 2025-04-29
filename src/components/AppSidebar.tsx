
import { NavLink } from "react-router-dom";
import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { Calendar, Users, Settings, BarChart3, UserSquare2, LayoutGrid } from "lucide-react";

const AppSidebar = () => {
  const menuItems = [
    {
      title: 'Dashboard',
      icon: <BarChart3 size={18} />,
      to: '/'
    },
    {
      title: 'Student Allocation',
      icon: <Users size={18} />,
      to: '/students'
    },
    {
      title: 'Classroom Utilization',
      icon: <LayoutGrid size={18} />,
      to: '/classrooms'
    },
    {
      title: 'Staff Invigilation',
      icon: <UserSquare2 size={18} />,
      to: '/staff'
    },
    {
      title: 'Exam Scheduling',
      icon: <Calendar size={18} />,
      to: '/exams'
    },
    {
      title: 'Settings',
      icon: <Settings size={18} />,
      to: '/settings'
    }
  ];

  return (
    <Sidebar>
      <SidebarHeader className="text-xl font-bold p-4 flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white">E</div>
        <span>ExamFlow</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="glass-card p-3 text-xs text-center">
          <p>ExamFlow v1.0</p>
          <p className="text-muted-foreground">Academic Session 2024-25</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
