import { Link } from "react-router-dom";
import { listlinks } from "./listLinks";

export const NavLink = () => {
  return (
    <ul className="hidden md:flex md:space-x-8 md:ml-4">
      {listlinks.map(({ id, name, link }) => (
        <li key={id} className="relative group">
          <Link
            to={link}
            className={`relative flex items-center text-gray-700 transition-transform duration-300 transform hover:shadow-lg ${
              name === "CAREERS" ? "text-gray-700 " : ""
            }`}
          >
            {name}
            {name === "CAREERS" && (
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            )}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-customRed transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
          </Link>
          {/* Dropdown Menu */}
          {name === "CAREERS" && (
            <ul className="absolute left-0 w-48 mt-2 transition-opacity bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100">
              <li>
                <Link
                  to="#job-openings"
                  className="block px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100"
                >
                  Job Openings
                </Link>
              </li>
              <li>
                <Link
                  to="#internships"
                  className="block px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100"
                >
                  Internships
                </Link>
              </li>
              <li>
                <Link
                  to="#apply"
                  className="block px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-100"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

// export const NavLink = () => {
//   return (
//     <ul className="hidden md:flex md:space-x-8 md:ml-4">
//       <li>
//         <a
//           href="#it-certification"
//           className="text-gray-700 hover:text-blue-500"
//         >
//           IT CERTIFICATION
//         </a>
//       </li>
//       <li className="relative group">
//         <a
//           href="#careers"
//           className="flex items-center text-gray-700 hover:text-green-500"
//         >
//           CAREERS
//           <svg
//             className="w-4 h-4 ml-1 transition-transform transform group-hover:rotate-180"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             ></path>
//           </svg>
//         </a>
//         {/* Dropdown Menu */}
//         <ul className="absolute left-0 w-48 mt-2 transition-opacity bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100">
//           <li>
//             <a
//               href="#job-openings"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//             >
//               Job Openings
//             </a>
//           </li>
//           <li>
//             <a
//               href="#internships"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//             >
//               Internships
//             </a>
//           </li>
//           <li>
//             <a
//               href="#apply"
//               className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//             >
//               Apply Now
//             </a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <a href="#faq" className="text-gray-700 hover:text-red-500">
//           FAQ
//         </a>
//       </li>
//     </ul>
//   );
// };

// links

// const Link = (props) => {
//   const { children, to } = props;
//   return (
//     <Link to={to} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//       {children}
//     </Link>
//   );
// };
