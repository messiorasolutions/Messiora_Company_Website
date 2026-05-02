import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black-900 text-silver-300">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
