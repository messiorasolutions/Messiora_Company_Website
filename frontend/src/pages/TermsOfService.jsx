import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-silver-200">
      <h1 className="text-4xl font-bold mb-4 text-center text-white">Terms of Service</h1>
      <p className="text-center text-gray-400 mb-10">Effective Date: April 2026</p>
      <div className="space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by Messiora Solutions, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">2. Services</h2>
          <p>
            Messiora Solutions provides web development, software solutions, and related digital services. We reserve the right to modify or discontinue any service at any time without prior notice.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">3. User Responsibilities</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not engage in any activity that may harm or disrupt our systems</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">4. Intellectual Property</h2>
          <p>
            All content, designs, code, and materials provided by Messiora Solutions are the intellectual property of the company unless otherwise stated. You may not copy, reproduce, or distribute any content without prior written permission.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">5. Payments and Billing</h2>
          <p>
            All payments for services must be made as agreed upon. Failure to make payments may result in suspension or termination of services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">6. Limitation of Liability</h2>
          <p>
            Messiora Solutions shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our services.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">7. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time if you violate these terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">8. Third-Party Services</h2>
          <p>
            Our services may include integrations with third-party tools or platforms. We are not responsible for the practices or policies of these third parties.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">9. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Continued use of our services after changes means you accept the updated terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of Sri Lanka.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-sky-400">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:messiorasolutions@gmail.com" className="text-sky-400 underline">messiorasolutions@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
