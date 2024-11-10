import React from 'react';
import { motion } from 'framer-motion';

function BlogPost({ post }) {
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
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="prose prose-invert max-w-none"
          >
            {section.type === 'intro' && (
              <div className="text-xl leading-relaxed mb-8">
                {section.content}
              </div>
            )}
            
            {section.type === 'section' && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <div className="text-gray-300 whitespace-pre-wrap">
                  {section.content}
                </div>
              </div>
            )}
            
            {section.type === 'conclusion' && (
              <div className="mt-12 border-t border-white/10 pt-12">
                <div className="text-gray-300 mb-8">
                  {section.content.summary}
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <p className="text-xl mb-4">{section.content.callToAction.text}</p>
                  <div className="flex gap-4">
                    {section.content.callToAction.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-400 mt-8 italic">
                    {section.content.inspiration}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default BlogPost; 