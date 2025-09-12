'use client';

import { useEffect, useState } from 'react';

type CountdownTimerProps = {
  targetDate: Date;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

type TimeUnitProps = {
  value: number;
  label: string;
};

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-lg w-20 h-20 flex items-center justify-center">
        <span className="text-3xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="mt-2 text-sm font-medium">{label}</span>
    </div>
  );
}