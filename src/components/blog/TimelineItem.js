function TimelineItem({ date, title, description }) {
  return (
    <div className="relative pl-8 pb-8 border-l border-purple-500/30 last:border-0">
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-2 rounded-full bg-purple-500" />
      <span className="text-sm text-purple-400">{date}</span>
      <h3 className="text-lg font-semibold mt-1 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
} 