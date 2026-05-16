const slots = [
  {
    label: 'Home — active alerts',
    alt: 'Wick app home screen showing active candle alerts',
  },
  {
    label: 'Create alert wizard',
    alt: 'Wick app wizard for creating a new candle alert',
  },
  {
    label: 'Notification preview',
    alt: 'A Wick candle close notification on the lock screen',
  },
];

export function Screenshots() {
  return (
    <section className="border-b border-[#242424] py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* TODO: drop real PNGs into /public/screenshots and replace these placeholder cards with <img> tags (max-height ~600px) */}
        <div className="screenshots-scroll flex gap-6 overflow-x-auto md:justify-center md:overflow-visible">
          {slots.map((s) => (
            <div
              key={s.label}
              role="img"
              aria-label={s.alt}
              className="flex h-[600px] w-[280px] shrink-0 flex-col items-center justify-center rounded-[24px] border border-[#242424] bg-[#161616] p-6 text-center"
            >
              <div className="text-[12px] uppercase tracking-wider text-[#4A525C]">
                Screenshot
              </div>
              <div className="mt-2 text-[14px] text-[#9A9A9A]">{s.label}</div>
              <div className="mt-4 text-[11px] leading-relaxed text-[#4A525C]">
                Drop the PNG at
                <br />
                /public/screenshots/...
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
