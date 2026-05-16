import {
  ClockUtcIcon,
  CandleStackIcon,
  WarningBellsIcon,
} from './Icons';

const features = [
  {
    Icon: ClockUtcIcon,
    title: 'UTC-aligned to the second.',
    body: 'Open the app at 12:34:30 UTC and your 1m alert fires at exactly 12:35:00.',
  },
  {
    Icon: CandleStackIcon,
    title: 'Forex + Crypto, every timeframe.',
    body: '1m, 5m, 15m, 1h, 4h — pick the candles you actually trade.',
  },
  {
    Icon: WarningBellsIcon,
    title: 'Pre-close warnings.',
    body: 'Set 1, 2, 3, 5, or 10 minutes before close. Stack as many as you want per alert.',
  },
];

export function WhyWick() {
  return (
    <section className="border-b border-[#242424] py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="rounded-[14px] border border-[#242424] bg-[#161616] p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {features.map(({ Icon, title, body }) => (
              <div key={title}>
                <Icon size={28} color="#7FB0E8" />
                <h3 className="mt-4 text-[16px] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#9A9A9A]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
