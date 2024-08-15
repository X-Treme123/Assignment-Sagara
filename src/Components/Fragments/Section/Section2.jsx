export const Section2 = () => {
  return (
    <section className="flex flex-col items-center h-auto px-8 py-16 bg-white md:flex-row md:h-screen justify-evenly">
      <div className="w-full p-4 md:w-2/5 md:p-8">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl text-customRed md:text-left">
          WHY SAGARA <br /> IT CERTIFICATION?
        </h2>
        <div className="p-4 space-y-8 ">
          <div className="flex flex-col items-start md:flex-row">
            <div className="flex items-center justify-center p-2 mb-4 mr-4 bg-red-100 rounded-lg md:mb-0">
              <img
                src="/Icons/shield.png"
                alt="Global Credibility"
                className="w-12 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl text-customRed">
                Global Credibility Boost
              </h3>
              <p className="text-sm text-gray-700 md:text-lg">
                Our certifications are globally recognized, enhancing your
                credibility, and opening doors to new opportunities.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start md:flex-row">
            <div className="flex items-center justify-center p-2 mb-4 mr-4 bg-red-100 rounded-lg md:mb-0">
              <img
                src="/Icons/rating.png"
                alt="Empowering Careers"
                className="w-12 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl text-customRed">
                Empowering Careers
              </h3>
              <p className="text-sm text-gray-700 md:text-lg">
                Equipped to advance your career, secure promotions, and pursue
                new job opportunities in the ever-evolving tech industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start md:flex-row">
            <div className="flex items-center justify-center p-2 mb-4 mr-4 bg-red-100 rounded-lg md:mb-0">
              <img
                src="/Icons/medal.png"
                alt="Expertise Validation"
                className="w-12 h-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl text-customRed">
                Expertise Validation
              </h3>
              <p className="text-sm text-gray-700 md:text-lg">
                Showcase your expertise and validate your skills with globally
                recognized certifications that employers trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-8 md:w-2/5 md:mt-0">
        <img
          src="/images/Landing2.png"
          alt="Why Sagara IT Certification"
          className="w-full h-auto md:w-3/4"
        />
      </div>
    </section>
  );
};
