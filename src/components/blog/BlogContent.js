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
        <div className="mt-12 border-t border-white/10 pt-12">
          {content.content.summary && (
            <div className="text-gray-300 mb-8">
              {content.content.summary}
            </div>
          )}
          
          {content.content.callToAction && (
            <div className="bg-white/5 rounded-lg p-6">
              {content.content.callToAction.text && (
                <p className="text-xl mb-4">{content.content.callToAction.text}</p>
              )}
              
              {content.content.callToAction.links && (
                <div className="flex gap-4">
                  {content.content.callToAction.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
              
              {content.content.inspiration && (
                <p className="text-gray-400 mt-8 italic">
                  {content.content.inspiration}
                </p>
              )}
            </div>
          )}
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