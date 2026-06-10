/* ============================================================
   fun-dashboard.jsx — Progress dashboard: RAG, scores, spec checklist
   ============================================================ */

const DB_SECTIONS = [
  { id:1, title:"Global Climate & Weather Hazards", color:"p1", paper:"Paper 1" },
  { id:2, title:"Coastal Landscapes", color:"p1", paper:"Paper 1" },
  { id:3, title:"River Landscapes & Processes", color:"p1", paper:"Paper 1" },
  { id:4, title:"Ecosystems & Biodiversity", color:"p1", paper:"Paper 1" },
  { id:5, title:"Changing Cities", color:"p2", paper:"Paper 2" },
  { id:6, title:"Global Development & Nigeria", color:"p2", paper:"Paper 2" },
  { id:7, title:"Energy Resource Management", color:"p2", paper:"Paper 2" },
  { id:8, title:"Geographical Investigations", color:"p3", paper:"Paper 3" },
  { id:9, title:"Skills Appendix", color:"ps", paper:"Skills" },
];

const COLOR_HEX = { p1:'#0891b2', p2:'#4f46e5', p3:'#e11d48', ps:'#d97706' };
const RAG_MAP   = { r:'#dc2626', a:'#ca8a04', g:'#16a34a' };
const RAG_LABEL = { r:'Not sure', a:'Getting there', g:'Confident' };

function TopicRow({ sid, tid, topicIdx, topic, rag, mcq, done }) {
  const ragColor = rag ? RAG_MAP[rag] : '#cbd5e1';
  const mcqPct   = mcq ? Math.round(mcq.correct/mcq.total*100) : null;
  return (
    <tr style={{borderBottom:'1px solid var(--border)'}}>
      <td style={{padding:'.6rem .8rem',fontSize:'.85rem',fontWeight:600,lineHeight:1.3}}>
        <span style={{fontSize:'.7rem',color:'var(--muted)',fontWeight:700,display:'block',marginBottom:2}}>
          {topic.spec}
        </span>
        {topic.title}
      </td>
      <td style={{padding:'.6rem .5rem',textAlign:'center'}}>
        <span style={{fontSize:'1rem'}}>{done ? '✅' : '⬜'}</span>
      </td>
      <td style={{padding:'.6rem .5rem',textAlign:'center'}}>
        <span style={{
          display:'inline-block', padding:'.25rem .7rem', borderRadius:999,
          fontSize:'.75rem', fontWeight:800,
          background: rag ? ragColor+'22' : 'var(--border)',
          color: rag ? ragColor : 'var(--muted)',
          border: `1.5px solid ${rag ? ragColor : 'var(--border)'}`,
        }}>
          {rag ? RAG_LABEL[rag] : '—'}
        </span>
      </td>
      <td style={{padding:'.6rem .5rem',textAlign:'center'}}>
        {mcqPct !== null ? (
          <div style={{display:'flex',alignItems:'center',gap:'.4rem',justifyContent:'center'}}>
            <div style={{width:50,height:6,background:'var(--border)',borderRadius:999,overflow:'hidden'}}>
              <div style={{height:'100%',width:mcqPct+'%',background:mcqPct>=80?'var(--green)':mcqPct>=50?'var(--yellow)':'var(--red)',borderRadius:999}}></div>
            </div>
            <span style={{fontSize:'.75rem',fontWeight:800,color:'var(--muted)'}}>{mcqPct}%</span>
          </div>
        ) : <span style={{color:'var(--muted)',fontSize:'.75rem'}}>—</span>}
      </td>
    </tr>
  );
}

