import { products, Category } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronLeft } from 'lucide-react';

// Map URL slug suffix to Category
const categoryMap: Record<string, Category> = {
    'doplnky-na-hubnuti': 'weight_loss',
    'doplnky-na-energii': 'energy',
    'lepsi-spanek': 'sleep',
    'rust-svalu': 'muscle',
    'doplnky-na-zdravi': 'health',
    'klouby-a-vazy': 'joints',
};

const reverseCategoryMap: Record<string, string> = {
    'weight_loss': 'Doplňky na hubnutí',
    'energy': 'Doplňky na energii',
    'sleep': 'Lepší spánek',
    'muscle': 'Růst svalů',
    'health': 'Vitamíny a zdraví',
    'joints': 'Kloubní výživa',
};

// Generate static params for SSG
export function generateStaticParams() {
    return Object.keys(categoryMap).map((key) => ({
        slug: `nejlepsi-${key}`,
    }));
}

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { slug } = await params;

    // Validate prefix
    if (!slug?.startsWith('nejlepsi-')) {
        return notFound();
    }

    const categoryKey = slug.replace('nejlepsi-', '');
    const category = categoryMap[categoryKey];

    if (!category) {
        return notFound();
    }

    const categoryProducts = products.filter((p) => p.category === category);
    const title = `Nejlepší ${reverseCategoryMap[category].toLowerCase()} pro rok 2024`;

    return (
        <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="mb-4 pl-0">
                            <ChevronLeft size={20} /> Zpět na úvod
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl">
                        Vyzkoušeli jsme a vybrali ty nejúčinnější produkty v kategorii {reverseCategoryMap[category].toLowerCase()}.
                        Podívejte se na náš výběr pro rok 2024.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts.map((product, idx) => (
                        <ProductCard key={product.id} product={product} rank={idx + 1} />
                    ))}
                </div>

                {categoryProducts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-slate-500">V této kategorii momentálně nejsou žádné produkty.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
