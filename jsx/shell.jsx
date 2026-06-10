/* ============================================================
   shell.jsx — shared app chrome (sidebar + topbar + footer)
   Exposes <Shell current=… paper=… title=… subtitle=…>.
   ============================================================ */
(function () {
  const { useState } = React;

  function pct(p) { return p && p.t ? Math.round((p.a / p.t) * 100) : 0; }

  function initial() {
    const n = WB.studentName();
    return n ? n.trim().charAt(0).toUpperCase() : "?";
  }

  function promptName() {
    const cur = WB.studentName();
    const v = window.prompt("Enter your name (your answers are saved under this name on this device):", cur || "");
    if (v !== null) { WB.setStudentName(v); location.reload(); }
  }

  function Sidebar({ current }) {
    const sections = window.SECTIONS || [];
    return (
      <aside className="sidebar" id="sidebar">
        <a className="sidebar__brand" href="index.html">
          <img className="sidebar__logo" src="assets/snaith-logo.jpg" alt="The Snaith School" />
          <span className="sidebar__brandtext">
            <b>GCSE Geography</b>
            <span>Revision · The Snaith School</span>
          </span>
        </a>
        <nav className="sidebar__scroll">
          <a className={"navlink navlink--home" + (current === "home" ? " navlink--active" : "")} href="index.html">
            <span className="navlink__chip">⌂</span>
            <span className="navlink__txt">Home</span>
          </a>
          <a className={"navlink" + (current === "dashboard" ? " navlink--active" : "")} href="dashboard.html">
            <span className="navlink__chip">▣</span>
            <span className="navlink__txt">My progress &amp; RAG</span>
          </a>
          <div className="sidebar__heading">The nine sections</div>
          {sections.map(s => {
            const p = WB.getProgress(s.n);
            const isActive = String(current) === String(s.n);
            return (
              <a key={s.n} className={"navlink" + (isActive ? " navlink--active" : "")} href={"s" + s.n + ".html"}>
                <span className={"navlink__chip chip-" + s.paperKey}>{s.n}</span>
                <span className="navlink__txt">{s.title}</span>
                {p && p.t > 0 && <span className="navlink__pct">{pct(p)}%</span>}
              </a>
            );
          })}
        </nav>
      </aside>
    );
  }

  function Shell({ current, paper, title, subtitle, children }) {
    const [open, setOpen] = useState(false);
    const name = WB.studentName();
    return (
      <div className={"app" + (open ? " nav-open" : "")} data-paper={paper || "1"}>
        <Sidebar current={current} />
        <div className="scrim" onClick={() => setOpen(false)}></div>
        <div className="main">
          <header className="topbar">
            <button className="topbar__menu" aria-label="Open navigation" onClick={() => setOpen(o => !o)}>☰</button>
            <div className="topbar__title">
              {subtitle && <small>{subtitle}</small>}
              {title}
            </div>
            <button className="topbar__btn" onClick={() => window.print()} title="Print this page / save as PDF">Print</button>
            <button className="topbar__name" onClick={promptName} title="Set or change your name">
              <span className="topbar__namelabel">{name ? name : "Set your name"}</span>
              <span className="topbar__avatar">{initial()}</span>
            </button>
          </header>
          <div className="content">{children}</div>
          <footer className="sitefoot">
            The Snaith School · GCSE Geography Revision Workbook · Edexcel A (1GA0) · Your answers are saved in this browser.
          </footer>
        </div>
      </div>
    );
  }

  Object.assign(window, { Shell: Shell, Sidebar: Sidebar });
})();
