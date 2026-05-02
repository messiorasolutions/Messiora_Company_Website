import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCpu, FiLayout, FiGlobe, FiDatabase, FiCloud, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

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
                    title: 'Web Development',
                    icon: <FiCode size={40} />,
                    description: 'Build fast and modern websites and web apps that work smoothly and can grow with your business.',
                    features: ['Modern Websites', 'Web Applications', 'Responsive Design', 'High Performance']
                },
                {
                    title: 'Point of Sales (POS) Systems',
                    icon: <FiDatabase size={40} />,
                    description: 'Build easy-to-use POS systems for stores and shops to manage sales and stock faster.',
                    features: ['Inventory Management', 'Sales Tracking', 'Billing Systems', 'Branch Control']
                },
                {
                    title: 'Mobile Apps',
                    icon: <FiSmartphone size={40} />,
                    description: 'Create mobile apps for Android and iOS that are easy to use and help you connect with your users.',
                    features: ['Android & iOS Apps', 'User Friendly UI', 'Push Notifications', 'App Store Launch']
                },
                {
                    title: 'MVP Development',
                    icon: <FiGlobe size={40} />,
                    description: 'Quickly build simple versions of your product so you can test your idea and launch faster.',
                    features: ['Rapid Prototyping', 'Core Features Build', 'User Feedback Testing', 'Market Validation']
                },
                {
                    title: 'Business Automation Tools',
                    icon: <FiCpu size={40} />,
                    description: 'Create tools that automate repetitive jobs to save you time and make your business more efficient.',
                    features: ['Workflow Automation', 'Data Entry Tools', 'Task Scheduling', 'Process Optimization']
                },
                {
                    title: 'Custom Software Solutions',
                    icon: <FiCloud size={40} />,
                    description: 'Develop special software made exactly for your business needs to solve specific problems.',
                    features: ['Bespoke Software', 'Database Systems', 'API Integrations', 'Secure Architecture']
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
        <div className="pt-32 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20"
                >

                    <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none text-white">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600"> Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Architect innovative solutions that empower your growth.
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
                        Tell us about your vision.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-4 text-2xl font-black text-sky-500 hover:text-blue-500 transition-colors group">
                        Start Your Journey <FiArrowRight className="group-hover:translate-x-3 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
