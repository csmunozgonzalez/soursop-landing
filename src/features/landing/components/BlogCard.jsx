import { ArrowUpRight, Clock, Tag } from 'lucide-react';

export default function BlogCard({ post }) {
    return (
        <div className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Tag size={10} /> {post.category}
                    </span>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                    <span className="flex items-center gap-1.5 font-medium">
                        <Clock size={12} /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">
                    {post.title}
                </h4>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto">
                    <button className="text-emerald-400 font-bold text-sm inline-flex items-center gap-2 group-hover:underline underline-offset-4 decoration-emerald-500/50">
                        Leer artículo completo <ArrowUpRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
