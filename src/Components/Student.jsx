import React from 'react';
import Navbar from './Navbar';
import StudentTable from './Fragments/Students/StudentTable';

const StudentPage = () => {
  return (
    <div className="flex bg-gray-100 h-screen flex-col md:flex-row">
      {/* Navbar */}
      <div className="hidden md:block">
        <Navbar type="Student" />
      </div>
      <div className="flex-1 md:ml-64">
        <StudentTable />
      </div>
    </div>
  );
};


export default StudentPage;
