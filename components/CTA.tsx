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
        {/* TODO: replace href="#" with real App Store / Play Store URLs before launch */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <AppStoreBadge href="#" />
          <PlayStoreBadge href="#" />
        </div>
      </div>
    </section>
  );
}

function AppStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="Download on the App Store"
      className="flex h-[56px] items-center gap-2.5 rounded-[10px] border border-white/15 bg-black px-4 transition-transform hover:-translate-y-px hover:border-white/30 active:translate-y-0"
    >
      <AppleGlyph />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-normal text-white">
          Download on the
        </span>
        <span className="mt-0.5 text-[19px] font-semibold tracking-tight text-white">
          App Store
        </span>
      </div>
    </a>
  );
}

function PlayStoreBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      aria-label="Get it on Google Play"
      className="flex h-[56px] items-center gap-2.5 rounded-[10px] border border-white/15 bg-black px-4 transition-transform hover:-translate-y-px hover:border-white/30 active:translate-y-0"
    >
      <PlayGlyph />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[9px] font-normal uppercase tracking-[0.12em] text-white">
          Get it on
        </span>
        <span className="mt-1 text-[18px] font-semibold tracking-tight text-white">
          Google Play
        </span>
      </div>
    </a>
  );
}

function AppleGlyph() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="#FFFFFF"
      aria-hidden
    >
      <path d="M16.365 1.43c0 1.14-.466 2.234-1.225 3.005-.81.83-2.124 1.478-3.219 1.387-.13-1.13.413-2.298 1.18-3.062.823-.825 2.213-1.452 3.264-1.33ZM20.5 17.36c-.567 1.292-.84 1.87-1.57 3.011-1.018 1.59-2.453 3.567-4.229 3.585-1.579.017-1.985-1.027-4.128-1.014-2.144.013-2.59 1.034-4.171 1.018-1.776-.018-3.135-1.804-4.153-3.394C-.578 16.65-.866 11.435 1.122 8.66c1.41-1.97 3.633-3.124 5.722-3.124 2.124 0 3.46 1.166 5.214 1.166 1.704 0 2.74-1.168 5.197-1.168 1.86 0 3.83 1.014 5.234 2.768-4.6 2.52-3.853 9.09-1.989 9.058Z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      aria-hidden
    >
      {/* Four-color play triangle approximation of the Google Play mark */}
      <path d="M2 2 L12 12 L2 12 Z" fill="#00C2FF" />
      <path d="M2 12 L12 12 L2 22 Z" fill="#00E676" />
      <path d="M12 12 L20 7.5 L20 12 Z" fill="#FFCD40" />
      <path d="M12 12 L20 12 L20 16.5 Z" fill="#EA4335" />
    </svg>
  );
}
