/* ============================================================
   components-web.jsx — WEB overrides of the workbook components.
   Loaded AFTER components.jsx, so these globals win. Section files
   (loaded after this) render with these interactive versions.
   ============================================================ */
(function () {
  const { useState, useEffect, useRef, useMemo } = React;
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function bump() { document.dispatchEvent(new Event("wb:progress")); }

  /* ---------- fluid page card ---------- */
  function WebPage({ children }) {
    return <section className="wpage__section">{children}</section>;
  }

  /* ---------- section banner (replaces the print divider) ---------- */
  function WebSectionDivider({ num, title, subtitle, meta, paperLabel, routine }) {
    return (
      <div className="wbanner">
        <div className="wbanner__num">
          <span>Section {num}</span>{paperLabel && <em>· {paperLabel}</em>}
        </div>
        <h1>{title}</h1>
        {subtitle && <div className="wbanner__sub">{subtitle}</div>}
        {meta && <div className="wbanner__meta">{meta.map((m, i) => <span key={i}>{m}</span>)}</div>}
      </div>
    );
  }

  /* ---------- MCQ with self-marking ---------- */
  function WebMCQ({ items, id }) {
    const key = (window.ANSWER_KEYS && window.ANSWER_KEYS.mcq) ? window.ANSWER_KEYS.mcq[id] : null;
    const [ans, setAns] = useState(() => WB.getJSON(id, {}));
    const [checked, setChecked] = useState(false);
    useEffect(() => { WB.setJSON(id, ans); bump(); }, [ans]);

    function choose(qi, oi) { setChecked(false); setAns(a => Object.assign({}, a, { [qi]: oi })); }
    let score = 0;
    if (key) items.forEach((q, qi) => { if (ans[qi] === key[qi]) score++; });

    return (
      <div>
        {items.map((q, qi) => (
          <div className="mcq" key={qi} data-mcq-q>
            <div className="mcq__q">{qi + 1}. {q.q}</div>
            <div className="mcq__row">
              {q.opts.map((o, oi) => {
                const sel = ans[qi] === oi;
                let cls = "mcq__opt";
                if (checked && key) {
                  if (oi === key[qi]) cls += " is-correct";
                  else if (sel) cls += " is-wrong";
                }
                return (
                  <label className={cls} key={oi}>
                    <input type="radio" name={id + ":" + qi} checked={sel} onChange={() => choose(qi, oi)} />
                    <span className="letter">{LETTERS[oi]}</span>
                    <span>{o}</span>
                    {checked && key && oi === key[qi] && <span className="tickmark">✓</span>}
                    {checked && key && sel && oi !== key[qi] && <span className="tickmark">✗</span>}
                  </label>
                );
              })}
            </div>
          </div>
        ))}
        {key && (
          <div className="marker">
            <button className="marker__btn" onClick={() => setChecked(true)}>Check answers</button>
            {checked && <span className={"marker__score" + (score === items.length ? " marker__score--perfect" : "")}>Score: <b>{score}/{items.length}</b></span>}
            {checked && <button className="marker__btn marker__btn--ghost" onClick={() => setChecked(false)}>Hide marks</button>}
          </div>
        )}
      </div>
    );
  }

  /* ---------- Match-up (structural key) with self-marking ---------- */
  function shuffleRight(right, id, shuffled) {
    let list = right.map((r, i) => ({ r: r, i: i }));
    if (shuffled) {
      const seed = id || right.map(x => (x || "").slice(0, 3)).join("|");
      let s = 0;
      for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) & 0xffffffff;
      const rnd = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return ((s >>> 0) / 0x100000000); };
      for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1));[list[i], list[j]] = [list[j], list[i]]; }
    }
    return list;
  }

  function WebMatchTable({ left, right, leftHead = "Term", rightHead = "Definition", id, shuffled = true }) {
    const rightList = useMemo(() => shuffleRight(right, id, shuffled), [id]);
    // correct letter for each ORIGINAL term index = display-letter at the position holding that definition
    const correctLetter = {};
    rightList.forEach((o, p) => { correctLetter[o.i] = LETTERS[p]; });

    const [sel, setSel] = useState(() => {
      const o = {}; left.forEach((_, i) => { o[i] = WB.get(id + ":match:" + i) || ""; }); return o;
    });
    const [checked, setChecked] = useState(false);

    function pick(i, val) {
      setChecked(false);
      WB.set(id + ":match:" + i, val);
      setSel(s => Object.assign({}, s, { [i]: val }));
      bump();
    }
    let score = 0;
    left.forEach((_, i) => { if (sel[i] && sel[i] === correctLetter[i]) score++; });

    return (
      <div>
        <div className="table-scroll">
          <table className="wk-table">
            <thead>
              <tr>
                <th style={{ width: "34%" }}>{leftHead}</th>
                <th className="match-col">Match</th>
                <th>{rightHead}</th>
                <th className="match-result" style={{ width: "34px" }}></th>
              </tr>
            </thead>
            <tbody>
              {left.map((l, i) => {
                const ok = checked && sel[i] === correctLetter[i];
                const bad = checked && sel[i] && sel[i] !== correctLetter[i];
                const defObj = rightList[i];
                return (
                  <tr key={i}>
                    <td>{l}</td>
                    <td className="match-col">
                      <select className="match-select" data-match value={sel[i]} onChange={e => pick(i, e.target.value)}>
                        <option value="">–</option>
                        {left.map((_, k) => <option key={k} value={LETTERS[k]}>{LETTERS[k]}</option>)}
                      </select>
                    </td>
                    <td>{defObj ? <span><b style={{ color: "var(--accent)" }}>{LETTERS[i]}.</b> {defObj.r}</span> : null}</td>
                    <td className="match-result" style={{ color: ok ? "var(--scouts-green)" : "var(--scouts-red)" }}>
                      {checked ? (ok ? "✓" : (bad ? "✗" : "")) : ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="marker">
          <button className="marker__btn" onClick={() => setChecked(true)}>Check answers</button>
          {checked && <span className={"marker__score" + (score === left.length ? " marker__score--perfect" : "")}>Score: <b>{score}/{left.length}</b></span>}
          {checked && <button className="marker__btn marker__btn--ghost" onClick={() => setChecked(false)}>Hide marks</button>}
        </div>
      </div>
    );
  }

  /* ---------- RAG self-assessment (interactive + saved) ---------- */
  function WebRAGTable({ items, head = "I can…" }) {
    const sec = window.__SECTION__;
    const tiRef = useRef(null);
    if (tiRef.current === null) {
      tiRef.current = window.__RAG_TI__ || 0;
      window.__RAG_TI__ = (window.__RAG_TI__ || 0) + 1;
    }
    const ti = tiRef.current;
    const [vals, setVals] = useState(() => {
      const o = {}; items.forEach((_, ri) => { o[ri] = WB.ragValue(sec, ti, ri) || ""; }); return o;
    });
    useEffect(() => { WB.setRagMeta(sec, ti, items); }, []);

    function setRag(ri, v) {
      const nv = vals[ri] === v ? "" : v;
      WB.set("rag:s" + sec + ":t" + ti + ":r" + ri, nv);
      setVals(s => Object.assign({}, s, { [ri]: nv }));
      bump();
    }
    return (
      <table className="rag">
        <thead>
          <tr><th>{head}</th><th className="head-r">R</th><th className="head-a">A</th><th className="head-g">G</th></tr>
        </thead>
        <tbody>
          {items.map((it, ri) => (
            <tr key={ri} data-rag-row>
              <td>{it}</td>
              {["r", "a", "g"].map(c => (
                <td className="rag-cell" key={c}>
                  <button className="rag-btn" data-rag={c} aria-pressed={vals[ri] === c} onClick={() => setRag(ri, c)} title={c === "r" ? "Don't know" : c === "a" ? "Partly know" : "Know well"}>
                    {c.toUpperCase()}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  /* ---------- Fill-in-the-blanks with optional self-marking ---------- */
  function WebFillBlanks({ bank, items, id }) {
    const keys = (window.ANSWER_KEYS && window.ANSWER_KEYS.blanks) || {};
    const hasKey = Object.keys(keys).some(k => k.indexOf(id + ":b") === 0);
    const refs = useRef({});
    const [results, setResults] = useState(null); // { fieldId: 'ok'|'bad' }

    function norm(s) { return (s || "").trim().toLowerCase().replace(/\s+/g, " "); }
    function check() {
      const r = {};
      Object.keys(keys).forEach(fid => {
        if (fid.indexOf(id + ":b") !== 0) return;
        const el = refs.current[fid];
        r[fid] = el && norm(el.value) === norm(keys[fid]) ? "ok" : "bad";
      });
      setResults(r);
    }
    let total = 0, score = 0;
    if (results) { Object.keys(results).forEach(k => { total++; if (results[k] === "ok") score++; }); }

    return (
      <div>
        {bank && bank.length > 0 && <div className="sort-bank" style={{ marginTop: 0 }}>{bank.join("   ·   ")}</div>}
        <ol className="blanks-list">
          {items.map((parts, i) => (
            <li key={i}>
              {parts.map((p, j) => {
                if (p !== null) return <span key={j} dangerouslySetInnerHTML={{ __html: p }} />;
                const fid = id + ":b" + i + "-" + j;
                const res = results && results[fid];
                return (
                  <span key={j} style={{ whiteSpace: "nowrap" }}>
                    <input className={"blank-input" + (res === "ok" ? " is-correct" : res === "bad" ? " is-wrong" : "")}
                      type="text" data-wb={fid}
                      defaultValue={WB.get(fid) || ""}
                      ref={el => { if (el) refs.current[fid] = el; }} />
                    {res === "bad" && keys[fid] && <span className="blank-reveal">→ {keys[fid]}</span>}
                  </span>
                );
              })}
            </li>
          ))}
        </ol>
        {hasKey && (
          <div className="marker">
            <button className="marker__btn" onClick={check}>Check answers</button>
            {results && <span className={"marker__score" + (score === total ? " marker__score--perfect" : "")}>Score: <b>{score}/{total}</b></span>}
            {results && <button className="marker__btn marker__btn--ghost" onClick={() => setResults(null)}>Hide marks</button>}
          </div>
        )}
      </div>
    );
  }

  Object.assign(window, {
    Page: WebPage,
    SectionDivider: WebSectionDivider,
    MCQ: WebMCQ,
    MatchTable: WebMatchTable,
    RAGTable: WebRAGTable,
    FillBlanks: WebFillBlanks,
  });
})();
