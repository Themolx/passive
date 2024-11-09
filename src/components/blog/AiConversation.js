import { motion } from 'framer-motion';

export function AiConversation({ conversation }) {
  if (!conversation) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 my-6"
    >
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center">
          MT
        </div>
        <div className="bg-white/5 rounded-lg p-4 flex-grow">
          <p>{conversation.me}</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center">
          AI
        </div>
        <div className="bg-white/5 rounded-lg p-4 flex-grow">
          <p>{conversation.claude}</p>
        </div>
      </div>
      
      {conversation.result && (
        <div className="ml-14 text-purple-400 italic">
          {conversation.result}
        </div>
      )}
    </motion.div>
  );
} 