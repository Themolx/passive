export const blogPosts = {
  'nuke-grab-tool': {
    title: "🚀 How I Built the Nuke Grab Tool (Without Being a Coding Expert)",
    date: "November 9, 2024",
    author: "Martin Tomek",
    tags: ["Nuke", "Python", "Workflow", "Technical Guide"],
    content: [
      {
        type: 'personal-intro',
        content: "Have you ever used Blender's node editor and thought 'Why can't Nuke work like this?' That's exactly what happened to me. I loved how Blender lets you grab nodes without precisely hovering over them - just press a key, move them, and press again to release. It saves so many clicks! After searching online and asking around with no success, I decided to create it myself, with a little help from Claude AI."
      },
      {
        type: 'journey-start',
        content: {
          title: "Starting Small with Claude 🤖",
          text: "I discovered that Claude is surprisingly good at understanding Nuke's Python API. I started creating small utility scripts with it, each success building my confidence. The more scripts I created, the more I realized I could tackle bigger projects."
        }
      },
      {
        type: 'dialogue-section',
        content: {
          title: "The Night Everything Clicked 💡",
          conversation: {
            me: "Hey Claude, I really love how Blender's grab tool works. Instead of having to hover over the node, I just press a button and it grabs the nodes - I can offset them without caring about the cursor position. When I press the button again, it releases. Could we create something like this for Nuke?",
            claude: "That's a great idea! We can capture key events and track node positions. Let me help you break this down into manageable steps...",
            result: "20 minutes later, we had a working prototype. It wasn't perfect, but seeing those nodes move freely was magical! 🎉"
          }
        }
      },
      {
        type: 'development-timeline',
        content: {
          title: "The Evolution 📈",
          stages: [
            {
              date: "October 2, 2024",
              title: "First Commit: The Birth",
              description: "Created the basic functionality - nodes finally following orders without precise cursor placement!"
            },
            {
              date: "October 3, 2024",
              title: "Version 3.2",
              description: "Fixed crucial scaling issues - now it works smoothly at any zoom level"
            },
            {
              date: "October 6, 2024",
              title: "Version 3.8",
              description: "Added Ctrl+Z support and middle-click freeze functionality - making it production-ready"
            }
          ]
        }
      },
      {
        type: 'github-journey',
        content: {
          title: "Discovering GitHub: A Game-Changer 📚",
          text: "As my collection of scripts grew, I needed a better way to manage versions and keep everything organized. That's when I started using GitHub. It's not just for professional developers - it's perfect for artists who code too! Being able to track changes, manage versions, and access my tools from anywhere has been revolutionary for my workflow.",
          sections: [
            {
              title: "Why GitHub?",
              points: [
                "Track all changes to your scripts",
                "Access your tools from any machine",
                "Never lose your work",
                "Share with the community",
                "Collaborate with other artists"
              ]
            },
            {
              type: 'resource-highlight',
              title: "Learning Resource Spotlight 🌟",
              content: {
                name: "GitHub for Compositors by Ben McEwan",
                description: "If you're new to GitHub, I highly recommend Ben McEwan's course. It's specifically designed for compositors and VFX artists, making it perfect for our workflow. The course breaks down everything you need to know about version control in a way that makes sense for artists.",
                link: "https://www.benmcewan.com/github_for_compositors.html",
                features: [
                  "17 focused video tutorials",
                  "68-page e-book included",
                  "Perfect for VFX artists",
                  "Learn at your own pace"
                ]
              }
            }
          ]
        }
      },
      {
        type: 'conclusion',
        content: {
          title: "From Idea to Reality: Just Take the First Step 🚀",
          sections: [
            {
              text: "Looking back, it's amazing how a simple frustration with node movement turned into a fully-functional tool that I use every day. What started with 'I wish Nuke had this feature' became 'I made this feature for Nuke' - and it happened faster than I expected.",
              type: "reflection"
            },
            {
              text: "The key takeaways from this journey:",
              points: [
                "You don't need to be a coding expert to create useful tools",
                "AI assistants like Claude can help bridge the knowledge gap",
                "Start small, test often, and iterate",
                "Use GitHub to manage your scripts - it's a game-changer",
                "Share your tools with the community - we all benefit"
              ],
              type: "lessons"
            },
            {
              text: "Ready to try it yourself? You can find the Nuke Grab Tool on:",
              links: [
                {
                  text: "Download from Nukepedia",
                  url: "https://www.nukepedia.com/python/nodegraph/nuke-grab-tool",
                  primary: true
                },
                {
                  text: "View on GitHub",
                  url: "https://github.com/Themolx/NukeScripts",
                  primary: false
                }
              ],
              type: "cta"
            },
            {
              text: "Remember: Every tool we use today started with someone thinking 'I wish this existed.' Sometimes that someone needs to be you. So what tool do you wish existed? Maybe it's time to start building! 🛠️",
              type: "inspiration"
            }
          ]
        }
      }
    ]
  }
}; 