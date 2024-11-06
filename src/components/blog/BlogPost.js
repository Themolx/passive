import React from 'react';

function BlogPost({ post }) {
  return (
    <article className="section-card group cursor-pointer hover:scale-[1.02] transition-transform">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-sm text-purple-400 mb-2 block">{post.category}</span>
          <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            {post.title}
          </h2>
        </div>
        <span className="text-sm text-gray-400">{post.readTime}</span>
      </div>
      
      <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{post.date}</span>
        <a 
          href={`/blog/${post.id}`} 
          className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
        >
          Read More 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default BlogPost; 