import type { Metadata } from 'next';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wick',
  description:
    'How Wick handles your data: no account, alerts stay on your device, anonymous market-data and optional crash reporting only.',
};

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
            Last updated: June 3, 2026
          </p>

          <p className="mt-8 text-[16px] leading-relaxed text-[#9A9A9A]">
            Wick (&quot;the app&quot;, &quot;we&quot;, &quot;us&quot;) is a
            candle-close timer and alert tool for traders. This policy explains
            what data the app handles. Wick is built to be privacy-friendly:{' '}
            <strong className="text-white">
              it has no account system, and your alerts never leave your device.
            </strong>
          </p>

          <blockquote className="mt-6 rounded-lg border border-[#242424] border-l-2 border-l-[#1FBF7A] bg-[#141414] px-5 py-4 text-[15px] leading-relaxed text-[#9A9A9A]">
            <strong className="text-white">The short version:</strong> We
            don&apos;t make you sign up. Your alerts and settings are stored only
            on your phone. The app makes anonymous requests to public
            market-data services to show prices, and (if enabled) sends
            anonymous crash reports so we can fix bugs. We don&apos;t sell your
            data, show ads, or track you across apps.
          </blockquote>

          <Section title="1. Information we do not collect">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                We do <strong className="text-white">not</strong> require an
                account, name, email, or phone number to use the app.
              </li>
              <li>
                We do <strong className="text-white">not</strong> collect your
                location.
              </li>
              <li>
                We do <strong className="text-white">not</strong> sell or share
                personal data with advertisers.
              </li>
              <li>
                We do <strong className="text-white">not</strong> track you
                across other apps or websites.
              </li>
            </ul>
          </Section>

          <Section title="2. Information the app processes">
            <p>
              <strong className="text-white">
                a) Your alerts and settings — stored locally only.
              </strong>{' '}
              The alerts you create (timeframe, market, notification timing,
              labels) and your preferences (sound, vibration) are stored{' '}
              <strong className="text-white">only on your device</strong> using
              local storage. This data is never transmitted to us or to any
              server. If you uninstall the app or clear its data, it is gone.
            </p>
            <p className="mt-4">
              <strong className="text-white">
                b) Market price requests — to third-party data providers.
              </strong>{' '}
              To display current prices, the app makes requests to{' '}
              <strong className="text-white">Binance</strong> (cryptocurrency
              prices) and <strong className="text-white">Twelve Data</strong>{' '}
              (forex prices, via our caching proxy). These requests contain no
              personal information about you. As with any internet request, the
              provider can see standard network metadata (such as your IP
              address) under their own privacy policies. If forex data is
              unavailable, the app shows clearly-labeled demo values.
            </p>
            <p className="mt-4">
              <strong className="text-white">
                c) Crash and diagnostic data — via Sentry (optional).
              </strong>{' '}
              If crash reporting is enabled in a given build, the app uses{' '}
              <strong className="text-white">Sentry</strong> to capture crash
              reports and basic diagnostics: error details, device model,
              operating-system version, and app version. This is used{' '}
              <strong className="text-white">
                only to diagnose and fix bugs
              </strong>
              . It is not linked to your identity and is not used for
              advertising.
            </p>
            <p className="mt-4">
              <strong className="text-white">d) Notifications.</strong> The app
              requests permission to send you notifications so it can alert you
              when a candle is about to close. Notifications are scheduled and
              delivered by your device&apos;s operating system.
            </p>
          </Section>

          <Section title="3. How we use information">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Provide the app&apos;s core function (timing candle closes and
                notifying you).
              </li>
              <li>Display market prices.</li>
              <li>Diagnose crashes and improve reliability.</li>
            </ul>
          </Section>

          <Section title="4. Data sharing">
            We do not sell your data. Data is only ever shared with the
            third-party service providers listed in Section 2, strictly to
            provide the functionality described.
          </Section>

          <Section title="5. Data retention">
            Alerts and settings remain on your device until you delete them or
            uninstall the app. Crash reports are retained by Sentry according to
            its retention settings.
          </Section>

          <Section title="6. Children's privacy">
            Wick is a trading-utility app intended for adults. It is not
            directed to children, and we do not knowingly collect data from
            children.
          </Section>

          <Section title="7. Your choices">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                You can deny or revoke notification permission in your device
                settings.
              </li>
              <li>You can clear all app data by deleting the app.</li>
            </ul>
          </Section>

          <Section title="8. Third-party services">
            <ul className="ml-5 list-disc space-y-2">
              <li>
                Binance Privacy Policy:{' '}
                <a
                  href="https://www.binance.com/en/privacy"
                  className="text-[#4A90E2] hover:text-[#7FB0E8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.binance.com/en/privacy
                </a>
              </li>
              <li>
                Twelve Data Privacy Policy:{' '}
                <a
                  href="https://twelvedata.com/privacy"
                  className="text-[#4A90E2] hover:text-[#7FB0E8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://twelvedata.com/privacy
                </a>
              </li>
              <li>
                Sentry Privacy Policy:{' '}
                <a
                  href="https://sentry.io/privacy/"
                  className="text-[#4A90E2] hover:text-[#7FB0E8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://sentry.io/privacy/
                </a>
              </li>
            </ul>
          </Section>

          <Section title="9. Changes to this policy">
            We may update this policy as the app evolves. Material changes will
            be reflected by updating the &quot;Last updated&quot; date above.
          </Section>

          <Section title="10. Contact">
            Questions about this policy? Contact:{' '}
            <a
              href="mailto:diegos@smartmovemiami.com"
              className="text-[#4A90E2] hover:text-[#7FB0E8]"
            >
              diegos@smartmovemiami.com
            </a>
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
