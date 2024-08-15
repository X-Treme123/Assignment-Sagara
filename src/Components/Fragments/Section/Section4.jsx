export const Section4 = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8 text-gray-800 bg-white">
      <h2 className="mb-8 text-2xl text-center md:text-4xl font-Inter text-customRed">
        Empower Yourself with <br />
        <span className="font-InterBold">Our Certification</span>
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8 space-x-2 md:space-x-4">
        <button className="px-4 py-2 mb-2 font-semibold text-white rounded shadow bg-customRed md:mb-0">
          FRONT END DEVELOPER
        </button>
        <button className="px-4 py-2 mb-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow md:mb-0">
          BACK END DEVELOPER
        </button>
        <button className="px-4 py-2 mb-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow md:mb-0">
          QUALITY ASSURANCE
        </button>
        <button className="px-4 py-2 mb-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow md:mb-0">
          UI/UX DESIGN
        </button>
      </div>

      <div className="flex flex-col items-center w-full md:flex-row justify-evenly md:space-x-8">
        <div className="flex justify-center w-full md:w-2/5">
          <img
            src="/images/coding.png"
            alt="Coding Image"
            className="object-cover w-11/12 h-auto rounded shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-8 md:w-2/5 md:mt-0">
          <h3 className="text-xl font-bold md:text-4xl 2xl:text-5xl text-customRed 2xl:mb-4">
            Front End Certification
          </h3>
          <div className="flex items-start my-4">
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center p-3 mr-4 bg-white rounded-full shadow-xl">
                <img
                  src="/Icons/kotak4.png"
                  alt="Take Test"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-700 md:text-lg">
                This program equips you with the essential skills and knowledge
                to create visually appealing websites or applications.
              </p>
            </div>
          </div>
          <div className="flex items-start my-4">
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center p-1 mr-4 bg-white rounded-full shadow-xl">
                <img
                  src="/Icons/kotak2.png"
                  alt="Take Test"
                  className="w-12 h-12 md:w-14 md:h-14"
                />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-700 md:text-lg">
                Evaluates your proficiency in frontend programming languages and
                other relevant frontend technologies.
              </p>
            </div>
          </div>
          <div className="flex items-start my-4">
            <div className="relative flex-shrink-0">
              <div className="flex items-center justify-center p-3 mr-4 bg-white rounded-full shadow-xl">
                <img
                  src="/Icons/users.png"
                  alt="Take Test"
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-700 md:text-lg">
                Gain recognition as a qualified frontend developer, enhance your
                career prospects, and open doors to exciting job opportunities.
              </p>
            </div>
          </div>
          <button className="px-8 py-2 mt-6 font-semibold text-white rounded shadow-lg bg-customRed">
            Get Detail
          </button>
        </div>
      </div>
    </section>
  );
};
