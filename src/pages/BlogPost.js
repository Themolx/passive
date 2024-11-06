import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

function BlogPost() {
  const { slug } = useParams();

  const blogPosts = {
    'custom-glitch-effects': {
      title: "Creating Custom Glitch Effects in After Effects",
      date: "March 15, 2024",
      author: "Martin Tomek",
      tags: ["After Effects", "Tutorial", "Creative"],
      videoId: "your-video-id-1",
      content: [
        {
          type: 'paragraph',
          content: "In this comprehensive tutorial, we'll dive deep into creating authentic glitch effects using Adobe After Effects. These techniques can be applied to any video project requiring a digital distortion or corruption aesthetic."
        },
        {
          type: 'heading',
          content: "Step-by-Step Process"
        },
        {
          type: 'paragraph',
          content: "1. Start by creating a displacement map using Fractal Noise. This will serve as the base for our glitch movement."
        },
        {
          type: 'paragraph',
          content: "2. Apply the displacement map to your footage using the Displacement Map effect. Adjust the displacement amount to control the intensity of the glitch."
        },
        {
          type: 'paragraph',
          content: "3. Add chromatic aberration using Channel Shift. This creates the classic RGB split effect often seen in digital glitches."
        }
      ]
    },
    'node-graph-organization': {
      title: "Advanced Node Graph Organization in Nuke",
      date: "March 10, 2024",
      author: "Martin Tomek",
      tags: ["Nuke", "Workflow", "Quick Tip"],
      videoId: "your-video-id-2",
      content: [
        {
          type: 'paragraph',
          content: "Keeping your node graph organized is crucial for complex compositions. Here's my approach to maintaining readable and efficient node trees in large-scale projects."
        }
      ]
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return <div className="container mx-auto px-4 py-24">Post not found</div>;
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-24"
    >
      <div className="mb-8">
        <span className="text-purple-400">{post.date}</span>
        <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
        <div className="flex items-center gap-2 text-gray-400">
          <span>By {post.author}</span>
          <span>•</span>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-sm bg-white/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mb-12 aspect-video">
        <div className="absolute inset-0 border-2 border-purple-500/20 rounded-lg overflow-hidden">
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

      <div className="prose prose-invert prose-purple max-w-none">
        {post.content.map((section, index) => {
          switch (section.type) {
            case 'paragraph':
              return <p key={index} className="text-gray-300 leading-relaxed mb-6">{section.content}</p>;
            case 'heading':
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>;
            default:
              return null;
          }
        })}
      </div>
    </motion.article>
  );
}

export default BlogPost; 