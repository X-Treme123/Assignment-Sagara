import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="mt-20 md:mt-0 bg-white w-full">
      <div className="container mx-auto p-4 gap-2 flex items-center justify-end">
        <div className="flex flex-col items-end">
          <p className="text-lg font-bold">Thomas Anree</p>
          <p>Admin</p>
        </div>
        <img
          src="src/assets/Ellipse 2824.png"
          alt="Admin"
          className="ml-2 rounded-full"
        />
        <AiOutlineDown className="ml-2 text-xl w-6 text-gray-500" />
      </div>
    </div>
  );
};

export default Header;
