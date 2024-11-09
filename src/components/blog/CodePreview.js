function CodePreview({ code, language }) {
  return (
    <div className="relative group">
      <pre className="bg-[#1a1a1a] rounded-lg p-4 overflow-x-auto">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button 
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 
                   transition-opacity bg-purple-600 hover:bg-purple-700 rounded px-3 py-1"
        onClick={() => navigator.clipboard.writeText(code)}
      >
        Copy
      </button>
    </div>
  );
}

export default CodePreview; 