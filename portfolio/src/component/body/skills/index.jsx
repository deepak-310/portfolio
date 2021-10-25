import React from "react";
import Separator from "../../comman/saperater";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skillCard";
import "./skills.css";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section_title">Skills</label>
      <div className="skills_contaner">
        {data.map((item) => {
          return (
            <div className="skill_section">
              <label className="skill_title">{item.type}</label>
              <div className="skills_list">
                  {item.list.map((skill)=>{
                      return(
                          <SkillCard skill={skill} />
                      )
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
