import React from "react";

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl font-medium capitalize tracking-wider">{text}</h2>
    </div>
  );
};

export default SectionTitle;
