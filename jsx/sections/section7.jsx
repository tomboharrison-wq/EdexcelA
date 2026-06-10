/* SECTION 7 — Energy Resource Management (Paper 2) */
function Section7() {
  const P = "2";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="Paper 2 · Component 2 · Topic 6A" num="7"
        title="Energy Resource Management"
        subtitle="Natural resources, energy production and sustainable management."
        meta={["Edexcel A · 1GA0/02","Norway + Bhutan","Knowledge check + RAG"]}
        covers={[
          "Natural Resources — Types & Classification","UK & Global Resource Distribution",
          "Coal & Wind Power","UK Energy Mix & Global Demand",
          "Hydroelectric Power","Fracking",
          "Stakeholder Attitudes","Why Sustainable Management is Needed",
          "Case Study — Norway","Case Study — Bhutan",
          "Knowledge Check & RAG",
        ]}
        routine="Revision routine — complete each activity in order, correct in purple pen, highlight topics to revisit." />

      {/* ---------- 1 NATURAL RESOURCES ---------- */}
      <Page paper={P} running="Section 7 · Natural Resources" folio="1.1">
        <SubsectionHeader num={1} title="Natural Resources — Types, Classification & Exploitation" spec="Spec 6.1" />
        <KeyKnowledge items={[
          "<strong>Natural resource</strong> — any feature of the environment that can meet human needs.",
          "<strong>Abiotic</strong> — non-living (water, minerals, wind). <strong>Biotic</strong> — living (fish, timber).",
          "<strong>Renewable</strong> — can be used repeatedly without running out. <strong>Non-renewable</strong> — finite (oil, coal, gas).",
          "<strong>Exploitation:</strong> extraction of fossil fuels, fishing, farming, deforestation.",
          "<strong>Environmental impacts:</strong> reduced biodiversity, soil erosion, reduced water quality, air pollution.",
        ]} />
        <Activity num={1} kind="Match-Up" title="Resource classification" spec="Spec 6.1a">
          <MatchTable id="s7-1-match"
            left={["Abiotic resource","Biotic resource","Renewable resource","Non-renewable resource","Resource exploitation","Natural resource","Biodiversity","Sustainable management"]}
            right={[
              "Resources made from non-living things — water, minerals, wind",
              "Resources made from living organisms — fish, timber",
              "Can be used repeatedly and will not run out — wind, solar",
              "A finite resource that will eventually be used up — oil, coal",
              "Using a resource in a non-sustainable way — taking more than is replaced",
              "Any feature of the environment that can be used to meet human needs",
              "A variety of plant and animal life in a given area",
              "Using resources to meet needs now without harming future generations",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Natural Resources" folio="1.2">
        <Activity num={2} kind="Cause and Effect" title="Exploitation impacts" spec="Spec 6.1b–c">
          <WkTable id="s7-1-ce" head={["Cause / Factor","+/−","Effect"]}
            colWidths={["42%","10%",null]}
            rows={[
              ["Extraction of fossil fuels (oil, coal, gas)","−",null],
              ["Deforestation for palm oil in Cameroon","−",null],
              ["Overfishing in the North Sea","−",null],
              ["Large-scale monoculture farming","−",null],
              ["Sustainable forestry with replanting","+",null],
              ["Fish quota systems in the North Sea","+",null],
            ]} />
        </Activity>
        <Activity num={3} kind="True or False" title="Resources" spec="Spec 6.1">
          <WkTable id="s7-1-tf" head={["Statement","T/F","Correction"]}
            colWidths={["54%","10%",null]}
            rows={[
              ["Abiotic resources are made from living organisms.",null,null],
              ["Renewable resources will eventually run out if overused.",null,null],
              ["Coal, oil and gas are non-renewable resources.",null,null],
              ["Resource exploitation means using resources sustainably.",null,null],
              ["Deforestation reduces biodiversity.",null,null],
              ["Overfishing in the North Sea caused cod catches to rise dramatically.",null,null],
              ["Soil erosion rates on farmland are higher than on forested land.",null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Natural Resources" folio="1.3">
        <Activity num={4} kind="Exam Practice" title="Exploitation impacts" spec="Spec 6.1">
          <ExamTip>Use a specific named example (Cameroon, North Sea). Cause → process → consequence = higher marks.</ExamTip>
          <ExamQuestion id="s7-1-eq" lines={7}
            prompt="Explain how the exploitation of one natural resource has changed the environment. Use an example." marks={4} />
        </Activity>
      </Page>

      {/* ---------- 2 RESOURCE DISTRIBUTION ---------- */}
      <Page paper={P} running="Section 7 · Resource Distribution" folio="2.1">
        <SubsectionHeader num={2} title="UK & Global Resource Distribution" spec="Spec 6.2" />
        <KeyKnowledge items={[
          "<strong>UK coal</strong> — South Wales, Yorkshire, Nottinghamshire, Durham.",
          "<strong>UK oil/gas</strong> — North Sea (offshore).",
          "<strong>UK wind</strong> — Scotland, coastal/upland areas — Atlantic exposure.",
          "<strong>UK water reservoirs</strong> — Wales, Lake District, Peak District, Scottish Highlands (highest rainfall).",
          "<strong>UK arable</strong> — eastern/southern England (flat, fertile, drier). <strong>Dairy</strong> — west (wetter). <strong>Sheep</strong> — uplands.",
          "<strong>Global oil</strong> — Middle East (Saudi Arabia, Iraq, UAE), Russia, USA, Venezuela.",
          "<strong>Global coal</strong> — China, USA, India, Australia, Russia.",
          "<strong>Fresh water</strong> — surpluses: Brazil, Canada, Russia; deficits: Middle East, North Africa.",
        ]} />
        
        <Activity num={1} kind="Completion" title="UK resource distribution" spec="Spec 6.2a">
          <WkTable id="s7-2-uk" head={["Key Term / Concept","Detail"]}
            colWidths={["48%",null]}
            rows={[
              ["Main UK region for coal deposits",{shaded:true,text:"Yorkshire, South Wales, Nottinghamshire, Durham"}],
              ["UK offshore energy source (oil/gas)",null],
              ["Why water reservoirs are in upland areas",{shaded:true,text:"High rainfall in Wales, Lake District, Scotland"}],
              ["Why arable farming is in eastern England",null],
              ["Why dairy farming is in western UK",{shaded:true,text:"Wetter climate; permanent grassland for grazing"}],
              ["Best UK region for wind energy",null],
              ["Top three countries UK imports gas from",{shaded:true,text:"Norway, Qatar, Turkey"}],
              ["Global region with largest oil reserves",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Resource Distribution" folio="2.2">
        <Activity num={2} kind="Sort It" title="Renewable or non-renewable?" spec="Spec 6.1a & 6.2a">
          <SortIt id="s7-2-sort" headLeft="Non-Renewable" headRight="Renewable"
            bank={["Coal","Solar power","Oil","Wind energy","Natural gas","Hydroelectric power","Uranium","Biomass","Tidal power","Fish stocks"]} rows={5} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Resource distribution" spec="Spec 6.2">
          <MCQ id="s7-2-mcq" items={[
            { q: "Where is most UK arable farming?", opts: ["Western UK","Northern Scotland","Eastern and southern England","Wales and the Lake District"] },
            { q: "Why are UK water reservoirs mainly in upland areas?", opts: ["Further from cities","Higher rainfall means more water to store","Mountains provide natural dams","Lowland areas have too many rivers"] },
            { q: "Which is a non-renewable energy resource?", opts: ["HEP","Wind power","Natural gas","Solar power"] },
            { q: "Which global region has the largest oil reserves?", opts: ["North America","Europe","Middle East","Africa"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Resource Distribution" folio="2.3">
        <Activity num={4} kind="Exam Practice" title="Distribution" spec="Spec 6.2">
          <ExamTip>Use compass directions, place names and physical reasons. Link climate/relief/geology to the location.</ExamTip>
          <ExamQuestion id="s7-2-eq" lines={7}
            prompt="Describe the distribution of water resources in the UK. Suggest reasons for the pattern."
            marks={4} />
        </Activity>
        <Activity num={5} kind="Data Analysis" title="Global resource consumption" spec="Spec 6.2b">
          <WkTable id="s7-2-data" head={["Country / Region","Energy (GJ/year)","Water (m³/year)","Food (kcal/day)"]}
            rows={[
              ["USA (developed)","280","1,600","3,750"],
              ["UK (developed)","110","1,250","3,440"],
              ["China (emerging)","90","430","3,060"],
              ["India (emerging)","26","640","2,390"],
              ["Sub-Saharan Africa","15","180","2,150"],
            ]} />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"8px"}}>1. Describe the global pattern of energy consumption. Use figures.</div>
          <AnswerLines n={3} id="s7-2-q1" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>2. Suggest two reasons why developed countries consume more energy per capita.</div>
          <AnswerLines n={3} id="s7-2-q2" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>3. Describe the relationship between food supply and level of development.</div>
          <AnswerLines n={2} id="s7-2-q3" />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Resource Distribution" folio="2.4">
        <Activity num={6} kind="Classification" title="Energy resources" spec="Spec 6.3a">
          <WkTable id="s7-2-cls" head={["Energy Source","Renewable / Non-renewable","Biotic / Abiotic","One Advantage"]}
            rows={[
              ["Coal","Non-renewable","Abiotic","Reliable — generates regardless of weather"],
              ["Oil",null,"Abiotic",null],
              ["Natural gas","Non-renewable",null,null],
              ["Uranium (nuclear)",null,null,null],
              ["Wind power","Renewable","Abiotic",null],
              ["Solar power",null,null,null],
              ["Hydroelectric (HEP)","Renewable",null,null],
              ["Biomass",null,"Biotic",null],
            ]} />
          <ExamTip>"Renewable" doesn't mean environmentally friendly — it just means won't run out.</ExamTip>
          <ExamQuestion id="s7-2-eq2" lines={6}
            prompt="Explain the difference between a renewable and a non-renewable energy resource. Give one named example of each." marks={4} />
        </Activity>
      </Page>

      {/* ---------- 3 COAL & WIND ---------- */}
      <Page paper={P} running="Section 7 · Coal & Wind Power" folio="3.1">
        <SubsectionHeader num={3} title="Coal & Wind Power — Advantages & Disadvantages" spec="Spec 6.3b–c" />
        <KeyKnowledge items={[
          "<strong>Coal formation</strong> — plants died ~250 million years ago in swamplands → compressed → coal.",
          "<strong>Coal production +</strong>: large reserves (200+ yrs); reliable; high energy density. <strong>−</strong>: mining dangerous; landscape destruction; methane release.",
          "<strong>Coal use +</strong>: cheap; reliable baseload; well-established. <strong>−</strong>: LARGEST CO₂ emitter; SO₂ → acid rain; UK closed its last coal power station in 2024.",
          "<strong>Wind production +</strong>: no fuel costs; no CO₂; UK ~25% electricity from 10,267 turbines. <strong>−</strong>: each turbine needs 2 t rare earth elements; mostly from China; possible shortage within 20 years.",
          "<strong>Wind use +</strong>: free unlimited fuel; low running costs; sustainable. <strong>−</strong>: intermittent; visual/noise impact; bird strikes; NIMBYism.",
        ]} stats="Last UK coal power station closed Oct 2024 · 10,267 UK turbines · ~25% UK electricity from wind" />
        <Activity num={1} kind="Evaluate" title="Coal vs Wind" spec="Spec 6.3b–c">
          <WkTable id="s7-3-eval" head={["Source","Advantage","Disadvantage"]}
            rows={[
              ["Coal (production)","Large global reserves; reliable",null],
              ["Coal (use)","Cheap electricity; established; baseload",null],
              ["Wind (production)","No CO₂ when operating; no fuel costs",null],
              ["Wind (use)","Free fuel; low maintenance",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Coal & Wind Power" folio="3.2">
        <Activity num={2} kind="Cause and Effect" title="Coal and wind impacts" spec="Spec 6.3b–c">
          <WkTable id="s7-3-ce" head={["Cause / Factor","+/−","Effect"]}
            colWidths={["44%","10%",null]}
            rows={[
              ["Burning coal in power stations","−",null],
              ["Coal mining in upland areas","−",null],
              ["Wind turbines built on moorland","−",null],
              ["Wind power replacing coal","+",null],
              ["Drax power station switched to biomass","+",null],
              ["Rare earth shortage limits new turbines","−",null],
            ]} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Coal & wind" spec="Spec 6.3">
          <MCQ id="s7-3-mcq" items={[
            { q: "Why is wind power considered renewable?", opts: ["Uses rare earth elements that can be recycled","Wind won't run out and produces no CO₂ when running","Turbines can be built anywhere","Cheaper than all other sources"] },
            { q: "Main disadvantage of wind power identified in lessons?", opts: ["Produces large CO₂","Wind turbines are very cheap to build","Rare earth element scarcity threatens future turbine production","Not connected to National Grid"] },
            { q: "% of UK electricity from wind?", opts: ["About 5%","About 10%","About 25%","About 50%"] },
            { q: "Why is coal harmful when used?", opts: ["Releases CO₂ and SO₂","Runs out too quickly","Too long to mine","Too expensive to transport"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Coal & Wind Power" folio="3.3">
        <Activity num={4} kind="Exam Practice" title="Coal & wind" spec="Spec 6.3b–c">
          <ExamTip>For "advantages and disadvantages" — give BOTH sides. Use named examples (Drax, 10,267 turbines).</ExamTip>
          <ExamQuestion id="s7-3-eq1" lines={7} prompt="Explain one advantage and one disadvantage of developing wind power." marks={4} />
          <ExamQuestion id="s7-3-eq2" lines={7} prompt="Explain one advantage and one disadvantage of coal as an energy resource." marks={4} />
        </Activity>
      </Page>

      {/* ---------- 4 UK ENERGY MIX ---------- */}
      <Page paper={P} running="Section 7 · UK Energy Mix" folio="4.1">
        <SubsectionHeader num={4} title="The UK Energy Mix & Changing Global Demand" spec="Spec 6.4–6.5a" />
        <KeyKnowledge items={[
          "<strong>Energy mix</strong> — combination of sources a country uses.",
          "<strong>1990 UK mix</strong> — coal and oil dominated; fossil fuels ~75%.",
          "Since 1990: coal almost gone; gas remains dominant; renewables (wind) have grown massively.",
          "Drivers: CO₂ targets; falling renewables cost; EU/Paris Agreement.",
          "Global energy use: 1920 (60 EJ) → 1960 (150) → 1980 (300) → 2000 (375) → 2020 (510).",
          "<strong>Why demand has risen.</strong> Population growth; increased wealth (China, India industrialising); technology (devices, EVs).",
        ]} stats="1920: 60 EJ → 2020: 510 EJ · UK aim 70% green by 2030 · Last coal power station closed 2024" />
        <Activity num={1} kind="Completion" title="UK mix & global demand" spec="Spec 6.4–6.5a">
          <WkTable id="s7-4-mix" head={["Key Term / Concept","Detail"]}
            colWidths={["48%",null]}
            rows={[
              ["What is an energy mix?",{shaded:true,text:"Combination of different energy sources a country uses"}],
              ["UK's largest single energy source in 2024",null],
              ["% of UK electricity from wind",{shaded:true,text:"~25%"}],
              ["UK's 1990 dominant sources",null],
              ["Global energy use in 1920",{shaded:true,text:"60 exajoules"}],
              ["Global energy use in 2020",null],
              ["Main reason energy demand rose 1960–80",{shaded:true,text:"Rapid industrialisation and the oil boom"}],
              ["Three reasons global energy demand has increased",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · UK Energy Mix" folio="4.2">
        <Activity num={2} kind="Data Analysis" title="Population vs energy demand" spec="Spec 6.5a">
          <WkTable id="s7-4-pop" head={["Year","World Population","Energy Use (EJ)"]}
            rows={[["1920","1.8 billion","60"],["1940","2.3 billion","80"],["1960","3 billion","150"],["1980","4.4 billion","300"],["2000","6.1 billion","375"],["2020","7.8 billion","510"]]} />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"8px"}}>1. Describe the relationship between world population and energy use 1920–2020. Use data.</div>
          <AnswerLines n={3} id="s7-4-q1" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>2. Why did energy use increase particularly rapidly 1960–1980?</div>
          <AnswerLines n={2} id="s7-4-q2" />
        </Activity>
        <Activity num={3} kind="Fill in the Blanks" title="Energy mix" spec="Spec 6.4–6.5a">
          <FillBlanks id="s7-4-blanks"
            bank={["energy mix","renewable","fossil fuels","wind","exajoules","population","wealth","coal","2024","70%"]}
            items={[
              ["The term ", null, " describes the combination of different energy sources."],
              ["In 1990 the UK's energy was dominated by ", null, " — particularly coal and oil."],
              ["The UK plans to generate ", null, " of its electricity from green energy by 2030."],
              ["The UK closed its last ", null, " power station in ", null, "."],
              ["The UK currently generates around 25% from ", null, " power."],
              ["Global energy demand has risen from 60 to 510 ", null, " between 1920 and 2020."],
              ["Three reasons: rising global ", null, ", increased ", null, ", and technology advances."],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · UK Energy Mix" folio="4.3">
        <Activity num={4} kind="Exam Practice" title="Global energy demand" spec="Spec 6.4–6.5a">
          <ExamQuestion id="s7-4-eq" lines={9}
            prompt="Explain why global demand for energy has increased over the past 100 years." marks={4}
            hint="population growth · increased wealth · technological advances" />
        </Activity>
        <Activity num={5} kind="Variation Table" title="Global energy mixes" spec="Spec 6.4b">
          <WkTable id="s7-4-var" head={["Country","Main sources","Why this mix?","HDI"]}
            rows={[
              ["Norway","HEP 90%+, some oil/gas","Steep fjords + rainfall; wealthy enough to invest","Very High"],
              ["UK","Gas ~35%, Wind ~25%, Nuclear ~15%",null,"Very High"],
              ["China","Coal ~60%, growing renewables","Vast coal reserves; rapid industrialisation",null],
              ["India","Coal ~70%, some HEP and solar",null,"Medium"],
              ["Sub-Saharan Africa","Biomass/fuelwood","Limited infrastructure; low wealth",null],
            ]} />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Using the table, explain why the energy mix varies between countries at different levels of development. (4 marks)</div>
          <AnswerLines n={5} id="s7-4-eq2" />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · UK Energy Mix" folio="4.4">
        <Activity num={6} kind="Impacts" title="Non-renewables" spec="Spec 6.5b">
          <WkTable id="s7-4-nr" head={["Resource","Positive impacts","Negative impacts"]}
            rows={[
              ["Coal","Jobs in mining; cheap reliable electricity; energy security",null],
              ["Oil",null,"Spills devastate ecosystems (Niger Delta); high CO₂; displaces communities"],
              ["Natural gas","Cleaner than coal; lower CO₂/unit; quick to switch",null],
              ["Uranium (nuclear)","Very low CO₂; reliable baseload for millions",null],
            ]} />
        </Activity>
        <Activity num={7} kind="Impacts" title="Renewables" spec="Spec 6.5c">
          <WkTable id="s7-4-r" head={["Resource","Positive impacts","Negative impacts"]}
            rows={[
              ["HEP","No CO₂ operating; very reliable; long lifespan; export income (Bhutan $350m/yr)",null],
              ["Wind",null,"Visual/noise impact; bird strikes; rare earths; intermittent"],
              ["Solar","No CO₂; low running costs; scalable",null],
            ]} />
          <ExamQuestion id="s7-4-eq3" lines={7}
            prompt="Explain one positive and one negative impact of developing a renewable energy resource. Refer to a named example." marks={4} />
        </Activity>
      </Page>

      {/* ---------- HEP ---------- */}
      <Page paper={P} running="Section 7 · HEP" folio="4A.1">
        <SubsectionHeader num={"4A"} title="Hydroelectric Power (HEP)" spec="Spec 6.5c" />
        <NoteP>HEP generates electricity when flowing or falling water turns turbines. Renewable — water cycle replenishes water — but dams have major social/environmental impacts.</NoteP>
        <WkTable id="s7-4a-prs" head={["Advantages of HEP","Disadvantages of HEP"]}
          rows={[
            ["Renewable and low-carbon once built","Reservoirs flood valleys, farmland and habitats"],
            ["Reliable where rainfall or river flow is high","Communities may be displaced"],
            ["Can respond quickly to peak demand","River ecosystems and fish migration disrupted"],
            ["Reservoirs provide water supply, flood control, recreation","High construction cost; limited suitable sites"],
          ]} />
        <Activity num={"7A"} kind="Evaluate" title="HEP" spec="Spec 6.5c">
          <WkTable id="s7-4a-eval" head={["Factor","Positive impact","Negative impact"]}
            rows={[["People",null,null],["Economy",null,null],["Environment",null,null],["Energy security",null,null]]} />
        </Activity>
        <Activity num={"7B"} kind="Exam Practice" title="HEP" spec="Spec 6.5c">
          <ExamQuestion id="s7-4a-eq1" lines={4} prompt="Explain one advantage of developing HEP." marks={2} />
          <ExamQuestion id="s7-4a-eq2" lines={4} prompt="Explain one disadvantage of developing HEP." marks={2} />
        </Activity>
      </Page>

      {/* ---------- 5 FRACKING ---------- */}
      <Page paper={P} running="Section 7 · Fracking" folio="5.1">
        <SubsectionHeader num={5} title="Fracking as a Technology Solution" spec="Spec 6.5d" />
        <KeyKnowledge items={[
          "<strong>Fracking</strong> = hydraulic fracturing. High-pressure water + chemicals cracks shale rock to release gas.",
          "UK has ~<strong>200 trillion cubic feet</strong> of shale gas — enough for ~<strong>80 years</strong>.",
          "UK currently imports <strong>44%</strong> of natural gas (Norway, Qatar, Turkey).",
          "<strong>Benefits:</strong> energy security; lower gas prices; jobs; cheaper than some renewables.",
          "<strong>Risks:</strong> groundwater contamination; minor earthquakes; methane release; delays renewable transition; strong public opposition (Lancashire).",
          "UK placed a <strong>moratorium</strong> on fracking in 2019.",
        ]} stats="Shale gas reserve: 200 trillion ft³ · 80 years UK supply · 44% imports currently" />
        <Activity num={1} kind="Fill in the Blanks" title="Fracking" spec="Spec 6.5d">
          <FillBlanks id="s7-5-blanks"
            bank={["hydraulic fracturing","shale","groundwater","80 years","44%","methane","energy security","earthquakes","200 trillion","Norway"]}
            items={[
              ["Fracking is also known as ", null, " — it uses high-pressure water to crack ", null, " rocks and release gas."],
              ["The UK is estimated to have ", null, " cubic feet of shale gas — enough for ", null, "."],
              ["The UK currently imports ", null, " of natural gas; ", null, " is one of the largest suppliers."],
              ["One major environmental concern is the risk of ", null, " contamination from leaked chemicals."],
              ["Fracking has also been linked to minor ", null, "."],
              ["Fracking would also release ", null, ", a powerful greenhouse gas."],
              ["Supporters argue fracking could improve the UK's ", null, "."],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Fracking" folio="5.2">
        <Activity num={2} kind="Evaluate" title="Should the UK allow fracking?" spec="Spec 6.5d">
          <WkTable id="s7-5-eval" head={["Strategy","Advantage","Disadvantage"]}
            rows={[
              ["Reduces energy imports","Improves UK energy security; reduces dependence",null],
              ["Job creation","New energy-sector employment",null],
              ["Groundwater contamination risk",null,"Hydraulic fluid and chemicals could pollute drinking water"],
              ["Seismic activity",null,"Minor earthquakes — UK moratorium 2019"],
              ["Delays renewable transition",null,"Continued fossil fuel investment delays clean shift"],
            ]} />
        </Activity>
        <Activity num={3} kind="True or False" title="Fracking" spec="Spec 6.5d">
          <WkTable id="s7-5-tf" head={["Statement","T/F","Correction"]}
            colWidths={["56%","10%",null]}
            rows={[
              ["Fracking uses high-pressure water to crack shale rocks.",null,null],
              ["The UK's shale gas could supply the country for 200 years.",null,null],
              ["The UK currently produces all its natural gas domestically.",null,null],
              ["Fracking has been linked to minor earthquakes.",null,null],
              ["Fracking would reduce reliance on imported gas.",null,null],
              ["There are no environmental risks associated with fracking.",null,null],
              ["The UK placed a moratorium on fracking in 2019.",null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Fracking" folio="5.3">
        <Activity num={4} kind="Exam Practice" title="Fracking" spec="Spec 6.5d">
          <ExamTip>Cover BOTH economic benefits (energy security, jobs) AND environmental risks (groundwater, methane, seismicity). Conclude.</ExamTip>
          <ExamQuestion id="s7-5-eq" lines={15}
            prompt="Evaluate fracking as a solution to the UK's energy needs." marks={8}
            hint="what it is · economic benefits · environmental risks · overall judgement" />
        </Activity>
      </Page>

      {/* ---------- 6 STAKEHOLDERS ---------- */}
      <Page paper={P} running="Section 7 · Stakeholders" folio="6.1">
        <SubsectionHeader num={6} title="Stakeholder Attitudes to Energy Exploitation" spec="Spec 6.6" />
        <Activity num={1} kind="Completion" title="Stakeholder views" spec="Spec 6.6">
          <WkTable id="s7-6-stk" head={["Stakeholder","For / Against?","Reason","Impact on view"]}
            rows={[
              ["King Salman Al Saud (Saudi Arabia)","Strongly FOR oil","Saudi Arabia earns $421m/day from oil",null],
              ["UK Government","Mixed",null,"£28bn fuel tax vs net zero by 2050"],
              ["Simon Zanker (West Cumbrian Mining)",null,"New coal mine — 500 jobs, 3m tonnes/year",null],
              ["Andy Koss (Drax Power)","For renewable transition",null,"Drax switched to biomass 2023 — powers 2m homes"],
              ["Extinction Rebellion",null,"Opposes fossil fuel development",null],
              ["Local resident near wind farm",null,"Visual impact, noise, property values",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Stakeholders" folio="6.2">
        <Activity num={2} kind="Sort It" title="For or against coal?" spec="Spec 6.6">
          <SortIt id="s7-6-sort" headLeft="FOR coal development" headRight="AGAINST coal development"
            bank={[
              "Creates 500 new mining jobs","Releases large amounts of CO₂",
              "UK needs energy security","UK plans to ban coal power by 2025",
              "Coal is cheap and reliable","Contributes to global warming",
              "West Cumbria needs economic investment","Environmental damage to landscape",
            ]} rows={4} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Stakeholders" spec="Spec 6.6">
          <MCQ id="s7-6-mcq" items={[
            { q: "Why might Saudi Arabia support continued oil production?", opts: ["Oil is cleaner than renewables","Saudi Arabia earns $421m/day from oil","Oil will never run out","Saudi supports net zero by 2025"] },
            { q: "What is NIMBYism in energy?", opts: ["Supporting renewables nationally but opposing local installations","Wanting more fossil fuel development","A government policy on fracking","An environmental protest"] },
            { q: "Why does the UK government face a difficult decision?", opts: ["No renewable alternatives available","Earns £28bn from fuel taxes but has net zero by 2050","Coal is the cheapest","UK has no wind or solar"] },
            { q: "What did Drax Power Station do in 2023?", opts: ["Opened a new coal mine","Switched from coal to biomass","Started building offshore wind","Installed nuclear reactors"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Stakeholders" folio="6.3">
        <Activity num={4} kind="Exam Practice" title="Stakeholder attitudes" spec="Spec 6.6">
          <ExamTip>Identify SPECIFIC named stakeholders, state their position, explain WHY (financial interest, environmental values, national policy).</ExamTip>
          <ExamQuestion id="s7-6-eq" lines={11}
            prompt="Explain why different stakeholders have different attitudes towards the exploitation and consumption of energy resources." marks={6}
            hint="three named stakeholders with specific reasons" />
        </Activity>
      </Page>

      {/* ---------- 7 SUSTAINABLE MGMT ---------- */}
      <Page paper={P} running="Section 7 · Why Sustainable Management is Needed" folio="7.1">
        <SubsectionHeader num={7} title="Why Sustainable Energy Management is Needed" spec="Spec 6.7a–b" />
        <KeyKnowledge items={[
          "<strong>Fossil fuels are finite</strong> — at current rates: coal ~200 yrs, oil ~50 yrs, gas ~50 yrs.",
          "<strong>Population growth</strong> 7.8bn (2020) → 10bn+ by 2050 → increasing demand.",
          "<strong>Growing wealth</strong> — emerging economies industrialise → massive demand increase.",
          "<strong>Climate change</strong> — fossil fuel CO₂ → enhanced greenhouse effect.",
          "<strong>Even renewables need management</strong> — turbines need rare earths (2 t each). 10,267 UK turbines = 20,534 t used. May run out within 20 years.",
          "<strong>Critical renewable</strong> — needs resource management (biomass — must replant). <strong>Non-critical</strong> — doesn't (solar — number of panels doesn't affect the Sun).",
          "<strong>Energy-efficient homes</strong> — less electricity → less wind energy → less rare earth demand.",
        ]} />
        <Activity num={1} kind="Completion" title="Sustainable energy management" spec="Spec 6.7a">
          <WkTable id="s7-7-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["48%",null]}
            rows={[
              ["Definition of sustainable management",{shaded:true,text:"Meeting today's needs without compromising future generations"}],
              ["Why fossil fuels require management",null],
              ["Why renewables need management too",{shaded:true,text:"Rare earths for turbines may run out in 20 years"}],
              ['What is a "critical renewable"?',null],
              ["Example of a non-critical renewable",{shaded:true,text:"Solar — Sun is unaffected by number of panels"}],
              ["How energy-efficient homes help",null],
              ["Number of UK wind turbines",{shaded:true,text:"10,267"}],
              ["Rare earths in each turbine",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Why Sustainable Management is Needed" folio="7.2">
        <Activity num={2} kind="Cause and Effect" title="Why management is needed" spec="Spec 6.7a">
          <WkTable id="s7-7-ce" head={["Cause / Factor","+/−","Effect / Why it matters"]}
            colWidths={["44%","10%",null]}
            rows={[
              ["Population rising towards 10bn by 2050","−",null],
              ["Fossil fuels finite — oil ~50 yrs remaining","−",null],
              ["Growing wealth of emerging economies","−",null],
              ["Burning fossil fuels increases CO₂","−",null],
              ["Each turbine needs 2 t rare earths","−",null],
              ["12,000 European turbines reaching end of life → recycling","+",null],
              ["A-rated washing machine uses 40% less electricity","+",null],
            ]} />
        </Activity>
        <Activity num={3} kind="True or False" title="Sustainable management" spec="Spec 6.7a–b">
          <WkTable id="s7-7-tf" head={["Statement","T/F","Correction"]}
            colWidths={["56%","10%",null]}
            rows={[
              ["Sustainable management means using as many resources as possible today.",null,null],
              ["Fossil fuels are non-renewable and will eventually run out.",null,null],
              ["Solar is a critical renewable because panels affect the Sun.",null,null],
              ["Wind turbines need rare earths mainly from China.",null,null],
              ["Energy-efficient homes reduce demand for wind energy.",null,null],
              ["Biomass is non-critical because it doesn't need management.",null,null],
              ["Global energy demand has more than doubled since 1980.",null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Why Sustainable Management is Needed" folio="7.3">
        <Activity num={4} kind="Exam Practice" title="Sustainable management" spec="Spec 6.7a">
          <ExamQuestion id="s7-7-eq1" lines={5} prompt="Explain one reason for the management of non-renewable energy resources." marks={2} />
          <ExamQuestion id="s7-7-eq2" lines={10}
            prompt="Explain why both renewable and non-renewable energy resources require sustainable management." marks={6}
            hint="finite fossil fuels · demand · CO₂ · rare earths" />
        </Activity>
      </Page>

      {/* ---------- 8 NORWAY ---------- */}
      <Page paper={P} running="Section 7 · Case Study — Norway" folio="8.1">
        <SubsectionHeader num={8} title="Case Study — Norway (Developed)" spec="Spec 6.7c" />
        <KeyKnowledge items={[
          "Made <strong>£12.7bn</strong> from natural gas in 2017 — oil and gas are Norway's largest export.",
          "<strong>Sustainable oil extraction</strong> — normal rig loses ~30% of oil; Norway loses only ~10%.",
          "<strong>Norwegian Oil Fund</strong> (Government Pension Fund) — only 4.2% spent/yr (~$40bn) on public services. Saves for future generations.",
          "<strong>90%+ electricity</strong> from renewables — mainly HEP. Fjords + high rainfall + many rivers.",
          "Exports renewable electricity to Denmark, Germany and UK via <strong>North Sea Link</strong> — world's longest subsea power cable (2021).",
          "Investing in <strong>30 GW</strong> of offshore wind by 2040; developing green hydrogen.",
          "<strong>80%+ new car sales electric in 2024.</strong> Incentives: no import tax/VAT on EVs, free parking, free ferries, bus lanes, reduced tolls.",
          "First country to target ending petrol/diesel car sales (originally by 2025).",
        ]} stats="HEP 90%+ · Oil Fund 4.2% spent/yr · EV sales 80%+ · 30 GW offshore wind by 2040" />
        
        <Activity num={1} kind="Completion" title="Norway case study" spec="Spec 6.7c">
          <WkTable id="s7-8-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["48%",null]}
            rows={[
              ["% of Norway's electricity from renewables",{shaded:true,text:"Over 90% (mainly HEP)"}],
              ["Why is Norway physically ideal for HEP?",null],
              ["Norway's gas earnings in 2017",{shaded:true,text:"£12.7 billion"}],
              ["What is the Norwegian Oil Fund?",null],
              ["% of oil lost on Norwegian vs normal rigs",{shaded:true,text:"~10% vs ~30%"}],
              ["Countries Norway exports electricity to",null],
              ["Major cable to UK",{shaded:true,text:"North Sea Link (longest subsea cable, 2021)"}],
              ["% of new Norwegian car sales electric (2024)",null],
              ["Offshore wind target by 2040",{shaded:true,text:"30 GW capacity"}],
              ["Three EV incentives",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Case Study — Norway" folio="8.2">
        <Activity num={2} kind="Evaluate" title="Norway management" spec="Spec 6.7c">
          <WkTable id="s7-8-eval" head={["Strategy","Benefit","Limitation"]}
            rows={[
              ["Norwegian Oil Fund","Savings for future generations; 4.2% spent on services",null],
              ["More efficient oil extraction (10% vs 30%)",null,"Only helps while Norway continues oil production"],
              ["90%+ electricity from HEP","Low CO₂; reliable",null],
              ["80%+ new car sales electric","Reduces transport emissions",null],
              ["30 GW offshore wind by 2040","Diversifies; energy security",null],
              ["Exporting renewable electricity","Reduces fossil fuel use across Europe",null],
            ]} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Norway" spec="Spec 6.7c">
          <MCQ id="s7-8-mcq" items={[
            { q: "% of Norway's electricity from renewables?", opts: ["50%","70%","Over 90%","30%"] },
            { q: "What is the Norwegian Oil Fund?", opts: ["A company that drills","Saves oil revenues for future generations","Environmental org against oil","Builds more oil rigs"] },
            { q: "% of new car sales electric in 2024?", opts: ["30%","50%","70%","Over 80%"] },
            { q: "Why invest in wind when HEP is so abundant?", opts: ["HEP produces CO₂","Energy security in dry winters when river flow falls","Wind is cheaper than HEP","No more suitable HEP sites"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Case Study — Norway" folio="8.3">
        <Activity num={4} kind="Exam Practice" title="Norway" spec="Spec 6.7c">
          <ExamTip>Specific named strategies + data. "Over 90% of Norway's electricity comes from HEP because of steep fjords and high rainfall."</ExamTip>
          <ExamQuestion id="s7-8-eq" lines={11}
            prompt="Explain how Norway has attempted to manage its energy resources in a sustainable way." marks={6}
            hint="HEP · Oil Fund · efficient extraction · EVs · wind · exporting clean energy" />
        </Activity>
      </Page>

      {/* ---------- 9 BHUTAN ---------- */}
      <Page paper={P} running="Section 7 · Case Study — Bhutan" folio="9.1">
        <SubsectionHeader num={9} title="Case Study — Bhutan (Developing)" spec="Spec 6.7c" />
        <KeyKnowledge items={[
          "HDI rank 134/189. Carbon-negative — vast forest cover absorbs more CO₂ than it emits.",
          "Rural fuelwood reliance → deforestation, smoke, GHG emissions.",
          "Regulation: people without electricity limited to 16 m³ fuelwood/yr; with electricity 8 m³/yr — hard to enforce remotely.",
          "<strong>SRBE Project</strong> (2013, with UNDP) — 14,000 efficient brick stoves; benefits 14% rural pop; $4m budget.",
          "<strong>HEP.</strong> 21 large rivers, 2,500 mm rainfall/yr, steep valleys. Currently 2,326 MW of 23,760 MW potential.",
          "HEP = <strong>40%</strong> of government income. ~70% of electricity exported to India ($350m/yr in 2018).",
          "Asian Development Bank, India, Austria, Netherlands fund HEP.",
          "<strong>95%</strong> of Bhutanese households had electricity by 2013.",
          "<strong>Electric vehicles.</strong> Nissan Leaf agreement; 300 electric taxis by 2024. Owners get 20% subsidy + 70% low-interest loan = 10% upfront. One driver doubled income.",
          "Target: 70% of new car sales electric by 2035. 43,000 t CO₂ saved over 9 years from EV taxis.",
          "<strong>Alternative Renewable Energy Policy</strong> — wind, solar, biomass, micro-HEP. Wind backs up dry winters.",
        ]} stats="HEP 40% of govt income · $350m/yr to India · 95% electrified · 14,000 SRBE stoves · 70% EV target by 2035" />
        
        <Activity num={1} kind="Completion" title="Bhutan case study" spec="Spec 6.7c">
          <WkTable id="s7-9-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["50%",null]}
            rows={[
              ["Bhutan's HDI rank",{shaded:true,text:"134th out of 189"}],
              ["Why is Bhutan carbon-negative?",null],
              ["Main energy problem in rural Bhutan",{shaded:true,text:"Reliance on fuelwood — deforestation"}],
              ["What does the SRBE project do?",null],
              ["HEP generated vs potential",{shaded:true,text:"2,326 MW of 23,760 MW potential"}],
              ["% of government income from HEP",null],
              ["Electricity exports to India",{shaded:true,text:"~70% of output ($350m in 2018)"}],
              ["EV target by 2035",null],
              ["EV subsidy scheme",{shaded:true,text:"20% subsidy + 70% loan = 10% upfront"}],
              ["Why Bhutan also wants wind power",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Case Study — Bhutan" folio="9.2">
        <Activity num={2} kind="Compare" title="Norway vs Bhutan" spec="Spec 6.7c">
          <WkTable id="s7-9-comp2" head={["Aspect","Norway (Developed)","Bhutan (Developing)"]}
            rows={[
              ["Level of development","Very High HDI — wealthiest nations",null],
              ["Main renewable","HEP (90%+)",null],
              ["How non-renewables managed",null,"No oil/gas — fuelwood regulation and HEP"],
              ["Electric vehicle policy",null,"20% subsidy + 70% loan; 70% EV target by 2035"],
              ["Energy export","HEP to Denmark, Germany, UK",null],
              ["Biggest energy challenge",null,null],
              ["Role of international support",null,"ADB, India, Austria, Netherlands fund HEP"],
            ]} />
        </Activity>
        <Activity num={3} kind="Cause and Effect" title="Bhutan strategy" spec="Spec 6.7c">
          <WkTable id="s7-9-ce" head={["Cause / Factor","+/−","Effect"]}
            colWidths={["44%","10%",null]}
            rows={[
              ["14,000 brick stoves (SRBE)","+",null],
              ["70% of HEP electricity exported","+",null],
              ["Fuelwood limit hard to enforce remotely","−",null],
              ["EV taxi scheme — 300 EVs with subsidies","+",null],
              ["Only 2,326 MW of 23,760 MW generated","−",null],
              ["Alternative Renewable Energy Policy (2013)","+",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Case Study — Bhutan" folio="9.3">
        <Activity num={4} kind="Exam Practice" title="Compare & Evaluate" spec="Spec 6.7c">
          <ExamTip>Use "whereas", "in contrast", "unlike Norway…". Specific data for both countries.</ExamTip>
          <ExamQuestion id="s7-9-eq1" lines={9}
            prompt="Compare how Norway and Bhutan manage their energy resources sustainably." marks={6} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 7 · Case Study — Bhutan" folio="9.4">
        <ExamQuestion id="s7-9-eq2" lines={20}
          prompt="Evaluate the success of energy management in a developing country you have studied."
          marks={8}
          hint="Bhutan — HEP · SRBE · EVs · Alternative Renewable Energy Policy" />
      </Page>

      {/* ---------- KNOWLEDGE CHECK ---------- */}
      <Page paper={P} running="Section 7 · Knowledge Check" folio="KC.1">
        <SubsectionHeader num={10} title="Knowledge Check — 20 Questions" spec="" />
        <WkTable id="s7-kc1" head={["#","Question","Answer","✓"]}
          colWidths={["6%","48%",null,"6%"]}
          rows={[
            ["1","Difference between renewable and non-renewable resource?",null,null],
            ["2","What is an abiotic resource? Example.",null,null],
            ["3","What is a biotic resource? Example.",null,null],
            ["4","What is resource exploitation?",null,null],
            ["5","One environmental impact of deforestation (Cameroon).",null,null],
            ["6","Three countries the UK imports gas from.",null,null],
            ["7","What is an energy mix?",null,null],
            ["8","% of UK electricity from wind (2024)?",null,null],
            ["9","Why do turbines need rare earth elements?",null,null],
            ["10","How many UK wind turbines?",null,null],
          ]} />
      </Page>

      <Page paper={P} running="Section 7 · Knowledge Check" folio="KC.2">
        <WkTable id="s7-kc2" head={["#","Question","Answer","✓"]}
          colWidths={["6%","48%",null,"6%"]}
          rows={[
            ["11","What is fracking?",null,null],
            ["12","Shale gas under UK and how many years?",null,null],
            ["13","What is a stakeholder?",null,null],
            ["14","Why does Saudi Arabia support oil?",null,null],
            ["15","Define sustainable management.",null,null],
            ["16","% of Norway's electricity from renewables?",null,null],
            ["17","What is the Norwegian Oil Fund?",null,null],
            ["18","% of new car sales electric in Norway 2024?",null,null],
            ["19","HEP — % of Bhutan's government income?",null,null],
            ["20","One energy management strategy in Bhutan?",null,null],
          ]} />
        <HrOrn />
      </Page>

      <Page paper={P} running="Section 7 · RAG Self-Assessment" folio="RAG.1">
        <SubsectionHeader num={11} title="RAG Self-Assessment — Energy Resource Management" spec="" />
        <RAGTable items={[
          "Define abiotic, biotic, renewable, non-renewable resource",
          "Explain how resource exploitation changes environments — named examples",
          "Describe UK distribution of coal, oil/gas, wind, water, farming",
          "Describe global patterns of energy and resource consumption",
          "Explain advantages and disadvantages of coal",
          "Explain advantages and disadvantages of wind power",
          "Describe the UK energy mix and how it has changed since 1990",
          "Explain how global energy demand has changed over 100 years",
          "Explain advantages and disadvantages of HEP",
          "Evaluate fracking as a UK energy solution",
          "Explain stakeholder attitudes to energy",
          "Explain why renewable AND non-renewable resources need management",
        ]} />
      </Page>

      <Page paper={P} running="Section 7 · RAG Self-Assessment" folio="RAG.2">
        <RAGTable items={[
          "Norway — HEP, Oil Fund, efficient extraction, EVs, exports",
          "Bhutan — HEP, SRBE, EV taxi scheme, Alternative Renewable Energy Policy",
          "Compare Norway and Bhutan as developed vs developing case studies",
          "Use specific stats: 10,267 turbines · $421m/day Saudi oil · £28bn fuel tax",
          'Write an 8-mark "evaluate" answer on fracking',
          'Write an 8-mark "evaluate" answer on Bhutan energy management',
          'Write a 6-mark "compare" answer on Norway vs Bhutan',
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section7 = Section7;
