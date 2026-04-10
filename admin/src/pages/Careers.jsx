import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FiDownload, FiUser, FiBriefcase } from 'react-icons/fi';

const Careers = () => {
    const { admin } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const fetchJobs = async () => {
        try {
            const res = await fetch(`${API}/api/jobs`, {
                headers: { Authorization: `Bearer ${admin.token}` }
            });
            const data = await res.json();
            setJobs(data);
        } catch (err) {
            console.error('Error fetching jobs:', err);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await fetch(`${API}/api/jobs/${id}/status`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${admin.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
            fetchJobs();
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };

    const getStatusColor = (status) => {
        if (status === 'Pending') return 'text-yellow-400';
        if (status === 'Reviewed') return 'text-blue-400';
        if (status === 'Rejected') return 'text-red-400';
        return 'text-silver-400';
    };

    return (
        <div className="text-white">
            <h1 className="text-3xl font-bold mb-6">Job Applications</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobs.map((job) => (
                    <div key={job._id} className="p-6 bg-black-800 rounded-xl border border-sky-400/20 shadow-lg">
                        <div className="flex justify-between items-start mb-4 border-b border-white/5 pb-4">
                            <div>
                                <h3 className="text-xl font-bold text-sky-400 flex items-center"><FiBriefcase className="mr-2" /> {job.jobTitle}</h3>
                                <div className="mt-2 text-silver-300">
                                    <span className="flex items-center mb-1"><FiUser className="mr-2" /> {job.applicantName}</span>
                                    <span className="text-sm block ml-6">{job.email}</span>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded text-xs font-bold border ${getStatusColor(job.status)} border-current bg-current/10`}>
                                {job.status}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a
                                href={`${API}${job.cvUrl}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center text-sky-400 hover:text-sky-300 transition-colors"
                            >
                                <FiDownload className="mr-2" /> Download CV
                            </a>
                            <select
                                value={job.status}
                                onChange={(e) => updateStatus(job._id, e.target.value)}
                                className="bg-black-900 border border-silver-400/20 rounded px-2 py-1 text-sm text-silver-300 outline-none focus:border-sky-400"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Reviewed">Reviewed</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                    </div>
                ))}
                {jobs.length === 0 && <p className="text-silver-400">No applications received yet.</p>}
            </div>
        </div>
    );
};

export default Careers;
