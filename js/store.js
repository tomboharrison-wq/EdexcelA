/* ============================================================
   WB — storage engine (localStorage)
   Everything a student types/selects is namespaced by their
   name-slug, so multiple students can share one device.
   Keys:
     wb:student                      → current student name
     wb:v:<slug>:<id>                → a saved field value
     wb:p:<slug>:<sec>               → {a,t} progress summary
     wb:ragmeta:<slug>:<sec>         → {tableIdx:[objective labels]}
   ============================================================ */
(function () {
  var WB = {
    STUDENT_KEY: "wb:student",

    studentName: function () { return (localStorage.getItem(this.STUDENT_KEY) || "").trim(); },
    setStudentName: function (name) { localStorage.setItem(this.STUDENT_KEY, (name || "").trim()); },
    slug: function () {
      var n = this.studentName().toLowerCase();
      var s = n.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      return s || "_guest";
    },

    /* ---- field values ---- */
    _vk: function (id) { return "wb:v:" + this.slug() + ":" + id; },
    get: function (id) { return localStorage.getItem(this._vk(id)); },
    set: function (id, val) {
      var k = this._vk(id);
      if (val == null || val === "") localStorage.removeItem(k);
      else localStorage.setItem(k, val);
    },
    getJSON: function (id, def) {
      var v = this.get(id);
      if (v == null) return def;
      try { return JSON.parse(v); } catch (e) { return def; }
    },
    setJSON: function (id, obj) { this.set(id, JSON.stringify(obj)); },

    /* ---- progress summary ---- */
    _pk: function (sec) { return "wb:p:" + this.slug() + ":" + sec; },
    setProgress: function (sec, a, t) { localStorage.setItem(this._pk(sec), JSON.stringify({ a: a, t: t })); },
    getProgress: function (sec) {
      try { return JSON.parse(localStorage.getItem(this._pk(sec))) || null; } catch (e) { return null; }
    },

    /* ---- RAG objective labels (so the dashboard can show them) ---- */
    _rmk: function (sec) { return "wb:ragmeta:" + this.slug() + ":" + sec; },
    setRagMeta: function (sec, tableIdx, items) {
      var k = this._rmk(sec), m;
      try { m = JSON.parse(localStorage.getItem(k)) || {}; } catch (e) { m = {}; }
      m[tableIdx] = items;
      localStorage.setItem(k, JSON.stringify(m));
    },
    getRagMeta: function (sec) {
      try { return JSON.parse(localStorage.getItem(this._rmk(sec))) || {}; } catch (e) { return {}; }
    },
    /* read a single RAG value: rag:s<sec>:t<ti>:r<ri> */
    ragValue: function (sec, ti, ri) { return this.get("rag:s" + sec + ":t" + ti + ":r" + ri); },

    /* ---- key enumeration ---- */
    allValueKeys: function () {
      var p = "wb:v:" + this.slug() + ":", out = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(p) === 0) out.push(k);
      }
      return out;
    },
    idFromKey: function (k) {
      var p = "wb:v:" + this.slug() + ":";
      return k.indexOf(p) === 0 ? k.slice(p.length) : null;
    },
    belongsToSection: function (id, sec) {
      var re = new RegExp("^s" + sec + "(?:[ab])?-");
      if (re.test(id)) return true;
      if (id.indexOf("rag:s" + sec + ":") === 0) return true;
      return false;
    },

    /* ---- progress: scan the live DOM of an open section page ---- */
    computeAndStoreProgress: function (sec) {
      var t = 0, a = 0;
      document.querySelectorAll('input[type="text"][data-wb], textarea[data-wb]').forEach(function (el) {
        t++; if ((el.value || "").trim() !== "") a++;
      });
      document.querySelectorAll("[data-mcq-q]").forEach(function (g) {
        t++; if (g.querySelector('input[type="radio"]:checked')) a++;
      });
      document.querySelectorAll("select[data-match]").forEach(function (s) {
        t++; if (s.value) a++;
      });
      document.querySelectorAll("[data-rag-row]").forEach(function (r) {
        t++; if (r.querySelector('[aria-pressed="true"]')) a++;
      });
      if (sec != null) this.setProgress(sec, a, t);
      return { a: a, t: t };
    },

    /* ---- clearing ---- */
    clearSection: function (sec) {
      var self = this;
      this.allValueKeys().forEach(function (k) {
        var id = self.idFromKey(k);
        if (id && self.belongsToSection(id, sec)) localStorage.removeItem(k);
      });
      localStorage.removeItem(this._pk(sec));
      localStorage.removeItem(this._rmk(sec));
    },
    clearAll: function () {
      var slug = this.slug();
      var prefs = ["wb:v:" + slug + ":", "wb:p:" + slug + ":", "wb:ragmeta:" + slug + ":"];
      var del = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && prefs.some(function (p) { return k.indexOf(p) === 0; })) del.push(k);
      }
      del.forEach(function (k) { localStorage.removeItem(k); });
    },

    /* ---- export ---- */
    exportData: function () {
      var self = this, answers = {};
      this.allValueKeys().forEach(function (k) { answers[self.idFromKey(k)] = localStorage.getItem(k); });
      return { student: this.studentName() || "(no name)", exported: new Date().toISOString(), answers: answers };
    },

    /* ---- overall progress across all sections ---- */
    overall: function () {
      var a = 0, t = 0;
      (window.SECTIONS || []).forEach(function (s) {
        var p = WB.getProgress(s.n);
        if (p) { a += p.a; t += p.t; }
      });
      return { a: a, t: t };
    },
  };

  window.WB = WB;
})();
