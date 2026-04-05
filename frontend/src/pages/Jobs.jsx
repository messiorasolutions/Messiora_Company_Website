import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiSend } from 'react-icons/fi';

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
            setStatus('Network error. Our servers might be down.');
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-24 pb-20 w-full min-h-screen border-t border-gold-600/10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
                    <h1 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Careers</h1>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Join Our Ranks</h2>
                    <p className="mt-4 text-silver-300">Submit your CV and become part of a legacy.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                    <div className="bg-black-800 p-10 rounded-3xl border border-gold-600/20 shadow-2xl">
                        {status && (
                            <div className={`p-4 mb-6 rounded-lg font-medium border ${status.includes('success') ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                {status}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-silver-300 mb-2 font-medium">Position Applying For</label>
                                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-all font-medium" placeholder="E.g., Senior React Engineer" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-silver-300 mb-2 font-medium">Full Name</label>
                                    <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-silver-300 mb-2 font-medium">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-silver-300 mb-2 font-medium">Phone</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 transition-all" />
                            </div>

                            <div className="mt-8">
                                <label className="block text-silver-300 mb-2 font-medium">Upload Curriculum Vitae (PDF)</label>
                                <div className="border-2 border-dashed border-silver-400/30 rounded-xl p-8 text-center hover:border-gold-500 transition-colors bg-black-900 relative">
                                    <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    <div className="pointer-events-none flex flex-col items-center justify-center">
                                        <FiUploadCloud size={40} className="text-gold-500 mb-4" />
                                        <p className="text-silver-300 font-medium">{file ? file.name : "Drag and drop your CV here or click to browse"}</p>
                                        <p className="text-silver-500 text-sm mt-1">Accepted formats: PDF, DOC, DOCX</p>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center transition-transform hover:scale-[1.02] mt-8">
                                <FiSend className="mr-3" /> Submit Application
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Jobs;
