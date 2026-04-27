import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiLayers } from 'react-icons/fi';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        const fetchPortfolio = async () => {
            try {
                const res = await fetch(`${API}/api/portfolio`);
                const data = await res.json();
                if (data.length > 0) setProjects(data);
                else setStaticProjects();
            } catch (err) {
                setStaticProjects();
            }
        };

        const setStaticProjects = () => {
            setProjects([
                { _id: 1, title: 'Restaurant POS System', category: 'Web Development', description: 'A modern Point of Sale system designed for restaurants, streamlining billing, order management, and payment processing through an intuitive interface. Features include real-time sales tracking, seamless kitchen communication, and automatic inventory updates. This solution enables faster service, reduces errors, improves stock control, and enhances the overall customer experience.', imageUrl: '/pos-system-image.png', projectUrl: '#' },
                { _id: 2, title: 'Car Buy & Sell App', category: 'Mobile App Development', description: 'A modern car buy and sell mobile app that allows users to easily list, browse, and purchase vehicles. It includes advanced search filters, detailed vehicle listings with images and specifications, and direct chat between buyers and sellers. The app ensures a smooth, secure, and efficient marketplace experience for both parties.', imageUrl: '/car.png', projectUrl: '#' },
                { _id: 3, title: 'QR-Based Smart Restaurant Website & Ordering System', category: 'Web Development', description: 'A smart restaurant website with an integrated QR-based ordering system that allows customers to scan a QR code using their phone to view the menu, place orders, and make payments seamlessly. It also provides real-time order updates, improving speed, convenience, and overall dining experience.', imageUrl: '/qr-restaurant.png', projectUrl: '#' }
            ]);
        };

        fetchPortfolio();
    }, []);

    const categories = ['All', 'Web Development', 'Mobile App Development', 'AI Solutions', 'UI/UX Design'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-12 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Masterpieces</h2>
                    <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none text-white">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Portfolio</span>
                    </h1>

                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {categories.map(cat => (
                            <motion.button
                                key={cat}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 ${filter === cat ? 'bg-sky-600 border-sky-600 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]' : 'bg-neutral-900 border-neutral-800 text-gray-400 hover:text-white hover:border-neutral-600'}`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-sky-500/50 transition-colors"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        {project.projectUrl && (
                                            <a href={project.projectUrl} target="_blank" rel="noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-600 transition-all">
                                                <FiExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 text-gray-500 border border-neutral-800 rounded-3xl"
                    >
                        <FiLayers size={40} className="mx-auto mb-4 opacity-20" />
                        <p className="text-xl font-medium">No projects found in this category.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;

/* Blog Card Example
Title: The Future of AI in Enterprise
Description: Explore how artificial intelligence is transforming traditional systems into intelligent, scalable, and automated enterprise solutions. Learn how AI improves efficiency, decision-making, and business growth.
*/
