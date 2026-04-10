import React from 'react';
import { FiTarget, FiEye, FiUsers } from 'react-icons/fi';

const About = () => {
    const coreValues = [
        { icon: <FiTarget size={32} />, title: 'Mission', desc: 'To provide unparalleled digital infrastructure and software architecture that accelerates organizational growth.' },
        { icon: <FiEye size={32} />, title: 'Vision', desc: 'To be the global benchmark for digital excellence, where innovation meets uncompromising reliability.' },
        { icon: <FiUsers size={32} />, title: 'Culture', desc: 'A collective of deeply passionate engineers and designers functioning as a unified force for change.' }
    ];

    return (
        <div className="py-16 w-full bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">About MESSIORA</h2>
                    <p className="text-lg text-gray-600">Our Legacy</p>
                    <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
                </div>

                {/* Company Story */}
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Pioneering Digital Architectures Since Inception</h3>
                        <p className="text-gray-700 mb-4">
                            MESSIORA was established with a singular, unyielding purpose: to bridge the gap between complex technological capabilities and elegant user experiences.
                        </p>
                        <p className="text-gray-700">
                            Over the years, we have gathered the brightest minds in AI, cloud architecture, and frontend design to create software that does more than function—it inspires. Our solutions are deployed across continents, empowering enterprises to operate with speed, precision, and immense scale.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-64 h-64 bg-gray-200 border border-gray-300 flex flex-col items-center justify-center rounded-lg shadow">
                            <div className="text-6xl font-bold text-blue-600 mb-2">10+</div>
                            <div className="text-lg text-gray-800 font-semibold uppercase">Years of Excellence</div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {coreValues.map((value, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded shadow border border-gray-200">
                            <div className="text-blue-600 mb-4">{value.icon}</div>
                            <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                            <p className="text-gray-600">{value.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Team / Tech Stack Note */}
                <div className="text-center max-w-4xl mx-auto p-8 bg-gray-100 border border-gray-300 rounded shadow">
                    <h3 className="text-2xl font-bold mb-4">Our Technological Backbone</h3>
                    <p className="text-gray-700 mb-6">
                        We leverage the modern trifecta of performance: React, Node.js, and advanced Cloud infrastructures to deliver robust applications. Our engineering team commands Next.js, Vite, Tailwind CSS, MongoDB, and deep learning frameworks to craft zero-error software.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Node.js', 'Python', 'AWS', 'TensorFlow', 'TailwindCSS'].map(tech => (
                            <span key={tech} className="px-4 py-2 bg-white text-blue-800 font-bold border border-gray-300 rounded shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
