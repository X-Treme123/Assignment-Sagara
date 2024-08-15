import { Footer } from "../Components/Fragments/Footer/Footer";
import { Navbar } from "../Components/Fragments/Navbar/Navbar";
import { Section1 } from "../Components/Fragments/Section/Section1";
import { Section2 } from "../Components/Fragments/Section/Section2";
import { Section3 } from "../Components/Fragments/Section/Section3";
import { Section4 } from "../Components/Fragments/Section/Section4";

export const LandingPage = () => {
  return (
    <div className="min-h-screen min-w-screen">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
};
