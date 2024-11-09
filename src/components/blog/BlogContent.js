import React from 'react';
import { motion } from 'framer-motion';
import { AiConversation } from './AiConversation';
import { BlobDemo } from '../demos/BlobDemo';
import { DragDemo } from '../demos/DragDemo';
import { Example } from '../demos/Example';

function BlogContent({ content }) {
  switch (content.type) {
    case 'intro':
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-300 leading-relaxed mb-8"
        >
          {content.content}
        </motion.div>
      );

    case 'section':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{content.title}</h2>
          <div className="grid gap-6">
            {content.content.map((tool, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-purple-400">{tool.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </motion.div>
      );

    case 'personal-intro':
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-300 leading-relaxed mb-8"
        >
          {content.content}
        </motion.div>
      );

    case 'journey-start':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4">{content.content.title}</h2>
          <p className="text-gray-300">{content.content.text}</p>
        </motion.div>
      );

    case 'dialogue-section':
      return (
        <div>
          <h2 className="text-2xl font-bold mb-6">{content.content.title}</h2>
          <AiConversation conversation={content.content.conversation} />
        </div>
      );

    case 'development-timeline':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{content.content.title}</h2>
          <div className="space-y-4">
            {content.content.stages.map((stage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-4"
              >
                <div className="text-sm text-gray-400">{stage.date}</div>
                <div className="font-semibold">{stage.title}</div>
                <p className="text-gray-300">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case 'github-journey':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{content.content.title}</h2>
          <p className="text-gray-300 mb-8">{content.content.text}</p>
          
          {content.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              
              {section.points && (
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              
              {section.type === 'resource-highlight' && (
                <div className="bg-purple-900/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3">{section.content.name}</h4>
                  <p className="text-gray-300 mb-4">{section.content.description}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                    {section.content.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <a 
                    href={section.content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      );

    case 'encouragement':
    case 'try-it':
    case 'closing-thoughts':
      return (
        <div>
          {content.content.title && (
            <h2 className="text-2xl font-bold mb-4">{content.content.title}</h2>
          )}
          {content.content.message && (
            <p className="text-gray-300 mb-4">{content.content.message}</p>
          )}
          {content.content.tips && (
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              {content.content.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          )}
          {content.content.links && (
            <div className="flex gap-4 mt-6">
              {content.content.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
          {typeof content.content === 'string' && (
            <p className="text-gray-300">{content.content}</p>
          )}
        </div>
      );

    case 'conclusion':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 border-t border-white/10 pt-12"
        >
          <h2 className="text-2xl font-bold mb-8">{content.content.title}</h2>
          
          {content.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              {section.type === "reflection" && (
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {section.text}
                </p>
              )}
              
              {section.type === "lessons" && (
                <>
                  <p className="text-gray-300 mb-4">{section.text}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-3 mb-6">
                    {section.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {section.type === "cta" && (
                <div className="bg-white/5 rounded-lg p-6 mb-8">
                  <p className="text-gray-300 mb-4">{section.text}</p>
                  <div className="flex flex-wrap gap-4">
                    {section.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-lg transition-colors ${
                          link.primary 
                            ? 'bg-purple-600 hover:bg-purple-700' 
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              
              {section.type === "inspiration" && (
                <p className="text-xl text-purple-400 font-medium italic">
                  {section.text}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      );

    case 'interactive-demo':
      const DemoComponent = {
        BlobDemo,
        DragDemo,
        Example
      }[content.content.demo];

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{content.content.title}</h2>
          <DemoComponent />
        </motion.div>
      );

    case 'technical-breakdown':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">{content.title}</h2>
          <p className="text-gray-300 mb-6">{content.content.text}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {content.content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-lg"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );

    case 'framer-examples':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">{content.content.title}</h2>
          <p className="text-gray-300 mb-8">{content.content.intro}</p>
          
          <div className="space-y-12">
            {content.content.examples.map((example, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                <p className="text-gray-300 mb-4">{example.description}</p>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm font-mono text-purple-400">{example.code}</code>
                </pre>
                <p className="text-sm text-purple-400">💡 Tip: {example.tips}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Best Practices</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {content.content.bestPractices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      );

    case 'advanced-animations':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">{content.content.title}</h2>
          <p className="text-gray-300 mb-8">{content.content.description}</p>
          
          <div className="space-y-8">
            {content.content.patterns.map((pattern, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{pattern.title}</h3>
                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm font-mono text-purple-400">{pattern.code}</code>
                </pre>
                <p className="text-gray-300">{pattern.explanation}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Pro Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {content.content.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
}

export default BlogContent; 