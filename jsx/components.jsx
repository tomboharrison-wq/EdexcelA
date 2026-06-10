/* ============================================================
   Workbook component library
   ============================================================ */

const { useState, useEffect, useRef } = React;

// ---------- Page shell ----------
function Page({ paper, running, folio, children, divider }) {
  return (
    <div className={"page" + (divider ? " page--divider" : "")} data-paper={paper} data-screen-label={running}>
      {!divider && (
        <div className="page__header">
          <span className="running">{running}</span>
          <span className="folio">{folio}</span>
        </div>
      )}
      <div className="page__body">{children}</div>
      {!divider && (
        <div className="page__footer">
          <span className="brand">GCSE Geography · Revision Workbook</span>
          <span>{running}</span>
        </div>
      )}
    </div>
  );
}

// ---------- Section divider page ----------
function SectionDivider({ paper, num, title, subtitle, meta, covers, routine, paperLabel }) {
  return (
    <div className="page page--divider" data-paper={paper} data-screen-label={`Section ${num}`}>
      <div className="divider" data-paper={paper}>
        <div className="divider__band"></div>
        <div className="divider__edge"></div>
        <div className="divider__inner">
          <div className="divider__num"><span>Section {num}</span><em>{paperLabel}</em></div>
          <h1 className="divider__title">{title}</h1>
          {subtitle && <div className="divider__subtitle">{subtitle}</div>}
          {meta && <div className="divider__meta">
            {meta.map((m, i) => <span key={i}>{m}</span>)}
          </div>}
          {covers && (
            <div className="divider__covers">
              <h3>What this section covers</h3>
              <div className="divider__cover-grid">
                {covers.map((c, i) => <div key={i}>{c}</div>)}
              </div>
            </div>
          )}
          {routine && <div className="divider__routine">{routine}</div>}
        </div>
        <div className="divider__footer">
          <span>GCSE Geography · Revision Workbook</span>
          <span>Section {num}</span>
        </div>
      </div>
    </div>
  );
}

// ---------- Subsection header ----------
function SubsectionHeader({ num, title, spec }) {
  return (
    <div className="subsection-header">
      <div className="num">{String(num).padStart(2, "0")}</div>
      <div className="title">{title}</div>
      {spec && <div className="spec-tag">{spec}</div>}
    </div>
  );
}

// ---------- Key Knowledge block ----------
function KeyKnowledge({ items, stats, paragraphs }) {
  return (
    <div className="kk">
      <div className="kk__label">Key Knowledge</div>
      {paragraphs && paragraphs.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}} />)}
      {items && items.length > 0 && (
        <ul>
          {items.map((it, i) => <li key={i} dangerouslySetInnerHTML={{__html: it}} />)}
        </ul>
      )}
      {stats && <div className="kk__stats">{stats}</div>}
    </div>
  );
}

// ---------- Activity wrapper ----------
function Activity({ num, title, spec, instructions, kind, children }) {
  return (
    <div className="activity">
      <div className="activity__header">
        <span className="activity__badge">Activity {num}{kind ? ` · ${kind}` : ""}</span>
        <span className="activity__title">{title}</span>
        {spec && <span className="activity__spec">{spec}</span>}
      </div>
      {instructions && <div className="activity__instr">{instructions}</div>}
      {children}
    </div>
  );
}

