/* SECTION 4 — Ecosystems, Biodiversity & Management (Paper 1) */
function Section4() {
  const P = "1";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="Paper 1 · Component 1 · Topic 3" num="4"
        title="Ecosystems, Biodiversity & Management"
        subtitle="Biomes, the biosphere, tropical rainforest, deciduous woodland and sustainable management."
        meta={["Edexcel A · 1GA0/01","Costa Rica + Dalby Forest","Knowledge check + RAG"]}
        covers={[
          "Distribution of Ecosystems & Biomes","The Biosphere & UK Ecosystems",
          "Marine Ecosystems","Tropical Rainforest — Features & Threats",
          "Sustainable Management — Costa Rica","Deciduous Woodlands",
          "Skills Strengthening — Gersmehl, Adaptations, Dalby Forest",
          "Knowledge Check & RAG",
        ]}
        routine="Revision routine — complete each activity in order, correct in purple pen, highlight topics to revisit before the exam." />

      {/* ---------- 1 BIOMES ---------- */}
      <Page paper={P} running="Section 4 · Ecosystems & Biomes" folio="1.1">
        <SubsectionHeader num={1} title="Distribution of Ecosystems & Biomes" spec="Spec 3.1" />
        <KeyKnowledge items={[
          "<strong>Ecosystem</strong> — a community of plants and animals interacting with each other and their non-living environment.",
          "<strong>Biome</strong> — a large-scale ecosystem covering a wide geographical area with similar climate, vegetation and wildlife.",
          "<strong>Biosphere</strong> — the zone of Earth where life exists (land, sea, atmosphere). <strong>Insolation</strong> — incoming solar radiation; decreases with distance from the equator.",
          "<strong>Global biomes by latitude.</strong> Tropical rainforest 0–10°; tropical grassland (savanna) 10–30°; hot desert ~30°; temperate deciduous 40–60°; boreal (taiga) 50–70°N; tundra 70–90°.",
          "<strong>Atmospheric circulation → biomes.</strong> Hadley (0–30°): rising air at equator → low pressure → rainforest; descending at 30° → high pressure → hot desert. Ferrel (30–60°): rising at 60° → rain → temperate forests. Polar (60–90°): descending cold air → tundra/ice.",
          "<strong>Local factors.</strong> Altitude ↑ → temp ↓ → shorter growing season → less biodiversity. Nutrient-rich soils → diverse vegetation. Distance from equator ↑ → cooler. Thin mountainous soils → sparse vegetation.",
        ]} />
        
        <Activity num={1} kind="Definitions" title="Key terms" spec="Spec 3.1a">
          <WkTable id="s4-1-defs" head={["Term","Definition"]} colWidths={["28%",null]}
            rows={[["Ecosystem", null],["Biome", null],["Distribution", null],["Insolation", null],["Biosphere", null]]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Ecosystems & Biomes" folio="1.2">
        <Activity num={2} kind="Completion Table" title="Circulation → biomes" spec="Spec 3.1b"
          instructions="For each circulation cell, state the pressure type, climate and biome produced.">
          <WkTable id="s4-1-cells" head={["Cell","Pressure & climate","Biome / ecosystem created"]}
            rows={[
              ["Hadley cell (0°–30°)", null, null],
              ["Ferrel cell (30°–60°)", null, null],
              ["Polar cell (60°–90°)", null, null],
            ]} />
        </Activity>
        <Activity num={3} kind="Local Factors" title="Effect on ecosystems" spec="Spec 3.1b">
          <WkTable id="s4-1-local" head={["Factor","Effect on temperature / biodiversity / vegetation"]}
            colWidths={["38%",null]}
            rows={[
              ["Altitude increases", null],
              ["Nutrient-rich soils (from leaf litter)", null],
              ["Increasing distance from equator", null],
              ["Thin, mountainous soils", null],
            ]} />
        </Activity>
        <Activity num={4} kind="MCQ Checkpoint" title="Biomes" spec="Spec 3.1">
          <MCQ id="s4-1-mcq" items={[
            { q: "Which atmospheric cell produces tropical rainforests?", opts: ["Polar cell","Ferrel cell","Hadley cell","Trade wind cell"] },
            { q: "Why are hot deserts found at ~30° N/S?", opts: ["Rising air brings heavy rain","Descending air creates high pressure and dry conditions","Low pressure causes drought","Distance from ocean increases rainfall"] },
            { q: "What effect does increasing altitude have on biodiversity?", opts: ["Biodiversity increases","No effect","Biodiversity decreases","Only affects plant species"] },
            { q: "Which biome is associated with the boreal / taiga zone (50–70°N)?", opts: ["Tropical grassland","Hot desert","Tundra","Coniferous forest"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Ecosystems & Biomes" folio="1.3">
        <Activity num={5} kind="Exam Practice" title="Circulation and biomes" spec="Spec 3.1">
          <ExamTip>For "Explain" questions: state the process → explain the mechanism → link to the outcome. Two or more developed points.</ExamTip>
          <ExamQuestion id="s4-1-eq" lines={9}
            prompt="Explain how atmospheric circulation influences the distribution of biomes."
            marks={4}
            hint="name at least two cells · pressure · precipitation · resulting biome for each" />
        </Activity>
      </Page>

      {/* ---------- 2 BIOSPHERE & UK ECOSYSTEMS ---------- */}
      <Page paper={P} running="Section 4 · Biosphere & UK Ecosystems" folio="2.1">
        <SubsectionHeader num={2} title="The Biosphere & UK Ecosystems" spec="Spec 3.2–3.3" />
        <KeyKnowledge items={[
          "<strong>Goods & services.</strong> Food (crops, fish, meat); medicine (~50% of drugs derived from plants — aspirin from willow bark); building materials (timber, bamboo); fuel (wood, charcoal, biofuels).",
          "<strong>Exploitation issues.</strong> Energy (fossil fuels) — CO₂ → climate change. Water — over-extraction lowers water tables; pollutes rivers. Minerals — mining destroys habitats; toxic waste pollutes ecosystems.",
          "<strong>UK ecosystems.</strong> <em>Moorland</em> — upland, acid soils, heather, grouse (Yorkshire Moors). <em>Heathland</em> — lowland, sandy soils, heather, gorse (Dorset). <em>Wetland</em> — marshes/bogs/fens (Norfolk Broads). <em>Woodland</em> — broadleaf deciduous / mixed (New Forest).",
          "<strong>UK woodland decline.</strong> Agricultural clearance, urban expansion, unsustainable timber. UK now has one of the lowest % woodland cover in Europe (~13%).",
        ]} stats="~50% of drugs derived from plants · UK woodland cover ~13% (one of Europe's lowest)" />
        <Activity num={6} kind="Completion Table" title="Goods, services & exploitation" spec="Spec 3.2a">
          <WkTable id="s4-2-gs" head={["","Example","Why exploitation is an issue"]}
            rows={[["Energy (fossil fuels)", null, null],["Water resources", null, null],["Minerals", null, null]]} />
        </Activity>
        <Activity num={7} kind="Completion Table" title="UK ecosystems" spec="Spec 3.3a">
          <WkTable id="s4-2-uk" head={["UK Ecosystem","Key feature / typical location"]}
            colWidths={["32%",null]}
            rows={[["Moorland", null],["Heathland", null],["Wetland", null],["Woodland", null]]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Biosphere & UK Ecosystems" folio="2.2">
        <Activity num={8} kind="Exam Practice" title="UK woodland decline" spec="Spec 3.2–3.3">
          <ExamQuestion id="s4-2-eq" lines={8}
            prompt="Explain why the amount of wooded areas in the UK has decreased over time."
            marks={4}
            hint="agriculture · urbanisation · timber production · examples" />
        </Activity>
      </Page>

      {/* ---------- 3 MARINE ---------- */}
      <Page paper={P} running="Section 4 · Marine Ecosystems" folio="3.1">
        <SubsectionHeader num={3} title="Marine Ecosystems" spec="Spec 3.3b" />
        <KeyKnowledge items={[
          "<strong>Goods (physical).</strong> Fishing (food); oil & gas (24bn barrels in UK waters); sand/gravel extraction; wind energy.",
          "<strong>Services (natural benefits).</strong> Tourism (£3bn to UK economy); water sports; coastal protection; habitats for wildlife.",
          "<strong>Degrading activities.</strong> Overfishing — removes fish faster than they reproduce → food chains collapse. Pollution / oil spills — coats wildlife; depletes oxygen. Eutrophication — fertiliser runoff → algal bloom → dead zones. Coastal construction — destroys seabed habitats; increases sedimentation.",
        ]} stats="UK marine tourism = £3bn/year · UK waters: 24bn barrels of oil and gas" />
        
        <Activity num={9} kind="Sort It" title="Goods or services?" spec="Spec 3.3b">
          <SortIt id="s4-3-sort" headLeft="Goods (G) — physical products" headRight="Services (S) — natural benefits"
            bank={["Fishing","Tourism (£3bn)","Wind energy","Oil & gas (24bn barrels)","Sand/gravel","Habitats","Water sports"]} rows={4} />
        </Activity>
        <Activity num={10} kind="Completion Table" title="Human activities degrading marine ecosystems" spec="Spec 3.3b">
          <WkTable id="s4-3-deg" head={["Human activity","Impact on marine ecosystems"]}
            colWidths={["32%",null]}
            rows={[["Overfishing", null],["Pollution / oil spills", null],["Eutrophication", null],["Coastal construction", null]]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Marine Ecosystems" folio="3.2">
        <Activity num={11} kind="Exam Practice" title="Degrading UK marine ecosystems" spec="Spec 3.3b">
          <ExamQuestion id="s4-3-eq" lines={7}
            prompt="Explain how human activities are degrading UK marine ecosystems."
            marks={4}
            hint="two detailed points — name the activity → mechanism → impact" />
        </Activity>
      </Page>

      {/* ---------- 4 TROPICAL RAINFOREST ---------- */}
      <Page paper={P} running="Section 4 · Tropical Rainforest" folio="4.1">
        <SubsectionHeader num={4} title="Tropical Rainforest — Features, Biodiversity & Threats" spec="Spec 3.4–3.5" />
        <KeyKnowledge items={[
          "<strong>Abiotic.</strong> Temperature 27–30°C year-round; rainfall ~2000 mm/yr; nutrient-poor soils (rain washes nutrients away — leaching).",
          "<strong>Biotic.</strong> Bacteria/fungi decompose rapidly → fast nutrient cycling; buttress roots support tall trees in shallow soils; drip-tip leaves shed excess water; animals camouflaged or loud.",
          "<strong>Five layers (tallest → ground).</strong> Emergent 40–60 m → Canopy 20–40 m (intercepts ~80% of light) → Under-canopy 10–20 m → Shrub layer 0–10 m → Ground layer.",
          "<strong>Goods.</strong> Mahogany, coffee, palm oil, rubber, aspirin, quinine (malaria). <strong>Services.</strong> Carbon storage (~250bn tonnes), water regulation, oxygen, ecotourism.",
          "<strong>Climate-change threats.</strong> Rising temperatures → drought → trees die and release CO₂. Changing rainfall → ecosystem collapse.",
          "<strong>Deforestation causes.</strong> <em>Social:</em> subsistence farming. <em>Economic:</em> soy, cattle, logging, mining, road building. <em>Political:</em> weak enforcement, corruption allows illegal logging.",
        ]} stats="Rainfall ~2000 mm/yr · Canopy intercepts ~80% of light · TRF stores ~250bn tonnes of carbon" />
        
        <Activity num={12} kind="Classify" title="Biotic vs abiotic" spec="Spec 3.4a">
          <WkTable id="s4-4-ba" head={["Feature","B or A?","Effect on TRF functioning"]}
            rows={[
              ["Temperature: 27–30°C year-round", null, null],
              ["Bacteria/fungi (decomposers)", null, null],
              ["Soils: nutrients washed away by rain", null, null],
              ["Plants: buttress roots, drip-tip leaves", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Tropical Rainforest" folio="4.2">
        <Activity num={13} kind="Completion Table" title="TRF layers" spec="Spec 3.4c">
          <WkTable id="s4-4-layers" head={["Layer (tallest → ground)","Height / light / key species"]}
            colWidths={["38%",null]}
            rows={[["1. Emergent",null],["2. Canopy",null],["3. Under-canopy",null],["4. Shrub layer",null],["5. Ground layer",null]]} />
        </Activity>
        <Activity num={14} kind="Sort It" title="Goods or services?" spec="Spec 3.5a">
          <SortIt id="s4-4-gs" headLeft="Goods (G)" headRight="Services (S)"
            bank={["Mahogany timber","Quinine (malaria)","Ecotourism","Carbon storage","Coffee","Aspirin","White-water rafting","Palm oil"]} rows={4} />
        </Activity>
        <Activity num={15} kind="Threats" title="Climate change & deforestation" spec="Spec 3.5b–c">
          <WkTable id="s4-4-thr" head={["Climate change: 2 impacts on TRF","Deforestation: social cause","Deforestation: economic cause"]}
            rows={[[null,null,null]]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Tropical Rainforest" folio="4.3">
        <Activity num={16} kind="MCQ Checkpoint" title="Tropical rainforest" spec="Spec 3.4–3.5">
          <MCQ id="s4-4-mcq" items={[
            { q: "What is the role of bacteria and fungi in the TRF?", opts: ["Producing oxygen through photosynthesis","Rapidly decomposing dead material and recycling nutrients","Providing food for canopy animals","Storing carbon in the soil"] },
            { q: "Why are TRF soils nutrient-poor despite high rainfall?", opts: ["Lack of decomposers","Heavy rain leaches nutrients away before plants can absorb","Trees absorb all nutrients","Thin soils prevent nutrient storage"] },
            { q: "Which layer receives the LEAST light?", opts: ["Emergent","Canopy","Under-canopy","Ground layer"] },
            { q: "Which is a SOCIAL cause of deforestation in the Amazon?", opts: ["Soy farming for export","Logging companies","Subsistence farming by local communities","Road building by government"] },
          ]} />
        </Activity>
        <Activity num={17} kind="Exam Practice" title="Threats to the TRF" spec="Spec 3.4–3.5">
          <ExamQuestion id="s4-4-eq" lines={7}
            prompt="Explain why deforestation threatens the tropical rainforest ecosystem."
            marks={4}
            hint="biodiversity loss · nutrient cycle disruption · climate change · habitat destruction" />
        </Activity>
      </Page>

      {/* ---------- 5 COSTA RICA ---------- */}
      <Page paper={P} running="Section 4 · Case Study — Costa Rica" folio="5.1">
        <SubsectionHeader num={5} title="Sustainable Management — Costa Rica" spec="Spec 3.5d" />
        <KeyKnowledge items={[
          "<strong>Location.</strong> Central America, between Nicaragua (N) and Panama (S); ~8–11°N. Pacific to the W, Caribbean to the E. <strong>Biodiversity hotspot</strong>: 5% of world's species in 0.03% of land area.",
          "<strong>Why management was needed.</strong> Rapid 1970s–80s deforestation for cattle ranching and logging; government action reversed the trend.",
          "<strong>National parks & laws.</strong> 25% of land legally protected; logging bans; fines for illegal clearing.",
          "<strong>Ecotourism</strong> (e.g. Rara Avis). Low-impact tourism generates income for local communities; incentivises conservation.",
          "<strong>Carbon credits.</strong> Companies pay Costa Rica to maintain forest as a carbon store; government pays landowners to protect trees (Payments for Ecosystem Services).",
          "<strong>NGO projects</strong> (e.g. FUNDECOR). Work with local landowners; promote sustainable use; provide funds and training.",
        ]} stats="25% of land in national parks · Forest cover 21% (1985) → 52% (2010) · Ecotourism $4bn/yr · 2.5m visitors/yr" />
        
        <Activity num={18} kind="Location" title="Describe the location of Costa Rica" spec="Spec 3.5d">
          <div className="sort-bank" style={{marginTop:0}}>Central America · Nicaragua · Panama · Pacific Ocean · Caribbean Sea · tropical · 8°–11°N</div>
          <AnswerLines n={3} id="s4-5-loc" />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Case Study — Costa Rica" folio="5.2">
        <Activity num={19} kind="Strategies" title="Management strategies" spec="Spec 3.5d"
          instructions="Include statistics where you can.">
          <WkTable id="s4-5-strat" head={["Strategy","What is it / how does it work?","Advantage","Disadvantage"]}
            rows={[
              ["National Parks & Laws", null, null, null],
              ["Ecotourism (e.g. Rara Avis)", null, null, null],
              ["Carbon Credits", null, null, null],
              ["NGO Projects (e.g. FUNDECOR)", null, null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Case Study — Costa Rica" folio="5.3">
        <Activity num={20} kind="Exam Practice" title="Assess Costa Rica" spec="Spec 3.5d">
          <ExamTip>For 8-mark "Assess" questions: describe each strategy → give evidence/statistics → evaluate (strengths AND weaknesses) → reach an overall judgement.</ExamTip>
          <ExamQuestion id="s4-5-eq" lines={18}
            prompt="'Assess how successfully Costa Rica manages its tropical rainforest sustainably.'"
            marks={8}
            hint="named strategies · evidence/statistics · balanced argument · overall judgement" />
        </Activity>
      </Page>

      {/* ---------- 6 DECIDUOUS WOODLAND ---------- */}
      <Page paper={P} running="Section 4 · Deciduous Woodlands" folio="6.1">
        <SubsectionHeader num={6} title="Deciduous Woodlands" spec="Spec 3.6–3.7" />
        <KeyKnowledge items={[
          "<strong>Climate.</strong> Mild and wet; 4 distinct seasons; 600–1500 mm rainfall; temperature 4–20°C. <em>'Deciduous'</em> = trees shed leaves in autumn to conserve water/energy.",
          "<strong>Structure.</strong> Canopy — ash and oak (20–30 m); sub-canopy — hazel, holly; herb layer — bluebells, ferns (flower before canopy closes); ground layer — mosses, fungi, leaf litter.",
          "<strong>Adaptations.</strong> Plants: large leaf surface for light absorption; leaf shedding to reduce winter water loss. Animals: migration, hibernation, food storage.",
          "<strong>Goods & services.</strong> Timber (oak, ash); recreation (Go Ape, walking); biodiversity (deer, foxes, owls); scenery/tourism.",
          "<strong>Threats.</strong> Climate change: warmer, drier summers → drought stress; ash dieback. Deforestation: UK lost 80%+ of ancient woodland since 1930; only ~13% land forested.",
          "<strong>Sustainable management.</strong> Coppicing — cutting at base; regrowth provides timber and maintains understorey light. SSSI designation, woodland grants, replanting schemes.",
        ]} stats="UK ~13% forested · 80%+ ancient woodland lost since 1930 · Rainfall 600–1500 mm/yr" />
        <Activity num={21} kind="Structure" title="Climate and layers" spec="Spec 3.6a–b">
          <div style={{fontFamily:"var(--serif)", fontWeight:600, fontSize:"11pt"}}>Climate:</div>
          <AnswerLines n={2} id="s4-6-climate" />
          <WkTable id="s4-6-layers" head={["Layer","Height / key trees or plants / light"]}
            colWidths={["38%",null]}
            rows={[
              ["Canopy — ash and oak (20–30 m)", null],
              ["Sub-canopy / shrub layer", null],
              ["Herb layer", null],
              ["Ground layer", null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Deciduous Woodlands" folio="6.2">
        <Activity num={22} kind="Completion Table" title="Goods & services" spec="Spec 3.7a">
          <WkTable id="s4-6-gs" head={["Good / Service","Detail / statistic from notes"]}
            colWidths={["38%",null]}
            rows={[
              ["Timber production", null],
              ["Recreation (walking, Go Ape etc.)", null],
              ["Biodiversity / habitat", null],
              ["Agriculture", null],
              ["Scenery / tourism", null],
            ]} />
        </Activity>
        <Activity num={23} kind="Completion Table" title="Threats" spec="Spec 3.7b–c">
          <WkTable id="s4-6-thr" head={["Climate change threat","Deforestation threat (include a UK statistic)"]}
            rows={[[null,null]]} />
        </Activity>
        <Activity num={24} kind="MCQ Checkpoint" title="Deciduous woodland" spec="Spec 3.6–3.7">
          <MCQ id="s4-6-mcq" items={[
            { q: "What does 'deciduous' mean?", opts: ["Trees are evergreen all year","Trees shed leaves in autumn to save energy","Trees grow in tropical climates","Trees have needle-like leaves"] },
            { q: "Which layer flowers in spring BEFORE the canopy closes?", opts: ["Ground layer","Canopy","Herb layer","Sub-canopy"] },
            { q: "How does coppicing benefit biodiversity?", opts: ["Removes all trees so new species can colonise","Allows more light to reach the woodland floor, encouraging diverse understorey","Kills invasive species","Provides habitat for canopy birds only"] },
            { q: "Approximately what % of the UK is currently forested?", opts: ["30%","50%","5%","13%"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Deciduous Woodlands" folio="6.3">
        <Activity num={25} kind="Exam Practice" title="UK deforestation" spec="Spec 3.7">
          <ExamQuestion id="s4-6-eq" lines={7}
            prompt="Explain how population growth in the UK has led to deforestation of deciduous woodland."
            marks={4}
            hint="farming expansion · urban growth · timber demand — develop two or more points with evidence" />
        </Activity>
      </Page>

      {/* ---------- 7 SKILLS STRENGTHENING ---------- */}
      <Page paper={P} running="Section 4 · Skills Strengthening" folio="7.1">
        <SubsectionHeader num={7} title="Ecosystems Skills Strengthening" spec="Spec 3.4–3.7" />
        <div className="eyebrow">Gersmehl Nutrient Cycle and Food Webs</div>
        <NoteP>The Gersmehl model shows stores and flows of nutrients in an ecosystem. Stores are biomass, litter and soil. Flows transfer nutrients between stores — leaf fall, decomposition, uptake by roots and leaching.</NoteP>
        <WkTable id="s4-7-gers" head={["Ecosystem","Biomass","Litter","Soil","Why?"]}
          rows={[
            ["Tropical rainforest","Very large","Small","Small","Hot, wet conditions cause rapid growth and decomposition; nutrients quickly taken up by roots → most in living biomass."],
            ["Deciduous woodland","Moderate","Moderate / seasonal","Moderate","Cooler winters slow growth and decomposition; leaf fall in autumn adds litter; nutrients stored longer in soil."],
          ]} />
        
        <Activity num={1} kind="Nutrient Cycle" title="Complete the cycle" spec="Spec 3.4b / 3.6b">
          <WkTable id="s4-7-cyc" head={["Process","What happens?","TRF or deciduous woodland link"]}
            rows={[
              ["Leaf fall", null, null],
              ["Decomposition", null, null],
              ["Nutrient uptake", null, null],
              ["Leaching", null, null],
              ["Biomass growth", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Skills Strengthening" folio="7.2">
        <div className="eyebrow">Adaptations</div>
        <WkTable id="s4-7-adapt" head={["Ecosystem","Plant adaptation","How it helps","Animal adaptation","How it helps"]}
          rows={[
            ["TRF","Drip-tip leaves","Water runs off quickly, reducing fungal growth in wet conditions","Strong limbs / gripping tails","Move through the canopy where food and shelter are"],
            ["TRF","Buttress roots","Support tall trees in shallow, nutrient-poor soils","Camouflage / modified beaks","Avoid predators or access specific foods"],
            ["Deciduous","Broad leaves in summer","Maximise photosynthesis during growing season","Hibernation","Reduce energy use in winter when food is scarce"],
            ["Deciduous","Leaves shed in winter","Reduces water loss and frost/wind damage","Migration or food storage","Survive seasonal shortages"],
          ]} />
        <Activity num={3} kind="Sentence Starters" title="Adaptation answers" spec="Spec 3.4c / 3.6c">
          <WkTable id="s4-7-starters" head={["Question","Sentence starter"]}
            colWidths={["48%",null]}
            rows={[
              ["Explain how one plant is adapted to a TRF environment. (3 marks)","One adaptation is… This helps because… Therefore…"],
              ["Explain how one animal is adapted to a deciduous woodland. (3 marks)","One adaptation is… This is useful in winter because…"],
              ["Compare biodiversity in TRF and deciduous woodlands. (4 marks)","TRF has higher biodiversity because… whereas deciduous woodlands…"],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 4 · Skills Strengthening" folio="7.3">
        <div className="eyebrow">Named Deciduous Woodland Management — Dalby Forest</div>
        <NoteP>Dalby Forest is a managed deciduous and mixed woodland in the North York Moors. It provides timber, recreation, conservation, education and carbon storage. Sustainable management balances visitors, biodiversity and resource use.</NoteP>
        <WkTable id="s4-7-dalby" head={["Management approach","How it works","Benefit","Limitation"]}
          rows={[
            ["Zoning for recreation","Walking, cycling, visitor facilities concentrated in selected areas","Reduces pressure on more sensitive habitats","Popular areas may suffer erosion, litter, disturbance"],
            ["Sustainable timber","Trees harvested and replanted; structure managed over time","Maintains timber supply while keeping forest cover","Machinery and access tracks disturb habitats"],
            ["Conservation","Sensitive areas protected; dead wood and varied habitats retained","Supports biodiversity, insects, birds, food webs","Less area for recreation or timber"],
            ["Education","Signs, trails and visitor education encourage responsible use","Improves understanding; reduces damage","Depends on visitors following guidance"],
          ]} />
        <Activity num={4} kind="Evaluate" title="Dalby Forest management" spec="Spec 3.7d">
          <WkTable id="s4-7-eval" head={["Strategy","Evidence it is sustainable","Reason it may not fully solve the problem"]}
            rows={[
              ["Replanting after timber extraction", null, null],
              ["Visitor zoning", null, null],
              ["Habitat conservation", null, null],
              ["Education and signage", null, null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- KNOWLEDGE CHECK ---------- */}
      <Page paper={P} running="Section 4 · Knowledge Check" folio="KC.1">
        <SubsectionHeader num={8} title="Knowledge Check — 20 Questions" spec="" />
        <NoteP>Close your notes. Mark with a different colour.</NoteP>
        <WkTable id="s4-kc1" head={["✓","#","Question","Answer"]}
          colWidths={["6%","6%","48%",null]}
          rows={[
            [null,"1","Define 'ecosystem'.",null],
            [null,"2","Define 'biome'.",null],
            [null,"3","Name the THREE atmospheric circulation cells.",null],
            [null,"4","What pressure is found at the equator? What biome does this create?",null],
            [null,"5","Why is there little vegetation at high altitudes?",null],
            [null,"6","Name TWO goods provided by marine ecosystems.",null],
            [null,"7","Name TWO services provided by marine ecosystems.",null],
            [null,"8","What is eutrophication?",null],
            [null,"9","Define 'biodiversity'.",null],
            [null,"10","Name the FIVE layers of the tropical rainforest.",null],
          ]} />
      </Page>

      <Page paper={P} running="Section 4 · Knowledge Check" folio="KC.2">
        <WkTable id="s4-kc2" head={["✓","#","Question","Answer"]}
          colWidths={["6%","6%","48%",null]}
          rows={[
            [null,"11","Role of detritivores / decomposers in the TRF?",null],
            [null,"12","ONE social cause of deforestation in the Amazon.",null],
            [null,"13","ONE economic cause of deforestation in the Amazon.",null],
            [null,"14","What is ecotourism? Name a Costa Rican example.",null],
            [null,"15","% of Costa Rica's rainforest protected by national parks?",null],
            [null,"16","ONE advantage of carbon credits.",null],
            [null,"17","ONE disadvantage of carbon credits.",null],
            [null,"18","What does 'deciduous' mean?",null],
            [null,"19","Why has the UK lost so much of its woodland?",null],
            [null,"20","Define 'sustainable management'.",null],
          ]} />
        <HrOrn />
      </Page>

      <Page paper={P} running="Section 4 · RAG Self-Assessment" folio="RAG">
        <SubsectionHeader num={9} title="RAG Self-Assessment — Ecosystems" spec="" />
        <NoteP>R = don't know · A = partly know · G = know well</NoteP>
        <RAGTable items={[
          "Atmospheric circulation & biome distribution",
          "Local factors affecting ecosystems (altitude, soils)",
          "The biosphere — goods, services & exploitation",
          "UK ecosystems — moorland, heathland, wetland, woodland",
          "Marine ecosystems — goods, services & threats",
          "TRF biotic & abiotic features",
          "TRF layers & biodiversity",
          "TRF goods and services",
          "TRF threats — climate change & deforestation",
          "Sustainable management — Costa Rica (strategies & evidence)",
          "Deciduous woodland — structure & adaptations",
          "Deciduous woodland — goods, services & threats",
          'Dalby Forest — sustainable management',
          '8-mark "Assess / Evaluate" technique',
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section4 = Section4;
