import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.zdravy-vyber.cz';

    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...posts,
    ];
}
