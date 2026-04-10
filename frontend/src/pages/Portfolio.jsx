import React, { useState, useEffect } from 'react';

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
                { _id: 1, title: 'Titan E-Commerce', category: 'Web Development', description: 'Next.js high performance storefront.', imageUrl: 'https://via.placeholder.com/600x400', projectUrl: '#' },
                { _id: 2, title: 'Aegis Mobile', category: 'Mobile App Development', description: 'Cross platform fintech app.', imageUrl: 'https://via.placeholder.com/600x400', projectUrl: '#' },
                { _id: 3, title: 'Oracle Vision AI', category: 'AI Solutions', description: 'Computer vision defect detection.', imageUrl: 'https://via.placeholder.com/600x400', projectUrl: '#' }
            ]);
        };

        fetchPortfolio();
    }, []);

    const categories = ['All', 'Web Development', 'Mobile App Development', 'AI Solutions', 'UI/UX Design'];
    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="py-16 w-full bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Masterpieces</h2>
                    <p className="text-lg text-gray-600">Showcase</p>
                    <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />

                    <div className="flex flex-wrap justify-center gap-2 mt-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 border rounded ${filter === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project._id} className="bg-gray-50 border border-gray-200 rounded shadow overflow-hidden">
                            <div className="h-48 bg-gray-200">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 flex justify-between items-center">
                                    {project.title}
                                    {project.projectUrl && (
                                        <a href={project.projectUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm font-normal">
                                            View Source
                                        </a>
                                    )}
                                </h3>
                                <p className="text-sm text-blue-600 font-bold mb-3">{project.category}</p>
                                <p className="text-gray-700">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredProjects.length === 0 && (
                    <div className="text-center text-gray-500 mt-8">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
