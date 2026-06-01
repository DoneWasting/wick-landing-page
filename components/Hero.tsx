import { DemoCard } from './DemoCard';

export function Hero() {
  return (
    <section id="top" className="border-b border-[#242424]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <h1 className="text-[36px] font-semibold leading-[1.1] tracking-tight text-white md:text-[56px]">
            Never miss a candle close again.
          </h1>
          <p className="mt-5 max-w-[480px] text-[17px] leading-relaxed text-[#9A9A9A] md:text-[18px]">
            Wick fires a local notification at the exact moment your 1m, 5m,
            15m, 1h, or 4h candle closes. UTC-aligned, offline, no account, no
            API key needed.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <a
              href="#download"
              className="rounded-[14px] bg-[#1FBF7A] px-6 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get Wick
            </a>
            <a
              href="#how"
              className="text-[15px] font-semibold text-[#4A90E2] transition-opacity hover:opacity-80"
            >
              See how it works
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <DemoCard />
        </div>
      </div>
    </section>
  );
}
