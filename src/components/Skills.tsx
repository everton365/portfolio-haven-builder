import React from "react";


const skills = [
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 90 },
  { name: "Tailwind", level: 30 },
  { name: "CSS", level: 80 },
  { name: "SASS", level: 70 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 60 },
  { name: "SQL", level: 65 },
  { name: "Git", level: 80 },
  { name: "GitHub", level: 85 },
];

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-primary h-4 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  // Dividindo o array de skills em dois grupos de 4
  const firstHalf = skills.slice(0, 5);
  const secondHalf = skills.slice(5, 10);

  return (
    <>
      <div className="h-screen/2 w-full mt-7 flex items-center justify-center bg-white">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Habilidades
          </h1>
          <div className="flex justify-between space-x-6">
            {/* Card com as duas listas de skills */}
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col space-y">
                {firstHalf.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col space-y">
                {secondHalf.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Skills;
