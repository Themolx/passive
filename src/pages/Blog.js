import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Blog() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        type: 'success',
        message: 'Thanks for subscribing! Please check your email to confirm.'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 bg-gradient-to-r from-purple-900/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/20"
      >
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-6">
          Subscribe to get notified about new tutorials, VFX resources, and industry insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-3 bg-white/5 border border-purple-500/20 rounded-full
                     focus:outline-none focus:border-purple-500/40 flex-grow"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 rounded-full font-medium transition-all transform
                     ${isSubmitting 
                       ? 'bg-gray-400 cursor-not-allowed' 
                       : 'bg-white text-black hover:bg-gray-100 hover:scale-105'}`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Subscribing...
              </span>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 px-4 py-2 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-500/20 text-green-200' 
                : 'bg-red-500/20 text-red-200'
            }`}
          >
            {status.message}
          </motion.div>
        )}
      </motion.section>

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

            {/* Continue Reading Link */}
            <Link 
              to={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 
                       text-white rounded-full transition-colors"
            >
              Continue Reading
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