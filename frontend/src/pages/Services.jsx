import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/services');
                const data = await res.json();
                if (data.length > 0) {
                    setServices(data);
                } else {
                    setStaticServices();
                }
            } catch (err) {
                setStaticServices();
            }
        };

        const setStaticServices = () => {
            setServices([
                { title: 'Fullstack Web Development', description: 'Enterprise-grade React and Node.js applications with complex architectures.', price: 'Starts at $2000' },
                { title: 'AI & Data Science', description: 'Custom Machine learning models and computer vision applications.', price: 'Custom Quote' },
                { title: 'Mobile Applications', description: 'Cross-platform iOS and Android apps crafted using React Native.', price: 'Starts at $3500' },
                { title: 'UI/UX Premium Design', description: 'Bespoke interfaces with stunning interactive animations and layouts.', price: 'Starts at $1500' }
            ]);
        };

        fetchServices();
    }, []);

    return (
        <div className="py-16 w-full bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600">Capabilities</p>
                    <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {services.map((srv, idx) => (
                        <div key={idx} className="bg-gray-50 border border-gray-200 p-6 rounded shadow flex flex-col h-full">
                            <h3 className="text-xl font-bold text-black mb-3">{srv.title}</h3>
                            <p className="text-gray-700 flex-grow mb-6">{srv.description}</p>
                            <div className="flex justify-between items-center border-t border-gray-300 pt-4">
                                <span className="font-bold text-blue-600">{srv.price}</span>
                                <Link to="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                                    Request Service
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
