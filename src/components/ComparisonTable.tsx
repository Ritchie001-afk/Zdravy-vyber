import React from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Check, Star, ExternalLink, Trophy } from 'lucide-react';

interface ComparisonTableProps {
    products: Product[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
    // Find the top rated product to highlight
    const bestProduct = products.reduce((prev, current) =>
        (prev.rating > current.rating) ? prev : current
    );

    return (
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                        <th className="p-4 w-16">#</th>
                        <th className="p-4">Produkt</th>
                        <th className="p-4 hidden md:table-cell">Klíčový benefit</th>
                        <th className="p-4">Hodnocení</th>
                        <th className="p-4">Cena</th>
                        <th className="p-4 min-w-[140px] text-center">Dostupnost</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {products.map((product, idx) => {
                        const isWinner = product.id === bestProduct.id;

                        return (
                            <tr
                                key={product.id}
                                className={`transition-colors hover:bg-slate-50/50 ${isWinner ? 'bg-emerald-50/30' : ''}`}
                            >
                                <td className="p-4 font-bold text-slate-400">
                                    {idx + 1}.
                                </td>

                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white border border-slate-100 relative">
                                            <img
                                                src={product.image_url}
                                                alt={product.name}
                                                className="w-full h-full object-cover p-1"
                                            />
                                            {isWinner && (
                                                <div className="absolute top-0 left-0 w-full bg-emerald-500 text-white text-[10px] font-bold text-center py-0.5">
                                                    NÁŠ TIP
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 leading-tight mb-1">
                                                {product.name}
                                            </div>
                                            <div className="text-xs text-slate-500 md:hidden">
                                                {product.tags[0]?.replace('_', ' ')}
                                            </div>
                                            {isWinner && (
                                                <span className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full mt-1">
                                                    <Trophy size={10} /> Vítěz testu
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </td>

                                <td className="p-4 hidden md:table-cell align-middle">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-sm font-medium">
                                        <Check size={14} className="text-emerald-500" />
                                        {product.tags[0] ? product.tags[0].replace(/_/g, ' ') : 'Kvalita'}
                                    </span>
                                </td>

                                <td className="p-4 align-middle">
                                    <div className="flex items-center gap-1">
                                        <span className="font-bold text-slate-900">{product.rating}</span>
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={12}
                                                    className={`${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </td>

                                <td className="p-4 font-bold text-lg text-slate-900 align-middle">
                                    {product.price} Kč
                                </td>

                                <td className="p-4 text-center align-middle">
                                    <a
                                        href={product.affiliate_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <Button
                                            variant={isWinner ? 'primary' : 'outline'}
                                            size="sm"
                                            fullWidth
                                            className={isWinner ? 'bg-emerald-600 hover:bg-emerald-700' : 'text-xs'}
                                        >
                                            Ověřit cenu <ExternalLink size={14} className="ml-1" />
                                        </Button>
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
