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
        {/* Badges are disabled until launch. Swap the `comingSoon` props once store URLs exist. */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <AppStoreBadge href="#" comingSoon />
          <PlayStoreBadge href="#" comingSoon />
        </div>
        <p className="mt-5 text-[13px] text-[#6B6B6B]">
          iOS and Android apps coming soon.
        </p>
      </div>
    </section>
  );
}

type BadgeProps = { href: string; comingSoon?: boolean };

function ComingSoonRibbon() {
  return (
    <span className="absolute -right-2 -top-2 rounded-full bg-[#1FBF7A] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
      Soon
    </span>
  );
}

function AppStoreBadge({ href, comingSoon = false }: BadgeProps) {
  return (
    <a
      href={comingSoon ? undefined : href}
      aria-label="Download on the App Store"
      aria-disabled={comingSoon}
      className={`relative flex h-[56px] items-center gap-2.5 rounded-[10px] border border-white/15 bg-black px-4 transition-transform ${
        comingSoon
          ? 'cursor-default opacity-60'
          : 'hover:-translate-y-px hover:border-white/30 active:translate-y-0'
      }`}
    >
      {comingSoon && <ComingSoonRibbon />}
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

function PlayStoreBadge({ href, comingSoon = false }: BadgeProps) {
  return (
    <a
      href={comingSoon ? undefined : href}
      aria-label="Get it on Google Play"
      aria-disabled={comingSoon}
      className={`relative flex h-[56px] items-center gap-2.5 rounded-[10px] border border-white/15 bg-black px-4 transition-transform ${
        comingSoon
          ? 'cursor-default opacity-60'
          : 'hover:-translate-y-px hover:border-white/30 active:translate-y-0'
      }`}
    >
      {comingSoon && <ComingSoonRibbon />}
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
      viewBox="0 0 512 512"
      fill="none"
      aria-hidden
    >
      {/* Official Google Play four-color mark */}
      <path
        d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49z"
        fill="#00D2FF"
      />
      <path
        d="M345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 201.79z"
        fill="#00E676"
      />
      <path
        d="M84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-60.6z"
        fill="#FF3D00"
      />
      <path
        d="M449.38 231.61 374.55 190.6l-66.43 65.4 66.43 65.4 74.83-41.01c20.83-11.41 20.83-37.37 0-48.78z"
        fill="#FFEA00"
      />
    </svg>
  );
}
