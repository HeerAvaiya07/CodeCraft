// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Footer from '../../components/student/Footer';

// const PrivacyPolicy = () => {
//     const navigate = useNavigate();
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
//       <p className="text-gray-700 mb-4">
//         Welcome to [Your Platform Name]. Your privacy is important to us. This
//         Privacy Policy explains how we collect, use, disclose, and safeguard
//         your information when you visit our website.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
//       <p className="text-gray-700 mb-4">
//         We collect personal and non-personal information to improve our services.
//         This may include your name, email address, IP address, and usage data.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
//       <p className="text-gray-700 mb-4">
//         The collected information is used to enhance user experience, improve our
//         platform, communicate with users, and comply with legal requirements.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h2>
//       <p className="text-gray-700 mb-4">
//         We implement security measures to protect your data, but no method of
//         transmission over the internet is 100% secure.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
//       <p className="text-gray-700 mb-4">
//         We may use third-party services for analytics, advertising, or payment
//         processing. These services have their own privacy policies.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
//       <p className="text-gray-700 mb-4">
//         You have the right to access, update, or delete your personal data. Contact
//         us for any concerns regarding your privacy.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">6. Cookies Policy</h2>
//       <p className="text-gray-700 mb-4">
//         We use cookies to enhance your browsing experience. You can choose to disable
//         cookies through your browser settings, but some features of the site may not
//         function properly.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">7. Data Retention</h2>
//       <p className="text-gray-700 mb-4">
//         We retain your personal data only as long as necessary for the purposes outlined
//         in this policy. You can request deletion of your data at any time.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">8. Changes to This Policy</h2>
//       <p className="text-gray-700 mb-4">
//         We may update this Privacy Policy from time to time. Please review this
//         page periodically for any changes.
//       </p>
      
//       <h2 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h2>
//       <p className="text-gray-700">
//         If you have any questions about this Privacy Policy, please contact us at
//         [Your Contact Email].
//       </p>
//       <Footer />
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React from "react";
import Footer from "../../components/student/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-center bg-no-repeat bg-gray-200 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
            </div>

            {/* Privacy Content Section */}
            <div className="max-w-7xl mx-auto px-7 md:px-0 py-12 text-left">
                <h2 className="text-3xl font-semibold mb-6 text-primary">Your Privacy Matters</h2>
                <p className="text-gray-700 mb-6">
                    Welcome to CodeCraft. Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>
                
                <h3 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
                <p className="text-gray-700 mb-4">
                    We collect personal and non-personal information to improve our services. This may include your name, email address, IP address, and usage data.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">
                    The collected information is used to enhance user experience, improve our platform, communicate with users, and comply with legal requirements.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">3. Data Security</h3>
                <p className="text-gray-700 mb-4">
                    We implement security measures to protect your data, but no method of transmission over the internet is 100% secure.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">4. Third-Party Services</h3>
                <p className="text-gray-700 mb-4">
                    We may use third-party services for analytics, advertising, or payment processing. These services have their own privacy policies.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h3>
                <p className="text-gray-700 mb-4">
                    You have the right to access, update, or delete your personal data. Contact us for any concerns regarding your privacy.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">6. Cookies Policy</h3>
                <p className="text-gray-700 mb-4">
                    We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">7. Data Retention</h3>
                <p className="text-gray-700 mb-4">
                    We retain your personal data only as long as necessary for the purposes outlined in this policy. You can request deletion of your data at any time.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">8. Changes to This Policy</h3>
                <p className="text-gray-700 mb-4">
                    We may update this Privacy Policy from time to time. Please review this page periodically for any changes.
                </p>

                <h3 className="text-2xl font-semibold mt-6 mb-2">9. Contact Us</h3>
                <p className="text-gray-700">
                    If you have any questions about this Privacy Policy, please contact us at support@codecraft.com.
                </p>
            </div>
            
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;