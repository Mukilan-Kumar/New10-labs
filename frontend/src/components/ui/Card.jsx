import { cn } from '../../lib/utils';

export default function Card({ children, className = '', glass = false, ...props }) {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg transition-all';
  const glassStyles = glass ? 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border border-white/20' : '';
  
  return (
    <div className={cn(baseStyles, glassStyles, className)} {...props}>
      {children}
    </div>
  );
}
