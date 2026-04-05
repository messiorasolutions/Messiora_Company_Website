import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                login(data);
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert('Login Failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black-900 px-4">
            <div className="bg-black-800 p-8 rounded-xl shadow-2xl border border-gold-600/30 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gold-500 mb-6">Admin Portal</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-silver-300 mb-2">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-black-900 border border-silver-400/20 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-silver-300 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-black-900 border border-silver-400/20 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gold-500 hover:bg-gold-600 text-black-900 font-bold py-3 rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
