import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        const fetchPosts = async () => {
            try {
                const res = await fetch(`${API}/api/blog`);
                const data = await res.json();
                if (data.length > 0) setPosts(data);
                else setStaticPosts();
            } catch (err) {
                setStaticPosts();
            }
        };

        const setStaticPosts = () => {
            setPosts([
                { _id: 1, title: 'The Future of AI in Enterprise', content: 'Discover how artificial intelligence is transforming legacy systems into highly responsive, dynamic environments that predict and scale effortlessly with unprecedented efficiency.', category: 'AI', author: 'Dr. Alan Smith', createdAt: new Date().toISOString() },
                { _id: 2, title: 'Optimizing React for Speed', content: 'Techniques to achieve 100 on Lighthouse. From suspense optimizations to caching deeply nested states, we dive into the world of web performance.', category: 'Web Development', author: 'Jane Doe', createdAt: new Date(Date.now() - 86400000).toISOString() },
                { _id: 3, title: 'Cybersecurity in 2026', content: 'Zero-trust architectures and post-quantum cryptography: What to expect and how to secure your infrastructure against the next generation of digital threats.', category: 'Security', author: 'Alex Murphy', createdAt: new Date(Date.now() - 186400000).toISOString() },
                { _id: 4, title: 'Cloud-Native Computing Trends', content: 'Kubernetes continues to evolve. Learn about the newest features designed to automate cross-cluster orchestration and massive multi-tenant scale.', category: 'Cloud Infrastructure', author: 'Sarah Lin', createdAt: new Date(Date.now() - 286400000).toISOString() },
            ]);
        };

        fetchPosts();
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <div className="pt-12 pb-24 w-full bg-neutral-950 text-white min-h-screen relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-bold text-sky-500 tracking-[0.2em] uppercase mb-4">Insights</h2>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 leading-none text-white">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Deep dives into technology, engineering leadership, and architectural patterns.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {posts.map((post) => (
                        <motion.div
                            key={post._id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-lg flex flex-col h-full hover:border-sky-500/50 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-5 mb-5">
                                <span className="px-4 py-1.5 bg-sky-500/10 text-sky-400 text-xs font-bold tracking-wider uppercase rounded-full border border-sky-500/20 shadow-[0_0_10px_rgba(56,189,248,0.1)]">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-sm flex items-center gap-2 font-medium">
                                    <FiCalendar className="text-gray-400" />
                                    {new Date(post.createdAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-sky-400 transition-colors leading-tight">{post.title}</h3>
                            <p className="text-gray-400 flex-grow mb-8 leading-relaxed">{post.content}</p>

                            <div className="flex justify-between items-center pt-5 border-t border-neutral-800">
                                <div className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-sky-500 border border-neutral-700">
                                        {post.author.charAt(0)}
                                    </div>
                                    <span className="text-white">{post.author}</span>
                                </div>
                                <button className="text-sky-500 font-bold flex items-center group/btn hover:text-sky-400 transition-colors">
                                    Read Post <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Blog;
