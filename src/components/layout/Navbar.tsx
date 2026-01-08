import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            Z
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            Zdravý Výběr
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                            Domů
                        </Link>
                        <Link href="/blog" className="text-gray-900 font-semibold border-b-2 border-green-500">
                            Magazín
                        </Link>
                        <Link href="/produkty" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                            Produkty
                        </Link>
                        <Link href="/o-nas" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                            O nás
                        </Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                        </button>
                        <button className="md:hidden p-2 text-gray-900">
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
