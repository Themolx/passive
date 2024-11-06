import React from 'react';

function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://avatars.githubusercontent.com/u/183303841?v=4"
            alt="Martin Tomek"
            className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-purple-500/20"
          />
          <h1 className="text-4xl font-bold mb-4">Martin Tomek</h1>
          <p className="text-xl text-gray-400">VFX Artist & Motion Designer</p>
        </div>

        {/* Rest of the content */}
        <div className="space-y-6 text-gray-300">
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

          <div className="border-l-4 border-purple-600 pl-4 py-2">
            <h3 className="font-bold text-lg mb-2">Technical Expertise</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li>• Nuke</li>
              <li>• After Effects</li>
              <li>• TouchDesigner</li>
              <li>• Custom Tools</li>
              <li>• Glitch Effects</li>
              <li>• 3D Animation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection; 