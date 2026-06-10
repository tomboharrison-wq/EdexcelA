/* ============================================================
   fun-learn.jsx — Topic-by-topic learn page
   Expects window.__SECTION_ID__ to be set before loading
   ============================================================ */

/* ── Top Nav Bar ── */
function FunNav({ section, topicTitle, xp, name }) {
  const color = section ? section.color : 'p1';
  const colorMap = {'p1':'#0891b2','p2':'#4f46e5','p3':'#e11d48','ps':'#d97706'};
  const lv = window.Geo ? window.Geo.getLevel(xp || 0) : null;
  const streak = window.Geo ? window.Geo.getSessionStreak() : 0;
  return (
    <nav className="site-nav">
      <a href="fun-index.html" className="logo">
        <span style={{background:colorMap[color]||'#0891b2',color:'#fff',borderRadius:6,padding:'2px 8px',fontSize:11,fontWeight:800}}>GEO</span>
        <span>GCSE Geography</span>
      </a>
      {section && (
        <div style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:'#94a3b8'}}>
          <span style={{opacity:.5}}>›</span>
          <span style={{color:'#fff',fontWeight:600,maxWidth:140,overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{section.title}</span>
          {topicTitle && <><span style={{opacity:.5}}>›</span><span style={{maxWidth:130,overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{topicTitle}</span></>}
        </div>
      )}
      <div className="nav-right">
        {streak >= 3 && <span className="streak-inline" style={{fontSize:'.72rem',padding:'.25rem .6rem'}}>🔥 {streak}</span>}
        {lv && <span className="level-badge" style={{fontSize:'.72rem'}}><span className="lv-icon">{lv.icon}</span>{lv.name}<span className="lv-num">Lv{lv.num}</span></span>}
        <a href="fun-quiz.html" style={{background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',borderRadius:20,padding:'4px 10px',fontSize:12,fontWeight:700,color:'#fff',textDecoration:'none'}}>🎲 Quiz</a>
        <a href="fun-dashboard.html" style={{background:'rgba(255,255,255,.1)',border:'1px solid rgba(255,255,255,.15)',borderRadius:20,padding:'4px 10px',fontSize:12,fontWeight:700,color:'#fff',textDecoration:'none'}}>📊</a>
        <div className="nav-xp">⭐ {xp} XP</div>
      </div>
    </nav>
  );
}

/* ── Topic Sidebar ── */
function TopicSidebar({ topics, currentIdx, onSelect, doneSet, color }) {
  return (
    <aside className="topic-sidebar">
      <div className="sidebar-section-title">Topics</div>
      {topics.map((t, i) => {
        const isDone = doneSet.has(i);
        const isActive = i === currentIdx;
        let cls = "topic-btn";
        if (isActive) cls += " active " + color;
        else if (isDone) cls += " done";
        return (
          <button key={i} className={cls} onClick={() => onSelect(i)}>
            <span className={"topic-check" + (isDone ? " done" : "")}>{isDone ? "✓" : i+1}</span>
            {t.title}
          </button>
        );
      })}
    </aside>
  );
}

/* ── Activity Section wrapper ── */
function ActivityWrap({ icon, label, title, color, children }) {
  return (
    <div className="activity-section">
      <div className="activity-header">
        <div className={"activity-icon " + color}>{icon}</div>
        <div>
          <div className="activity-label">{label}</div>
          <div className="activity-title">{title}</div>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ── RAG Rating ── */
function RAGPicker({ tid, onDone }) {
  const stored = window.GeoProgress ? window.GeoProgress.getRAG(tid) : null;
  const [chosen, setChosen] = React.useState(stored);

  function pick(v) {
    setChosen(v);
    if (window.GeoProgress) window.GeoProgress.setRAG(tid, v);
    if (onDone) onDone();
  }

  return (
    <div className="rag-row">
      <span style={{fontSize:'.85rem',fontWeight:700,color:'var(--muted)'}}>How confident are you?</span>
      <button className={"rag-btn rag-r" + (chosen==='r'?' active':'')} onClick={() => pick('r')}>🔴 Not sure</button>
      <button className={"rag-btn rag-a" + (chosen==='a'?' active':'')} onClick={() => pick('a')}>🟡 Getting there</button>
      <button className={"rag-btn rag-g" + (chosen==='g'?' active':'')} onClick={() => pick('g')}>🟢 Confident</button>
    </div>
  );
}

/* ── Topic Complete Banner ── */
function TopicComplete({ topicIdx, sectionId, totalTopics, onNext }) {
  const tid = sectionId + '-' + topicIdx;
  React.useEffect(() => {
    if (window.GeoProgress) window.GeoProgress.markTopicDone(tid);
  }, []);

  return (
    <div className="topic-complete">
      <h3>🎉 Topic Complete!</h3>
      <p>You've worked through all the activities for this topic.</p>
      <RAGPicker tid={tid} />
      {topicIdx + 1 < totalTopics ? (
        <button className="btn btn-success" onClick={onNext} style={{marginTop:'1rem'}}>
          Next Topic →
        </button>
      ) : (
        <div style={{marginTop:'1rem'}}>
          <p style={{color:'var(--green)',fontWeight:700,marginBottom:'.8rem'}}>🏆 You've completed all topics in this section!</p>
          <a href="fun-index.html" className="btn btn-success">Back to Home</a>
        </div>
      )}
    </div>
  );
}

/* ── Main Topic View ── */
function TopicView({ section, sectionId, topic, topicIdx, onNext, onXP }) {
  const color = section.color;
  const tid = sectionId + '-' + topicIdx;
  const [showComplete, setShowComplete] = React.useState(false);

  const handleScroll = React.useCallback(() => {
    const el = document.getElementById('topic-bottom');
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) setShowComplete(true);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <main className="learn-main">
      {/* Hero */}
      <div className={"topic-hero " + color}>
        <div className="spec-tag">{topic.spec}</div>
        <h2>{topic.title}</h2>
        <p>{section.title}</p>
        <div className="topic-hero-meta">
          {topicIdx > 0 && (
            <button className="topic-nav-btn" onClick={() => onNext(topicIdx - 1)}>← Prev topic</button>
          )}
          <span style={{fontSize:'.8rem',opacity:.7}}>{topicIdx + 1} of {section.topics.length}</span>
          {topicIdx + 1 < section.topics.length && (
            <button className="topic-nav-btn" onClick={() => onNext(topicIdx + 1)}>Next topic →</button>
          )}
        </div>
      </div>

      {/* 1. Flashcards */}
      {topic.flashcards && topic.flashcards.length > 0 && (
        <ActivityWrap icon="🃏" label="Activity 1 · Flashcards" title="Key Terms & Definitions" color={color}>
          <FlashcardDeck cards={topic.flashcards} color={color} onXP={onXP} />
        </ActivityWrap>
      )}

      {/* 2. True / False */}
      {topic.truefalse && topic.truefalse.length > 0 && (
        <ActivityWrap icon="✅" label="Activity 2 · True or False?" title="Quick-fire Statements" color={color}>
          <TrueFalse statements={topic.truefalse} color={color}
            onScore={(s,t) => { if(onXP && s>0) onXP(s*8); }} />
        </ActivityWrap>
      )}

      {/* 3. Matching */}
      {topic.match && topic.match.pairs && topic.match.pairs.length > 0 && (
        <ActivityWrap icon="🔗" label="Activity 3 · Matching" title="Match Terms to Definitions" color={color}>
          <MatchingGame pairs={topic.match.pairs} color={color} onXP={onXP} />
        </ActivityWrap>
      )}

      {/* 4. MCQ Quiz */}
      {topic.mcq && topic.mcq.length > 0 && (
        <ActivityWrap icon="🎯" label="Activity 4 · Quiz" title="Multiple Choice Questions" color={color}>
          <MCQQuiz questions={topic.mcq} tid={tid} color={color}
            onScore={(s,t) => { if(onXP) onXP(s*15); }} />
        </ActivityWrap>
      )}

      {/* 5. Cloze / Fill in the Blanks */}
      {topic.flashcards && topic.flashcards.length > 0 && (
        <ActivityWrap icon="🔡" label="Activity 5 · Fill in the Blanks" title="Complete the sentences" color={color}>
          <ClozeActivity cards={topic.flashcards} color={color} onXP={onXP} />
        </ActivityWrap>
      )}

      {/* 6. Exam Question */}
      {topic.exam && (
        <ActivityWrap icon="📝" label="Activity 6 · Exam Practice" title="Extended Writing with Timer" color={color}>
          <ExamQuestion exam={topic.exam} color={color} />
        </ActivityWrap>
      )}

      {/* Bottom anchor for scroll detection */}
      <div id="topic-bottom"></div>

      {/* Show complete banner once user scrolls to bottom */}
      {showComplete && (
        <TopicComplete
          topicIdx={topicIdx}
          sectionId={sectionId}
          totalTopics={section.topics.length}
          onNext={() => onNext(topicIdx + 1)}
        />
      )}
    </main>
  );
}

/* ── Root App ── */
function FunLearnApp() {
  const sid = window.__SECTION_ID__;
  const section = window.GEO_DATA && window.GEO_DATA[sid];
  const [topicIdx, setTopicIdx] = React.useState(0);
  const [xp, setXp] = React.useState(window.GeoProgress ? window.GeoProgress.getXP() : 0);
  const [name] = React.useState(window.GeoProgress ? window.GeoProgress.getName() : '');
  const [doneSet, setDoneSet] = React.useState(() => {
    if (!window.GeoProgress || !section) return new Set();
    return new Set(section.topics.map((_,i) => i).filter(i => window.GeoProgress.isTopicDone(sid+'-'+i)));
  });

  function addXP(n) {
    if (window.GeoProgress) {
      const total = window.GeoProgress.addXP(n);
      setXp(total);
    }
  }

  function selectTopic(i) {
    setTopicIdx(i);
    // refresh done set
    if (window.GeoProgress && section) {
      setDoneSet(new Set(section.topics.map((_,j) => j).filter(j => window.GeoProgress.isTopicDone(sid+'-'+j))));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!section) {
    return (
      <div>
        <FunNav xp={xp} name={name} />
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading section data…</p>
        </div>
      </div>
    );
  }

  const topic = section.topics[topicIdx];

  return (
    <div>
      <FunNav section={section} topicTitle={topic && topic.title} xp={xp} name={name} />
      <div className="learn-layout">
        <TopicSidebar
          topics={section.topics}
          currentIdx={topicIdx}
          onSelect={selectTopic}
          doneSet={doneSet}
          color={section.color}
        />
        {topic ? (
          <TopicView
            section={section}
            sectionId={sid}
            topic={topic}
            topicIdx={topicIdx}
            onNext={selectTopic}
            onXP={addXP}
          />
        ) : (
          <div className="loading-screen"><div className="spinner"></div></div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FunLearnApp />);
