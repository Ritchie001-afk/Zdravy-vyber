"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mail, CheckCircle2 } from "lucide-react";

export default function NewsletterModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };

    const reset = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail("");
        }, 300);
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200"
            >
                Odebírat
            </button>

            {/* Modal Portal */}
            {isOpen && mounted && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
                        onClick={reset}
                    />

                    <div className="relative w-full max-w-md scale-100 transform overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-2xl transition-all border border-slate-800">
                        {/* Close Button */}
                        <button
                            onClick={reset}
                            className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Content */}
                        {!isSubmitted ? (
                            <div className="text-center">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                                    <Mail className="h-8 w-8 text-emerald-500" />
                                </div>

                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    Zůstaňte v obraze
                                </h3>
                                <p className="mb-8 text-slate-400">
                                    Získejte přehled o nových článcích a exkluzivní tipy, které na blogu nenajdete.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="vas@email.cz"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-xl border-slate-800 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-emerald-600 px-4 py-3 font-bold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-0.5"
                                    >
                                        Chci odebírat novinky
                                    </button>
                                </form>

                                <p className="mt-4 text-xs text-slate-600">
                                    Žádný spam. Odhlásit se můžete kdykoliv.
                                </p>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 animate-in zoom-in duration-300">
                                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                                </div>
                                <h3 className="mb-2 text-2xl font-bold text-white">
                                    Jste přihlášeni!
                                </h3>
                                <p className="text-slate-400 mb-8">
                                    Díky za důvěru. První newsletter vám pošleme, jakmile vydáme nový článek.
                                </p>
                                <button
                                    onClick={reset}
                                    className="w-full rounded-xl bg-slate-800 px-4 py-3 font-bold text-white transition-all hover:bg-slate-700"
                                >
                                    Zavřít
                                </button>
                            </div>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
