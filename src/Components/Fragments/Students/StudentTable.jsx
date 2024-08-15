import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { CiSearch } from "react-icons/ci";
import Header from "./Header";
import { IoFilter } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import "./Component.css";

Modal.setAppElement("#root");

const StudentTable = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]); // Tambahkan state ini
  const [newStudent, setNewStudent] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    instance: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false); // Tambahkan state ini
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState({
    fullName: true,
    email: true,
    phoneNumber: true,
    instance: true,
    createdAt: true,
  });

  const [searchQuery, setSearchQuery] = useState(""); // Tambahkan state ini
  const [filterInstance, setFilterInstance] = useState(""); // Tambahkan state ini

  const toggleSettingsDropdown = () => {
    setSettingsDropdownOpen(!settingsDropdownOpen);
  };

  const handleCheckboxChange = (column) => {
    setSelectedColumns((prevColumns) => ({
      ...prevColumns,
      [column]: !prevColumns[column],
    }));
  };

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (storedStudents) {
      const parsedStudents = JSON.parse(storedStudents);
      setStudents(parsedStudents);
      setFilteredStudents(parsedStudents); // Set filtered students
    }
  }, []);

  useEffect(() => {
    let result = students;

    // Filter berdasarkan instance
    if (filterInstance && filterInstance !== "Select All") {
      result = result.filter((student) =>
        student.instance.toLowerCase().includes(filterInstance.toLowerCase())
      );
    }

    // Filter berdasarkan search query
    if (searchQuery) {
      result = result.filter(
        (student) =>
          student.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.phoneNumber
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          student.instance.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    console.log("Filtered result:", result); // Tambahkan log untuk melihat hasil filter
    setFilteredStudents(result);
  }, [students, searchQuery, filterInstance]); // Lakukan filtering setiap searchQuery, filterInstance atau students berubah

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setIsEditMode(false);
    setEditIndex(null);
    setNewStudent({
      fullName: "",
      email: "",
      phoneNumber: "",
      instance: "",
    });
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen(!filterDropdownOpen);
    console.log("Filter dropdown toggled. Is open:", !filterDropdownOpen);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (isEditMode) {
      const updatedStudents = students.map((student, index) =>
        index === editIndex
          ? { ...newStudent, createdAt: student.createdAt }
          : student
      );

      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    } else {
      const updatedStudents = [
        ...students,
        { ...newStudent, createdAt: formattedDate },
      ];

      setStudents(updatedStudents);
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    }

    closeModal();
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const handleEditStudent = (index) => {
    const studentToEdit = students[index];
    setNewStudent(studentToEdit);
    setEditIndex(index);
    setIsEditMode(true);
    openModal();
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update searchQuery state ketika user mengetik
  };

  const handleFilterInstanceChange = (e) => {
    setFilterInstance(e.target.value);
    console.log("Instance selected:", e.target.value);
  };

  const handleAddFilter = () => {
    if (filterInstance === "Select All") {
      setFilteredStudents(students); // Tampilkan semua data jika "Select All" dipilih
    } else {
      setFilterDropdownOpen(false); // Tutup dropdown setelah menekan Add Filter
    }
  };

  return (
    <div className="max-w-full">
      <Header />
      <div className="bg-gray-100 flex flex-col md:p-10 justify-center">
        <div className="flex flex-col gap-8">
          <div className="text-3xl font-semibold">Data Student</div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button
                className=" flex items-center gap-2 font-semibold shadow-lg px-4 py-2 rounded-md"
                onClick={toggleFilterDropdown}>
                <IoFilter /> Filters
              </button>

              {filterDropdownOpen && (
                <div className="absolute mt-12 w-64 bg-white shadow-lg rounded-lg p-4 z-10">
                  <div className="mb-2 font-semibold">Instance</div>
                  <select
                    className="w-full p-2 border rounded-md"
                    onChange={handleFilterInstanceChange}
                    value={filterInstance}>
                    <option value="Select All">Select All</option>
                    <option value="Telkom University">Telkom University</option>
                    <option value="Krisnadwipayana University">
                      Krisnadwipayana University
                    </option>
                    <option value="University of Indonesia">
                      University of Indonesia
                    </option>
                  </select>
                  <div className="mt-2 flex flex-col gap-2">
                    <input
                      type="text"
                      placeholder="is"
                      className="w-full bg-slate-100 p-2 border rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Enter condition"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <button
                    className="mt-4 bg-customRed text-white w-full py-2 rounded-md"
                    onClick={handleAddFilter}>
                    Add Filter
                  </button>
                </div>
              )}

              <button
                className="bg-customRed text-white px-4 py-2 rounded-md"
                onClick={openModal}>
                + Add User
              </button>
            </div>
            <div className="flex items-center">
              <div className="flex items-center border-2 rounded-md overflow-hidden">
                <span className="bg-white px-3">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  className="py-2 px-3 outline-none"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearchChange} // pastikan handleSearchChange memperbarui searchQuery
                />
              </div>
              <button
                className="flex items-center gap-2 mx-3 font-semibold shadow-lg px-4 py-2 rounded-md border-2"
                onClick={toggleSettingsDropdown}>
                <IoSettingsOutline />
              </button>

              {settingsDropdownOpen && (
                <div className="absolute mt-64 ml-11 w-60 bg-white shadow-lg rounded-lg p-4 z-10 border-2">
                  {Object.keys(selectedColumns).map((column) => (
                    <div key={column} className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={selectedColumns[column]}
                        onChange={() => handleCheckboxChange(column)}
                      />
                      <label>
                        {column
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              <style jsx>{`
                .custom-checkbox {
                  position: relative;
                  width: 20px;
                  height: 20px;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  background-color: #a7f3d0; /* Hijau muda */
                  border: 2px solid #059669; /* Hijau tua */
                  border-radius: 4px;
                  cursor: pointer;
                }

                .custom-checkbox:checked {
                  background-color: #a7f3d0; /* Hijau Muda */
                }

                .custom-checkbox:checked::after {
                  content: "✔";
                  color: #ffffff; /* Putih */
                  font-size: 14px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                }
              `}</style>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto md:h-[35rem] bg-white mt-10 border-2 custom-scroll">
          <table className="min-w-full">
            <thead className="sticky top-0 bg-gray-100 border-b-2">
              <tr>
                <th className="px-4 py-2">Profil</th>
                <th className="px-4 py-2">Full Name</th>
                <th className="px-4 py-2">Email Address</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Instance</th>
                <th className="px-4 py-2">Created At</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr className="border-y-2" key={index}>
                  <td className="px-4 py-2 flex justify-center">
                    <img
                      src="src/assets/people.png"
                      alt="Profil"
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 flex-1 text-center">
                    {student.fullName}
                  </td>
                  <td className="px-4 py-2 flex-1 text-center">
                    {student.email}
                  </td>
                  <td className="px-4 py-2 flex-1 text-center">
                    {student.phoneNumber}
                  </td>
                  <td className="px-4 py-2 flex-1 text-center">
                    {student.instance}
                  </td>
                  <td className="px-4 py-2 flex-1 text-center">
                    {student.createdAt}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center gap-4">
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteStudent(index)}>
                        <span className="text-2xl">
                          <FaRegTrashAlt />
                        </span>
                      </button>
                      <button
                        className="text-yellow-500 ml-2"
                        onClick={() => handleEditStudent(index)}>
                        <span className="text-2xl">
                          <FaPen />
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex bg-white justify-between p-4 border-x-2 border-b-2">
          <button className="text-gray-600 border-2 py-2 px-4 rounded-lg">
            Previous
          </button>
          <div className="flex">
            <button className="px-2">1</button>
            <button className="px-2">2</button>
            <button className="bg-customRed px-4 rounded-lg text-white">6</button>
            <button className="px-2">7</button>
            <button className="px-2">8</button>
          </div>
          <button className="text-gray-600 py-2 px-4 border-2 rounded-lg">
            Next
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Student"
        className="flex items-center justify-center"
        overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full">
          <h2 className="text-xl font-semibold mb-4">
            {isEditMode ? "Edit Student" : "Add New Student"}
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleAddStudent}>
            <div className="flex gap-4">
              <input
                type="text"
                name="fullName"
                value={newStudent.fullName}
                onChange={handleInputChange}
                placeholder="John"
                className="border p-2 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={newStudent.email}
                onChange={handleInputChange}
                placeholder="johndoe@gmail.com"
                className="border p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                inputMode="numeric"
                name="phoneNumber"
                value={newStudent.phoneNumber}
                onChange={handleInputChange}
                placeholder="+62 8453875329"
                className="border p-2 rounded-md"
                required
              />
              <select
                name="instance"
                value={newStudent.instance}
                onChange={handleInputChange}
                className="border p-2 rounded-md"
                required>
                <option value="">Select Instance</option>
                <option value="Telkom University">Telkom University</option>
                <option value="Krisnadwipayana University">
                  Krisnadwipayana University
                </option>
                <option value="University of Indonesia">
                  University of Indonesia
                </option>
              </select>
            </div>
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded-md"
                required
              />
              <input
                type="password"
                placeholder="Re-Type Password"
                className="border p-2 rounded-md w-full"
                required
              />
            </div>
            <input
              type="file"
              accept="image/*"
              className="border p-2 rounded-md h-40"
            />
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={closeModal}
                className="bg-red-600 text-white px-4 py-2 rounded-md">
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md">
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default StudentTable;
