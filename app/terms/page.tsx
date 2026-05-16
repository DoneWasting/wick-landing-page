import type { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Wick',
  description: 'Terms of use for the Wick candle-timer notification app.',
};

// TODO: have legal/counsel review this draft before launch. The liability,
// jurisdiction, and contact sections below are placeholders that need to be
// confirmed against your incorporation jurisdiction and risk posture.

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="border-b border-[#242424] py-16 md:py-20">
        <article className="mx-auto max-w-[680px] px-6">
          <h1 className="text-[32px] font-semibold tracking-tight text-white md:text-[40px]">
            Terms of Service
          </h1>
          <p className="mt-2 text-[13px] text-[#4A525C]">
            Last updated: May 16, 2026
          </p>

          <p className="mt-8 text-[16px] leading-relaxed text-[#9A9A9A]">
            These terms govern your use of Wick, a candle-timer notification
            app. By installing or using Wick you agree to them. If you do not
            agree, do not use the app.
          </p>

          <Section title="License">
            Wick grants you a personal, non-exclusive, non-transferable,
            revocable license to install and use the app on devices you own or
            control, for your own trading workflow. You may not resell,
            redistribute, reverse engineer, or sublicense the app.
          </Section>

          <Section title="Not financial advice">
            Wick is a timer. It fires notifications when candle periods close.
            It does not provide trading signals, recommendations, predictions,
            or advice of any kind. Nothing in the app should be interpreted as
            a suggestion to buy, sell, or hold any financial instrument. All
            trading decisions are yours.
          </Section>

          <Section title="Accuracy">
            Wick aligns to UTC and schedules notifications using your device&apos;s
            operating system. Delivery timing depends on the OS scheduler,
            device power state, Do Not Disturb settings, and system clock
            accuracy. While Wick aims for second-level precision, we do not
            guarantee that every notification will arrive at the exact moment
            of candle close, and we are not responsible for missed or delayed
            alerts.
          </Section>

          <Section title="Availability">
            Wick is provided &quot;as is&quot; and &quot;as available.&quot;
            We do not warrant that the app will be uninterrupted, error-free,
            or compatible with every device or OS version. We may update,
            change, or discontinue the app at any time.
          </Section>

          <Section title="Limitation of liability">
            To the maximum extent permitted by law, Wick and its developers
            are not liable for any direct, indirect, incidental, special,
            consequential, or exemplary damages — including trading losses,
            missed opportunities, or financial harm — arising from your use
            of, or inability to use, the app.
          </Section>

          <Section title="Your responsibilities">
            You are responsible for keeping your device&apos;s notification
            permissions enabled, for the accuracy of your device&apos;s clock,
            and for verifying any trade you place. Wick is one tool in your
            workflow; it is not a substitute for your own diligence.
          </Section>

          <Section title="Changes to these terms">
            We may update these terms. The &quot;Last updated&quot; date above
            reflects the most recent change. Continued use of the app after a
            change constitutes acceptance of the revised terms.
          </Section>

          <Section title="Governing law">
            {/* TODO: replace with your actual jurisdiction (e.g. "These terms
            are governed by the laws of the State of California, USA"). */}
            These terms are governed by the laws of the jurisdiction in which
            the developer is established, without regard to conflict-of-law
            principles.
          </Section>

          <Section title="Contact">
            {/* TODO: replace with your real support email address. */}
            Questions about these terms: <a href="mailto:hello@wick.app" className="text-[#4A90E2] hover:text-[#7FB0E8]">hello@wick.app</a>
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
