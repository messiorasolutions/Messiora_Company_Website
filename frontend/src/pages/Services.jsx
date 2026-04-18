import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCpu, FiLayout, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        const fetchServices = async () => {
            try {
                const res = await fetch(`${API}/api/services`);
                const data = await res.json();
                if (data.length > 0) {
                    setServices(data);
                } else {
                    setStaticServices();
                }
            } catch (err) {
                setStaticServices();
            }
        };

        const setStaticServices = () => {
            setServices([
                {
                    title: 'Fullstack Web Development',
                    icon: <FiCode size={40} />,
                    description: 'Enterprise-grade systems built with React, Node.js and distributed architectures. We focus on scalability, security and extreme performance.',
                    price: 'Starts at $2,000',
                    features: ['Progressive Web Apps', 'Real-time Dashboards', 'API Integration', 'Secure Auth Systems']
                },
                {
                    title: 'AI & Data Science',
                    icon: <FiCpu size={40} />,
                    description: 'Custom machine learning models designed to automate your core business logic and find patterns in massive data lakes.',
                    price: 'Custom Quote',
                    features: ['Computer Vision', 'NLP Processing', 'Predictive Analytics', 'Neural Networks']
                },
                {
                    title: 'Mobile Applications',
                    icon: <FiSmartphone size={40} />,
                    description: 'Native-feel iOS and Android applications developed using cutting-edge cross-platform technologies for maximum reach.',
                    price: 'Starts at $3,500',
                    features: ['React Native Expert', 'Biometric Security', 'Offline Capability', 'Smooth Animations']
                },
                {
                    title: 'UI/UX Premium Design',
                    icon: <FiLayout size={40} />,
                    description: 'Bespoke design systems and interfaces crafted for the high-end market. We build interactive proofs of concept.',
                    price: 'Starts at $1,500',
                    features: ['Interactive Prototypes', 'Design Systems', 'Micro-interactions', 'Brand Identity']
                }
            ]);
        };

        fetchServices();
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <div className="pt-12 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Capabilities</h2>
                    <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none text-white">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Precision Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        We don't just write code; we architect solutions that drive revenue and redefine industry standards.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                >
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className="bg-neutral-900 border border-neutral-800 p-10 rounded-3xl shadow-xl flex flex-col h-full hover:border-sky-500/30 transition-all group"
                        >
                            <div className="text-sky-500 mb-8 bg-neutral-950 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                {srv.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-sky-400 transition-colors">{srv.title}</h3>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">{srv.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 flex-grow">
                                {(srv.features || []).map((feat, fidx) => (
                                    <div key={fidx} className="flex items-center gap-3 text-gray-300">
                                        <FiCheckCircle className="text-sky-500 flex-shrink-0" />
                                        <span className="text-sm font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-center bg-neutral-950 p-6 rounded-2xl border border-neutral-800/50">
                                <div className="mb-4 sm:mb-0">
                                    <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Price Point</span>
                                    <span className="text-xl font-black text-white">{srv.price}</span>
                                </div>
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-gradient-to-r from-sky-400 to-blue-600 text-white font-black px-8 py-3 rounded-full text-sm shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                                    >
                                        CHOOSE PLAN
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center p-12 bg-neutral-900/50 border border-neutral-800 rounded-[40px] backdrop-blur-sm"
                >
                    <h3 className="text-2xl font-black text-white mb-4 italic">Need Something Bespoke?</h3>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                        Our engineering team thrives on unique challenges. Tell us about your vision.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-4 text-2xl font-black text-sky-500 hover:text-blue-500 transition-colors group">
                        Start Your Global Transformation <FiArrowRight className="group-hover:translate-x-3 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
