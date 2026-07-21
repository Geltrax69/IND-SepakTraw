import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../content/ContentContext';
import { extractXPostData } from '../utils/xEmbed';
import {
  AutoAwesome as Sparkles,
  Verified as CheckCircle2,
  PlayArrow as Play,
  Launch as ExternalLink,
  Delete as Trash2,
  ArrowUpward as ArrowUp,
  ArrowDownward as ArrowDown,
} from '@mui/icons-material';

const SECTIONS = [
  ['meta', 'Site Identity'],
  ['hero', 'Hero'],
  ['featuredEvent', 'Countdown Banner'],
  ['stats', 'Stat Strip'],
  ['highlights', 'News & Moments'],
  ['xPosts', 'X Posts & Social Embeds ⚡'],
  ['nav', 'Navigation'],
  ['categories', 'Category Tiles'],
  ['notices', 'Notices & News'],
  ['rules', 'Playing Rules'],
  ['events', 'Events'],
  ['myas', 'MYAS 28 Disclosures'],
  ['footerColumns', 'Footer Columns'],
  ['contact', 'Contact / RTI'],
];

const pretty = (k) =>
  String(k).replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());

const isLong = (k, v) =>
  typeof v === 'string' &&
  (v.length > 60 || /desc|description|subtitle|note|title/i.test(k));

function blank(sample) {
  if (Array.isArray(sample)) return [];
  if (sample && typeof sample === 'object') {
    return Object.fromEntries(Object.keys(sample).map((k) => [k, blank(sample[k])]));
  }
  if (typeof sample === 'number') return 0;
  if (typeof sample === 'boolean') return false;
  return '';
}

