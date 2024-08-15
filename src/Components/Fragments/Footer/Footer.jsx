import FacebookIcon from "../../../assets/facebook";
import InstagramIcon from "../../../assets/instagram";
import LinkedinIcon from "../../../assets/linkedin";
import TwitterIcon from "../../../assets/twitter";

export const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="container grid grid-cols-1 gap-12 px-6 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/images/logo.png"
              alt="Sagara Tech Logo"
              className="mr-3 w-14 h-14"
            />
            <h2 className="text-2xl font-InterBold">
              SAGARA <br /> TECH
            </h2>
          </div>
          <p className="mb-6 text-sm text-gray-400 lg:text-base">
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white hover:text-gray-400"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Pages</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                IT Certification
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Careers */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Careers</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Front End Developer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Back End Developer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                Quality Assurance
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400 lg:text-base">
            <li>
              <i className="mr-2 fas fa-phone-alt"></i> +62 856-4097-7356
            </li>
            <li>
              <i className="mr-2 fas fa-envelope"></i> consult@sagara.asia
            </li>
            <li>
              <i className="mr-2 fas fa-map-marker-alt"></i> South Jakarta and
              Bandung, Indonesia
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-sm text-center text-gray-600 lg:text-base">
        &copy; 2024 PT. Sagara Asia Teknologi
      </div>
    </footer>
  );
};
