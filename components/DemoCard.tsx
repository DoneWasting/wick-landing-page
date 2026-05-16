import { TimerIcon, BellIcon } from './Icons';
import { CandleToggle } from './CandleToggle';

export function DemoCard() {
  return (
    <div className="w-full max-w-[420px] rounded-[14px] border border-[#242424] bg-[#161616] p-5 shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 shrink-0">
          <TimerIcon size={28} color="#9A9A9A" strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[15px] font-semibold text-white">
            15 minutes candle
          </div>
          <div className="mt-2 flex items-center gap-2 text-[13px] text-[#9A9A9A]">
            <BellIcon size={14} color="#9A9A9A" strokeWidth={1.8} />
            <span>3 minutes before</span>
          </div>
          <div className="mt-3 text-[13px] text-[#7FB0E8]">
            Next: 02:14 · 14:30
          </div>
        </div>
        <div className="shrink-0 self-center">
          <CandleToggle initialOn />
        </div>
      </div>
    </div>
  );
}
