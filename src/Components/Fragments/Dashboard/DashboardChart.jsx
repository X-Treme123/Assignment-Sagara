import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DashboardChart = () => {
  const data = {
    labels: ['Back End', 'Front End', 'Quality Assurance', 'UI/UX'],
    datasets: [
      {
        label: 'Student',
        data: [289, 150, 300, 100],
        backgroundColor: '#C53030',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-12 bg-white shadow-md rounded-md h-[420px] mt-8">
      <h3 className="text-lg font-semibold mb-4">Student</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
