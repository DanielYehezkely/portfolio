import React from "react";
import { useTranslation } from "react-i18next";

interface SectionTitleProps {
  i18nKey: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ i18nKey }) => {
  const { t } = useTranslation('common');

  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl font-medium capitalize tracking-wider">{t(i18nKey)}</h2>
    </div>
  );
};

export default SectionTitle;
