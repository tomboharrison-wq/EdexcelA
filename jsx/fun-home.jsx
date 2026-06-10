/* ============================================================
   fun-home.jsx v2 — with level badge, XP bar, daily challenge
   ============================================================ */

const SECTION_META = [
  { id:1, title:"Global Climate & Weather Hazards", color:"p1", paper:"Paper 1 · Physical", icon:"🌍", blurb:"Atmospheric circulation, climate change, tropical cyclones & drought." },
  { id:2, title:"Coastal Landscapes",               color:"p1", paper:"Paper 1 · Physical", icon:"🌊", blurb:"Erosion, transportation, landforms & coastal management at Holderness." },
  { id:3, title:"River Landscapes",                 color:"p1", paper:"Paper 1 · Physical", icon:"🏞", blurb:"Drainage basins, waterfalls, meanders, oxbow lakes & flooding." },
  { id:4, title:"Ecosystems & Biodiversity",        color:"p1", paper:"Paper 1 · Physical", icon:"🌿", blurb:"Global biomes, tropical rainforests, deciduous woodland & Costa Rica." },
  { id:5, title:"Changing Cities",                  color:"p2", paper:"Paper 2 · Human",   icon:"🏙", blurb:"Urbanisation, Hull's development, Rio's favelas & inequality." },
  { id:6, title:"Global Development & Nigeria",     color:"p2", paper:"Paper 2 · Human",   icon:"🌐", blurb:"Development indicators, causes of inequality & Nigeria case study." },
  { id:7, title:"Energy Resource Management",       color:"p2", paper:"Paper 2 · Human",   icon:"⚡", blurb:"Renewable energy, fracking, and Norway & Bhutan case studies." },
  { id:8, title:"Geographical Investigations",      color:"p3", paper:"Paper 3 · Applied", icon:"🔬", blurb:"Fieldwork methods, enquiry process & UK challenges." },
  { id:9, title:"Skills Appendix",                  color:"ps", paper:"Skills · All Papers",icon:"📐", blurb:"Maps, graphs, grid references & statistical skills." },
];

/* ── Progress ring ── */
function ProgressRing({ pct, size, stroke, color }) {
  const r    = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{display:'block'}}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1e293b" strokeWidth={stroke}/>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${size/2} ${size/2})`} style={{transition:'stroke-dashoffset .6s ease'}}/>
      <text x={size/2} y={size/2} dominantBaseline="middle" textAnchor="middle"
        fill="#fff" fontSize={size*.18} fontWeight={900} fontFamily="Nunito Sans,sans-serif">{pct}%</text>
    </svg>
  );
}

