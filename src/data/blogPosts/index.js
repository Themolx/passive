import { nukeGrabToolPost } from './nukeGrabTool.js';
import { pfxScriptsPost } from './pfxScripts.js';

// Export the collection of all blog posts
export const blogPosts = {
  'nuke-grab-tool': nukeGrabToolPost,
  'pfx-scripts': pfxScriptsPost
};

// Export individual posts for direct access
export { nukeGrabToolPost };
export { pfxScriptsPost };

export const getRecentPosts = () => {
  return Object.entries(blogPosts)
    .sort((a, b) => new Date(b[1].date) - new Date(a[1].date))
    .slice(0, 5)
    .map(([slug, post]) => ({
      slug,
      ...post,
    }));
}; 