// import React from "react";
// import { useNavigate } from "react-router-dom";
// import contactUsImage from "../../assets/contact_us.jpg";
// import Footer from '../../components/student/Footer';

// const Contact = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="bg-white text-gray-800">
//             {/* Hero Section */}
//             {/* <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${contactUsImage})` }}>
//                 <div className="absolute inset-0 bg-primary bg-opacity-75 flex items-center justify-center"></div>
//             </div> */}
//             <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-center bg-no-repeat"
//                 style={{ backgroundImage: `url(${contactUsImage})`, backgroundSize: "contain" }}>
//                 <div className="absolute inset-0 bg-primary bg-opacity-75 flex items-center justify-center"></div>
//             </div>

//             {/* Contact Information Section */}
//             <div className="max-w-7xl mx-auto px-7 md:px-0 py-12 text-center">
//                 <h2 className="text-3xl font-semibold mb-8 text-primary">Get in Touch</h2>
//                 <div className="grid md:grid-cols-3 gap-10 text-gray-600">
//                     <div>
//                         <h3 className="text-xl font-semibold text-gray-800">📍 Address</h3>
//                         <p>123 Code Street, Tech City, TX 75001</p>
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold text-gray-800">📞 Phone</h3>
//                         <p>+1 (234) 567-8901</p>
//                     </div>
//                     <div>
//                         <h3 className="text-xl font-semibold text-gray-800">✉️ Email</h3>
//                         <p>support@codecraft.com</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Contact Form Section */}
//             <div className="bg-gray-100 py-12">
//                 <div className="max-w-4xl mx-auto px-7 md:px-0">
//                     <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Send Us a Message</h2>
//                     <form className="bg-white p-6 rounded-lg shadow-lg">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//                                 <input
//                                     type="text"
//                                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                                     placeholder="Enter your name"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-gray-700 font-medium mb-2">Email Address</label>
//                                 <input
//                                     type="email"
//                                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                                     placeholder="Enter your email"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mt-6">
//                             <label className="block text-gray-700 font-medium mb-2">Message</label>
//                             <textarea
//                                 rows="5"
//                                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                                 placeholder="Write your message here..."
//                             ></textarea>
//                         </div>
//                         <div className="mt-6 flex justify-center">
//                             <button
//                                 type="submit"
//                                 className="bg-[#14B8A6] px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
//                             >
//                                 Send Message
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// };

// export default Contact;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactUsImage from "../../assets/contact_us.jpg";
import Footer from '../../components/student/Footer';

const Contact = () => {
    const navigate = useNavigate();

    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can now use formData here
        console.log("User Data:", formData);

        // Optional: send to backend API
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData),
        // }).then(...)

        alert("Message sent successfully!");
    };

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${contactUsImage})`, backgroundSize: "contain" }}>
                <div className="absolute inset-0 bg-primary bg-opacity-75 flex items-center justify-center"></div>
            </div>

            {/* Contact Info */}
            <div className="max-w-7xl mx-auto px-7 md:px-0 py-12 text-center">
                <h2 className="text-3xl font-semibold mb-8 text-primary">Get in Touch</h2>
                <div className="grid md:grid-cols-3 gap-10 text-gray-600">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">📍 Address</h3>
                        <p>123 Code Street, Tech City, TX 75001</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">📞 Phone</h3>
                        <p>+1 (234) 567-8901</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">✉️ Email</h3>
                        <p>support@codecraft.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            {/* <div className="bg-gray-100 py-12">
                <div className="max-w-4xl mx-auto px-7 md:px-0">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#14B8A6] px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}

            <Footer />
        </div>
    );
};

export default Contact;
