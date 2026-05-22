import { getTranslations } from "next-intl/server";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CookiePolicy" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CookiePolicy" });

  const sections = [
    { label: t("section_current"), text: t("current_text") },
    { label: t("section_technical"), text: t("technical_text") },
    { label: t("section_future"), text: t("future_text") },
  ];

  return <LegalPageLayout title={t("title")} sections={sections} />;
}
