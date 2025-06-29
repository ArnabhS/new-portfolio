

import img from "../assets/me 2.jpg"
import { Download } from 'lucide-react';

const Header = () => {
  const handleResumeDownload = () => {
    
    const link = document.createElement('a');
    link.href = '/resume.pdf'; 
    link.download = 'Arnabh_Sinha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="border border-gray-300 dark:border-gray-900 rounded p-6 bg-white/50 dark:bg-[#0C0C0C] backdrop-blur-sm transition-colors duration-300">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300">
          <img src={img}  className="w-full h-full rounded-full text-gray-600 dark:text-gray-400 object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Arnabh Sinha</h1>
          <p className="text-gray-600 dark:text-gray-400">@arnabhsinha</p>
        </div>
         </div>
        <button
          onClick={handleResumeDownload}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
        >
          <Download className="w-4 h-4 group-hover:animate-bounce" />
          <span className="text-sm font-medium">Resume</span>
        </button>
     </div>
    </div>
  );
};

export default Header;