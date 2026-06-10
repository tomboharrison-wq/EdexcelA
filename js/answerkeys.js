/* ============================================================
   ANSWER KEYS — for auto-marking
   ------------------------------------------------------------
   MATCH-UPS need no keys here: the correct pairing is structural
   (term[i] ↔ definition[i]), so every match-up self-marks.

   MCQ keys:    ANSWER_KEYS.mcq["<mcq-id>"] = [correctIndexPerQuestion]
   BLANK keys:  ANSWER_KEYS.blanks["<blank-input-id>"] = "correct word"
                (matched case-insensitively, trimmed)

   To extend auto-marking to another section, add its MCQ ids and
   blank ids below. Anything without a key still saves + shows a
   "model answer" reveal but is not scored.
   ============================================================ */
window.ANSWER_KEYS = {
  mcq: {
    /* ---- Section 1 ---- */
    "s1-2-mcq": [1, 1, 2, 1],
    "s1-3-mcq": [2, 1, 1, 1],
    "s1-8-mcq": [1, 1, 3, 1],
  },
  blanks: {
    /* ---- Section 1 · 1.1 atmospheric circulation ---- */
    "s1-1-blanks:b0-1": "weather",
    "s1-1-blanks:b0-3": "climate",
    "s1-1-blanks:b1-1": "troposphere",
    "s1-1-blanks:b2-1": "latitude",
    "s1-1-blanks:b3-1": "equator",
    "s1-1-blanks:b3-3": "poles",
    "s1-1-blanks:b4-1": "Hadley",
    "s1-1-blanks:b5-1": "Ferrel",
    "s1-1-blanks:b5-3": "low",
    "s1-1-blanks:b6-1": "high",
  },
};
