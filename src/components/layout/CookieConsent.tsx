'use client';

import { useState, useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';

interface CookieConsentProps {
    gaId: string;
}

export default function CookieConsent({ gaId }: CookieConsentProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [consent, setConsent] = useState<boolean>(false);

    useEffect(() => {
        // Check local storage on mount
        const savedConsent = localStorage.getItem('cookie_consent');

        if (savedConsent === 'granted') {
            setConsent(true);
        } else if (savedConsent === 'denied') {
            setConsent(false);
        } else {
            // If no choice stored, show banner
            // Small delay to ensure smooth entry after hydration
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'granted');
        setConsent(true);
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie_consent', 'denied');
        setConsent(false);
        setIsVisible(false);
    };

    return (
        <>
            {/* Conditionally render Google Analytics based on consent state */}
            {consent && <GoogleAnalytics gaId={gaId} />}

            {/* Banner */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-[100] transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="bg-slate-900 border-t border-slate-800 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
                    <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">

                        <div className="flex items-start gap-3 flex-1">
                            <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0 text-emerald-500">
                                <Cookie className="w-5 h-5" />
                            </div>
                            <div className="text-sm text-slate-300 leading-relaxed">
                                <p>
                                    Používáme cookies k vylepšení našeho webu a analýze návštěvnosti.
                                    Respektujeme vaše soukromí a data sbíráme pouze s vaším souhlasem.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                            <button
                                onClick={handleDecline}
                                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded-lg w-full sm:w-auto"
                            >
                                Odmítnout
                            </button>
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all rounded-lg shadow-lg shadow-emerald-500/20 w-full sm:w-auto whitespace-nowrap"
                            >
                                Přijmout vše
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
