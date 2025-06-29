
import { Code, Database, Cloud, GitBranch, Monitor, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "JavaScript", "TypeScript"],
      color: "blue"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Docker"],
      color: "orange"
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["Google Cloud Platform (GCP)", "AWS"],
      color: "purple"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Supabase"],
      color: "green"
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind", "ReactQuery", "Zustand"],
      color: "cyan"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Spring Boot"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        icon: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-50 dark:bg-blue-950/30",
        border: "border-blue-200 dark:border-blue-800/50",
        skill: "bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700/50"
      },
      orange: {
        icon: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-50 dark:bg-orange-950/30",
        border: "border-orange-200 dark:border-orange-800/50",
        skill: "bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-700/50"
      },
      purple: {
        icon: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-50 dark:bg-purple-950/30",
        border: "border-purple-200 dark:border-purple-800/50",
        skill: "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700/50"
      },
      green: {
        icon: "text-green-600 dark:text-green-400",
        bg: "bg-green-50 dark:bg-green-950/30",
        border: "border-green-200 dark:border-green-800/50",
        skill: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700/50"
      },
      cyan: {
        icon: "text-cyan-600 dark:text-cyan-400",
        bg: "bg-cyan-50 dark:bg-cyan-950/30",
        border: "border-cyan-200 dark:border-cyan-800/50",
        skill: "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-200 border-cyan-200 dark:border-cyan-700/50"
      },
      red: {
        icon: "text-red-600 dark:text-red-400",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-800/50",
        skill: "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200 border-red-200 dark:border-red-700/50"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section>
      <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-6 flex items-center">
        <span className="text-red-500 dark:text-red-400 mr-2">•</span>
        skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          const colors = getColorClasses(category.color);
          
          return (
            <div 
              key={index}
              className={`border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm ${colors.bg} ${colors.border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:shadow-sm hover:scale-105 ${colors.skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;