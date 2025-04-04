import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";

const NewEditPage = ({ course, closeModal }) => {
    const [showPopup, setShowPopup] = useState(false);

    const [lectureDetails, setLectureDetails] = useState({
        lectureTitle: '',
        lectureDuration: '',
        lectureUrl: '',
        isPreviewFree: false,
        courseDescription: '',
        instructorName: '',
        lectureNotes: ''
    });

    const addLecture = () => {
        console.log('Lecture Added:', lectureDetails);
        // Save the lecture logic here
        setShowPopup(false);
    };

    return (
        <div>
            {/* Top Close Button */}
            <div className='flex justify-end'>
                <button className='top-4 right-4 text-black-500 hover:text-gray-900' onClick={closeModal}>
                    <FaTimes size={20} />
                </button>
            </div>

            <h2 className='text-xl font-bold mb-4'>Chapter Editor</h2>

            {/* Trigger Popup */}
            <button
                onClick={() => setShowPopup(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Lecture
            </button>

            {/* Close Main Modal */}
            <button onClick={closeModal} className="ml-4 bg-gray-300 px-4 py-2 rounded">Close</button>

            {/* Popup Section */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white text-gray-700 p-6 rounded relative w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>

                        {/* Lecture Title */}
                        <div className='flex flex-col gap-1 mb-2'>
                            <p>Lecture Title</p>
                            <input
                                value={lectureDetails.lectureTitle}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, lectureTitle: e.target.value })}
                                className='outline-none py-2 px-3 rounded border border-gray-500'
                                required
                            />
                        </div>

                        {/* Duration */}
                        <div className='flex flex-col gap-1 mb-2'>
                            <p>Duration (minutes)</p>
                            <input
                                type="number"
                                value={lectureDetails.lectureDuration}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, lectureDuration: e.target.value })}
                                className='outline-none py-2 px-3 rounded border border-gray-500'
                            />
                        </div>

                        {/* URL */}
                        <div className='flex flex-col gap-1 mb-2'>
                            <p>Lecture URL</p>
                            <input
                                value={lectureDetails.lectureUrl}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, lectureUrl: e.target.value })}
                                className='outline-none py-2 px-3 rounded border border-gray-500'
                            />
                        </div>

                        {/* Course Description */}
                        <div className='flex flex-col gap-1 mb-2'>
                            <p>Course Description</p>
                            <input
                                value={lectureDetails.courseDescription}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, courseDescription: e.target.value })}
                                className='outline-none py-2 px-3 rounded border border-gray-500'
                            />
                        </div>

                        {/* Instructor Name */}
                        <div className='flex flex-col gap-1 mb-2'>
                            <p>Instructor Name</p>
                            <input
                                value={lectureDetails.instructorName}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, instructorName: e.target.value })}
                                className='outline-none py-2 px-3 rounded border border-gray-500'
                            />
                        </div>

                        {/* Lecture Notes */}
                        <div className='flex flex-col gap-1 mb-2'>
                            <p>Lecture Notes</p>
                            <textarea
                                value={lectureDetails.lectureNotes}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, lectureNotes: e.target.value })}
                                className='outline-none py-2 px-3 rounded border border-gray-500'
                            />
                        </div>

                        {/* Preview Checkbox */}
                        <div className="flex items-center gap-2 my-4">
                            <p>Is Preview Free?</p>
                            <input
                                type="checkbox"
                                checked={lectureDetails.isPreviewFree}
                                onChange={(e) => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })}
                                className='scale-125'
                            />
                        </div>

                        {/* Add Button */}
                        <button
                            type="button"
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded mb-2"
                            onClick={addLecture}
                        >
                            Add Lecture
                        </button>

                        {/* Close Icon */}
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        >
                            <FaTimes size={16} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewEditPage;