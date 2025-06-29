const Experience = () => {
  const experiences = [
    {
      company: "Unimad.ai",
      role: "Full Stack Developer Intern",
      duration: "April 2025 - Present",
      description: [
        " Designed scalable backend APIs in Django for AI-driven interview preparation, managing session storage and real-time updates",
        "Partnered with prompt engineers to incorporate LLM workflows for optimized interview responses.",
        "Engineered front-end functionalities with React Query and Zustand, enhancing data synchronization."
      ]
    },
    {
      company: "True Mentor",
      role: "Full Stack Developer Intern", 
      duration: "Jan 2025 - April 2025",
      description: [
        "Constructed a full-stack platform sustaining 4000+ users with consistent reliability.",
        " Implemented a live messaging feature using WebSockets in Node.js, minimizing API latency by 50%.",
        " Enhanced UI performance by creating responsive React.js interfaces, accelerating load times by 40%."
      ]
    },
    {
      company: "Daphnis Labs",
      role: " Full Stack Developer Intern",
      duration: "Oct 2024 - Jan 2025", 
      description: [
        "Engineered backend services in Node.js, achieving a 30% reduction in response delay",
        "Refined MongoDB queries, elevating database throughput by 45%.",
        "Transformed Figma mockups into adaptive React.js components, increasing page responsiveness by 30%."
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-6 flex items-center">
        <span className="text-red-500 dark:text-red-400 mr-2">•</span>
        experiences
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-l-2 border-gray-300 dark:border-gray-800 pl-6 relative transition-colors duration-300"
          >
            <div className="absolute -left-2 top-0 w-3 h-3 bg-red-600 dark:bg-red-500 rounded-full"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
              <p className="text-red-600 dark:text-red-400 text-sm mb-1">{exp.role}</p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mb-3">{exp.duration}</p>
              <ul className="list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
