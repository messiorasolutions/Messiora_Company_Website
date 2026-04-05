import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // For MVP if backend is empty, it uses static fallback
                const res = await fetch('http://localhost:5000/api/services');
                const data = await res.json();
                if (data.length > 0) {
                    setServices(data);
                } else {
                    setServices([
                        { title: 'Fullstack Web Development', description: 'Enterprise-grade React and Node.js applications with complex architectures.', price: 'Starts at $2000' },
                        { title: 'AI & Data Science', description: 'Custom Machine learning models and computer vision applications.', price: 'Custom Quote' },
                        { title: 'Mobile Applications', description: 'Cross-platform iOS and Android apps crafted using React Native.', price: 'Starts at $3500' },
                        { title: 'UI/UX Premium Design', description: 'Bespoke interfaces with stunning interactive animations and layouts.', price: 'Starts at $1500' }
                    ]);
                }
            } catch (err) {
                // static fallback on error
                setServices([
                    { title: 'Fullstack Web Development', description: 'Enterprise-grade React and Node.js applications with complex architectures.', price: 'Starts at $2000' },
                    { title: 'AI & Data Science', description: 'Custom Machine learning models and computer vision applications.', price: 'Custom Quote' },
                    { title: 'Mobile Applications', description: 'Cross-platform iOS and Android apps crafted using React Native.', price: 'Starts at $3500' },
                    { title: 'UI/UX Premium Design', description: 'Bespoke interfaces with stunning interactive animations and layouts.', price: 'Starts at $1500' }
                ]);
            }
        };
        fetchServices();
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="pt-24 pb-20 w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-20">
                    <h1 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Capabilities</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">Our Services</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-8 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: idx * 0.1 }}
                            className="bg-black-800 p-8 md:p-12 rounded-3xl border border-silver-400/10 hover:border-gold-500/40 transition-colors flex flex-col h-full group"
                        >
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{srv.title}</h3>
                            <p className="text-silver-400 text-lg leading-relaxed flex-grow mb-8">{srv.description}</p>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto border-t border-silver-400/10 pt-6">
                                <span className="text-gold-500 font-bold mb-4 sm:mb-0 bg-gold-500/10 px-4 py-2 rounded-lg">{srv.price}</span>
                                <Link to="/contact" className="flex items-center text-white hover:text-gold-500 font-medium transition-colors">
                                    Request Service <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
