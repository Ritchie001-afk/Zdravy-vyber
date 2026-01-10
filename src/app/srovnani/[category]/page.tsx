import { products, Category } from '@/data/products';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Mapping for URL friendly slugs to internal categories
const categoryMap: Record<string, Category> = {
    'hubnuti': 'weight_loss',
    'energie': 'energy',
    'spanek': 'sleep',
    'svaly': 'muscle',
    'zdravi': 'health',
    'klouby': 'joints',
};

const czCategoryNames: Record<Category, string> = {
    'weight_loss': 'Hubnutí',
    'energy': 'Energie',
    'sleep': 'Lepší spánek',
    'muscle': 'Růst svalů',
    'health': 'Pevné zdraví',
    'joints': 'Zdravé klouby',
};

// Next.js 15 Async Params Type
interface PageProps {
    params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
    return Object.keys(categoryMap).map((category) => ({
        category,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { category: slug } = await params;
    const categoryKey = categoryMap[slug];

    if (!categoryKey) return {};

    const czName = czCategoryNames[categoryKey];
    const year = new Date().getFullYear(); // 2026

    return {
        title: `Nejlepší produkty na ${czName} - Srovnání ${year}`,
        description: `Velký test a srovnání doplňků na ${czName}. Podívejte se na vítěze a ušetřete peníze.`,
    };
}

export default async function ComparisonPage({ params }: PageProps) {
    const { category: slug } = await params;
    const categoryKey = categoryMap[slug];

    if (!categoryKey) {
        return notFound();
    }

    // Filter products for this category
    const categoryProducts = products.filter(p => p.category === categoryKey);
    const czName = czCategoryNames[categoryKey];
    const year = new Date().getFullYear();

    // JSON-LD Schema
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': categoryProducts.map((product, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'name': product.name,
            'url': `https://zdravyvyber.cz/srovnani/${slug}#${product.id}`,
        })),
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                        Nejlepší produkty na <span className="text-emerald-600">{czName}</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Nezávislé srovnání a test doplňků stravy pro rok {year}.
                        Porovnali jsme složení, účinnost a cenu, abyste vybrali správně.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

                {/* Comparison Table Section */}
                <section>
                    <div className="flex items-center gap-2 mb-6 text-slate-800">
                        <CheckCircle2 className="text-emerald-600" />
                        <h2 className="text-2xl font-bold">Velké srovnání TOP produktů</h2>
                    </div>
                    <ComparisonTable products={categoryProducts} />
                </section>

                {/* Quiz Magnet Banner */}
                <section className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Nevíte si rady s výběrem?</h2>
                            <p className="text-emerald-100 text-lg mb-6">
                                Každé tělo je jiné. Spusťte náš chytrý průvodce a najdeme pro vás řešení přímo na míru vašim potřebám.
                            </p>
                            <Link href="/#quiz">
                                <Button variant="secondary" size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 shadow-none hover:shadow-lg">
                                    Spustit průvodce výběrem <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="hidden md:flex justify-center">
                            {/* Visual representation of magnet/quiz */}
                            {/* Visual representation of magnet/quiz */}
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">Průběh testu</span>
                                    <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">30 sekund</span>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 text-white">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold shadow-lg shadow-emerald-900/20">1</div>
                                        <span className="font-medium text-lg">Vyberete svůj cíl</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-emerald-100/60">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">2</div>
                                        <span className="font-medium">Upřesníte preference</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-emerald-100/60">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">3</div>
                                        <span className="font-medium">Doporučíme to nejlepší</span>
                                    </div>
                                </div>
                                <div className="w-full bg-black/20 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-emerald-400 h-full w-1/3 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-2 mb-8 justify-center">
                        <HelpCircle className="text-emerald-600" />
                        <h2 className="text-2xl font-bold text-slate-900">Často kladené otázky</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Jak vybrat nejlepší produkty na {czName.toLowerCase()}?</h3>
                            <p className="text-slate-600">
                                Při výběru se zaměřte na složení, koncentraci účinných látek a recenze ostatních uživatelů.
                                V našem srovnání zohledňujeme poměr cena/výkon i kvalitu surovin.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Jsou tyto doplňky bezpečné?</h3>
                            <p className="text-slate-600">
                                Všechny doporučované produkty jsou od ověřených výrobců (jako GymBeam) a splňují legislativní normy ČR/EU.
                                Vždy však dodržujte doporučené dávkování.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">Kdy poznám první výsledky?</h3>
                            <p className="text-slate-600">
                                To je individuální. U některých doplňků (např. předtréninkovky) je účinek okamžitý,
                                u jiných (např. na {czName.toLowerCase()}) je třeba dlouhodobější užívání v řádu týdnů.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
