
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  neonBorder?: 'blue' | 'purple' | 'green';
  glow?: boolean;
  float?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  neonBorder, 
  glow = false, 
  float = false 
}: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-5", 
        neonBorder === 'blue' && "neon-border",
        neonBorder === 'purple' && "neon-border-purple",
        neonBorder === 'green' && "neon-border-green",
        glow && "neon-glow",
        float && "animate-float",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
