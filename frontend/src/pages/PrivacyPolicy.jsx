import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-silver-200">
      <h1 className="text-4xl font-bold mb-4 text-center text-white">Privacy Policy</h1>
      <p className="text-center text-gray-400 mb-10">Effective Date: April 2026</p>
      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">1. Introduction</h2>
          <p>
            Messiora Solutions is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">2. Information We Collect</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, and other contact details you provide.</li>
            <li><span className="font-semibold">Usage Data:</span> Pages visited, time spent, browser type, and device information.</li>
            <li><span className="font-semibold">Cookies:</span> We use cookies for analytics and improving user experience. You can choose to disable cookies through your browser settings, but this may affect certain functionalities of the website.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To improve, personalize, and expand our website</li>
            <li>To communicate with you, including for customer support</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">4. Third-Party Services</h2>
          <p>
            We may use third-party services such as cloud providers (e.g., AWS, Google Cloud, Firebase) and analytics tools that process data on our behalf. These providers are contractually obligated to protect your information and only use it for specified purposes.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">5. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">7. Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">8. Your Rights</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><span className="font-semibold">Access:</span> You can request a copy of your personal data we hold.</li>
            <li><span className="font-semibold">Correction:</span> You can ask us to correct inaccurate or incomplete data.</li>
            <li><span className="font-semibold">Deletion:</span> You can request deletion of your data, subject to legal requirements.</li>
            <li><span className="font-semibold">Withdraw Consent:</span> You can withdraw your consent to data processing at any time.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at <a href="mailto:info@messiora.com" className="text-sky-400 underline">messiorasolutions@gmail.com</a>.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@messiora.com" className="text-sky-400 underline">messiorasolutions@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
