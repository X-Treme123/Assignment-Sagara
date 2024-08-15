import { Text } from "../Text/Text";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
      <div className="flex flex-col items-start text-lg font-bold">
        <Text className="text-lg">SAGARA</Text>
        <div className="relative flex items-center -mt-3 space-x-2">
          <Text>TECH</Text>
          <div className="absolute w-1 h-1 transform -translate-x-1 translate-y-1 bg-red-700 rounded-sm left-full"></div>
        </div>
      </div>
    </div>
  );
};
