import { useEffect, useState } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  delay?: number;
}

export function MetricCard({ value, label, description, delay = 0 }: MetricCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`metric-card transform transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="text-3xl md:text-4xl font-bold text-primary number-animate mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-foreground mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}