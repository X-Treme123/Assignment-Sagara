import React from "react";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Students",
      value: "513",
      percentage: "8.5%",
      icon: "src/assets/Icon.svg",
      color: "bg-white",
      textColor: "text-green-600",
    },
    {
      title: "Total Certified Students",
      value: "489",
      percentage: "8.5%",
      icon: "src/assets/Icon2.svg",
      color: "bg-white",
      textColor: "text-green-600",
    },
    {
      title: "Average Certification Score",
      value: "84.62",
      percentage: "8.5%",
      icon: "src/assets/Icon3.svg",
      color: "bg-white",
      textColor: "text-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5">
      {stats.map((stat, index) => (
        <div key={index} className={`p-4 ${stat.color} rounded-md shadow-md`}>
          <div className="flex-1 gap-5 items-center">
            <div>
              <div className="text-gray-500 font-semibold text-lg flex justify-between">
                <p>{stat.title}</p>
                <img src={stat.icon} alt="icon" width={40}/>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div
                className={`text-sm mt-5 ${stat.textColor} flex gap-2 items-center`}>
                <img src="src/assets/ic-trending-up-24px.svg" alt="" />
                <p className="font-semibold text-lg">{stat.percentage}</p>
                <p className="text-black font-semibold text-lg">
                  Up from yesterday
                </p>
              </div>
            </div>
            <div className={`text-4xl ${stat.textColor}`}>
              <span className="material-icons"></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverview;
