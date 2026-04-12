import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiBriefcase, FiUser, FiMail, FiPhone } from 'react-icons/fi';

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

    const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let cvUrl = '';
            if (file) {
                const fd = new FormData();
                fd.append('cv', file);
                const uploadRes = await fetch(`${API}/api/upload/cv`, {
                    method: 'POST',
                    body: fd
                });
                const uploadData = await uploadRes.json();
                cvUrl = uploadData.url;
            }

            const res = await fetch(`${API}/api/jobs`, {
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

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="py-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Careers</h2>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-none text-white">
                        Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Our Team</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Build the future. Challenge the status quo. Leave a dent in the universe with MESSIORA.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="bg-neutral-900 border border-neutral-800 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

                    {status && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-5 mb-8 rounded-xl border font-bold flex items-center justify-center text-center backdrop-blur-md ${status.includes('success') ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-red-500/10 text-red-500 border-red-500/30'}`}
                        >
                            {status}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <FiBriefcase className="text-sky-500" /> Position
                                </label>
                                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-inner text-sm" placeholder="E.g., Senior AI Engineer" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <FiUser className="text-sky-500" /> Full Name
                                </label>
                                <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-inner text-sm" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <FiMail className="text-sky-500" /> Email
                                </label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-inner text-sm" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <FiPhone className="text-sky-500" /> Phone
                                </label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors shadow-inner text-sm" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-800">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Resume / CV (PDF, DOC)</label>
                            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-neutral-800 border-dashed rounded-2xl cursor-pointer bg-neutral-950/50 hover:bg-neutral-800/50 hover:border-sky-500/50 transition-all group">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <FiUploadCloud className="w-10 h-10 text-gray-500 group-hover:text-sky-400 mb-2 transition-colors" />
                                    <p className="mb-1 text-xs text-gray-400 group-hover:text-white transition-colors"><span className="font-bold text-sky-500">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500">{file ? file.name : "PDF, DOC, DOCX"}</p>
                                </div>
                                <input id="dropzone-file" type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" required className="hidden" />
                            </label>
                        </div>

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="px-12 py-3.5 mx-auto block w-max bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-base rounded-full shadow-[0_5px_15px_rgba(56,189,248,0.2)] hover:shadow-[0_8px_25px_rgba(56,189,248,0.4)] transition-all duration-300 tracking-wide">Submit Application</motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Jobs;
