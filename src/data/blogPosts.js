import { nukeGrabToolPost } from './blogPosts/nukeGrabTool';
import { pfxScriptsPost } from './blogPosts/pfxScripts';

export const blogPosts = {
  'nuke-grab-tool': nukeGrabToolPost,
  'pfx-scripts': pfxScriptsPost
};

export const getRecentPosts = () => {
  return Object.entries(blogPosts)
    .sort((a, b) => new Date(b[1].date) - new Date(a[1].date))
    .slice(0, 5)
    .map(([slug, post]) => ({
      slug,
      ...post,
    }));
}; 