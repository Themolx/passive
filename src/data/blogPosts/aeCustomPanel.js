export const aeCustomPanelPost = {
  slug: 'ae-custom-panel',
  title: "Building a Custom Panel for After Effects with AI",
  date: "March 29, 2024",
  author: "Martin Tomek",
  tags: ["After Effects", "Automation", "VFX", "Workflow", "Discord"],
  content: [
    {
      type: 'intro',
      content: `As a Compositing TD, I wanted to automate repetitive tasks in After Effects. 
        Here's how I combined different tools to create a powerful automation solution. Each tool
        played a crucial role in making this project successful.`
    },
    {
      type: 'section',
      title: "🤖 Claude: The AI Assistant",
      content: `My journey started with Claude AI. As someone who isn't a professional programmer, 
        I discovered that Claude could:
        • Break down complex problems into manageable steps
        • Explain After Effects' scripting API in simple terms
        • Suggest best practices and optimizations
        • Help debug issues when I got stuck
        
        The key was asking specific questions and iteratively improving the code. Claude became
        like a patient mentor, helping me understand not just what to code, but why certain
        approaches work better than others.`
    },
    {
      type: 'section',
      title: "💻 Cursor IDE: AI-Powered Development",
      content: `Cursor IDE transformed how I write code:
        • Real-time AI suggestions while typing
        • Intelligent code completion
        • Built-in Claude integration
        • Quick documentation lookup
        
        The combination of Cursor and Claude was perfect for learning - I could experiment
        with code while getting immediate feedback and suggestions.`
    },
    {
      type: 'section',
      title: "⚛️ React App: Building the Interface",
      content: `Creating the panel interface with React was surprisingly straightforward:
        • Used EEAct (React framework for After Effects)
        • Created reusable components for common tasks
        • Implemented a clean, modern design
        • Added smooth animations and transitions
        
        React's component-based approach made it easy to organize features and maintain
        the code as the project grew.`
    },
    {
      type: 'section',
      title: "📚 GitHub: Version Control & Sharing",
      content: `GitHub became essential for:
        • Tracking all code changes
        • Creating backups
        • Sharing with other artists
        • Managing different versions
        
        As a VFX artist, I never thought I'd use GitHub, but it's now an integral part
        of my workflow. It's not just for professional developers!`
    },
    {
      type: 'section',
      title: "🤝 Discord Integration: Team Communication",
      content: `The Discord bot integration streamlined our workflow:
        • Automatic notifications for new exports
        • Status updates for long renders
        • Team announcements
        • Quick feedback sharing
        
        Using Discord's webhook API with React made it simple to send updates
        directly from the After Effects panel.`
    },
    {
      type: 'section',
      title: "🎨 Framer Motion: Bringing the UI to Life",
      content: `Animation played a crucial role in making the panel feel professional and 
        intuitive. Framer Motion helped me create smooth transitions and interactions:
        • Fluid drag-and-drop for node arrangement
        • Smooth transitions between states
        • Interactive feedback for user actions
        • Polished micro-animations
        
        Here are some examples of what's possible with Framer Motion:`,
    },
    {
      type: 'demo',
      title: "Interactive Demos",
      content: {
        demos: [
          {
            type: "dragDemo",
            title: "Drag Interactions",
            description: `Demonstrates different types of drag behaviors:
              • Basic dragging with constraints
              • Elastic drag with feedback
              • Axis-locked movement`
          },
          {
            type: "example",
            title: "Animation Playground",
            description: `Showcases various animation possibilities:
              • Interactive cards
              • Morphing shapes
              • Particle effects
              • Smooth transitions`
          }
        ]
      }
    },
    {
      type: 'section',
      title: "🎯 Why Animations Matter",
      content: `Adding thoughtful animations isn't just about aesthetics:
        • Provides immediate feedback for user actions
        • Makes the interface feel more responsive
        • Guides users through complex interactions
        • Creates a more engaging experience
        
        The key is finding the right balance - animations should enhance the experience,
        not distract from it.`
    },
    {
      type: 'demo',
      title: "Interactive Panel Demo",
      content: {
        demos: [
          {
            type: "aePanel",
            title: "After Effects Panel Preview",
            description: `Experience the panel interface:
              • Try the render queue system
              • Explore the logo library
              • See the animations in action
              • Test the week number tracking`
          }
        ]
      }
    },
    {
      type: 'demo',
      title: "Asset Panel Demo",
      content: {
        demos: [
          {
            type: "assetPanel",
            title: "After Effects Asset Panel",
            description: `Experience the asset management interface:
              • Browse effect packs
              • Preview animations
              • View detailed information
              • Test the import workflow`
          }
        ]
      }
    },
    {
      type: 'section',
      title: "🌐 Web Preview: React's Versatility",
      content: `One of the most powerful aspects of building the panel in React is that we can 
        preview and test it directly in a web browser. Since both the After Effects panel and 
        this blog are built with React, we can:
        • Display the exact same components in both environments
        • Test functionality without launching After Effects
        • Share demos with stakeholders easily
        • Iterate on designs quickly
        
        The demos above aren't just mockups - they're running the actual panel code, 
        just without the After Effects-specific functionality. This demonstrates React's 
        flexibility and the power of component-based architecture.`
    },
    {
      type: 'conclusion',
      content: {
        summary: `By combining these tools - Claude AI, Cursor IDE, React, GitHub, and Discord - 
          I created something more powerful than I initially imagined. What started as a simple
          automation project became a full-featured production tool that our whole team uses daily.
          
          The ability to preview and test the panel in a web browser made development significantly 
          faster and more collaborative. It's a perfect example of how modern web technologies 
          can enhance traditional desktop software.`,
        callToAction: {
          text: "Want to try it yourself?",
          links: [
            {
              text: "View Source on GitHub",
              url: "https://github.com/Themolx/AeCustomPanel"
            }
          ]
        },
        inspiration: `Remember: Modern tools make development accessible to everyone. You don't 
          need to be a professional programmer to create useful tools! The same React code can 
          power both web and desktop applications, opening up endless possibilities. 🚀`
      }
    }
  ]
};