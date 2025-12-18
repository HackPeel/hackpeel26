import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const TiltCard = ({ 
  children, 
  className,
  glowColor = 'hsl(var(--primary))'
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 400;
    const rotateY = (centerX - x) / 400;

    setRotation({ x: rotateX, y: rotateY });
    setGlowPosition({ 
      x: (x / rect.width) * 100, 
      y: (y / rect.height) * 100 
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="relative group perspective-1000"
      style={{
        perspective: '1000px',
      }}
    >
      <Card
        className={cn(
          "relative transition-all duration-300 ease-out transform-gpu",
          "hover:shadow-2xl",
          className
        )}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.005 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {isHovered && (
          <div
            className="absolute inset-0 rounded-lg opacity-20 blur-xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor} 0%, transparent 50%)`,
            }}
          />
        )}
        <div className="relative z-10" style={{ transform: 'translateZ(5px)' }}>
          {children}
        </div>
      </Card>
    </div>
  );
};
