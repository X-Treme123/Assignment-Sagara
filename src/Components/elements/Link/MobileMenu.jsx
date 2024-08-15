import { useEffect } from "react";
import { Logo } from "../Logo/Logo";
import { listlinks } from "./listLinks";

export const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = ""; // Allow scrolling when menu is closed
    }

    return () => {
      document.body.style.overflow = ""; // Clean up on unmount
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between">
          <Logo />
          {/* Close Button */}
          <button
            className="p-2 text-gray-700 hover:text-gray-900"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        {/* Menu Items */}
        <ul className="flex flex-col mt-8 space-y-4">
          {listlinks.map(({ id, name, link }) => (
            <li key={id}>
              <a
                href={link}
                className="block py-2 text-lg text-gray-700 transition-colors duration-200 ease-in-out rounded-lg hover:bg-gray-100"
                onClick={onClose} // Ensure the menu closes when clicking a link
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        {/* Sign In Button */}
        <button className="px-6 py-2 mt-auto text-white rounded-md bg-customRed">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

// import { listlinks } from "./listlinks"; // Import listlinks from a separate file

// export const MobileMenu = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 transition-transform duration-300 ease-in-out transform translate-y-full bg-white shadow-lg">
//       <div className="flex justify-end p-4">
//         <button
//           className="text-gray-700 hover:text-gray-900"
//           onClick={onClose}
//           aria-label="Close menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             ></path>
//           </svg>
//         </button>
//       </div>
//       <ul className="py-8 space-y-4 text-center">
//         {listlinks.map(({ id, name, link }) => (
//           <li key={id}>
//             <a
//               href={link}
//               className={`block py-3 px-6 text-gray-700 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-100 rounded-md ${
//                 name === "CAREERS"
//                   ? "hover:text-green-500"
//                   : "hover:text-blue-500"
//               }`}
//             >
//               {name}
//             </a>
//           </li>
//         ))}
//         <li>
//           <button className="w-full px-6 py-3 text-white rounded-md bg-customRed">
//             SIGN IN
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };
