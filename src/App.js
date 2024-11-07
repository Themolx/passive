import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import VideoHero from './components/home/VideoHero';
import FeaturedProducts from './components/home/FeaturedProducts';
import Cart from './components/shop/Cart';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/Account';
import Blog from './pages/Blog';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import FeaturedWorks from './components/home/FeaturedWorks';
import LatestBlogPosts from './components/home/LatestBlogPosts';
import CallToAction from './components/home/CallToAction';
import HeroSection from './components/home/HeroSection';
import GlitchPackV2 from './pages/products/GlitchPackV2';
import AdvancedCompositing from './pages/products/AdvancedCompositing';
import GlitchArtFundamentals from './pages/products/GlitchArtFundamentals';
import ResolumeEffectsPack from './pages/products/ResolumeEffectsPack';
import AnalogGrainPack from './pages/products/AnalogGrainPack';
import TransitionPack from './pages/products/TransitionPack';
import ScrollToTop from './components/common/ScrollToTop';

// Separate Home component
const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedWorks />
      <FeaturedProducts />
      <LatestBlogPosts />
      <CallToAction />
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0A0A0A]">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productId" element={<ProductDetail />} />
            <Route path="/account" element={<Account />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop/products/glitch-fx-v2" element={<GlitchPackV2 />} />
            <Route path="/shop/tutorials/advanced-compositing" element={<AdvancedCompositing />} />
            <Route path="/shop/tutorials/glitch-art-fundamentals" element={<GlitchArtFundamentals />} />
            <Route path="/shop/products/resolume-fx-pack" element={<ResolumeEffectsPack />} />
            <Route path="/shop/products/analog-grain-pack" element={<AnalogGrainPack />} />
            <Route path="/shop/products/transition-pack" element={<TransitionPack />} />
          </Routes>
        </AnimatePresence>
        <Cart />
      </div>
    </Router>
  );
}

export default App;
