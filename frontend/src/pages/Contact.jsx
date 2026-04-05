import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

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
                setStatus('Success! Your message has been routed to our team.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Error sending message. Please try again.');
            }
        } catch (err) {
            setStatus('Network error. Our servers might be down momentarily.');
        }
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-24 pb-20 w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-20">
                    <h1 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Connectivity</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">Get in Touch</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-8 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info Section */}
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h3 className="text-3xl font-bold text-white mb-6">Let's Discuss Your Next Great Masterpiece.</h3>
                        <p className="text-silver-400 text-lg mb-12">
                            Ready to transform your ideas into exceptional digital realities? Our engineers are standing by.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="bg-gold-500/10 p-4 rounded-xl text-gold-500 mr-6">
                                    <FiMapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Global Headquarters</h4>
                                    <p className="text-silver-400">123 Innovation Drive,<br />Tech District, City 10002</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gold-500/10 p-4 rounded-xl text-gold-500 mr-6">
                                    <FiPhone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Direct Line</h4>
                                    <p className="text-silver-400">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gold-500/10 p-4 rounded-xl text-gold-500 mr-6">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-1">Digital Inlet</h4>
                                    <p className="text-silver-400">hello@messiora.com<br />support@messiora.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <div className="bg-black-800 p-10 rounded-3xl border border-gold-600/20 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/10 rounded-full blur-[50px] pointer-events-none"></div>

                            {status && (
                                <div className={`p-4 mb-6 rounded-lg font-medium border ${status.includes('Success') ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                    {status}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-silver-300 mb-2 font-medium">Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-silver-300 mb-2 font-medium">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-silver-300 mb-2 font-medium">Phone Number (optional)</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all" />
                                </div>
                                <div>
                                    <label className="block text-silver-300 mb-2 font-medium">Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full bg-black-900 border border-silver-400/20 px-4 py-3 rounded-xl text-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black-900 font-bold px-8 py-4 rounded-xl flex items-center justify-center transition-transform hover:scale-[1.02]">
                                    <FiSend className="mr-3" /> Send Dispatch
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
