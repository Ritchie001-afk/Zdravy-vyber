import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/posts';
import { Clock } from 'lucide-react';

export default function PostCard({ post }: { post: BlogPost }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1 transition-all duration-500 ease-out border border-neutral-100"
        >
            <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
                    {post.category}
                </div>
            </div>

            <div className="flex flex-col px-2 pb-4">
                <div className="flex items-center justify-between text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4">
                    <span>{new Date(post.date).toLocaleDateString('cs-CZ')}</span>
                    <span className="flex items-center gap-1 text-emerald-600">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                    </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                    {post.title}
                </h3>

                <p className="text-neutral-500 text-sm line-clamp-2 leading-relaxed mb-6">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-neutral-50 flex items-center text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                    Číst článek <span className="ml-2">→</span>
                </div>
            </div>
        </Link>
    );
}
