import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  const expertise = [
    { name: "Nuke", type: "Compositing" },
    { name: "After Effects", type: "Motion Design" },
    { name: "TouchDesigner", type: "Real-time" },
    { name: "DaVinci Resolve", type: "Color & Edit" },
    { name: "Custom Tools", type: "Development" },
    { name: "Glitch Effects", type: "Creative" }
  ];

  const featuredProjects = [
    {
      title: "Cyberpunk Dreams",
      type: "VFX Composition",
      link: "/portfolio/cyberpunk"
    },
    {
      title: "Digital Decay",
      type: "Glitch Art",
      link: "/portfolio/decay"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-24"
    >
      {/* Bio Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/20 shrink-0">
            <img
              src="/profile.jpg"
              alt="Martin Tomek"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Martin Tomek is a Prague-based VFX artist and technical director specializing in glitch art, 
                visual effects, and real-time visuals. With a background in advanced compositing and pipeline 
                development, Martin blends technical precision with artistic experimentation.
              </p>
              <p className="text-lg leading-relaxed">
                His glitch art collections leverage analog techniques, digital tools, and procedural designs, 
                bringing a distinct, raw aesthetic to each piece. Martin's work goes beyond visual boundaries, 
                using creative coding and computer vision to merge physical and digital realms.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expertise Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {expertise.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-xl hover:bg-white/[0.07] transition-colors"
            >
              <h3 className="font-bold mb-2">{skill.name}</h3>
              <span className="text-sm text-purple-400">{skill.type}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Link 
              key={project.title}
              to={project.link}
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-400">{project.type}</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="bg-white/5 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 mb-6">
            Interested in collaboration or have a project in mind? Feel free to reach out.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-black rounded-full font-medium 
                       hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://github.com/Themolx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/10 rounded-full 
                       hover:bg-white/5 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Add this new section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center bg-gradient-to-r from-purple-900/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/20"
      >
        <h2 className="text-2xl font-bold mb-4">Visit My Personal Website</h2>
        <p className="text-gray-300 mb-6">
          Discover more of my work and latest projects on my personal website
        </p>
        <a
          href="https://themolx.github.io/WEB/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-full font-medium 
                   hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
        >
          Visit Website
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}

export default About;