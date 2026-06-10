/* SECTION 3 — River Landscapes & Processes (Paper 1) */
function Section3() {
  const P = "1";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="Paper 1 · Component 1 · Topic 1B" num="3"
        title="River Landscapes & Processes"
        subtitle="Processes, landforms, flooding and management of UK rivers."
        meta={["Edexcel A · 1GA0/01","River Tees case study","Knowledge check + RAG"]}
        covers={[
          "River Basin Features & Vocabulary","Source to Mouth Changes",
          "Erosion, Transportation & Deposition","Waterfalls & Gorges",
          "Meanders & Oxbow Lakes","Floodplains & Levees",
          "Factors Affecting Flooding","Storm Hydrographs",
          "Case Study: River Tees","River Management",
          "Knowledge Check & RAG",
        ]}
        routine="Revision routine — complete each activity in order, correct in purple pen, and highlight any topics you need to revisit before the exam." />

      {/* ---------- 1 RIVER BASIN ---------- */}
      <Page paper={P} running="Section 3 · River Basin Features" folio="1.1">
        <SubsectionHeader num={1} title="River Basin Features & Key Vocabulary" spec="Spec 1.7a–b" />
        <KeyKnowledge items={[
          "<strong>Source</strong> — where the river begins (upland areas). <strong>Mouth</strong> — where it meets the sea or larger river.",
          "<strong>Drainage basin / catchment area</strong> — area of land drained by a river and its tributaries. <strong>Watershed</strong> — high ground forming the edge of a drainage basin.",
          "<strong>Tributary</strong> — smaller stream/river joining the main river. <strong>Confluence</strong> — point where two rivers meet.",
          "<strong>Discharge</strong> — volume of water flowing through a channel per second (m³/s, cumecs).",
          "<strong>Long profile</strong> — slice from source to mouth showing changes in height. <strong>Gradient</strong> — steepness of the channel.",
        ]} />
        

        <Activity num={1} kind="Key Term Match" title="Drainage basin terminology" spec="Spec 1.7a–b">
          <MatchTable id="s3-1-match"
            left={["Source","Mouth","Drainage basin","Watershed","Tributary","Confluence","Discharge","Long profile","Gradient","Catchment area"]}
            right={[
              "Where the river begins in upland areas",
              "Where the river meets the sea or a larger river",
              "Area of land drained by a river and all its tributaries",
              "High ground forming the edge of a drainage basin",
              "A smaller stream or river that flows into the main river",
              "Where two rivers meet and join together",
              "Volume of water flowing through a channel per second (m³/s)",
              "Slice from source to mouth showing changes in height",
              "The steepness of the river channel from source to mouth",
              "Area of land drained by a river — another term for drainage basin",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · River Basin Features" folio="1.2">
        <Activity num={2} kind="True or False" title="River basin terms" spec="Spec 1.7a–b">
          <WkTable id="s3-1-tf" head={["Statement","T / F","Correction (if false)"]}
            colWidths={["52%","14%","30%"]}
            rows={[
              ["The source of a river is where it meets the sea.", null, null],
              ["A tributary is a smaller river that flows into the main river.", null, null],
              ["The watershed is the area of land drained by a river.", null, null],
              ["A confluence is the point where two rivers meet.", null, null],
              ["Discharge is measured in cumecs (m³/s).", null, null],
              ["The gradient is steepest in the lower course of a river.", null, null],
              ["The long profile shows how height changes from source to mouth.", null, null],
              ["The drainage basin is the high ground separating river systems.", null, null],
            ]} />
        </Activity>

        <Activity num={3} kind="Completion Table" title="Source to mouth" spec="Spec 1.7b">
          <WkTable id="s3-1-stm" head={["Characteristic","Detail"]}
            colWidths={["48%",null]}
            rows={[
              ["Width in upper course",{shaded:true,text:"Narrow"}],
              ["Width in lower course",null],
              ["Depth in upper course",null],
              ["Depth in lower course",{shaded:true,text:"Deep"}],
              ["Gradient in upper course",{shaded:true,text:"Steep"}],
              ["Gradient in lower course",null],
              ["Discharge in upper course",null],
              ["Discharge in lower course",{shaded:true,text:"High"}],
              ["Sediment size in upper course",{shaded:true,text:"Large, angular boulders"}],
              ["Sediment size in lower course",null],
              ["Velocity change source to mouth",{shaded:true,text:"Increases downstream"}],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · River Basin Features" folio="1.3">
        <Activity num={4} kind="Exam Practice" title="Source to mouth changes" spec="Spec 1.7a–b">
          <ExamTip>For "describe changes from source to mouth" — cover at least 4 characteristics and use the words <strong>INCREASES, DECREASES, WIDENS, DEEPENS</strong>. Always use comparative language: "wider than…", "deeper than…"</ExamTip>
          <ExamQuestion id="s3-1-eq" lines={7}
            prompt="With reference to a river you have studied, describe the changes between the source and the mouth."
            marks={4} />
        </Activity>
      </Page>

      {/* ---------- 2 EROSION/TRANSPORT/DEPOSITION ---------- */}
      <Page paper={P} running="Section 3 · Processes" folio="2.1">
        <SubsectionHeader num={2} title="Erosion, Transportation & Deposition Processes" spec="Spec 1.7a" />
        <KeyKnowledge items={[
          "<strong>Erosion:</strong> hydraulic action (water compresses air in cracks), abrasion (sediment scrapes bed/banks), attrition (rocks collide → smaller, rounder), solution (acidic water dissolves limestone).",
          "<strong>Transportation:</strong> traction (boulders rolled), saltation (pebbles bounced), suspension (silt/clay carried within flow), solution (dissolved minerals).",
          "<strong>Deposition</strong> occurs when a river loses energy: largest particles deposited first, finer carried further.",
        ]} />

        <Activity num={1} kind="Match-Up" title="River processes" spec="Spec 1.7a">
          <MatchTable id="s3-2-match"
            left={["Hydraulic action","Abrasion","Attrition","Solution","Traction","Saltation","Suspension","Deposition"]}
            right={[
              "The force of water forcing air into cracks in banks and bed",
              "Rocks carried by the river scrape against bed/banks, wearing them away",
              "Rocks collide, breaking into smaller, rounder pieces",
              "Slightly acidic water chemically dissolves rocks such as limestone",
              "Large boulders rolled along the river bed by the current",
              "Small pebbles bounced along the river bed in a leaping motion",
              "Fine material (silt/clay) carried within the flow of water",
              "When a river loses energy and drops its load — largest first",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Processes" folio="2.2">
        <Activity num={2} kind="Fill in the Blanks" title="River processes" spec="Spec 1.7a">
          <FillBlanks id="s3-2-blanks"
            bank={["hydraulic action","abrasion","attrition","solution","traction","saltation","suspension","deposition","velocity","energy"]}
            items={[
              ["When the power of water forces air into cracks in the river bank, this is called ", null, "."],
              ["Rocks and pebbles carried by the river scraping against the bed and banks is called ", null, "."],
              ["When rocks carried by the river collide with each other, making them smaller and rounder, this is ", null, "."],
              ["Large boulders rolled along the river bed is called ", null, "."],
              ["Fine silt and clay carried within the water flow is called ", null, "."],
              ["When a river loses ", null, ", its ", null, " decreases and it drops its load — this is called ", null, "."],
              ["Slightly acidic water chemically dissolving rocks is ", null, " (or corrosion)."],
            ]} />
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="Processes" spec="Spec 1.7b & 1.8a">
          <MCQ id="s3-2-mcq" items={[
            { q: "Which erosion process involves rocks carried by the river wearing away the bed and banks?",
              opts: ["Hydraulic action","Attrition","Abrasion","Solution"] },
            { q: "Which transportation process involves small pebbles bouncing along the river bed?",
              opts: ["Traction","Saltation","Suspension","Solution"] },
            { q: "When does a river deposit its load?",
              opts: ["When velocity increases","When discharge rises","When the river loses energy and slows down","When the river gets deeper"] },
            { q: "Which process makes rocks smaller AND rounder as they travel downstream?",
              opts: ["Hydraulic action","Solution","Abrasion","Attrition"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Processes" folio="2.3">
        <Activity num={4} kind="Exam Practice" title="Erosion & transport" spec="Spec 1.7a">
          <ExamTip>Don't confuse erosion <em>types</em> with transportation <em>types</em>. Always name the process AND explain HOW it erodes/transports.</ExamTip>
          <ExamQuestion id="s3-2-eq1" lines={5} prompt="Explain one erosion process that takes place in a river." marks={2} />
          <ExamQuestion id="s3-2-eq2" lines={7} prompt="Explain how a river transports its load. Refer to at least two transportation processes." marks={4} />
        </Activity>
      </Page>

      {/* ---------- 3 EROSIONAL LANDFORMS ---------- */}
      <Page paper={P} running="Section 3 · Waterfalls & Gorges" folio="3.1">
        <SubsectionHeader num={3} title="Erosional Landforms — Waterfalls & Gorges" spec="Spec 1.8a" />
        <KeyKnowledge paragraphs={[
          "<strong>Waterfall formation sequence:</strong>",
        ]} items={[
          "River flows over a band of hard rock overlying softer rock.",
          "Softer rock erodes faster (hydraulic action + abrasion) → undercuts the hard rock above.",
          "Hard rock is left overhanging → eventually collapses.",
          "Process repeats → waterfall retreats upstream.",
          "A steep-sided <strong>gorge</strong> is left behind as the waterfall retreats.",
          "A <strong>plunge pool</strong> forms at the base from hydraulic action and abrasion.",
        ]} />
        <Activity num={1} kind="Sequence" title="Waterfall formation" spec="Spec 1.8a"
          instructions="Number these stages 1–6 in the correct order, then complete the explanation column.">
          <WkTable id="s3-3-seq" head={["Step","Stage / Feature","Explanation"]}
            colWidths={["10%","45%",null]}
            rows={[
              [null,"Hard rock is left overhanging with a plunge pool forming at the base",null],
              [null,"Gorge left behind as waterfall retreats upstream",null],
              [null,"River flows over hard rock overlying softer rock",null],
              [null,"Softer rock erodes faster — hydraulic action and abrasion undercut the hard rock",null],
              [null,"Hard rock collapses into the plunge pool below",null],
              [null,"Process repeats — waterfall migrates upstream",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Waterfalls & Gorges" folio="3.2">
        <Activity num={2} kind="Draw and Label" title="Waterfall and gorge" spec="Spec 1.8a">
          
        </Activity>

        <Activity num={3} kind="True or False" title="Erosional landforms" spec="Spec 1.9b">
          <WkTable id="s3-3-tf" head={["Statement","T / F","Correction"]}
            colWidths={["56%","12%","32%"]}
            rows={[
              ["Waterfalls form where hard rock overlies softer rock.", null, null],
              ["A gorge forms in front of a waterfall as it advances downstream.", null, null],
              ["Interlocking spurs are found in the lower course of a river.", null, null],
              ["The plunge pool is formed by hydraulic action and abrasion at the base.", null, null],
              ["V-shaped valleys are formed mainly by lateral erosion.", null, null],
              ["Attrition is the main process responsible for creating the plunge pool.", null, null],
              ["Hard rock resists erosion and is left overhanging as softer rock is eroded.", null, null],
              ["High Force on the River Tees is an example of a waterfall in England.", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Waterfalls & Gorges" folio="3.3">
        <Activity num={4} kind="Exam Practice" title="Waterfall formation" spec="Spec 1.8a">
          <ExamTip>"Explain the formation of a waterfall" is classic 4–8 marks. Structure as a SEQUENCE — use "initially", "this causes", "as a result", "eventually", "over time". Examiner rewards showing how one stage LEADS to the next.</ExamTip>
          <ExamQuestion id="s3-3-eq" lines={11}
            prompt="Explain the formation of a waterfall. You may use a diagram to support your answer."
            marks={6}
            hint="hard/soft rock · erosion processes · undercut · overhang · collapse · retreat · gorge · plunge pool" />
        </Activity>
      </Page>

      {/* ---------- 4 MEANDERS ---------- */}
      <Page paper={P} running="Section 3 · Meanders & Oxbow Lakes" folio="4.1">
        <SubsectionHeader num={4} title="Meanders & Oxbow Lakes" spec="Spec 1.8c" />
        <KeyKnowledge items={[
          "Rivers rarely flow in straight lines — water is deflected and the channel becomes asymmetric.",
          "The <strong>thalweg</strong> (fastest flow) moves to the OUTSIDE of the bend → hydraulic action and abrasion erode the outer bank → forms a steep <strong>river cliff</strong>.",
          "On the INSIDE of the bend, velocity is slower → deposition occurs → forms a gently sloping <strong>slip-off slope</strong> (point bar).",
          "<strong>Lateral erosion</strong> causes the meander to migrate sideways and become more curved over time.",
          "<strong>Oxbow lake</strong> formation: loops become increasingly curved → neck narrows → river breaks through during flood → river deposits sediment at both ends of the old loop → loop is isolated → silts up and is colonised by vegetation.",
        ]} />
        <Activity num={1} kind="Completion Table" title="Meander features" spec="Spec 1.8c">
          <WkTable id="s3-4-comp" head={["Key Term / Concept","Definition / Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Where is velocity fastest in a meander?",{shaded:true,text:"On the outside of the bend (thalweg)"}],
              ["What forms on the outside of a meander bend?",null],
              ["What process occurs on the outside of the bend?",{shaded:true,text:"Erosion (hydraulic action and abrasion)"}],
              ["What forms on the inside of a meander bend?",null],
              ["What process occurs on the inside of the bend?",{shaded:true,text:"Deposition"}],
              ["What is lateral erosion?",null],
              ["What is the \"neck\" of a meander?",{shaded:true,text:"Thin piece of land between two curves of a meander loop"}],
              ["What breaks through the neck to form an oxbow lake?",null],
              ["Final stage of oxbow lake formation",{shaded:true,text:"Silts up and is colonised by vegetation"}],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Meanders & Oxbow Lakes" folio="4.2">
        <Activity num={2} kind="Draw and Label" title="Meander cross-section" spec="Spec 1.8c"
          instructions="Draw a bird's-eye view AND a side view of a meander. Label: outside bank, inside bank, river cliff, slip-off slope, thalweg, slowest flow, erosion, deposition.">
          
        </Activity>

        <Activity num={3} kind="Cause and Effect" title="Meander and oxbow lake" spec="Spec 1.8c">
          <WkTable id="s3-4-ce" head={["Cause / Factor","+/−","Effect / Explanation"]}
            colWidths={["40%","10%",null]}
            rows={[
              ["Fastest flow (thalweg) moves to outside of meander bend","−",null],
              ["Lateral erosion on outside bank","−",null],
              ["Slow velocity on inside of meander bend","+",null],
              ["Continued lateral erosion — meander neck narrows","−",null],
              ["River breaks through neck during flood event","−",null],
              ["Sediment deposited at both ends of old meander loop","+",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Meanders & Oxbow Lakes" folio="4.3">
        <Activity num={4} kind="Exam Practice" title="Oxbow lakes" spec="Spec 1.8c">
          <ExamTip>8-mark questions about oxbow lakes need BOTH AO1 (knowledge of processes) AND AO2 (linking them). Don't just list — show how erosion on the outside → deposition on the inside → neck narrows → flood breaks through.</ExamTip>
          <ExamQuestion id="s3-4-eq" lines={15}
            prompt="Explain the role of physical processes in the formation of an oxbow lake."
            marks={8}
            hint="meander formation · thalweg · river cliff · slip-off slope · neck · flood · cut off · final lake" />
        </Activity>
      </Page>

      {/* ---------- 5 FLOODPLAINS & LEVEES ---------- */}
      <Page paper={P} running="Section 3 · Floodplains & Levees" folio="5.1">
        <SubsectionHeader num={5} title="Floodplains & Levees" spec="Spec 1.8b" />
        <KeyKnowledge items={[
          "<strong>Floodplain formation.</strong> Lateral erosion by meanders cuts into valley sides, widening the valley floor. When the river floods, it deposits <em>alluvium</em> (silt, sand, clay) across the flat floor. Repeated flooding builds thick layers of fertile alluvial deposits. Old oxbow lakes fill with sediment and become part of the floodplain.",
          "<strong>Levee formation.</strong> When a river floods, it spreads out and velocity drops sharply. The heaviest sediment is deposited FIRST, closest to the channel — building up levees. Finer sediment is carried further across the floodplain. Repeated floods build the levees higher.",
          "Levees act as natural barriers, keeping the river within its channel during normal flow.",
        ]} />
        <Activity num={1} kind="Fill in the Blanks" title="Floodplains & levees" spec="Spec 1.8b">
          <FillBlanks id="s3-5-blanks"
            bank={["lateral","alluvium","meanders","velocity","levees","floodplain","coarsest","deposition","floods","lower"]}
            items={[
              ["A ", null, " is the wide, flat area of land on either side of a river in the middle and ", null, " course."],
              ["The floodplain is formed through ", null, " erosion by ", null, ", which widens the valley floor."],
              ["When the river ", null, " it deposits ", null, " (silt, sand, clay) across the valley floor."],
              ["When a river floods, its ", null, " drops sharply as it spreads across the floodplain."],
              ["This causes ", null, " — the ", null, " material is deposited first, closest to the channel."],
              ["This process builds up natural embankments called ", null, " on either side of the channel."],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Floodplains & Levees" folio="5.2">
        <Activity num={2} kind="Draw and Label" title="Floodplain & levee formation" spec="Spec 1.8b"
          instructions="Draw two side-by-side diagrams: (1) river in flood — velocity drop, sediment deposits, levee building. (2) river after repeated floods — completed levees and alluvial floodplain.">
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"}}>
            
            
          </div>
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="Floodplains" spec="Spec 1.8b">
          <MCQ id="s3-5-mcq" items={[
            { q: "What is a levee?", opts: ["A steep river cliff on the outside of a meander","A natural embankment of sediment alongside the river channel","A pool of water at the base of a waterfall","An isolated meander loop cut off from the main river"] },
            { q: "Why does sediment deposit close to the river channel during flooding?", opts: ["The river flows faster close to the banks","Velocity drops suddenly as the river spreads out, depositing heaviest material first","Fine sediment is heavier and sinks near the channel","Traction moves boulders away from the channel"] },
            { q: "Which course of a river is a floodplain found in?", opts: ["Upper course only","All courses equally","Middle and lower course","Only at the river's mouth"] },
            { q: "What makes floodplain soils particularly fertile?", opts: ["They are formed from hard igneous rocks","They contain layers of alluvium deposited by repeated flooding","They are never eroded so stay in place","They are kept dry between floods"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Floodplains & Levees" folio="5.3">
        <Activity num={4} kind="Exam Practice" title="Floodplains & levees" spec="Spec 1.8b">
          <ExamTip>Always explain WHY velocity drops (river spreads out) and WHY this causes deposition (loses energy). Then how REPEATED flooding builds the feature over time. Process → reason → consequence = Level 3.</ExamTip>
          <ExamQuestion id="s3-5-eq1" lines={7} prompt="Explain the formation of levees." marks={4} />
          <ExamQuestion id="s3-5-eq2" lines={10} prompt="Explain how floodplains are formed." marks={6}
            hint="lateral erosion · meanders · flooding · alluvium · repeated deposits over time" />
        </Activity>
      </Page>

      {/* ---------- 6 HYDROGRAPHS ---------- */}
      <Page paper={P} running="Section 3 · Hydrographs" folio="6.1">
        <SubsectionHeader num={6} title="Factors Affecting Flooding & Storm Hydrographs" spec="Spec 1.7c & 1.9a" />
        <KeyKnowledge items={[
          "<strong>Hydrograph terms.</strong> Rising limb — increase in discharge after rainfall begins. Peak discharge — maximum. Falling limb — gradual decrease. Lag time — delay between peak rainfall and peak discharge (shorter = higher flood risk).",
          "<strong>Physical factors.</strong> Heavy/prolonged rainfall saturates ground → more run-off. Steep relief → water reaches channel faster → shorter lag time. Impermeable rock (clay) → more run-off. Snowmelt → large volumes entering quickly.",
          "<strong>Human factors.</strong> <em>Urbanisation</em> — impermeable surfaces → instant run-off → shorter lag time, higher peak. <em>Deforestation</em> — less interception, less transpiration. <em>Agriculture</em> — field drains speed water to rivers. <em>Dam/reservoir failure</em> — sudden large releases.",
        ]} />
        
        <Activity num={1} kind="Match-Up" title="Hydrograph terms" spec="Spec 1.9a">
          <MatchTable id="s3-6-match"
            left={["Rising limb","Peak discharge","Falling limb","Lag time","Interception","Throughflow","Surface run-off","Baseflow"]}
            right={[
              "Increase in river discharge following a rainfall event",
              "Maximum river discharge reached following a storm",
              "Gradual decrease in river discharge after peak",
              "The delay between peak rainfall and peak discharge",
              "Trees catching rainfall before it hits the ground",
              "Water moving slowly through soil layers towards the river",
              "Water flowing over the surface directly into the river channel",
              "Background level of river discharge between rainfall events",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Hydrographs" folio="6.2">
        <Activity num={2} kind="Cause and Effect" title="Factors affecting flood risk" spec="Spec 1.9a">
          <WkTable id="s3-6-ce" head={["Cause / Factor","+/−","Effect on lag time / flood risk"]}
            colWidths={["40%","10%",null]}
            rows={[
              ["Urbanisation — tarmac and concrete replace fields","−",null],
              ["Deforestation — trees removed from valley slopes","−",null],
              ["Planting trees on hillsides above the river","+",null],
              ["Prolonged heavy rainfall saturates the ground","−",null],
              ["Clay/impermeable rock in the drainage basin","−",null],
              ["Building a dam and reservoir upstream","+",null],
              ["Installing field drainage pipes into the river","−",null],
            ]} />
        </Activity>

        <Activity num={3} kind="Data Analysis" title="Storm hydrograph data" spec="Spec 1.9a"
          instructions="Peak rainfall = 14:00; peak discharge = 17:30.">
          <WkTable id="s3-6-data" head={["Time","Rainfall (mm)","Discharge (cumecs)","Time","Rainfall (mm)","Discharge (cumecs)"]}
            rows={[
              ["12:00","0","2","15:30","14","50"],
              ["13:00","4","2","16:00","12","65"],
              ["14:00","14","20","17:00","4","100"],
              ["14:30","8","30","18:00","0","80"],
            ]} />
          <div style={{marginTop:"10px"}}>
            <div style={{fontFamily:"var(--serif)",fontWeight:600,fontSize:"11pt"}}>1. What is the peak discharge?</div>
            <AnswerLines n={1} id="s3-6-q1" />
            <div style={{fontFamily:"var(--serif)",fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>2. What is the lag time?</div>
            <AnswerLines n={1} id="s3-6-q2" />
            <div style={{fontFamily:"var(--serif)",fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>3. Describe how discharge changes between 12:00 and 17:00. Use data.</div>
            <AnswerLines n={3} id="s3-6-q3" />
          </div>
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Hydrographs" folio="6.3">
        <Activity num={4} kind="Exam Practice" title="Flood risk" spec="Spec 1.9a">
          <ExamTip>"Examine" (8 marks) — cover BOTH physical AND human causes. 2 of each. For each: state → explain mechanism → link to flood risk. Use: interception, infiltration, run-off, lag time, discharge.</ExamTip>
          <ExamQuestion id="s3-6-eq1" lines={5} prompt="Explain one way the weather and climate can affect river erosion." marks={2} />
          <ExamQuestion id="s3-6-eq2" lines={14} prompt="Examine how physical processes and human activities affect the risk of river flooding."
            marks={8}
            hint="rainfall intensity · relief · rock type · urbanisation · deforestation · agriculture" />
        </Activity>
      </Page>

      {/* ---------- 7 RIVER TEES CASE STUDY ---------- */}
      <Page paper={P} running="Section 3 · Case Study — River Tees" folio="7.1">
        <SubsectionHeader num={7} title="Case Study — The River Tees" spec="Spec 1.7b & 1.8a" />
        <KeyKnowledge items={[
          "Rises at <strong>Cross Fell</strong>, North Pennines; flows ~137 km east to the North Sea at Teesside.",
          "<strong>High Force waterfall</strong> (~21 m) — hard rock <em>dolerite</em> (Whin Sill) overlies softer <em>limestone and shale</em>.",
          "Softer rock erodes faster by hydraulic action and abrasion → undercuts the dolerite → overhang collapses → waterfall retreats upstream.",
          "<strong>Gorge</strong> formed downstream as the waterfall has retreated over thousands of years.",
          "<strong>Plunge pool</strong> at base of waterfall created by hydraulic action and abrasion.",
        ]} stats="Source: Cross Fell, North Pennines · Length ~137 km · High Force ~21 m · Hard rock: dolerite (Whin Sill)" />

        

        <Activity num={1} kind="Completion Table" title="River Tees key facts" spec="Spec 1.7b & 1.8a">
          <WkTable id="s3-7-facts" head={["Key Term / Concept","Detail"]}
            colWidths={["48%",null]}
            rows={[
              ["Where does the River Tees rise?",{shaded:true,text:"Cross Fell, North Pennines"}],
              ["Where does the River Tees meet the sea?",null],
              ["Length of the River Tees",{shaded:true,text:"~137 km"}],
              ["Name of the waterfall on the upper Tees",null],
              ["Height of High Force waterfall",{shaded:true,text:"~21 metres"}],
              ["Hard rock at High Force",null],
              ["Soft rock at High Force",{shaded:true,text:"Limestone and shale"}],
              ["Why does the waterfall retreat upstream?",null],
              ["Feature formed by waterfall retreat",{shaded:true,text:"Gorge"}],
              ["Landform at base of waterfall",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Case Study — River Tees" folio="7.2">
        <Activity num={2} kind="Sort It" title="Upper, middle or lower course?" spec="Spec 1.7b">
          <SortIt id="s3-7-sort" headLeft="Upper Course" headRight="Middle / Lower Course"
            bank={[
              "High Force waterfall","Meanders and oxbow lakes",
              "Estuary at Teesside","Interlocking spurs",
              "Wide floodplain","V-shaped valley",
              "Industrial area","Plunge pool",
              "Gentle gradient","Angular boulders on riverbed",
            ]} rows={5} />
        </Activity>

        <Activity num={3} kind="MCQ Checkpoint" title="River Tees" spec="Spec 1.7b & 1.8a">
          <MCQ id="s3-7-mcq" items={[
            { q: "What type of hard rock is found at High Force waterfall?", opts: ["Granite","Limestone","Dolerite (Whin Sill)","Sandstone"] },
            { q: "What soft rocks are found beneath the dolerite at High Force?", opts: ["Chalk and flint","Granite and basalt","Limestone and shale","Clay and mudstone"] },
            { q: "What feature forms as the High Force waterfall retreats upstream?", opts: ["A floodplain","A slip-off slope","A gorge","A levee"] },
            { q: "Where does the River Tees begin?", opts: ["The Lake District","The Yorkshire Dales","Cross Fell, North Pennines","The North York Moors"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · Case Study — River Tees" folio="7.3">
        <Activity num={4} kind="Exam Practice" title="Named river" spec="Spec 1.7b & 1.8a">
          <ExamTip>Case study questions use "named" — always name the river (River Tees) and the specific location (High Force) immediately. Vague answers score Level 1 only.</ExamTip>
          <ExamQuestion id="s3-7-eq" lines={11}
            prompt="With reference to a named river you have studied, explain how geology has influenced the formation of an erosional landform."
            marks={6}
            hint="name the river · name the landform · role of hard and soft rock · correct process vocabulary" />
        </Activity>
      </Page>

      {/* ---------- 8 MANAGEMENT ---------- */}
      <Page paper={P} running="Section 3 · River Management" folio="8.1">
        <SubsectionHeader num={8} title="River Management Strategies" spec="Spec 1.9b" />
        <Activity num={1} kind="Evaluate Table" title="River management strategies" spec="Spec 1.9b">
          <WkTable id="s3-8-eval" head={["Strategy","Advantage","Disadvantage"]}
            rows={[
              ["Dams & Reservoirs","Controls discharge; provides water supply and HEP; protects areas downstream",null],
              ["Channelisation","Moves floodwater faster; reduces flood risk locally",null],
              ["Floodplain Zoning","No structures at risk; cheap — planning restrictions only",null],
              ["Washlands","Natural; cheap; improves sedimentation and ecosystem health",null],
            ]} />
        </Activity>

        <Activity num={2} kind="Sort It" title="Hard or soft engineering?" spec="Spec 1.9b">
          <SortIt id="s3-8-sort" headLeft="Hard Engineering" headRight="Soft Engineering"
            bank={[
              "Building a dam across the river","Floodplain zoning restrictions",
              "Channelisation — straightening the channel","Allowing washlands to flood",
              "Reservoirs for water storage","Planting trees on valley slopes",
              "Concrete flood walls","Managed flooding of farmland",
            ]} rows={4} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · River Management" folio="8.2">
        <Activity num={3} kind="True or False" title="Management strategies" spec="Spec 1.9b">
          <WkTable id="s3-8-tf" head={["Statement","T / F","Correction"]}
            colWidths={["56%","12%","32%"]}
            rows={[
              ["Channelisation involves straightening and deepening the river channel.", null, null],
              ["Dams always increase the flood risk downstream.", null, null],
              ["Washlands are areas that are deliberately allowed to flood.", null, null],
              ["Floodplain zoning prevents any buildings near a river.", null, null],
              ["Hard engineering is generally cheaper than soft engineering.", null, null],
              ["Dams trap sediment upstream, leading to less deposition downstream.", null, null],
              ["Soft engineering works with natural river processes.", null, null],
              ["Channelisation can move flood risk downstream to other communities.", null, null],
            ]} />
        </Activity>

        <Activity num={4} kind="Exam Practice" title="River management" spec="Spec 1.9b">
          <ExamTip>"Evaluate" needs hard AND soft sides + an overall judgement. Advantages of hard → its disadvantages → advantages of soft → its limits → which is more effective OVERALL and WHY.</ExamTip>
          <ExamQuestion id="s3-8-eq1" lines={7} prompt="Explain how river management techniques can change the landscape." marks={4} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 3 · River Management" folio="8.3">
        <ExamQuestion id="s3-8-eq2" lines={18}
          prompt="Evaluate the costs and benefits of hard and soft engineering techniques used to manage rivers. Which is the most effective approach?"
          marks={8} />
      </Page>

      {/* ---------- KNOWLEDGE CHECK ---------- */}
      <Page paper={P} running="Section 3 · Knowledge Check" folio="KC.1">
        <SubsectionHeader num={9} title="Knowledge Check — 20 Questions" spec="" />
        <NoteP>Close your notes. Answer from memory and tick when correct.</NoteP>
        <WkTable id="s3-kc1" head={["#","Question","Answer","✓"]}
          colWidths={["6%","52%",null,"6%"]}
          rows={[
            ["1","What is the source of a river?", null, null],
            ["2","What is the drainage basin?", null, null],
            ["3","What is a watershed?", null, null],
            ["4","Name four processes of river erosion.", null, null],
            ["5","What is traction?", null, null],
            ["6","What is saltation?", null, null],
            ["7","What is discharge measured in?", null, null],
            ["8","How does width change from source to mouth?", null, null],
            ["9","What type of rock overlies softer rock at High Force?", null, null],
            ["10","What is the gorge left behind as a waterfall retreats called?", null, null],
          ]} />
      </Page>

      <Page paper={P} running="Section 3 · Knowledge Check" folio="KC.2">
        <WkTable id="s3-kc2" head={["#","Question","Answer","✓"]}
          colWidths={["6%","52%",null,"6%"]}
          rows={[
            ["11","On which side of a meander does erosion occur?", null, null],
            ["12","What forms on the inside of a meander bend?", null, null],
            ["13","What is an oxbow lake?", null, null],
            ["14","What is a floodplain?", null, null],
            ["15","What are levees?", null, null],
            ["16","What is lag time on a hydrograph?", null, null],
            ["17","How does urbanisation affect flood risk?", null, null],
            ["18","Name one hard engineering river management strategy.", null, null],
            ["19","Name one soft engineering river management strategy.", null, null],
            ["20","What is the main disadvantage of channelisation?", null, null],
          ]} />
        <HrOrn />
      </Page>

      <Page paper={P} running="Section 3 · RAG Self-Assessment" folio="RAG">
        <SubsectionHeader num={10} title="RAG Self-Assessment — River Landscapes & Processes" spec="" />
        <NoteP>R = don't know · A = partly know · G = know well</NoteP>
        <RAGTable items={[
          "Define source, mouth, drainage basin, watershed, tributary, confluence",
          "Describe how rivers change source to mouth (width, depth, velocity, gradient)",
          "Explain the four types of river erosion",
          "Explain the four types of transportation",
          "Explain when and why deposition occurs in a river",
          "Explain the formation of interlocking spurs in the upper course",
          "Explain the formation of a waterfall — hard and soft rock",
          "Explain how a gorge forms as a waterfall retreats upstream",
          "Explain the formation of a meander (river cliff and slip-off slope)",
          "Explain the formation of an oxbow lake from a meander",
          "Explain the formation of a floodplain",
          "Explain the formation of levees",
          "Use specific River Tees facts (High Force, dolerite, limestone/shale, gorge)",
          "Explain a storm hydrograph — rising limb, falling limb, lag time, peak discharge",
          "Explain how physical factors (rainfall, relief, rock type) increase flood risk",
          "Explain how human factors (urbanisation, deforestation) increase flood risk",
          "Describe and evaluate hard engineering strategies",
          "Describe and evaluate soft engineering strategies",
          '8-mark "explain the formation" answer about a river landform',
          '8-mark "evaluate" answer about river management strategies',
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section3 = Section3;
