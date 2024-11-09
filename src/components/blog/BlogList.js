import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts/index';

function BlogList() {
  return (
    <div className="space-y-8">
      {Object.entries(blogPosts).map(([slug, post]) => (
        <Link 
          key={slug}
          to={`/blog/${slug}`}
          className="block p-6 bg-[#111111] rounded-xl hover:bg-[#1a1a1a] transition-colors"
        >
          <div className="mb-2 text-purple-400">{post.date}</div>
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-[#222222] rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogList; 