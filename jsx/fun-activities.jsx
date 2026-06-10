/* ============================================================
   fun-activities.jsx v3 — Flashcards · MCQ · Match · T/F · Cloze · Exam
   Now with: confetti · session streaks · speed-round timer · level-up
   ============================================================ */

/* ── Stop words ── */
const ACT_STOP = new Set([
  'the','and','are','but','for','not','that','this','with','have','from','they',
  'which','when','where','more','than','also','into','over','such','been','each',
  'then','its','was','were','can','will','has','had','may','upon','what','some',
  'how','because','about','after','before','most','only','very','both','just',
  'even','their','there','these','those','would','could','should','does','like',
  'make','made','year','your','our','his','her','well','lead','use','give',
  'take','come','long','high','low','see','get','let','end','too','much','while',
  'less','many','through','between','during','without','within','across','against'
]);

function actGetKeywords(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/)
    .filter(w => w.length > 3 && !ACT_STOP.has(w));
}

/* ── Helpers ─────────────────────────────────────── */
function geoAddXP(n, el) {
  if (window.GeoProgress) window.GeoProgress.addXP(n); // level-up patched in gamification.js
  if (window.Geo) window.Geo.triggerConfetti(el || null);
  /* float +XP label */
  if (el) {
    try {
      const r = el.getBoundingClientRect();
      const span = document.createElement('span');
      span.className = 'xp-float';
      span.textContent = '+' + n + ' XP';
      span.style.left = (r.left + r.width / 2 - 24) + 'px';
      span.style.top  = (r.top + window.scrollY - 10) + 'px';
      document.body.appendChild(span);
      setTimeout(() => span.remove(), 1300);
    } catch(e){}
  }
}

/* ── Streak Toast ─────────────────────────────────── */
function StreakToast({ streak }) {
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, [streak]);
  if (!visible || streak < 3) return null;
  const msgs = {3:'🔥 3 in a row!', 5:'🔥🔥 5 streak!', 10:'🔥🔥🔥 10 streak!!'};
  const msg = msgs[streak] || (streak % 5 === 0 ? `🔥 ${streak} streak!` : `🔥 ${streak} in a row!`);
  return <div className="streak-toast">{msg}</div>;
}

/* ── Level-Up Modal ───────────────────────────────── */
function LevelUpModal({ level, onClose }) {
  React.useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, []);
  if (!level) return null;
  return (
    <div className="levelup-overlay" onClick={onClose}>
      <div className="levelup-card" onClick={e => e.stopPropagation()}>
        <div className="levelup-icon">{level.icon}</div>
        <div className="levelup-label">Level Up!</div>
        <div className="levelup-name">{level.name}</div>
        <div className="levelup-sub">You reached Level {level.num} — keep going!</div>
        <button className="btn btn-primary" onClick={onClose}>Awesome! →</button>
      </div>
    </div>
  );
}

/* ── XP Float helper ──────────────────────────────── */
function useXPAndStreak(onXP) {
  const [streak, setStreak] = React.useState(0);
  const [toastKey, setToastKey] = React.useState(0);
  const [newLevel, setNewLevel] = React.useState(null);

  React.useEffect(() => {
    if (!window.Geo) return;
    function handleStreak(s) { setStreak(s); if (s >= 3) setToastKey(k => k+1); }
    function handleLevel(lv) { setNewLevel(lv); }
    window.Geo.onStreakChange(handleStreak);
    window.Geo.onLevelUp(handleLevel);
    return () => {
      window.Geo.offStreakChange(handleStreak);
      window.Geo.offLevelUp(handleLevel);
    };
  }, []);

  function correct(n, el) {
    if (window.Geo) window.Geo.recordCorrect();
    if (onXP) onXP(n);
    geoAddXP(n, el);
  }

  function wrong() {
    if (window.Geo) window.Geo.recordWrong();
  }

  return { streak, toastKey, newLevel, setNewLevel, correct, wrong };
}

