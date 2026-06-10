/* SECTION 8 — Geographical Investigations: Fieldwork & UK Challenges (Paper 3) */
function Section8() {
  const P = "3";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="Paper 3 · 1GA0/03" num="8"
        title="Geographical Investigations"
        subtitle="Fieldwork at Hornsea and UK Challenges (Topic 8)."
        meta={["Edexcel A · 1GA0/03","64 marks · 1 h 30 min","Resource Booklet"]}
        covers={[
          "How Paper 3 Works · The Enquiry Process",
          "Fieldwork Key Terms","Hornsea Coastal Fieldwork",
          "Hornsea Rural Fieldwork","Fieldwork Skills Practice",
          "Fieldwork Exam Practice","UK Challenges 8.1 — Resources & Sustainability",
          "UK Challenges 8.2 — Settlement, Population & Economy",
          "UK Challenges 8.3 — Landscapes",
          "UK Challenges 8.4 — Climate Change",
          "Final Knowledge Check & RAG",
        ]}
        routine="Apply your knowledge from Papers 1 and 2 to a contemporary UK challenge. Always link evidence to command word." />

      {/* ---------- HOW PAPER 3 WORKS ---------- */}
      <Page paper={P} running="Section 8 · How Paper 3 Works" folio="0.1">
        <SubsectionHeader num={0} title="How Paper 3 Works" spec="Read first" />
        <NoteP>Paper 3 is worth <strong>64 marks (25%)</strong> of your GCSE and lasts <strong>1 h 30 min</strong>. You are given a Resource Booklet. The paper is split into two sections, both covered in this workbook.</NoteP>
        <WkTable id="s8-0-paper" head={["Section","What you must do"]}
          colWidths={["28%",null]}
          rows={[
            ["Fieldwork (your own enquiry)","Apply the enquiry process to YOUR two Hornsea trips. Expect questions on why you chose methods, how you collected and presented data, what your results showed, and how you would improve."],
            ["Geographical skills (unfamiliar fieldwork)","Use the Resource Booklet to interpret an unfamiliar enquiry: graphs and maps, averages and ranges, suggest improvements. Same skills as Hornsea."],
            ["UK Challenges (Topic 8)","Apply knowledge from Paper 1 and Paper 2 to a contemporary UK challenge: resources, settlement & economy, landscapes, or climate change."],
          ]} />
        <ExamTip>The enquiry process — six stages, in order: 1. Formulating the enquiry question / hypothesis · 2. Selecting methods / collecting data · 3. Processing & presenting data · 4. Analysing & explaining · 5. Drawing conclusions · 6. Evaluating.</ExamTip>
      </Page>

      {/* ---------- FIELDWORK KEY TERMS ---------- */}
      <Page paper={P} running="Section 8 · Fieldwork Key Terms" folio="A.1">
        <SubsectionHeader num={1} title="Fieldwork Key Terms — Test Yourself" spec="Part A" />
        <NoteP>Write the definition from memory, then check against your booklet.</NoteP>
        <WkTable id="s8-1-terms" head={["Term","Definition"]}
          colWidths={["28%",null]}
          rows={[
            ["Primary data",null],["Secondary data",null],
            ["Quantitative data",null],["Qualitative data",null],
            ["Random sampling",null],["Systematic sampling",null],
            ["Stratified sampling",null],["Transect",null],
            ["Reliability",null],["Accuracy",null],
            ["Risk assessment",null],["Evaluation",null],
          ]} />
        <ExamTip>Examiners reward precise method language. Not "we measured the beach." Write WHAT (slope angle), WITH WHAT (clinometer + ranging poles), HOW OFTEN (every 2 m), and WHY (to record how gradient changed up the beach).</ExamTip>
      </Page>

      {/* ---------- COASTAL FIELDWORK ---------- */}
      <Page paper={P} running="Section 8 · Coastal Fieldwork — Hornsea" folio="A.2.1">
        <SubsectionHeader num={2} title="Coastal Fieldwork — Hornsea" spec="Investigating coastal processes" />
        
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 1 — Your enquiry question & hypothesis</div>
        <NoteP>Write the enquiry question you investigated:</NoteP>
        <AnswerLines n={2} id="s8-2-q" />
        <NoteP>Write your hypothesis (what you expected to find and why):</NoteP>
        <AnswerLines n={3} id="s8-2-hyp" />
        <NoteP>Explain why this is a geographical enquiry worth investigating on the Holderness Coast:</NoteP>
        <AnswerLines n={3} id="s8-2-why" />
      </Page>

      <Page paper={P} running="Section 8 · Coastal Fieldwork — Hornsea" folio="A.2.2">
        <div className="eyebrow">Why Hornsea? Justify the location</div>
        <NoteP>Give TWO reasons Hornsea was suitable and ONE limitation.</NoteP>
        <div style={{fontWeight:600,fontSize:"11pt"}}>Suitable reason 1:</div><AnswerLines n={2} id="s8-2-r1" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Suitable reason 2:</div><AnswerLines n={2} id="s8-2-r2" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>One limitation:</div><AnswerLines n={2} id="s8-2-lim" />

        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 2 — Data collection methods</div>
        <NoteP>The spec requires at least ONE quantitative method (beach morphology / sediment) and ONE qualitative method (recording landforms).</NoteP>
        <WkTable id="s8-2-meth" head={["Method","How you did it / equipment","Q / qual?"]}
          rows={[["Beach profiling",null,null],["Sediment analysis",null,null],["Field sketches",null,null],["(Your choice)",null,null]]} />
        <NoteP>Explain ONE way coastal processes at Hornsea affect people living there:</NoteP>
        <AnswerLines n={3} id="s8-2-people" />
      </Page>

      <Page paper={P} running="Section 8 · Coastal Fieldwork — Hornsea" folio="A.2.3">
        <div className="eyebrow">Sampling</div>
        <WkTable id="s8-2-samp" head={["Where you used it","Sampling type + one pro / one con"]}
          colWidths={["44%",null]}
          rows={[
            ["Beach profiling (regular intervals)",null],
            ["Choosing pebbles in a quadrat",null],
            ["Selecting features to sketch",null],
          ]} />
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 2 — Secondary data</div>
        <NoteP>The spec requires a geology map (e.g. BGS Geology of Britain) plus one other secondary source.</NoteP>
        <div style={{fontWeight:600,fontSize:"11pt"}}>Secondary source 1 (geology map):</div>
        <AnswerLines n={2} id="s8-2-s1" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Secondary source 2:</div>
        <AnswerLines n={2} id="s8-2-s2" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>One strength AND one weakness of secondary data:</div>
        <AnswerLines n={3} id="s8-2-sw" />
      </Page>

      <Page paper={P} running="Section 8 · Coastal Fieldwork — Hornsea" folio="A.2.4">
        <div className="eyebrow">Stage 3 — Presenting your data</div>
        <WkTable id="s8-2-pres" head={["Data set","Best technique + why"]}
          colWidths={["38%",null]}
          rows={[
            ["Beach gradient up the profile",null],
            ["Sediment / pebble size distribution",null],
            ["Coastal features and defences",null],
          ]} />
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 4 — Analysing your results</div>
        <NoteP>Describe the pattern your beach profile data showed. Use figures (distances, angles):</NoteP>
        <AnswerLines n={3} id="s8-2-prof" />
        <NoteP>Describe what your sediment data showed about pebble size and shape along the beach:</NoteP>
        <AnswerLines n={3} id="s8-2-sed" />
        <NoteP>Link your results to a coastal process (e.g. longshore drift, wave energy, sediment sorting):</NoteP>
        <AnswerLines n={3} id="s8-2-proc" />
      </Page>

      <Page paper={P} running="Section 8 · Coastal Fieldwork — Hornsea" folio="A.2.5">
        <div className="eyebrow">Stage 5 — Conclusion</div>
        <NoteP>Write a conclusion that answers your enquiry question. Say whether your hypothesis was supported, partly supported or rejected; refer to evidence:</NoteP>
        <AnswerLines n={6} id="s8-2-conc" />
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 6 — Evaluation</div>
        <ExamTip>Evaluation must cover <strong>Reliability</strong> (representative? sample size, weather), <strong>Accuracy</strong> (techniques used correctly), <strong>Improvements</strong> (what + difference it would make).</ExamTip>
        <div style={{fontWeight:600,fontSize:"11pt"}}>TWO limitations of your coastal enquiry:</div>
        <AnswerLines n={3} id="s8-2-lim2" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>TWO improvements (explain how each would improve results):</div>
        <AnswerLines n={4} id="s8-2-imp" />
      </Page>

      {/* ---------- RURAL FIELDWORK ---------- */}
      <Page paper={P} running="Section 8 · Rural Fieldwork — Hornsea" folio="A.3.1">
        <SubsectionHeader num={3} title="Rural Fieldwork — Hornsea" spec="Change in a rural settlement" />
        
        <div className="eyebrow" style={{marginTop:"10px"}}>Stage 1 — Enquiry question & hypothesis</div>
        <NoteP>Write the enquiry question you investigated:</NoteP><AnswerLines n={2} id="s8-3-q" />
        <NoteP>Write your hypothesis:</NoteP><AnswerLines n={2} id="s8-3-hyp" />
        <NoteP>Explain why this is a worthwhile geographical enquiry in a rural settlement:</NoteP><AnswerLines n={3} id="s8-3-why" />
      </Page>

      <Page paper={P} running="Section 8 · Rural Fieldwork — Hornsea" folio="A.3.2">
        <div className="eyebrow">Why Hornsea? Justify the location</div>
        <div style={{fontWeight:600,fontSize:"11pt"}}>Suitable reason 1:</div><AnswerLines n={2} id="s8-3-r1" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Suitable reason 2:</div><AnswerLines n={2} id="s8-3-r2" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>One limitation:</div><AnswerLines n={2} id="s8-3-lim" />

        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 2 — Data collection methods</div>
        <NoteP>Spec requires at least ONE qualitative method (views on rural environment) and ONE quantitative method (flows of people).</NoteP>
        <WkTable id="s8-3-meth" head={["Method","How you did it","Q / qual?"]}
          rows={[
            ["Pedestrian (footfall) count",null,null],
            ["Environmental Quality Survey (EQS)",null,null],
            ["Questionnaire / perception survey",null,null],
            ["(Your choice)",null,null],
          ]} />
        <NoteP>Explain ONE example of interaction between physical landscape features, rural residents and visitors at Hornsea:</NoteP>
        <AnswerLines n={3} id="s8-3-int" />
      </Page>

      <Page paper={P} running="Section 8 · Rural Fieldwork — Hornsea" folio="A.3.3">
        <div className="eyebrow">Sampling</div>
        <WkTable id="s8-3-samp" head={["Where you used it","Sampling type + one pro / one con"]}
          colWidths={["44%",null]}
          rows={[
            ["Footfall counts at set street corners",null],
            ["Choosing EQS survey locations",null],
            ["Asking people the questionnaire",null],
          ]} />
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 2 — Secondary data</div>
        <NoteP>Spec requires TWO secondary sources, including Census data (ONS) + one other.</NoteP>
        <div style={{fontWeight:600,fontSize:"11pt"}}>Secondary source 1 (Census / ONS):</div><AnswerLines n={2} id="s8-3-s1" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Secondary source 2:</div><AnswerLines n={2} id="s8-3-s2" />
      </Page>

      <Page paper={P} running="Section 8 · Rural Fieldwork — Hornsea" folio="A.3.4">
        <div className="eyebrow">Stage 3 — Presenting your data</div>
        <WkTable id="s8-3-pres" head={["Data set","Best technique + why"]}
          colWidths={["38%",null]}
          rows={[
            ["Footfall (pedestrian counts) by location",null],
            ["Environmental Quality Survey scores",null],
            ["Questionnaire opinions",null],
          ]} />
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 4 — Analysing your results</div>
        <NoteP>Describe the pattern in footfall across Hornsea. Use figures:</NoteP><AnswerLines n={3} id="s8-3-foot" />
        <NoteP>Describe what your EQS scores showed and where they were highest / lowest:</NoteP><AnswerLines n={3} id="s8-3-eqs" />
        <NoteP>Explain ONE result that surprised you or did not match your hypothesis:</NoteP><AnswerLines n={2} id="s8-3-surp" />
      </Page>

      <Page paper={P} running="Section 8 · Rural Fieldwork — Hornsea" folio="A.3.5">
        <div className="eyebrow">Stage 5 — Conclusion</div>
        <NoteP>Write a conclusion answering your enquiry question with evidence:</NoteP>
        <AnswerLines n={6} id="s8-3-conc" />
        <div className="eyebrow" style={{marginTop:"14px"}}>Stage 6 — Evaluation</div>
        <div style={{fontWeight:600,fontSize:"11pt"}}>TWO limitations of your rural enquiry:</div>
        <AnswerLines n={3} id="s8-3-lim2" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>TWO improvements (effect of each):</div>
        <AnswerLines n={4} id="s8-3-imp" />
      </Page>

      {/* ---------- SKILLS PRACTICE ---------- */}
      <Page paper={P} running="Section 8 · Fieldwork Skills Practice" folio="A.4.1">
        <SubsectionHeader num={4} title="Fieldwork Skills Practice" spec="Unfamiliar enquiry" />
        <NoteP>In the exam you'll be given data you have never seen. Practise these calculations — they come up every year.</NoteP>
        <div className="eyebrow">Averages, range and anomalies</div>
        <NoteP>Pebble long-axis measurements (mm): <strong>42, 38, 55, 61, 40, 120, 47</strong></NoteP>
        <div style={{fontWeight:600,fontSize:"11pt"}}>Calculate the MEAN (show your working):</div>
        <AnswerLines n={3} id="s8-4-mean" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Calculate the RANGE:</div>
        <AnswerLines n={1} id="s8-4-range" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Identify the likely ANOMALY and explain why it may have occurred:</div>
        <AnswerLines n={2} id="s8-4-anom" />
        <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Which average is least affected by the anomaly, and why?</div>
        <AnswerLines n={2} id="s8-4-best" />
        <div className="eyebrow" style={{marginTop:"14px"}}>Choosing techniques</div>
        <NoteP>A student wants to show how EQS scores change along a transect from the seafront inland. Name the best presentation technique and justify it:</NoteP>
        <AnswerLines n={3} id="s8-4-tech" />
      </Page>

      {/* ---------- EXAM PRACTICE ---------- */}
      <Page paper={P} running="Section 8 · Fieldwork Exam Practice" folio="A.5.1">
        <SubsectionHeader num={5} title="Fieldwork — Exam Practice" spec="Part A" />
        <div className="eyebrow">Foundation (1–4 marks)</div>
        <ExamQuestion id="s8-5-q1" lines={3} prompt="State one piece of primary data and one piece of secondary data you collected." marks={2} />
        <ExamQuestion id="s8-5-q2" lines={3} prompt="Explain why you carried out a risk assessment before fieldwork." marks={2} />
        <ExamQuestion id="s8-5-q3" lines={4} prompt="Describe one quantitative method you used in your physical fieldwork." marks={3} />
      </Page>

      <Page paper={P} running="Section 8 · Fieldwork Exam Practice" folio="A.5.2">
        <div className="eyebrow">Intermediate (4–6 marks)</div>
        <ExamQuestion id="s8-5-q4" lines={6} prompt="Explain why you chose your sampling method for one piece of fieldwork." marks={4} />
        <ExamQuestion id="s8-5-q5" lines={9} prompt="Assess the usefulness of secondary data in your investigation." marks={6} />
        <ExamTip>8-mark technique: make a clear point, develop with detail/evidence, link to question. Aim for several developed points and a short overall judgement.</ExamTip>
      </Page>

      <Page paper={P} running="Section 8 · Fieldwork Exam Practice" folio="A.5.3">
        <div className="eyebrow">Higher (8 marks)</div>
        <ExamQuestion id="s8-5-q6" lines={14} prompt="Evaluate the success of your data collection methods in answering your enquiry question." marks={8} />
      </Page>

      <Page paper={P} running="Section 8 · Fieldwork Exam Practice" folio="A.5.4">
        <ExamQuestion id="s8-5-q7" lines={18}
          prompt="'Fieldwork conclusions are only as good as the data collected.' Using one of your enquiries, assess how far you agree."
          marks={8} />
      </Page>

      {/* ---------- UK CHALLENGES 8.1 ---------- */}
      <Page paper={P} running="Section 8 · UK Challenges — Resources" folio="B.1.1">
        <SubsectionHeader num={6} title="UK Challenges 8.1 — Resource Consumption & Sustainability" spec="Part B" />
        <div className="eyebrow">Population growth & resource pressure</div>
        <NoteP>Fill the gaps:</NoteP>
        <FillBlanks id="s8-81-blanks" bank={[]}
          items={[
            ["By 2070 the UK population is projected to reach nearly ", null, " million people."],
            ["Growth will increase demand for ", null, ", ", null, " and ", null, ", placing pressure on ecosystems."],
            ["More housing converts ", null, " and natural ", null, " into built-up land."],
            ["An ", null, " population raises healthcare and pension costs."],
          ]} />
        <NoteP>Explain TWO ways a growing population puts pressure on UK ecosystems:</NoteP>
        <AnswerLines n={5} id="s8-81-eco" />
      </Page>

      <Page paper={P} running="Section 8 · UK Challenges — Resources" folio="B.1.2">
        <div className="eyebrow">National sustainable transport</div>
        <WkTable id="s8-81-trans" head={["Strategy","How it helps / one drawback"]}
          colWidths={["32%",null]}
          rows={[
            ["HS2 high-speed rail",null],
            ["Congestion charge / ULEZ",null],
            ["Park and ride",null],
            ["Cycle lanes and footpaths",null],
            ["Bus lanes",null],
          ]} />
        <NoteP>Which ONE transport option is most effective for reducing UK carbon emissions, and why?</NoteP>
        <AnswerLines n={6} id="s8-81-eval" />
      </Page>

      {/* ---------- UK CHALLENGES 8.2 ---------- */}
      <Page paper={P} running="Section 8 · UK Challenges — Settlement & Economy" folio="B.2.1">
        <SubsectionHeader num={7} title="UK Challenges 8.2 — Settlement, Population & Economic" spec="Part B" />
        <div className="eyebrow">The two-speed economy</div>
        <NoteP>Explain why the South East and London generate a disproportionate share of UK wealth (use the term <em>agglomeration</em>):</NoteP>
        <AnswerLines n={4} id="s8-82-econ" />
        <NoteP>Describe ONE strategy aiming to reduce the North–South gap (e.g. Northern Powerhouse, HS2) and one criticism:</NoteP>
        <AnswerLines n={4} id="s8-82-strat" />
        <div className="eyebrow" style={{marginTop:"10px"}}>Greenfield vs brownfield development</div>
        <WkTable id="s8-82-gb" head={["Greenfield","Brownfield"]}
          rows={[["Definition: \nAdvantage: \nDisadvantage: ","Definition: \nAdvantage: \nDisadvantage: "]]} />
      </Page>

      <Page paper={P} running="Section 8 · UK Challenges — Settlement & Economy" folio="B.2.2">
        <NoteP>Assess whether brownfield or greenfield is more sustainable. Justify:</NoteP>
        <AnswerLines n={6} id="s8-82-sust" />
        <div className="eyebrow" style={{marginTop:"10px"}}>UK net migration</div>
        <FillBlanks id="s8-82-mig" bank={[]}
          items={[
            ["Net migration is the difference between people ", null, " the UK and people ", null, " the UK."],
            ["Net migration reached a record of about ", null, " in the year to March 2023, then fell to about ", null, " by the year to June 2025."],
          ]} />
        <WkTable id="s8-82-stk" head={["Stakeholder","Their view on migration"]}
          colWidths={["38%",null]}
          rows={[["Businesses / employers",null],["Local communities / residents",null],["The government",null]]} />
        <NoteP>Explain why different stakeholders disagree:</NoteP>
        <AnswerLines n={4} id="s8-82-disagree" />
      </Page>

      {/* ---------- UK CHALLENGES 8.3 ---------- */}
      <Page paper={P} running="Section 8 · UK Challenges — Landscapes" folio="B.3.1">
        <SubsectionHeader num={8} title="UK Challenges 8.3 — Landscape Challenges" spec="Part B" />
        <div className="eyebrow">Conservation vs development in National Parks</div>
        <NoteP>Explain ONE conflict in a UK National Park (e.g. a zipline proposal in the Lake District):</NoteP>
        <AnswerLines n={3} id="s8-83-conf" />
        <NoteP>One argument FOR and one AGAINST development in National Parks:</NoteP>
        <AnswerLines n={4} id="s8-83-fa" />
        <div className="eyebrow" style={{marginTop:"10px"}}>Managing river and coastal flood risk</div>
        <WkTable id="s8-83-flood" head={["Scheme / approach","Hard or soft? + what it does"]}
          colWidths={["44%",null]}
          rows={[
            ["Somerset Levels response (2014) — dredging, raised roads, pumps",null],
            ["Medmerry, West Sussex — managed realignment",null],
            ["River dredging",null],
            ["Managed retreat / realignment",null],
          ]} />
        <NoteP>Assess the advantages and disadvantages of soft engineering for UK flood risk:</NoteP>
        <AnswerLines n={5} id="s8-83-soft" />
      </Page>

      {/* ---------- UK CHALLENGES 8.4 ---------- */}
      <Page paper={P} running="Section 8 · UK Challenges — Climate Change" folio="B.4.1">
        <SubsectionHeader num={9} title="UK Challenges 8.4 — Climate Change" spec="Part B" />
        <div className="eyebrow">Future impacts and uncertainty</div>
        <FillBlanks id="s8-84-fut" bank={[]}
          items={[
            ["Climate models predict the UK could be up to ", null, "°C warmer by 2100, with up to ", null, " mm less rainfall in the growing season."],
          ]} />
        <NoteP>Explain why there is uncertainty about how climate change will affect the UK's future climate:</NoteP>
        <AnswerLines n={4} id="s8-84-uncert" />
        <div className="eyebrow" style={{marginTop:"10px"}}>Impacts on people and landscapes</div>
        <WkTable id="s8-84-imp" head={["Impact type","Example impact on the UK"]}
          colWidths={["28%",null]}
          rows={[["Environmental",null],["Economic",null],["Social",null]]} />
        <NoteP>ONE national-scale response (Net Zero Strategy / offshore wind):</NoteP><AnswerLines n={3} id="s8-84-nat" />
        <NoteP>ONE local-scale response (SuDS, tree planting, Humber flood defences):</NoteP><AnswerLines n={3} id="s8-84-loc" />
      </Page>

      {/* ---------- UK CHALLENGES EXAM PRACTICE ---------- */}
      <Page paper={P} running="Section 8 · UK Challenges — Exam Practice" folio="B.5.1">
        <SubsectionHeader num={10} title="UK Challenges — Exam Practice" spec="Part B" />
        <div className="eyebrow">Foundation (1–4 marks)</div>
        <ExamQuestion id="s8-85-q1" lines={2} prompt="Define the term 'net migration'." marks={1} />
        <ExamQuestion id="s8-85-q2" lines={3} prompt="State one benefit and one cost of brownfield development." marks={2} />
        <ExamQuestion id="s8-85-q3" lines={4} prompt="Describe one pressure that population growth places on UK resources." marks={3} />
      </Page>

      <Page paper={P} running="Section 8 · UK Challenges — Exam Practice" folio="B.5.2">
        <div className="eyebrow">Intermediate (4–6 marks)</div>
        <ExamQuestion id="s8-85-q4" lines={6} prompt="Explain why the UK has a 'two-speed economy'." marks={4} />
        <ExamQuestion id="s8-85-q5" lines={9}
          prompt="Explain how sustainable transport options can reduce the environmental impact of population growth." marks={6} />
      </Page>

      <Page paper={P} running="Section 8 · UK Challenges — Exam Practice" folio="B.5.3">
        <div className="eyebrow">Higher (8 marks)</div>
        <ExamQuestion id="s8-85-q6" lines={14}
          prompt="Evaluate the strategies used to manage flood risk in the UK." marks={8} />
      </Page>

      <Page paper={P} running="Section 8 · UK Challenges — Exam Practice" folio="B.5.4">
        <ExamQuestion id="s8-85-q7" lines={18}
          prompt="'Managing the UK's growing population is the biggest challenge it faces.' Assess how far you agree."
          marks={8} />
      </Page>

      {/* ---------- FINAL KNOWLEDGE CHECK ---------- */}
      <Page paper={P} running="Section 8 · Final Knowledge Check" folio="KC.1">
        <SubsectionHeader num={11} title="Final Knowledge Check" spec="" />
        <NoteP>Quick recall — answer without your notes.</NoteP>
        <WkTable id="s8-kc1" head={["#","Question","Answer"]}
          colWidths={["6%","48%",null]}
          rows={[
            ["1","Name the six stages of the enquiry process.",null],
            ["2","Difference between quantitative and qualitative data?",null],
            ["3","One quantitative and one qualitative method from coastal fieldwork.",null],
            ["4","Why is systematic sampling used for beach profiling?",null],
            ["5","Which secondary source does the spec require for the coastal enquiry?",null],
            ["6","Which secondary source does the spec require for the rural enquiry?",null],
            ["7","Roughly what UK population is projected by 2070?",null],
            ["8","Name two national sustainable transport strategies.",null],
            ["9","What does 'agglomeration' mean and why does it favour the SE?",null],
            ["10","One advantage of brownfield over greenfield development.",null],
            ["11","Name a UK managed realignment scheme.",null],
            ["12","By how many °C could the UK warm by 2100? UK net zero target year?",null],
          ]} />
        <ExamTip>Paper 3 rewards application, not just recall. Always link your point back to the command word, use figures or named examples, and finish longer answers with a clear judgement.</ExamTip>
      </Page>

      <Page paper={P} running="Section 8 · RAG Self-Assessment" folio="RAG.1">
        <SubsectionHeader num={12} title="RAG Self-Assessment — Fieldwork" spec="" />
        <RAGTable items={[
          "State the enquiry question and hypothesis for my coastal investigation",
          "State the enquiry question and hypothesis for my rural investigation",
          "Justify why Hornsea was a suitable location for each enquiry",
          "Describe my data collection methods (quantitative or qualitative)",
          "Explain why I used systematic, random and stratified sampling",
          "Identify primary and secondary data and give a strength and weakness of each",
          "Choose a suitable presentation technique and justify it",
          "Describe patterns in my results using figures",
          "Write a conclusion that answers the enquiry question with evidence",
          "Evaluate the reliability and accuracy of my enquiry and suggest improvements",
        ]} />
      </Page>

      <Page paper={P} running="Section 8 · RAG Self-Assessment" folio="RAG.2">
        <SubsectionHeader num={13} title="RAG Self-Assessment — UK Challenges" spec="" />
        <RAGTable items={[
          "Describe how the UK's population is projected to change",
          "Explain pressures of a growing population on UK ecosystems",
          "Evaluate a range of national sustainable transport options",
          "Explain the UK's 'two-speed economy' and strategies to bridge the gap",
          "Compare costs and benefits of greenfield and brownfield development",
          "Interpret UK net migration statistics and stakeholder attitudes",
          "Discuss conservation versus development in a UK National Park",
          "Explain how river and coastal flood risk is managed in the UK",
          "Explain uncertainties about how climate change will affect the UK",
          "Describe UK responses to climate change at local and national scale",
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section8 = Section8;
