export function CTA() {
  return (
    <section
      id="download"
      className="border-b border-[#242424] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[760px] px-6 text-center">
        <h2 className="text-[32px] font-semibold tracking-tight text-white md:text-[40px]">
          Trade smarter with precise timing.
        </h2>
        <p className="mt-4 text-[16px] text-[#9A9A9A]">
          Candle Timer for Traders.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <ComingSoonCard store="App Store" logo={<AppleLogo />} />
          <ComingSoonCard store="Play Store" logo={<GooglePlayLogo />} />
        </div>
      </div>
    </section>
  );
}

function ComingSoonCard({
  store,
  logo,
}: {
  store: string;
  logo: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-[#242424] bg-[#161616] px-5 py-4">
      <div className="opacity-40">{logo}</div>
      <div className="text-left">
        <div className="text-[11px] uppercase tracking-wider text-[#4A525C]">
          Coming soon to
        </div>
        <div className="text-[14px] font-semibold text-[#9A9A9A]">{store}</div>
      </div>
    </div>
  );
}

function AppleLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="#9A9A9A"
      aria-hidden
    >
      <path d="M16.365 1.43c0 1.14-.466 2.234-1.225 3.005-.81.83-2.124 1.478-3.219 1.387-.13-1.13.413-2.298 1.18-3.062.823-.825 2.213-1.452 3.264-1.33ZM20.5 17.36c-.567 1.292-.84 1.87-1.57 3.011-1.018 1.59-2.453 3.567-4.229 3.585-1.579.017-1.985-1.027-4.128-1.014-2.144.013-2.59 1.034-4.171 1.018-1.776-.018-3.135-1.804-4.153-3.394C-.578 16.65-.866 11.435 1.122 8.66c1.41-1.97 3.633-3.124 5.722-3.124 2.124 0 3.46 1.166 5.214 1.166 1.704 0 2.74-1.168 5.197-1.168 1.86 0 3.83 1.014 5.234 2.768-4.6 2.52-3.853 9.09-1.989 9.058Z" />
    </svg>
  );
}

function GooglePlayLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="#9A9A9A"
      aria-hidden
    >
      <path d="M3 2.5v19c0 .5.4.8.8.5l16.4-9.5c.4-.2.4-.8 0-1L3.8 2c-.4-.3-.8 0-.8.5Z" />
    </svg>
  );
}
