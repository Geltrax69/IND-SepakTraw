import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../content/ContentContext';

// ponytail: ONE recursive editor renders every content shape (object / array /
// primitive). No per-field forms — the content object's own shape drives the UI, so
// "edit anything to anything" is free. Each section edits only its own slice via
// setSection, so modules never clash.

const SECTIONS = [
  ['meta', 'Site Identity'],
  ['hero', 'Hero'],
  ['featuredEvent', 'Countdown Banner'],
  ['stats', 'Stat Strip'],
  ['highlights', 'News & Moments'],
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

// Build a blank clone of a sample value (for "add item").
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
          <ValueEditor label={active} value={content[active]} onChange={(nv) => setSection(active, nv)} />
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
