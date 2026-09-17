import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { optimizeImage } from '../../utils/imageOptimizer';
import { BlogPost } from '../../data/blogPosts';

export interface BlogPostCardProps {
    post: BlogPost;
    onReadMore: (postId: string) => void;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onReadMore }) => {
    const { i18n } = useTranslation();
    const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ko';

    const getContent = (content: any) => {
        if (typeof content === 'string') return content;
        return content[lang] || content['en'] || content['id'] || '';
    };

    return (
        <article className="group bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Featured Image */}
            <div className="relative h-56 overflow-hidden">
                <img
                    src={optimizeImage(post.image, 400)}
                    alt={getContent(post.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width="400"
                    height="224"
                    loading="lazy"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-forest text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>

                    {post.author && (
                        <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                        </div>
                    )}

                    {post.readTime && (
                        <span>{post.readTime} read</span>
                    )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-forest transition-colors">
                    {getContent(post.title)}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {getContent(post.excerpt)}
                </p>

                {/* Read More */}
                <button
                    onClick={() => onReadMore(post.id)}
                    className="inline-flex items-center gap-2 text-forest font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all group"
                >
                    Read Article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </article>
    );
}
