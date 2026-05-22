import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../../components/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    metadataBase: new URL('https://iamkevdev.es'),
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
      url: 'https://iamkevdev.es',
      siteName: 'Kev Dev Portfolio',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://iamkevdev.es/brand/kevdev-logo-transparent.png',
          width: 800,
          height: 800,
          alt: 'Kev Dev Logo',
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t("title"),
      description: t("description"),
      images: ['https://iamkevdev.es/brand/kevdev-logo-transparent.png'],
    }
  };
}

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
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider>
        {children}
        <Analytics />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

