// import React from "react";
// import { useNavigate } from "react-router-dom";
// import aboutUsImage from "../../assets/about_us.png";
// import Footer from '../../components/student/Footer';
// import aboutlogo1 from '../../assets/about-logo-1.jpg'

// const About = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="bg-white text-gray-800">
//             {/* Hero Section */}
//             <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutUsImage})` }}>
//                 <div className="absolute inset-0 bg-primary bg-opacity-75 flex items-center justify-center"></div>
//             </div>

//             {/* Mission and Vision Section */}
//             <div className="max-w-7xl mx-auto px-7 md:px-0 py-12">
//                 <div className="grid md:grid-cols-2 gap-10">
//                     <div>
//                         <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
//                         <p className="text-lg text-gray-600">
//                             At CodeCraft, our mission is to empower learners with interactive coding courses, hands-on projects, and expert guidance to help them achieve their personal and professional goals.
//                         </p>
//                     </div>
//                     <div>
//                         <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
//                         <p className="text-lg text-gray-600">
//                             We envision a world where anyone, anywhere has the power to transform their life through learning.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Team Section */}
//             <div className="bg-gray-100 py-12">
//                 <div className="max-w-7xl mx-auto px-7 md:px-0">
//                     <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Meet Our Team</h2>
//                     <div className="flex flex-wrap justify-center">
//                         {/* Team Member 1 */}
//                         <div className="w-full md:w-1/3 lg:w-1/4 p-4">
//                             <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//                                 <img className="w-full h-56 object-cover" src="/path-to-team-member1.jpg" alt="Team Member 1" />
//                                 <div className="p-4">
//                                     <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
//                                     <p className="text-gray-600">CEO & Founder</p>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Team Member 2 */}
//                         <div className="w-full md:w-1/3 lg:w-1/4 p-4">
//                             <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//                                 <img className="w-full h-56 object-cover" src="/path-to-team-member2.jpg" alt="Team Member 2" />
//                                 <div className="p-4">
//                                     <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
//                                     <p className="text-gray-600">Chief Technology Officer</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Statistics Section */}
//             <div className="max-w-7xl mx-auto px-7 md:px-0 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//                     <div>
//                         <h3 className="text-4xl font-bold text-primary">10K+</h3>
//                         <p className="text-gray-600">Students Enrolled</p>
//                     </div>
//                     <div>
//                         <h3 className="text-4xl font-bold text-primary">500+</h3>
//                         <p className="text-gray-600">Courses Available</p>
//                     </div>
//                     <div>
//                         <h3 className="text-4xl font-bold text-primary">100+</h3>
//                         <p className="text-gray-600">Expert Instructors</p>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
        
//     );
// };

// export default About;





import React from "react";
import { useNavigate } from "react-router-dom";
import aboutUsImage from "../../assets/about_us.png";
import Footer from '../../components/student/Footer';
import aboutlogo1 from '../../assets/about-logo-1.jpg';
import aboutlogo2 from '../../assets/about-logo-2.jpg';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-center bg-no-repeat" style={{ backgroundImage: `url(${aboutUsImage})` }}>
                <div className="absolute inset-0 bg-primary bg-opacity-75 flex items-center justify-center"></div>
            </div>

            {/* Mission and Vision Section */}
            <div className="max-w-7xl mx-auto px-7 md:px-0 py-12">
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
                        <p className="text-lg text-gray-600">
                            At CodeCraft, our mission is to empower learners with interactive coding courses, hands-on projects, and expert guidance to help them achieve their personal and professional goals.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
                        <p className="text-lg text-gray-600">
                            We envision a world where anyone, anywhere has the power to transform their life through learning.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-7 md:px-0">
                    <h2 className="text-3xl font-semibold text-center mb-8 text-primary">Meet Our Team</h2>
                    <div className="flex flex-wrap justify-center">
                        {/* Team Member 1 */}
                        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img className="w-full h-56 object-cover" src={aboutlogo1} alt="Team Member 1" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
                                    <p className="text-gray-600">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <img className="w-full h-56 object-cover" src={aboutlogo2} alt="Team Member 2" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
                                    <p className="text-gray-600">Chief Technology Officer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="max-w-7xl mx-auto px-7 md:px-0 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <h3 className="text-4xl font-bold text-primary">10K+</h3>
                        <p className="text-gray-600">Students Enrolled</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-primary">500+</h3>
                        <p className="text-gray-600">Courses Available</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-primary">100+</h3>
                        <p className="text-gray-600">Expert Instructors</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
