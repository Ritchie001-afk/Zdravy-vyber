import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZdravyVyber - Váš průvodce zdravím',
  description: 'Najděte ty nejlepší doplňky stravy a produkty pro vaše zdraví s naším chytrým testem.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <a href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
                <span className="text-emerald-600">Zdravý</span>Výběr
              </a>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
                <a href="/srovnani/hubnuti" className="hover:text-emerald-600 transition-colors">Hubnutí</a>
                <a href="/srovnani/spanek" className="hover:text-emerald-600 transition-colors">Spánek</a>
                <a href="/srovnani/energie" className="hover:text-emerald-600 transition-colors">Energie</a>
                <a href="/srovnani/svaly" className="hover:text-emerald-600 transition-colors">Růst svalů</a>
                <a
                  href="/#quiz"
                  className="ml-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all font-bold shadow-lg shadow-emerald-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Spustit test
                </a>
              </nav>
            </div>
          </header>

          <div className="flex-1">
            {children}
          </div>

          <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
            <div className="mx-auto max-w-7xl px-4">
              <p>&copy; {new Date().getFullYear()} ZdravyVyber.cz - Všechna práva vyhrazena.</p>
              <p className="mt-2 text-xs text-slate-400">
                Obsah je pouze informativní a nenahrazuje lékařskou péči.
              </p>
            </div>
          </footer>
        </div>
      </body >
    </html >
  );
}
