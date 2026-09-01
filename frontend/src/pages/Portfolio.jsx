import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiLayers } from 'react-icons/fi';

import edugateImg from '../assets/edugateglobal.png';
import hubnspokeImg from '../assets/hubnspoke.jpg';
import kmartImg from '../assets/kmart.jpg';
import easyautoImg from '../assets/easyauto.png';

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
                { _id: 1, title: 'Edugate Global', category: 'Website & App Development', description: 'Educational platform connecting with global study opportunities.', imageUrl: edugateImg, projectUrl: 'https://edugateglobal.com' },
                { _id: 2, title: 'Hub & Spoke Cafe', category: 'Website & App Development', description: 'Website for Hub & Spoke Cafe provides menu showcase, online reservations.', imageUrl: hubnspokeImg, projectUrl: 'https://hubnspokecafe.com' },
                { _id: 3, title: 'Coupang-KMART', status: 'ongoing', category: 'Point of Sales (POS) Systems', description: 'Complete Web and POS (Point of Sale) system for Coupang Lanka Korean Mart.', imageUrl: kmartImg, projectUrl: 'https://coupanglanka.com/' },
                { _id: 4, title: 'EASY AUTO Application', category: 'Website & App Development', description: 'Vehicle buy and sell mobile application for Easy Auto.', imageUrl: easyautoImg, projectUrl: '#' }
            ]);
        };

        fetchPortfolio();
    }, []);

    const categories = ['All', 'Point of Sales (POS) Systems', 'Business Automation Tools', 'Website & App Development', 'Custom Software Solutions'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-32 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-16"
                >



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
                                <div className="h-64 overflow-hidden relative bg-neutral-950 flex items-center justify-center p-2">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 rounded-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60"></div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 mb-2 block">
                                                {project.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors flex items-center gap-3">
                                                {project.title}
                                                {project.status === 'ongoing' && (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[9px] uppercase tracking-widest font-bold">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                                                        In Progress
                                                    </span>
                                                )}
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
