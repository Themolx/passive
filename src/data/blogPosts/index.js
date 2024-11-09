import { nukeGrabToolPost } from './nukeGrabTool.js';
import { pfxScriptsPost } from './pfxScripts.js';
import { aeCustomPanelPost } from './aeCustomPanel.js';

// Export the collection of all blog posts
export const blogPosts = {
  'nuke-grab-tool': nukeGrabToolPost,
  'pfx-scripts': pfxScriptsPost,
  'ae-custom-panel': aeCustomPanelPost
};

// Export individual posts for direct access
export { nukeGrabToolPost, pfxScriptsPost, aeCustomPanelPost };

// Helper function to get recent posts
export const getRecentPosts = () => {
  return Object.entries(blogPosts)
    .sort((a, b) => new Date(b[1].date) - new Date(a[1].date))
    .slice(0, 5)
    .map(([slug, post]) => ({
      slug,
      ...post,
    }));
}; 