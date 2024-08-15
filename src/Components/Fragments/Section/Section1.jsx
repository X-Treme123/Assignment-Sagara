import { Link } from "react-router-dom";

export const Section1 = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto text-center bg-white md:text-left">
      <div className="relative w-full h-auto ">
        <img
          src="/images/Landing.jpg"
          alt="Landing"
          className="object-cover object-right w-full h-64 md:h-96 lg:h-full md:object-center"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full p-4 text-white md:w-3/5 md:p-8">
          <div className="w-full 2xl:w-4/5">
            <h1 className="text-xl font-bold leading-tight tracking-widest 2xl:tracking-wide md:text-4xl lg:text-5xl 2xl:text-7xl font-Inter md:leading-normal">
              Live <span className="font-InterBold">Your Best</span> Life Using
              <span className="font-InterBold"> Your Strengths</span>
            </h1>
            <p className="flex flex-col my-4 text-xs tracking-widest font-Inter md:text-base lg:text-lg">
              <span>
                Meet some of the people who have completed the Sagara Technology
              </span>
              <span>
                and use their results to maximize their potential at work and
              </span>
              <span>everywhere else.</span>
            </p>
            <Link to="/dashboard" className="px-6 py-2 text-xs text-white rounded-md bg-customRed md:text-base lg:text-lg md:px-10 md:py-3 hover:bg-red-900 transition-all">
              Get Sertification
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-auto ">
        <div className="flex flex-col w-full my-8 lg:flex-row lg:w-4/5">
          <div className="flex flex-col items-center justify-center w-full p-4 lg:items-start lg:w-1/4">
            <div className="w-1/3 h-1 mb-4 bg-black rounded"></div>
            <h3 className="text-xl font-bold font-Inter md:text-2xl">
              ABOUT US
            </h3>
          </div>
          <div className="w-full p-4 lg:w-3/4 md:p-8 font-Inter">
            <h4 className="text-xl font-semibold md:text-2xl text-customRed">
              SAGARA IT CERTIFICATION{" "}
            </h4>
            <p className="mt-4 mb-2 text-lg font-bold text-transparent md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-l from-customRed to-black">
              <span className="text-customRed font-InterBold">
                Join thousands
              </span>{" "}
              of professionals who have elevated their skills and carved out
              success in the technology industry. Start your journey to
              excellence with us today!
            </p>
            <p className="w-full text-sm text-gray-500 md:text-xl lg:text-2xl lg:w-4/5">
              Boost your career prospects in the digital era with
              industry-recognized information technology certifications from
              Sagara IT Certification.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
