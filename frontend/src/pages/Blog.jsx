import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/blog');
                const data = await res.json();
                if (data.length > 0) setPosts(data);
                else setStaticPosts();
            } catch (err) {
                setStaticPosts();
            }
        };

        const setStaticPosts = () => {
            setPosts([
                { _id: 1, title: 'The Future of AI in Enterprise', content: 'Discover how AI is transforming legacy systems...', category: 'AI', author: 'Dr. Alan Smith', createdAt: new Date().toISOString() },
                { _id: 2, title: 'Optimizing Next.js for Speed', content: 'Techniques to achieve 100 on Lighthouse...', category: 'Web Development', author: 'Jane Doe', createdAt: new Date(Date.now() - 86400000).toISOString() }
            ]);
        };

        fetchPosts();
    }, []);

    return (
        <div className="py-16 w-full bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
                    <p className="text-lg text-gray-600">Insights</p>
                    <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                        <div key={post._id} className="bg-gray-50 border border-gray-200 p-8 rounded shadow flex flex-col h-full cursor-pointer hover:bg-gray-100">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded">
                                    {post.category}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                            <p className="text-gray-700 flex-grow mb-6">{post.content}</p>
                            <div className="text-gray-500 text-sm font-medium">
                                By <span className="text-black">{post.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
