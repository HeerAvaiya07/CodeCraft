
import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import fileUploadIcon from "../assets/file_upload_icon.svg"


const EditPage = ({ course, closeModal }) => {
    const [formData, setFormData] = useState({ ...course });
    const editorRef = useRef(null);

    const [courseTitle, setCourseTitle] = useState(course.courseTitle || "");
    const [coursePrice, setCoursePrice] = useState(course.coursePrice || 0);
    const [isChecked, setIsChecked] = useState(true);
    const [image, setImage] = useState(course.courseThumbnail || "");
    const [chapters, setChapters] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const [lectureDetails, setLectureDetails] = useState({
        lectureTitle: '',
        lectureDuration: '',
        lectureUrl: '',
        isPreviewFree: false,
    });

    // Function to extract text content from HTML
    const getTextFromHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    // Initialize inputValue with course description
    const [inputValue, setInputValue] = useState(getTextFromHTML(course.courseDescription || ""));

    // Update inputValue when course changes
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
        closeModal();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file)); // Show preview of the selected image
        }
    };

    const handleChapter = (action, chapterId) => {
        if (action === "add") {
            const title = prompt('Enter Chapter Name:');
            if (title) {
                const newChapter = {
                    chapterId: uniqid(),
                    chapterTitle: title,
                    chapterContent: [],
                    collapsed: false,
                    chapterOrder: chapters.length > 0 ? chapters.slice(-1)[0].chapterOrder + 1 : 1,
                }
                setChapters([...chapters, newChapter]);
            }
        }
    }

    return (
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
                            {/* Upload Icon */}
                            <img src={fileUploadIcon} alt="Upload Icon" className='p-3 bg-blue-500 rounded' />

                            {/* Hidden File Input */}
                            <input type="file" id='thumbnailImage' onChange={handleImageChange} accept="image/*" hidden />

                            {/* Show default course image if available, otherwise nothing */}
                            <img className='max-h-10' src={image || fileUploadIcon} alt="Thumbnail Preview" />
                        </label>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <p>Discount %</p>
                    <input type="number" defaultValue={course.discount} min={0} max={100} className="outline-none md:py-2.5 py-2 w-28 px-3 rounded border border-gray-500 " required />
                </div>

                {/* <div>
                    <div className="inline-flex bg-gray-100 p-2 rounded-cursor-pointer mt-2" onClick={() => handleLecture("add", chapters.chapterId)}>
                        + Add Lecture
                    </div>
                </div> */}

                <div className="flex justify-center items-center bg-blue-100 p-2 rounded-lg cursor-pointer" onClick={() => handleChapter("add")}>
                    + Add Chapter
                </div>

                {showPopup && (
                    <div>
                        <div>
                            <h2>Add Lecture</h2>
                        </div>
                    </div>
                )}


                {/* <div className="flex gap-2 my-4">
                    <p>Is Preview Free?</p>
                    <input
                        type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} className='mt-1 scale-125'
                    />
                </div> */}

                <button type="submit" className="w-full bg-blue-400 text-white px-4 py-2 rounded">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditPage;


