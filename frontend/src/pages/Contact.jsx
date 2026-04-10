import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setStatus('Success! Your message has been sent.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('Error sending message. Please try again.');
            }
        } catch (err) {
            setStatus('Network error. Failed to send message.');
        }
    };

    return (
        <div className="py-16 w-full bg-white text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600">Connectivity</p>
                    <hr className="w-24 mx-auto my-4 border-t-2 border-blue-600" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                        <p className="text-gray-700 mb-8">Ready to transform your ideas into exceptional digital realities? Our team is standing by.</p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold">Address</h4>
                                <p className="text-gray-600">123 Innovation Drive, Tech District, City 10002</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Phone</h4>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h4 className="font-bold">Email</h4>
                                <p className="text-gray-600">hello@messiora.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-50 border border-gray-200 p-8 rounded shadow">
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                        {status && (
                            <div className={`p-4 mb-4 rounded border font-medium ${status.includes('Success') ? 'bg-green-100 text-green-800 border-green-300' : 'bg-red-100 text-red-800 border-red-300'}`}>
                                {status}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Phone (optional)</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full border border-gray-300 px-3 py-2 rounded resize-none focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
