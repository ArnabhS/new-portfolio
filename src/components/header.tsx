

import img from "../assets/me 2.jpg"

const Header = () => {
  return (
    <div className="border border-gray-300 dark:border-gray-900 rounded p-6 bg-white/50 dark:bg-[#0C0C0C] backdrop-blur-sm transition-colors duration-300">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300">
          <img src={img}  className="w-full h-full rounded-full text-gray-600 dark:text-gray-400 object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Arnabh Sinha</h1>
          <p className="text-gray-600 dark:text-gray-400">@arnabhsinha</p>
        </div>
      </div>
    </div>
  );
};

export default Header;