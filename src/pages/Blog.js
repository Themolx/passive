import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12">Blog Posts</h1>
      <div className="space-y-8">
        {Object.entries(blogPosts).map(([slug, post]) => (
          <Link 
            key={slug}
            to={`/blog/${slug}`}
            className="block bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
          >
            <div className="text-sm text-purple-400 mb-2">{post.date}</div>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-400">#{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;