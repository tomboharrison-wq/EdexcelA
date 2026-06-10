/* ============================================================
   progress.js — Game store v2: XP, topics, RAG, streak, spaced rep
   ============================================================ */
(function () {
  const KEY  = 'geo_progress_v1';
  const SREP = 'geo_spacedRep_v1';

  function load()    { try { return JSON.parse(localStorage.getItem(KEY))  || {}; } catch { return {}; } }
  function loadSR()  { try { return JSON.parse(localStorage.getItem(SREP)) || {}; } catch { return {}; } }
  function save(d)   { localStorage.setItem(KEY,  JSON.stringify(d)); }
  function saveSR(d) { localStorage.setItem(SREP, JSON.stringify(d)); }

  /* ── date helpers ── */
  function toDateStr(d) { return d.toISOString().slice(0,10); }
  function today()      { return toDateStr(new Date()); }
  function yesterday()  { const d = new Date(); d.setDate(d.getDate()-1); return toDateStr(d); }

  window.GeoProgress = {

    /* ── Name ── */
    getName() { return localStorage.getItem('geo_name') || ''; },
    setName(n) { localStorage.setItem('geo_name', n); },

    /* ── XP ── */
    getXP() { return load().xp || 0; },
    addXP(n) { const d=load(); d.xp=(d.xp||0)+n; save(d); return d.xp; },

    /* ── Study streak ── */
    recordVisit() {
      const d = load();
      const t = today();
      if (d.lastVisit === t) return d.streak || 1;   // already counted today
      const newStreak = d.lastVisit === yesterday() ? (d.streak||0)+1 : 1;
      d.streak    = newStreak;
      d.lastVisit = t;
      save(d);
      return newStreak;
    },
    getStreak() {
      const d = load();
      // If last visit wasn't today or yesterday, streak has lapsed
      if (!d.lastVisit) return 0;
      if (d.lastVisit === today() || d.lastVisit === yesterday()) return d.streak || 0;
      return 0;
    },

    /* ── Topic completion ── */
    isTopicDone(tid) { return !!(load().done||{})[tid]; },
    markTopicDone(tid) {
      const d = load(); d.done = d.done||{};
      if (!d.done[tid]) { d.done[tid]=Date.now(); this.addXP(50); }
      save(d);
      this.recordVisit();
    },

    /* ── RAG ── */
    getRAG(tid)      { return (load().rag||{})[tid]||null; },
    setRAG(tid, val) { const d=load(); d.rag=d.rag||{}; d.rag[tid]=val; save(d); },
    getAllRAG()       { return load().rag || {}; },

    /* ── MCQ scores ── */
    getMCQScore(tid)           { return (load().mcq||{})[tid]||null; },
    setMCQScore(tid,correct,total) {
      const d=load(); d.mcq=d.mcq||{}; d.mcq[tid]={correct,total}; save(d);
    },
    getAllMCQ() { return load().mcq || {}; },

    /* ── Spaced repetition ── */
    // rating: 'got' | 'learning'
    getCardRating(tid, cardIdx) { return (loadSR()[tid]||{})[cardIdx]||'new'; },
    setCardRating(tid, cardIdx, rating) {
      const d=loadSR(); d[tid]=d[tid]||{}; d[tid][cardIdx]=rating; saveSR(d);
    },
    getTopicCardRatings(tid) { return loadSR()[tid] || {}; },

    /* ── Section progress ── */
    sectionProgress(sectionNum) {
      const d    = load();
      const done = d.done || {};
      const sec  = window.GEO_DATA && window.GEO_DATA[sectionNum];
      if (!sec) return { done:0, total:0, pct:0 };
      const total = sec.topics.length;
      const count = sec.topics.filter((_,i) => done[`${sectionNum}-${i}`]).length;
      return { done:count, total, pct: Math.round(count/total*100) };
    },

    /* ── Overall progress ── */
    overallProgress() {
      let totalTopics=0, doneTopics=0;
      for (let s=1; s<=9; s++) {
        const p = this.sectionProgress(s);
        totalTopics += p.total;
        doneTopics  += p.done;
      }
      return { done:doneTopics, total:totalTopics,
               pct: totalTopics ? Math.round(doneTopics/totalTopics*100) : 0 };
    },

    /* ── Reset ── */
    reset() { localStorage.removeItem(KEY); localStorage.removeItem(SREP); }
  };

  // Record visit on every page load
  window.GeoProgress.recordVisit();
})();
