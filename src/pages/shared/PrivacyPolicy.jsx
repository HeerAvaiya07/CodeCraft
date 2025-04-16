import React from "react";
import PrivacyPolicyImage from "../../assets/privacy-policy.jpg";
import Footer from "../../components/student/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex justify-center mt-8">
                <img
                    src={PrivacyPolicyImage}
                    alt="Privacy Policy"
                    className="w-full max-w-4xl h-auto object-contain"
                />
            </div>

            {/* Privacy Content Section */}
            <div className="max-w-4xl mx-auto p-4 mt-8 text-left">
                <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
                <p className="mb-6 text-gray-700">
                    Welcome to CodeCraft. Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>

                <div className="space-y-6 text-gray-700">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
                        <ul className="list-disc pl-6">
                            <li>Personal Information: Name, email address, contact details, etc.</li>
                            <li>Usage Data: Pages visited, time spent, and interactions.</li>
                            <li>Cookies and Tracking: To enhance user experience and analytics.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
                        <ul className="list-disc pl-6">
                            <li>To provide and maintain our services.</li>
                            <li>To personalize user experience.</li>
                            <li>To communicate updates and promotions.</li>
                            <li>To analyze performance and improve our platform.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">3. Information Sharing</h3>
                        <p>
                            We do not sell or trade your personal information. We may share information with trusted partners who assist in operating our platform, as long as they agree to keep this information confidential.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
                        <p>
                            We implement appropriate security measures to protect your data from unauthorized access, alteration, or disclosure.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">5. Your Rights</h3>
                        <p>
                            You have the right to access, correct, or delete your personal information. Contact us at any time for assistance.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">6. Updates to This Policy</h3>
                        <p>
                            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">7. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at support@codecraft.com.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
