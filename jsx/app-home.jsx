/* ============================================================
   app-home.jsx — landing page (hero, name, overall progress, grid)
   ============================================================ */
(function () {
  const { useState } = React;
  const sections = window.SECTIONS;

  function Ring({ pct, size = 88, stroke = 10 }) {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
    return (
      <svg width={size} height={size} viewBox={"0 0 " + size + " " + size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--rule-soft)" strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--brand)" strokeWidth={stroke}
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          transform={"rotate(-90 " + (size / 2) + " " + (size / 2) + ")"} />
        <text x="50%" y="52%" textAnchor="middle" dominantBaseline="central" fontWeight="900" fontSize={size * 0.27} fill="var(--brand)">{pct}%</text>
      </svg>
    );
  }

  function NameCard() {
    const [val, setVal] = useState(WB.studentName());
    const name = WB.studentName();
    function save() { WB.setStudentName(val); location.reload(); }
    return (
      <div className="namecard">
        <div className="namecard__l">
          {name
            ? <React.Fragment><b>Welcome back, <span className="namecard__hi">{name}</span>.</b><p>Your answers are saved on this device under your name. Change it below to switch student.</p></React.Fragment>
            : <React.Fragment><b>Start by entering your name</b><p>Your typed answers save automatically in this browser under your name — close the tab and pick up where you left off.</p></React.Fragment>}
        </div>
        <div className="namecard__row">
          <input type="text" placeholder="Your name" value={val} onChange={e => setVal(e.target.value)} onKeyDown={e => { if (e.key === "Enter") save(); }} />
          <button className="namecard__save" onClick={save}>{name ? "Update" : "Save"}</button>
        </div>
      </div>
    );
  }

  function App() {
    const started = sections.filter(s => { const p = WB.getProgress(s.n); return p && p.a > 0; }).length;
    const overall = WB.overall();
    const ringPct = Math.round((started / sections.length) * 100);
    const name = WB.studentName();
    return (
      <Shell current="home" paper="1" title="Home" subtitle="GCSE Geography Revision">
        <div className="home">
          <div className="hero">
            <div className="hero__eyebrow">The Snaith School · Edexcel A</div>
            <h1>GCSE Geography <em>Revision</em></h1>
            <div className="hero__sub">Nine sections covering Papers 1, 2 &amp; 3 — every topic on the specification, with key knowledge, activities that mark themselves, exam practice and RAG self-assessment.</div>
            <div className="hero__meta">
              <span>Edexcel A · 1GA0</span><span>9 Sections</span><span>Papers 1 · 2 · 3</span><span>Auto-saved answers</span>
            </div>
          </div>

          <NameCard />

          <div className="overall">
            <div className="overall__ring"><Ring pct={ringPct} /></div>
            <div className="overall__txt">
              <b>{started} of {sections.length} sections started</b>
              <p>{overall.a} answer{overall.a === 1 ? "" : "s"} saved on this device{name ? " · " + name : ""}. Open the dashboard for a full breakdown and your RAG ratings.</p>
            </div>
            <a className="btn btn--primary" href="dashboard.html" style={{ marginLeft: "auto", textDecoration: "none" }}>View progress &amp; RAG →</a>
          </div>

          <div className="sectiongrid">
            {sections.map(s => {
              const p = WB.getProgress(s.n);
              const pc = p && p.t > 0 ? Math.round((p.a / p.t) * 100) : 0;
              return (
                <a key={s.n} className="scard" href={"s" + s.n + ".html"} style={{ "--accent": "var(--" + s.paperKey + ")" }}>
                  <div className={"scard__top scard__top--" + s.paperKey}>
                    <div className="scard__n">Section {s.n} · {s.paperLabel}</div>
                    <div className="scard__title">{s.title}</div>
                  </div>
                  <div className="scard__body">
                    <div className="scard__blurb">{s.blurb}</div>
                    <div className="scard__prog">
                      <div className="scard__bar"><div className="scard__fill" style={{ width: pc + "%" }}></div></div>
                      <div className="scard__plabel"><span>{p && p.t > 0 ? pc + "% complete" : "Not started"}</span><span>{p && p.t > 0 ? p.a + "/" + p.t : s.topics.length + " topics"}</span></div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Shell>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
