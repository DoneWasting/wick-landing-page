import { WickLogo } from './WickLogo';

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#242424] bg-[#0E0E0E]">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <WickLogo size={24} />
          <span className="text-[17px] font-semibold tracking-tight text-white">
            Wick
          </span>
        </a>
        <a
          href="#download"
          className="text-[14px] font-semibold text-white transition-opacity hover:opacity-80"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
