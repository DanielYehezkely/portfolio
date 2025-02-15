import { SkillType } from "../../types/SkillType";
import SkillsCard from "./SkillsCard/SkillsCard";


export const renderSkills = (skills: SkillType[] ) => {
 return  skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })
}