import { useTranslation } from "next-i18next";

type SupportedLang = "pl" | "en";

export const useLang = () => {
  const currentLang = useTranslation().i18n.language as SupportedLang;

  return {
    currentLang,
  };
};
