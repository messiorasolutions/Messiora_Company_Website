import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/portfolio');
                const data = await res.json();
                if (data.length > 0) setProjects(data);
                else setProjects([
                    { _id: 1, title: 'Titan E-Commerce', category: 'Web Development', description: 'Next.js high performance storefront.', imageUrl: 'https://via.placeholder.com/600x400/171717/fde047?text=Titan+E-Commerce', projectUrl: '#' },
                    { _id: 2, title: 'Aegis Mobile', category: 'Mobile App Development', description: 'Cross platform fintech app.', imageUrl: 'https://via.placeholder.com/600x400/171717/fde047?text=Aegis+Mobile', projectUrl: '#' },
                    { _id: 3, title: 'Oracle Vision AI', category: 'AI Solutions', description: 'Computer vision defect detection.', imageUrl: 'https://via.placeholder.com/600x400/171717/fde047?text=Oracle+Vision', projectUrl: '#' }
                ]);
            } catch (err) {
                setProjects([
                    { _id: 1, title: 'Titan E-Commerce', category: 'Web Development', description: 'Next.js high performance storefront.', imageUrl: 'https://via.placeholder.com/600x400/171717/fde047?text=Titan+E-Commerce', projectUrl: '#' },
                    { _id: 2, title: 'Aegis Mobile', category: 'Mobile App Development', description: 'Cross platform fintech app.', imageUrl: 'https://via.placeholder.com/600x400/171717/fde047?text=Aegis+Mobile', projectUrl: '#' },
                    { _id: 3, title: 'Oracle Vision AI', category: 'AI Solutions', description: 'Computer vision defect detection.', imageUrl: 'https://via.placeholder.com/600x400/171717/fde047?text=Oracle+Vision', projectUrl: '#' }
                ]);
            }
        };
        fetchPortfolio();
    }, []);

    const categories = ['All', 'Web Development', 'Mobile App Development', 'AI Solutions', 'UI/UX Design'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    const fadeIn = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

    return (
        <div className="pt-24 pb-20 w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Showcase</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">Our Masterpieces</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-8 rounded-full mb-12"></div>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat ? 'bg-gold-500 text-black-900 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'bg-black-800 text-silver-300 border border-silver-400/20 hover:border-gold-500/50'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project._id}
                                layout
                                initial="hidden" animate="visible" exit="exit" variants={fadeIn}
                                className="bg-black-800 rounded-3xl overflow-hidden border border-silver-400/10 hover:border-gold-500/40 transition-colors group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent opacity-80"></div>
                                    <div className="absolute bottom-4 left-6 text-gold-400 text-sm font-bold uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                                        {project.title}
                                        {project.projectUrl && (
                                            <a href={project.projectUrl} target="_blank" rel="noreferrer" className="text-silver-400 hover:text-gold-500 transition-colors">
                                                <FiExternalLink size={20} />
                                            </a>
                                        )}
                                    </h3>
                                    <p className="text-silver-400 leading-relaxed">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                {filteredProjects.length === 0 && (
                    <div className="text-center text-silver-400 text-lg mt-12 w-full">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
