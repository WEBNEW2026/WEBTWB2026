import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { MobileMenu } from '../layout/MobileMenu';
import { Logo } from '../ui/Logo';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigate = (section: string) => {
        setMobileOpen(false);
        const pageRoutes = ['villas', 'resto', 'facility', 'gallery'];
        if (pageRoutes.includes(section)) {
            window.dispatchEvent(new CustomEvent('navigate', { detail: section }));
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const navBtnClass = `px-4 py-2 text-sm font-medium border border-gray-400 text-gray-900
        hover:border-gray-900 rounded-sm transition-all duration-200`;

    return (
        <>
            {/* Desktop Header */}
            <motion.header
                className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between px-8 py-4 transition-colors duration-300 ${
                    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <Logo className="w-[180px] md:w-[260px] lg:w-[340px] h-auto transition-all duration-300" />
                <nav className="hidden md:flex gap-6 items-center">
                    <button className={navBtnClass} onClick={() => handleNavigate('villas')}>Villas</button>
                    <button className={navBtnClass} onClick={() => handleNavigate('resto')}>Dining</button>
                    <button className={navBtnClass} onClick={() => handleNavigate('facility')}>Experiences</button>
                    <button className={navBtnClass} onClick={() => handleNavigate('gallery')}>Gallery</button>
                    <LanguageSwitcher isScrolled={isScrolled} isHomePage={false} />
                    <button
                        className="px-4 py-2 text-sm font-medium bg-forest text-white hover:bg-forest-dark rounded-sm transition-all"
                        onClick={() => handleNavigate('booking')}
                    >
                        Book Now
                    </button>
                </nav>
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center gap-2">
                    <LanguageSwitcher isScrolled={isScrolled} isHomePage={false} />
                    <button
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} className="text-gray-900" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile overlay */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
                onNavigate={handleNavigate}
            />
        </>
    );
}