function SectionPanel({ meta }) {
  const section = window.GEO_DATA && window.GEO_DATA[meta.id];
  if (!section) return null;
  const rag  = window.GeoProgress ? window.GeoProgress.getAllRAG()  : {};
  const mcq  = window.GeoProgress ? window.GeoProgress.getAllMCQ()  : {};
  const prog = window.GeoProgress ? window.GeoProgress.sectionProgress(meta.id) : { done:0, total:0, pct:0 };
  const c    = COLOR_HEX[meta.color];

  return (
    <div style={{background:'var(--card)',borderRadius:'var(--radius)',overflow:'hidden',boxShadow:'var(--shadow)',marginBottom:'1.5rem'}}>
      <div style={{background:c,padding:'1rem 1.4rem',color:'#fff',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontSize:'.7rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',opacity:.8}}>{meta.paper}</div>
          <div style={{fontSize:'1rem',fontWeight:800}}>{meta.title}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontSize:'1.4rem',fontWeight:900}}>{prog.pct}%</div>
          <div style={{fontSize:'.75rem',opacity:.8}}>{prog.done}/{prog.total} topics</div>
        </div>
      </div>
      <div style={{overflowX:'auto'}}>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr style={{background:'var(--bg)'}}>
              <th style={{padding:'.5rem .8rem',textAlign:'left',fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)'}}>Topic</th>
              <th style={{padding:'.5rem .5rem',fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',width:60}}>Done</th>
              <th style={{padding:'.5rem .5rem',fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',width:120}}>Confidence</th>
              <th style={{padding:'.5rem .5rem',fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',width:100}}>MCQ Score</th>
            </tr>
          </thead>
          <tbody>
            {section.topics.map((topic, i) => {
              const tid = `${meta.id}-${i}`;
              return (
                <TopicRow key={i} sid={meta.id} tid={tid} topicIdx={i} topic={topic}
                  rag={rag[tid]} mcq={mcq[tid]}
                  done={window.GeoProgress ? window.GeoProgress.isTopicDone(tid) : false} />
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{padding:'.8rem 1.4rem',borderTop:'1px solid var(--border)',display:'flex',gap:'.75rem'}}>
        <a href={`fun-s${meta.id}.html`} style={{fontSize:'.82rem',fontWeight:800,color:c,textDecoration:'none'}}>
          {prog.done===0 ? 'Start section →' : prog.done===prog.total ? '✓ Complete — Review →' : 'Continue →'}
        </a>
      </div>
    </div>
  );
}

function FunDashboardApp() {
  const name    = window.GeoProgress ? window.GeoProgress.getName()         : '';
  const xp      = window.GeoProgress ? window.GeoProgress.getXP()           : 0;
  const streak  = window.GeoProgress ? window.GeoProgress.getStreak()       : 0;
  const overall = window.GeoProgress ? window.GeoProgress.overallProgress() : { done:0, total:0, pct:0 };

  const lv   = window.Geo ? window.Geo.getLevel(xp) : null;
  const lvPr = window.Geo ? window.Geo.getLevelProgress(xp) : null;
  const nextLv = lv && window.Geo ? window.Geo.LEVELS.find(l => l.num === lv.num + 1) : null;

  return (
    <div>
      {/* Nav */}
      <nav className="site-nav">
        <a href="fun-index.html" className="logo">
          <span style={{background:'#0891b2',color:'#fff',borderRadius:6,padding:'2px 8px',fontSize:11,fontWeight:800}}>GEO</span>
          <span>GCSE Geography</span>
        </a>
        <div style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:'#94a3b8'}}>
          <span style={{opacity:.5}}>›</span>
          <span style={{color:'#fff',fontWeight:600}}>Progress Dashboard</span>
        </div>
        <div className="nav-right">
          {streak>0 && <div className="nav-xp" style={{color:'#fb923c'}}>🔥 {streak}</div>}
          {lv && <span className="level-badge"><span className="lv-icon">{lv.icon}</span>{lv.name}<span className="lv-num">Lv{lv.num}</span></span>}
          <div className="nav-xp">⭐ {xp} XP</div>
        </div>
      </nav>

      {/* Header */}
      <div style={{background:'var(--text)',color:'#fff',padding:'2rem 1.5rem',marginBottom:0}}>
        <h1 style={{color:'#fff',fontSize:'1.6rem',marginBottom:'.3rem'}}>
          {name ? `${name}'s Progress` : 'Your Progress'}
        </h1>
        <p style={{opacity:.6,fontSize:'.9rem'}}>Track your revision across all 9 sections</p>
        <div style={{display:'flex',gap:'1.5rem',marginTop:'1rem',flexWrap:'wrap',alignItems:'flex-start'}}>
          <div><div style={{fontSize:'2rem',fontWeight:900,color:'#38bdf8'}}>{overall.pct}%</div><div style={{fontSize:'.75rem',opacity:.6}}>Overall complete</div></div>
          <div><div style={{fontSize:'2rem',fontWeight:900,color:'#a78bfa'}}>{overall.done}/{overall.total}</div><div style={{fontSize:'.75rem',opacity:.6}}>Topics done</div></div>
          <div><div style={{fontSize:'2rem',fontWeight:900,color:'#fb923c'}}>{streak}</div><div style={{fontSize:'.75rem',opacity:.6}}>Day streak 🔥</div></div>
          <div><div style={{fontSize:'2rem',fontWeight:900,color:'#fbbf24'}}>{xp}</div><div style={{fontSize:'.75rem',opacity:.6}}>XP earned ⭐</div></div>
          {lv && lvPr && (
            <div style={{marginLeft:'auto',background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',borderRadius:12,padding:'.75rem 1.1rem',minWidth:200}}>
              <div style={{display:'flex',alignItems:'center',gap:'.5rem',marginBottom:'.5rem'}}>
                <span style={{fontSize:'1.6rem'}}>{lv.icon}</span>
                <div>
                  <div style={{fontWeight:900,color:'#fff',fontSize:'.95rem'}}>{lv.name}</div>
                  <div style={{fontSize:'.7rem',color:'rgba(255,255,255,.45)'}}>Level {lv.num}</div>
                </div>
              </div>
              <div className="xp-bar-track">
                <div className="xp-bar-fill" style={{width:lvPr.pct+'%'}}></div>
              </div>
              {nextLv && <div style={{fontSize:'.68rem',color:'rgba(255,255,255,.4)',marginTop:'.3rem',fontWeight:600}}>{lvPr.xpInLevel}/{lvPr.xpNeeded} XP → {nextLv.icon} {nextLv.name}</div>}
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div style={{background:'var(--card)',borderBottom:'1px solid var(--border)',padding:'.75rem 1.5rem',display:'flex',gap:'1.5rem',flexWrap:'wrap',fontSize:'.78rem',fontWeight:700,color:'var(--muted)'}}>
        <span>RAG legend:</span>
        <span style={{color:RAG_MAP.r}}>🔴 Not sure</span>
        <span style={{color:RAG_MAP.a}}>🟡 Getting there</span>
        <span style={{color:RAG_MAP.g}}>🟢 Confident</span>
      </div>

      {/* Sections */}
      <div style={{maxWidth:960,margin:'0 auto',padding:'1.5rem'}}>
        {DB_SECTIONS.map(meta => <SectionPanel key={meta.id} meta={meta} />)}
      </div>

      {/* Quick links */}
      <div style={{maxWidth:960,margin:'0 auto',padding:'0 1.5rem 2.5rem',display:'flex',gap:'1rem',flexWrap:'wrap'}}>
        <a href="fun-index.html" className="btn btn-ghost">← Home</a>
        <a href="fun-quiz.html" className="btn btn-primary">🎲 Mixed Quiz</a>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FunDashboardApp />);
