import { getTranslations } from "next-intl/server";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LegalNotice" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function AvisoLegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LegalNotice" });

  const sections = [
    { label: t("section_owner"), value: t("owner_name") },
    { label: t("section_brand"), value: t("brand_name") },
    { label: t("section_location"), value: t("location_val") },
    {
      label: t("section_contact"),
      value: t("contact_email"),
      text: t("contact_phone"),
    },
    { label: t("section_purpose"), text: t("purpose_text") },
    { label: t("section_prices"), text: t("prices_text") },
    { label: t("section_content"), text: t("content_text") },
    { label: t("section_prohibition"), text: t("prohibition_text") },
    { label: t("section_liability"), text: t("liability_text") },
  ];

  return <LegalPageLayout title={t("title")} sections={sections} />;
}
