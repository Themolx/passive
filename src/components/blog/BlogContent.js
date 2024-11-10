import React from 'react';
import { motion } from 'framer-motion';
import { BlobDemo } from '../demos/BlobDemo';
import { DragDemo } from '../demos/DragDemo';
import { Example } from '../demos/Example';
import AePanelDemo from '../demos/AePanelDemo';
import AssetPanelDemo from '../demos/AssetPanelDemo';

function BlogContent({ content }) {
  if (!content) return null;

  switch (content.type) {
    case 'intro':
      return (
        <div className="text-xl text-gray-300 leading-relaxed mb-8">
          {content.content}
        </div>
      );

    case 'section':
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
          {typeof content.content === 'string' ? (
            <div className="text-gray-300 whitespace-pre-wrap">
              {content.content}
            </div>
          ) : content.content.stages ? (
            <div className="space-y-8">
              {content.content.stages.map((stage, index) => (
                <div key={index} className="border-l-2 border-purple-600 pl-4">
                  <div className="text-purple-400 text-sm">{stage.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                  <div className="text-gray-300 whitespace-pre-wrap">
                    {stage.description}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {content.code && (
            <div className="mt-4 bg-gray-800 rounded-lg p-4">
              <pre className="text-gray-300 whitespace-pre-wrap">{content.code}</pre>
            </div>
          )}
        </div>
      );

    case 'conclusion':
      return (
        <div className="my-16 space-y-16">
          {/* Main sections grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-10`} />
                <div className="relative p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{section.icon}</span>
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${section.color}">
                      {section.title}
                    </h3>
                  </div>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r ${section.color}" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300">{section.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Outro section */}
          <div className="text-center space-y-8">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {content.content.outro.text}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {content.content.outro.links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#111111] text-white rounded-full font-medium 
                           hover:bg-[#1a1a1a] transition-all transform hover:scale-105
                           border border-purple-500/20 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-600/20 opacity-0 
                                group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-2">
                    <i className={`fab fa-${link.icon}`} />
                    {link.text}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Inspiration quote */}
          <div className="text-center">
            <p className="text-lg text-gray-400 italic max-w-2xl mx-auto">
              {content.content.inspiration}
            </p>
          </div>
        </div>
      );

    case 'demo':
      return (
        <div className="my-12 space-y-8">
          {content.content.demos.map((demo, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {demo.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {demo.description}
              </p>
              <div className="bg-black/20 rounded-xl overflow-hidden">
                {demo.type === "aePanel" && <AePanelDemo />}
                {demo.type === "dragDemo" && <DragDemo />}
                {demo.type === "example" && <Example />}
                {demo.type === "assetPanel" && <AssetPanelDemo />}
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export default BlogContent;