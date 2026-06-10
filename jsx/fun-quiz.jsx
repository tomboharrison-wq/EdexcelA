/* ============================================================
   fun-quiz.jsx v2 — Mixed quiz with Speed Mode, streaks & confetti
   ============================================================ */

function buildQuizPool(count) {
  const pool = [];
  if (!window.GEO_DATA) return pool;
  for (let sid = 1; sid <= 9; sid++) {
    const sec = window.GEO_DATA[sid];
    if (!sec) continue;
    sec.topics.forEach((topic) => {
      if (topic.mcq) topic.mcq.forEach(q => {
        pool.push({ type:'mcq', q:q.q, opts:q.opts, correct:q.correct,
          source:`S${sid} · ${topic.title}`, color:sec.color });
      });
      if (topic.truefalse) topic.truefalse.forEach(s => {
        pool.push({ type:'tf', statement:s.s, answer:s.a, correction:s.c,
          source:`S${sid} · ${topic.title}`, color:sec.color });
      });
    });
  }
  return pool.sort(() => Math.random() - .5).slice(0, count);
}

const COLOR_HEX_Q = { p1:'#0891b2', p2:'#4f46e5', p3:'#e11d48', ps:'#d97706' };
const LETTERS_Q = ['A','B','C','D'];

/* ── Level badge (reusable) ── */
function LevelBadge({ xp }) {
  if (!window.Geo || !xp) return null;
  const lv = window.Geo.getLevel(xp);
  return (
    <span className="level-badge">
      <span className="lv-icon">{lv.icon}</span>
      {lv.name}
      <span className="lv-num">Lv{lv.num}</span>
    </span>
  );
}

/* ── Timer bar ── */
function TimerBar({ timeLeft, total }) {
  const pct = (timeLeft / total) * 100;
  const col = pct > 50 ? 'var(--green)' : pct > 25 ? 'var(--yellow)' : 'var(--red)';
  return (
    <div className="timer-bar-wrap">
      <div className="timer-bar-track">
        <div className="timer-bar-fill" style={{ width: pct + '%', background: col }}></div>
      </div>
      <div className="timer-label" style={{ color: col }}>⏱ {timeLeft}s</div>
    </div>
  );
}

/* ── MCQ question card ── */
function QuizMCQ({ q, speedMode, timeLeft, timerTotal, onAnswer }) {
  const [selected, setSelected] = React.useState(null);

  /* If timed out externally */
  React.useEffect(() => {
    if (speedMode && timeLeft === 0 && selected === null) {
      setSelected(-1);
      onAnswer(false, 0);
    }
  }, [timeLeft]);

  function choose(i) {
    if (selected !== null) return;
    const correct = i === q.correct;
    setSelected(i);
    const xpBonus = speedMode ? Math.max(10, 5 + Math.ceil((timeLeft || 0) * 1.5)) : 15;
    onAnswer(correct, correct ? xpBonus : 0);
  }

  const c = COLOR_HEX_Q[q.color] || '#4f46e5';
  return (
    <div className="fade-up">
      {speedMode && selected === null && <TimerBar timeLeft={timeLeft} total={timerTotal} />}
      {selected === -1 && (
        <div style={{padding:'.6rem 1rem',borderRadius:'var(--radius-sm)',background:'var(--red-light)',color:'var(--red)',fontWeight:700,fontSize:'.88rem',marginBottom:'.8rem'}}>
          ⏰ Time's up! Answer: <strong>{LETTERS_Q[q.correct]}: {q.opts[q.correct]}</strong>
        </div>
      )}
      <div className="mcq-question">{q.q}</div>
      <div className="mcq-options">
        {q.opts.map((opt, i) => {
          let cls = "mcq-opt";
          if (selected !== null && selected !== -1) {
            if (i === q.correct) cls += " correct";
            else if (i === selected) cls += " wrong";
          } else if (selected === -1 && i === q.correct) cls += " correct";
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={selected !== null}>
              <span className="mcq-opt-letter">{LETTERS_Q[i]}</span>{opt}
            </button>
          );
        })}
      </div>
      {selected !== null && selected !== -1 && (
        <div className={"mcq-feedback" + (selected === q.correct ? " correct" : " wrong")}>
          {selected === q.correct ? "✓ Correct!" : "✗ Incorrect — answer: " + q.opts[q.correct]}
        </div>
      )}
    </div>
  );
}

