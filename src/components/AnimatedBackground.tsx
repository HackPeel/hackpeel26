export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated mesh gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--neon-cyan) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, hsl(var(--primary) / 0.12) 0%, transparent 50%)
          `,
          animation: 'mesh-move 20s ease-in-out infinite',
        }}
      />

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '4s' }} />

      {/* Scan lines */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
             animation: 'scan-line 8s linear infinite',
           }} 
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03] grid-bg" />

      <style>{`
        @keyframes mesh-move {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};
