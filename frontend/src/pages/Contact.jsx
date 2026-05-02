import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('Success! Your message has been sent to our team.');
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

    const PhoneInputComponent = PhoneInput.default || PhoneInput;

    return (
        <div className="pt-12 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <style>
                {`
                    .react-tel-input .country-list {
                        background-color: #0a0a0a !important;
                        color: white !important;
                        border: 1px solid #262626 !important;
                    }
                    .react-tel-input .country-list .country:hover {
                        background-color: #171717 !important;
                    }
                    .react-tel-input .country-list .country.highlight {
                        background-color: #1a1a1a !important;
                    }
                    .react-tel-input .country-list .country-name {
                        color: #d4d4d4 !important;
                    }
                    .react-tel-input .country-list .dial-code {
                        color: #737373 !important;
                    }
                `}
            </style>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.05),transparent_50%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Connectivity</h2>
                    <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none tracking-tighter">
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
                            <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Contact Information</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm font-light">
                                Ready to transform your ideas into exceptional digital realities? Our team is standing by to architect your success.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-neutral-800 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                                    <FiMapPin size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-0.5">Location</h4>
                                    <p className="text-base font-bold text-white">2, kettarama temple road, maligawaththa, Colombo 10</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-neutral-800 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                                    <FiPhone size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-0.5">Phone</h4>
                                    <p className="text-base font-bold text-white">+82 10 4832 0845</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-neutral-800 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                                    <FiMail size={22} />
                                </div>
                                <div>
                                    <h4 className="text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] mb-0.5">email</h4>
                                    <p className="text-base font-bold text-white">Hello@messiora.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10">
                            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-neutral-800 pb-4 inline-block">Global Availability</h4>
                            <div className="flex items-center gap-3 text-sky-500 font-black text-xl">
                                <FiCheckCircle />
                                <span>24 / 7 DAYS</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 md:p-10 rounded-[40px] shadow-2xl relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/10 blur-[80px] pointer-events-none"></div>

                        <h3 className="text-lg font-black text-white mb-8 tracking-tight uppercase">Send Message</h3>

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
                                <label className="text-[12px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 text-sm rounded-xl focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="Your Full Name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[12px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 text-sm rounded-xl focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="name@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Phone</label>
                                    {PhoneInputComponent && (
                                        <PhoneInputComponent
                                            country={'lk'}
                                            value={formData.phone}
                                            onChange={phone => setFormData({ ...formData, phone })}
                                            inputProps={{
                                                name: 'phone',
                                                required: true
                                            }}
                                            placeholder="+94 71 123 4567"
                                            containerClass="!w-full"
                                            inputClass="!w-full !h-[46px] !bg-neutral-950 !border !border-neutral-800 !text-white !pl-12 !pr-5 !py-3 !text-sm !rounded-xl focus:!border-sky-500 transition-colors shadow-inner"
                                            buttonClass="!bg-neutral-950 !border !border-neutral-800 !rounded-l-xl hover:!bg-neutral-900"
                                            dropdownClass="!bg-neutral-950 !text-white !border-neutral-800"
                                            buttonStyle={{ backgroundColor: '#0a0a0a' }}
                                            dropdownStyle={{ backgroundColor: '#0a0a0a', color: 'white' }}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[12px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full bg-neutral-950 border border-neutral-800 text-white px-5 py-3 text-sm rounded-xl resize-none focus:outline-none focus:border-sky-500 transition-colors shadow-inner" placeholder="Project details, technical requirements, or vision..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black py-3.5 rounded-xl shadow-[0_10px_30px_rgba(56,189,248,0.3)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.5)] transition-all flex items-center justify-center gap-2 text-sm tracking-[0.1em]"
                            >
                                SUBMIT <FiSend />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
