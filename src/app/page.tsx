import { blogPosts } from '@/data/posts';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] mix-blend-screen" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-400">Aktualizováno pro rok 2026</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
            Doplňky stravy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">jednoduchý průvodce.</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Srozumitelné informace o tom, co opravdu funguje. Pomůžeme vám zorientovat se ve světě doplňků bez složitých pojmů.
          </p>


        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-32">
        <h2 className="sr-only">Seznam článků</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/50 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                  <span>{new Date(post.date).toLocaleDateString('cs-CZ')}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Číst článek <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
