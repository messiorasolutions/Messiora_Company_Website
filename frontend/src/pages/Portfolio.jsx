import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiLayers } from 'react-icons/fi';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/portfolio');
                const data = await res.json();
                if (data.length > 0) setProjects(data);
                else setStaticProjects();
            } catch (err) {
                setStaticProjects();
            }
        };

        const setStaticProjects = () => {
            setProjects([
                { _id: 1, title: 'Titan E-Commerce', category: 'Web Development', description: 'Next.js high performance storefront with real-time inventory and AI recommendations.', imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80', projectUrl: '#' },
                { _id: 2, title: 'Aegis Mobile', category: 'Mobile App Development', description: 'Cross platform fintech app featuring biometric security and instant global transfers.', imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80', projectUrl: '#' },
                { _id: 3, title: 'Oracle Vision AI', category: 'AI Solutions', description: 'Advanced computer vision system for real-time manufacturing defect detection.', imageUrl: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=800&q=80', projectUrl: '#' },
                { _id: 4, title: 'Nebula Cloud', category: 'Web Development', description: 'Distributed computing dashboard designed for massive multi-tenant orchestration.', imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', projectUrl: '#' },
                { _id: 5, title: 'Synth UX Kit', category: 'UI/UX Design', description: 'A complete design system for future-facing operating systems and interfaces.', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80', projectUrl: '#' },
                { _id: 6, title: 'Quantum Neural', category: 'AI Solutions', description: 'Self-optimizing neural network architecture for high-frequency trading.', imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80', projectUrl: '#' }
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
        <div className="py-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Case Studies</h2>
                    <h1 className="text-5xl md:text-6xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                        Our Masterpieces
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
                                            <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
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
