import { getRecentPosts } from '../../data/blogPosts';

function LatestBlogPosts() {
  const latestPosts = getRecentPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {latestPosts.map(post => (
        <div key={post.slug} className="bg-[#111111] rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{post.date}</span>
            <span>{post.tags.join(', ')}</span>
            <span>{post.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestBlogPosts; 