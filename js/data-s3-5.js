/* data-s3-5.js — Content data for Sections 3, 4 & 5 */
window.GEO_DATA = window.GEO_DATA || {};

/* ── SECTION 3: River Landscapes & Processes ── */
window.GEO_DATA[3] = {
  title: "River Landscapes & Processes",
  paper: 1, paperLabel: "Paper 1 · Physical", color: "p1",
  topics: [
    {
      title: "River Basin Features & Source-to-Mouth Changes",
      spec: "Spec 1.7",
      flashcards: [
        { q: "What is a drainage basin?", a: "The area of land drained by a river and all its tributaries. Also called the catchment area." },
        { q: "What is a watershed?", a: "The high ground forming the boundary/edge of a drainage basin, separating it from neighbouring basins." },
        { q: "What is discharge?", a: "The volume of water flowing through a river channel per second, measured in cumecs (m³/s)." },
        { q: "How does a river change from source to mouth?", a: "Width and depth INCREASE. Gradient DECREASES. Discharge INCREASES. Velocity INCREASES. Sediment size DECREASES (from large boulders to fine silt)." },
        { q: "What is a tributary?", a: "A smaller river or stream that flows into and joins the main river." },
        { q: "What is a confluence?", a: "The point where two rivers meet and join together." }
      ],
      mcq: [
        { q: "What is the watershed of a drainage basin?", opts: ["The river's source", "The high ground forming the basin boundary", "The point where rivers meet", "The area flooded by a river"], correct: 1 },
        { q: "How does gradient change from source to mouth?", opts: ["Increases", "Stays the same", "Decreases", "First increases then decreases"], correct: 2 },
        { q: "What is discharge measured in?", opts: ["Metres per second", "Litres", "Cumecs (m³/s)", "Kilometres"], correct: 2 },
        { q: "What happens to sediment size from source to mouth?", opts: ["Increases", "Stays the same", "Decreases", "Depends on the season"], correct: 2 }
      ],
      match: { pairs: [
        { term: "Source", def: "Where the river begins, usually in upland areas" },
        { term: "Mouth", def: "Where the river meets the sea or a larger river" },
        { term: "Tributary", def: "A smaller river that flows into the main channel" },
        { term: "Confluence", def: "Where two rivers meet" },
        { term: "Watershed", def: "High ground forming the edge of a drainage basin" },
        { term: "Discharge", def: "Volume of water flowing per second (m³/s / cumecs)" }
      ]},
      truefalse: [
        { s: "A river's gradient is steepest in the lower course.", a: false, c: "Gradient is steepest in the upper course and decreases towards the mouth." },
        { s: "Discharge increases from source to mouth.", a: true },
        { s: "The watershed is the low-lying area surrounding a drainage basin.", a: false, c: "The watershed is the HIGH ground forming the basin boundary." },
        { s: "Sediment carried by a river becomes smaller and rounder downstream.", a: true },
        { s: "A confluence is where a river meets the sea.", a: false, c: "A confluence is where two rivers meet. Where a river meets the sea is called the mouth." }
      ],
      exam: { q: "Describe the changes between the source and the mouth of a river. (4 marks)", model: "From source to mouth, a river changes significantly. Width and depth both increase as more tributaries join, adding to discharge. The gradient decreases as the river reaches flatter land, but velocity actually increases due to reduced friction in the wider channel. Sediment size decreases from large angular boulders in the upper course to fine silt near the mouth, as attrition gradually breaks particles down. The river also becomes straighter in the upper course (with interlocking spurs) and more meandering in the lower course.", marks: 4, hint: "Width/depth increase, gradient decreases, discharge increases, velocity increases, sediment size decreases" }
    },
    {
      title: "River Erosion, Waterfalls & Gorges",
      spec: "Spec 1.7–1.8",
      flashcards: [
        { q: "Name the four types of river erosion.", a: "Hydraulic action, Abrasion, Attrition, Solution (also called corrosion)." },
        { q: "How is a waterfall formed?", a: "River flows over hard rock overlying softer rock. Softer rock erodes faster → undercuts hard rock → overhang forms → collapses. Process repeats, waterfall retreats upstream leaving a gorge." },
        { q: "What is a plunge pool?", a: "A deep pool at the base of a waterfall, formed by the hydraulic action and abrasion of the falling water swirling around." },
        { q: "What is a gorge?", a: "A steep-sided valley left behind as a waterfall retreats upstream over thousands of years." },
        { q: "What rock types are found at High Force waterfall (River Tees)?", a: "Hard dolerite (Whin Sill) overlies softer limestone and shale. The softer rock is eroded faster, undercutting the dolerite." }
      ],
      mcq: [
        { q: "Which erosion process involves rocks colliding and making each other smaller and rounder?", opts: ["Hydraulic action", "Solution", "Abrasion", "Attrition"], correct: 3 },
        { q: "What forms behind a waterfall as it retreats upstream?", opts: ["A floodplain", "A levee", "A gorge", "An oxbow lake"], correct: 2 },
        { q: "What is the hard rock found at High Force waterfall?", opts: ["Granite", "Limestone", "Dolerite (Whin Sill)", "Sandstone"], correct: 2 },
        { q: "What mainly causes the undercutting of hard rock at a waterfall?", opts: ["Attrition of the hard rock", "Erosion of the softer rock beneath", "Freeze-thaw weathering", "Solution of the hard rock"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Hydraulic action (river)", def: "Force of water compressing air into cracks in bed and banks" },
        { term: "Abrasion (river)", def: "Sediment scrapes and grinds the river bed and banks" },
        { term: "Attrition", def: "Rocks carried by river collide, becoming smaller and rounder" },
        { term: "Waterfall", def: "Forms where hard rock overlies soft rock which erodes faster" },
        { term: "Gorge", def: "Steep-sided valley left as waterfall retreats upstream" },
        { term: "Plunge pool", def: "Deep pool formed by turbulent water at the base of a waterfall" }
      ]},
      truefalse: [
        { s: "Waterfalls form where soft rock overlies hard rock.", a: false, c: "Hard rock overlies soft rock. The soft rock below is eroded faster, undercutting the hard rock." },
        { s: "A gorge forms in front of a waterfall as it retreats upstream.", a: false, c: "The gorge forms BEHIND the waterfall — it's the valley left by the retreat." },
        { s: "High Force on the River Tees is formed by dolerite overlying limestone.", a: true },
        { s: "Attrition makes sediment larger.", a: false, c: "Attrition makes sediment smaller and rounder through collision." },
        { s: "Plunge pools are formed by hydraulic action and abrasion at the base of a waterfall.", a: true }
      ],
      exam: { q: "Explain the formation of a waterfall. You may use a diagram. (6 marks)", model: "Waterfalls form where a river crosses a band of hard rock overlying softer rock. Initially, the river flows over both rock types equally. The softer rock beneath erodes faster through hydraulic action (force of water) and abrasion (sediment scraping). This gradually undercuts the hard rock, leaving an overhang. Eventually the unsupported overhang collapses into the plunge pool below, which is deepened by the swirling turbulent water. The waterfall then retreats upstream and the process repeats. A steep-sided gorge is left behind as evidence of the retreat. High Force on the River Tees is a good example, where dolerite (Whin Sill) overlies softer limestone and shale.", marks: 6, hint: "Hard/soft rock → softer erodes faster → undercut → overhang → collapse → retreat → gorge → plunge pool" }
    },
    {
      title: "Meanders, Oxbow Lakes & Floodplains",
      spec: "Spec 1.8",
      flashcards: [
        { q: "Why does the fastest flow move to the outside of a meander bend?", a: "Water is deflected to the outside by centrifugal force (inertia). The thalweg (fastest current) hits the outer bank, causing erosion and forming a river cliff." },
        { q: "What forms on the inside of a meander bend?", a: "A slip-off slope (point bar) forms because velocity is slower on the inside → deposition of sediment." },
        { q: "How does an oxbow lake form?", a: "Meander loop becomes very curved → neck narrows → river cuts through during flood → deposits sediment at both ends → old loop is cut off → forms a lake → silts up over time." },
        { q: "How is a floodplain formed?", a: "Lateral erosion by meanders widens the valley floor. When the river floods, it deposits alluvium (silt, sand, clay) across the flat floor. Repeated flooding builds thick fertile layers." },
        { q: "How do levees form?", a: "When a river floods, it spreads out and loses velocity. The heaviest sediment is deposited first, close to the channel, building up natural embankments (levees)." }
      ],
      mcq: [
        { q: "What forms on the outside of a meander bend?", opts: ["Slip-off slope", "Point bar", "River cliff", "Levee"], correct: 2 },
        { q: "What is an oxbow lake?", opts: ["A lake formed by glacial erosion", "An isolated meander loop cut off from the main river", "A lake in a floodplain from flooding", "A reservoir behind a dam"], correct: 1 },
        { q: "What material is deposited on floodplains when a river floods?", opts: ["Gravel and boulders", "Sand and silt (alluvium)", "Clay only", "Chalk and limestone"], correct: 1 },
        { q: "Why do levees contain coarser sediment close to the channel?", opts: ["Faster currents carry coarse sediment far from the channel", "Velocity drops when river floods, depositing heaviest material nearest the channel first", "Coarse sediment is lighter and floats to the channel edges", "Fine sediment sinks faster than coarse"], correct: 1 }
      ],
      match: { pairs: [
        { term: "River cliff", def: "Steep bank on the outside of a meander — formed by erosion" },
        { term: "Slip-off slope", def: "Gently sloping bank on the inside of a meander — formed by deposition" },
        { term: "Oxbow lake", def: "Isolated crescent-shaped lake formed when a meander is cut off" },
        { term: "Floodplain", def: "Wide, flat area of alluvial deposits on either side of a river" },
        { term: "Levee", def: "Natural embankment of coarse sediment alongside the river channel" },
        { term: "Alluvium", def: "Fine sediment (silt, sand, clay) deposited by a flooding river" }
      ]},
      truefalse: [
        { s: "The fastest flow in a meander is on the inside of the bend.", a: false, c: "The fastest flow (thalweg) is on the OUTSIDE of the bend." },
        { s: "Deposition on the inside of meanders forms a slip-off slope.", a: true },
        { s: "An oxbow lake forms when a river straightens by cutting through a meander neck.", a: true },
        { s: "Levees contain the finest sediment as it is deposited closest to the channel.", a: false, c: "Levees contain the COARSEST sediment — heaviest material drops first near the channel." },
        { s: "Floodplain soils are particularly fertile due to layers of alluvium.", a: true }
      ],
      exam: { q: "Explain the formation of an oxbow lake. (6 marks)", model: "Oxbow lakes form from meanders over a long period. The thalweg (fastest flow) is deflected to the outside of the bend, where hydraulic action and abrasion erode the outer bank, forming a river cliff. On the inside, slower water deposits sediment, forming a slip-off slope. Lateral erosion gradually makes the loop more curved, narrowing the neck of land between two curves. During a flood, the river has enough energy to cut straight through the neck, taking a shorter course. Sediment is deposited at both ends of the old loop, sealing it off from the main channel. The abandoned loop becomes an oxbow lake and eventually silts up and is colonised by vegetation.", marks: 6, hint: "Thalweg → outer bank eroded → river cliff → slip-off slope → neck narrows → flood cuts through → sealed off → lake" }
    },
    {
      title: "Flooding, Hydrographs & River Management",
      spec: "Spec 1.7c, 1.9",
      flashcards: [
        { q: "What is lag time on a storm hydrograph?", a: "The delay between peak rainfall and peak discharge. Short lag time = higher flood risk (e.g. urban areas)." },
        { q: "How does urbanisation affect flood risk?", a: "Impermeable surfaces (tarmac, concrete) prevent infiltration → rapid surface run-off → shorter lag time → higher peak discharge → greater flood risk." },
        { q: "How does deforestation increase flood risk?", a: "Fewer trees means less interception of rainfall and less transpiration, so more water reaches the river more quickly." },
        { q: "Name two hard engineering river management strategies.", a: "Dams and reservoirs (control discharge), Channelisation (widen/straighten/deepen channel to move water faster)." },
        { q: "Name two soft engineering river management strategies.", a: "Floodplain zoning (no buildings in flood risk areas), Washlands (allow farmland to flood), Afforestation (planting trees to increase interception)." }
      ],
      mcq: [
        { q: "What does a short lag time indicate?", opts: ["Low flood risk", "High flood risk", "Slow soil drainage", "Forested catchment"], correct: 1 },
        { q: "How does building a dam affect a hydrograph?", opts: ["Increases peak discharge", "Has no effect", "Reduces and delays peak discharge", "Increases lag time and peak discharge"], correct: 2 },
        { q: "Which is a soft engineering river management strategy?", opts: ["Building a dam", "Channelisation", "Floodplain zoning", "Concrete flood walls"], correct: 2 },
        { q: "Why does clay (impermeable rock) increase flood risk?", opts: ["Clay stores a lot of water", "Clay prevents water infiltrating, causing rapid surface run-off", "Clay is easily eroded", "Clay increases lag time"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Lag time", def: "Delay between peak rainfall and peak discharge" },
        { term: "Urbanisation", def: "Impermeable surfaces cause rapid run-off and short lag time" },
        { term: "Channelisation", def: "Hard engineering — widen/deepen/straighten channel to move water faster" },
        { term: "Washlands", def: "Soft engineering — farmland deliberately allowed to flood" },
        { term: "Floodplain zoning", def: "Soft engineering — planning restrictions prevent building in flood zones" },
        { term: "Afforestation", def: "Planting trees to increase interception and reduce run-off" }
      ]},
      truefalse: [
        { s: "A longer lag time indicates a higher flood risk.", a: false, c: "A SHORTER lag time means water reaches the river faster = higher flood risk." },
        { s: "Deforestation reduces flood risk.", a: false, c: "Deforestation INCREASES flood risk by reducing interception and transpiration." },
        { s: "Channelisation can move flood risk downstream to other communities.", a: true },
        { s: "Dams always increase the flood risk downstream.", a: false, c: "Dams control discharge and REDUCE flood risk downstream." },
        { s: "Soft engineering works with natural river processes rather than against them.", a: true }
      ],
      exam: { q: "Examine how physical processes and human activities affect the risk of river flooding. (8 marks)", model: "Physical factors that increase flood risk include heavy or prolonged rainfall which saturates the soil, reducing infiltration and causing rapid run-off. Steep relief means water reaches the channel faster, shortening lag time. Impermeable rocks such as clay prevent infiltration entirely. Snowmelt can also deliver large volumes of water rapidly.\n\nHuman activities also significantly increase flood risk. Urbanisation replaces permeable fields with impermeable tarmac and concrete, so rainwater cannot infiltrate and flows straight into drains and rivers, sharply reducing lag time. Deforestation removes trees that would normally intercept rainfall and use water through transpiration, increasing the amount reaching rivers. Agricultural drainage pipes also speed water delivery to channels. Together these human factors have dramatically increased flood frequency in many UK catchments.", marks: 8, hint: "Physical: rainfall intensity, relief, rock type, snowmelt. Human: urbanisation, deforestation, agriculture, drainage" }
    }
  ]
};

/* ── SECTION 4: Ecosystems, Biodiversity & Management ── */
window.GEO_DATA[4] = {
  title: "Ecosystems, Biodiversity & Management",
  paper: 1, paperLabel: "Paper 1 · Physical", color: "p1",
  topics: [
    {
      title: "Biomes, Ecosystems & Distribution",
      spec: "Spec 3.1",
      flashcards: [
        { q: "What is a biome?", a: "A large-scale ecosystem covering a wide geographical area with similar climate, vegetation and wildlife." },
        { q: "What is an ecosystem?", a: "A community of plants and animals interacting with each other and their non-living (abiotic) environment." },
        { q: "Which biomes are found at different latitudes?", a: "0–10°: Tropical rainforest. ~30°: Hot desert. 40–60°: Temperate deciduous forest. 50–70°N: Boreal (taiga). 70–90°: Tundra." },
        { q: "How does altitude affect ecosystems?", a: "As altitude increases, temperature falls → shorter growing season → less biodiversity → smaller, hardier plants." },
        { q: "What is the biosphere?", a: "The zone of Earth where all life exists — land, sea and lower atmosphere." }
      ],
      mcq: [
        { q: "Which atmospheric cell produces tropical rainforests?", opts: ["Polar cell", "Ferrel cell", "Hadley cell", "Trade wind cell"], correct: 2 },
        { q: "Why are hot deserts found at ~30° N/S?", opts: ["Rising air brings heavy rain", "Descending air creates high pressure and dry conditions", "Low pressure causes drought", "Distance from ocean increases rainfall"], correct: 1 },
        { q: "What effect does increasing altitude have on biodiversity?", opts: ["Biodiversity increases", "No effect", "Biodiversity decreases", "Only affects plant species"], correct: 2 },
        { q: "Which biome is associated with the boreal zone (50–70°N)?", opts: ["Tropical grassland", "Hot desert", "Tundra", "Coniferous forest (taiga)"], correct: 3 }
      ],
      match: { pairs: [
        { term: "Ecosystem", def: "Community of plants and animals interacting with their environment" },
        { term: "Biome", def: "Large-scale ecosystem with similar climate and vegetation worldwide" },
        { term: "Tropical rainforest", def: "Found 0–10° — produced by rising air and high rainfall in the Hadley Cell" },
        { term: "Hot desert", def: "Found at ~30° — produced by descending dry air in the Hadley Cell" },
        { term: "Tundra", def: "Found 70–90° — cold, dry, sparse vegetation" }
      ]},
      truefalse: [
        { s: "Biomes are small-scale ecosystems found in local areas.", a: false, c: "Biomes are LARGE-SCALE ecosystems covering wide geographical areas." },
        { s: "Hot deserts are found at approximately 30° N and S.", a: true },
        { s: "Higher altitude leads to greater biodiversity.", a: false, c: "Higher altitude = cooler temperatures = shorter growing season = LESS biodiversity." },
        { s: "The Hadley Cell's descending air at 30° produces hot deserts.", a: true },
        { s: "The biosphere is the zone of Earth where all life exists.", a: true }
      ],
      exam: { q: "Explain how atmospheric circulation influences the distribution of biomes. (4 marks)", model: "Atmospheric circulation determines biome distribution by controlling rainfall and temperature. In the Hadley Cell (0–30°), air rises at the equator causing low pressure and heavy rainfall — this produces tropical rainforest. At 30°, air descends, creating high pressure and dry conditions — this produces hot deserts. In the Ferrel Cell (30–60°), rising air at 60° brings rainfall and moderate temperatures — producing temperate deciduous forests. The Polar Cell (60–90°) has cold descending air, creating dry, frigid tundra.", marks: 4, hint: "Name two cells + pressure type + precipitation + resulting biome for each" }
    },
    {
      title: "Tropical Rainforest — Features, Threats & Costa Rica",
      spec: "Spec 3.4–3.5",
      flashcards: [
        { q: "What are the abiotic conditions in a tropical rainforest?", a: "Temperature: 27–30°C year-round. Rainfall: ~2000 mm/year. Soils: nutrient-poor (heavy rain leaches nutrients away)." },
        { q: "Name the five layers of the tropical rainforest (tallest to ground).", a: "1. Emergent (40–60 m). 2. Canopy (20–40 m, intercepts ~80% of light). 3. Under-canopy (10–20 m). 4. Shrub layer (0–10 m). 5. Ground layer." },
        { q: "What is the role of decomposers in the tropical rainforest nutrient cycle?", a: "Bacteria and fungi rapidly decompose dead matter on the forest floor, quickly releasing nutrients back into the soil for plants to absorb. This fast nutrient cycling is essential because TRF soils are naturally poor." },
        { q: "Name three sustainable management strategies used in Costa Rica.", a: "1) National parks (25% of land protected). 2) Ecotourism (low-impact tourism, e.g. Rara Avis). 3) Carbon credits (companies pay to maintain forest as carbon store). 4) NGO projects (e.g. FUNDECOR)." },
        { q: "How has Costa Rica reversed deforestation?", a: "Forest cover rose from 21% (1985) to 52% (2010) through strong laws, national parks, ecotourism and payments for ecosystem services." }
      ],
      mcq: [
        { q: "What is the role of bacteria and fungi in the TRF?", opts: ["Producing oxygen through photosynthesis", "Rapidly decomposing dead material and recycling nutrients", "Providing food for canopy animals", "Storing carbon in the soil"], correct: 1 },
        { q: "Why are TRF soils nutrient-poor despite high rainfall?", opts: ["Lack of decomposers", "Heavy rain leaches nutrients away before plants can absorb them", "Trees absorb all nutrients", "Thin soils prevent nutrient storage"], correct: 1 },
        { q: "Which layer of the TRF receives the LEAST light?", opts: ["Emergent", "Canopy", "Under-canopy", "Ground layer"], correct: 3 },
        { q: "What % of Costa Rica's land is in national parks?", opts: ["5%", "10%", "25%", "50%"], correct: 2 }
      ],
      match: { pairs: [
        { term: "Emergent layer", def: "Tallest trees 40–60 m; exposed to full sun" },
        { term: "Canopy", def: "20–40 m; intercepts ~80% of light" },
        { term: "Buttress roots", def: "Large roots supporting tall trees in shallow, nutrient-poor soils" },
        { term: "Drip-tip leaves", def: "Pointed leaf tips channel water away quickly to prevent fungal growth" },
        { term: "Leaching", def: "Rain washing nutrients out of the soil before plants can absorb them" },
        { term: "Ecotourism", def: "Low-impact tourism that funds conservation and local communities" }
      ]},
      truefalse: [
        { s: "Tropical rainforest soils are very fertile due to heavy rainfall.", a: false, c: "Soils are nutrient-POOR — heavy rain leaches nutrients away. Most nutrients are in the biomass." },
        { s: "The canopy layer intercepts approximately 80% of light.", a: true },
        { s: "Costa Rica's forest cover fell from 21% to 52% between 1985 and 2010.", a: false, c: "It ROSE from 21% to 52% — demonstrating successful sustainable management." },
        { s: "Buttress roots support tall trees in shallow TRF soils.", a: true },
        { s: "Carbon credits pay landowners to cut down forest for agriculture.", a: false, c: "Carbon credits pay landowners to PROTECT forest as a carbon store." }
      ],
      exam: { q: "Assess how successfully Costa Rica manages its tropical rainforest sustainably. (8 marks)", model: "Costa Rica has been remarkably successful in managing its rainforest sustainably. Forest cover rose from 21% in 1985 to 52% in 2010, showing genuine recovery. National parks protect 25% of land, preventing deforestation legally. Ecotourism, such as at Rara Avis, generates $4 billion/year and gives local communities a financial incentive to conserve rather than clear forest. Carbon credits provide further income from international companies, while NGO projects like FUNDECOR support small landowners.\n\nHowever, challenges remain. Illegal logging still occurs despite laws, and enforcement in remote areas is difficult. Poverty means some farmers clear land for subsistence farming. Ecotourism can bring environmental pressure if uncontrolled. Nevertheless, Costa Rica's approach is widely considered a model for sustainable management — its results are measurable and its biodiversity hotspot status (5% of world species in 0.03% of land) has been largely preserved.", marks: 8, hint: "Named strategies + evidence/statistics + balanced argument + overall judgement" }
    },
    {
      title: "Deciduous Woodlands & Sustainable Management",
      spec: "Spec 3.6–3.7",
      flashcards: [
        { q: "What does 'deciduous' mean?", a: "Trees that shed their leaves in autumn to conserve water and energy during winter." },
        { q: "What are the four layers of deciduous woodland?", a: "1. Canopy (ash, oak 20–30 m). 2. Sub-canopy/shrub (hazel, holly). 3. Herb layer (bluebells, ferns — flower in spring before canopy closes). 4. Ground layer (mosses, fungi, leaf litter)." },
        { q: "Why has UK woodland declined?", a: "Agricultural clearance, urban expansion, unsustainable timber extraction. UK has only ~13% woodland cover — one of the lowest in Europe. 80%+ of ancient woodland lost since 1930." },
        { q: "What is coppicing?", a: "Cutting trees at the base to encourage regrowth. Provides sustainable timber, allows more light to reach the woodland floor (benefiting biodiversity), and maintains the woodland structure." },
        { q: "What goods and services do deciduous woodlands provide?", a: "Goods: timber (oak, ash), food. Services: recreation, biodiversity habitat, carbon storage, scenery/tourism, education." }
      ],
      mcq: [
        { q: "What does 'deciduous' mean?", opts: ["Trees are evergreen all year", "Trees shed leaves in autumn to save energy", "Trees grow in tropical climates", "Trees have needle-like leaves"], correct: 1 },
        { q: "Which layer flowers in spring BEFORE the canopy closes?", opts: ["Ground layer", "Canopy", "Herb layer", "Sub-canopy"], correct: 2 },
        { q: "How does coppicing benefit biodiversity?", opts: ["Removes all trees", "Allows more light to the woodland floor, encouraging diverse understorey", "Kills invasive species", "Provides habitat for canopy birds only"], correct: 1 },
        { q: "Approximately what % of the UK is currently forested?", opts: ["30%", "50%", "5%", "13%"], correct: 3 }
      ],
      match: { pairs: [
        { term: "Deciduous", def: "Trees that shed leaves in autumn to conserve water and energy" },
        { term: "Coppicing", def: "Cutting trees at the base — sustainable timber and improves light levels" },
        { term: "Canopy layer", def: "Ash and oak at 20–30 m — dominant layer" },
        { term: "Herb layer", def: "Bluebells and ferns — flowers in spring before canopy closes" },
        { term: "SSSI", def: "Site of Special Scientific Interest — legal protection for valuable habitats" }
      ]},
      truefalse: [
        { s: "Deciduous trees keep their leaves all year.", a: false, c: "Deciduous trees shed leaves in autumn to conserve energy and water in winter." },
        { s: "The UK has approximately 13% woodland cover — one of Europe's lowest.", a: true },
        { s: "Coppicing increases biodiversity by allowing more light to reach the woodland floor.", a: true },
        { s: "Bluebells flower in the herb layer during summer.", a: false, c: "They flower in SPRING, before the canopy closes and cuts off light." },
        { s: "More than 80% of the UK's ancient woodland has been lost since 1930.", a: true }
      ],
      exam: { q: "Explain how population growth in the UK has led to deforestation of deciduous woodland. (4 marks)", model: "As the UK population has grown, demand for agricultural land has led to woodland clearance to create fields for crops and livestock. Urban expansion has also removed woodland as new housing estates, roads and industrial areas are built on previously forested land. Demand for timber for construction and furniture has led to unsustainable cutting of woodland. These combined pressures have reduced UK woodland cover to just ~13% of land area, with over 80% of ancient woodland lost since 1930.", marks: 4, hint: "Farming expansion + urban growth + timber demand — develop two or more points with evidence" }
    }
  ]
};

/* ── SECTION 5: Changing Cities — Hull & Rio ── */
window.GEO_DATA[5] = {
  title: "Changing Cities — Hull & Rio",
  paper: 2, paperLabel: "Paper 2 · Human", color: "p2",
  topics: [
    {
      title: "Urbanisation & Hull — Site, Situation & Structure",
      spec: "Spec 4.1–4.3",
      flashcards: [
        { q: "What is urbanisation?", a: "An increase in the PROPORTION of people living in urban areas compared to rural areas. In 1950: 29% urban globally; 2030 projected: 60%." },
        { q: "What is the difference between site and situation?", a: "Site = the actual land a settlement is built on (physical features). Situation = its location relative to surrounding areas (national/regional context)." },
        { q: "Why did Hull grow where it did?", a: "Site: confluence of River Hull and Humber Estuary, flat low-lying land, natural harbour, fresh water. Situation: A63/M62 to Leeds/Manchester, fast rail to London, ferry to Rotterdam." },
        { q: "What is the Burgess Model?", a: "A model showing cities in concentric rings from CBD outwards: Zone A (CBD), B (Inner city), C (Inner suburbs), D (Outer suburbs), E (Urban-rural fringe)." },
        { q: "What is suburbanisation?", a: "The outward growth of a city into the surrounding countryside as people move to the suburbs for more space, cheaper land and better environment." }
      ],
      mcq: [
        { q: "What does urbanisation measure?", opts: ["Total number of people in cities", "Proportion of people living in urban areas", "Rate of city growth", "Size of cities"], correct: 1 },
        { q: "Which zone of the Burgess model has the highest land values?", opts: ["Outer suburbs", "Inner city", "CBD", "Urban-rural fringe"], correct: 2 },
        { q: "Which HU postcode represents Hull's CBD in the Burgess Model?", opts: ["HU3", "HU4", "HU14", "HU1"], correct: 3 },
        { q: "What is counter-urbanisation?", opts: ["Movement back to cities after regeneration", "Movement from cities to rural areas", "Growth of suburbs", "Decline of industrial areas"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Urbanisation", def: "Increase in proportion of people living in urban areas" },
        { term: "Suburbanisation", def: "Outward growth of a city into the surrounding countryside" },
        { term: "Counter-urbanisation", def: "Movement of people from cities to rural areas" },
        { term: "Re-urbanisation", def: "Movement of people back into cities after regeneration" },
        { term: "Site", def: "The actual land a settlement is built on" },
        { term: "Situation", def: "Location relative to surrounding areas and transport links" }
      ]},
      truefalse: [
        { s: "Urbanisation measures the total number of people in cities.", a: false, c: "It measures the PROPORTION of people living in urban vs rural areas." },
        { s: "The CBD has the highest land values in the Burgess model.", a: true },
        { s: "Counter-urbanisation means people moving back into city centres.", a: false, c: "That's re-urbanisation. Counter-urbanisation = moving FROM cities TO rural areas." },
        { s: "Hull's site includes its position at the confluence of the River Hull and Humber Estuary.", a: true },
        { s: "By 2030, around 60% of the global population is projected to live in urban areas.", a: true }
      ],
      exam: { q: "Explain how physical factors influence the distribution of urban populations in the UK. (4 marks)", model: "Physical factors significantly influence where people live. Relief is important — flat, low-lying areas are easier to build on, which is why the South East and East Anglia have high urbanisation. In contrast, the Scottish Highlands and Welsh mountains have steep terrain that makes construction difficult and expensive, keeping populations sparse. Natural resources also matter historically — coalfields in Yorkshire, South Wales and the North-East attracted workers, creating dense urban populations. Rivers provided fresh water, transport and power for early industries, leading to cities like Hull at the River Hull/Humber confluence.", marks: 4, hint: "Relief + natural resources + transport links + examples" }
    },
    {
      title: "Deindustrialisation, Population Change & Rio de Janeiro",
      spec: "Spec 4.4–4.8",
      flashcards: [
        { q: "What is deindustrialisation?", a: "The decline of manufacturing industry in a country or city. In Hull: loss of fishing, shipbuilding and traditional industries from the 1970s onwards." },
        { q: "What are the two main causes of deindustrialisation?", a: "1) Global shift — manufacturing moved to cheaper countries (China, SE Asia). 2) Mechanisation — machines replaced workers." },
        { q: "What are favelas?", a: "Informal squatter settlements in Brazilian cities, built by low-income migrants on unused land (often steep hillsides). Lack legal electricity, clean water, sanitation and healthcare." },
        { q: "How does inequality work in Rio?", a: "Rio's lowest-paid workers would need to work 19 years to earn what the richest earn in 1 month. Minimum wage ~£2,900/year vs private school costs of £26,000/year." },
        { q: "What is the Favela-Bairro Project?", a: "A top-down government project that upgraded 60+ favelas in Rio, providing water, electricity, roads and schools. Cost: $300m+. Improved 250,000+ residents' lives." }
      ],
      mcq: [
        { q: "What % of Rio's population is unemployed?", opts: ["5%", "20%", "12.9%", "30%"], correct: 2 },
        { q: "The Favela-Bairro Project is which type of strategy?", opts: ["Bottom-up", "Self-help", "Top-down", "International aid"], correct: 2 },
        { q: "Deindustrialisation refers to the decline of which sector?", opts: ["Primary", "Secondary (manufacturing)", "Tertiary", "Quaternary"], correct: 1 },
        { q: "Air pollution in Rio is how many times the safe limit?", opts: ["Three times", "Half", "Twice", "Ten times"], correct: 2 }
      ],
      match: { pairs: [
        { term: "Deindustrialisation", def: "Decline of manufacturing industry — in Hull: loss of fishing, shipbuilding" },
        { term: "Global shift", def: "Manufacturing moved to cheaper countries like China" },
        { term: "Favela", def: "Informal squatter settlement in a Brazilian city" },
        { term: "Favela-Bairro", def: "Top-down government project upgrading 60+ Rio favelas" },
        { term: "Bottom-up strategy", def: "Community-led improvement where residents build/improve their own homes" },
        { term: "C4Di", def: "Hull's quaternary tech hub — part of the city's re-urbanisation" }
      ]},
      truefalse: [
        { s: "Mechanisation means manufacturing moving to cheaper countries.", a: false, c: "That's global shift. Mechanisation = machines replacing human workers." },
        { s: "Favelas are planned government housing estates in Rio.", a: false, c: "Favelas are INFORMAL squatter settlements built illegally by migrants." },
        { s: "The Favela-Bairro Project is an example of a top-down strategy.", a: true },
        { s: "Hull's population peaked at around 295,000 in 1950.", a: true },
        { s: "In Rio, air pollution is approximately twice the safe limit.", a: true }
      ],
      exam: { q: "'Top-down strategies are more effective than bottom-up strategies in improving quality of life in Rio.' Discuss. (8 marks)", model: "Top-down strategies like the Favela-Bairro Project have clear advantages. By investing $300 million, the government upgraded 60+ favelas, providing roads, water, electricity and schools to over 250,000 residents. This scale of change is impossible for communities alone. Professional planning ensured quality infrastructure.\n\nHowever, top-down strategies have limitations. They can ignore local community needs and may demolish homes without proper consultation. They are expensive and may not reach the poorest areas. Bottom-up strategies like self-help schemes empower residents, are cheaper and are tailored to local needs — residents understand their own community. However, they produce inconsistent results and cannot tackle city-wide infrastructure problems.\n\nOverall, the most effective approach combines both — top-down provides infrastructure while bottom-up ensures community ownership and sustainability. Neither alone fully addresses Rio's deep inequality.", marks: 8, hint: "Scale + cost + community involvement + speed + examples — balanced argument" }
    }
  ]
};
