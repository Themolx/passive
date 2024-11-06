import React from 'react';
import BlogPost from '../blog/BlogPost';

function LatestBlogPosts() {
  const latestPosts = [
    {
      id: 1,
      title: "Creating Glitch Art: A Beginner's Guide",
      excerpt: "Learn the fundamentals of glitch art creation, from basic techniques to advanced data manipulation. Discover how to use popular software and create your own unique style.",
      date: "2024-03-20",
      category: "Tutorial",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Evolution of VFX in Modern Cinema",
      excerpt: "Explore how visual effects have transformed filmmaking over the past decade, from practical effects to cutting-edge digital compositing techniques.",
      date: "2024-03-15",
      category: "Industry Insights",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Mastering Nuke: Advanced Compositing Workflows",
      excerpt: "Deep dive into professional compositing workflows in Nuke, including tips for efficient node structures and creative problem-solving.",
      date: "2024-03-10",
      category: "Technical Guide",
      readTime: "15 min read"
    },
    {
      id: 4,
      title: "Digital Art in the Age of AI",
      excerpt: "How artificial intelligence is influencing digital art creation and what it means for artists in the contemporary landscape.",
      date: "2024-03-05",
      category: "Technology",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Creating Custom Tools for TouchDesigner",
      excerpt: "Learn how to develop and implement custom tools in TouchDesigner to enhance your real-time visual effects workflow.",
      date: "2024-02-28",
      category: "Development",
      readTime: "20 min read"
    }
  ];

  return (
    <div className="py-16 bg-base-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Latest from the Blog</h2>
          
          {/* Category Filter */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['All', 'Tutorial', 'Technical Guide', 'Industry Insights', 'Technology'].map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-white/10 hover:border-purple-500 
                         transition-colors whitespace-nowrap text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {latestPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))}
          </div>

          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border 
                       border-white/10 hover:border-purple-500 transition-colors"
            >
              View All Posts
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogPosts; 