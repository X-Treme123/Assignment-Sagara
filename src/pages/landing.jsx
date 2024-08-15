import { Footer } from "../components/fragments/Footer/Footer";
import { Navbar } from "../components/fragments/Navbar/Navbar";
import { Section1 } from "../components/fragments/Section/Section1";
import { Section2 } from "../components/fragments/Section/Section2";
import { Section3 } from "../components/fragments/Section/Section3";
import { Section4 } from "../components/fragments/Section/Section4";

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
