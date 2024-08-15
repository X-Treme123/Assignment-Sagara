import React from 'react';
import Navbar from './Navbar';
import StudentTable from './Fragments/Students/StudentTable';

const StudentPage = () => {
  return (
    <div className="flex bg-gray-100 h-screen">
      <Navbar type="Student"/>
      <div className="flex-1 ml-64">
        <StudentTable />
      </div>
    </div>
  );
};

export default StudentPage;
