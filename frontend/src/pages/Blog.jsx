import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/blog');
                const data = await res.json();
                if (data.length > 0) setPosts(data);
                else setPosts([
                    { _id: 1, title: 'The Future of AI in Enterprise', content: 'Discover how AI is transforming legacy systems...', category: 'AI', author: 'Dr. Alan Smith', createdAt: new Date().toISOString() },
                    { _id: 2, title: 'Optimizing Next.js for Speed', content: 'Techniques to achieve 100 on Lighthouse...', category: 'Web Development', author: 'Jane Doe', createdAt: new Date(Date.now() - 86400000).toISOString() }
                ]);
            } catch (err) {
                setPosts([
                    { _id: 1, title: 'The Future of AI in Enterprise', content: 'Discover how AI is transforming legacy systems...', category: 'AI', author: 'Dr. Alan Smith', createdAt: new Date().toISOString() },
                    { _id: 2, title: 'Optimizing Next.js for Speed', content: 'Techniques to achieve 100 on Lighthouse...', category: 'Web Development', author: 'Jane Doe', createdAt: new Date(Date.now() - 86400000).toISOString() }
                ]);
            }
        };
        fetchPosts();
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="pt-24 pb-20 w-full min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-16">
                    <h1 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Insights</h1>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white">Latest Articles</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto mt-8 rounded-full mb-12"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-left">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={post._id}
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: idx * 0.2 }}
                            className="bg-black-800 p-8 md:p-10 rounded-3xl border border-silver-400/10 hover:border-gold-500/40 transition-colors flex flex-col h-full group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="bg-gold-500/10 text-gold-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                                    {post.category}
                                </span>
                                <span className="text-silver-400 text-sm">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{post.title}</h3>
                            <p className="text-silver-300 text-lg leading-relaxed flex-grow mb-8 line-clamp-3">{post.content}</p>
                            <div className="border-t border-silver-400/10 pt-6 mt-auto text-silver-400 font-medium">
                                By <span className="text-white">{post.author}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
