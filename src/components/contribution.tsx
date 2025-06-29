import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: string;
  color: string;
}

type Contributions = ContributionDay[][];

const ContributionGraph = () => {
  const [contributions, setContributions] = useState<Contributions>([]);
 

  useEffect(() => {
    const fetchContributions = async () => {
      const res = await fetch(
        "https://github-contributions-api.deno.dev/ArnabhS.json"
      );
      const data = await res.json();
      setContributions(data.contributions);
    };
    fetchContributions();
  }, []);

  const getCustomColor = (level: string) => {
    if (level === "NONE") {
      return "bg-white dark:bg-black";
    }

    switch (level) {
      case "FIRST_QUARTILE":
        return "bg-red-200 dark:bg-red-200";
      case "SECOND_QUARTILE":
        return "bg-red-300 dark:bg-red-300";
      case "THIRD_QUARTILE":
        return "bg-red-400 dark:bg-red-400";
      case "FOURTH_QUARTILE":
        return "bg-red-500 dark:bg-red-500";
      default:
        return "bg-white dark:bg-black";
    }
  };

  return (
  <section className="w-full">
    <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 sm:p-6 bg-white/50 dark:bg-black/30 backdrop-blur-sm transition-colors duration-300">
      <div className="overflow-x-auto lg:overflow-x-visible scrollbar-thin scrollbar-thumb-black dark:scrollbar-thumb-white">
        <div className="min-w-[800px] flex">
          {/* X-axis: weeks */}
          <div className="grid grid-cols-53 gap-1">
            {contributions.map((week, i) => (
              <div key={i} className="flex flex-col gap-1">
                {week.map((day, j) => (
                  <div
                    key={`${i}-${j}`}
                    className={`w-3 h-3 rounded-sm ${getCustomColor(
                      day.contributionLevel
                    )} hover:ring-1 hover:ring-gray-400 dark:hover:ring-white/30 transition-all cursor-pointer`}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

};

export default ContributionGraph;
