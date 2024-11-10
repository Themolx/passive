import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPreview from '../VideoPreview';
import './AssetPanelDemo.css';

const AssetPanelDemo = () => {
  const [selectedPack, setSelectedPack] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);

  const assetPacks = [
    {
      id: 'glitch-effects',
      title: 'Glitch Effects',
      description: 'Professional glitch effects for After Effects',
      price: '$49',
      assets: [
        { 
          id: 'digital-glitch',
          name: 'Digital Glitch',
          preview: '/demos/digital_glitch.mp4',
          size: '2.4MB',
          description: 'Modern digital glitch effect with customizable parameters',
          features: ['4K Resolution', 'Easy to customize', 'Real-time preview']
        },
        { 
          id: 'data-moshing',
          name: 'Data Moshing',
          preview: '/demos/data_mosh.mp4',
          size: '3.1MB',
          description: 'Authentic data moshing effect with controls',
          features: ['Multiple styles', 'Color controls', 'Adjustable intensity']
        }
      ]
    },
    {
      id: 'transitions',
      title: 'Transitions Pack',
      description: 'Seamless transitions for your videos',
      price: '$39',
      assets: [
        {
          id: 'smooth-slide',
          name: 'Smooth Slide',
          preview: '/demos/slide.mp4',
          size: '1.8MB',
          description: 'Clean sliding transitions with customizable direction',
          features: ['8 directions', 'Adjustable speed', 'Blur control']
        }
      ]
    }
  ];

  return (
    <div className="app-container">
      <div className="panel-header">
        <h1 className="panel-title">
          {selectedPack ? selectedPack.title : "Digital Assets"}
        </h1>
      </div>

      <AnimatePresence mode="wait">
        {!selectedPack ? (
          <motion.div 
            className="packs-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {assetPacks.map((pack) => (
              <motion.div
                key={pack.id}
                className="pack-card"
                onClick={() => setSelectedPack(pack)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h2>{pack.title}</h2>
                <p>{pack.description}</p>
                <span className="price">{pack.price}</span>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="assets-list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <motion.button 
              className="back-button"
              onClick={() => {
                setSelectedPack(null);
                setSelectedAsset(null);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ← Back
            </motion.button>
            
            {selectedPack.assets.map((asset) => (
              <div key={asset.id}>
                <motion.div 
                  className={`asset-row ${selectedAsset?.id === asset.id ? 'selected' : ''}`}
                  onClick={() => {
                    if (selectedAsset?.id === asset.id) {
                      setSelectedAsset(null);
                      setIsPreviewPlaying(false);
                    } else {
                      setSelectedAsset(asset);
                      setIsPreviewPlaying(true);
                    }
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="asset-name">{asset.name}</span>
                  <span className="asset-size">{asset.size}</span>
                </motion.div>

                <AnimatePresence>
                  {selectedAsset?.id === asset.id && (
                    <motion.div 
                      className="asset-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <VideoPreview 
                        src={asset.preview}
                        isPlaying={isPreviewPlaying}
                        onPlayPause={() => setIsPreviewPlaying(!isPreviewPlaying)}
                      />
                      
                      <div className="asset-info">
                        <p>{asset.description}</p>
                        <div className="features-list">
                          {asset.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                              {feature}
                            </div>
                          ))}
                        </div>
                        <motion.button 
                          className="import-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            alert('Import functionality disabled in demo');
                          }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Import to After Effects
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssetPanelDemo;
