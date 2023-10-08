const resume = () => {
  return (
    <div className="resume-container flex flex-col md:flex-row md:space-x-8 mx-4 md:mx-28 min-h-screen text-white">
      <div className="experience mb-4 md:mb-0">
        <h1 className="font-bold text-2xl font-capital font-leagueSpartan hover:text-pink-700 hover:underline">
          EXPERIENCE
        </h1>
      </div>
      <div className="skills mb-4 md:mb-0">
        <h1 className="font-bold text-2xl font-capital font-leagueSpartan hover:text-pink-700 hover:underline">
          SKILLS
        </h1>
      </div>
      <div className="education mb-4 md:mb-0">
        <h1 className="font-bold text-2xl font-capital font-leagueSpartan hover:text-pink-700 hover:underline">
          EDUCATION
        </h1>
      </div>
      <div className="language mb-4 md:mb-0">
        <h1 className="font-bold text-2xl font-capital font-leagueSpartan hover:text-pink-700 hover:underline">
          LANGUAGE
        </h1>
      </div>
      <div className="Services mb-4 md:mb-0">
        <h1 className="font-bold text-2xl font-capital font-leagueSpartan hover:text-pink-700 hover:underline">
          WHAT CAN I DO
        </h1>
      </div>
    </div>
  );
};

export default resume;
