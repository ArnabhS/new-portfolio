
const About = () => {
  return (
    <section>
      <h2 className="text-xl font-bold text-red-500 dark:text-red-400 mb-4 flex items-center">
        <span className="text-red-500 dark:text-red-400 mr-2">•</span>
        about
      </h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 transition-colors duration-300">
        <p>
          <span className="text-gray-500 dark:text-gray-500">[ name = "arnabh" ; role = "developer" ]</span>
        </p>
        <p>
          I'm a a full stack engineer with proficiency in both frontend and backend development. I have worked with 5+ startups in one of which I built a scalable platform <a className="text-blue-400" href="http://truementor.in/">(truementor.in)</a> which supports over 4000+ users with a daily visitors rate of 700.Integrated a payment gateway which successfully completed 400+ transactions.I am also a passionate individual with a keen interest in working in a fast paced startup environment.
        </p>
      </div>
    </section>
  );
};

export default About;