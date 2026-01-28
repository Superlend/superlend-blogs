import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border";
  
  const variantStyles = {
    primary: "bg-emerald-100 text-emerald-800 border-emerald-300",
    secondary: "bg-gray-100 text-gray-800 border-gray-300"
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
} 