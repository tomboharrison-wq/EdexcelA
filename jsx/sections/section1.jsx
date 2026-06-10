/* ============================================================
   SECTION 1 — Global Climate & Weather Hazards
   Paper 1 · Component 1 · Topic 1 · Edexcel A (1GA0/01)
   ============================================================ */

function Section1() {
  const P = "1";

  return (
    <React.Fragment>

      {/* ---------- DIVIDER ---------- */}
      <SectionDivider
        paper={P}
        paperLabel="Paper 1 · Component 1 · Topic 1"
        num="1"
        title="Global Climate & Weather Hazards"
        subtitle="Atmospheric circulation, climate change, tropical cyclones and drought."
        meta={["Edexcel A · 1GA0/01", "11 topics", "Knowledge check + RAG"]}
        covers={[
          "Weather vs. Climate & Atmospheric Circulation",
          "Ocean Currents and Heat Transfer",
          "Climate Change in the Quaternary Period",
          "Evidence for Natural Climate Change",
          "The Enhanced Greenhouse Effect",
          "Impacts of Climate Change & UK Climate",
          "Tropical Cyclones — Location & Formation",
          "Tropical Cyclone Hazards",
          "Hurricane Sandy — Cuba & USA",
          "Causes of Drought",
          "Drought Impacts & Responses",
          "Knowledge Check & RAG Self-Assessment",
        ]}
        routine="Revision routine — read the Key Knowledge twice, complete every activity in pen, mark in purple, then RAG-rate each objective at the back of the section."
      />

      {/* ============================================================
          1.1  WEATHER vs CLIMATE & ATMOSPHERIC CIRCULATION
          ============================================================ */}
      <Page paper={P} running="Section 1 · Weather & Atmospheric Circulation" folio="1.1">
        <SubsectionHeader num={1} title="Weather vs. Climate & Atmospheric Circulation" spec="Spec 2.1" />
        <KeyKnowledge
          items={[
            "<strong>Weather</strong> — day-to-day changes in the atmosphere (rain on Monday, sunny on Tuesday).",
            "<strong>Climate</strong> — average temperature and precipitation over a long period (30+ years).",
            "Most weather takes place in the <strong>troposphere</strong>, the lowest layer of the atmosphere.",
            "<strong>Latitude</strong>: distance north or south of the Equator. Places near the equator receive more concentrated solar energy → hotter climates.",
            "At the poles, solar energy is spread over a larger surface area → colder climates.",
            "<strong>Three global circulation cells</strong> (each hemisphere): <em>Hadley</em> 0–30° — rising air at equator (low pressure, rainforest), descending air at 30° (high pressure, hot deserts). <em>Ferrel</em> 30–60° — rising air at 60° creates low pressure, rainfall, temperate forests (UK). <em>Polar</em> 60–90° — cold descending air, dry tundra and polar ice.",
          ]}
          stats="Tropical climates at 0° · Deserts found at ~30° N/S · UK sits in the Ferrel Cell at ~50–60° N"
        />
        
        <Activity num={1} kind="Key Term Match" title="Match each term to its definition" spec="Spec 2.1"
          instructions="Write the correct letter in the centre column to match each term to its definition.">
          <MatchTable id="s1-1-match"
            left={["Weather","Climate","Troposphere","Latitude","Low pressure","Hadley Cell","Ferrel Cell","Polar Cell"]}
            right={[
              "Day-to-day changes in atmospheric conditions",
              "Average temperature and precipitation over a 30+ year period",
              "The lowest layer of the atmosphere where most weather occurs",
              "Distance north or south of the Equator",
              "Rising warm air; associated with rain and clouds",
              "Circulation cell between 0° and 30°; creates tropical and desert climates",
              "Circulation cell between 30° and 60°; brings rain to temperate regions",
              "Cold descending air at the poles creates dry tundra conditions",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Weather & Atmospheric Circulation" folio="1.2">
        <Activity num={2} kind="Fill in the Blanks" title="Complete each sentence" spec="Spec 2.1"
          instructions="Use the word bank to complete each sentence. Each word is used once.">
          <FillBlanks id="s1-1-blanks"
            bank={["troposphere","latitude","equator","poles","Hadley","low","high","climate","weather","Ferrel"]}
            items={[
              ["The day-to-day state of the atmosphere is called ", null, ", while the long-term average is ", null, "."],
              ["Most weather takes place in the ", null, ", the lowest layer of the atmosphere."],
              ["The distance north or south of the equator is called ", null, "."],
              ["At the ", null, ", solar energy is concentrated, making it hot. At the ", null, ", energy is spread out, making it cold."],
              ["The ", null, " Cell operates between 0° and 30° and creates tropical rainforests and hot deserts."],
              ["The ", null, " Cell affects the UK, bringing rising air, ", null, " pressure, and rainfall at ~60° N."],
              ["At 30° N and S, descending air creates ", null, " pressure and desert conditions."],
            ]} />
        </Activity>

        <Activity num={3} kind="True or False" title="Mark each statement and correct any that are false" spec="Spec 2.1">
          <WkTable id="s1-1-tf"
            head={["Statement","True / False","Correction (if false)"]}
            colWidths={["52%","18%","30%"]}
            rows={[
              ["Weather describes average conditions over 30 or more years.", null, null],
              ["The troposphere is the highest layer of the atmosphere.", null, null],
              ["Places near the equator receive more concentrated solar energy than the poles.", null, null],
              ["The Hadley Cell is responsible for the UK's temperate climate.", null, null],
              ["High pressure is associated with rising air and heavy rainfall.", null, null],
              ["Deserts are typically found at around 30° N and 30° S.", null, null],
              ["The Ferrel Cell operates between 30° and 60° latitude.", null, null],
              ["The poles receive less concentrated solar energy than the equator.", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Weather & Atmospheric Circulation" folio="1.3">
        <Activity num={4} kind="Exam Practice" title="Exam-style questions" spec="Spec 2.1">
          <ExamTip>For <em>explain why</em> questions on latitude and temperature, link the angle of the Sun to the area of surface it heats — don't just say "it's closer to the Sun." For 2-mark questions, one developed point with a linking word (<em>because</em>/<em>therefore</em>) is enough.</ExamTip>
          <ExamQuestion id="s1-1-eq1" lines={5}
            prompt="Explain why areas around the Equator are warmer than areas near the poles."
            marks={2}
            hint="angle of Sun · surface area energy is spread over" />
          <ExamQuestion id="s1-1-eq2" lines={7}
            prompt="Explain one way that atmospheric circulation affects the distribution of climates around the world."
            marks={4}
            hint="one named cell · what it does · what climate it creates · named example" />
        </Activity>
      </Page>

      {/* ============================================================
          1.2  OCEAN CURRENTS AND HEAT TRANSFER
          ============================================================ */}
      <Page paper={P} running="Section 1 · Ocean Currents" folio="2.1">
        <SubsectionHeader num={2} title="Ocean Currents and Heat Transfer" spec="Spec 2.1b" />
        <KeyKnowledge
          items={[
            "Oceans transfer approximately <strong>20%</strong> of all heat moved from the tropics to the poles.",
            "Each ocean has a circular pattern of surface currents called a <strong>gyre</strong>.",
            "<strong>North Atlantic Drift / Gulf Stream</strong>: a warm current that flows from the Gulf of Mexico northwards, warming the UK and north-west Europe.",
            "Without the Gulf Stream, UK winter temperatures would be more than 5°C colder — London's average December temperature would fall to approximately 2°C.",
            "<strong>Warm currents</strong> bring warm, wet conditions to coasts they pass. <strong>Cold currents</strong> bring cool, dry conditions.",
            "Effect on the UK: mild winters, cool summers, wet western coasts — all due to the North Atlantic Drift bringing warm Atlantic air.",
            "Cities at the same latitude can have very different climates if one is warmed by a current and the other is not (e.g. Liverpool 53°N vs. Calgary 53°N).",
          ]}
          stats="Gulf Stream raises UK winter temperature by >5°C · Oceans transfer 20% of equator-to-pole heat · North Atlantic Drift flows from ~10°N to ~60°N"
        />
        
        <Activity num={1} kind="Completion Table" title="Ocean currents" spec="Spec 2.1b"
          instructions="Complete the table. Shaded cells are filled for you as anchors.">
          <WkTable id="s1-2-comp"
            head={["Key Term / Concept","Definition / Detail"]}
            colWidths={["42%",null]}
            rows={[
              ["What is a gyre?", {shaded:true, text:"A circular pattern of surface ocean currents in each ocean basin"}],
              ["Name of current warming the UK", null],
              ["Where does the Gulf Stream start?", {shaded:true, text:"The Gulf of Mexico"}],
              ["% of equator-to-pole heat moved by oceans", null],
              ["Effect of Gulf Stream on UK winters", {shaded:true, text:"Milder than expected — over 5°C warmer"}],
              ["What temp would London reach without Gulf Stream?", null],
              ["Type of conditions warm currents bring to coasts", {shaded:true, text:"Warm and wet"}],
              ["Why does Calgary (53°N) have colder winters than Liverpool (53°N)?", null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Ocean Currents" folio="2.2">
        <Activity num={2} kind="Draw and Label" title="The North Atlantic" spec="Spec 2.1b"
          instructions="In the box below, sketch a simple outline of the North Atlantic. Draw and label: the Gulf Stream, the North Atlantic Drift, the direction of flow, where the current is warm, and annotate the effect on the UK.">
          
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="Circle the correct answer" spec="Spec 2.1b">
          <MCQ id="s1-2-mcq" items={[
            { q: "What percentage of equator-to-pole heat is transferred by oceans?",
              opts: ["5%","20%","40%","60%"] },
            { q: "What is a gyre?",
              opts: ["A cold deep ocean current","A circular pattern of surface currents","A warm underwater river","A wind pattern over oceans"] },
            { q: "By how much does the Gulf Stream warm UK winters?",
              opts: ["1°C","3°C","More than 5°C","10°C"] },
            { q: "Why does the UK have a milder climate than expected for its latitude?",
              opts: ["Closer to the equator than other countries","Warmed by the North Atlantic Drift","Very high mountains trap heat","Receives more sunshine than other European countries"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Ocean Currents" folio="2.3">
        <Activity num={4} kind="Exam Practice" title="Exam-style question" spec="Spec 2.1">
          <ExamTip>Questions about ocean currents often ask you to <em>explain</em> — always state what the current does (brings warm water), then the effect on climate (milder winters), then the consequence for people or environment. Chain of reasoning = marks.</ExamTip>
          <ExamQuestion id="s1-2-eq1" lines={9}
            prompt="Explain how ocean currents affect the climate of the UK."
            marks={4}
            hint="name of current · where it comes from · what it brings · effect on temperature and rainfall" />
        </Activity>
      </Page>

      {/* ============================================================
          1.3  CLIMATE CHANGE IN THE QUATERNARY PERIOD
          ============================================================ */}
      <Page paper={P} running="Section 1 · Quaternary Climate Change" folio="3.1">
        <SubsectionHeader num={3} title="Climate Change in the Quaternary Period" spec="Spec 2.2" />
        <KeyKnowledge
          items={[
            "<strong>The Quaternary Period</strong> — the last 1.8 million years of Earth's history. Characterised by alternating cold and warm periods.",
            "<strong>Glacial</strong> periods (ice ages): long cold periods when ice sheets advance and cover large land areas.",
            "<strong>Interglacial</strong> periods: shorter warmer periods between glacials. We are in an interglacial now (the Holocene).",
            "About 10% of Earth's surface is currently covered by permanent ice sheets.",
            "<strong>Milankovitch cycles</strong> — changes in Earth's orbit around the Sun. Three cycles: <em>Eccentricity</em> (shape of orbit), <em>Axial Tilt</em> (22–24.5°), <em>Precession</em> (wobble of axis). They change the amount of solar energy Earth receives.",
            "<strong>Solar variation</strong> — changes in the Sun's energy output. More sunspots → warming. Fewer → cooling (e.g. Maunder Minimum contributed to the Little Ice Age).",
            "<strong>Volcanic eruptions</strong> — large eruptions release ash and SO₂ into the stratosphere, blocking sunlight. Krakatoa 1883 caused a global temperature drop of ~0.3°C for over a year.",
          ]}
          stats="Quaternary = 1.8 million years · Last ice age ended ~10,000 years ago · Milankovitch cycles: 100,000 / 41,000 / 26,000 year cycles"
        />
        
        <Activity num={1} kind="Match-Up" title="Natural causes of climate change" spec="Spec 2.2b"
          instructions="Match each term to its correct definition.">
          <MatchTable id="s1-3-match"
            left={["Quaternary period","Glacial","Interglacial","Milankovitch cycles","Eccentricity","Axial tilt","Precession","Solar variation","Volcanic eruption"]}
            right={[
              "The last 1.8 million years of Earth's history",
              "A cold period when ice sheets advance across continents",
              "The current warm period — we are living in one now",
              "Theory that Earth's orbit variations affect solar energy received",
              "Changes in the shape of Earth's orbit around the Sun",
              "Changes in the angle of Earth's tilt (22° to 24.5°)",
              "Wobble of the Earth's axis over ~26,000 years",
              "Changes in the Sun's energy output; sunspots increase warmth",
              "Ash and sulphur dioxide block sunlight, cooling the Earth",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Quaternary Climate Change" folio="3.2">
        <Activity num={2} kind="Cause and Effect" title="Natural climate change" spec="Spec 2.2b"
          instructions="Complete the Effect column for each natural cause.">
          <WkTable id="s1-3-ce"
            head={["Cause / Factor","+/−","Effect / Explanation"]}
            colWidths={["38%","10%",null]}
            rows={[
              ["Eccentricity changes orbit from circular to elliptical","+/−",null],
              ["Increased sunspot activity raises solar output","+",null],
              ["Maunder Minimum — reduced sunspot activity 1645–1715","−",null],
              ["Krakatoa eruption 1883 releases ash into stratosphere","−",null],
              ["Axial tilt increases from 22° to 24.5°","+",null],
              ["Extended volcanic activity over thousands of years","−",null],
            ]} />
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="Circle the correct answer" spec="Spec 2.6a">
          <MCQ id="s1-3-mcq" items={[
            { q: "How long is the Quaternary period?",
              opts: ["100,000 years","500,000 years","1.8 million years","4.5 billion years"] },
            { q: "Which of these is NOT one of the three Milankovitch cycles?",
              opts: ["Eccentricity","Solar variation","Axial tilt","Precession"] },
            { q: "What did the Krakatoa eruption in 1883 cause?",
              opts: ["Global warming of 2°C","Global temperature drop of ~0.3°C","No measurable climate change","A 10-year ice age"] },
            { q: "What is an interglacial?",
              opts: ["A period when ice sheets advance","A warm period between ice ages","A volcanic period in the Quaternary","A long-term cooling trend"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Quaternary Climate Change" folio="3.3">
        <Activity num={4} kind="Exam Practice" title="Exam-style questions" spec="Spec 2.1">
          <ExamTip>For "explain one natural cause" questions (2 marks): name the cause, then explain the mechanism — how does it actually change the climate? Two clear steps = 2 marks. Do not just name the cause and stop.</ExamTip>
          <ExamQuestion id="s1-3-eq1" lines={5}
            prompt="Explain one natural cause of climate change."
            marks={2} />
          <ExamQuestion id="s1-3-eq2" lines={7}
            prompt="Explain how Milankovitch cycles can cause climate change."
            marks={4}
            hint="the three cycles · how they affect solar energy received · effect on global temperature" />
        </Activity>
      </Page>

      {/* ============================================================
          1.4  EVIDENCE FOR NATURAL CLIMATE CHANGE
          ============================================================ */}
      <Page paper={P} running="Section 1 · Evidence for Climate Change" folio="4.1">
        <SubsectionHeader num={4} title="Evidence for Natural Climate Change" spec="Spec 2.2b" />
        <KeyKnowledge
          items={[
            "<strong>Pollen records</strong> — pollen has a tough outer shell that survives for thousands of years in lake sediments and peat bogs. Drilling down through layers reveals which plants were present. Palm tree pollen in UK = once much warmer. <em>Reach</em>: hundreds of thousands of years. <em>Weakness</em>: pollen can blow from elsewhere.",
            "<strong>Tree rings</strong> — one ring per year. Wide rings = warm/wet years; narrow rings = cold/dry. Old or fossilised trees extend the record back thousands of years. <em>Strength</em>: year-by-year accuracy. <em>Weakness</em>: only last few thousand years; shows LOCAL not global climate.",
            "<strong>Ice cores</strong> — snow in Antarctica and Greenland compresses into ice, trapping air bubbles. High CO₂/methane = warmer climate. Antarctic cores show 800,000 years of glacial cycles. <em>Strength</em>: best long-term global record. <em>Weakness</em>: very expensive; only works in icy regions.",
            "<strong>Historical records</strong> — cave paintings, diaries, harvest records, weather logs. Woolly Mammoth cave paintings in France dated to 36,000 years ago → much colder climate. Thames Frost Fairs during the Little Ice Age. <em>Strength</em>: shows human impact. <em>Weakness</em>: biased, patchy — only last few thousand years.",
          ]}
          stats="Ice cores → 800,000 years of data · Cave paintings in France dated to 36,000 years ago · Pollen records → hundreds of thousands of years"
        />
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
          
          
        </div>
        <Activity num={1} kind="Completion Table" title="Sources of evidence" spec="Spec 2.2b"
          instructions="Complete the missing details for each source of evidence.">
          <WkTable id="s1-4-comp"
            head={["Key Term / Concept","Definition / Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["How do pollen records form?", {shaded:true, text:"Pollen falls into lakes/peat bogs and is preserved in layers"}],
              ["What do wide tree rings indicate?", null],
              ["What does high CO₂ in ice core bubbles suggest?", {shaded:true, text:"A warmer climate at that time"}],
              ["How far back can ice cores record climate?", null],
              ["Example from historical records showing cold climate", {shaded:true, text:"Thames Frost Fairs during the Little Ice Age"}],
              ["Weakness of tree rings as evidence", null],
              ["What do cave paintings of Woolly Mammoths tell us?", {shaded:true, text:"France had a much colder climate ~36,000 years ago"}],
              ["Weakness of pollen records", null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Evidence for Climate Change" folio="4.2">
        <Activity num={2} kind="Sort It" title="Strengths vs Weaknesses" spec="Spec 2.2b"
          instructions="Sort each statement into the correct column.">
          <SortIt id="s1-4-sort"
            headLeft="Strength of Evidence"
            headRight="Weakness of Evidence"
            bank={[
              "Year-by-year accuracy (tree rings)",
              "Can blow in from other places (pollen)",
              "800,000 years of data (ice cores)",
              "Only shows local climate (tree rings)",
              "Shows human impact on climate (historical)",
              "Very expensive to collect (ice cores)",
              "Reaches back 100,000s of years (pollen)",
              "Can be exaggerated or incomplete (historical)",
            ]} rows={4} />
        </Activity>

        <Activity num={3} kind="Evaluate Table" title="Sources of evidence" spec="Spec 2.2b"
          instructions="Complete the Limitation column for each source.">
          <WkTable id="s1-4-eval"
            head={["Source","Benefit / Positive","Limitation / Negative"]}
            colWidths={["22%","40%",null]}
            rows={[
              ["Pollen records","Can go back hundreds of thousands of years", null],
              ["Tree rings","Very accurate — year-by-year record of local climate", null],
              ["Ice cores","Best long-term global record; direct sample of past atmosphere", null],
              ["Historical records","Shows how people were affected; cave paintings reach back 36,000 years", null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Evidence for Climate Change" folio="4.3">
        <Activity num={4} kind="Exam Practice" title="Exam-style questions" spec="Spec 2.1">
          <ExamTip>For "describe one piece of evidence" (2 marks): name the type of evidence <strong>and</strong> explain what it shows about past climate. Naming "ice cores" alone scores 0 — say what they actually tell us.</ExamTip>
          <ExamQuestion id="s1-4-eq1" lines={5}
            prompt="Describe one piece of evidence used by scientists to show that climate has changed in the past."
            marks={2} />
          <ExamQuestion id="s1-4-eq2" lines={7}
            prompt="Explain how ice cores provide evidence for climate change. Include specific detail in your answer."
            marks={4} />
        </Activity>
      </Page>

      {/* ============================================================
          1.5  ENHANCED GREENHOUSE EFFECT
          ============================================================ */}
      <Page paper={P} running="Section 1 · The Enhanced Greenhouse Effect" folio="5.1">
        <SubsectionHeader num={5} title="The Enhanced Greenhouse Effect" spec="Spec 2.3" />
        <KeyKnowledge
          paragraphs={[
            "<strong>The natural greenhouse effect.</strong> Short-wave solar radiation passes through the atmosphere and warms Earth's surface. Earth re-emits long-wave (infrared) radiation. Greenhouse gases (CO₂, methane, water vapour, nitrous oxide) absorb this long-wave radiation and re-radiate it back to Earth — keeping the planet warm enough for life.",
            "<strong>The enhanced greenhouse effect.</strong> Human activities have increased the concentration of greenhouse gases, causing MORE heat to be trapped → global warming.",
          ]}
          items={[
            "The four main greenhouse gases: <strong>Carbon dioxide (CO₂), Methane (CH₄), Water vapour, Nitrous oxide (N₂O)</strong>.",
            "<strong>Energy/Electricity</strong> — burning fossil fuels in power stations: 31–33% of emissions in USA and UK.",
            "<strong>Transport</strong> — car exhausts, aircraft, shipping: 27% USA, 21% UK.",
            "<strong>Industry</strong> — manufacturing, cement, chemicals: 21% USA, 12% UK.",
            "<strong>Agriculture</strong> — livestock methane; rice paddies; fertilisers (N₂O): 9% both countries.",
          ]}
          stats="Energy = largest single source in USA (31%) and UK (33%) · CO₂ = 0.03% of atmosphere naturally · Biggest USA-UK gap: transport (27% vs 21%)"
        />

        <Activity num={1} kind="Draw and Label" title="The enhanced greenhouse effect" spec="Spec 2.3a"
          instructions="Draw and fully label the enhanced greenhouse effect. Include: the Sun, short-wave radiation, Earth's surface, long-wave radiation, greenhouse gas layer, natural greenhouse effect, and how human activity has enhanced it.">
          
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · The Enhanced Greenhouse Effect" folio="5.2">
        <Activity num={2} kind="Cause and Effect" title="Human causes" spec="Spec 2.3a"
          instructions="Complete the Effect column to explain how each human activity increases global warming.">
          <WkTable id="s1-5-ce"
            head={["Cause / Factor","+/−","Effect / Explanation"]}
            colWidths={["38%","10%",null]}
            rows={[
              ["Burning fossil fuels in power stations (energy sector)","−",null],
              ["Cars and aircraft burning petrol and aviation fuel","−",null],
              ["Livestock farming producing methane","−",null],
              ["Deforestation — fewer trees to absorb CO₂","−",null],
              ["Industrial processes and cement production","−",null],
              ["Rice paddies producing methane","−",null],
            ]} />
        </Activity>

        <Activity num={3} kind="Data Analysis" title="GHG Emissions — USA vs UK" spec="Spec 2.3a"
          instructions="Study the data, then answer the questions below using data in your answers.">
          <WkTable id="s1-5-data"
            head={["Sector","USA Emissions (%)","UK Emissions (%)"]}
            rows={[
              ["Energy","31","33"],
              ["Transport","27","21"],
              ["Industry","21","12"],
              ["Agriculture","9","9"],
              ["Other (incl. residential)","12","25"],
            ]} />
          <div style={{marginTop:"14px"}}>
            <div style={{fontFamily:"var(--serif)", fontWeight:600, fontSize:"11pt", marginBottom:"6px"}}>1. Which sector produces the most greenhouse gas emissions in both countries?</div>
            <AnswerLines n={2} id="s1-5-data-q1" />
            <div style={{fontFamily:"var(--serif)", fontWeight:600, fontSize:"11pt", margin:"10px 0 6px"}}>2. Describe the biggest difference between USA and UK emission sources.</div>
            <AnswerLines n={3} id="s1-5-data-q2" />
          </div>
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · The Enhanced Greenhouse Effect" folio="5.3">
        <Activity num={4} kind="Exam Practice" title="Exam-style question" spec="Spec 2.1">
          <ExamTip>Be clear on the difference between the <strong>natural greenhouse effect</strong> (essential for life) and the <strong>enhanced greenhouse effect</strong> (caused by humans, increases warming). Describe → Explain → Example = Level 3.</ExamTip>
          <ExamQuestion id="s1-5-eq1" lines={9}
            prompt="Explain the difference between the greenhouse effect and the enhanced greenhouse effect."
            marks={4} />
        </Activity>
      </Page>

      {/* ============================================================
          1.6  IMPACTS OF CLIMATE CHANGE & UK CLIMATE
          ============================================================ */}
      <Page paper={P} running="Section 1 · Impacts of Climate Change" folio="6.1">
        <SubsectionHeader num={6} title="Impacts of Climate Change & UK Climate" spec="Spec 2.3b – 2.4" />
        <KeyKnowledge
          items={[
            "<strong>Environmental.</strong> Amazon drying → loss of biodiversity, Eastern Amazonia may become savannah. Loss of Arctic sea ice → polar bears and walruses lose habitat; new access to oil/gas. Coral bleaching on Great Barrier Reef from warmer, more acidic oceans.",
            "<strong>Social.</strong> Europe: more heatwaves → more deaths; milder winters → more disease. S/E Africa: mosquitoes (malaria) spread into higher latitudes for longer seasons. UK: more skin cancers and asthma, but milder winters reduce cold-related deaths.",
            "<strong>Economic.</strong> UK annual flood cost may rise from £1.2bn to £12bn by the 2080s. South America maize yields may fall by up to 8%. Alpine ski resorts may close as snowfall reduces.",
            "<strong>UK historical climate.</strong> Medieval Warm Period (800–1300): UK 1–2°C above average; vineyards as far north as Yorkshire. Little Ice Age (from ~1300s): England ~1°C cooler, Scotland ~1.5°C cooler; Scottish agriculture failed; Thames froze solid — Frost Fairs held on the ice.",
          ]}
          stats="UK flooding cost £1.2bn → rising to £12bn by 2080s · Maize yields −8% in South America · Medieval Warm Period 800–1300 AD"
        />

        <Activity num={1} kind="Sort It" title="Positive or Negative Impact?" spec="Spec 2.3b"
          instructions="Sort each statement into the correct column.">
          <SortIt id="s1-6-sort"
            headLeft="Positive Impact" headRight="Negative Impact"
            bank={[
              "UK milder winters reduce cold-related deaths",
              "Annual flood cost rises to £12bn by 2080s",
              "New Arctic shipping routes open",
              "Amazon rainforest becomes savannah",
              "Alpine ski resorts close",
              "Malaria spreads to higher latitudes",
              "New oil/gas access in the Arctic",
              "Maize yields fall by up to 8% in South America",
              "Coral bleaching on Great Barrier Reef",
            ]} rows={5} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Impacts of Climate Change" folio="6.2">
        <Activity num={2} kind="Completion Table" title="UK historical climate" spec="Spec 2.4a"
          instructions="Complete the table using your knowledge of the Medieval Warm Period and Little Ice Age.">
          <WkTable id="s1-6-uk"
            head={["Key Term / Concept","Definition / Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Dates of Medieval Warm Period", {shaded:true, text:"800–1300 AD"}],
              ["How much warmer was the UK?", null],
              ["Evidence of Medieval Warm Period (agriculture)", {shaded:true, text:"Vineyards grew as far north as Yorkshire"}],
              ["When did the Little Ice Age begin?", null],
              ["How much cooler was England during Little Ice Age?", {shaded:true, text:"~1°C cooler than average"}],
              ["How much cooler was Scotland?", null],
              ["Evidence from historical records (river)", {shaded:true, text:"River Thames froze solid — Frost Fairs held on the ice"}],
              ["Natural cause of the Little Ice Age", null],
            ]} />
        </Activity>

        <Activity num={3} kind="Cause and Effect" title="Impacts of climate change" spec="Spec 2.3b"
          instructions="Complete the Effect column for each impact.">
          <WkTable id="s1-6-ce"
            head={["Cause / Factor","+/−","Effect / Explanation"]}
            colWidths={["38%","10%",null]}
            rows={[
              ["Rising temperatures → Amazon rainforest drying","−",null],
              ["Warmer oceans → coral bleaching","−",null],
              ["Higher temperatures → mosquitoes spread further","−",null],
              ["More frequent heavy rainfall in UK","−",null],
              ["Milder UK winters (fewer cold snaps)","+",null],
              ["Melting Arctic ice → new shipping routes","+",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Impacts of Climate Change" folio="6.3">
        <Activity num={4} kind="Exam Practice" title="Exam-style questions" spec="Spec 2.1">
          <ExamTip>"Assess the impacts" questions require both positives and negatives AND an overall judgement. Group your impacts using <strong>SEE</strong> (Social, Economic, Environmental), then conclude with the most significant overall. Use specific data wherever possible.</ExamTip>
          <ExamQuestion id="s1-6-eq1" lines={6}
            prompt="Describe the negative economic impacts of climate change. Use examples in your answer."
            marks={3} />
          <ExamQuestion id="s1-6-eq2" lines={14}
            prompt="Assess the extent to which climate change has negative impacts on people and the environment."
            marks={8}
            hint="environmental, social, economic impacts · positive AND negative · named examples · overall judgement" />
        </Activity>
      </Page>

      {/* ---------- 6A UK CLIMATE TODAY (Spec 2.4) ---------- */}
      <Page paper={P} running="Section 1 · UK Climate Today" folio="6A.1">
        <SubsectionHeader num="6A" title="UK Climate Today & Spatial Variation" spec="Spec 2.4" />
        
        <WkTable id="s1-6a-uk"
          head={["Aspect of UK climate","Student-friendly explanation","Exam use"]}
          rows={[
            ["Maritime climate","UK is surrounded by ocean. Water heats and cools slowly, so coastal areas have milder winters and cooler summers than inland.","Why western/coastal areas have smaller temperature ranges."],
            ["Prevailing south-westerly winds","Main winds arrive from the Atlantic, bringing moist air; western uplands get more rainfall.","Why west-east rainfall contrasts exist."],
            ["North Atlantic Drift","A warm current flowing to NW Europe keeps the UK warmer than other places at the same latitude.","Why UK has mild winters for its latitude."],
            ["Latitude","Southern UK is closer to the Equator → more concentrated solar energy.","Why southern England is generally warmer than Scotland."],
            ["Relief","Upland areas force air to rise, cool and condense → relief rainfall; uplands are also cooler with altitude.","Why west-facing uplands (Wales, Lake District, W Scotland) are wet."],
            ["Continentality","Eastern England is further from Atlantic influence: drier, larger annual temperature range.","Why the east is drier with colder winters / hotter summers."],
          ]} />
      </Page>

      <Page paper={P} running="Section 1 · UK Climate Today" folio="6A.2">
        <Activity num={5} kind="Completion Table" title="UK climate patterns" spec="Spec 2.4b–c"
          instructions="Complete the table. Add one named UK example to each row where possible.">
          <WkTable id="s1-6a-comp"
            head={["Pattern","Main cause","Named example / place","Exam sentence"]}
            rows={[
              ["West is wetter than east", null, null, "The west is wetter because…"],
              ["South is warmer than north", null, null, "The south is warmer because…"],
              ["Upland areas are cooler and wetter", null, null, "Upland areas receive more rainfall because…"],
              ["Coastal areas have milder winters", null, null, "Coastal areas have milder winters because…"],
              ["UK winters are milder than expected for latitude", null, null, "The North Atlantic Drift means…"],
            ]} />
        </Activity>

        <Activity num={6} kind="Exam Practice" title="UK climate" spec="Spec 2.4">
          <ExamTip>For UK climate questions, use the <strong>pattern + cause</strong> structure: state the spatial pattern, then explain the physical reason. Use named examples — western Scotland, Wales, eastern England, southern England.</ExamTip>
          <ExamQuestion id="s1-6a-eq1" lines={4} prompt="Describe one spatial variation in UK rainfall." marks={2} />
          <ExamQuestion id="s1-6a-eq2" lines={7} prompt="Explain why western parts of the UK are generally wetter than eastern parts." marks={4} hint="prevailing winds · relief rainfall" />
        </Activity>
      </Page>

      {/* ============================================================
          1.7  TROPICAL CYCLONES — LOCATION & FORMATION
          ============================================================ */}
      <Page paper={P} running="Section 1 · Tropical Cyclones" folio="7.1">
        <SubsectionHeader num={7} title="Tropical Cyclones — Location & Formation" spec="Spec 2.5" />
        <KeyKnowledge
          items={[
            "<strong>Definition</strong> — an intense low-pressure weather system that forms over tropical oceans. Called <em>hurricanes</em> (Atlantic/E Pacific) or <em>typhoons</em> (W Pacific).",
            "Among the most dangerous natural hazards — huge loss of life and property each year.",
            "Transfer heat and energy from the equator to cooler regions — part of Earth's energy system.",
            "<strong>Conditions for formation:</strong> ocean water >27°C; between Tropic of Cancer (23.5°N) and Capricorn (23.5°S), typically 5°–30° latitude; usually end of summer / autumn when seas are warmest.",
            "Average wind speed: 120 km/h. Hurricane = sustained winds ≥74 mph (119 km/h).",
            "Storms have an <strong>eye</strong> (calm centre) surrounded by the <strong>eyewall</strong> where strongest winds and heaviest rain occur.",
            "Strength measured on the <strong>Saffir–Simpson Scale</strong> (Category 1–5).",
          ]}
          stats="Forms at >27°C sea temp · Between 5°–30° N/S · Average wind 120 km/h · Hurricane = ≥119 km/h · Category 5 = >252 km/h"
        />
        

        <Activity num={1} kind="Fill in the Blanks" title="Tropical cyclone formation" spec="Spec 2.5a–b"
          instructions="Use the word bank to complete each sentence.">
          <FillBlanks id="s1-7-blanks"
            bank={["hurricane","typhoon","27°C","equator","eye","Saffir-Simpson","5°","30°","autumn","low pressure","120 km/h","tropics"]}
            items={[
              ["A tropical cyclone is called a ", null, " in the Atlantic and a ", null, " in the western Pacific Ocean."],
              ["Tropical cyclones are intense ", null, " weather systems that form over tropical oceans."],
              ["They require sea temperatures of over ", null, " to form."],
              ["Tropical cyclones form between ", null, " and ", null, " latitude, in the ", null, "."],
              ["They usually form towards the end of summer and in ", null, ", when sea surface temperatures are at their highest."],
              ["The average wind speed of a tropical cyclone is ", null, "."],
              ["The calm centre of a cyclone is called the ", null, "."],
              ["The strength of a tropical cyclone is measured on the ", null, " scale."],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Tropical Cyclones" folio="7.2">
        <Activity num={2} kind="True or False" title="Tropical cyclones" spec="Spec 2.5">
          <WkTable id="s1-7-tf"
            head={["Statement","True / False","Correction (if false)"]}
            colWidths={["52%","18%","30%"]}
            rows={[
              ["Tropical cyclones form over water temperatures above 27°C.", null, null],
              ["Tropical cyclones can form anywhere between the Arctic and Antarctic circles.", null, null],
              ["The eye of a tropical cyclone is the most dangerous part of the storm.", null, null],
              ["Tropical cyclones usually form in spring when the ocean starts to warm.", null, null],
              ["Hurricanes are tropical cyclones that form in the Atlantic or eastern Pacific.", null, null],
              ["The Saffir-Simpson scale measures earthquake magnitude.", null, null],
              ["Category 5 hurricanes have wind speeds greater than 252 km/h.", null, null],
              ["Tropical cyclones help transfer heat from the equator towards the poles.", null, null],
            ]} />
        </Activity>

        <Activity num={3} kind="Draw and Label" title="Structure of a tropical cyclone" spec="Spec 2.5a"
          instructions="Sketch and label a cross-section. Include: eye, eyewall, spiral rainbands, direction of wind rotation, warm ocean surface, rising warm moist air, outflow at the top.">
          
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Tropical Cyclones" folio="7.3">
        <Activity num={4} kind="Exam Practice" title="Tropical cyclone formation" spec="Spec 2.1">
          <ExamTip>For "why" tropical cyclones form in certain locations, reference ALL three conditions: <strong>warm water (&gt;27°C)</strong>, <strong>latitude 5°–30°</strong>, and <strong>time of year</strong>. Missing one loses a mark.</ExamTip>
          <ExamQuestion id="s1-7-eq1" lines={7}
            prompt="Explain why tropical cyclones only form in certain parts of the world."
            marks={4}
            hint="sea temperature · latitude · time of year · distance from equator" />
        </Activity>
      </Page>

      {/* ============================================================
          1.8  TROPICAL CYCLONE HAZARDS
          ============================================================ */}
      <Page paper={P} running="Section 1 · Tropical Cyclone Hazards" folio="8.1">
        <SubsectionHeader num={8} title="Tropical Cyclone Hazards" spec="Spec 2.6a" />
        <KeyKnowledge
          items={[
            "<strong>Wind speeds.</strong> Sustained winds ≥119 km/h (74 mph) = hurricane status. Strongest exceed 250 km/h (155 mph). Category 1 (119–153): minor damage. Category 3 (178–208): structural damage. Category 5 (>252): catastrophic. Winds tear off roofs, topple trees and power lines; debris injures people; comms destroyed.",
            "<strong>Storm surge & coastal flooding.</strong> A rise in sea level caused by LOW air pressure (sea rises into the low) and strong onshore winds pushing water onto land. Can be several metres high — catastrophic coastal flooding.",
            "<strong>Intense rainfall.</strong> Enormous totals from rising warm moist air. Devastating river flooding and inland landslides — sometimes more deadly than coastal impacts.",
            "<strong>Landslides.</strong> Heavy rain saturates slopes + strong winds destabilise soil = landslides in hilly/mountainous areas. Block roads, bury communities.",
          ]}
          stats="Category 5 winds: >252 km/h · Storm surges: several metres · 73 mph = tropical storm; 74 mph+ = hurricane"
        />

        <Activity num={1} kind="Completion Table" title="The Saffir-Simpson Scale" spec="Spec 2.6a"
          instructions="Complete the table to show categories and impacts.">
          <WkTable id="s1-8-comp"
            head={["Key Term / Concept","Definition / Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Category 1 wind speed range",{shaded:true,text:"119–153 km/h"}],
              ["Category 1 typical damage",null],
              ["Category 3 wind speed range",{shaded:true,text:"178–208 km/h"}],
              ["Category 3 typical damage",null],
              ["Category 5 wind speed",{shaded:true,text:"Over 252 km/h"}],
              ["Category 5 typical damage",null],
              ["What creates a storm surge?",null],
              ["Why are storm surges so dangerous?",{shaded:true,text:"Several metres high — catastrophic coastal flooding"}],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Tropical Cyclone Hazards" folio="8.2">
        <Activity num={2} kind="Cause and Effect" title="Tropical cyclone hazards" spec="Spec 2.6a"
          instructions="Complete the Effect column for each cause.">
          <WkTable id="s1-8-ce"
            head={["Cause / Factor","+/−","Effect / Explanation"]}
            colWidths={["40%","10%",null]}
            rows={[
              ["Sustained winds exceeding 200+ km/h","−",null],
              ["Low air pressure at storm centre + onshore winds","−",null],
              ["Enormous amounts of rainfall over a short period","−",null],
              ["Heavy rain saturating steep slopes","−",null],
              ["Tropical cyclone moves inland away from warm water","+",null],
              ["Advanced warning systems and evacuations","+",null],
            ]} />
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="Circle the correct answer" spec="Spec 2.6a">
          <MCQ id="s1-8-mcq" items={[
            { q: "At what wind speed does a tropical storm become a hurricane?",
              opts: ["50 mph (80 km/h)","74 mph (119 km/h)","100 mph (161 km/h)","155 mph (250 km/h)"] },
            { q: "What creates a storm surge?",
              opts: ["Heavy rainfall overflowing rivers","Low pressure and strong onshore winds raising sea level","Strong winds pushing rivers backwards","Tidal waves caused by the cyclone's rotation"] },
            { q: "Which Saffir-Simpson Category causes catastrophic widespread destruction?",
              opts: ["Category 1","Category 2","Category 3","Category 5"] },
            { q: "Why do tropical cyclones cause landslides?",
              opts: ["High pressure causes the ground to crack","Heavy rain saturates slopes and wind destabilises vegetation","Storm surges wash soil into rivers","Extreme heat bakes and cracks hillsides"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Tropical Cyclone Hazards" folio="8.3">
        <Activity num={4} kind="Exam Practice" title="Tropical cyclone hazards" spec="Spec 2.1">
          <ExamTip>Describe the hazard AND explain why it is dangerous to people. "Strong winds" = 1 mark. "Strong winds tear off roofs, block roads with debris, and destroy communication links — preventing emergency response" = far higher.</ExamTip>
          <ExamQuestion id="s1-8-eq1" lines={11}
            prompt="Explain why tropical cyclones are such a significant hazard to people and property."
            marks={6}
            hint="wind · storm surge · rainfall/flooding · landslides — explain the danger of each" />
        </Activity>
      </Page>

      {/* ============================================================
          1.9  HURRICANE SANDY CASE STUDY
          ============================================================ */}
      <Page paper={P} running="Section 1 · Case Study — Hurricane Sandy" folio="9.1">
        <SubsectionHeader num={9} title="Case Study — Hurricane Sandy · Cuba & USA" spec="Spec 2.6b–c" />
        <KeyKnowledge
          items={[
            "Hurricane Sandy struck in <strong>October 2012</strong>. Hit Cuba on 23 October, then moved north affecting 24 US states — particularly New Jersey and New York.",
            "<strong>Cuba — Social.</strong> 11 killed. 55,000+ evacuated. ~17,000 homes destroyed; 226,000 damaged. Large areas lost electricity and fresh water.",
            "<strong>Cuba — Economic.</strong> Total losses ~$2 billion. Santiago de Cuba: £50m losses in infrastructure/agriculture. GDP fell 5%. Roads to airport blocked → tourism halted.",
            "<strong>Cuba — Environmental.</strong> 2,600 ha banana crops destroyed. Coffee plantations swept away by landslides. Coastal flooding eroded beaches; trees uprooted.",
            "<strong>USA — Social.</strong> 117 killed. ~9 million homes lost power. 650,000 homes damaged or destroyed. 250,500 cars destroyed. NYC streets and subway flooded.",
            "<strong>USA — Economic.</strong> New York alone: $19bn damages. NJ insurance claims: $3.3bn. $1.1bn for sewage/water pipe repairs in NY and NJ.",
            "<strong>USA — Environmental.</strong> Storm surge pushed seawater into freshwater habitats (Delaware Bay → Long Island Sound). 1.5 billion litres of sewage released into Raritan River. 90% of NY/NJ beaches damaged, reduced by 9–12 m. 1.5 million litres of oil spilled into Arthur Kill.",
          ]}
          stats="Cuba: 11 deaths, $2bn damage · USA: 117 deaths, $19bn in NY alone · 650,000 US homes damaged · 2,600 ha banana crops destroyed in Cuba"
        />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
          
          
        </div>
      </Page>

      <Page paper={P} running="Section 1 · Case Study — Hurricane Sandy" folio="9.2">
        <Activity num={1} kind="Compare Table" title="Cuba vs USA" spec="Spec 2.6b"
          instructions="Complete the comparison table using the key knowledge.">
          <WkTable id="s1-9-comp"
            head={["Aspect","Cuba","USA"]}
            rows={[
              ["Deaths","11 people killed","117 people killed"],
              ["Homes damaged/destroyed","17,000 destroyed; 226,000 damaged",null],
              ["Economic damage",null,"$19 billion in New York alone"],
              ["Main environmental impact","2,600 ha banana crops destroyed",null],
              ["Government response",null,null],
              ["Why impacts differed (development)",null,null],
            ]} />
        </Activity>

        <Activity num={2} kind="Cause and Effect" title="Why impacts differed" spec="Spec 2.6b"
          instructions="Complete the Effect column.">
          <WkTable id="s1-9-ce"
            head={["Cause / Factor","+/−","Effect / Explanation"]}
            colWidths={["44%","10%",null]}
            rows={[
              ["Cuba is a developing country with less robust building standards","−",null],
              ["USA has widespread home insurance and government compensation schemes","+",null],
              ["Cuba government issued early warnings and evacuated 55,000 people","+",null],
              ["USA's higher GDP means more economic damage in absolute terms","−",null],
              ["Cuba relies heavily on agriculture — banana and coffee crops destroyed","−",null],
              ["USA has better infrastructure for emergency response","+",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Case Study — Hurricane Sandy" folio="9.3">
        <Activity num={3} kind="True or False" title="Sandy facts" spec="Spec 2.6b">
          <WkTable id="s1-9-tf"
            head={["Statement","True / False","Correction (if false)"]}
            colWidths={["52%","18%","30%"]}
            rows={[
              ["Hurricane Sandy killed more people in Cuba than in the USA.", null, null],
              ["The USA experienced more economic damage in absolute terms than Cuba.", null, null],
              ["Cuba's GDP fell by 5% following Hurricane Sandy.", null, null],
              ["9 million homes in Cuba lost power during Hurricane Sandy.", null, null],
              ["The storm surge pushed seawater into freshwater habitats along the US coastline.", null, null],
              ["Cuba evacuated over 55,000 people before Sandy made landfall.", null, null],
              ["90% of beaches in Cuba were damaged by the storm.", null, null],
            ]} />
        </Activity>

        <Activity num={4} kind="Exam Practice" title="Developing vs developed impacts" spec="Spec 2.1">
          <ExamTip>"Assess" questions on developed vs developing need <strong>both sides</strong> + a judgement. (1) Developing countries experience greater <em>social</em> impacts because… (2) Developed countries experience greater <em>economic</em> impacts because… (3) However, development also means better response because… (4) Overall judgement. Use Sandy data throughout.</ExamTip>
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Case Study — Hurricane Sandy" folio="9.4">
        <ExamQuestion id="s1-9-eq" lines={20}
          prompt="“The impacts of tropical cyclones are much greater in developing or emerging countries than in developed countries.” Assess this statement."
          marks={8}
          hint="social, economic, environmental impacts · Cuba vs USA · reasons for differences · overall judgement" />
      </Page>

      {/* ============================================================
          1.10  CAUSES OF DROUGHT
          ============================================================ */}
      <Page paper={P} running="Section 1 · Causes of Drought" folio="10.1">
        <SubsectionHeader num={10} title="Causes of Drought" spec="Spec 2.7" />
        <KeyKnowledge
          items={[
            "<strong>Drought.</strong> A prolonged period of below-average precipitation resulting in water-supply shortages. It is a natural hazard — an anomaly, not a permanently dry climate.",
            "<strong>Arid</strong> environments are naturally dry — low rainfall all year round. <strong>Drought</strong> is a period when rainfall falls below normal for that area. Different things.",
            "<strong>Meteorological drought.</strong> Less rainfall than normal over a prolonged period. High-pressure systems block moist air from rising → no clouds → no rain. Weakened monsoon or El Niño can also reduce rainfall. <em>Example:</em> East Africa 2011 — two failed rainy seasons due to Indian Ocean wind changes.",
            "<strong>Hydrological drought.</strong> Rivers, lakes, groundwater drop below normal. Low rainfall means rivers aren't replenished; hotter temperatures increase evaporation. <em>Example:</em> California 2014–2016 — record-low Sierra Nevada snowpack.",
            "<strong>Agricultural drought (human).</strong> Insufficient water for crops/livestock. Over-irrigation and water-intensive crops (rice, cotton) drain water supplies. <em>Example:</em> Northern India — heavy irrigation for rice and sugarcane has lowered groundwater.",
            "<strong>Dam building (human).</strong> Large dams trap river water, reducing flow downstream. <em>Example:</em> Atatürk Dam, Turkey — reduced flow into Syria and Iraq.",
            "<strong>Deforestation (human).</strong> Fewer trees → less transpiration → less atmospheric moisture → less rainfall. Roots removed so soils hold less water. <em>Example:</em> Amazon.",
            "Many arid areas at 30°N and 30°S — where descending air in the Hadley Cell creates HIGH PRESSURE and suppresses rainfall.",
          ]}
          stats="East Africa 2011: two failed rainy seasons · California 2014–2016: record-low snowpack · Arid areas concentrated at ~30°N and 30°S"
        />
      </Page>

      <Page paper={P} running="Section 1 · Causes of Drought" folio="10.2">
        <Activity num={1} kind="Match-Up" title="Types of drought" spec="Spec 2.7b"
          instructions="Match each type of drought (or related term) to its definition or example.">
          <MatchTable id="s1-10-match"
            left={["Meteorological drought","Hydrological drought","Agricultural drought","Dam building","Deforestation","El Niño","Atatürk Dam","Hadley Cell"]}
            right={[
              "Below-average precipitation over a prolonged period; blocked by high pressure",
              "Rivers and groundwater levels fall below normal; evaporation increases",
              "Insufficient water for crops; over-irrigation and water-intensive farming drain supplies",
              "Traps water upstream; downstream communities face water shortages (Turkey example)",
              "Removal of forest reduces transpiration and rainfall; soils lose water-holding capacity",
              "Changes in Pacific Ocean temperatures that disrupt rainfall patterns globally",
              "Reduced water flow into Syria and Iraq — a case study in human-induced drought",
              "Descending air at 30°N/S creates high pressure → suppresses rainfall → arid areas",
            ]} />
        </Activity>

        <Activity num={2} kind="Completion Table" title="Causes and examples" spec="Spec 2.7"
          instructions="Fill in the missing definitions, causes, or examples.">
          <WkTable id="s1-10-comp"
            head={["Key Term / Concept","Definition / Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Definition of drought", null],
              ["Example of meteorological drought", {shaded:true, text:"East Africa 2011 — two failed rainy seasons"}],
              ["How high pressure causes drought", null],
              ["Example of hydrological drought", {shaded:true, text:"California 2014–2016 — low snowpack reduced rivers/reservoirs"}],
              ["How over-irrigation causes agricultural drought", null],
              ["How dam building creates drought downstream", {shaded:true, text:"Traps water upstream; downstream areas receive less (e.g. Atatürk Dam)"}],
              ["How deforestation contributes to drought", null],
              ["Why areas at 30°N and 30°S are prone to drought", {shaded:true, text:"Hadley Cell descending dry air creates high pressure, suppressing rainfall"}],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Causes of Drought" folio="10.3">
        <Activity num={3} kind="Evaluate Table" title="Human vs natural" spec="Spec 2.7b"
          instructions="Assess whether each cause is mainly natural or human.">
          <WkTable id="s1-10-eval"
            head={["Factor","Natural element","Human element"]}
            rows={[
              ["Meteorological drought (high pressure)","Naturally occurring; part of global circulation",null],
              ["El Niño events","Natural ocean-atmosphere interaction",null],
              ["Over-irrigation (agriculture)",null,"Entirely human-caused; drains groundwater unsustainably"],
              ["Dam building",null,null],
              ["Deforestation",null,null],
              ["Strengthening of Hadley Cell (climate change)","Natural process","Enhanced by human-caused climate change"],
            ]} />
        </Activity>

        <Activity num={4} kind="Exam Practice" title="Causes of drought" spec="Spec 2.1">
          <ExamTip>For "explain" questions on drought causes you need a clear <strong>mechanism</strong>, not just a name. Bad: "Deforestation causes drought." Good: "Deforestation removes trees → less transpiration → less moisture in the atmosphere → less rainfall → reduced water supply over time."</ExamTip>
          <ExamQuestion id="s1-10-eq1" lines={7}
            prompt="Explain one human cause of drought. Use an example in your answer." marks={4} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Causes of Drought" folio="10.4">
        <ExamQuestion id="s1-10-eq2" lines={20}
          prompt="“Humans are the main cause of drought.” Assess this statement."
          marks={8}
          hint="natural causes (meteorological, hydrological, atmospheric circulation) · human causes (agriculture, dams, deforestation) · overall conclusion" />
      </Page>

      {/* ============================================================
          1.11  DROUGHT IMPACTS & RESPONSES
          ============================================================ */}
      <Page paper={P} running="Section 1 · Drought Impacts & Responses" folio="11.1">
        <SubsectionHeader num={11} title="Drought Impacts and Responses" spec="Spec 2.8" />
        <KeyKnowledge
          paragraphs={[
            "Drought becomes hazardous when below-average rainfall reduces water supply for people, farming, industry and ecosystems. Physical causes may be similar, but <strong>impacts and responses</strong> vary depending on wealth, infrastructure, governance and reliance on rain-fed farming.",
          ]}
        />
        <WkTable id="s1-11-cs"
          head={["Named example","Development level","Why vulnerable?","Core idea"]}
          rows={[
            ["California, USA (2014 drought)","Developed","Persistent high pressure blocked winter storms; high water demand from farms, cities and industry.","Wealth allowed monitoring, restrictions, groundwater pumping and ecosystem support, but losses were still very high."],
            ["Namibia (2012–2013 drought)","Developing / emerging","Subtropical high pressure and cold Benguela Current reduce rainfall; rain-fed farming and livestock common.","Lower income and weaker infrastructure meant more severe food insecurity, migration and dependence on emergency aid."],
          ]} />

        <Activity num={1} kind="SEE Impacts" title="California vs Namibia" spec="Spec 2.8b"
          instructions="Fill in social, economic and environmental impacts for both droughts.">
          <WkTable id="s1-11-see"
            head={["Type of impact","California, USA (2014)","Namibia (2012–13)"]}
            rows={[
              ["Social", null, null],
              ["Economic", null, null],
              ["Environmental", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 1 · Drought Impacts & Responses" folio="11.2">
        <Activity num={2} kind="Responses" title="Comparing responses" spec="Spec 2.8c"
          instructions="Compare short-term and long-term responses in each country.">
          <WkTable id="s1-11-resp"
            head={["Response","California, USA","Namibia"]}
            rows={[
              ["Short-term (immediate)", null, null],
              ["Long-term (planning)", null, null],
              ["Reliance on aid / external support", null, null],
              ["Use of technology", null, null],
            ]} />
        </Activity>

        <Activity num={3} kind="Exam Practice" title="Drought responses" spec="Spec 2.8">
          <ExamTip>For "compare responses" questions, contrast <strong>like with like</strong>: California's restrictions vs Namibia's emergency aid; California's groundwater pumping vs Namibia's water trucking. Always state which response is <em>more sustainable</em> and why.</ExamTip>
          <ExamQuestion id="s1-11-eq1" lines={11}
            prompt="Compare the impacts and responses to drought in a developed country and a developing/emerging country."
            marks={6}
            hint="impacts (SEE) · responses (short / long term) · why responses differ · sustainability" />
        </Activity>
      </Page>

      {/* ============================================================
          KNOWLEDGE CHECK
          ============================================================ */}
      <Page paper={P} running="Section 1 · Knowledge Check" folio="KC.1">
        <SubsectionHeader num={12} title="Knowledge Check — 20 Quick-Fire Questions" spec="All of Section 1" />
        <NoteP>Close your notes. Answer from memory. Check your answers and tick each one when correct.</NoteP>
        <WkTable id="s1-kc"
          head={["#","Question","Answer","✓"]}
          colWidths={["6%","48%",null,"6%"]}
          rows={[
            ["1","What is the difference between weather and climate?", null, null],
            ["2","In which layer of the atmosphere does most weather take place?", null, null],
            ["3","Name the three global atmospheric circulation cells.", null, null],
            ["4","Why are areas near the equator warmer than the poles?", null, null],
            ["5","Name the warm current that keeps UK winters mild.", null, null],
            ["6","By how much would UK winters cool without the Gulf Stream?", null, null],
            ["7","What is the Quaternary period?", null, null],
            ["8","What is the difference between a glacial and an interglacial?", null, null],
            ["9","Name the three Milankovitch cycles.", null, null],
            ["10","How did the Krakatoa eruption (1883) affect global climate?", null, null],
          ]} />
      </Page>

      <Page paper={P} running="Section 1 · Knowledge Check" folio="KC.2">
        <WkTable id="s1-kc2"
          head={["#","Question","Answer","✓"]}
          colWidths={["6%","48%",null,"6%"]}
          rows={[
            ["11","How do tree rings provide evidence for past climate?", null, null],
            ["12","How far back can ice cores record climate history?", null, null],
            ["13","What is the enhanced greenhouse effect?", null, null],
            ["14","Name the four main greenhouse gases.", null, null],
            ["15","What sea temperature is needed for a tropical cyclone to form?", null, null],
            ["16","Between which latitudes do tropical cyclones form?", null, null],
            ["17","What is a storm surge?", null, null],
            ["18","How many people were killed by Hurricane Sandy in Cuba vs USA?", null, null],
            ["19","Give two human causes of drought.", null, null],
            ["20","Why are areas at 30°N and 30°S particularly prone to drought?", null, null],
          ]} />
        <HrOrn />
      </Page>

      {/* ============================================================
          RAG SELF-ASSESSMENT
          ============================================================ */}
      <Page paper={P} running="Section 1 · RAG Self-Assessment" folio="RAG">
        <SubsectionHeader num={13} title="RAG Self-Assessment — Global Climate & Weather Hazards" spec="" />
        <NoteP>Tick a box to show your confidence. Come back to red and amber topics before your exam.</NoteP>
        <RAGTable items={[
          "Explain the difference between weather and climate",
          "Describe the three global atmospheric circulation cells",
          "Explain why equatorial areas are hotter than the poles (latitude)",
          "Explain how ocean currents transfer heat around the Earth",
          "Explain why the UK has milder winters than expected for its latitude",
          "Define the Quaternary period and explain glacials vs interglacials",
          "Explain the three Milankovitch cycles as a cause of climate change",
          "Explain how volcanic eruptions and solar variation cause climate change",
          "Describe how tree rings provide evidence for past climate",
          "Describe how ice cores provide evidence for past climate",
          "Describe how historical records provide evidence for past climate",
          "Explain the difference between the greenhouse effect and enhanced greenhouse effect",
        ]} />
      </Page>

      <Page paper={P} running="Section 1 · RAG Self-Assessment" folio="RAG.2">
        <RAGTable items={[
          "Name the four main greenhouse gases and their sources",
          "Describe positive and negative environmental impacts of climate change",
          "Describe positive and negative economic impacts of climate change (UK & global)",
          "Describe the UK's Medieval Warm Period and Little Ice Age with evidence",
          "Define tropical cyclone and explain conditions needed for formation",
          "Explain the four main hazards caused by tropical cyclones",
          "Compare the impacts of Hurricane Sandy on Cuba and the USA",
          "Explain why impacts differ between developed and developing countries",
          "Explain the difference between arid environments and drought",
          "Explain meteorological and hydrological drought with examples",
          "Explain three human causes of drought with examples",
          'Write an 8-mark "assess" answer on tropical cyclone impacts',
        ]} />
      </Page>

    </React.Fragment>
  );
}

window.Section1 = Section1;
