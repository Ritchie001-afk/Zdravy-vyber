import Link from 'next/link';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { ExternalLink, Check, Star } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    rank?: number;
}

export function ProductCard({ product, rank }: ProductCardProps) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 transition-all hover:shadow-xl hover:-translate-y-1">
            {rank && (
                <div className="absolute left-0 top-0 z-10 bg-emerald-600 px-3 py-1 text-sm font-bold text-white rounded-br-xl">
                    #{rank}
                </div>
            )}

            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-sm">
                    {product.category}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                        />
                    ))}
                    <span className="text-sm text-slate-500 ml-1">({product.rating})</span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-slate-900 line-clamp-2">
                    {product.name}
                </h3>

                <p className="mb-4 text-sm text-slate-600 line-clamp-3 flex-1">
                    {product.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                            {tag.replace('_', ' ')}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-500">Cena od</span>
                        <span className="text-2xl font-bold text-emerald-600">{product.price} Kč</span>
                    </div>
                    <a href={product.affiliate_link} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="sm" className="gap-2">
                            Zistit cenu <ExternalLink size={16} />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
