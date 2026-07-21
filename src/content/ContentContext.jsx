import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultContent } from './defaults';

// ponytail: localStorage IS the backend. Static SPA, no server needed.
// Every module reads content here; admin edits slices via setSection. Namespaced by
// top-level key so modules never clash — each section owns its slice.
const KEY = 'stfi-content-v1';

const ContentContext = createContext(null);

function load() {
  try {
    const saved = localStorage.getItem(KEY);
    if (!saved) return defaultContent;
    // Merge so new default keys appear even for older saved blobs.
    return { ...defaultContent, ...JSON.parse(saved) };
  } catch {
    return defaultContent;
  }
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(load);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(content));
  }, [content]);

  const api = {
    content,
    // Replace one top-level section (hero, nav, notices, ...).
    setSection: (section, value) =>
      setContent((c) => ({ ...c, [section]: value })),
    reset: () => setContent(defaultContent),
    exportJSON: () => JSON.stringify(content, null, 2),
    importJSON: (str) => {
      const parsed = JSON.parse(str); // throws on bad JSON — caller handles
      setContent({ ...defaultContent, ...parsed });
    },
  };

  return <ContentContext.Provider value={api}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within ContentProvider');
  return ctx;
}
