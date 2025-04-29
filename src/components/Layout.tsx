
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import ThemeToggle from "./ThemeToggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex w-full overflow-hidden">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-6 border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <SidebarTrigger />
            <h1 className="font-semibold text-xl">Exam Management System</h1>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Admin</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                A
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto gradient-bg">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
