// Utility function to generate consistent placeholder images
export const getPlaceholderImage = (width, height, text = 'Preview') => {
  return `https://placehold.co/${width}x${height}/1a1a1a/ffffff?text=${text}`;
};

// Video placeholder (static image until we have real videos)
export const placeholderVideo = "https://placehold.co/1920x1080/1a1a1a/ffffff?text=Video+Preview";

// Product thumbnails with different variations
export const getProductThumb = (index) => {
  const themes = ['Cyberpunk', 'Glitch', 'VFX', 'Motion'];
  return `https://placehold.co/600x400/1a1a1a/ffffff?text=${themes[index % themes.length]}`;
}; 