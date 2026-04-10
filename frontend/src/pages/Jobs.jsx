import React, { useState } from 'react';

const Jobs = () => {
    const [formData, setFormData] = useState({ jobTitle: '', applicantName: '', email: '', phone: '' });
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let cvUrl = '';
            // Upload CV first
            if (file) {
                const fd = new FormData();
                fd.append('cv', file);
                const uploadRes = await fetch('http://localhost:5000/api/upload/cv', {
                    method: 'POST',
                    body: fd
                });
                const uploadData = await uploadRes.json();
                cvUrl = uploadData.url;
            }

            // Submit application
            const res = await fetch('http://localhost:5000/api/jobs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, cvUrl: cvUrl || '/placeholder.pdf' })
            });

            if (res.ok) {
                setStatus('Application submitted successfully!');
                setFormData({ jobTitle: '', applicantName: '', email: '', phone: '' });
                setFile(null);
            } else {
                setStatus('Error submitting application.');
            }
        } catch (err) {
            setStatus('Network error. Failed to submit.');
        }
    };

    return (
        <div className="py-16 w-full bg-white text-gray-900 border-t border-gray-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Careers</h2>
                    <p className="text-lg text-gray-600">Join Our Team</p>
                    <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
                </div>

                <div className="bg-gray-50 border border-gray-200 p-8 rounded shadow">
                    {status && (
                        <div className={`p-4 mb-6 rounded border font-medium ${status.includes('success') ? 'bg-green-100 text-green-800 border-green-300' : 'bg-red-100 text-red-800 border-red-300'}`}>
                            {status}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Position Applying For</label>
                            <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" placeholder="E.g., Web Developer" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                            <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Upload CV (PDF, DOC)</label>
                            <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="w-full border border-gray-300 px-3 py-2 rounded bg-white text-gray-700" />
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 mt-4 rounded hover:bg-blue-700 transition">
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
