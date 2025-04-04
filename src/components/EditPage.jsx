import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import fileUploadIcon from "../assets/file_upload_icon.svg";
import NewEditPage from "./NewEditPage";
import Loading from "./student/Loading";

const EditPage = ({ course, closeModal }) => {
    const [formData, setFormData] = useState({ ...course });
    const editorRef = useRef(null);

    const [courseTitle, setCourseTitle] = useState(course.courseTitle || "");
    const [coursePrice, setCoursePrice] = useState(course.coursePrice || 0);
    const [isChecked, setIsChecked] = useState(true);
    const [image, setImage] = useState(course.courseThumbnail || "");
    const [chapters, setChapters] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [lectureDetails, setLectureDetails] = useState({
        lectureTitle: '',
        lectureDuration: '',
        lectureUrl: '',
        isPreviewFree: false,
    });

    // Extract plain text from HTML
    const getTextFromHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const [inputValue, setInputValue] = useState(getTextFromHTML(course.courseDescription || ""));

    useEffect(() => {
        setInputValue(getTextFromHTML(course.courseDescription || ""));
    }, [course]);

    const handleDescriptionChange = (e) => {
        setInputValue(e.target.value);
        setFormData((prev) => ({ ...prev, courseDescription: e.target.value }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Course Data:", formData);
        closeModal(); // from props
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleChapter = (courseData) => {
        setSelectedCourse(courseData);
        setIsModalOpen(true);
    };

    const closeChapterModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    return (
        <>
            <div>
                <div className="flex justify-end">
                    <button className="top-4 right-4 text-black-500 hover:text-gray-900" onClick={closeModal}>
                        <FaTimes size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <p>Course Title</p>
                        <input
                            onChange={e => setCourseTitle(e.target.value)}
                            value={courseTitle}
                            type="text"
                            className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500'
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p>Course Description</p>
                        <input
                            value={inputValue}
                            onChange={handleDescriptionChange}
                            className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500'
                            required
                        />
                    </div>

                    <div className='flex items-center justify-between flex-wrap'>
                        <div className='flex flex-col gap-1'>
                            <p>Course Price</p>
                            <input
                                onChange={e => setCoursePrice(e.target.value)}
                                value={coursePrice}
                                type="number"
                                className='outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500'
                                required
                            />
                        </div>

                        <div className='flex md:flex-row flex-col items-center gap-3'>
                            <p>Course Thumbnail</p>
                            <label htmlFor='thumbnailImage' className='flex items-center gap-3'>
                                <img src={fileUploadIcon} alt="Upload Icon" className='p-3 bg-blue-500 rounded' />
                                <input type="file" id='thumbnailImage' onChange={handleImageChange} accept="image/*" hidden />
                                <img className='max-h-10' src={image || fileUploadIcon} alt="Thumbnail Preview" />
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p>Discount %</p>
                        <input
                            type="number"
                            defaultValue={course.discount}
                            min={0}
                            max={100}
                            className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500"
                            required
                        />
                    </div>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center bg-blue-100 p-2 rounded-lg cursor-pointer"
                        onClick={() => handleChapter(course)}
                    >
                        <span className="hidden sm:inline"> + Add Chapter</span>
                    </button>

                    <button type="submit" className="w-full bg-blue-400 text-white px-4 py-2 rounded mt-4">
                        Save Changes
                    </button>
                </form>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <NewEditPage course={selectedCourse} closeModal={closeChapterModal} />
                    </div>
                </div>
            )}
        </>
    );
};

export default EditPage;
