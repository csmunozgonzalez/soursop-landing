import { BLOG_POSTS } from '../data/BlogData';
import BlogCard from './BlogCard';

export default function LandingBlog() {
    return (
        <section id="blog" className="py-24 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-4">Recursos de Valor</h2>
                        <h3 className="text-4xl font-bold text-white mb-6 italic tracking-tight">Información Útil para Tu Crecimiento</h3>
                        <p className="text-slate-400">
                            Compartimos estrategias, guías y casos de éxito reales para ayudarte
                            a dominar el arte de la gestión empresarial y el escalamiento masivo.
                        </p>
                    </div>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all whitespace-nowrap h-fit">
                        Ver todos los artículos
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_POSTS.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