/* ── T/F question card ── */
function QuizTF({ q, speedMode, timeLeft, timerTotal, onAnswer }) {
  const [answered, setAns] = React.useState(null);

  React.useEffect(() => {
    if (speedMode && timeLeft === 0 && answered === null) {
      setAns('timeout');
      onAnswer(false, 0);
    }
  }, [timeLeft]);

  function answer(val) {
    if (answered !== null) return;
    const correct = val === q.answer;
    setAns(val);
    onAnswer(correct, correct ? 10 : 0);
  }

  const correct = answered === q.answer;
  return (
    <div className="fade-up">
      {speedMode && answered === null && <TimerBar timeLeft={timeLeft} total={timerTotal} />}
      <div className="tf-statement" style={{ minHeight: 80 }}>{q.statement}</div>
      <div className="tf-buttons">
        <button
          className={"tf-btn true-btn" + (answered !== null ? (q.answer === true ? " correct" : answered === true ? " wrong" : "") : "")}
          onClick={() => answer(true)} disabled={answered !== null}>TRUE</button>
        <button
          className={"tf-btn false-btn" + (answered !== null ? (q.answer === false ? " correct" : answered === false ? " wrong" : "") : "")}
          onClick={() => answer(false)} disabled={answered !== null}>FALSE</button>
      </div>
      {answered !== null && !correct && q.correction && (
        <div className="tf-correction">💡 {q.correction}</div>
      )}
    </div>
  );
}

