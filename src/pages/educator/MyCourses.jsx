// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import Loading from '../../components/student/Loading';
// // import { FaEdit } from "react-icons/fa";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { Navigate } from 'react-router-dom';

// const MyCourses = () => {

//   const { backendUrl, isEducator, currency, getToken } = useContext(AppContext)

//   const [courses, setCourses] = useState(null)

//   const fetchEducatorCourses = async () => {

//     try {

//       const token = await getToken()

//       const { data } = await axios.get(backendUrl + '/api/educator/courses', { headers: { Authorization: `Bearer ${token}` } })

//       data.success && setCourses(data.courses)

//     } catch (error) {
//       toast.error(error.message)
//     }

//   }

//   useEffect(() => {
//     if (isEducator) {
//       fetchEducatorCourses()
//     }
//   }, [isEducator])

//   const handleData = () => {

//   }

//   return courses ? (
//     <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
//       <div className='w-full'>
//         <h2 className="pb-4 text-lg font-medium">My Courses</h2>
//         <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
//           <table className="md:table-auto table-fixed w-full overflow-hidden">
//             <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
//               <tr>
//                 <th className="px-4 py-3 font-semibold truncate">All Courses</th>
//                 <th className="px-4 py-3 font-semibold truncate">Earnings</th>
//                 <th className="px-4 py-3 font-semibold truncate">Students</th>
//                 <th className="px-4 py-3 font-semibold truncate">Published On</th>
//                 <th className="px-4 py-3 font-semibold truncate">Modification</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-500">
//               {courses.map((course) => (
//                 <tr key={course._id} className="border-b border-gray-500/20">
//                   <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
//                     <img src={course.courseThumbnail} alt="Course Image" className="w-16" />
//                     <span className="truncate hidden md:block">{course.courseTitle}</span>
//                   </td>
//                   <td className="px-4 py-3">{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}</td>
//                   <td className="px-4 py-3">{course.enrolledStudents.length}</td>
//                   <td className="px-4 py-3">
//                     {new Date(course.createdAt).toLocaleDateString()}
//                   </td>
//                   <td>
//                     {/* <div className="flex space-x-4">
//                       <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200">
//                         <FaEdit />
//                         Edit
//                       </button>
//                       <button className="flex items-center gap-2 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200">
//                         <FaTrash />
//                         Delete
//                       </button>
//                     </div> */}

//                     <div className="flex flex-wrap gap-3">
//                       <button className="flex items-center gap-2 px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 text-sm sm:text-base" onClick={handleData()}>
//                         <FaEdit className="text-sm sm:text-base" />
//                         <span className="hidden sm:inline">Edit</span>
//                       </button>

//                       <button className="flex items-center gap-2 px-2 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 text-sm sm:text-base">
//                         <FaTrash className="text-sm sm:text-base" />
//                         <span className="hidden sm:inline">Delete</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   ) : <Loading />
// };

// export default MyCourses;




//****correct
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/student/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditPage from "../../components/EditPage"; // Import the EditPage component

