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

    const numericPart = match[1];
    const suffix = match[2];
    
    // Check if it has decimal (like 4.9 or 4,9)
    const hasDecimal = numericPart.includes('.') || numericPart.includes(',');
    const decimalSeparator = numericPart.includes(',') ? ',' : '.';
    
    // Parse the number properly
    const normalizedNumber = numericPart.replace(',', '.');
    const targetNumber = parseFloat(normalizedNumber);
    
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
      const currentValue = startValue + (targetNumber - startValue) * easeOutQuart;
      
      // Format with original format
      let formattedValue: string;
      if (hasDecimal) {
        formattedValue = currentValue.toFixed(1).replace('.', decimalSeparator);
      } else if (value.includes('mil')) {
        formattedValue = Math.floor(currentValue).toString();
      } else if (value.includes('M')) {
        formattedValue = (currentValue / 10).toFixed(1).replace('.', ',');
      } else {
        formattedValue = Math.floor(currentValue).toString();
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
