import React from 'react';
import './Experience.css';

const Experience = () => {
  const programmingLanguages = [
    { name: "Python", level: "Experienced" },
    { name: "Java", level: "Experienced" },
    { name: "SQL", level: "Experienced" },
    { name: "C#", level: "Experienced" },
  ];

  const developerTools = [
    { name: "GitHub", level: "Experienced" },
    { name: "Microsoft Azure", level: "Experienced" },
    { name: "Bitbucket", level: "Intermediate" },
    { name: "Jenkins", level: "Intermediate" },
  ];

  const frontendSkills = [
    { name: "HTML & CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React", level: "Experienced" },
    { name: "Angular", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "MS SQL Server", level: "Experienced" },
    { name: "C# .NET", level: "Experienced" },
    { name: "Node.js", level: "Experienced" },
    { name: "Oracle DB", level: "Experienced" },
  ];

  const softSkills = [
    { name: "Communication", level: "Experienced" },
    { name: "Problem-Solving", level: "Experienced" },
    { name: "Continuous Learning", level: "Experienced" },
    { name: "Time Management", level: "Experienced" },
  ];

  const interestedIn = [
    { name: "Swift", level: "Intermediate" },
    { name: "MERN Stack", level: "Experienced" },
    { name: "Google Cloud Platform", level: "Intermediate" },
    { name: "Azure Machine Learning", level: "Intermediate" },
  ];

  return (
    <div id="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-container">
        <SkillCard title="Programming Languages" skills={programmingLanguages} />
        <SkillCard title="Developer Tools" skills={developerTools} />
        <SkillCard title="Frontend Development" skills={frontendSkills} />
        <SkillCard title="Backend Development" skills={backendSkills} />
        <SkillCard title="Soft Skills" skills={softSkills} />
        <SkillCard title="Eager to Explore" skills={interestedIn} />
      </div>
    </div>
  );
};

function SkillCard({ title, skills }) {
  return (
    <div className="skill-card">
      <h3 className="skill-title">{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="checkmark">✔</span>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
