import { blogPosts } from '@/lib/data';
import { BlogCard } from '../blog-card';

export default function Blog() {

    return (
        <section id="blog" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl font-bold mb-12 font-mono">
                    From the Blogs
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {blogPosts.map((post, index) => (
                        <div key={index} className={index === 0 ? 'lg:col-span-2' : ''}>
                            <BlogCard {...post} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
