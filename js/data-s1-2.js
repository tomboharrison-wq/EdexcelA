/* ============================================================
   data-s1-2.js — Content data for Sections 1 & 2
   ============================================================ */
window.GEO_DATA = window.GEO_DATA || {};

/* ── SECTION 1: Global Climate & Weather Hazards ── */
window.GEO_DATA[1] = {
  title: "Global Climate & Weather Hazards",
  paper: 1, paperLabel: "Paper 1 · Physical", color: "p1",
  topics: [
    {
      title: "Weather vs. Climate & Atmospheric Circulation",
      spec: "Spec 2.1",
      flashcards: [
        { q: "What is the difference between weather and climate?", a: "Weather = day-to-day changes in the atmosphere. Climate = average temperature & precipitation over 30+ years." },
        { q: "What is the troposphere?", a: "The lowest layer of the atmosphere — where most weather takes place." },
        { q: "What is the Hadley Cell?", a: "Atmospheric circulation cell 0–30°. Air rises at the equator (low pressure → rainforest); descends at 30° (high pressure → hot deserts)." },
        { q: "What is the Ferrel Cell?", a: "Circulation cell 30–60°. Rising air at 60° creates low pressure, rainfall and temperate forests. This cell affects the UK." },
        { q: "Why is the equator hotter than the poles?", a: "Solar energy hits the equator at a more concentrated angle. At the poles, the same energy is spread over a larger surface area, so each m² receives less heat." },
        { q: "What is latitude?", a: "Distance north or south of the Equator. Higher latitude = cooler climate." }
      ],
      mcq: [
        { q: "Which atmospheric cell is responsible for the UK's temperate climate?", opts: ["Hadley Cell", "Polar Cell", "Ferrel Cell", "Trade Wind Cell"], correct: 2 },
        { q: "Where are hot deserts typically found?", opts: ["0° (equator)", "30° N/S", "60° N/S", "90° (poles)"], correct: 1 },
        { q: "What process occurs at the equator in the Hadley Cell?", opts: ["Cold air descends, creating high pressure", "Warm air rises, creating low pressure and rainfall", "Cold dry air creates desert conditions", "Air sinks creating temperate forest"], correct: 1 },
        { q: "Which layer of the atmosphere contains most weather?", opts: ["Stratosphere", "Mesosphere", "Thermosphere", "Troposphere"], correct: 3 }
      ],
      match: { pairs: [
        { term: "Weather", def: "Day-to-day changes in the atmosphere" },
        { term: "Climate", def: "Average conditions over 30+ years" },
        { term: "Hadley Cell", def: "0–30° cell; creates tropical rainforest and hot deserts" },
        { term: "Ferrel Cell", def: "30–60° cell; brings rain to the UK" },
        { term: "Low pressure", def: "Rising warm air; associated with rain and cloud" },
        { term: "High pressure", def: "Descending cool air; dry conditions and clear skies" }
      ]},
      truefalse: [
        { s: "Weather describes average conditions over 30 or more years.", a: false, c: "That's climate. Weather = day-to-day changes." },
        { s: "The Hadley Cell is responsible for the UK's temperate climate.", a: false, c: "The Ferrel Cell affects the UK." },
        { s: "High pressure is associated with rising air and heavy rainfall.", a: false, c: "High pressure = descending air = dry, clear conditions." },
        { s: "Deserts are typically found at around 30° N and 30° S.", a: true },
        { s: "The troposphere is the lowest layer of the atmosphere.", a: true },
        { s: "The Ferrel Cell operates between 30° and 60° latitude.", a: true }
      ],
      exam: { q: "Explain why areas around the Equator are warmer than areas near the poles. (2 marks)", model: "At the equator, the Sun's rays hit the surface at a near-vertical angle, concentrating solar energy over a small area, so temperatures are high. Near the poles, the same rays hit at a lower angle and are spread over a much larger surface area, so each square metre receives far less energy, making it much colder.", marks: 2, hint: "Think: angle of Sun → surface area energy is spread over" }
    },
    {
      title: "Ocean Currents and Heat Transfer",
      spec: "Spec 2.1b",
      flashcards: [
        { q: "What percentage of equator-to-pole heat is transferred by oceans?", a: "Approximately 20% of all heat moved from the tropics to the poles." },
        { q: "What is a gyre?", a: "A circular pattern of surface ocean currents found in each ocean basin." },
        { q: "What is the North Atlantic Drift / Gulf Stream?", a: "A warm ocean current flowing from the Gulf of Mexico northwards, warming the UK and north-west Europe." },
        { q: "By how much does the Gulf Stream warm UK winters?", a: "More than 5°C. Without it, London's December average would fall to approximately 2°C." },
        { q: "Why does Liverpool have milder winters than Calgary despite being at the same latitude?", a: "Liverpool is warmed by the North Atlantic Drift. Calgary (Canada) has no warm ocean current nearby, so its winters are much colder." }
      ],
      mcq: [
        { q: "What percentage of equator-to-pole heat is transferred by oceans?", opts: ["5%", "20%", "40%", "60%"], correct: 1 },
        { q: "What is a gyre?", opts: ["A cold deep ocean current", "A circular pattern of surface currents", "A warm underwater river", "A wind pattern over oceans"], correct: 1 },
        { q: "By how much does the Gulf Stream warm UK winters?", opts: ["1°C", "3°C", "More than 5°C", "10°C"], correct: 2 },
        { q: "Why does the UK have a milder climate than expected for its latitude?", opts: ["Closer to the equator", "Warmed by the North Atlantic Drift", "Very high mountains trap heat", "More sunshine than other European countries"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Gyre", def: "Circular pattern of surface currents in an ocean basin" },
        { term: "North Atlantic Drift", def: "Warm current flowing from the Gulf of Mexico to north-west Europe" },
        { term: "Warm current", def: "Brings warm, wet conditions to coasts it passes" },
        { term: "Cold current", def: "Brings cool, dry conditions to coasts it passes" },
        { term: "Gulf Stream", def: "Raises UK winter temperatures by more than 5°C" }
      ]},
      truefalse: [
        { s: "Oceans transfer approximately 20% of equator-to-pole heat.", a: true },
        { s: "The Gulf Stream starts in the Arctic Ocean.", a: false, c: "It starts in the Gulf of Mexico." },
        { s: "Cold currents bring warm, wet conditions to coasts.", a: false, c: "Cold currents bring cool, dry conditions." },
        { s: "Liverpool and Calgary are at approximately the same latitude.", a: true },
        { s: "Without the Gulf Stream, London winters would be around 2°C.", a: true }
      ],
      exam: { q: "Explain how ocean currents affect the climate of the UK. (4 marks)", model: "The North Atlantic Drift (Gulf Stream) flows from the Gulf of Mexico northwards to the UK. It brings warm water which heats the air above it. Prevailing south-westerly winds then carry this warm, moist air over the UK, raising temperatures by more than 5°C compared to what they would be at our latitude. This gives the UK mild, wet winters — especially on the western coasts. Without it, temperatures would be much colder, similar to Canada at the same latitude.", marks: 4, hint: "Name the current → where it comes from → what it brings → effect on UK temperature and rainfall" }
    },
    {
      title: "Climate Change in the Quaternary Period",
      spec: "Spec 2.2",
      flashcards: [
        { q: "What is the Quaternary Period?", a: "The last 1.8 million years of Earth's history. Characterised by alternating cold (glacial) and warm (interglacial) periods." },
        { q: "What is a glacial period?", a: "A long cold period when ice sheets advance and cover large land areas (an 'ice age')." },
        { q: "What is an interglacial?", a: "A shorter warmer period between ice ages. We are currently in an interglacial called the Holocene." },
        { q: "What are Milankovitch cycles?", a: "Changes in Earth's orbit around the Sun that affect how much solar energy Earth receives. Three cycles: eccentricity (orbit shape), axial tilt (22–24.5°) and precession (wobble)." },
        { q: "What is solar variation?", a: "Changes in the Sun's energy output. More sunspots = more energy = warming. The Maunder Minimum (fewer sunspots) contributed to the Little Ice Age." },
        { q: "How did the Krakatoa eruption (1883) affect climate?", a: "Ash and SO₂ released into the stratosphere blocked sunlight, causing a global temperature drop of ~0.3°C for over a year." }
      ],
      mcq: [
        { q: "How long is the Quaternary Period?", opts: ["100,000 years", "500,000 years", "1.8 million years", "4.5 billion years"], correct: 2 },
        { q: "Which is NOT one of the three Milankovitch cycles?", opts: ["Eccentricity", "Solar variation", "Axial tilt", "Precession"], correct: 1 },
        { q: "What did the Krakatoa eruption in 1883 cause?", opts: ["Global warming of 2°C", "Global temperature drop of ~0.3°C", "No measurable climate change", "A 10-year ice age"], correct: 1 },
        { q: "What is an interglacial?", opts: ["A period when ice sheets advance", "A warm period between ice ages", "A volcanic period", "A long-term cooling trend"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Glacial period", def: "Long cold period when ice sheets advance" },
        { term: "Interglacial", def: "Warm period between ice ages — we live in one now" },
        { term: "Eccentricity", def: "Changes in the shape of Earth's orbit around the Sun" },
        { term: "Axial tilt", def: "Changes in the angle of Earth's tilt (22–24.5°)" },
        { term: "Precession", def: "Wobble of Earth's axis over ~26,000 years" },
        { term: "Maunder Minimum", def: "Period of reduced sunspot activity linked to the Little Ice Age" }
      ]},
      truefalse: [
        { s: "The Quaternary Period began approximately 1.8 million years ago.", a: true },
        { s: "We are currently living in a glacial period.", a: false, c: "We are in an interglacial period called the Holocene." },
        { s: "Milankovitch cycles are caused by human activity.", a: false, c: "They are natural changes in Earth's orbit around the Sun." },
        { s: "Volcanic eruptions can cause short-term global cooling.", a: true },
        { s: "More sunspots mean more solar energy reaching Earth.", a: true }
      ],
      exam: { q: "Explain one natural cause of climate change. (2 marks)", model: "One natural cause is volcanic eruptions. Large eruptions, such as Krakatoa in 1883, release vast amounts of ash and sulphur dioxide into the stratosphere. These particles block incoming solar radiation, reducing the amount of energy reaching Earth's surface and causing a short-term drop in global temperatures — Krakatoa caused a fall of approximately 0.3°C for over a year.", marks: 2, hint: "Name the cause → explain the mechanism → link to climate change" }
    },
    {
      title: "The Enhanced Greenhouse Effect",
      spec: "Spec 2.3",
      flashcards: [
        { q: "What is the natural greenhouse effect?", a: "Greenhouse gases (CO₂, methane, water vapour) trap heat from the Earth's surface, keeping the planet warm enough to support life." },
        { q: "What is the enhanced greenhouse effect?", a: "Human activities add extra greenhouse gases, trapping more heat and causing global temperatures to rise above natural levels." },
        { q: "Name three human causes of increased greenhouse gases.", a: "1) Burning fossil fuels → CO₂. 2) Deforestation → less CO₂ absorbed. 3) Agriculture (cattle, rice paddies) → methane." },
        { q: "What is the IPCC?", a: "Intergovernmental Panel on Climate Change — the leading scientific body reviewing climate change research. Reports that human activity is the main cause of warming since the 1950s." },
        { q: "How much has global temperature risen since pre-industrial times?", a: "Approximately 1.1–1.2°C since the pre-industrial period (before ~1850)." }
      ],
      mcq: [
        { q: "Which gas is most associated with burning fossil fuels?", opts: ["Methane", "Water vapour", "Carbon dioxide", "Nitrous oxide"], correct: 2 },
        { q: "How does deforestation increase the greenhouse effect?", opts: ["Trees release CO₂ when alive", "Fewer trees means less CO₂ is absorbed from the atmosphere", "Deforestation cools the atmosphere", "Trees produce methane"], correct: 1 },
        { q: "Which human activity produces methane as a greenhouse gas?", opts: ["Burning coal", "Cattle farming and rice paddies", "Nuclear power generation", "Solar panel production"], correct: 1 },
        { q: "What does the IPCC do?", opts: ["Sets international carbon taxes", "Reviews and summarises climate change research", "Builds renewable energy", "Controls deforestation rates"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Greenhouse effect", def: "Greenhouse gases trap heat, warming the planet naturally" },
        { term: "Enhanced greenhouse effect", def: "Human-added greenhouse gases trap extra heat, causing additional warming" },
        { term: "CO₂", def: "Main greenhouse gas from burning fossil fuels" },
        { term: "Methane", def: "Greenhouse gas from cattle, rice farming and landfill" },
        { term: "Deforestation", def: "Reduces CO₂ absorption and releases stored carbon" }
      ]},
      truefalse: [
        { s: "The natural greenhouse effect makes Earth too hot for life.", a: false, c: "It keeps Earth warm enough for life — without it temperatures would be about -18°C." },
        { s: "Burning fossil fuels releases CO₂ into the atmosphere.", a: true },
        { s: "Planting trees reduces the amount of CO₂ in the atmosphere.", a: true },
        { s: "Cattle farming produces methane, a greenhouse gas.", a: true },
        { s: "Global temperatures have fallen since the industrial revolution.", a: false, c: "They have risen by approximately 1.1–1.2°C." }
      ],
      exam: { q: "Explain how human activities are increasing the enhanced greenhouse effect. (4 marks)", model: "Burning fossil fuels for energy and transport releases large amounts of CO₂ into the atmosphere. Deforestation also increases greenhouse gases because trees that normally absorb CO₂ through photosynthesis are removed, meaning less CO₂ is absorbed from the air. Cattle farming and flooded rice paddies produce methane, which is an even more powerful greenhouse gas than CO₂. All these extra gases trap more of the Sun's heat, causing global temperatures to rise beyond natural levels.", marks: 4, hint: "Three human causes: fossil fuels → CO₂; deforestation → less absorbed; agriculture → methane" }
    },
    {
      title: "Tropical Cyclones — Location & Formation",
      spec: "Spec 2.4",
      flashcards: [
        { q: "Where do tropical cyclones form?", a: "Over tropical oceans (5–20° N/S of the equator) where sea surface temperatures are above 27°C." },
        { q: "Name the five conditions needed for a tropical cyclone to form.", a: "1) Sea temp >27°C. 2) Warm humid air rises rapidly. 3) Low pressure at centre. 4) Earth's rotation (Coriolis effect) causes spinning. 5) No high-level wind shear." },
        { q: "What are tropical cyclones called in different regions?", a: "Hurricanes (Atlantic/Caribbean), Typhoons (Pacific), Cyclones (Indian Ocean)." },
        { q: "What is the eye of a tropical cyclone?", a: "The calm centre of the storm — clear skies, light winds, rising pressure. Surrounded by the eyewall which has the strongest winds." },
        { q: "What is the Coriolis effect?", a: "The deflection of moving air caused by Earth's rotation. Makes tropical cyclones spin anticlockwise in the Northern Hemisphere and clockwise in the Southern Hemisphere." }
      ],
      mcq: [
        { q: "What minimum sea surface temperature is needed for a tropical cyclone?", opts: ["15°C", "20°C", "27°C", "35°C"], correct: 2 },
        { q: "What is the calm centre of a tropical cyclone called?", opts: ["Eyewall", "Eye", "Vortex", "Trough"], correct: 1 },
        { q: "In which hemisphere do tropical cyclones spin anticlockwise?", opts: ["Southern", "Both hemispheres", "Northern", "Neither"], correct: 2 },
        { q: "Which area is NOT a region where tropical cyclones form?", opts: ["Caribbean Sea", "Indian Ocean", "North Pacific", "North Atlantic near UK"], correct: 3 }
      ],
      match: { pairs: [
        { term: "Hurricane", def: "Tropical cyclone in the Atlantic or Caribbean" },
        { term: "Typhoon", def: "Tropical cyclone in the North Pacific" },
        { term: "Eye", def: "Calm centre with clear skies and rising pressure" },
        { term: "Eyewall", def: "Ring of strongest winds and heaviest rain around the eye" },
        { term: "Coriolis effect", def: "Earth's rotation causing cyclones to spin" }
      ]},
      truefalse: [
        { s: "Tropical cyclones can form anywhere in the world's oceans.", a: false, c: "They need sea temp >27°C, found only in tropical regions 5–20° from the equator." },
        { s: "The eye of a tropical cyclone has the strongest winds.", a: false, c: "The eyewall has the strongest winds. The eye is calm." },
        { s: "Tropical cyclones weaken when they move over land.", a: true },
        { s: "Hurricanes and typhoons are different names for the same type of storm.", a: true },
        { s: "The Coriolis effect is caused by Earth's rotation.", a: true }
      ],
      exam: { q: "Explain the conditions needed for a tropical cyclone to form. (4 marks)", model: "Tropical cyclones form when sea surface temperatures are above 27°C, providing the energy needed. Warm, moist air above the ocean rises rapidly, causing a low-pressure centre. As this air rises and cools, water vapour condenses, releasing latent heat that drives further rising air. The Earth's rotation (Coriolis effect) deflects the rising air, causing the whole system to spin, creating the characteristic cyclone structure. High-level wind shear must be absent, otherwise the storm structure breaks apart.", marks: 4, hint: "Sea temp → rising air → low pressure → Coriolis effect → spinning" }
    },
    {
      title: "Tropical Cyclone Hazards & Hurricane Sandy",
      spec: "Spec 2.5",
      flashcards: [
        { q: "Name four hazards caused by tropical cyclones.", a: "1) Storm surge (sea pushed inland). 2) Flooding (extreme rainfall). 3) High winds (>200 km/h). 4) Landslides on steep slopes." },
        { q: "What is a storm surge?", a: "A rise in sea level caused by low pressure and strong winds pushing water towards the coast, causing coastal flooding." },
        { q: "When did Hurricane Sandy hit Cuba and the USA?", a: "October 2012." },
        { q: "What were the contrasting impacts of Hurricane Sandy on Cuba vs the USA?", a: "Cuba: 11 deaths, 200,000 homes damaged — less prepared. USA: 233 deaths, $65 billion damage — wealthier, better prepared but far more economic damage." },
        { q: "Why do tropical cyclones cause more deaths in developing countries?", a: "Less money for flood defences, emergency services and early warning systems. Buildings less well-constructed. Less insurance, slower recovery." }
      ],
      mcq: [
        { q: "What is a storm surge?", opts: ["Heavy rainfall from a cyclone", "Rise in sea level pushing water inland", "Increased river flooding inland", "A tsunami triggered by a cyclone"], correct: 1 },
        { q: "In what year did Hurricane Sandy hit the USA and Cuba?", opts: ["2005", "2008", "2010", "2012"], correct: 3 },
        { q: "Approximately how much economic damage did Hurricane Sandy cause in the USA?", opts: ["$1 billion", "$10 billion", "$65 billion", "$200 billion"], correct: 2 },
        { q: "Why did Cuba suffer more deaths than the USA from Sandy despite being smaller?", opts: ["Cuba was hit first", "Cuba had less prepared infrastructure and emergency response", "Cuba is closer to the eye of the storm", "Cuba had more people in the path"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Storm surge", def: "Sea level rise pushing water inland — most deadly cyclone hazard" },
        { term: "Cuba (Sandy 2012)", def: "11 deaths, 200,000 homes damaged" },
        { term: "USA (Sandy 2012)", def: "233 deaths, $65 billion economic damage" },
        { term: "Tropical cyclone wind", def: "Can exceed 200 km/h — destroys buildings and power lines" },
        { term: "Developing country response", def: "Fewer flood defences, less early warning, slower recovery" }
      ]},
      truefalse: [
        { s: "Hurricane Sandy caused more deaths in the USA than in Cuba.", a: true },
        { s: "The economic damage from Sandy was greater in Cuba than the USA.", a: false, c: "The USA suffered far greater economic damage ($65bn vs Cuba's much lower figure)." },
        { s: "Storm surges are caused by high pressure pushing water away from the coast.", a: false, c: "Low pressure and strong winds push water towards and inland." },
        { s: "Tropical cyclones weaken rapidly once they move over land.", a: true },
        { s: "Developing countries tend to suffer greater economic losses from cyclones than developed countries.", a: false, c: "Developed countries suffer greater economic losses. Developing countries tend to suffer more deaths." }
      ],
      exam: { q: "Using Hurricane Sandy as an example, explain why tropical cyclone impacts vary between countries. (4 marks)", model: "Hurricane Sandy (2012) shows how impacts vary by level of development. In Cuba, 11 people died and 200,000 homes were damaged. Cuba has fewer flood defences and less well-constructed buildings, making it more physically vulnerable. In the USA, 233 people died but the economic damage was far greater at $65 billion, because the USA has much more high-value infrastructure. Wealthier countries can afford better early warning systems, evacuation plans and emergency services, but they also have more expensive assets at risk.", marks: 4, hint: "Cuba vs USA: deaths vs economic damage → development level → defences and emergency response" }
    },
    {
      title: "Causes & Impacts of Drought",
      spec: "Spec 2.6",
      flashcards: [
        { q: "What is drought?", a: "A prolonged period of abnormally low rainfall relative to the long-term average for an area." },
        { q: "Name four physical causes of drought.", a: "1) High pressure blocking frontal systems. 2) El Niño changing rainfall patterns. 3) Global atmospheric circulation (descending air at ~30°). 4) Distance from ocean / continentality." },
        { q: "Name three human causes of drought severity.", a: "1) Overuse of water for agriculture/irrigation. 2) Deforestation reducing local rainfall. 3) Climate change intensifying drought frequency." },
        { q: "What are the social impacts of drought?", a: "Water shortages, crop failure → food insecurity, malnutrition, forced migration, conflict over water resources." },
        { q: "What are the economic impacts of drought?", a: "Crop failure reduces farmers' income. Countries may need to import food. Tourism declines. GDP falls in agriculture-dependent countries." }
      ],
      mcq: [
        { q: "What weather system is most associated with prolonged drought?", opts: ["Low pressure system", "Tropical cyclone", "Persistent high pressure", "Cold front"], correct: 2 },
        { q: "How does deforestation contribute to drought?", opts: ["Trees block rainfall", "Fewer trees means less transpiration and local rainfall", "Deforestation cools the land", "Trees use too much water"], correct: 1 },
        { q: "Which global atmospheric circulation feature causes deserts at ~30° N/S?", opts: ["Ferrel Cell rising air", "Polar Cell descending air", "Hadley Cell descending air", "ITCZ rising air"], correct: 2 },
        { q: "What is El Niño?", opts: ["A tropical cyclone in the Pacific", "A warming of Pacific Ocean surface temperatures changing global rainfall", "A high pressure system over Africa", "A type of drought in Australia"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Physical drought", def: "Caused by persistent high pressure blocking rainfall" },
        { term: "El Niño", def: "Warming of Pacific Ocean disrupting global rainfall patterns" },
        { term: "Overextraction", def: "Human cause — using more water than rivers/aquifers can replenish" },
        { term: "Food insecurity", def: "Social impact — crop failure leads to malnutrition and hunger" },
        { term: "Climate change", def: "Increasing drought frequency and intensity worldwide" }
      ]},
      truefalse: [
        { s: "Drought only occurs in hot countries near the equator.", a: false, c: "Drought can occur anywhere that receives less rainfall than expected for a prolonged period." },
        { s: "High pressure is associated with dry conditions.", a: true },
        { s: "Deforestation can reduce local rainfall.", a: true },
        { s: "Economic impacts of drought are limited to farmers.", a: false, c: "Drought affects whole economies — food prices rise, tourism declines, water supplies are cut." },
        { s: "El Niño warms Pacific Ocean surface temperatures.", a: true }
      ],
      exam: { q: "Explain the causes of drought in one area you have studied. (4 marks)", model: "The Sahel region of Africa experiences drought due to a combination of physical and human causes. Physically, the region lies at ~15°N where descending air from the Hadley Cell creates dry conditions. El Niño events can shift the Inter-Tropical Convergence Zone southward, reducing rainfall further. Human causes include deforestation for farmland, which reduces transpiration and local rainfall, and overextraction of water from rivers and aquifers for irrigation. Climate change is also intensifying drought frequency and duration across the region.", marks: 4, hint: "Physical causes (high pressure, ITCZ, El Niño) + human causes (deforestation, overextraction, climate change)" }
    }
  ]
};

/* ── SECTION 2: Coastal Landscapes ── */
window.GEO_DATA[2] = {
  title: "Coastal Landscapes",
  paper: 1, paperLabel: "Paper 1 · Physical", color: "p1",
  topics: [
    {
      title: "UK Geology & Coastal Processes",
      spec: "Spec 1.1–1.3",
      flashcards: [
        { q: "Name the three main UK rock types.", a: "Sedimentary (chalk, sandstone — softer), Igneous (granite, basalt — very hard), Metamorphic (schist, slate — hard)." },
        { q: "What is fetch?", a: "The distance of open water over which wind blows to create waves. Greater fetch = more powerful waves. The UK's dominant fetch is from the SW (Atlantic)." },
        { q: "What is the difference between constructive and destructive waves?", a: "Constructive: low frequency (6–8/min), strong swash > weak backwash → deposition. Destructive: high frequency (10–14/min), weak swash < strong backwash → erosion." },
        { q: "What are the four processes of coastal erosion?", a: "Hydraulic action, Abrasion (corrasion), Attrition, Solution (corrosion)." },
        { q: "What is hydraulic action?", a: "Waves compress air in cracks in cliff faces, forcing them apart over time." },
        { q: "What is abrasion at the coast?", a: "Waves hurl sand and pebbles against cliff faces, wearing them away like sandpaper." }
      ],
      mcq: [
        { q: "Which rock type is formed from cooled magma?", opts: ["Sedimentary", "Metamorphic", "Igneous", "Chalk"], correct: 2 },
        { q: "What process involves rocks colliding and becoming smaller and rounder?", opts: ["Hydraulic action", "Abrasion", "Attrition", "Solution"], correct: 2 },
        { q: "Destructive waves have what frequency?", opts: ["2–4 per minute", "6–8 per minute", "10–14 per minute", "20+ per minute"], correct: 2 },
        { q: "The UK's dominant fetch is from which direction?", opts: ["North (Arctic)", "East (North Sea)", "South-West (Atlantic)", "South-East (Channel)"], correct: 2 }
      ],
      match: { pairs: [
        { term: "Hydraulic action", def: "Water compresses air in cracks, forcing them apart" },
        { term: "Abrasion", def: "Waves hurl sediment against the cliff, wearing it away" },
        { term: "Attrition", def: "Rocks collide and become smaller and rounder" },
        { term: "Solution", def: "Acidic seawater dissolves chalk and limestone" },
        { term: "Constructive wave", def: "Strong swash, weak backwash — mainly deposits sediment" },
        { term: "Destructive wave", def: "Weak swash, strong backwash — mainly erodes the coast" }
      ]},
      truefalse: [
        { s: "Constructive waves have a higher frequency than destructive waves.", a: false, c: "Constructive = 6–8/min; Destructive = 10–14/min." },
        { s: "Granite is an example of an igneous rock.", a: true },
        { s: "Hydraulic action involves acid dissolving chalk.", a: false, c: "That's solution. Hydraulic action = water compressing air in cracks." },
        { s: "Greater fetch leads to more powerful waves.", a: true },
        { s: "The UK's dominant fetch comes from the south-west.", a: true }
      ],
      exam: { q: "Explain the factors that affect the rate of coastal erosion. (4 marks)", model: "The rate of coastal erosion depends on rock type, wave energy and human activity. Soft rocks like boulder clay erode faster than hard rocks like granite, as they are less resistant. Wave energy is increased by greater fetch — the UK faces powerful Atlantic waves from the south-west, driving rapid erosion. Destructive waves with high frequency (10–14/min) and strong backwash are particularly erosive. Human activity such as building groynes can protect some areas but cause sediment starvation and faster erosion elsewhere.", marks: 4, hint: "Rock type + fetch + wave type + weather + human activity" }
    },
    {
      title: "Transportation, Deposition & Coastal Landforms",
      spec: "Spec 1.3–1.4",
      flashcards: [
        { q: "What is longshore drift?", a: "Waves approach the beach at an angle (following prevailing wind). Swash carries sediment up at 45°. Backwash returns it straight down (gravity). Net movement is along the coast." },
        { q: "Name the four processes of coastal transportation.", a: "Traction (boulders rolled), Saltation (pebbles bounced), Suspension (fine sand/silt carried in water), Solution (minerals dissolved)." },
        { q: "What is the sequence of erosional headland landforms?", a: "Headland → Cave → Arch → Stack → Stump (as erosion exploits joints/faults in the rock)." },
        { q: "How does a wave-cut platform form?", a: "Waves attack the cliff base → wave-cut notch forms → overhang collapses → cliff retreats → flat rocky platform is left at the base." },
        { q: "What is a spit?", a: "A ridge of sand/shingle extending from the coast into open water where the coastline changes direction. LSD deposits sediment beyond the turn. A curved hook forms due to cross-winds. Salt marsh develops in sheltered water behind." }
      ],
      mcq: [
        { q: "What is the correct order of headland landform development?", opts: ["Cave → Stack → Arch → Stump", "Arch → Cave → Stack → Stump", "Cave → Arch → Stack → Stump", "Stack → Cave → Arch → Stump"], correct: 2 },
        { q: "In longshore drift, at what angle does swash travel up the beach?", opts: ["90° to the shoreline", "45° to the shoreline", "Straight up the beach", "Along the beach"], correct: 1 },
        { q: "What forms in the sheltered water behind a spit?", opts: ["A beach", "A tombolo", "Salt marsh", "A lagoon only"], correct: 2 },
        { q: "What is a discordant coastline?", opts: ["Rock bands parallel to the coast", "Rock bands perpendicular to the coast forming bays and headlands", "A coastline with no bedrock", "A coastline shaped entirely by deposition"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Longshore drift", def: "Net movement of sediment along the coast by wave action" },
        { term: "Spit", def: "Ridge of sand extending from coast where LSD deposits beyond a bend" },
        { term: "Bar", def: "A spit that extends fully across a bay, enclosing a lagoon" },
        { term: "Wave-cut notch", def: "Hollow eroded at the base of a cliff by wave action" },
        { term: "Concordant coastline", def: "Rock bands parallel to coast — resistant rock shields softer rock behind" },
        { term: "Discordant coastline", def: "Rock bands perpendicular to coast — creates alternating bays and headlands" }
      ]},
      truefalse: [
        { s: "Swash carries sediment at 90° to the shoreline in longshore drift.", a: false, c: "Swash travels at 45°; backwash returns at 90° due to gravity." },
        { s: "A spit can develop a curved hook due to cross-winds.", a: true },
        { s: "The stack is the first feature to form in headland sequence.", a: false, c: "The sequence is: Cave → Arch → Stack → Stump." },
        { s: "A concordant coastline has rock bands running parallel to the sea.", a: true },
        { s: "Wave-cut platforms form when cliffs erode and retreat inland.", a: true }
      ],
      exam: { q: "Explain how a spit is formed. (4 marks)", model: "Spits form through longshore drift. Prevailing winds drive waves to approach the shore at an angle, carrying sediment along the coast. When the coastline changes direction (e.g. at a river mouth or bay), longshore drift continues to carry sediment into the open water. Deposition occurs as the water becomes more sheltered, gradually building a ridge of sand or shingle. Cross-winds cause the end to curve into a hook shape. Salt marsh accumulates in the sheltered, low-energy water behind the spit.", marks: 4, hint: "Longshore drift → coastline changes direction → deposition → spit extends → hook → salt marsh" }
    },
    {
      title: "Coastal Management & Holderness Case Study",
      spec: "Spec 1.5–1.6",
      flashcards: [
        { q: "Name two hard engineering coastal defences.", a: "Sea wall (reflects wave energy), Groynes (trap LSD sediment), Rip rap (rock armour absorbs energy), Offshore breakwater." },
        { q: "Name two soft engineering coastal management strategies.", a: "Beach nourishment (adding sand/sediment), Managed retreat (allowing lower-value land to flood — cheapest long-term option)." },
        { q: "Why does Holderness erode so fast?", a: "1) Boulder clay is soft and unconsolidated. 2) Long fetch from the north (Scandinavia). 3) Narrow beaches. 4) Saturated cliffs slump. 5) LSD removes eroded sediment south quickly." },
        { q: "What is the terminal groyne effect?", a: "Groynes at Hornsea trap sediment. Beaches south (Mappleton) are starved of sediment → narrower → more vulnerable to erosion." },
        { q: "What is the average erosion rate at Holderness?", a: "2–3 metres per year — the fastest eroding coastline in Europe. Over 30 villages have been lost since Roman times." }
      ],
      mcq: [
        { q: "What is beach nourishment?", opts: ["Building a sea wall", "Adding sand/sediment to a beach to reduce erosion", "Allowing land to flood naturally", "Building groynes perpendicular to the shore"], correct: 1 },
        { q: "What rock type makes Holderness erode so quickly?", opts: ["Chalk", "Granite", "Boulder clay", "Limestone"], correct: 2 },
        { q: "What is managed retreat?", opts: ["Moving sea defences seaward", "Allowing lower-value coastal land to flood", "Retreating all buildings from the coast", "Removing groynes"], correct: 1 },
        { q: "What is the terminal groyne effect?", opts: ["Groynes are destroyed by waves", "Sediment trapped by groynes starves beaches further along the coast", "Groynes cause erosion at their base", "Too many groynes are built"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Sea wall", def: "Hard engineering — reflects wave energy; expensive ~£1,000s/m" },
        { term: "Groynes", def: "Hard engineering — trap LSD sediment; starve beaches downdrift" },
        { term: "Beach nourishment", def: "Soft engineering — adds sand/sediment to work with natural processes" },
        { term: "Managed retreat", def: "Soft engineering — allow land to flood; cheapest long-term option" },
        { term: "Holderness", def: "Fastest eroding coast in Europe — 2–3 m/year; boulder clay" },
        { term: "Terminal groyne effect", def: "Groynes trap sediment, starving beaches further south" }
      ]},
      truefalse: [
        { s: "Holderness erodes at about 2–3 metres per year.", a: true },
        { s: "Hard engineering is always cheaper than soft engineering.", a: false, c: "Hard engineering such as sea walls costs thousands per metre. Managed retreat is the cheapest long-term option." },
        { s: "Managed retreat involves building stronger sea defences.", a: false, c: "Managed retreat means allowing lower-value land to flood naturally." },
        { s: "The Holderness coast is made of boulder clay.", a: true },
        { s: "Groynes can cause erosion on beaches downdrift by starving them of sediment.", a: true }
      ],
      exam: { q: "Explain the advantages and disadvantages of hard engineering as a coastal management strategy. (4 marks)", model: "Hard engineering strategies such as sea walls and groynes are effective at protecting coastal land in the short term. Sea walls reflect wave energy and can protect settlements, but they are very expensive (£1,000s per metre) and can cause scour at the base. Groynes trap sediment and build up beaches, but starve beaches further along the coast of sediment (terminal groyne effect), increasing erosion elsewhere. Hard engineering often looks unnatural and needs constant maintenance. Unlike soft engineering, it works against natural processes rather than with them.", marks: 4, hint: "Effectiveness + cost + environmental impact + impact on neighbouring areas" }
    }
  ]
};
