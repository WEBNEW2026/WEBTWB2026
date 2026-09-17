import React, { useState } from 'react';
import { Search, Calendar, Users, Home } from 'lucide-react';
import { VILLAS } from '../../constants';

interface HeroBookingWidgetProps {
    lang?: 'id' | 'en';
}

export const HeroBookingWidget: React.FC<HeroBookingWidgetProps> = ({ lang = 'id' }) => {
    const [villa, setVilla] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(2);

    // Get selected villa details — parse capacity string to a safe number
    const selectedVilla = VILLAS.find(v => v.id === villa);
    const rawCapacity = selectedVilla?.capacity ?? '';
    const maxGuests: number = Number(parseInt(String(rawCapacity).match(/\d+/)?.[0] ?? '20', 10) || 20);

    // Reset guests if exceeds villa capacity
    React.useEffect(() => {
        if (guests > maxGuests) {
            setGuests(maxGuests);
        }
    }, [villa, maxGuests, guests]);

    const handleSearch = () => {
        if (villa) {
            // Navigate to specific villa detail page
            window.dispatchEvent(new CustomEvent('navigate-villa', { detail: villa }));
        } else {
            // No villa selected, go to villas page
            window.dispatchEvent(new CustomEvent('navigate', { detail: 'villas' }));
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 mt-12 animate-fade-in-up delay-300 hidden md:block">
            {/* Desktop Only: Neumorphism Pill - Wide & Transparent */}
            <div className="relative bg-white/20 backdrop-blur-md rounded-full p-3 shadow-[4px_4px_16px_rgba(0,0,0,0.08),-4px_-4px_16px_rgba(255,255,255,0.3)] border border-white/30">
                <div className="flex items-center gap-1">

                    {/* Villa Selection */}
                    <div className="flex-1 px-4 py-3.5 rounded-full transition-all hover:bg-white/10">
                        <div className="flex items-center gap-2">
                            <Home className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                            <span className="text-[10px] uppercase tracking-[0.12em] text-white/70 font-bold mr-1.5 whitespace-nowrap">
                                Villa:
                            </span>
                            <select
                                value={villa}
                                onChange={(e) => setVilla(e.target.value)}
                                className="flex-1 min-w-0 bg-transparent border-none p-0 text-[12px] font-light text-white focus:ring-0 cursor-pointer appearance-none"
                            >
                                <option value="" className="bg-gray-900">{lang === 'id' ? 'Pilih Villa' : 'Select Villa'}</option>
                                {VILLAS.map(v => (
                                    <option key={v.id} value={v.id} className="bg-gray-900">{v.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Subtle Separator */}
                    <div className="w-px h-9 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                    {/* Check In */}
                    <div className="flex-1 px-4 py-3.5 rounded-full transition-all hover:bg-white/10">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                            <span className="text-[10px] uppercase tracking-[0.12em] text-white/70 font-bold mr-1.5 whitespace-nowrap">
                                Check In:
                            </span>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="flex-1 min-w-0 bg-transparent border-none p-0 text-[12px] font-light text-white focus:ring-0 cursor-pointer [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    {/* Subtle Separator */}
                    <div className="w-px h-9 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                    {/* Check Out */}
                    <div className="flex-1 px-4 py-3.5 rounded-full transition-all hover:bg-white/10">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                            <span className="text-[10px] uppercase tracking-[0.12em] text-white/70 font-bold mr-1.5 whitespace-nowrap">
                                Check Out:
                            </span>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                min={checkIn}
                                className="flex-1 min-w-0 bg-transparent border-none p-0 text-[12px] font-light text-white focus:ring-0 cursor-pointer [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    {/* Subtle Separator */}
                    <div className="w-px h-9 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                    {/* Guests */}
                    <div className="flex-1 px-4 py-3.5 rounded-full transition-all hover:bg-white/10">
                        <div className="flex items-center gap-2">
                            <Users className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                            <span className="text-[10px] uppercase tracking-[0.12em] text-white/70 font-bold mr-1.5 whitespace-nowrap">
                                Tamu:
                            </span>
                            <select
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                                className="flex-1 min-w-0 bg-transparent border-none p-0 text-[12px] font-light text-white focus:ring-0 cursor-pointer appearance-none"
                            >
                                {Array.from({ length: Math.floor(maxGuests / 2) }, (_, i) => (i + 1) * 2).map(num => (
                                    <option key={num} value={num} className="bg-gray-900">{num} {lang === 'id' ? 'Orang' : 'Guests'}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Neumorphic Search Button */}
                    <button
                        onClick={handleSearch}
                        className="bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white rounded-full px-7 py-3.5 flex items-center gap-2 transition-all duration-300 shadow-[2px_2px_8px_rgba(0,0,0,0.1),-2px_-2px_8px_rgba(255,255,255,0.2)] hover:shadow-[3px_3px_12px_rgba(0,0,0,0.12),-3px_-3px_12px_rgba(255,255,255,0.3)] active:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.1)]"
                    >
                        <Search className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
                            {lang === 'id' ? 'Cari' : 'Search'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};
