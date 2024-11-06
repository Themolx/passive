import React from 'react';

function LatestBlogPosts() {
  const latestPosts = [
    {
      id: 1,
      title: "The Evolution of Digital Art in Modern Cinema",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2024-03-25",
      category: "Industry Insights",
      readTime: "10 min read"
    },
    {
      id: 2,
      title: "Advanced Compositing Techniques for VFX Artists",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2024-03-20",
      category: "Technical Guide",
      readTime: "15 min read"
    },
    {
      id: 3,
      title: "Understanding Color Theory in Digital Environments",
      excerpt: "Nulla facilisi. Maecenas non purus eget libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vehicula, sapien id aliquam iaculis.",
      date: "2024-03-15",
      category: "Tutorial",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "Real-time Rendering: The Future of VFX",
      excerpt: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes.",
      date: "2024-03-10",
      category: "Technology",
      readTime: "12 min read"
    },
    {
      id: 5,
      title: "Creating Custom Shaders for Motion Graphics",
      excerpt: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      date: "2024-03-05",
      category: "Development",
      readTime: "18 min read"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {latestPosts.map(post => (
        <div key={post.id} className="bg-[#111111] rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-400 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.date}</span>
            <span>{post.category}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestBlogPosts; 