import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiUsers, FiMessageSquare, FiImage, FiFileText } from 'react-icons/fi';

const Dashboard = () => {
    const { admin } = useAuth();
    const [stats, setStats] = useState({ messages: 0, projects: 0, posts: 0, services: 0 });

    useEffect(() => {
        const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const fetchStats = async () => {
            try {
                const headers = { Authorization: `Bearer ${admin.token}` };
                const [msgs, projs, psts, srvs] = await Promise.all([
                    fetch(`${API}/api/contact`, { headers }).then(r => r.json()),
                    fetch(`${API}/api/portfolio`, { headers }).then(r => r.json()),
                    fetch(`${API}/api/blog`, { headers }).then(r => r.json()),
                    fetch(`${API}/api/services`, { headers }).then(r => r.json()),
                ]);
                setStats({
                    messages: msgs.length || 0,
                    projects: projs.length || 0,
                    posts: psts.length || 0,
                    services: srvs.length || 0
                });
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
        fetchStats();
    }, [admin.token]);

    const cards = [
        { label: 'Unread Messages', value: stats.messages, icon: <FiMessageSquare size={24} className="text-sky-400" /> },
        { label: 'Portfolio Projects', value: stats.projects, icon: <FiImage size={24} className="text-sky-400" /> },
        { label: 'Blog Posts', value: stats.posts, icon: <FiFileText size={24} className="text-sky-400" /> },
        { label: 'Services Configured', value: stats.services, icon: <FiUsers size={24} className="text-sky-400" /> },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Welcome, {admin.username}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, idx) => (
                    <div key={idx} className="bg-black-800 border border-sky-400/20 p-6 rounded-xl flex items-center shadow-lg transition-transform hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-full bg-sky-500/10 flex items-center justify-center mr-4 shadow-inner">
                            {card.icon}
                        </div>
                        <div>
                            <p className="text-silver-400 text-sm font-medium">{card.label}</p>
                            <h3 className="text-3xl font-bold text-white">{card.value}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
