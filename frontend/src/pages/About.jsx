import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiUsers } from 'react-icons/fi';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const coreValues = [
        { icon: <FiTarget size={32} />, title: 'Mission', desc: 'To provide unparalleled digital infrastructure and software architecture that accelerates organizational growth.' },
        { icon: <FiEye size={32} />, title: 'Vision', desc: 'To be the global benchmark for digital excellence, where innovation meets uncompromising reliability.' },
        { icon: <FiUsers size={32} />, title: 'Culture', desc: 'A collective of deeply passionate engineers and designers functioning as a unified force for change.' }
    ];

    return (
        <div className="pt-24 pb-20 w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-20">
                    <h1 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3 text-center w-full block">Our Legacy</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">About MESSIORA</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-8 rounded-full"></div>
                </motion.div>

                {/* Company Story */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h3 className="text-3xl font-bold text-white mb-6">Pioneering Digital Architectures Since Inception</h3>
                        <p className="text-silver-300 leading-relaxed mb-6 text-lg">
                            MESSIORA was established with a singular, unyielding purpose: to bridge the gap between complex technological capabilities and elegant user experiences.
                        </p>
                        <p className="text-silver-400 leading-relaxed">
                            Over the years, we have gathered the brightest minds in AI, cloud architecture, and frontend design to create software that does more than function—it inspires. Our solutions are deployed across continents, empowering enterprises to operate with speed, precision, and immense scale.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                        <div className="aspect-square bg-black-800 rounded-3xl border border-gold-600/20 relative overflow-hidden flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/40 via-black-900 to-black-900"></div>
                            <div className="relative z-10 text-center">
                                <div className="text-7xl font-bold text-gold-500 mb-2">10+</div>
                                <div className="text-xl text-white font-medium tracking-wide uppercase">Years of Excellence</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {coreValues.map((value, idx) => (
                        <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: idx * 0.2 }}
                            className="bg-black-800 p-10 rounded-2xl border border-silver-400/10 hover:border-gold-500/30 transition-colors"
                        >
                            <div className="text-gold-500 mb-6 bg-gold-500/10 w-16 h-16 rounded-xl flex items-center justify-center">{value.icon}</div>
                            <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                            <p className="text-silver-400 leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team / Tech Stack Note */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-4xl mx-auto p-12 bg-black-800 border border-gold-600/20 rounded-3xl">
                    <h3 className="text-3xl font-bold text-white mb-6">Our Technological Backbone</h3>
                    <p className="text-silver-300 text-lg leading-relaxed mb-8">
                        We leverage the modern trifecta of performance: React, Node.js, and advanced Cloud infrastructures to deliver robust applications. Our engineering team commands Next.js, Vite, Tailwind CSS, MongoDB, and deep learning frameworks to craft zero-error software.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'TailwindCSS'].map(tech => (
                            <span key={tech} className="px-6 py-3 bg-black-900 text-gold-400 rounded-full text-sm font-bold border border-gold-500/20">{tech}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