/* ══════════════════════════════════════════
   FLASHCARD DECK (spaced repetition)
══════════════════════════════════════════ */
function FlashcardDeck({ cards, color, tid, onXP }) {
  const ratings0 = React.useMemo(() => {
    if (!window.GeoProgress || !tid) return {};
    return window.GeoProgress.getTopicCardRatings(tid);
  }, [tid]);

  function buildDeck(ratings) {
    const learning = [], got = [];
    cards.forEach((c, i) => { (ratings[i] === 'got' ? got : learning).push(i); });
    return [...learning, ...got];
  }

  const [deck, setDeck]       = React.useState(() => buildDeck(ratings0));
  const [pos, setPos]         = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [ratings, setRatings] = React.useState(ratings0);
  const { correct } = useXPAndStreak(onXP);

  const idx    = deck[pos] ?? 0;
  const card   = cards[idx];
  const rating = ratings[idx] || 'new';
  const gotCount      = Object.values(ratings).filter(r => r === 'got').length;
  const learningCount = cards.length - gotCount;

  function rate(r) {
    const newRatings = { ...ratings, [idx]: r };
    setRatings(newRatings);
    if (window.GeoProgress && tid) window.GeoProgress.setCardRating(tid, idx, r);
    if (r === 'got') correct(5);
    setFlipped(false);
    setTimeout(() => {
      const newDeck = buildDeck(newRatings);
      setDeck(newDeck);
      setPos(p => Math.min(p + 1, newDeck.length - 1));
    }, 150);
  }

  function shuffle() {
    setFlipped(false);
    setDeck([...deck].sort(() => Math.random() - .5));
    setPos(0);
  }

  return (
    <div className="flashcard-area fade-up">
      <div style={{ display:'flex', gap:'1rem', alignItems:'center', fontSize:'.8rem', fontWeight:700 }}>
        <span style={{ color:'var(--green)' }}>✓ Got it: {gotCount}</span>
        <span style={{ color:'var(--red)' }}>↺ Learning: {learningCount}</span>
        <span style={{ color:'var(--muted)' }}>{pos+1}/{deck.length}</span>
      </div>

      <div className="flashcard-scene" onClick={() => setFlipped(f => !f)} role="button" aria-label="Flip card">
        <div className={"flashcard-inner" + (flipped ? " flipped" : "")}>
          <div className="flashcard-face flashcard-front">
            {rating === 'got' && <div style={{position:'absolute',top:10,right:12,fontSize:'.7rem',color:'var(--green)',fontWeight:800}}>✓ Got it</div>}
            <div className="card-q">{card.q}</div>
            <div className="flashcard-hint">Tap to reveal answer</div>
          </div>
          <div className="flashcard-face flashcard-back">
            <div className="card-a">{card.a}</div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="pop-in" style={{ display:'flex', gap:'.75rem', justifyContent:'center', flexWrap:'wrap' }}>
          <button className="btn btn-success" onClick={() => rate('got')}>✓ Got it +5 XP</button>
          <button style={{ background:'var(--red)', color:'#fff', border:'none', borderRadius:'var(--radius-sm)', padding:'.7rem 1.4rem', fontFamily:'var(--sans)', fontWeight:800, fontSize:'.9rem', cursor:'pointer' }}
            onClick={() => rate('learning')}>↺ Still learning</button>
        </div>
      )}

      <div className="flashcard-nav">
        <button className="fc-btn" onClick={() => { setFlipped(false); setPos(p => Math.max(0,p-1)); }} disabled={pos===0}>← Prev</button>
        <button className={"btn btn-" + color} onClick={shuffle}>🔀 Shuffle</button>
        <button className="fc-btn" onClick={() => { setFlipped(false); setPos(p => Math.min(deck.length-1,p+1)); }} disabled={pos>=deck.length-1}>Next →</button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MCQ QUIZ (with optional Speed Round timer)
