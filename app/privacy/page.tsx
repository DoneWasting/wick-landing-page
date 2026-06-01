import type { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wick',
  description: 'How Wick handles your data: it doesn\'t.',
};

// TODO: have legal/counsel review this draft before launch. The claims below
// are written to match the public product copy (offline, no account, no API
// key). If any of that changes (analytics, crash reporting, cloud sync,
// telemetry), this page must be updated first.

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="border-b border-[#242424] py-16 md:py-20">
        <article className="mx-auto max-w-[680px] px-6">
          <h1 className="text-[32px] font-semibold tracking-tight text-white md:text-[40px]">
            Privacy Policy
          </h1>
          <p className="mt-2 text-[13px] text-[#4A525C]">
            Last updated: May 16, 2026
          </p>

          <p className="mt-8 text-[16px] leading-relaxed text-[#9A9A9A]">
            Wick is a candle-timer notification app for traders. It runs
            entirely on your device. This page describes what data Wick handles
            and how.
          </p>

          <Section title="What Wick collects">
            Nothing. Wick has no account system, no login, no email capture, no
            API key requirement, and no analytics or telemetry. We do not
            operate a server that receives data from the app.
          </Section>

          <Section title="Data stored on your device">
            The alerts you create (market, timeframe, and pre-close warnings)
            are saved in local storage on your device so they persist between
            app launches. This data never leaves your device. Uninstalling
            Wick removes it.
          </Section>

          <Section title="Notifications">
            Wick schedules local notifications through your operating system.
            These are delivered by iOS or Android directly; Wick does not use
            a push notification server, and no message content is transmitted
            over the network.
          </Section>

          <Section title="Network use">
            Wick operates offline. The app itself does not make network
            requests during normal use. {/* TODO: if you ever add an update
            check, version-check ping, or crash reporter, document it here. */}
          </Section>

          <Section title="Permissions">
            Wick requests permission to display notifications. That permission
            is required for the app to function. Wick does not request access
            to contacts, location, photos, the microphone, or the camera.
          </Section>

          <Section title="Third parties">
            Wick is distributed through the Apple App Store and Google Play.
            Those storefronts have their own privacy policies covering the
            download and update process, which are independent of Wick.
          </Section>

          <Section title="Children">
            Wick is not directed at children under 13 and we do not knowingly
            collect data from anyone, including children.
          </Section>

          <Section title="Changes to this policy">
            If we change how Wick handles data, we will update this page and
            the &quot;Last updated&quot; date above. Material changes will also
            be noted in the app&apos;s release notes.
          </Section>

          <Section title="Contact">
            {/* TODO: replace with your real support email address. */}
            Questions about this policy: <a href="mailto:hello@wick.app" className="text-[#4A90E2] hover:text-[#7FB0E8]">hello@wick.app</a>
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-[18px] font-semibold text-white">{title}</h2>
      <div className="mt-3 text-[15px] leading-relaxed text-[#9A9A9A]">
        {children}
      </div>
    </section>
  );
}
