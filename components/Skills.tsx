import React from 'react';
import {
  SiTensorflow, SiPytorch, SiScikitlearn, SiPython,
  SiJavascript, SiReact, SiNodedotjs, SiMongodb,
  SiTailwindcss, SiGithub, SiDocker, SiPostman
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
  { name: 'PyTorch', icon: <SiPytorch className="text-red-500" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="text-blue-600" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
  { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
];

const TechSkills = () => {
  return (
    <section className="py-10 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        🚀 Tech Stack & AI Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-800 shadow hover:scale-105 transform transition duration-200">
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
