import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  asChild?: boolean;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export const MagneticButton = ({ 
  children, 
  className, 
  variant = "default",
  size = "default",
  onClick,
  asChild = false,
  style,
  type = "button"
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance;
        setPosition({
          x: x * strength * 0.3,
          y: y * strength * 0.3,
        });
        setIsHovered(true);
      } else {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className="inline-block"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        asChild={asChild}
        type={type}
        className={cn(
          "relative transition-all duration-300 ease-out",
          isHovered && "scale-105",
          className
        )}
        style={style}
      >
        {children}
      </Button>
      {isHovered && (
        <span
          className="absolute inset-0 rounded-lg opacity-50 blur-xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          }}
        />
      )}
    </div>
  );
};
