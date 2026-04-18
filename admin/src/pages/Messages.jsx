import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiCheck, FiMail, FiPhone } from 'react-icons/fi';

const Messages = () => {
    const { admin } = useAuth();
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${API}/api/contact`, {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            const data = await res.json();
            setMessages(data);
        } catch (err) {
            console.error('Error fetching messages:', err);
        }
    };

    const markAsRead = async (id) => {
        try {
            await fetch(`${API}/api/contact/${id}/read`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            fetchMessages();
        } catch (err) {
            console.error('Error marking as read:', err);
        }
    };

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
            <div className="grid grid-cols-1 gap-6">
                {messages.map((msg) => (
                    <div key={msg._id} className={`p-6 rounded-xl border ${msg.readStatus ? 'bg-black-900 border-silver-400/20' : 'bg-black-800 border-sky-400/40 shadow-lg'}`}>
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-sky-400">{msg.name}</h3>
                                <div className="flex space-x-4 text-sm text-silver-400 mt-2">
                                    <span className="flex items-center"><FiMail className="mr-2" /> {msg.email}</span>
                                    {msg.phone && <span className="flex items-center"><FiPhone className="mr-2" /> {msg.phone}</span>}
                                </div>
                            </div>
                            {!msg.readStatus && (
                                <button
                                    onClick={() => markAsRead(msg._id)}
                                    className="bg-sky-500/10 text-sky-400 border border-sky-500/30 px-3 py-1 rounded hover:bg-sky-500 hover:text-white transition-colors flex items-center space-x-2"
                                >
                                    <FiCheck /> <span>Mark Read</span>
                                </button>
                            )}
                        </div>
                        <p className="text-silver-300 mt-4 p-4 bg-black-900/50 rounded inline-block w-full">{msg.message}</p>
                    </div>
                ))}
                {messages.length === 0 && <p className="text-silver-400">No contact messages received yet.</p>}
            </div>
        </div>
    );
};

export default Messages;
