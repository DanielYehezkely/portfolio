import React from "react";
import { SkillType } from "../../../types/SkillType";



const SkillsCard: React.FC<SkillType> = ({icon, title, text}) => {
  return (
  <article>
    <span className="">{icon}</span>
    <h4 className="mt-6 font-bold">{title}</h4>
    <p className="mt-2 text-slate-500">{text}</p>
  </article>
)
};

export default SkillsCard;
