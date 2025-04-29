
import { ReactNode } from "react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  neonBorder?: 'blue' | 'purple' | 'green';
  className?: string;
}

const StatCard = ({ title, value, icon, trend, neonBorder = 'blue', className }: StatCardProps) => {
  return (
    <GlassCard neonBorder={neonBorder} className={cn("animate-fade-in", className)}>
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          {trend && (
            <p className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'} flex items-center gap-1`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
              <span className="text-muted-foreground">vs last term</span>
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${neonBorder === 'blue' ? 'bg-blue-500/10' : neonBorder === 'purple' ? 'bg-purple-500/10' : 'bg-green-500/10'}`}>
          {icon}
        </div>
      </div>
    </GlassCard>
  );
};

export default StatCard;
