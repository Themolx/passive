export const pfxScriptsPost = {
  slug: 'pfx-scripts',
  title: "🛠 PFX Scripts: Building a Nuke Artist's Toolkit with AI",
  date: "March 28, 2024",
  author: "Martin Tomek",
  tags: ["Nuke", "Python", "Automation", "AI"],
  content: [
    {
      type: 'intro',
      content: "Every VFX artist has their own way of working in Nuke. Over time, I found myself repeating certain tasks - organizing light passes, setting up denoise compositions, managing render loads. Instead of accepting these repetitive tasks, I decided to automate them. With the help of AI, I created a collection of tools that now form the backbone of my daily workflow.",
      animation: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
      }
    },
    {
      type: 'interactive-demo',
      title: "See It In Action",
      content: {
        video: "/demos/pfx-tools-demo.mp4",
        fallbackImage: "/demos/pfx-tools-preview.jpg",
        caption: "Watch how PFX Scripts streamlines Nuke workflows"
      }
    },
    {
      type: 'section',
      title: "The Tools",
      content: [
        {
          title: "Light Pass Manager",
          description: "AI helped me create a sophisticated system for organizing light passes. It suggested using Nuke's shuffle nodes in a way I hadn't considered before.",
          code: "# Light Pass Manager\ndef setupLightPasses():\n    # AI-suggested implementation\n    # Automatically detects light pass naming patterns\n    # Creates organized shuffle network\n    passes = detectLightPasses()\n    createShuffleNetwork(passes)"
        },
        {
          title: "Smart Denoise Setup",
          description: "Using AI, I developed a tool that analyzes the noise patterns in plates and suggests optimal denoise settings.",
          code: "# Smart Denoise\ndef configureDenoiser():\n    # AI-powered noise analysis\n    # Adaptive settings based on plate characteristics\n    noiseProfile = analyzeNoisePattern()\n    setupDenoiseNodes(noiseProfile)"
        },
        {
          title: "Sequence Manager",
          description: "AI helped optimize the loading and management of multiple sequences, suggesting efficient data structures and error handling.",
          code: "# Sequence Manager\ndef manageSequences():\n    # Smart sequence detection\n    # Automated organization\n    sequences = findSequences()\n    organizeByType(sequences)"
        },
        {
          title: "Project Setup Automation",
          description: "An AI-assisted tool that configures project settings based on delivery requirements and best practices.",
          code: "# Project Setup\ndef setupProject():\n    # Intelligent defaults\n    # Format detection\n    format = detectProjectFormat()\n    configureWorkspace(format)"
        }
      ],
      animation: {
        container: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { staggerChildren: 0.2 }
        },
        item: {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          hover: { scale: 1.02, transition: { duration: 0.2 } }
        }
      }
    },
    {
      type: 'technical-breakdown',
      title: "Under the Hood",
      content: {
        text: "These tools leverage several advanced Python concepts and Nuke's internal API. Here's a peek at what makes them tick:",
        features: [
          {
            title: "Event System",
            description: "Custom event handlers monitor user interactions and node changes",
            icon: "🎮"
          },
          {
            title: "Smart Caching",
            description: "Intelligent caching system for faster node operations",
            icon: "⚡"
          },
          {
            title: "Error Prevention",
            description: "Built-in safeguards against common workflow mistakes",
            icon: "🛡️"
          }
        ]
      },
      animation: {
        container: {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delayChildren: 0.3, staggerChildren: 0.1 }
        },
        item: {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 }
        }
      }
    },
    {
      type: 'journey-start',
      content: {
        title: "The AI Collaboration Journey 🤖",
        text: "Working with AI to develop these tools was a revelation. Each script started as a conversation about a workflow problem, and through iterative discussions, we refined the solutions. AI helped me understand Python patterns I wouldn't have discovered on my own, and suggested optimizations that made the tools more robust."
      }
    },
    {
      type: 'conclusion',
      content: {
        title: "Impact on Daily Workflow",
        sections: [
          {
            text: "These tools have transformed how I work in Nuke. What used to take hours of repetitive setup now happens in seconds. The AI collaboration continues to evolve, with each new challenge leading to more sophisticated solutions.",
            type: "reflection"
          },
          {
            text: "Find these tools on GitHub:",
            links: [
              {
                text: "View PFX Scripts on GitHub",
                url: "https://github.com/Themolx/PFX",
                primary: true
              }
            ],
            type: "cta"
          }
        ]
      }
    }
  ]
}; 