
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kavach.Ai",
      description: "KavachAI is an AI-powered cybersecurity co-pilot with a VS Code extension that detects and mitigates vulnerabilities in real-time across web apps, smart contracts, and local code.  Built a multi-environment platform supporting local, web, and blockchain security, streamlining secure coding in the era of rapid “vibe coding.”",
      technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "MongoDB", "Civic Auth", "Gemini API"],
      links: {
        github: "https://github.com/ArnabhS/kavachai-h4b",
        live: "https://kavachai-h4b.vercel.app/"
      }
    },
    {
      title: "Warline News",
      description: "Developed a MERN-stack web app to counter misinformation during the India-Pakistan conflict using Gemini API.Integrated AI agents to filter and display verified news from trusted sources, reducing misinformation spread.Implemented a real-time red zone heatmap using Google Maps and AI analysis of regional risk data.",
      technologies: ["React.js", "TypeScript", "Node.js", "Tailwind CSS","MongoDB","Gemini API","Google Maps API"],
      links: {
        github: "https://github.com/ArnabhS/crisis-info-platform",
        live: "https://crisis-info-platform.vercel.app/"
      }
    },
    {
      title: "LearnSync", 
      description: "LearnSync is an innovative adaptive learning assessment system that incorporates personality tests to detect disorders like ADHD, dyslexia, and autism, followed by personalized AI responses. This project aims to create a more inclusive and effective learning environment for all users.",
      technologies: ["React.js","Node.js","Express.js","TypeScript", "Tailwind CSS",  "MongoDB", "Cohere AI API"],
      links: {
        github: "https://github.com/ArnabhS/LearnSync",
        live: "https://learn-sync-v1.vercel.app/"
      }
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-6 flex items-center">
        <span className="text-red-500 dark:text-red-400 mr-2">•</span>
        projects
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-800 rounded-lg p-6 bg-white/50 dark:bg-black/30 hover:bg-white/70 dark:hover:bg-black/50 transition-all duration-300 group backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a href={project.links.github} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={project.links.live} className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-red-600 dark:text-red-400 text-xs font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-300 dark:border-gray-700 hover:border-red-500/50 dark:hover:border-red-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;