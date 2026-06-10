/* SECTION 2 — Coastal Landscapes (Paper 1) */
function Section2() {
  const P = "1";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="Paper 1 · Component 1 · Topic 1A" num="2"
        title="Coastal Landscapes"
        subtitle="UK landscapes, coastal processes, landforms and management."
        meta={["Edexcel A · 1GA0/01","Holderness case study","Knowledge check + RAG"]}
        covers={[
          "UK Geology & Landscape","Coastal Processes",
          "Transportation & Deposition","Erosional & Depositional Landforms",
          "Human Activity & Coastal Management","Holderness — fastest eroding coast in Europe",
          "Named Distinctive Landscape","Knowledge Check & RAG",
        ]}
        routine="Revision routine — complete each activity in order, correct in purple pen, highlight topics you need to revisit before the exam." />

      {/* ---------- 1 UK GEOLOGY ---------- */}
      <Page paper={P} running="Section 2 · UK Geology & Landscape" folio="1.1">
        <SubsectionHeader num={1} title="UK Geology & Landscape" spec="Spec 1.1–1.2" />
        <KeyKnowledge
          items={[
            "<strong>Three main UK rock types.</strong> <em>Sedimentary</em> (chalk, sandstone) — formed from compressed layers; generally softer and more easily eroded. <em>Igneous</em> (basalt, granite) — formed from cooled magma; very hard and resistant. <em>Metamorphic</em> (schist, slate) — existing rocks transformed by heat/pressure; hard and resistant.",
            "<strong>Upland landscapes</strong> — igneous/metamorphic rock; very resistant; shaped by glacial erosion, frost action and mass movement. <em>Examples:</em> Scottish Highlands, Lake District.",
            "<strong>Lowland landscapes</strong> — sedimentary rock; less resistant; shaped by river processes, weathering and human activity. <em>Examples:</em> East Anglia, South-East England.",
          ]}
          stats="Sedimentary = softer · Igneous/metamorphic = hard, resistant · Upland UK = NW & Scotland · Lowland UK = SE England & East Anglia"
        />
        
        <Activity num={1} kind="Completion Table" title="Rock types" spec="Spec 1.1a"
          instructions="Fill in the missing characteristics for each rock type.">
          <WkTable id="s2-1-rocks" head={["Rock type","Hardness","How it forms","UK example"]}
            rows={[
              ["Sedimentary (chalk, sandstone)", null, null, null],
              ["Igneous (basalt, granite)", null, null, null],
              ["Metamorphic (schist, slate)", null, null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · UK Geology & Landscape" folio="1.2">
        <Activity num={2} kind="Sort It" title="Upland vs Lowland" spec="Spec 1.1b–1.2"
          instructions="Write each statement in the correct column.">
          <SortIt id="s2-1-sort" headLeft="Upland (igneous / metamorphic)" headRight="Lowland (sedimentary)"
            bank={[
              "Granite forms the rock","Chalk forms the rock",
              "Shaped by glacial erosion","Shaped by river processes",
              "Found in Scottish Highlands","Found in East Anglia",
              "Very resistant to erosion","Erodes more easily",
            ]} rows={4} />
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="UK geology" spec="Spec 1.1–1.2">
          <MCQ id="s2-1-mcq" items={[
            { q: "Which rock type is formed from cooled magma?", opts: ["Sedimentary","Metamorphic","Igneous","Chalk"] },
            { q: "Which landscape type is associated with hard igneous and metamorphic rocks?", opts: ["Lowland","Valley","Coastal plain","Upland"] },
            { q: "Which of these is an example of sedimentary rock?", opts: ["Granite","Basalt","Chalk","Schist"] },
            { q: "What mainly shapes relict upland glaciated landscapes today?", opts: ["River deposition","Mass movement and frost action","Longshore drift","Human farming"] },
          ]} />
        </Activity>
      </Page>

      {/* ---------- 2 COASTAL PROCESSES ---------- */}
      <Page paper={P} running="Section 2 · Coastal Processes" folio="2.1">
        <SubsectionHeader num={2} title="Coastal Processes" spec="Spec 1.3" />
        <KeyKnowledge
          items={[
            "<strong>Constructive waves.</strong> Low frequency (6–8/min), long wavelength, low height. Strong swash &gt; weak backwash. Main process: <strong>deposition</strong>.",
            "<strong>Destructive waves.</strong> High frequency (10–14/min), short wavelength, high height. Weak swash &lt; strong backwash. Main process: <strong>erosion</strong>.",
            "<strong>Fetch.</strong> Distance of open water over which wind blows to create waves. Greater fetch = more powerful waves. UK's dominant fetch is from the SW (Atlantic).",
            "<strong>Four processes of erosion.</strong> <em>Hydraulic action</em> — water compresses air in cracks, breaking rock apart. <em>Abrasion</em> — waves hurl sediment against cliff, wearing it away. <em>Attrition</em> — rocks collide and become smaller and rounder. <em>Solution (corrosion)</em> — acidic seawater dissolves chalk/limestone.",
            "<strong>Weathering.</strong> <em>Mechanical</em> (freeze-thaw) — water freezes in cracks, expands, shatters rock. <em>Chemical</em> (carbonation) — rainwater + CO₂ dissolves chalk/limestone. <em>Biological</em> — plant roots and burrowing organisms break down rock.",
            "<strong>Mass movement.</strong> <em>Sliding</em> — saturated rock moves suddenly downslope as one mass. <em>Slumping</em> — material rotates along a curved surface; common in soft cliffs (boulder clay).",
            "<strong>UK weather & climate effects.</strong> Winter storms → more wave energy; SW winds drive powerful Atlantic waves; winter saturation → more mass movement; rising sea levels increase wave reach.",
          ]}
          stats="UK dominant fetch: SW (Atlantic) · Destructive 10–14 waves/min · Constructive 6–8 waves/min"
        />
        <Activity num={4} kind="Draw and Label" title="Wave types" spec="Spec 1.3b">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            
            
          </div>
          <WkTable id="s2-2-waves" head={["","Constructive Wave","Destructive Wave"]}
            rows={[
              ["Frequency (waves/min)", null, null],
              ["Swash vs Backwash", null, null],
              ["Main process (erosion/deposition?)", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Coastal Processes" folio="2.2">
        <Activity num={5} kind="Fill in the Blanks" title="Erosion processes" spec="Spec 1.3a"
          instructions="Use the word bank to complete each sentence.">
          <FillBlanks id="s2-2-blanks"
            bank={["hydraulic action","abrasion","attrition","solution","cracks","sediment","rounder","acidic"]}
            items={[
              [null, ": the force of water compresses air in ", null, " in the cliff, forcing them apart."],
              [null, ": waves throw ", null, " against the cliff face, wearing it away like sandpaper."],
              [null, ": rocks collide and become smaller and ", null, "."],
              [null, " (corrosion): slightly ", null, " seawater dissolves minerals in rock such as chalk."],
            ]} />
        </Activity>

        <Activity num={6} kind="Completion Table" title="Weathering & mass movement" spec="Spec 1.3a">
          <WkTable id="s2-2-weath" head={["Type","How it works","Coastal example"]}
            rows={[
              ["Mechanical (freeze-thaw)", null, null],
              ["Chemical (carbonation)", null, null],
              ["Biological", null, null],
              ["Sliding", null, null],
              ["Slumping", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Coastal Processes" folio="2.3">
        <Activity num={7} kind="Completion Table" title="UK weather & climate effects" spec="Spec 1.3c">
          <WkTable id="s2-2-uk" head={["Climate / weather factor","Effect on coastal erosion"]}
            colWidths={["38%",null]}
            rows={[
              ["Winter storm frequency", null],
              ["Prevailing SW winds", null],
              ["Seasonality", null],
              ["Rising sea levels", null],
            ]} />
          <div style={{marginTop:"12px"}}>
            <div style={{fontWeight:600, fontSize:"11pt"}}>Which direction is the UK's dominant fetch and why?</div>
            <AnswerLines n={3} id="s2-2-fetch" />
          </div>
        </Activity>

        <Activity num={8} kind="Exam Practice" title="Exam-style question" spec="Spec 1.3">
          <ExamTip>"Examine" questions come with a figure. Use evidence from the figure <strong>and</strong> your own knowledge of processes and geology.</ExamTip>
          <ExamQuestion id="s2-2-eq" lines={7}
            prompt="Explain the factors that affect the rate of coastal erosion."
            marks={4} hint="rock type · fetch · wave type · weather · human activity — 4 developed points" />
        </Activity>
      </Page>

      {/* ---------- 3 TRANSPORTATION & DEPOSITION ---------- */}
      <Page paper={P} running="Section 2 · Transportation & Deposition" folio="3.1">
        <SubsectionHeader num={3} title="Transportation & Deposition" spec="Spec 1.3a" />
        <KeyKnowledge items={[
          "<strong>Four processes of transportation.</strong> <em>Traction</em> — large boulders rolled along the seabed. <em>Saltation</em> — pebbles bounced in a hopping motion. <em>Suspension</em> — fine sand/silt carried within the water. <em>Solution</em> — minerals dissolved and carried invisibly.",
          "<strong>Longshore drift (LSD).</strong> Waves approach the beach at an angle (prevailing wind). Swash carries sediment up at 45°. Backwash returns it straight down at 90° (gravity). NET movement is along the coast.",
          "<strong>Deposition occurs when</strong> the sea loses energy (calm/sheltered locations), the coastline changes direction (LSD slows and drops sediment), or constructive waves dominate (more deposited than removed).",
        ]} />
        <Activity num={9} kind="Match-Up" title="Transportation processes" spec="Spec 1.3a">
          <MatchTable id="s2-3-match"
            left={["Traction","Saltation","Suspension","Solution"]}
            right={["Large boulders rolled along the seabed","Pebbles bounced along in a hopping motion","Fine sand and silt carried within the water","Minerals dissolved and carried invisibly"]} />
        </Activity>
        <Activity num={10} kind="Draw and Explain" title="Longshore drift" spec="Spec 1.3a">
          
          <div style={{marginTop:"12px"}}>
            <div style={{fontWeight:600, fontSize:"11pt"}}>Explain WHY longshore drift occurs:</div>
            <AnswerLines n={3} id="s2-3-lsd" />
          </div>
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Transportation & Deposition" folio="3.2">
        <Activity num={11} kind="Completion Table" title="When and where does deposition occur?" spec="Spec 1.3a">
          <WkTable id="s2-3-dep" head={["Condition","Explanation"]}
            colWidths={["32%",null]}
            rows={[
              ["Sea loses energy", null],
              ["Sheltered / bay location", null],
              ["Constructive waves dominate", null],
              ["Change in coastline direction", null],
            ]} />
        </Activity>

        <Activity num={12} kind="True or False" title="Movement at the coast" spec="Spec 1.3">
          <WkTable id="s2-3-tf" head={["Statement","True / False","Correction"]}
            colWidths={["56%","14%","30%"]}
            rows={[
              ["Swash carries sediment up the beach at 90° to the shoreline.", null, null],
              ["Backwash returns sediment straight down the beach due to gravity.", null, null],
              ["Traction involves large boulders being bounced along the seabed.", null, null],
              ["Deposition is most likely in exposed, high-energy locations.", null, null],
              ["Longshore drift moves sediment along the coast in a net direction.", null, null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 4 LANDFORMS ---------- */}
      <Page paper={P} running="Section 2 · Erosional & Depositional Landforms" folio="4.1">
        <SubsectionHeader num={4} title="Erosional & Depositional Landforms" spec="Spec 1.4" />
        <KeyKnowledge items={[
          "<strong>Concordant coastline.</strong> Rock bands run <em>parallel</em> to the coast. Resistant rock shields weaker rock behind. Creates straighter coastline. <em>UK example:</em> Lulworth Cove, Dorset.",
          "<strong>Discordant coastline.</strong> Rock bands run <em>perpendicular</em> to the coast. Alternating hard/soft rock → bays and headlands. <em>UK example:</em> Swanage Bay, Dorset.",
          "<strong>Headland sequence:</strong> Headland → Cave → Arch → Stack → Stump. Waves exploit joints/faults. Hydraulic action and abrasion form a CAVE. Erosion on both sides creates an ARCH. The roof collapses → STACK. Further erosion → STUMP (visible only at low tide).",
          "<strong>Wave-cut platform.</strong> Waves attack the base of a cliff → wave-cut NOTCH forms → overhang unsupported → collapses → cliff RETREATS → flat rocky PLATFORM at the base.",
          "<strong>Depositional landforms.</strong> <em>Beach</em> — sediment from constructive waves; backed by dunes or cliffs. <em>Spit</em> — LSD extends sediment beyond a coastline change; curved hook from cross-winds; salt marsh in sheltered water behind. <em>Bar</em> — spit extends across a bay, enclosing a lagoon. <em>Salt marsh</em> — accumulates in sheltered water behind a spit or bar.",
        ]} stats="Sequence: Headland → Cave → Arch → Stack → Stump · Concordant = parallel · Discordant = perpendicular" />
        <Activity num={13} kind="Draw and Label" title="Concordant vs discordant" spec="Spec 1.3b">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            
            
          </div>
          <WkTable id="s2-4-concdisc" head={["","Concordant","Discordant"]}
            rows={[["Definition", null, null],["Landforms", null, null],["UK example", null, null]]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Erosional & Depositional Landforms" folio="4.2">
        <Activity num={14} kind="Draw and Label" title="Cave → Arch → Stack → Stump" spec="Spec 1.4a">
          
          <div style={{marginTop:"12px"}}>
            <div style={{fontWeight:600, fontSize:"11pt"}}>Which erosion processes are most important in forming these landforms and why?</div>
            <AnswerLines n={3} id="s2-4-eros" />
          </div>
        </Activity>

        <Activity num={15} kind="Draw and Complete" title="Wave-cut platform" spec="Spec 1.4a">
          
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Erosional & Depositional Landforms" folio="4.3">
        <Activity num={16} kind="Draw and Label" title="Spit" spec="Spec 1.4b">
          
        </Activity>

        <Activity num={17} kind="MCQ Checkpoint" title="Landforms" spec="Spec 1.4">
          <MCQ id="s2-4-mcq" items={[
            { q: "What type of coastline has alternating bands of hard and soft rock at right angles to the sea?",
              opts: ["Concordant","Discordant","Depositional","Retreating"] },
            { q: "What is the correct order of landform development on a headland?",
              opts: ["Cave → Stack → Arch → Stump","Arch → Cave → Stack → Stump","Cave → Arch → Stack → Stump","Stack → Cave → Arch → Stump"] },
            { q: "What feature forms at the base of a cliff before it collapses?",
              opts: ["Salt marsh","Stack","Wave-cut notch","Spit"] },
            { q: "A spit develops a curved hook because of…",
              opts: ["Longshore drift changing direction","Strong backwash","Cross-winds altering wave direction","Constructive waves depositing sediment"] },
          ]} />
        </Activity>

        <Activity num={18} kind="Exam Practice" title="Spit formation" spec="Spec 1.4">
          <ExamQuestion id="s2-4-eq" lines={9}
            prompt="Explain how a spit is formed."
            marks={4}
            hint="longshore drift · prevailing wind · deposition · change in coastline direction · curved hook · salt marsh" />
        </Activity>
      </Page>

      {/* ---------- 5 HUMAN ACTIVITY & COASTAL MANAGEMENT ---------- */}
      <Page paper={P} running="Section 2 · Human Activity & Management" folio="5.1">
        <SubsectionHeader num={5} title="Human Activity & Coastal Management" spec="Spec 1.5" />
        <KeyKnowledge items={[
          "<strong>How humans change the coast.</strong> <em>Urbanisation</em> — building on coastal land increases runoff, removes vegetation, adds weight to cliffs. <em>Agriculture</em> — wetland drainage removes natural buffers; ploughing increases runoff. <em>Industry</em> — ports/jetties interrupt LSD → sediment starvation downdrift. <em>Tourism</em> — footpath erosion destabilises dunes and cliff edges.",
          "<strong>Hard engineering.</strong> <em>Sea wall</em> — reflects wave energy; expensive (£1,000s/m); creates scour. <em>Groynes</em> — trap LSD sediment; starve beaches downdrift. <em>Rip rap</em> — absorbs wave energy; cheaper but unsightly. <em>Offshore breakwater</em> — reduces wave energy before it reaches shore.",
          "<strong>Soft engineering.</strong> <em>Beach nourishment</em> — adds sand/sediment; works with natural processes; needs repeating. <em>Managed retreat</em> — allow lower-value land to flood; creates salt marsh as natural buffer; cheapest long-term.",
        ]} stats="English Channel sea levels ↑ 12 cm in last 100 years · 2.1 million UK homes at flood risk · 1953 North Sea surge: 307 killed, 24,000 properties damaged" />
        <Activity num={19} kind="Completion Table" title="How humans change the coast" spec="Spec 1.5a">
          <WkTable id="s2-5-human" head={["Human activity","Effect on coastal landscape","Example"]}
            rows={[
              ["Urbanisation", null, null],
              ["Agriculture (wetland drainage)", null, null],
              ["Industry (ports, jetties)", null, null],
              ["Tourism development", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Human Activity & Management" folio="5.2">
        <Activity num={20} kind="SEE Effects" title="Coastal recession & flooding" spec="Spec 1.5a">
          <WkTable id="s2-5-see" head={["Social effects","Economic effects","Environmental effects"]}
            rows={[[null,null,null],[null,null,null]]} />
        </Activity>

        <Activity num={21} kind="Pros & Cons" title="Coastal defences" spec="Spec 1.5b" instructions="Fill in the missing details for each strategy.">
          <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:"9pt", letterSpacing:".15em", color:"var(--accent)", textTransform:"uppercase", margin:"4px 0 6px"}}>Hard engineering</div>
          <WkTable id="s2-5-hard" head={["Strategy","How it works","Advantage","Disadvantage"]}
            rows={[
              ["Sea wall", null, null, null],
              ["Groynes", null, null, null],
              ["Rip rap", null, null, null],
            ]} />
          <div style={{fontFamily:"var(--sans)", fontWeight:700, fontSize:"9pt", letterSpacing:".15em", color:"var(--accent)", textTransform:"uppercase", margin:"14px 0 6px"}}>Soft engineering</div>
          <WkTable id="s2-5-soft" head={["Strategy","How it works","Advantage","Disadvantage"]}
            rows={[
              ["Beach nourishment", null, null, null],
              ["Managed retreat", null, null, null],
              ["Offshore reefs", null, null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Human Activity & Management" folio="5.3">
        <Activity num={22} kind="Evaluate" title="Hard vs soft engineering" spec="Spec 1.5b">
          <div style={{fontWeight:600, fontSize:"11pt", marginBottom:"6px"}}>Which coastal defence strategy changes the coastline the MOST? Justify your answer.</div>
          <AnswerLines n={6} id="s2-5-eval" />
        </Activity>

        <Activity num={23} kind="Exam Practice" title="Hard engineering" spec="Spec 1.5">
          <ExamQuestion id="s2-5-eq" lines={7}
            prompt="Explain the advantages and disadvantages of hard engineering as a coastal management strategy."
            marks={4} hint="effectiveness · cost · environmental impact · impact on neighbouring areas" />
        </Activity>
      </Page>

      {/* ---------- 6 HOLDERNESS CASE STUDY ---------- */}
      <Page paper={P} running="Section 2 · Case Study — Holderness" folio="6.1">
        <SubsectionHeader num={6} title="Case Study — Holderness Coastline" spec="Spec 1.5 & 1.6" />
        <KeyKnowledge items={[
          "<strong>Why Holderness erodes so fast.</strong> Boulder clay is soft, unconsolidated and easily saturated. Long fetch from the north (Scandinavia). Narrow beaches offer little protection. Saturated cliffs slump after storms. LSD removes eroded sediment southward → beaches stay thin.",
          "<strong>Impacts.</strong> <em>Social:</em> loss of homes (Mappleton), roads, caravan parks. <em>Economic:</em> ~1.5 ha farmland lost/year; cost of defences; loss of tourism. <em>Environmental:</em> habitat loss; sediment starvation south of Hornsea; changing coastal morphology.",
          "<strong>Terminal groyne effect.</strong> Groynes at Hornsea trap sediment. Beaches south (Mappleton) are starved → narrower → more vulnerable. Mappleton rock groynes (1991, ~£2m) protect the village but accelerate erosion further south.",
        ]} stats="Holderness, East Yorkshire = fastest eroding coastline in Europe · 2–3 m/year average · Boulder clay · 30+ villages lost since Roman times" />

        
      </Page>

      <Page paper={P} running="Section 2 · Case Study — Holderness" folio="6.2">
        <Activity num={25} kind="Completion Table" title="Why does Holderness erode so fast?" spec="Spec 1.5a & 1.6a">
          <WkTable id="s2-6-fast" head={["Physical factor","Explanation"]}
            colWidths={["32%",null]}
            rows={[
              ["Rock type (boulder clay)", null],
              ["Fetch (from the north)", null],
              ["Lack of beach protection", null],
              ["Cliff height and saturation", null],
              ["LSD removes sediment quickly", null],
            ]} />
        </Activity>

        <Activity num={26} kind="SEE Impacts" title="Holderness — specific examples" spec="Spec 1.5a">
          <WkTable id="s2-6-see" head={["Social","Economic","Environmental"]}
            rows={[
              ["Loss of homes (e.g. ____)","Farmland lost (est. ___ha/yr)","Habitat loss"],
              ["Services at risk (e.g. ____)","Cost of defences (£____)","Sediment starvation"],
              [null,null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 2 · Case Study — Holderness" folio="6.3">
        <Activity num={27} kind="Completion Table" title="Terminal groyne effect at Hornsea" spec="Spec 1.5b">
          <WkTable id="s2-6-tge" head={["What is the terminal groyne effect?","Impact on Mappleton and areas south"]}
            rows={[[null,null]]} />
        </Activity>

        <Activity num={28} kind="Evaluate" title="Management at Holderness" spec="Spec 1.5b & 1.6a">
          <WkTable id="s2-6-mgmt" head={["Location","Strategy used","Evaluation (+/−)"]}
            rows={[["Hornsea",null,null],["Mappleton",null,null],["Withernsea",null,null],["Spurn Head",null,null]]} />
        </Activity>

        <Activity num={29} kind="Stakeholders" title="Conflict over coastal management" spec="Spec 1.6a">
          <WkTable id="s2-6-stk" head={["Stakeholder","Their view on coastal management"]}
            colWidths={["32%",null]}
            rows={[
              ["Local resident (homeowner)", null],
              ["Farmer", null],
              ["Local council", null],
              ["Environmentalist", null],
              ["Tourism industry", null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 7 NAMED DISTINCTIVE LANDSCAPE ---------- */}
      <Page paper={P} running="Section 2 · Named Distinctive Landscape" folio="7.1">
        <SubsectionHeader num={7} title="Named Distinctive Coastal Landscape" spec="Spec 1.6" />
        <NoteP>For Spec 1.6 you need ONE named distinctive coastal landscape. Complete the table using your class notes. You need to explain its significance, how it formed, and the factors responsible for change.</NoteP>
        <Activity num={31} kind="Notes Sheet" title="Your named landscape" spec="Spec 1.6a">
          <WkTable id="s2-7-notes" head={["Term","Notes"]}
            colWidths={["38%",null]}
            rows={[
              ["Name of landscape:", null],
              ["Location (compass direction, region):", null],
              ["Type (discordant / concordant / depositional / retreating):", null],
              ["Rock types and their resistance:", null],
              ["Key landforms and how they formed:", null],
              ["Most influential factors in change:", null],
              ["Human impact on the landscape:", null],
            ]} />
        </Activity>
        
      </Page>

      {/* ---------- KNOWLEDGE CHECK ---------- */}
      <Page paper={P} running="Section 2 · Knowledge Check" folio="KC.1">
        <SubsectionHeader num={8} title="Knowledge Check — 20 Questions" spec="" />
        <NoteP>Close your notes. Answer from memory and tick when correct.</NoteP>
        <WkTable id="s2-kc1" head={["#","Question","Answer"]}
          colWidths={["6%","48%",null]}
          rows={[
            ["1","Name the THREE main rock types found in the UK.", null],
            ["2","Difference between igneous and sedimentary rock?", null],
            ["3","Define 'fetch'. Which direction is the UK's dominant fetch?", null],
            ["4","ONE difference between constructive and destructive waves.", null],
            ["5","What is hydraulic action?", null],
            ["6","What is abrasion? What is attrition?", null],
            ["7","Name THREE types of weathering at the coast.", null],
            ["8","Define longshore drift.", null],
            ["9","Why does the swash travel at 45° to the shore?", null],
            ["10","Landform formed when LSD extends sediment into open water beyond a headland?", null],
          ]} />
      </Page>

      <Page paper={P} running="Section 2 · Knowledge Check" folio="KC.2">
        <WkTable id="s2-kc2" head={["#","Question","Answer"]}
          colWidths={["6%","48%",null]}
          rows={[
            ["11","Explain how a wave-cut platform forms.", null],
            ["12","Put in order: stack, cave, arch, stump, headland with joint.", null],
            ["13","What is a discordant coastline?", null],
            ["14","Name TWO hard engineering strategies.", null],
            ["15","Name TWO soft engineering strategies.", null],
            ["16","What is 'managed retreat'?", null],
            ["17","Average erosion rate at Holderness?", null],
            ["18","Rock type at Holderness — why is it weak?", null],
            ["19","What is the 'terminal groyne effect'?", null],
            ["20","ONE social AND one economic impact of erosion at Holderness.", null],
          ]} />
        <HrOrn />
      </Page>

      {/* ---------- RAG ---------- */}
      <Page paper={P} running="Section 2 · RAG Self-Assessment" folio="RAG.1">
        <SubsectionHeader num={9} title="RAG Self-Assessment — Coastal Landscapes" spec="" />
        <NoteP>R = don't know · A = partly know · G = know well</NoteP>
        <RAGTable items={[
          "UK rock types and their characteristics",
          "Upland vs lowland landscapes — geology and processes",
          "Constructive vs destructive waves",
          "Fetch and its effect on wave energy",
          "Mechanical, chemical and biological weathering",
          "Mass movement: sliding and slumping",
          "4 erosion processes (hydraulic action, abrasion, attrition, solution)",
          "UK weather/climate effects on coastal erosion rates",
          "Transportation: traction, saltation, suspension, solution",
          "Longshore drift — process, direction and angles",
          "Formation of headlands and bays",
          "Concordant vs discordant coastlines",
          "Formation of cave → arch → stack → stump",
        ]} />
      </Page>

      <Page paper={P} running="Section 2 · RAG Self-Assessment" folio="RAG.2">
        <RAGTable items={[
          "Formation of wave-cut platform",
          "Formation of beach, spit and bar",
          "Human activities and their effect on coastal landscapes",
          "Coastal recession — social, economic, environmental effects",
          "Coastal flooding — effects and key statistics",
          "Hard engineering — strategies, pros and cons",
          "Soft engineering — strategies, pros and cons",
          "Holderness — location, rock type, erosion rate",
          "Holderness — physical causes of rapid erosion",
          "Holderness — social, economic, environmental impacts",
          "Holderness — management and terminal groyne effect",
          "Named distinctive coastal landscape — formation and factors",
          '8-mark "Examine" technique — using figure + own knowledge',
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section2 = Section2;
