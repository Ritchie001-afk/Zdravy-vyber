import { QuizWizard } from '@/components/QuizWizard';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium text-sm mb-6 border border-emerald-500/30 backdrop-blur-sm">
            #1 Průvodce suplementy v ČR
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-lg">
            Najděte to pravé <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              pro vaše zdraví
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nevíte si rady v záplavě produktů? Udělejte si náš chytrý test a zjistěte, co skutečně potřebujete.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="relative -mt-16 z-20 pb-20 px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-lg text-slate-800 font-semibold mb-4">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Udělejte si test za 30 sekund
          </div>
        </div>
        <QuizWizard />
      </section>

      {/* Categories Links (SEO) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Nebo prozkoumejte kategorie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Doplňky na hubnutí', category: 'hubnuti' },
              { label: 'Energie a vitalita', category: 'energie' },
              { label: 'Lepší spánek', category: 'spanek' },
              { label: 'Růst svalů', category: 'svaly' },
            ].map((cat) => (
              <Link key={cat.category} href={`/srovnani/${cat.category}`} className="block group">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-all hover:shadow-md text-center h-full flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
