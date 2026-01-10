import React from 'react';
import { Product, Category } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Check, Truck, Shield, ExternalLink, Award, ThumbsUp } from 'lucide-react';

interface QuizResultsProps {
    products: Product[];
    goal: Category | null;
}

export function QuizResults({ products, goal }: QuizResultsProps) {
    if (products.length === 0) return null;

    const winner = products[0];
    const runnersUp = products.slice(1, 3);

    const getWhyText = (product: Product, goal: Category | null) => {
        switch (goal) {
            case 'weight_loss':
                return 'Tento produkt obsahuje účinné látky pro zrychlení metabolismu a podporu spalování tuků.';
            case 'energy':
                return 'Vybrali jsme tento produkt pro jeho schopnost dodat rychlou energii bez následného propadu.';
            case 'sleep':
                return 'Obsahuje složky, které prokazatelně zklidňují nervovou soustavu a zlepšují kvalitu spánku.';
            case 'muscle':
                return 'Ideální volba pro regeneraci svalů a podporu jejich růstu po tréninku.';
            default:
                return 'Tento produkt nejlépe odpovídá vašim preferencím a nabízí skvělý poměr cena/výkon.';
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Hero Card - The Winner */}
            <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-emerald-500/30 shadow-2xl">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-2 rounded-bl-2xl font-bold flex items-center gap-2 z-10">
                    <Award className="w-5 h-5" /> Náš vítěz pro vás
                </div>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="relative aspect-square md:aspect-auto h-64 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                        <img
                            src={winner.image_url}
                            alt={winner.name}
                            className="object-cover w-full h-full mix-blend-multiply"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{winner.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                Doporučujeme
                            </span>
                            <span className="text-sm text-slate-500">{winner.category}</span>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                                <ThumbsUp className="w-4 h-4 text-emerald-500" /> Proč jsme vybrali tento produkt?
                            </h4>
                            <p className="text-slate-600 text-sm italic">
                                "{getWhyText(winner, goal)}"
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-auto">
                            <div className="flex items-baseline gap-2">
                                <span className="text-xs text-slate-500">Cena od</span>
                                <span className="text-3xl font-bold text-emerald-600">{winner.price} Kč</span>
                            </div>

                            <a
                                href={winner.affiliate_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    className="bg-emerald-600 hover:bg-emerald-700 text-lg shadow-emerald-200 shadow-xl transform transition-transform hover:-translate-y-1"
                                >
                                    Zistit aktuální cenu & slevu <ExternalLink className="ml-2 w-5 h-5" />
                                </Button>
                            </a>

                            <div className="flex justify-center gap-4 text-xs text-slate-500 mt-2">
                                <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-emerald-500" /> Ověřený e-shop</span>
                                <span className="flex items-center gap-1"><Truck className="w-3 h-3 text-emerald-500" /> Rychlé dodání</span>
                                <span className="flex items-center gap-1"><Check className="w-3 h-3 text-emerald-500" /> Skladem</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Runners Up */}
            {runnersUp.length > 0 && (
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Další skvělé možnosti</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {runnersUp.map((product, idx) => (
                            <div key={product.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-6 items-center hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 flex-shrink-0 bg-slate-50 rounded-lg overflow-hidden relative">
                                    <div className="absolute top-0 left-0 bg-slate-200 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-br">
                                        #{idx + 2}
                                    </div>
                                    <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900 mb-1 line-clamp-1">{product.name}</h4>
                                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">{product.description}</p>

                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-emerald-600">{product.price} Kč</span>
                                        <a href={product.affiliate_link} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="sm" className="text-xs h-8">
                                                Zobrazit <ExternalLink className="ml-1 w-3 h-3" />
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
