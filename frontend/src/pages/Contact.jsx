import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('Success! Your message has been sent to our engineers.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Error sending message. Please try again or email us directly.');
            }
        } catch (err) {
            setStatus('Network error. Failed to reach server. Please check your connection.');
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="py-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.05),transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Connectivity</h2>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
                        GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">TOUCH</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Collaborate with the engineers building tomorrow. Let's start the dialogue.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Contact Information</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                                Ready to transform your ideas into exceptional digital realities? Our team is standing by to architect your success.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-neutral-800 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                                    <FiMapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-1">HQ Location</h4>
                                    <p className="text-xl font-bold text-white">123 Innovation Drive, Silicon Plains</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-neutral-800 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                                    <FiPhone size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Direct Line</h4>
                                    <p className="text-xl font-bold text-white">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-neutral-800 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                                    <FiMail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Signal Protocol</h4>
                                    <p className="text-xl font-bold text-white">hello@messiora.io</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-neutral-800 pb-4 inline-block">Global Response Time</h4>
                            <div className="flex items-center gap-4 text-sky-500 font-black text-2xl">
                                <FiCheckCircle />
                                <span>&lt; 6 HOURS</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-10 md:p-14 rounded-[40px] shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/10 blur-[80px] pointer-events-none"></div>

                        <h3 className="text-3xl font-black text-white mb-10 tracking-tight">SEND MESSAGE</h3>

                        {status && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`p-5 mb-8 rounded-2xl border font-bold text-center ${status.includes('Success') ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}
                            >
                                {status}
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-1">Identity</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="Your Full Name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-1">Email Endpoint</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="name@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-1">Communication</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-neutral-950 border border-neutral-800 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-1">Briefing</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-neutral-950 border border-neutral-800 text-white px-6 py-4 rounded-2xl resize-none focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="Project details, technical requirements, or vision..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(56,189,248,0.3)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.5)] transition-all flex items-center justify-center gap-3 tracking-[0.1em]"
                            >
                                TRANSMIT <FiSend />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
