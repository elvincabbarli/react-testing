import React, { useEffect, useState } from "react";

interface SkillsProps {
  skills: string[];
}

const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <div>
        {isLoggedIn ? (
          <>
            <h3>Start Learning</h3>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
          </>
        ) : (
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>LogIn</button>
        )}
      </div>
    </div>
  );
};

export default Skills;
