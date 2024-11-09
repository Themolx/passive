import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { nukeGrabToolPost } from './data/blogPosts/nukeGrabTool';
import { pfxScriptsPost } from './data/blogPosts/pfxScripts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Export the collection of all blog posts
export const blogPosts = {
  'nuke-grab-tool': nukeGrabToolPost,
  'pfx-scripts': pfxScriptsPost
};

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
