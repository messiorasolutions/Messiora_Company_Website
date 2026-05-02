import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiUsers, FiAward, FiBookOpen, FiCpu, FiTrendingUp } from 'react-icons/fi';
import t1 from '../assets/t1.jpeg';

const About = () => {
    const coreValues = [
        { icon: <FiTarget size={36} />, title: 'Mission', desc: 'To provide unparalleled digital infrastructure and software architecture that accelerates organizational growth.' },
        { icon: <FiEye size={36} />, title: 'Vision', desc: 'To be the global benchmark for digital excellence, where innovation meets uncompromising reliability.' },
        { icon: <FiUsers size={36} />, title: 'Culture', desc: 'A collective of deeply passionate engineers and designers functioning as a unified force for change.' }
    ];

    const qualifications = [
        { icon: <FiAward />, text: <span>BSc. (Hons.) Computer Science specialized in Software Engineering, UK, <span className="text-white font-black">First Class</span></span> },
        { icon: <FiTrendingUp />, text: <span>PGD in Cybersecurity, Singapore, <span className="text-white font-black">Batch top</span></span> },
        { icon: <FiBookOpen />, text: <span>MSc in Software, Kyungpook national University, South Korea <span className="text-sky-400 font-bold">(ongoing)</span></span> },
        { icon: <FiCpu />, text: 'R&D in Software + Forest Engineering, South Korea' }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-12 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-b from-sky-600/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-24"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Our Legacy</h2>
                    <h1 className="text-4xl md:text-5xl font-black mb-8 leading-none">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">MESSIORA</span>
                    </h1>
                    <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-light italic">
                        "Engineering perfection is not when there is nothing more to add, but when there is nothing left to take away."
                    </p>
                </motion.div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {coreValues.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-neutral-900/50 backdrop-blur-md p-10 rounded-3xl border border-neutral-800 hover:border-sky-500/20 transition-all text-center group"
                        >
                            <div className="text-sky-500 mb-8 mx-auto w-20 h-20 bg-neutral-950 rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                                {value.icon}
                            </div>
                            <h4 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter">{value.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-light">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center max-w-5xl mx-auto p-16 bg-neutral-900 rounded-[50px] border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-32"
                >
                    <h3 className="text-3xl font-black mb-8 text-white">Technological Mastery</h3>
                    <p className="text-gray-400 text-xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                        We leverage a military-grade tech stack centered around high-performance systems and fault-tolerant architectures.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {['REACT', 'NEXT.JS',
                            'NODE.JS', 'EXPRESS',
                            'MONGODB', 'MYSQL', 'POSTGRESQL',
                            'DOCKER',
                            'AWS',
                            'FIREBASE',
                            'GIT', 'GITHUB',
                            'POSTMAN',
                            'SELENIUM',
                            'BOOTSTRAP', 'REST API', 'DEV TOOLS', 'DEVOPS'
                        ].map(tech => (
                            <span key={tech} className="px-8 py-4 bg-neutral-950 text-sky-500 font-black text-sm border border-neutral-800 rounded-2xl hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all cursor-default shadow-lg">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Engineering Leadership */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Visionary Leadership</h2>
                        <h3 className="text-4xl font-black text-white tracking-tighter">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">ARCHITECT</span> OF INNOVATION
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-neutral-900/40 backdrop-blur-3xl border border-neutral-800 p-8 md:p-16 rounded-[60px] shadow-[0_0_50px_rgba(56,189,248,0.05)] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 blur-[120px] -mr-48 -mt-48 transition-all duration-700 group-hover:bg-sky-600/20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[100px] -ml-32 -mb-32 transition-all duration-700 group-hover:bg-blue-600/10"></div>

                        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                            <div className="w-full lg:w-1/3">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500 to-blue-600 rounded-[40px] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] border-2 border-neutral-800">
                                        <img
                                            src={t1}
                                            alt="Sankalpa Lokuliyanage"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-2/3">
                                <h4 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Sankalpa Lokuliyanage</h4>
                                <p className="text-sky-500 font-bold tracking-[0.1em] text-sm uppercase mb-8">Founder & CEO</p>

                                <div className="space-y-6">
                                    {qualifications.map((qual, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-5 p-4 rounded-2xl bg-neutral-950/50 border border-neutral-800/50 hover:border-sky-500/30 transition-all"
                                        >
                                            <div className="text-sky-500 mt-1 bg-neutral-900 p-2 rounded-lg">
                                                {qual.icon}
                                            </div>
                                            <p className="text-gray-300 font-light leading-relaxed">{qual.text}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