/* ── Main Quiz App ── */
function FunQuizApp() {
  const [quizSize, setQuizSize]   = React.useState(20);
  const [speedMode, setSpeedMode] = React.useState(false);
  const [questions, setQuestions] = React.useState(null);
  const [qi, setQi]               = React.useState(0);
  const [score, setScore]         = React.useState(0);
  const [done, setDone]           = React.useState(false);
  const [waiting, setWaiting]     = React.useState(false); // between questions
  const [streak, setStreak]       = React.useState(0);
  const [newLevel, setNewLevel]   = React.useState(null);

  /* Speed-mode timer */
  const TIMER_TOTAL = 20;
  const [timeLeft, setTimeLeft]   = React.useState(TIMER_TOTAL);
  const [timerActive, setTimerActive] = React.useState(false);
  const timerRef = React.useRef(null);

  const xp     = window.GeoProgress ? window.GeoProgress.getXP()   : 0;
  const name   = window.GeoProgress ? window.GeoProgress.getName() : '';

  /* Streak listener */
  React.useEffect(() => {
    if (!window.Geo) return;
    function handleStreak(s) { setStreak(s); }
    function handleLevel(lv) { setNewLevel(lv); }
    window.Geo.onStreakChange(handleStreak);
    window.Geo.onLevelUp(handleLevel);
    return () => { window.Geo.offStreakChange(handleStreak); window.Geo.offLevelUp(handleLevel); };
  }, []);

  /* Timer countdown */
  React.useEffect(() => {
    if (!timerActive || waiting) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setTimeLeft(t => { if (t <= 1) { clearInterval(timerRef.current); return 0; } return t - 1; });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timerActive, waiting]);

  function startQuiz(n, speed) {
    setQuizSize(n); setSpeedMode(speed);
    setQuestions(buildQuizPool(n));
    setQi(0); setScore(0); setDone(false); setWaiting(false); setStreak(0);
    if (speed) { setTimeLeft(TIMER_TOTAL); setTimerActive(true); }
  }

  function handleAnswer(correct, xpAmt) {
    clearInterval(timerRef.current);
    setTimerActive(false);
    setWaiting(true);
    if (correct) {
      setScore(s => s + 1);
      if (window.Geo) window.Geo.recordCorrect();
      if (window.GeoProgress && xpAmt) window.GeoProgress.addXP(xpAmt);
    } else {
      if (window.Geo) window.Geo.recordWrong();
    }
  }

  function nextQ() {
    setWaiting(false);
    if (qi + 1 >= questions.length) {
      const finalScore = score;
      if (window.GeoProgress) window.GeoProgress.addXP(finalScore >= questions.length * 0.8 ? 50 : finalScore >= questions.length * 0.5 ? 25 : 10);
      setDone(true);
    } else {
      setQi(i => i + 1);
      if (speedMode) { setTimeLeft(TIMER_TOTAL); setTimerActive(true); }
    }
  }

  const q = questions && questions[qi];

  /* ── Landing ── */
  if (!questions) return (
    <div>
      <nav className="site-nav">
        <a href="fun-index.html" className="logo">
          <span style={{background:'#0891b2',color:'#fff',borderRadius:6,padding:'2px 8px',fontSize:11,fontWeight:800}}>GEO</span>
          <span>GCSE Geography</span>
        </a>
        <div className="nav-right">
          {streak > 0 && <div className="nav-xp" style={{color:'#fb923c'}}>🔥 {streak}</div>}
          <LevelBadge xp={xp} />
          <div className="nav-xp">⭐ {xp} XP</div>
        </div>
      </nav>
      <div style={{maxWidth:600,margin:'4rem auto',padding:'0 1.5rem',textAlign:'center'}}>
        <div style={{fontSize:'3rem',marginBottom:'1rem'}}>🎲</div>
        <h1 style={{marginBottom:'.5rem'}}>Mixed Quiz</h1>
        <p style={{color:'var(--muted)',marginBottom:'2rem'}}>Questions from all 9 sections — pick your challenge:</p>

        <div style={{marginBottom:'1.5rem'}}>
          <div style={{fontSize:'.8rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'var(--muted)',marginBottom:'.75rem'}}>Normal mode</div>
          <div style={{display:'flex',gap:'.75rem',flexWrap:'wrap',justifyContent:'center'}}>
            {[10,20,30,50].map(n => (
              <button key={n} className="btn btn-primary" style={{fontSize:'1rem',padding:'.9rem 1.8rem'}} onClick={() => startQuiz(n, false)}>
                {n} Qs
              </button>
            ))}
          </div>
        </div>

        <div style={{background:'linear-gradient(135deg,rgba(245,158,11,.12),rgba(249,115,22,.12))',border:'2px solid rgba(245,158,11,.3)',borderRadius:'var(--radius)',padding:'1.2rem',marginBottom:'1.5rem'}}>
          <div style={{fontSize:'.8rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.08em',color:'#f59e0b',marginBottom:'.75rem'}}>⚡ Speed Round — 20 seconds per question!</div>
          <div style={{display:'flex',gap:'.75rem',flexWrap:'wrap',justifyContent:'center'}}>
            {[10,20,30].map(n => (
              <button key={n} className="btn" style={{fontSize:'1rem',padding:'.9rem 1.8rem',background:'linear-gradient(135deg,#f59e0b,#f97316)',color:'#fff'}} onClick={() => startQuiz(n, true)}>
                ⚡ {n} Qs
              </button>
            ))}
          </div>
        </div>

        <a href="fun-index.html" className="btn btn-ghost">← Back to Home</a>
      </div>
    </div>
  );

  /* ── Done screen ── */
  if (done) {
    const pct   = Math.round(score / questions.length * 100);
    const stars = pct >= 80 ? 3 : pct >= 50 ? 2 : 1;
    return (
      <div>
        {newLevel && <LevelUpModal level={newLevel} onClose={() => setNewLevel(null)} />}
        <nav className="site-nav">
          <a href="fun-index.html" className="logo">
            <span style={{background:'#0891b2',color:'#fff',borderRadius:6,padding:'2px 8px',fontSize:11,fontWeight:800}}>GEO</span>
            <span>GCSE Geography</span>
          </a>
          <div className="nav-right">
            <LevelBadge xp={window.GeoProgress ? window.GeoProgress.getXP() : xp} />
            <div className="nav-xp">⭐ {window.GeoProgress ? window.GeoProgress.getXP() : xp} XP</div>
          </div>
        </nav>
        <div style={{maxWidth:560,margin:'4rem auto',padding:'0 1.5rem',textAlign:'center'}}>
          <div style={{fontSize:'4rem',marginBottom:'1rem'}}>{pct===100?'🏆':pct>=80?'🌟':pct>=50?'👍':'📚'}</div>
          <h1 style={{marginBottom:'.3rem'}}>{score} / {questions.length}</h1>
          <p style={{color:'var(--muted)',marginBottom:'1rem',fontSize:'1.1rem'}}>{pct}% correct</p>
          <div className="stars-row" style={{justifyContent:'center',fontSize:'2rem',marginBottom:'1.2rem'}}>
            {[1,2,3].map(s => <span key={s} className={"star"+(s<=stars?" lit":" unlit")}>★</span>)}
          </div>
          {speedMode && pct >= 80 && (
            <div style={{background:'linear-gradient(135deg,rgba(245,158,11,.15),rgba(249,115,22,.15))',border:'1.5px solid rgba(245,158,11,.3)',borderRadius:'var(--radius-sm)',padding:'.75rem',fontSize:'.88rem',color:'#f97316',fontWeight:800,marginBottom:'1.2rem'}}>
              ⚡ Speed bonus earned! You nailed it under pressure.
            </div>
          )}
          {pct < 80 && (
            <p style={{background:'var(--p2-light)',borderRadius:'var(--radius-sm)',padding:'.75rem 1rem',fontSize:'.88rem',color:'var(--p2-dark)',marginBottom:'1.5rem'}}>
              💡 Check your <a href="fun-dashboard.html" style={{color:'var(--p2-dark)',fontWeight:800}}>Progress Dashboard</a> to see which topics need work.
            </p>
          )}
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <button className="btn btn-primary" onClick={() => startQuiz(quizSize, false)}>🎯 Normal</button>
            <button className="btn" style={{background:'linear-gradient(135deg,#f59e0b,#f97316)',color:'#fff'}} onClick={() => startQuiz(quizSize, true)}>⚡ Speed</button>
            <a href="fun-index.html" className="btn btn-ghost">← Home</a>
          </div>
        </div>
      </div>
    );
  }

  /* ── Question screen ── */
  const colorHex = COLOR_HEX_Q[q.color] || '#4f46e5';
  return (
    <div>
      {newLevel && <LevelUpModal level={newLevel} onClose={() => setNewLevel(null)} />}
      {streak >= 3 && <StreakToast key={streak} streak={streak} />}

      <nav className="site-nav">
        <a href="fun-index.html" className="logo">
          <span style={{background:'#0891b2',color:'#fff',borderRadius:6,padding:'2px 8px',fontSize:11,fontWeight:800}}>GEO</span>
          <span>GCSE Geography</span>
        </a>
        <div style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:'#94a3b8'}}>
          <span style={{opacity:.5}}>›</span>
          <span style={{color:'#fff',fontWeight:600}}>{qi+1} / {questions.length}</span>
          {speedMode && <span className="speed-badge" style={{marginLeft:4}}>⚡ Speed</span>}
        </div>
        <div className="nav-right">
          {streak >= 3 && <span className="streak-inline" style={{fontSize:'.75rem'}}>🔥 {streak}</span>}
          <div className="nav-xp" style={{color:'#4ade80'}}>✓ {score}</div>
          <div className="nav-xp">⭐ {xp} XP</div>
        </div>
      </nav>

      {/* Progress bar */}
      <div style={{height:5,background:'var(--border)'}}>
        <div style={{height:'100%',width:((qi+1)/questions.length*100)+'%',background:colorHex,transition:'width .3s ease'}}></div>
      </div>

      <div style={{maxWidth:680,margin:'2rem auto',padding:'0 1.5rem'}}>
        <div style={{display:'inline-block',background:colorHex+'22',color:colorHex,borderRadius:999,padding:'.25rem .8rem',fontSize:'.72rem',fontWeight:800,marginBottom:'1rem',border:`1.5px solid ${colorHex}44`}}>
          {q.source}
        </div>

        {q.type === 'mcq'
          ? <QuizMCQ q={q} speedMode={speedMode} timeLeft={timeLeft} timerTotal={TIMER_TOTAL} onAnswer={handleAnswer} />
          : <QuizTF  q={q} speedMode={speedMode} timeLeft={timeLeft} timerTotal={TIMER_TOTAL} onAnswer={handleAnswer} />}

        {waiting && (
          <div style={{marginTop:'1rem',textAlign:'right'}}>
            <button className="btn btn-primary" onClick={nextQ}>
              {qi+1 >= questions.length ? "See Results 🏆" : "Next →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<FunQuizApp />);
