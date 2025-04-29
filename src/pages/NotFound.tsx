
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import GlassCard from "@/components/GlassCard";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-bg p-4">
      <GlassCard className="max-w-md w-full text-center py-12 px-6 animate-float" neonBorder="purple">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <p className="text-md text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="px-6 py-3 bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors inline-block">
          Return to Dashboard
        </Link>
      </GlassCard>
    </div>
  );
};

export default NotFound;
