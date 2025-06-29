import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = {
  Frontend: [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
    
  ],
  Database: [
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
    { name: 'VS code', icon: <VscVscode className="text-blue-500" /> },
  ],
  'BaaS / Services': [
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  ],
};

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 text-lg font-semibold border border-gray-300">Category</th>
                <th className="text-left p-4 text-lg font-semibold border border-gray-300">Skills</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(skills).map(([category, items]) => (
                <tr key={category} className="border-t border-gray-200">
                  <td className="p-4 text-md font-medium border border-gray-300">{category}</td>
                  <td className="p-4 flex flex-wrap gap-4 border border-gray-300">
                    {items.map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-md">{skill.name}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
