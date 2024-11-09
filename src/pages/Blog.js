import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts/index';

function Blog() {
  console.log('Current blogPosts:', Object.keys(blogPosts));

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12">Blog Posts</h1>
      <div className="space-y-8">
        {Object.entries(blogPosts).map(([slug, post]) => (
          <Link 
            key={slug}
            to={`/blog/${slug}`}
            className="block bg-[#111111] rounded-lg p-6 hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="text-sm text-purple-400 mb-2">{post.date}</div>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm bg-[#222222] px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;