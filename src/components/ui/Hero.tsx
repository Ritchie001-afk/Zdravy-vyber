import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-6 border border-green-100">
                        Vědecky podložené informace
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-8">
                        Váš průvodce světem <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                            zdraví a vitality
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
                        Objevte pravdu o doplňcích stravy. Recenze, odborné články a tipy pro biohacking, které vám pomohou dosáhnout vašich cílů.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#latest-posts"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            číst nejnovější články
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                            href="/produkty"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                        >
                            Prohlédnout produkty
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
