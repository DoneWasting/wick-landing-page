export function Footer() {
  return (
    <footer className="border-t border-[#242424]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-6 py-6 text-[13px] text-[#9A9A9A] sm:flex-row">
        <div>© Wick 2026 · Candle timer for traders.</div>
        <div className="flex items-center gap-5">
          <a href="#" className="transition-colors hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