function ValueEditor({ label, value, onChange }) {
  if (Array.isArray(value)) return <ArrayEditor label={label} value={value} onChange={onChange} />;
  if (value && typeof value === 'object')
    return <ObjectEditor label={label} value={value} onChange={onChange} />;

  if (typeof value === 'boolean') {
    return (
      <label style={{ ...S.field, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        <span style={S.label}>{pretty(label)}</span>
      </label>
    );
  }

  const long = isLong(label, value);
  return (
    <label style={S.field}>
      <span style={S.label}>{pretty(label)}</span>
      {long ? (
        <textarea style={S.textarea} rows={3} value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input
          style={S.input}
          type={typeof value === 'number' ? 'number' : 'text'}
          value={value}
          onChange={(e) => onChange(typeof value === 'number' ? Number(e.target.value) : e.target.value)}
        />
      )}
    </label>
  );
}

function ObjectEditor({ value, onChange }) {
  return (
    <div style={S.objectGrid}>
      {Object.entries(value).map(([k, v]) => (
        <ValueEditor key={k} label={k} value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} />
      ))}
    </div>
  );
}

function ArrayEditor({ label, value, onChange }) {
  const move = (i, dir) => {
    const j = i + dir;
    if (j < 0 || j >= value.length) return;
    const next = [...value];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };
  const set = (i, nv) => onChange(value.map((it, idx) => (idx === i ? nv : it)));
  const remove = (i) => onChange(value.filter((_, idx) => idx !== i));
  const add = () => onChange([...value, blank(value[0] ?? '')]);

  return (
    <div>
      {value.map((item, i) => (
        <div key={i} style={S.item}>
          <div style={S.itemBar}>
            <span style={S.itemNum}>#{i + 1}</span>
            <div style={{ display: 'flex', gap: 6 }}>
              <button style={S.miniBtn} onClick={() => move(i, -1)} disabled={i === 0}>↑</button>
              <button style={S.miniBtn} onClick={() => move(i, 1)} disabled={i === value.length - 1}>↓</button>
              <button style={{ ...S.miniBtn, color: '#c0392b' }} onClick={() => remove(i)}>Delete</button>
            </div>
          </div>
          <ValueEditor label={label} value={item} onChange={(nv) => set(i, nv)} />
        </div>
      ))}
      <button style={S.addBtn} onClick={add}>+ Add item</button>
    </div>
  );
}

// Specialized X (Twitter) Post Automatic Extractor Manager
function XPostsManager({ posts = [], onChange, onFlash }) {
  const [urlInput, setUrlInput] = useState('');
  const [customText, setCustomText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExtractAndAdd = async () => {
    if (!urlInput.trim()) return;
    setLoading(true);
    try {
      const extracted = await extractXPostData(urlInput, customText);
      onChange([extracted, ...posts]);
      setUrlInput('');
      setCustomText('');
      onFlash('X Post extracted & added ✓');
    } catch (err) {
      onFlash('Failed to extract X post data');
    } finally {
      setLoading(false);
    }
  };

  const removePost = (id) => {
    onChange(posts.filter((p) => p.id !== id));
    onFlash('Removed post ✓');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Quick Extractor Card */}
      <div style={{ backgroundColor: '#fff', padding: 24, borderRadius: 12, border: '2px solid #1d9bf0', boxShadow: '0 4px 12px rgba(29,155,240,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Sparkles color="#1d9bf0" size={20} />
          <h3 style={{ fontSize: 18, fontWeight: 800, margin: 0, color: '#111' }}>
            Auto-Extract Post Details from X (Twitter)
          </h3>
        </div>

        <p style={{ fontSize: 13, color: '#666', marginBottom: 16, lineHeight: 1.4 }}>
          Paste any X post URL below (e.g. <code>https://x.com/Media_SAI/status/1552525191426609155?s=20</code> or <code>https://x.com/IndiaSportsHub/status/1903824150529265704?s=20</code>).
          The system will automatically extract who uploaded it, post text, `#hashtags`, images, and attached playable video!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="text"
            placeholder="Paste X Post Link here (https://x.com/...)"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            style={{ ...S.input, fontSize: 15, padding: '12px 14px', border: '1px solid #1d9bf0' }}
          />

          <textarea
            placeholder="Optional custom notes / caption override (leave blank to auto-extract)"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            rows={2}
            style={{ ...S.textarea, fontSize: 13 }}
          />

          <button
            onClick={handleExtractAndAdd}
            disabled={loading || !urlInput.trim()}
            style={{
              backgroundColor: '#1d9bf0',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '12px 20px',
              fontSize: 14,
              fontWeight: 700,
              cursor: loading ? 'wait' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {loading ? '⚡ Extracting details from X...' : '⚡ Extract & Publish to Home Page'}
          </button>
        </div>
      </div>

      {/* List of currently embedded X posts */}
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 14, color: '#111' }}>
          Published X Feed Posts ({posts.length})
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {posts.map((post, i) => (
            <div key={post.id || i} style={{ ...S.item, borderLeft: '4px solid #1d9bf0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{post.authorName}</span>
                  <span style={{ color: '#1d9bf0', fontSize: 13, fontFamily: 'monospace' }}>{post.authorHandle}</span>
                  {post.isVideo && (
                    <span style={{ backgroundColor: '#1d9bf0', color: '#fff', fontSize: 10, fontWeight: 800, padding: '2px 6px', borderRadius: 4 }}>
                      VIDEO ATTACHED 🎬
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={post.url} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#1d9bf0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                    View on X <ExternalLink size={12} />
                  </a>
                  <button style={{ ...S.miniBtn, color: '#c0392b' }} onClick={() => removePost(post.id)}>
                    <Trash2 size={13} /> Delete
                  </button>
                </div>
              </div>

              <p style={{ fontSize: 14, color: '#333', lineHeight: 1.5, marginBottom: 10 }}>
                {post.text}
              </p>

              {post.hashtags && post.hashtags.length > 0 && (
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {post.hashtags.map((tag, idx) => (
                    <span key={idx} style={{ fontSize: 11, fontWeight: 700, color: '#1d9bf0', backgroundColor: '#eef7fe', padding: '2px 8px', borderRadius: 4 }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AdminPanel() {
  const { content, setSection, reset, exportJSON, importJSON } = useContent();
  const [active, setActive] = useState('meta');
  const [msg, setMsg] = useState('');
  const fileRef = useRef();

  const flash = (t) => { setMsg(t); setTimeout(() => setMsg(''), 2500); };

  const doExport = () => {
    const blob = new Blob([exportJSON()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'stfi-content.json';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const doImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try { importJSON(r.result); flash('Imported ✓'); }
      catch { flash('Import failed — invalid JSON'); }
    };
    r.readAsText(file);
    e.target.value = '';
  };

  return (
    <div style={S.shell}>
      <aside style={S.sidebar}>
        <div style={S.brand}>STFI <span style={{ opacity: 0.5, fontWeight: 400 }}>Admin</span></div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {SECTIONS.map(([key, title]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{ ...S.navBtn, ...(active === key ? S.navBtnActive : {}) }}
            >
              {title}
            </button>
          ))}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 20 }}>
          <button style={S.toolBtn} onClick={doExport}>⬇ Export JSON</button>
          <button style={S.toolBtn} onClick={() => fileRef.current.click()}>⬆ Import JSON</button>
          <input ref={fileRef} type="file" accept="application/json" hidden onChange={doImport} />
          <button style={{ ...S.toolBtn, color: '#e08a8a' }} onClick={() => { if (confirm('Reset ALL content to defaults?')) { reset(); flash('Reset ✓'); } }}>↺ Reset to defaults</button>
          <Link to="/" style={{ ...S.toolBtn, textAlign: 'center', textDecoration: 'none' }}>← View live site</Link>
        </div>
      </aside>

      <main style={S.main}>
        <header style={S.header}>
          <div>
            <h1 style={S.h1}>{SECTIONS.find(([k]) => k === active)?.[1]}</h1>
            <p style={S.hint}>Changes save automatically to this browser. Use Export to back up / publish.</p>
          </div>
          {msg && <span style={S.toast}>{msg}</span>}
        </header>

        <div style={S.editor}>
          {active === 'xPosts' ? (
            <XPostsManager
              posts={content.xPosts || []}
              onChange={(np) => setSection('xPosts', np)}
              onFlash={flash}
            />
          ) : (
            <ValueEditor label={active} value={content[active]} onChange={(nv) => setSection(active, nv)} />
          )}
        </div>
      </main>
    </div>
  );
}

const MONO = "ui-monospace, 'SF Mono', Menlo, monospace";
const S = {
  shell: { display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" },
  sidebar: { width: 240, background: '#111', color: '#fff', padding: '24px 16px', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' },
  brand: { fontSize: 20, fontWeight: 800, letterSpacing: '0.02em', marginBottom: 24 },
  navBtn: { textAlign: 'left', background: 'none', border: 'none', color: '#bbb', padding: '10px 12px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' },
  navBtnActive: { background: '#fff', color: '#111' },
  toolBtn: { background: '#222', border: '1px solid #333', color: '#ddd', padding: '9px 12px', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' },
  main: { flex: 1, padding: '32px 40px', maxWidth: 900 },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  h1: { fontSize: 28, fontWeight: 800, margin: 0, color: '#111' },
  hint: { fontSize: 13, color: '#707072', marginTop: 4 },
  toast: { background: '#111', color: '#fff', padding: '6px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600 },
  editor: { display: 'flex', flexDirection: 'column', gap: 16 },
  objectGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 },
  field: { display: 'flex', flexDirection: 'column', gap: 5 },
  label: { fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#707072', fontFamily: MONO },
  input: { padding: '9px 12px', border: '1px solid #d5d5d5', borderRadius: 6, fontSize: 14, fontFamily: 'inherit', background: '#fff' },
  textarea: { padding: '9px 12px', border: '1px solid #d5d5d5', borderRadius: 6, fontSize: 14, fontFamily: 'inherit', background: '#fff', resize: 'vertical' },
  item: { border: '1px solid #e0e0e0', borderRadius: 10, padding: 16, marginBottom: 12, background: '#fff' },
  itemBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  itemNum: { fontSize: 12, fontWeight: 700, color: '#999', fontFamily: MONO },
  miniBtn: { background: '#f0f0f0', border: '1px solid #ddd', borderRadius: 6, padding: '3px 8px', fontSize: 12, fontWeight: 600, cursor: 'pointer' },
  addBtn: { background: '#111', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 13, fontWeight: 700, cursor: 'pointer' },
};
