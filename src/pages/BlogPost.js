import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BlogContent from '../components/blog/BlogContent';
import { blogPosts } from '../data/blogPosts/index';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-24"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="text-purple-400 mb-2">{post.date}</div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-400">
          <span>By {post.author}</span>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {post.content.map((section, index) => (
          <BlogContent key={index} content={section} />
        ))}
      </div>
    </motion.div>
  );
}

export default BlogPost; 