import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    {
      date: "March 15, 2024",
      title: "Creating Custom Glitch Effects in After Effects",
      tags: ["After Effects", "Tutorial", "Creative"],
      videoId: "your-video-id-1",
      excerpt: "Learn how to create unique glitch effects using native After Effects tools. We'll explore different techniques for achieving authentic digital artifacts and data corruption aesthetics.",
      slug: "custom-glitch-effects"
    },
    {
      date: "March 10, 2024",
      title: "Advanced Node Graph Organization in Nuke",
      tags: ["Nuke", "Workflow", "Quick Tip"],
      videoId: "your-video-id-2",
      excerpt: "Keeping your node graph organized is crucial for complex compositions. Here's my approach to maintaining readable and efficient node trees in large-scale projects.",
      slug: "node-graph-organization"
    },
    {
      date: "March 5, 2024",
      title: "Real-time VFX with TouchDesigner: Getting Started",
      tags: ["TouchDesigner", "Tutorial", "Real-time"],
      videoId: "your-video-id-3",
      excerpt: "A beginner's guide to creating real-time visual effects using TouchDesigner. Perfect for live performances and interactive installations.",
      slug: "touchdesigner-basics"
    },
    {
      date: "February 28, 2024",
      title: "Python Scripting for DaVinci Resolve Automation",
      tags: ["Python", "DaVinci Resolve", "Automation"],
      videoId: "your-video-id-4",
      excerpt: "Automate repetitive tasks in DaVinci Resolve using Python. We'll build a simple script to batch process footage and manage your workflow.",
      slug: "resolve-python-automation"
    },
    {
      date: "February 20, 2024",
      title: "Optimizing Render Times in Complex Compositions",
      tags: ["Performance", "Workflow", "Technical Guide"],
      videoId: "your-video-id-5",
      excerpt: "Practical tips and techniques for improving render performance in heavy compositions. Learn about memory management, caching, and optimization strategies.",
      slug: "render-optimization"
    }
  ];

  // Tag colors mapping
  const tagColors = {
    "After Effects": "text-blue-400 hover:text-blue-300",
    "Tutorial": "text-green-400 hover:text-green-300",
    "Creative": "text-purple-400 hover:text-purple-300",
    "Nuke": "text-red-400 hover:text-red-300",
    "Workflow": "text-yellow-400 hover:text-yellow-300",
    "Quick Tip": "text-emerald-400 hover:text-emerald-300",
    "TouchDesigner": "text-cyan-400 hover:text-cyan-300",
    "Real-time": "text-orange-400 hover:text-orange-300",
    "Python": "text-indigo-400 hover:text-indigo-300",
    "DaVinci Resolve": "text-rose-400 hover:text-rose-300",
    "Automation": "text-violet-400 hover:text-violet-300",
    "Performance": "text-amber-400 hover:text-amber-300",
    "Technical Guide": "text-teal-400 hover:text-teal-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-24"
    >
      {/* Blog Posts */}
      <div className="space-y-16">
        {blogPosts.map((post, index) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 rounded-xl p-8 hover:bg-white/[0.07] transition-colors"
          >
            <div className="mb-4">
              <span className="text-gray-400 text-sm">{post.date}</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">
              <Link to={`/blog/${post.slug}`} className="hover:text-purple-400 transition-colors">
                {post.title}
              </Link>
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className={`cursor-pointer ${tagColors[tag]} text-sm font-medium`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Video Embed Container */}
            <div className="relative mb-8 aspect-video">
              <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${post.videoId}`}
                  title={post.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Blog Excerpt */}
            <p className="text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Read More Link */}
            <Link 
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
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
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

export default Blog;