══════════════════════════════════════════ */
function MCQQuiz({ questions, tid, color, onScore }) {
  const [mode, setMode]       = React.useState(null); // null=pick, 'normal', 'speed'
  const [qi, setQi]           = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [score, setScore]     = React.useState(0);
  const [done, setDone]       = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(20);
  const [timerActive, setTimerActive] = React.useState(false);
  const timerRef = React.useRef(null);
  const btnRef   = React.useRef(null);
  const letters  = ['A','B','C','D'];
  const { streak, toastKey, newLevel, setNewLevel, correct, wrong } = useXPAndStreak(null);

  const q = questions[qi];

  /* Timer effect for speed mode */
  React.useEffect(() => {
    if (!timerActive || selected !== null) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setSelected(-1); // -1 = timed out
          wrong();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timerActive, selected, qi]);

  function startMode(m) {
    setMode(m);
    setQi(0); setSelected(null); setScore(0); setDone(false);
    if (m === 'speed') { setTimeLeft(20); setTimerActive(true); }
  }

  function choose(i) {
    if (selected !== null) return;
    clearInterval(timerRef.current);
    setTimerActive(false);
    setSelected(i);
    const isCorrect = i === q.correct;
    if (isCorrect) {
      const xpAmt = mode === 'speed' ? Math.max(10, 5 + Math.ceil(timeLeft * 1.5)) : 15;
      correct(xpAmt, btnRef.current);
      setScore(s => s + 1);
    } else {
      wrong();
    }
  }

  function next() {
    const finalScore = score;
    setNewLevel(null);
    if (qi + 1 >= questions.length) {
      if (onScore) onScore(finalScore, questions.length);
      if (window.GeoProgress) window.GeoProgress.setMCQScore(tid, finalScore, questions.length);
      setDone(true);
    } else {
      setSelected(null);
      setQi(i => i + 1);
      if (mode === 'speed') { setTimeLeft(20); setTimerActive(true); }
    }
  }

  function restart(m) {
    setMode(m || mode); setQi(0); setSelected(null); setScore(0); setDone(false);
    if ((m || mode) === 'speed') { setTimeLeft(20); setTimerActive(true); }
    else setTimerActive(false);
  }

  /* Mode picker */
  if (!mode) return (
    <div className="fade-up" style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
      <p style={{fontSize:'.88rem',color:'var(--muted)',fontWeight:600,margin:0}}>{questions.length} questions — choose your mode:</p>
      <div style={{display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
        <button className={"btn btn-" + color} onClick={() => startMode('normal')}>🎯 Normal mode</button>
        <button className="btn" style={{background:'linear-gradient(135deg,#f59e0b,#f97316)',color:'#fff'}} onClick={() => startMode('speed')}>
          ⚡ Speed Round (20s/Q)
        </button>
      </div>
    </div>
  );

  /* Done screen */
  if (done) {
    const pct = Math.round(score/questions.length*100);
    const stars = pct>=80?3:pct>=50?2:1;
    return (
      <div className="fade-up" style={{textAlign:'center',padding:'1rem'}}>
        {newLevel && <LevelUpModal level={newLevel} onClose={() => setNewLevel(null)} />}
        <div style={{fontSize:'3rem',marginBottom:'.5rem'}}>{pct===100?'🏆':pct>=80?'⭐':pct>=50?'👍':'📚'}</div>
        <div style={{fontSize:'1.5rem',fontWeight:900}}>{score}/{questions.length}</div>
        <div style={{color:'var(--muted)',marginBottom:'1rem'}}>{pct}% correct</div>
        <div className="stars-row" style={{justifyContent:'center',marginBottom:'1.2rem'}}>
          {[1,2,3].map(s => <span key={s} className={"star"+(s<=stars?" lit":" unlit")}>★</span>)}
        </div>
        {mode === 'speed' && pct >= 80 && (
          <div style={{marginBottom:'1rem',fontSize:'.85rem',color:'#f97316',fontWeight:800}}>⚡ Speed bonus XP earned!</div>
        )}
        <div style={{display:'flex',gap:'.6rem',justifyContent:'center',flexWrap:'wrap'}}>
          <button className={"btn btn-" + color} onClick={() => restart('normal')}>🎯 Normal</button>
          <button className="btn" style={{background:'linear-gradient(135deg,#f59e0b,#f97316)',color:'#fff'}} onClick={() => restart('speed')}>⚡ Speed</button>
        </div>
      </div>
    );
  }

  const timerPct  = (timeLeft / 20) * 100;
  const timerCol  = timerPct > 50 ? 'var(--green)' : timerPct > 25 ? 'var(--yellow)' : 'var(--red)';

  return (
    <div className="fade-up">
      {newLevel && <LevelUpModal level={newLevel} onClose={() => setNewLevel(null)} />}
      {streak >= 3 && <StreakToast key={toastKey} streak={streak} />}

      {/* Mode badge + score row */}
      <div style={{display:'flex',alignItems:'center',gap:'.6rem',marginBottom:'.8rem',flexWrap:'wrap'}}>
        {mode === 'speed' && <span className="speed-badge">⚡ Speed Round</span>}
        <span className="mcq-score-badge">✓ {score}/{questions.length}</span>
        {streak >= 3 && <span className="streak-inline">🔥 {streak}</span>}
        <span style={{marginLeft:'auto',fontSize:'.78rem',color:'var(--muted)',fontWeight:600}}>{qi+1}/{questions.length}</span>
      </div>

      {/* Timer bar */}
      {mode === 'speed' && selected === null && (
        <div className="timer-bar-wrap">
          <div className="timer-bar-track">
            <div className="timer-bar-fill" style={{width:timerPct+'%',background:timerCol}}></div>
          </div>
          <div className="timer-label" style={{color:timerCol}}>⏱ {timeLeft}s</div>
        </div>
      )}

      {selected === -1 && (
        <div style={{padding:'.6rem 1rem',borderRadius:'var(--radius-sm)',background:'var(--red-light)',color:'var(--red)',fontWeight:700,fontSize:'.88rem',marginBottom:'.8rem'}}>
          ⏰ Time's up! The answer was <strong>{letters[q.correct]}: {q.opts[q.correct]}</strong>
        </div>
      )}

      <div className="mcq-question" ref={btnRef}>{qi+1}. {q.q}</div>
      <div className="mcq-options">
        {q.opts.map((opt, i) => {
          let cls = "mcq-opt";
          if (selected !== null && selected !== -1) {
            if (i === q.correct) cls += " correct";
            else if (i === selected) cls += " wrong";
          } else if (selected === -1) {
            if (i === q.correct) cls += " correct";
          }
          return (
            <button key={i} className={cls} onClick={() => choose(i)} disabled={selected !== null}>
              <span className="mcq-opt-letter">{letters[i]}</span>{opt}
            </button>
          );
        })}
      </div>

      {selected !== null && selected !== -1 && (
        <div className={"mcq-feedback"+(selected===q.correct?" correct":" wrong")}>
          {selected===q.correct
            ? `✓ Correct! ${mode==='speed' ? `⚡ +${Math.max(10,5+Math.ceil(timeLeft*1.5))} XP` : '+15 XP'}`
            : "✗ Incorrect — the answer was: " + q.opts[q.correct]}
        </div>
      )}

      <div className="mcq-nav">
        <span></span>
        {selected !== null && (
          <button className={"btn btn-" + color} onClick={next}>
            {qi+1>=questions.length ? "See Results" : "Next →"}
          </button>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   MATCHING GAME
══════════════════════════════════════════ */
function MatchingGame({ pairs, color, onXP }) {
  const [terms] = React.useState(() => [...pairs.map((p,i)=>({...p,id:'t'+i}))].sort(()=>Math.random()-.5));
  const [defs, setDefs] = React.useState(() => [...pairs.map((p,i)=>({...p,id:'d'+i}))].sort(()=>Math.random()-.5));
  const [selTerm, setSelTerm] = React.useState(null);
  const [selDef, setSelDef]   = React.useState(null);
  const [matched, setMatched] = React.useState([]);
  const [wrong, setWrong]     = React.useState([]);
  const [complete, setComplete] = React.useState(false);
  const [bounce, setBounce]   = React.useState(null);
  const { correct, wrong: recordWrong } = useXPAndStreak(onXP);

  React.useEffect(() => {
    if (!selTerm || !selDef) return;
    if (selTerm.term === selDef.term) {
      const nm = [...matched, selTerm.term];
      setMatched(nm);
      setBounce(selTerm.term);
      setTimeout(() => setBounce(null), 400);
      correct(10);
      if (nm.length === pairs.length) {
        setComplete(true);
        if (window.Geo) window.Geo.triggerFireworks();
      }
    } else {
      setWrong([selTerm.id, selDef.id]);
      recordWrong();
      setTimeout(() => setWrong([]), 700);
    }
    setTimeout(() => { setSelTerm(null); setSelDef(null); }, 700);
  }, [selTerm, selDef]);

  function restart() { setMatched([]); setWrong([]); setComplete(false); setSelTerm(null); setSelDef(null); }

  if (complete) return (
    <div className="fade-up" style={{textAlign:'center',padding:'1.5rem'}}>
      <div style={{fontSize:'2.5rem',marginBottom:'.5rem'}}>🎯</div>
      <div style={{fontSize:'1.3rem',fontWeight:900}}>All matched!</div>
      <div style={{color:'var(--muted)',margin:'.5rem 0 1rem'}}>Great work — +{pairs.length * 10} XP earned</div>
      <button className={"btn btn-" + color} onClick={restart}>Play Again</button>
    </div>
  );

  return (
    <div className="fade-up">
      <div style={{fontSize:'.82rem',color:'var(--muted)',marginBottom:'.8rem',fontWeight:600}}>
        {matched.length}/{pairs.length} matched — tap a term, then its definition
      </div>
      <div className="match-grid">
        {[terms, defs].map((list, side) => (
          <div key={side} style={{display:'flex',flexDirection:'column',gap:'.5rem'}}>
            {list.map(item => {
              const isM   = matched.includes(item.term);
              const isSel = side===0 ? selTerm?.id===item.id : selDef?.id===item.id;
              const isW   = wrong.includes(item.id);
              const isB   = bounce === item.term;
              return (
                <button key={item.id}
                  className={"match-item"+(isM?" matched"+(isB?" match-bounce":""):isSel?" selected":isW?" wrong":"")}
                  onClick={() => !isM && (side===0 ? setSelTerm(item) : setSelDef(item))}
                  disabled={isM}>
                  {side===0 ? item.term : item.def}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   TRUE / FALSE
══════════════════════════════════════════ */
function TrueFalse({ statements, color, onScore }) {
  const [idx, setIdx]     = React.useState(0);
  const [answered, setAns] = React.useState(null);
  const [results, setRes] = React.useState([]);
  const [done, setDone]   = React.useState(false);
  const { streak, toastKey, newLevel, setNewLevel, correct, wrong } = useXPAndStreak(null);
  const s = statements[idx];

  function answer(val) {
    if (answered !== null) return;
    setAns(val);
    const isCorrect = val === s.a;
    const nr = [...results, isCorrect];
    if (isCorrect) correct(8);
    else wrong();
    setTimeout(() => {
      if (idx+1 >= statements.length) {
        const sc = nr.filter(Boolean).length;
        if (onScore) onScore(sc, statements.length);
        setRes(nr); setDone(true);
      } else { setRes(nr); setAns(null); setIdx(i=>i+1); }
    }, 900);
  }

  function restart() { setIdx(0); setAns(null); setRes([]); setDone(false); }

  if (done) {
    const sc = results.filter(Boolean).length;
    const pct = Math.round(sc/statements.length*100);
    return (
      <div className="fade-up" style={{textAlign:'center',padding:'1.5rem'}}>
        {newLevel && <LevelUpModal level={newLevel} onClose={() => setNewLevel(null)} />}
        <div style={{fontSize:'2.5rem',marginBottom:'.5rem'}}>{pct===100?'🏆':pct>=60?'✅':'📚'}</div>
        <div style={{fontSize:'1.5rem',fontWeight:900}}>{sc}/{statements.length} correct — {pct}%</div>
        <div style={{margin:'.8rem 0 1.2rem'}}>
          <button className={"btn btn-"+color} onClick={restart}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      {newLevel && <LevelUpModal level={newLevel} onClose={() => setNewLevel(null)} />}
      {streak >= 3 && <StreakToast key={toastKey} streak={streak} />}

      {/* Streak inline */}
      {streak >= 3 && (
        <div style={{marginBottom:'.6rem',display:'flex',justifyContent:'flex-end'}}>
          <span className="streak-inline">🔥 {streak} in a row!</span>
        </div>
      )}

      <div className="tf-progress">
        {statements.map((_,i) => {
          let cls="tf-dot";
          if (i<results.length) cls+=results[i]?" correct":" wrong";
          else if (i===idx) cls+=" current";
          return <div key={i} className={cls}></div>;
        })}
      </div>
      <div className="tf-statement">{s.s}</div>
      <div className="tf-buttons">
        <button className={"tf-btn true-btn"+(answered!==null?(s.a===true?" correct":answered===true?" wrong":""):"")}
          onClick={()=>answer(true)} disabled={answered!==null}>TRUE</button>
        <button className={"tf-btn false-btn"+(answered!==null?(s.a===false?" correct":answered===false?" wrong":""):"")}
          onClick={()=>answer(false)} disabled={answered!==null}>FALSE</button>
      </div>
      {answered!==null && answered!==s.a && s.c && <div className="tf-correction">💡 {s.c}</div>}
    </div>
  );
}

/* ══════════════════════════════════════════
   AUTO-CLOZE (Fill in the Blanks)
══════════════════════════════════════════ */
function generateCloze(cards) {
  return cards.map((card, ci) => {
    const text = card.a.replace(/<[^>]+>/g,'');
    const kw   = [...new Set(actGetKeywords(text))].filter(w => w.length > 4).slice(0, 3);
    if (kw.length === 0) return null;
    let blanked = text;
    const usedKw = [];
    kw.forEach(w => {
      const re = new RegExp('\\b' + w + '\\b', 'i');
      if (re.test(blanked)) {
        blanked = blanked.replace(re, `[[${w}]]`);
        usedKw.push(w.toLowerCase());
      }
    });
    if (usedKw.length === 0) return null;
    const allKw      = cards.filter((_,i)=>i!==ci).flatMap(c => actGetKeywords(c.a)).filter(w=>w.length>4 && !usedKw.includes(w));
    const distractors = [...new Set(allKw)].sort(()=>Math.random()-.5).slice(0, 2);
    const wordBank    = [...usedKw, ...distractors].sort(()=>Math.random()-.5);
    return { question:card.q, blanked, answers:usedKw, wordBank };
  }).filter(Boolean);
}

function ClozeActivity({ cards, color, onXP }) {
  const clozeCards = React.useMemo(() => generateCloze(cards), []);
  const [ci, setCi]           = React.useState(0);
  const [filled, setFilled]   = React.useState({});
  const [selected, setSelected] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [score, setScore]     = React.useState(0);
  const [done, setDone]       = React.useState(false);
  const { correct, wrong } = useXPAndStreak(onXP);

  if (!clozeCards.length) return <div style={{color:'var(--muted)',fontSize:'.9rem'}}>No cloze activities for this topic.</div>;
  const c = clozeCards[ci];
  const parts = c.blanked.split(/\[\[([^\]]+)\]\]/);

  function pickWord(word) {
    if (checked) return;
    if (selected === word) { setSelected(null); return; }
    setSelected(word);
    const unfilledIdx = c.answers.findIndex((_,i) => !filled[i]);
    if (unfilledIdx >= 0) {
      setFilled(f => ({ ...f, [unfilledIdx]: word }));
      setSelected(null);
    }
  }

  function clearBlank(bi) {
    if (checked) return;
    setFilled(f => { const n={...f}; delete n[bi]; return n; });
  }

  function check() {
    const numCorrect = c.answers.filter((a,i) => filled[i] && filled[i].toLowerCase() === a.toLowerCase()).length;
    const isAllCorrect = numCorrect === c.answers.length;
    if (isAllCorrect) correct(15);
    else if (numCorrect > 0) { if (window.GeoProgress) window.GeoProgress.addXP(5); }
    else wrong();
    setScore(s => s + numCorrect);
    setChecked(true);
  }

  function next() {
    setFilled({}); setSelected(null); setChecked(false);
    if (ci+1 >= clozeCards.length) setDone(true);
    else setCi(i=>i+1);
  }

  function restart() { setCi(0); setFilled({}); setSelected(null); setChecked(false); setScore(0); setDone(false); }

  if (done) {
    const total = clozeCards.reduce((t,c)=>t+c.answers.length, 0);
    const pct   = Math.round(score/total*100);
    return (
      <div className="fade-up" style={{textAlign:'center',padding:'1.5rem'}}>
        <div style={{fontSize:'2.5rem',marginBottom:'.5rem'}}>{pct>=80?'🏆':pct>=50?'✅':'📚'}</div>
        <div style={{fontSize:'1.5rem',fontWeight:900}}>{score}/{total} blanks correct — {pct}%</div>
        <div style={{margin:'1rem 0'}}><button className={"btn btn-"+color} onClick={restart}>Try Again</button></div>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <div style={{fontSize:'.82rem',color:'var(--muted)',fontWeight:600,marginBottom:'.8rem'}}>{ci+1}/{clozeCards.length} — {c.question}</div>
      <div style={{marginBottom:'1rem'}}>
        <div style={{fontSize:'.72rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.4rem'}}>Word Bank</div>
        <div className="word-bank">
          {c.wordBank.map((w,i) => {
            const isUsed = Object.values(filled).includes(w);
            return (
              <button key={i}
                className={"word-chip"+(selected===w?" selected":isUsed?" used":"")}
                onClick={() => !isUsed && pickWord(w)}
                disabled={isUsed}>
                {w}
              </button>
            );
          })}
        </div>
      </div>

      <div className="blanks-sentence">
        {parts.map((part, pi) => {
          if (pi % 2 === 0) return <span key={pi}>{part}</span>;
          const bi  = Math.floor(pi/2);
          const val = filled[bi];
          let cls   = "blank-slot";
          if (checked) cls += val && val.toLowerCase()===c.answers[bi]?.toLowerCase() ? " correct" : " wrong";
          else if (val) cls += " filled";
          return (
            <span key={pi} className={cls} onClick={() => clearBlank(bi)} title={val ? "Click to remove" : ""}>
              {val || '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
            </span>
          );
        })}
      </div>

      <div style={{display:'flex',gap:'.75rem',flexWrap:'wrap',marginTop:'.8rem',alignItems:'center'}}>
        {!checked && Object.keys(filled).length === c.answers.length && (
          <button className={"btn btn-"+color} onClick={check}>Check Answers</button>
        )}
        {checked && <button className={"btn btn-"+color} onClick={next}>{ci+1>=clozeCards.length?"Finish →":"Next →"}</button>}
        {!checked && <button className="btn btn-ghost" onClick={() => setFilled({})}>Clear</button>}
      </div>

      {checked && (
        <div style={{marginTop:'.8rem',fontSize:'.88rem',fontWeight:600}}>
          {c.answers.map((a,i) => (
            <div key={i} style={{color: filled[i]?.toLowerCase()===a?'var(--green)':'var(--red)', marginBottom:'.2rem'}}>
              {filled[i]?.toLowerCase()===a?'✅':'❌'} <strong>"{a}"</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════
   EXAM QUESTION (timer + keyword marking)
══════════════════════════════════════════ */
function markExamAnswer(studentText, modelText, totalMarks) {
  const sentences  = modelText.split(/(?<=[.!\n])/).map(s=>s.trim()).filter(s=>s.length>25);
  const studentKw  = new Set(actGetKeywords(studentText));
  const points     = sentences.map(sentence => {
    const kw    = [...new Set(actGetKeywords(sentence))].slice(0,6);
    const hits  = kw.filter(w=>studentKw.has(w));
    const score = kw.length>0 ? hits.length/Math.min(kw.length,4) : 0;
    const label = sentence.replace(/<[^>]+>/g,'').substring(0,72)+(sentence.length>72?'…':'');
    return { label, covered: score>=0.45 };
  });
  const covered = points.filter(p=>p.covered).length;
  const pct     = points.length>0 ? covered/points.length : 0;
  return { points, suggestedMark: Math.min(totalMarks, Math.round(pct*totalMarks)), totalMarks };
}

function ExamQuestion({ exam, color }) {
  const [answer, setAnswer]     = React.useState('');
  const [revealed, setRevealed] = React.useState(false);
  const [marking, setMarking]   = React.useState(null);
  const [timerOn, setTimerOn]   = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(exam.marks * 120);
  const [timerDone, setTimerDone] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (!timerOn) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); setTimerDone(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timerOn]);

  function resetTimer() { clearInterval(timerRef.current); setTimeLeft(exam.marks*120); setTimerOn(false); setTimerDone(false); }

  const mins      = String(Math.floor(timeLeft/60)).padStart(2,'0');
  const secs      = String(timeLeft%60).padStart(2,'0');
  const timerPct  = timeLeft/(exam.marks*120)*100;
  const timerColor = timerPct>50?'var(--green)':timerPct>25?'var(--yellow)':'var(--red)';

  const markColor = marking
    ? (marking.suggestedMark>=exam.marks*0.8?'var(--green)':marking.suggestedMark>=exam.marks*0.5?'var(--yellow)':'var(--red)')
    : null;

  function doMark() {
    const result = markExamAnswer(answer, exam.model, exam.marks);
    setMarking(result);
    if (result.suggestedMark >= exam.marks * 0.7 && window.Geo) {
      window.Geo.triggerConfetti();
      if (window.GeoProgress) window.GeoProgress.addXP(result.suggestedMark * 5);
    }
  }

  return (
    <div className="fade-up">
      <div className="exam-q-text">
        {exam.q}
        <span className="exam-marks-badge">[{exam.marks} marks]</span>
      </div>
      {exam.hint && <div className="exam-hint">💡 Hint: {exam.hint}</div>}

      {timerOn && (
        <div className="timer-bar-wrap">
          <div className="timer-bar-track">
            <div className="timer-bar-fill" style={{width:timerPct+'%',background:timerColor}}></div>
          </div>
        </div>
      )}
      {(timerOn || timerDone) && (
        <div style={{fontSize:'1.1rem',fontWeight:900,color:timerColor,marginBottom:'.5rem',fontVariantNumeric:'tabular-nums'}}>
          {timerDone ? "⏰ Time's up!" : `⏱ ${mins}:${secs}`}
        </div>
      )}

      <textarea className="exam-textarea" value={answer}
        onChange={e => { setAnswer(e.target.value); setMarking(null); }}
        placeholder="Write your answer here…" rows={6} />

      <div style={{display:'flex',gap:'.75rem',flexWrap:'wrap',marginTop:'.5rem',alignItems:'center'}}>
        {answer.trim().length>=20 && !marking && (
          <button className={"btn btn-"+color} onClick={doMark}>✏️ Mark My Answer</button>
        )}
        <button className="reveal-btn" onClick={() => setRevealed(r=>!r)}>
          {revealed?"Hide Model Answer":"📖 Show Model Answer"}
        </button>
        {!timerOn && !timerDone && (
          <button className="btn btn-ghost" onClick={() => setTimerOn(true)}>⏱ Start Timer ({exam.marks*2} min)</button>
        )}
        {(timerOn||timerDone) && <button className="btn btn-ghost" onClick={resetTimer}>Reset Timer</button>}
        {answer.length>10 && <button className="btn btn-ghost" onClick={() => { setAnswer(''); setMarking(null); }}>Clear</button>}
      </div>

      {marking && (
        <div className="pop-in" style={{marginTop:'1rem',background:'var(--bg)',borderRadius:'var(--radius-sm)',padding:'1rem',border:'2px solid var(--border)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'.8rem',flexWrap:'wrap'}}>
            <div style={{fontSize:'1.4rem',fontWeight:900,color:markColor}}>{marking.suggestedMark} / {marking.totalMarks}</div>
            <div style={{fontSize:'.82rem',color:'var(--muted)',fontWeight:600}}>suggested mark — key points found below</div>
          </div>
          <div style={{fontSize:'.78rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',color:'var(--muted)',marginBottom:'.5rem'}}>Key points checker</div>
          <div style={{display:'flex',flexDirection:'column',gap:'.35rem'}}>
            {marking.points.map((p,i) => (
              <div key={i} style={{display:'flex',alignItems:'flex-start',gap:'.6rem',padding:'.5rem .7rem',borderRadius:8,
                background:p.covered?'var(--green-light)':'var(--red-light)',fontSize:'.84rem',lineHeight:1.4}}>
                <span style={{fontSize:'1rem',flexShrink:0,marginTop:1}}>{p.covered?'✅':'❌'}</span>
                <span style={{color:p.covered?'#166534':'#991b1b'}}>{p.label}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:'.8rem',fontSize:'.78rem',color:'var(--muted)',fontStyle:'italic'}}>
            Automatic check — always compare carefully with the model answer.
          </div>
        </div>
      )}

      {revealed && (
        <div className="model-answer pop-in">
          <strong>Model Answer:</strong>
          <div style={{marginTop:'.5rem',whiteSpace:'pre-wrap'}}>{exam.model}</div>
          {exam.bullets && (
            <div style={{marginTop:'.75rem'}}>
              <div style={{fontSize:'.75rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'.07em',marginBottom:'.4rem',color:'#166534'}}>Mark scheme points:</div>
              <ul style={{margin:0,paddingLeft:'1.2rem',display:'flex',flexDirection:'column',gap:'.3rem'}}>
                {exam.bullets.map((b,i) => <li key={i} style={{fontSize:'.88rem'}}>{b}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* export all to window */
Object.assign(window, {
  FlashcardDeck, MCQQuiz, MatchingGame, TrueFalse, ClozeActivity, ExamQuestion,
  StreakToast, LevelUpModal,
});
