import Image from 'next/image';
import mainPng from '../assets/screenshots/main.png';
import menuPng from '../assets/screenshots/menu.png';
import newAlertPng from '../assets/screenshots/new-alert.png';
import settingsPng from '../assets/screenshots/settings.png';

const slots = [
  {
    label: 'Home, active alerts',
    alt: 'Wick app home screen showing active candle alerts',
    src: mainPng,
  },
  {
    label: 'Create alert wizard',
    alt: 'Wick app wizard for creating a new candle alert',
    src: newAlertPng,
  },
    {
    label: 'Settings and preferences',
    alt: 'Wick app settings screen for customizing alerts',
    src: settingsPng,
  },
  {
    label: 'Pro version Coming soon',
    alt: 'Wick app menu screen showing pro features coming soon',
    src: menuPng,
  },
];

export function Screenshots() {
  return (
    <section className="border-b border-[#242424] py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="screenshots-scroll flex gap-6 overflow-x-auto md:justify-center md:overflow-visible">
          {slots.map((s) => (
            <div
              key={s.label}
              className="flex h-[600px] w-[280px] shrink-0 flex-col rounded-[24px] border border-[#242424] bg-[#161616] p-5"
            >
              <div className="text-[12px] uppercase tracking-wider text-[#4A525C]">
                Screenshot
              </div>
              <div className="mt-2 text-[14px] text-[#9A9A9A]">{s.label}</div>
              <div className="relative mt-5 flex-1 overflow-hidden rounded-[20px] bg-[#0C0C0C]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
