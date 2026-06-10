/* ============================================================
   app-section.jsx — boots one section page.
   Requires window.__SECTION__ to be set before this runs, plus
   the matching window.Section<N> (from sections/section<N>.jsx).
   ============================================================ */
(function () {
  const SEC = window.__SECTION__;
  const meta = window.SECTION_BY_N[SEC];
  const SectionComp = window["Section" + SEC];
  const sections = window.SECTIONS;
  const idx = sections.findIndex(s => s.n === SEC);
  const prev = sections[idx - 1], next = sections[idx + 1];

  function Pager() {
    return (
      <div className="pager">
        {prev
          ? <a href={"s" + prev.n + ".html"} className="pager--prev"><small>← Section {prev.n}</small><b>{prev.title}</b></a>
          : <span className="pager--prev pager--disabled"></span>}
        {next
          ? <a href={"s" + next.n + ".html"} className="pager--next"><small>Section {next.n} →</small><b>{next.title}</b></a>
          : <span className="pager--next pager--disabled"></span>}
      </div>
    );
  }

  function App() {
    return (
      <Shell current={SEC} paper={meta.paper} title={meta.title} subtitle={"Section " + SEC + " · " + meta.paperLabel}>
        <div className="wpage">
          <SectionComp />
        </div>
        <Pager />
      </Shell>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);

  /* ---------- progress ---------- */
  let pTimer = null;
  function computeProgress() { WB.computeAndStoreProgress(SEC); }
  function scheduleProgress() { clearTimeout(pTimer); pTimer = setTimeout(computeProgress, 250); }

  /* ---------- post-mount enhancement ---------- */
  function enhance() {
    const wp = document.querySelector(".wpage");
    if (!wp || !wp.querySelector(".wbanner")) return setTimeout(enhance, 60);

    // 1. build "on this page" nav from the subsection headers
    const heads = Array.prototype.slice.call(wp.querySelectorAll(".subsection-header"));
    if (heads.length && !wp.querySelector(".topicnav")) {
      heads.forEach((h, i) => { if (!h.id) h.id = "topic-" + i; h.style.scrollMarginTop = "84px"; });
      const nav = document.createElement("div");
      nav.className = "topicnav";
      const h = document.createElement("div"); h.className = "topicnav__h"; h.textContent = "On this page";
      const grid = document.createElement("div"); grid.className = "topicnav__grid";
      heads.forEach((head, i) => {
        const a = document.createElement("a");
        a.href = "#topic-" + i;
        const numEl = head.querySelector(".num"), titleEl = head.querySelector(".title");
        const b = document.createElement("b"); b.textContent = numEl ? numEl.textContent : String(i + 1);
        a.appendChild(b);
        a.appendChild(document.createTextNode(" " + (titleEl ? titleEl.textContent : "Topic " + (i + 1))));
        grid.appendChild(a);
      });
      nav.appendChild(h); nav.appendChild(grid);
      wp.querySelector(".wbanner").insertAdjacentElement("afterend", nav);
    }

    // 2. hydrate uncontrolled text inputs + wire autosave
    wp.querySelectorAll('input[type="text"][data-wb], textarea[data-wb]').forEach(el => {
      if (!el.value) { const v = WB.get(el.getAttribute("data-wb")); if (v != null) el.value = v; }
    });
    if (!wp.__wired) {
      wp.__wired = true;
      wp.addEventListener("input", e => {
        const el = e.target;
        if (el.matches && el.matches('input[type="text"][data-wb], textarea[data-wb]')) {
          WB.set(el.getAttribute("data-wb"), el.value);
          scheduleProgress();
        }
      });
    }

    // 3. progress (initial + on any change)
    document.removeEventListener("wb:progress", scheduleProgress);
    document.addEventListener("wb:progress", scheduleProgress);
    computeProgress();
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => setTimeout(enhance, 60), () => setTimeout(enhance, 60));
  else setTimeout(enhance, 120);
})();
