
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Socials = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "ArnabhS",
      url: "https://github.com/ArnabhS",
      icon: Github
    },
    {
      platform: "LinkedIn", 
      username: "Arnabh Sinha",
      url: "https://linkedin.com/in/arnabh-sinha",
      icon: Linkedin
    },
    {
      platform: "Twitter",
      username: "ArnabhSinha",
      url: "https://twitter.com/ArnabhSinha", 
      icon: Twitter
    },
    {
      platform: "Email",
      username: "arnabhsinha.official@gmail.com",
      url: "mailto:arnabhsinha.official@gmail.com",
      icon: Mail
    }
  ];

  return (
    <section>
      <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-6 flex items-center">
        <span className="text-red-500 dark:text-red-400 mr-2">•</span>
        socials
      </h2>
      <div className="space-y-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-red-400 dark:hover:text-red-400 transition-all duration-300 group p-2 rounded-lg "
            >
              <Icon className="w-5 h-5 text-gray-500 dark:text-gray-500 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
              <span className="text-sm">{social.username}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Socials;