/* ── XP progress to next level ── */
function XPLevelBar({ xp }) {
  if (!window.Geo) return null;
  const { level, pct, xpInLevel, xpNeeded } = window.Geo.getLevelProgress(xp);
  const next = window.Geo.LEVELS.find(l => l.num === level.num + 1);
  return (
    <div style={{background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.1)',borderRadius:12,padding:'.75rem 1.1rem',minWidth:200}}>
      <div style={{display:'flex',alignItems:'center',gap:'.5rem',marginBottom:'.5rem'}}>
        <span style={{fontSize:'1.4rem'}}>{level.icon}</span>
        <div>
          <div style={{fontSize:'.78rem',fontWeight:900,color:'#fff'}}>{level.name}</div>
          <div style={{fontSize:'.68rem',color:'rgba(255,255,255,.45)'}}>Level {level.num}</div>
        </div>
        {next && <div style={{marginLeft:'auto',fontSize:'.68rem',color:'rgba(255,255,255,.4)',fontWeight:600}}>{xpInLevel}/{xpNeeded} → {next.icon} {next.name}</div>}
      </div>
      <div className="xp-bar-track">
        <div className="xp-bar-fill" style={{width: pct + '%'}}></div>
      </div>
    </div>
  );
}

/* ── Daily Challenge card ── */
function DailyChallenge({ onStart }) {
  if (!window.Geo) return null;
  const ch = window.Geo.getDailyChallenge();
  if (!ch) return null;

  return (
    <div className={"dc-card" + (ch.completed ? " completed" : "")} onClick={!ch.completed ? onStart : undefined}
      style={{cursor: ch.completed ? 'default' : 'pointer'}}>
      <div style={{display:'flex',alignItems:'center',gap:'1rem',flex:1}}>
        <span className="dc-icon">{ch.completed ? '✅' : '🌟'}</span>
        <div className="dc-text">
          <h3>Daily Challenge</h3>
          <p>{ch.completed
            ? `Completed! You scored ${ch.score}/5 — come back tomorrow for a new challenge.`
            : `5 questions · Bonus +${50 + 5*5} XP if you get them all right!`}</p>
        </div>
      </div>
      {ch.completed
        ? <span className="dc-complete-badge">✓ Done — {ch.score}/5</span>
        : <button className="dc-cta" onClick={onStart}>Start →</button>}
    </div>
  );
}

/* ── Daily Challenge mini quiz ── */
function DailyChallengeQuiz({ onClose }) {
  const ch = window.Geo ? window.Geo.getDailyChallenge() : null;
  const [qi, setQi]           = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [tfAnswered, setTFAns] = React.useState(null);
  const [score, setScore]     = React.useState(0);
  const [done, setDone]       = React.useState(false);

  if (!ch || !ch.questions || ch.questions.length === 0) {
    return (
      <div style={{position:'fixed',inset:0,background:'rgba(15,23,42,.85)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:3000}}>
        <div style={{background:'var(--card)',borderRadius:'var(--radius)',padding:'2rem',maxWidth:420,width:'90vw',textAlign:'center'}}>
          <p style={{color:'var(--muted)'}}>Daily challenge not available yet — visit a section first to load questions.</p>
          <button className="btn btn-primary" style={{marginTop:'1rem'}} onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  const q = ch.questions[qi];
  const LETTERS = ['A','B','C','D'];

  function chooseMCQ(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correct) setScore(s => s+1);
  }

  function answerTF(val) {
    if (tfAnswered !== null) return;
    setTFAns(val);
    if (val === q.answer) setScore(s => s+1);
  }

  function next() {
    if (qi + 1 >= ch.questions.length) {
      const finalScore = score + (q.type === 'mcq' ? (selected===q.correct?0:0) : 0); // already counted
      window.Geo.completeDailyChallenge(finalScore);
      if (finalScore >= 4 && window.Geo) window.Geo.triggerFireworks();
      setDone(true);
    } else {
      setQi(i=>i+1); setSelected(null); setTFAns(null);
    }
  }

  if (done) {
    const pct = Math.round(score/ch.questions.length*100);
    return (
      <div style={{position:'fixed',inset:0,background:'rgba(15,23,42,.85)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:3000}}>
        <div style={{background:'var(--card)',borderRadius:'var(--radius)',padding:'2rem',maxWidth:420,width:'90vw',textAlign:'center'}}>
          <div style={{fontSize:'3rem',marginBottom:'.5rem'}}>{pct===100?'🏆':pct>=60?'⭐':'📚'}</div>
          <h2 style={{marginBottom:'.3rem'}}>Daily Challenge Done!</h2>
          <div style={{fontSize:'1.5rem',fontWeight:900,margin:'.5rem 0'}}>{score}/{ch.questions.length}</div>
          <div style={{color:'var(--muted)',marginBottom:'1.2rem'}}>+{50 + score*10} XP bonus earned</div>
          <button className="btn btn-primary" onClick={onClose}>Back to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(15,23,42,.85)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:3000,padding:'1rem'}}>
      <div style={{background:'var(--card)',borderRadius:'var(--radius)',padding:'1.5rem',maxWidth:560,width:'100%',maxHeight:'90vh',overflowY:'auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'1rem'}}>
          <div>
            <span style={{fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'#f59e0b'}}>🌟 Daily Challenge</span>
            <div style={{fontSize:'.82rem',color:'var(--muted)',fontWeight:600}}>{qi+1} / {ch.questions.length}</div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',color:'var(--muted)',fontSize:'1.2rem',cursor:'pointer'}}>✕</button>
        </div>

        {q.type === 'mcq' ? (
          <>
            <div className="mcq-question">{q.q}</div>
            <div className="mcq-options">
              {q.opts.map((opt,i) => {
                let cls="mcq-opt";
                if (selected!==null){ if(i===q.correct) cls+=" correct"; else if(i===selected) cls+=" wrong"; }
                return <button key={i} className={cls} onClick={()=>chooseMCQ(i)} disabled={selected!==null}>
                  <span className="mcq-opt-letter">{LETTERS[i]}</span>{opt}
                </button>;
              })}
            </div>
            {selected!==null && <div className={"mcq-feedback"+(selected===q.correct?" correct":" wrong")} style={{marginTop:'.75rem'}}>
              {selected===q.correct?"✓ Correct!":"✗ Answer: "+q.opts[q.correct]}
            </div>}
          </>
        ) : (
          <>
            <div className="tf-statement">{q.statement}</div>
            <div className="tf-buttons">
              <button className={"tf-btn true-btn"+(tfAnswered!==null?(q.answer===true?" correct":tfAnswered===true?" wrong":""):"")}
                onClick={()=>answerTF(true)} disabled={tfAnswered!==null}>TRUE</button>
              <button className={"tf-btn false-btn"+(tfAnswered!==null?(q.answer===false?" correct":tfAnswered===false?" wrong":""):"")}
                onClick={()=>answerTF(false)} disabled={tfAnswered!==null}>FALSE</button>
            </div>
            {tfAnswered!==null && tfAnswered!==q.answer && q.correction && <div className="tf-correction">💡 {q.correction}</div>}
          </>
        )}

        {(selected!==null||tfAnswered!==null) && (
          <div style={{marginTop:'1rem',textAlign:'right'}}>
            <button className="btn btn-primary" onClick={next}>
              {qi+1>=ch.questions.length?"Finish →":"Next →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Section card ── */
function SectionCard({ meta, progress }) {
  const colorMap = { p1:'#0891b2', p2:'#4f46e5', p3:'#e11d48', ps:'#d97706' };
  const grdMap   = {
    p1:'linear-gradient(135deg,#0891b2,#0d9488)',
    p2:'linear-gradient(135deg,#4f46e5,#7c3aed)',
    p3:'linear-gradient(135deg,#e11d48,#f97316)',
    ps:'linear-gradient(135deg,#d97706,#ca8a04)',
  };
  const c = meta.color;
  return (
    <a className={"section-card " + c} href={"fun-s" + meta.id + ".html"}>
      <div className={"section-card-header " + c} style={{background: grdMap[c]}}>
        <div className="section-num">{meta.id}</div>
        <div className="paper-badge">{meta.paper}</div>
        <h3>{meta.icon} {meta.title}</h3>
        <p>{meta.blurb}</p>
      </div>
      <div className="section-card-body">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span className="topic-count">{progress.done}/{progress.total} topics done</span>
          <span style={{fontSize:'.8rem',fontWeight:800,color:colorMap[c]}}>{progress.pct}%</span>
        </div>
        <div className="section-progress-bar">
          <div className={"section-progress-fill " + c} style={{width: progress.pct + '%'}}></div>
        </div>
        <div className={"section-card-cta " + c}>
          {progress.done===0 ? "Start →" : progress.done===progress.total ? "✓ Complete" : "Continue →"}
        </div>
      </div>
    </a>
  );
}

/* ── Home App ── */
function FunHomeApp() {
  const [name, setName]         = React.useState(window.GeoProgress ? window.GeoProgress.getName() : '');
  const [inputName, setInputName] = React.useState('');
  const [xp, setXp]             = React.useState(window.GeoProgress ? window.GeoProgress.getXP() : 0);
  const [showDC, setShowDC]     = React.useState(false);
  const streak = window.GeoProgress ? window.GeoProgress.getStreak() : 0;

  /* Build daily challenge once GEO_DATA is available */
  React.useEffect(() => {
    if (window.Geo && window.GEO_DATA) {
      window.Geo.buildDailyChallenge();
    }
  }, []);

  const overall = React.useMemo(() => {
    if (!window.GeoProgress) return { done:0, total:0, pct:0 };
    return window.GeoProgress.overallProgress();
  }, [name]);

  const sectionProgress = React.useMemo(() => {
    if (!window.GeoProgress) return {};
    const out = {};
    for (let i=1;i<=9;i++) out[i] = window.GeoProgress.sectionProgress(i);
    return out;
  }, [name]);

  function saveName(e) {
    e.preventDefault();
    const n = inputName.trim();
    if (!n) return;
    if (window.GeoProgress) window.GeoProgress.setName(n);
    setName(n);
  }

  return (
    <div>
      {showDC && <DailyChallengeQuiz onClose={() => { setShowDC(false); setXp(window.GeoProgress ? window.GeoProgress.getXP() : xp); }} />}

      {/* Nav */}
      <nav className="site-nav">
        <span className="logo">
          <span style={{background:'#0891b2',color:'#fff',borderRadius:6,padding:'2px 8px',fontSize:11,fontWeight:800}}>GEO</span>
          <span>GCSE Geography Revision</span>
        </span>
        <div className="nav-right">
          {name && <span style={{fontSize:13,color:'#94a3b8',fontWeight:600}}>{name}</span>}
          {xp > 0 && window.Geo && <span className="level-badge">{window.Geo.getLevel(xp).icon} {window.Geo.getLevel(xp).name} <span className="lv-num">Lv{window.Geo.getLevel(xp).num}</span></span>}
          <div className="nav-xp">⭐ {xp} XP</div>
        </div>
      </nav>

      {/* Hero */}
      <div className="home-hero">
        <h1>Your GCSE<br/><span style={{color:'#38bdf8'}}>Geography</span> Revision Hub</h1>
        <p>Edexcel Geography A (1GA0) · Papers 1, 2 &amp; 3 · The Snaith School</p>

        {!name ? (
          <form className="name-form" onSubmit={saveName}>
            <input type="text" placeholder="Enter your name to start..."
              value={inputName} onChange={e => setInputName(e.target.value)} maxLength={40} autoFocus />
            <button type="submit">Let's go →</button>
          </form>
        ) : (
          <div style={{marginTop:'1.5rem'}}>
            <p style={{color:'#94a3b8',marginBottom:'1.2rem'}}>
              Welcome back, <strong style={{color:'#fff'}}>{name}</strong>! Keep going 💪
            </p>
            <div style={{display:'flex',gap:'1.2rem',justifyContent:'center',flexWrap:'wrap',alignItems:'center'}}>
              <div className="progress-ring-wrap" style={{padding:0}}>
                <ProgressRing pct={overall.pct} size={110} stroke={10} color="#38bdf8" />
                <span style={{color:'#64748b',fontSize:'.8rem',fontWeight:600}}>{overall.done} / {overall.total} topics</span>
              </div>
              <div style={{display:'flex',flexDirection:'column',gap:'.7rem',alignItems:'stretch'}}>
                <XPLevelBar xp={xp} />
                {streak > 0 && (
                  <div style={{background:'rgba(249,115,22,.15)',border:'1px solid rgba(249,115,22,.3)',borderRadius:12,padding:'.6rem 1rem',display:'flex',alignItems:'center',gap:'.5rem'}}>
                    <span style={{fontSize:'1.3rem'}}>🔥</span>
                    <div><div style={{fontSize:'1.1rem',fontWeight:900,color:'#fb923c'}}>{streak} day{streak!==1?'s':''}</div><div style={{fontSize:'.7rem',color:'#64748b'}}>streak</div></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action bar */}
      <div style={{background:'var(--card)',borderBottom:'1px solid var(--border)',padding:'.75rem 1.5rem',display:'flex',gap:'.75rem',flexWrap:'wrap',justifyContent:'center'}}>
        <a href="fun-quiz.html" className="btn btn-primary">🎲 Mixed Quiz</a>
        <button className="btn" style={{background:'linear-gradient(135deg,#f59e0b,#f97316)',color:'#fff'}} onClick={() => setShowDC(true)}>🌟 Daily Challenge</button>
        <a href="fun-dashboard.html" className="btn btn-ghost">📊 My Progress</a>
      </div>

      {/* Daily challenge card */}
      {name && window.GEO_DATA && (
        <div style={{maxWidth:1200,margin:'1.5rem auto 0',padding:'0 1.5rem'}}>
          <DailyChallenge onStart={() => setShowDC(true)} />
        </div>
      )}

      {/* Section grid */}
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 1.5rem 1rem'}}>
        <h2 style={{padding:'1.5rem 0 .5rem',fontSize:'1.1rem',fontWeight:800,color:'var(--muted)',textTransform:'uppercase',letterSpacing:'.06em'}}>
          Choose a Section
        </h2>
      </div>
      <div className="section-grid">
        {SECTION_META.map(meta => (
          <SectionCard key={meta.id} meta={meta} progress={sectionProgress[meta.id] || {done:0,total:0,pct:0}} />
        ))}
      </div>

      <footer style={{textAlign:'center',padding:'2rem',color:'var(--muted)',fontSize:'.82rem',borderTop:'1px solid var(--border)'}}>
        The Snaith School · GCSE Geography · Edexcel A (1GA0)
        {name && <span> · <button style={{background:'none',border:'none',color:'var(--muted)',cursor:'pointer',fontSize:'.82rem',textDecoration:'underline'}}
          onClick={() => { if(window.GeoProgress){window.GeoProgress.reset();window.location.reload();} }}>Reset progress</button></span>}
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FunHomeApp />);
