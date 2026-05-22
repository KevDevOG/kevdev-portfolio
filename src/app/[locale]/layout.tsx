import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../../components/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL('https://kevdev-portfolio.vercel.app'),
    title: t("title"),
    description: t("description"),
    keywords: [
      "Kevin Ochoa González",
      "Desarrollador Web",
      "DAW",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Garage Studios",
      "Portfolio"
    ],
    authors: [{ name: "Kevin Ochoa González" }],
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: 'https://kevdev-portfolio.vercel.app',
      siteName: 'Kev Dev Portfolio',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    }
  };
}

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme') || 'system';
      var computedTheme = theme;
      if (theme === 'system') {
        computedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(computedTheme);
    } catch (e) {}
  })();
`;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            {children}
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
