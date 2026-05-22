import { getTranslations } from "next-intl/server";
import LegalPageLayout from "@/components/layout/LegalPageLayout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default async function PrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });

  const sections = [
    { label: t("section_controller"), value: t("controller_name"), text: t("controller_email") },
    { label: t("section_purpose"), text: t("purpose_text") },
    { label: t("section_data"), text: t("data_text") },
    { label: t("section_legal_basis"), text: t("legal_basis_text") },
    { label: t("section_retention"), text: t("retention_text") },
    { label: t("section_no_sale"), text: t("no_sale_text") },
    { label: t("section_no_transfer"), text: t("no_transfer_text") },
    { label: t("section_rights"), text: t("rights_text") },
    { label: t("section_no_form"), text: t("no_form_text") },
  ];

  return <LegalPageLayout title={t("title")} sections={sections} />;
}
