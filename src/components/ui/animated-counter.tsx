import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ value, duration = 2000, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    // Extract numeric part and suffix
    const match = value.match(/^([\d.,]+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numericPart = match[1].replace(/[.,]/g, '');
    const suffix = match[2];
    const targetNumber = parseInt(numericPart, 10);
    
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (targetNumber - startValue) * easeOutQuart);
      
      // Format with original separators if needed
      let formattedValue = currentValue.toString();
      if (value.includes('mil')) {
        formattedValue = currentValue.toString();
      } else if (value.includes('M')) {
        formattedValue = (currentValue / 10).toFixed(1).replace('.', ',');
      }
      
      setDisplayValue(formattedValue + suffix);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
}