const MyCourses = () => {
  const { backendUrl, isEducator, currency, getToken } = useContext(AppContext);
  const [courses, setCourses] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null); // State for selected course
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const fetchEducatorCourses = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/educator/courses", {
        headers: { Authorization: `Bearer ${token}` },
      });

      data.success && setCourses(data.courses);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (isEducator) {
      fetchEducatorCourses();
    }
  }, [isEducator]);

  // Function to open modal and set the selected course
  const handleEdit = (course) => {
    console.log(course)
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  useEffect(() => {
    fetch(`/delete`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleDelete = async (id) => {
    try {

      alert('hehehe ')
      const data = { id: id }
      const token = await getToken();
      const res = await axios.post(backendUrl + `/api/course/delete`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })

      // if (response.ok) {
      //   alert("Course deleted successfully!");
      //   setCourses(courses.filter((course) => course._id !== id));
      // }
      // else {
      //   alert("Failed to delete course")
      // }
    }
    catch (error) {
      console.log("Error deleting course", error)
    }
  }

  return courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">My Courses</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                <th className="px-4 py-3 font-semibold truncate">Students</th>
                <th className="px-4 py-3 font-semibold truncate">Published On</th>
                <th className="px-4 py-3 font-semibold truncate">Modification</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-gray-500/20">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <img
                      src={course.courseThumbnail}
                      alt="Course Image"
                      className="w-16"
                    />
                    <span className="truncate hidden md:block">
                      {course.courseTitle}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {currency}{" "}
                    {Math.floor(
                      course.enrolledStudents.length *
                      (course.coursePrice -
                        (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className="px-4 py-3">{course.enrolledStudents.length}</td>
                  <td className="px-4 py-3">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-3">
                      {/* Edit Button */}
                      <button
                        className="flex items-center gap-2 px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
                        onClick={() => handleEdit(course)}
                      >
                        <FaEdit className="text-sm sm:text-base" />
                        <span className="hidden sm:inline">Edit</span>
                      </button>

                      {/* Delete Button */}
                      <button onClick={() => handleDelete(course._id)} className="flex items-center gap-2 px-2 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 text-sm sm:text-base">
                        <FaTrash className="text-sm sm:text-base" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <EditPage course={selectedCourse} closeModal={closeModal} />
            {/* <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;









// // Are You sure you..
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../context/AppContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Loading from "../../components/student/Loading";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import EditPage from "../../components/EditPage";

// const MyCourses = () => {
//   const { backendUrl, isEducator, currency, getToken } = useContext(AppContext);
//   const [courses, setCourses] = useState(null);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fetchEducatorCourses = async () => {
//     try {
//       const token = await getToken();
//       const { data } = await axios.get(`${backendUrl}/api/educator/courses`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (data.success) {
//         setCourses(data.courses);
//       }
//     } catch (error) {
//       toast.error("Failed to fetch courses.");
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (isEducator) {
//       fetchEducatorCourses();
//     }
//   }, [isEducator]);

//   const handleEdit = (course) => {
//     setSelectedCourse(course);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCourse(null);
//   };


//   const handleDelete = async (id) => {
//     try {
//       if (!window.confirm("Are you sure you want to delete this course?")) return;

//       const token = await getToken();
//       const { data } = await axios.delete(`${backendUrl}/api/course/delete/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (data.success) {
//         toast.success("Course deleted successfully!");
//         setCourses(courses.filter((course) => course._id !== id));
//       } else {
//         toast.error("Failed to delete course.");
//       }
//     } catch (error) {
//       console.error("Error deleting course", error);
//       toast.error("An error occurred while deleting the course.");
//     }
//   };



//   return courses ? (
//     <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
//       <div className="w-full">
//         <h2 className="pb-4 text-lg font-medium">My Courses</h2>
//         <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
//           <table className="md:table-auto table-fixed w-full overflow-hidden">
//             <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
//               <tr>
//                 <th className="px-4 py-3 font-semibold truncate">All Courses</th>
//                 <th className="px-4 py-3 font-semibold truncate">Earnings</th>
//                 <th className="px-4 py-3 font-semibold truncate">Students</th>
//                 <th className="px-4 py-3 font-semibold truncate">Published On</th>
//                 <th className="px-4 py-3 font-semibold truncate">Modification</th>
//               </tr>
//             </thead>
//             <tbody className="text-sm text-gray-500">
//               {courses.map((course) => (
//                 <tr key={course._id} className="border-b border-gray-500/20">
//                   <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
//                     <img src={course.courseThumbnail} alt="Course Image" className="w-16" />
//                     <span className="truncate hidden md:block">{course.courseTitle}</span>
//                   </td>
//                   <td className="px-4 py-3">
//                     {currency}{" "}
//                     {Math.floor(
//                       course.enrolledStudents.length *
//                       (course.coursePrice - (course.discount * course.coursePrice) / 100)
//                     )}
//                   </td>
//                   <td className="px-4 py-3">{course.enrolledStudents.length}</td>
//                   <td className="px-4 py-3">{new Date(course.createdAt).toLocaleDateString()}</td>
//                   <td>
//                     <div className="flex flex-wrap gap-3">
//                       <button
//                         className="flex items-center gap-2 px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
//                         onClick={() => handleEdit(course)}
//                       >
//                         <FaEdit className="text-sm sm:text-base" />
//                         <span className="hidden sm:inline">Edit</span>
//                       </button>
//                       <button
//                         onClick={() => handleDelete(course._id)}
//                         className="flex items-center gap-2 px-2 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition duration-200 text-sm sm:text-base"
//                       >
//                         <FaTrash className="text-sm sm:text-base" />
//                         <span className="hidden sm:inline">Delete</span>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <EditPage course={selectedCourse} closeModal={closeModal} />
//             <button
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default MyCourses;
