import { blogPosts } from '@/data/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from 'lucide-react';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: 'Post not found',
        };
    }

    return {
        title: post.title,
        description: post.metaDescription,
    };
}

export default async function BlogPostPage(props: Props) {
    const params = await props.params;
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen pb-24">
            <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
                {/* Minimal Header */}
                <header className="mb-12 text-center">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Article',
                                headline: post.title,
                                description: post.metaDescription,
                                image: `https://seo-sandbox-blog.vercel.app${post.imageUrl}`,
                                datePublished: post.date,
                                author: {
                                    '@type': 'Organization',
                                    name: 'Zdravý Výběr',
                                },
                            }),
                        }}
                    />
                    <div className="flex items-center justify-center gap-3 text-xs font-bold tracking-widest text-emerald-500 uppercase mb-8">
                        <span>{post.category}</span>
                        <span className="text-slate-600">•</span>
                        <span>{new Date(post.date).toLocaleDateString('cs-CZ')}</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl font-bold text-white leading-[1.1] mb-10 tracking-tight">
                        {post.title}
                    </h1>

                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl shadow-emerald-900/10 mb-12 border border-slate-800">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                {/* Key Takeaways - Modern Dark */}
                <section className="mb-14 p-8 bg-slate-900/50 rounded-3xl border border-emerald-500/20 backdrop-blur-sm">
                    <h2 className="text-lg font-bold text-emerald-400 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Co si odnést
                    </h2>
                    <ul className="space-y-4">
                        {post.keyTakeaways.map((point, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-300 font-medium text-lg leading-relaxed">
                                <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Article Content - Dark Mode Reading */}
                <div
                    className="prose prose-lg prose-invert mx-auto
                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-8
                    prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                    prose-strong:font-bold prose-strong:text-white
                    prose-ul:text-slate-300 prose-li:my-2
                    "
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
                {/* Sources & References */}
                {post.references && post.references.length > 0 && (
                    <section className="mt-16 pt-8 border-t border-slate-800">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                            Zdroje a odborná literatura
                        </h3>
                        <ul className="space-y-2">
                            {post.references.map((ref, i) => (
                                <li key={i} className="text-xs text-slate-500 leading-relaxed font-mono">
                                    [{i + 1}] {ref}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
        </article>
    );
}
