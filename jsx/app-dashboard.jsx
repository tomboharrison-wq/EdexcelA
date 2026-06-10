/* ============================================================
   app-dashboard.jsx — progress breakdown, RAG summary, export, clear
   ============================================================ */
(function () {
  const { useState } = React;
  const sections = window.SECTIONS;

  function pct(p) { return p && p.t ? Math.round((p.a / p.t) * 100) : 0; }

  function ragForSection(sec) {
    const meta = WB.getRagMeta(sec);
    const rows = []; const counts = { r: 0, a: 0, g: 0, none: 0 };
    Object.keys(meta).forEach(ti => {
      (meta[ti] || []).forEach((item, ri) => {
        const v = WB.ragValue(sec, ti, ri) || "";
        rows.push({ item: item, v: v });
        if (v) counts[v]++; else counts.none++;
      });
    });
    return { rows: rows, counts: counts };
  }

  function downloadJSON() {
    const data = WB.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (WB.studentName() || "answers").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") + "-geography-answers.json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function App() {
    const [, setTick] = useState(0);
    const refresh = () => setTick(t => t + 1);
    const name = WB.studentName();

    function clearSection(s) {
      if (confirm('Clear all your answers and RAG ratings for Section ' + s.n + ' — "' + s.title + '"? This cannot be undone.')) {
        WB.clearSection(s.n); refresh();
      }
    }
    function clearAll() {
      if (confirm("Clear EVERYTHING for " + (name || "this device") + " — every section, all answers and RAG ratings? This cannot be undone.")) {
        WB.clearAll(); refresh();
      }
    }

    const anyRag = sections.some(s => ragForSection(s.n).rows.length > 0);

    return (
      <Shell current="dashboard" paper="1" title="My progress & RAG" subtitle="Dashboard">
        <div className="dash">
          <div className="dash__head">
            <h1>My progress</h1>
            <p>{name ? "Tracking saved work for " + name + " on this device." : "Set your name on the home page so your work is tagged. Showing guest progress."}</p>
          </div>

          <div className="dash__actions">
            <button className="btn btn--primary" onClick={() => window.print()}>Print / Save as PDF</button>
            <button className="btn" onClick={downloadJSON}>Export answers (.json backup)</button>
            <button className="btn btn--danger" onClick={clearAll}>Clear everything</button>
          </div>

          <table className="progtable">
            <thead>
              <tr><th></th><th>Section</th><th>Progress</th><th>%</th><th></th><th></th></tr>
            </thead>
            <tbody>
              {sections.map(s => {
                const p = WB.getProgress(s.n);
                const pc = pct(p);
                return (
                  <tr key={s.n}>
                    <td><span className={"pt-chip chip-" + s.paperKey}>{s.n}</span></td>
                    <td><a href={"s" + s.n + ".html"}>{s.title}</a><br /><span style={{ fontSize: "8pt", color: "var(--ink-faint)", fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>{s.paperLabel}</span></td>
                    <td><span className="pt-bar"><span className="pt-fill" style={{ width: pc + "%", background: "var(--" + s.paperKey + ")" }}></span></span></td>
                    <td><b>{p && p.t > 0 ? pc + "%" : "—"}</b><br /><span style={{ fontSize: "8pt", color: "var(--ink-faint)" }}>{p && p.t > 0 ? p.a + "/" + p.t : "not started"}</span></td>
                    <td><a href={"s" + s.n + ".html"}>Open →</a></td>
                    <td><button className="btn" style={{ padding: "6px 11px", fontSize: "8.5pt" }} onClick={() => clearSection(s)}>Clear</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="ragsum">
            <h2>RAG self-assessment</h2>
            <div className="ragsum__legend">
              <span><i className="dot-r"></i>Red — don't know yet</span>
              <span><i className="dot-a"></i>Amber — partly know</span>
              <span><i className="dot-g"></i>Green — know well</span>
            </div>
            {!anyRag && <div className="empty">No RAG ratings yet. Open a section, work through it, and rate each objective at the end — they'll gather here.</div>}
            {sections.map(s => {
              const rag = ragForSection(s.n);
              if (!rag.rows.length) return null;
              return (
                <div className="ragobj" key={s.n}>
                  <div className="ragobj__sec">
                    Section {s.n} · {s.title}
                    <span style={{ float: "right", fontWeight: 800, fontSize: "9pt", color: "var(--ink-faint)" }}>
                      {rag.counts.r} R · {rag.counts.a} A · {rag.counts.g} G{rag.counts.none ? " · " + rag.counts.none + " unrated" : ""}
                    </span>
                  </div>
                  {rag.rows.map((row, i) => (
                    <div className="ragobj__row" key={i}>
                      <i className={row.v === "r" ? "dot-r" : row.v === "a" ? "dot-a" : row.v === "g" ? "dot-g" : ""} style={!row.v ? { background: "var(--rule)" } : null}></i>
                      <span>{row.item}</span>
                      <b style={{ color: row.v === "r" ? "var(--scouts-red)" : row.v === "a" ? "#9a8400" : row.v === "g" ? "var(--scouts-green)" : "var(--ink-faint)", fontSize: "9pt" }}>
                        {row.v ? row.v.toUpperCase() : "—"}
                      </b>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </Shell>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