// ---------- Match Table ----------
function MatchTable({ left, right, leftHead = "Term", rightHead = "Definition", id, shuffled = true }) {
  let rightList = right.map((r, i) => ({ r, i }));
  if (shuffled) {
    const seed = (id || left.map(x => (x||"").slice(0,3)).join("|"));
    let s = 0; for (let i=0; i<seed.length; i++) s = (s*31 + seed.charCodeAt(i)) & 0xffffffff;
    const rnd = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return ((s>>>0) / 0x100000000); };
    for (let i = rightList.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [rightList[i], rightList[j]] = [rightList[j], rightList[i]];
    }
  }
  return (
    <table className="wk-table">
      <thead>
        <tr><th style={{width:"38%"}}>{leftHead}</th><th className="match-col">Match</th><th>{rightHead}</th></tr>
      </thead>
      <tbody>
        {left.map((l, i) => (
          <tr key={i}>
            <td>{l}</td>
            <td className="match-col write-cell"><input type="text" data-wb={`${id}:match:${i}`} /></td>
            <td>{rightList[i].r}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ---------- Generic table ----------
function WkTable({ head, rows, id, colWidths }) {
  return (
    <table className="wk-table">
      <thead><tr>{head.map((h, i) => <th key={i} style={colWidths && colWidths[i] ? {width: colWidths[i]} : null}>{h}</th>)}</tr></thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.map((c, j) => {
              if (c === null) return <td key={j} className="write-cell"><input type="text" data-wb={`${id}:r${i}c${j}`} /></td>;
              if (typeof c === "object" && c !== null && c.fill) {
                return <td key={j} className="write-cell"><input type="text" data-wb={`${id}:r${i}c${j}`} placeholder={c.placeholder||""} /></td>;
              }
              if (typeof c === "object" && c !== null && c.shaded) return <td key={j} className="anchor-shaded">{c.text}</td>;
              if (typeof c === "object" && c !== null && c.html) return <td key={j} dangerouslySetInnerHTML={{__html: c.html}} />;
              return <td key={j}>{c}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ---------- MCQ ----------
function MCQ({ items, id }) {
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(localStorage.getItem("wb:" + id) || "{}"); } catch { return {}; }
  });
  useEffect(() => {
    try { localStorage.setItem("wb:" + id, JSON.stringify(answers)); } catch {}
  }, [id, answers]);
  return (
    <div>
      {items.map((q, qi) => (
        <div className="mcq" key={qi}>
          <div className="mcq__q">{qi + 1}. {q.q}</div>
          <div className="mcq__row">
            {q.opts.map((o, oi) => {
              const letter = "ABCD"[oi];
              return (
                <label className="mcq__opt" key={oi}>
                  <input type="radio" name={`${id}:${qi}`}
                    checked={answers[qi] === oi}
                    onChange={() => setAnswers({ ...answers, [qi]: oi })} />
                  <span className="letter">{letter}</span>
                  <span>{o}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ---------- Fill in the blanks ----------
function FillBlanks({ bank, items, id }) {
  return (
    <div>
      {bank && bank.length > 0 && (
        <div className="sort-bank" style={{marginTop: 0}}>
          {bank.join("   ·   ")}
        </div>
      )}
      <ol className="blanks-list">
        {items.map((parts, i) => (
          <li key={i}>
            {parts.map((p, j) =>
              p === null
                ? <input key={j} className="blank-input" type="text" data-wb={`${id}:b${i}-${j}`} />
                : <span key={j} dangerouslySetInnerHTML={{__html: p}} />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

// ---------- Sort It ----------
function SortIt({ headLeft, headRight, bank, rows = 8, id }) {
  return (
    <div>
      {bank && <div className="sort-bank">{bank.join("   ·   ")}</div>}
      <div className="sort-grid">
        <div>{headLeft}</div>
        <div>{headRight}</div>
        {Array.from({length: rows}).map((_, i) => (
          <React.Fragment key={i}>
            <div><input type="text" data-wb={`${id}:l${i}`} style={{border:"none",outline:"none",background:"transparent",width:"100%",fontFamily:"inherit",fontSize:"inherit"}} /></div>
            <div><input type="text" data-wb={`${id}:r${i}`} style={{border:"none",outline:"none",background:"transparent",width:"100%",fontFamily:"inherit",fontSize:"inherit"}} /></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ---------- Exam tip ----------
function ExamTip({ children }) {
  return <div className="tip">{children}</div>;
}

// ---------- Exam question with lined space ----------
function ExamQuestion({ prompt, marks, hint, lines = 6, id }) {
  return (
    <div className="exam-q">
      <div className="exam-q__prompt">
        <span style={{flex:1}}>{prompt}</span>
        {marks != null && <span className="exam-q__marks">{marks} mark{marks === 1 ? "" : "s"}</span>}
      </div>
      {hint && <div className="exam-q__hint">Think about: {hint}</div>}
      <AnswerLines n={lines} id={id} />
    </div>
  );
}

// ---------- Answer lines ----------
function AnswerLines({ n = 6, id }) {
  return (
    <div className="lines">
      {Array.from({length: n}).map((_, i) => (
        <div className="line" key={i}>
          <input type="text" data-wb={`${id}:line${i}`} />
        </div>
      ))}
    </div>
  );
}

// ---------- Photo / Diagram slot ----------
function PhotoSlot({ caption, desc, height = 280, kind = "photo" }) {
  const icon = kind === "diagram" ? "✎" : kind === "map" ? "◐" : kind === "chart" ? "▥" : "▢";
  return (
    <div
      className={"photo-slot" + (kind === "sketch" || kind === "diagram" ? " photo-slot--sketch" : "")}
      style={{ height }}
    >
      <div className="photo-slot__icon">{icon}</div>
      <div className="photo-slot__caption">{caption || "Image / diagram space"}</div>
      {desc && <div className="photo-slot__desc">{desc}</div>}
    </div>
  );
}

// ---------- RAG self-assessment table ----------
function RAGTable({ items, head = "I can…" }) {
  return (
    <table className="rag">
      <thead>
        <tr>
          <th>{head}</th>
          <th className="head-r">R</th>
          <th className="head-a">A</th>
          <th className="head-g">G</th>
        </tr>
      </thead>
      <tbody>
        {items.map((it, i) => (
          <tr key={i}>
            <td>{it}</td>
            <td className="rag-cell r"><span className="dot"></span></td>
            <td className="rag-cell a"><span className="dot"></span></td>
            <td className="rag-cell g"><span className="dot"></span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Lead({ children }) {
  return <p className="lead">{children}</p>;
}
function NoteP({ children, html }) {
  if (html) return <p className="note-p" dangerouslySetInnerHTML={{__html: html}} />;
  return <p className="note-p">{children}</p>;
}

function HrOrn() { return <hr className="hr-orn" />; }

Object.assign(window, {
  Page, SectionDivider, SubsectionHeader,
  KeyKnowledge, Activity,
  MatchTable, WkTable,
  MCQ, FillBlanks, SortIt,
  ExamTip, ExamQuestion, AnswerLines,
  PhotoSlot, RAGTable,
  Lead, NoteP, HrOrn,
});
