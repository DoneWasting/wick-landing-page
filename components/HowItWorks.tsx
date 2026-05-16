const steps = [
  { n: 1, title: 'Choose the market.', body: 'Forex or Crypto.' },
  { n: 2, title: 'Pick the timeframe.', body: '1m to 4h.' },
  {
    n: 3,
    title: 'Pick your pre-close warnings.',
    body: 'Stack one or many.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-[#242424] py-20 md:py-24">
      <div className="mx-auto max-w-[760px] px-6">
        <h2 className="text-[28px] font-semibold tracking-tight text-white md:text-[32px]">
          How it works
        </h2>
        <ol className="relative mt-10">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="relative flex items-start gap-5 pb-10 last:pb-0"
            >
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[15px] top-8 h-[calc(100%-2rem)] w-px bg-[#242424]"
                />
              )}
              <div className="relative z-10 flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] text-[14px] font-semibold text-white">
                {s.n}
              </div>
              <div>
                <div className="text-[16px] font-semibold text-white">
                  {s.title}
                </div>
                <div className="mt-1 text-[14px] text-[#9A9A9A]">{s.body}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
