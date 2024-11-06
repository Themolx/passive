import React from 'react';

function NewsletterSignup() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to get updates about new products and blog posts</p>
        <form className="flex gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg w-full max-w-sm"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterSignup; 