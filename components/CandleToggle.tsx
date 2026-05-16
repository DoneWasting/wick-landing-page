'use client';

import { useState } from 'react';

export function CandleToggle({ initialOn = false }: { initialOn?: boolean }) {
  const [on, setOn] = useState(initialOn);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      aria-label={on ? 'Alert on' : 'Alert off'}
      className="relative inline-block h-[32px] w-[52px] cursor-pointer bg-transparent p-0"
    >
      <span
        aria-hidden
        className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-[#9A9A9A]"
      />
      <span
        aria-hidden
        className="absolute left-0 top-1/2 h-[28px] w-[18px] rounded-[2px]"
        style={{
          transform: `translate(${on ? 32 : 2}px, -50%)`,
          backgroundColor: on ? '#1FBF7A' : '#E24B4A',
          transition: 'transform 180ms ease, background-color 180ms ease',
        }}
      />
    </button>
  );
}
