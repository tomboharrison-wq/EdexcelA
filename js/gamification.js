/* ============================================================
   gamification.js — Levels · Confetti · Session Streaks · Daily Challenge
   Exposes window.Geo namespace
   ============================================================ */
(function () {

  /* ── Levels ─────────────────────────────────────────────── */
  var LEVELS = [
    { num:1, name:'Rookie',      icon:'🌱', min:0,    max:99   },
    { num:2, name:'Explorer',    icon:'🗺️',  min:100,  max:249  },
    { num:3, name:'Geographer',  icon:'🌍', min:250,  max:499  },
    { num:4, name:'Fieldworker', icon:'🔭', min:500,  max:799  },
    { num:5, name:'Analyst',     icon:'📊', min:800,  max:1199 },
    { num:6, name:'Expert',      icon:'⭐', min:1200, max:1799 },
    { num:7, name:'Master',      icon:'🏆', min:1800, max:2499 },
    { num:8, name:'Champion',    icon:'🥇', min:2500, max:Infinity },
  ];

  function getLevel(xp) {
    for (var i = LEVELS.length - 1; i >= 0; i--) {
      if (xp >= LEVELS[i].min) return LEVELS[i];
    }
    return LEVELS[0];
  }

  function getLevelProgress(xp) {
    var lv = getLevel(xp);
    if (lv.max === Infinity) return { level:lv, pct:100, xpInLevel:xp - lv.min, xpNeeded:0 };
    var xpInLevel = xp - lv.min;
    var xpNeeded  = lv.max - lv.min + 1;
    return { level:lv, pct:Math.min(100, Math.round(xpInLevel / xpNeeded * 100)), xpInLevel:xpInLevel, xpNeeded:xpNeeded };
  }

  /* ── Level-up listeners ──────────────────────────────────── */
  var levelUpCbs = [];

  function onLevelUp(fn)  { levelUpCbs.push(fn); }
  function offLevelUp(fn) { levelUpCbs = levelUpCbs.filter(function(f){ return f !== fn; }); }

  function checkLevelUp(oldXp, newXp) {
    var o = getLevel(oldXp), n = getLevel(newXp);
    if (n.num > o.num) {
      triggerFireworks();
      levelUpCbs.forEach(function(fn){ fn(n, o); });
      return n;
    }
    return null;
  }

  /* ── Session streak ─────────────────────────────────────── */
  var sessionStreak = 0;
  var streakCbs = [];

  function onStreakChange(fn)  { streakCbs.push(fn); }
  function offStreakChange(fn) { streakCbs = streakCbs.filter(function(f){ return f !== fn; }); }

  function recordCorrect() {
    sessionStreak++;
    streakCbs.forEach(function(fn){ fn(sessionStreak); });
    if (sessionStreak > 0 && sessionStreak % 5 === 0) {
      triggerFireworks();
    } else {
      triggerConfetti();
    }
    return sessionStreak;
  }

  function recordWrong() {
    var prev = sessionStreak;
    sessionStreak = 0;
    streakCbs.forEach(function(fn){ fn(0); });
    return prev;
  }

  function getSessionStreak() { return sessionStreak; }

  /* ── Confetti canvas ────────────────────────────────────── */
  var cvs = null, ctx2d = null, particles = [], raf = null;
  var COLORS = ['#0891b2','#4f46e5','#e11d48','#16a34a','#f59e0b','#ec4899','#8b5cf6','#06b6d4','#f97316'];

  function ensureCanvas() {
    if (cvs) return;
    cvs = document.createElement('canvas');
    cvs.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(cvs);
    ctx2d = cvs.getContext('2d');
    function resize() { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
  }

  function spawnParticles(cx, cy, count, spread) {
    for (var i = 0; i < count; i++) {
      particles.push({
        x: cx, y: cy,
        vx: (Math.random() - 0.5) * spread,
        vy: (Math.random() * -spread * 0.8) - 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        w: Math.random() * 10 + 5,
        h: Math.random() * 5 + 3,
        rot: Math.random() * 360,
        rs: (Math.random() - 0.5) * 14,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.007,
        shape: Math.random() > 0.45 ? 0 : 1,
      });
    }
  }

  function animateParticles() {
    ctx2d.clearRect(0, 0, cvs.width, cvs.height);
    particles = particles.filter(function(p){ return p.alpha > 0.05; });
    particles.forEach(function(p) {
      p.x  += p.vx; p.y += p.vy;
      p.vy += 0.38; p.vx *= 0.99;
      p.rot += p.rs; p.alpha -= p.decay;
      ctx2d.save();
      ctx2d.globalAlpha = Math.max(0, p.alpha);
      ctx2d.translate(p.x, p.y);
      ctx2d.rotate(p.rot * Math.PI / 180);
      ctx2d.fillStyle = p.color;
      if (p.shape === 1) {
        ctx2d.beginPath();
        ctx2d.arc(0, 0, p.w / 2, 0, Math.PI * 2);
        ctx2d.fill();
      } else {
        ctx2d.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }
      ctx2d.restore();
    });
    if (particles.length) { raf = requestAnimationFrame(animateParticles); }
    else { raf = null; }
  }

  function triggerConfetti(el) {
    ensureCanvas();
    var x = cvs.width * 0.5, y = cvs.height * 0.42;
    if (el) {
      try {
        var r = el.getBoundingClientRect();
        x = r.left + r.width / 2;
        y = r.top + r.height / 2;
      } catch(e){}
    }
    spawnParticles(x, y, 38, 13);
    if (!raf) raf = requestAnimationFrame(animateParticles);
  }

  function triggerFireworks() {
    ensureCanvas();
    var w = cvs.width, h = cvs.height;
    spawnParticles(w * 0.22, h * 0.35, 75, 19);
    setTimeout(function(){ spawnParticles(w * 0.78, h * 0.28, 75, 19); }, 180);
    setTimeout(function(){ spawnParticles(w * 0.5,  h * 0.22, 75, 19); }, 360);
    if (!raf) raf = requestAnimationFrame(animateParticles);
  }

  /* ── Daily Challenge ────────────────────────────────────── */
  var DC_KEY = 'geo:dc';

  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function getDailyChallenge() {
    try {
      var s = localStorage.getItem(DC_KEY);
      if (s) { var o = JSON.parse(s); if (o && o.date === todayStr()) return o; }
    } catch(e){}
    return null;
  }

  function buildDailyChallenge() {
    var existing = getDailyChallenge();
    if (existing) return existing;

    var pool = [];
    if (window.GEO_DATA) {
      for (var sid = 1; sid <= 9; sid++) {
        var sec = window.GEO_DATA[sid];
        if (!sec) continue;
        sec.topics.forEach(function(topic) {
          if (topic.mcq) topic.mcq.forEach(function(q) {
            pool.push({ type:'mcq', q:q.q, opts:q.opts, correct:q.correct, color:sec.color });
          });
          if (topic.truefalse) topic.truefalse.forEach(function(st) {
            pool.push({ type:'tf', statement:st.s, answer:st.a, correction:st.c, color:sec.color });
          });
        });
      }
    }

    /* Deterministic daily shuffle */
    var today = todayStr();
    var seed = today.split('').reduce(function(a, c){ return (a * 31 + c.charCodeAt(0)) & 0x7fffffff; }, 0);
    var sv = seed;
    function rng() { sv = (sv * 1664525 + 1013904223) & 0x7fffffff; return sv / 0x7fffffff; }
    var shuffled = pool.slice().sort(function(){ return rng() - 0.5; });

    var ch = { date:todayStr(), questions:shuffled.slice(0, 5), completed:false, score:0 };
    try { localStorage.setItem(DC_KEY, JSON.stringify(ch)); } catch(e){}
    return ch;
  }

  function completeDailyChallenge(score) {
    var ch = getDailyChallenge();
    if (!ch || ch.completed) return;
    ch.completed = true; ch.score = score;
    try { localStorage.setItem(DC_KEY, JSON.stringify(ch)); } catch(e){}
    var bonus = 50 + score * 10;
    if (window.GeoProgress) window.GeoProgress.addXP(bonus);
  }

  /* ── Patch GeoProgress.addXP for level-up detection ──────── */
  function patchProgress() {
    if (!window.GeoProgress || typeof window.GeoProgress.addXP !== 'function') return;
    if (window.GeoProgress.__geo_patched) return;
    window.GeoProgress.__geo_patched = true;
    var orig = window.GeoProgress.addXP.bind(window.GeoProgress);
    window.GeoProgress.addXP = function(n) {
      var oldXP = window.GeoProgress.getXP();
      var result = orig(n);
      checkLevelUp(oldXP, window.GeoProgress.getXP());
      return result;
    };
  }

  /* Try immediately (for pages where progress.js loads before this) */
  patchProgress();
  /* Also on DOMContentLoaded as fallback */
  document.addEventListener('DOMContentLoaded', patchProgress);

  /* ── Expose window.Geo ──────────────────────────────────── */
  window.Geo = {
    LEVELS:              LEVELS,
    getLevel:            getLevel,
    getLevelProgress:    getLevelProgress,
    checkLevelUp:        checkLevelUp,
    onLevelUp:           onLevelUp,
    offLevelUp:          offLevelUp,
    triggerConfetti:     triggerConfetti,
    triggerFireworks:    triggerFireworks,
    recordCorrect:       recordCorrect,
    recordWrong:         recordWrong,
    getSessionStreak:    getSessionStreak,
    onStreakChange:      onStreakChange,
    offStreakChange:     offStreakChange,
    buildDailyChallenge: buildDailyChallenge,
    getDailyChallenge:   getDailyChallenge,
    completeDailyChallenge: completeDailyChallenge,
    todayStr:            todayStr,
  };

})();
