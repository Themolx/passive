export const aeCustomPanelPost = {
    slug: 'ae-custom-panel',
    title: "Hello World",
    date: "March 29, 2024",
    author: "Martin Tomek",
    tags: ["Test"],
    content: [
      {
        type: 'personal-intro',
        content: "Hello World! Welcome to my first blog post about AI and technology."
      },
      {
        type: 'journey-start',
        content: {
          title: "Framer Motion Drag Animations 🎯",
          text: "Let's explore how to create smooth drag interactions with Framer Motion. Drag functionality is perfect for creating interactive user interfaces, from simple cards to complex drag-and-drop systems."
        }
      },
      {
        type: 'development-timeline',
        content: {
          title: "Drag Animation Examples 🖱️",
          stages: [
            {
              date: "Basic Drag",
              title: "Simple Draggable Component",
              description: `
const DraggableCard = () => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50
      }}
      className="card"
    >
      Drag me!
    </motion.div>
  );
};`
            },
            {
              date: "Advanced",
              title: "Drag with Elastic Bounds",
              description: `
const ElasticDrag = () => {
  return (
    <motion.div
      drag
      dragElastic={0.2}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 300,
        bottom: 300
      }}
      whileDrag={{
        scale: 1.1,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.3)"
      }}
    >
      Elastic Drag
    </motion.div>
  );
};`
            },
            {
              date: "Expert",
              title: "Drag with Direction Lock",
              description: `
const AxisLockDrag = () => {
  return (
    <motion.div
      drag="x"  // Only drag horizontally
      dragConstraints={{
        left: 0,
        right: 500
      }}
      whileDrag={{ cursor: "grabbing" }}
      whileHover={{ cursor: "grab" }}
    >
      Horizontal Only
    </motion.div>
  );
};`
            }
          ]
        }
      },
      {
        type: 'journey-start',
        content: {
          title: "Drag Animation Tips 💡",
          text: `
• Use dragConstraints to limit movement area
• Add dragElastic for natural-feeling boundaries
• Implement whileDrag for visual feedback
• Consider dragMomentum for physics-based movement
• Use dragPropagation when nesting draggable elements`
        }
      },
      {
        type: 'interactive-demo',
        content: {
          title: "Try it yourself! 🎮",
          demo: "BlobDemo"
        }
      },
      {
        type: 'interactive-demo',
        content: {
          title: "Drag Demo Playground 🎯",
          demo: "DragDemo"
        }
      },
      {
        type: 'journey-start',
        content: {
          title: "Animation Tips 🎨",
          text: `
• Use border-radius arrays for organic blob shapes
• Combine whileHover and whileTap for better interactivity
• Add gradients and mix-blend-mode for rich visuals
• Use state to control complex animations
• Consider adding sound effects for extra feedback`
        }
      },
      {
        type: 'interactive-demo',
        content: {
          title: "Layout Animation Example 🎭",
          demo: "Example"
        }
      }
    ]
};
  