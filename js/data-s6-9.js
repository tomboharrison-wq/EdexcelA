/* data-s6-9.js — Content data for Sections 6–9 */
window.GEO_DATA = window.GEO_DATA || {};

/* ── SECTION 6: Global Development & Nigeria ── */
window.GEO_DATA[6] = {
  title: "Global Development & Nigeria",
  paper: 2, paperLabel: "Paper 2 · Human", color: "p2",
  topics: [
    {
      title: "Defining & Measuring Development",
      spec: "Spec 5.1–5.3",
      flashcards: [
        { q: "What is HDI?", a: "Human Development Index — composite measure using: income (GNI per capita), life expectancy, and years of education." },
        { q: "What is a limitation of GDP per capita?", a: "It only measures economic output — ignores inequality, healthcare, education, political freedom or environment." },
        { q: "Name two physical causes of uneven development.", a: "Landlocked location (harder to trade), tropical disease burden, drought, lack of natural resources, natural hazards." },
        { q: "Name two historical/economic causes of uneven development.", a: "Colonialism left weak infrastructure & raw-material dependence. Debt traps countries; low investment reduces wages." },
        { q: "What are top-down vs bottom-up development strategies?", a: "Top-down = large government/TNC projects (dams, roads). Bottom-up = small community projects (wells, microfinance, local schools)." }
      ],
      mcq: [
        { q: "What three factors make up the HDI?", opts: ["Income, health, military power", "Income, life expectancy, education", "GDP, inequality, corruption", "Birth rate, death rate, migration"], correct: 1 },
        { q: "Which is a PHYSICAL cause of uneven development?", opts: ["Colonialism", "Corruption", "Landlocked location", "Low investment"], correct: 2 },
        { q: "Which is a bottom-up development strategy?", opts: ["Government builds large dams", "TNC builds factory", "Community-led microfinance scheme", "World Bank loan for roads"], correct: 2 },
        { q: "What does GNI per capita measure?", opts: ["Quality of life", "Average income per person", "Military spending", "Life expectancy"], correct: 1 }
      ],
      match: { pairs: [
        { term: "HDI", def: "Composite: income + life expectancy + education" },
        { term: "GNI per capita", def: "Average income per person — simple economic indicator" },
        { term: "Top-down strategy", def: "Large-scale project by government or TNC (dam, road)" },
        { term: "Bottom-up strategy", def: "Small-scale community project (well, microfinance)" },
        { term: "Colonialism", def: "Historical cause leaving weak infrastructure & raw-material dependence" }
      ]},
      truefalse: [
        { s: "HDI measures only a country's economic output.", a: false, c: "HDI measures income AND life expectancy AND education." },
        { s: "Being landlocked can hinder development.", a: true },
        { s: "Bottom-up strategies are larger scale than top-down strategies.", a: false, c: "Top-down are large scale. Bottom-up are small, community-led." },
        { s: "Colonialism is a physical cause of uneven development.", a: false, c: "Colonialism is a HISTORICAL/ECONOMIC cause." },
        { s: "International aid can sometimes create dependency.", a: true }
      ],
      exam: { q: "Explain two reasons why some countries develop more slowly than others. (4 marks)", model: "One reason is physical geography — landlocked countries lack sea access, making trade harder and more expensive. Tropical diseases reduce worker productivity and strain health budgets.\n\nA second reason is historical: colonialism exploited raw materials and left weak institutions. Countries became dependent on exporting low-value primary goods. Debt to richer nations diverts money from schools and hospitals, slowing development further.", marks: 4, hint: "Physical cause + mechanism → Historical cause + mechanism" }
    },
    {
      title: "Nigeria — Economy, TNCs & Inequality",
      spec: "Spec 5.5–5.8",
      flashcards: [
        { q: "Why is Nigeria globally important?", a: "Population ~220m (most in Africa). Largest African economy ($440bn GDP). Produces 8% of global oil. Nollywood = world's 3rd largest film industry." },
        { q: "What is the difference between Nigeria's core and periphery?", a: "Core = South (Lagos, Niger Delta) — most wealth, best infrastructure. Periphery = North (Kano) — lower wages, fewer jobs, poor roads." },
        { q: "What are the impacts of Shell's operations in the Niger Delta?", a: "21%+ of Nigeria's oil extracted. 7,000+ oil spills since 1970s. Reduced Ogoni life expectancy by ~10 years. Ken Saro-Wiwa (MOSOP leader) executed 1995." },
        { q: "What is Nigeria's HDI rank?", a: "161st out of 189 (2020). Life expectancy 55.2 years vs global average 72.6." },
        { q: "What is Nollywood?", a: "Nigeria's film industry — 3rd largest in the world, exporting Nigerian culture globally and contributing significantly to the economy." }
      ],
      mcq: [
        { q: "What % of Nigeria's exports come from oil?", opts: ["25%", "50%", "70%", "~90%"], correct: 3 },
        { q: "Nigeria's HDI rank in 2020?", opts: ["100th", "130th", "161st", "185th"], correct: 2 },
        { q: "Who led MOSOP protests against Shell?", opts: ["Goodluck Jonathan", "Ken Saro-Wiwa", "Muhammadu Buhari", "Wole Soyinka"], correct: 1 },
        { q: "What is Nigeria's core region?", opts: ["The North (Kano)", "The South (Lagos and Niger Delta area)", "Abuja only", "Central Plateau"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Lagos", def: "Nigeria's largest city; economic core" },
        { term: "Shell", def: "TNC extracting 21%+ of Nigeria's oil — environmental controversy" },
        { term: "MOSOP", def: "Movement for Survival of Ogoni People — protested Shell oil damage" },
        { term: "Nollywood", def: "Nigeria's film industry — 3rd largest in the world" },
        { term: "Niger Delta", def: "Oil-rich region with severe environmental damage from spills" }
      ]},
      truefalse: [
        { s: "Nigeria is located in East Africa.", a: false, c: "Nigeria is in WEST Africa, on the Gulf of Guinea." },
        { s: "Oil makes up approximately 90% of Nigeria's export earnings.", a: true },
        { s: "Ken Saro-Wiwa was executed in 1995 after protesting Shell's activities.", a: true },
        { s: "Nigeria's life expectancy exceeds the global average.", a: false, c: "55.2 years, well below global average of 72.6 years." },
        { s: "Lagos has a higher average income per person than Kano.", a: true }
      ],
      exam: { q: "Explain why Nigeria is important at a global scale. (4 marks)", model: "Nigeria is globally important for several reasons. It has the largest economy in Africa ($440bn GDP, 2023) and produces 8% of global oil as an OPEC member. Its population of 220 million makes it a huge consumer market attracting TNCs. Nollywood is the world's third-largest film industry, exporting Nigerian culture. By 2050, Nigeria is projected to have 390 million people — the 4th most populous country globally — increasing its geopolitical influence further.", marks: 4, hint: "Oil + GDP + population size + Nollywood + future projections" }
    }
  ]
};

/* ── SECTION 7: Energy Resource Management ── */
window.GEO_DATA[7] = {
  title: "Energy Resource Management",
  paper: 2, paperLabel: "Paper 2 · Human", color: "p2",
  topics: [
    {
      title: "Natural Resources, Energy Types & Distribution",
      spec: "Spec 6.1–6.3",
      flashcards: [
        { q: "Renewable vs non-renewable resources?", a: "Renewable = used repeatedly without running out (wind, solar, HEP). Non-renewable = finite supply (coal, oil, gas)." },
        { q: "Abiotic vs biotic resources?", a: "Abiotic = non-living (water, minerals, wind, solar). Biotic = living (fish, timber, crops)." },
        { q: "Where are UK energy resources located?", a: "Coal: Yorkshire, South Wales. Oil/gas: North Sea (offshore). Wind: Scotland and coastal areas. Water: Wales, Lake District, Scottish Highlands." },
        { q: "Advantages and disadvantages of wind power?", a: "+: No CO₂ during operation, free fuel, ~25% UK electricity. −: Intermittent, visual impact, each turbine needs 2 tonnes rare earth elements (mainly from China)." },
        { q: "When did the UK close its last coal power station?", a: "October 2024 — the UK became the first G7 country to end coal power generation." }
      ],
      mcq: [
        { q: "Which energy source provides ~25% of UK electricity?", opts: ["Nuclear", "Coal", "Wind", "Gas"], correct: 2 },
        { q: "Which is an abiotic resource?", opts: ["Timber", "Fish", "Crops", "Wind"], correct: 3 },
        { q: "Where is most UK offshore oil and gas produced?", opts: ["English Channel", "Irish Sea", "North Sea", "Atlantic Ocean west of Scotland"], correct: 2 },
        { q: "Wind turbines require rare earth elements — from which country mainly?", opts: ["USA", "Australia", "China", "Russia"], correct: 2 }
      ],
      match: { pairs: [
        { term: "Abiotic resource", def: "Non-living — water, minerals, wind, solar" },
        { term: "Biotic resource", def: "Living — fish, timber, crops" },
        { term: "Renewable", def: "Won't run out — wind, solar, HEP" },
        { term: "Non-renewable", def: "Finite — coal, oil, natural gas" },
        { term: "North Sea", def: "Location of UK offshore oil and gas production" }
      ]},
      truefalse: [
        { s: "Coal is a renewable energy resource.", a: false, c: "Coal is non-renewable — formed over millions of years." },
        { s: "The UK closed its last coal power station in October 2024.", a: true },
        { s: "Fish and timber are abiotic resources.", a: false, c: "They are BIOTIC (living) resources." },
        { s: "Wind produces no CO₂ during operation.", a: true },
        { s: "Wind provides around 25% of UK electricity.", a: true }
      ],
      exam: { q: "Explain one advantage and one disadvantage of wind power in the UK. (4 marks)", model: "One advantage: wind produces no CO₂ during operation, unlike fossil fuels, helping the UK meet its net zero targets. Wind is also a free and unlimited fuel source, reducing long-term costs.\n\nOne disadvantage: each turbine requires approximately 2 tonnes of rare earth elements, mainly sourced from China. With over 10,000 turbines in the UK, this represents significant resource demand. Additionally, wind is intermittent — it only generates electricity when the wind blows, creating energy security concerns.", marks: 4, hint: "Advantage (no CO₂/free fuel) + disadvantage (rare earths / intermittent) — develop each point fully" }
    },
    {
      title: "Fracking, Norway & Bhutan Case Studies",
      spec: "Spec 6.5–6.7",
      flashcards: [
        { q: "What is fracking?", a: "Hydraulic fracturing — high-pressure water + chemicals cracks shale rock to release natural gas. UK placed a moratorium on fracking in 2019 due to earthquake concerns." },
        { q: "How does Norway manage energy sustainably?", a: "90%+ electricity from HEP (steep fjords, high rainfall). Norwegian Oil Fund saves oil revenues. 80%+ new car sales electric. North Sea Link exports clean energy to UK." },
        { q: "How does Bhutan manage energy sustainably?", a: "HEP = 40% government income; 70% exported to India ($350m/year). SRBE project: 14,000 efficient stoves. EV taxi scheme. Target: 70% EV by 2035." },
        { q: "Why does the UK import natural gas?", a: "Domestic supply declining. UK imports 44% of its gas — mainly from Norway, Qatar and Turkey. Fracking could reduce this but was banned due to earthquakes." },
        { q: "What is the Norwegian Oil Fund?", a: "Sovereign wealth fund saving Norway's oil revenues for future generations. Only 4.2% per year is spent on public services." }
      ],
      mcq: [
        { q: "% of Norway's electricity from renewables?", opts: ["50%", "70%", "Over 90%", "30%"], correct: 2 },
        { q: "The UK placed a moratorium on fracking in which year?", opts: ["2015", "2017", "2019", "2021"], correct: 2 },
        { q: "What does Bhutan's SRBE project involve?", opts: ["Solar panels for schools", "14,000 efficient brick stoves reducing fuelwood use", "EV charging stations", "Hydroelectric dams"], correct: 1 },
        { q: "What % of new car sales in Norway were electric in 2024?", opts: ["30%", "50%", "65%", "Over 80%"], correct: 3 }
      ],
      match: { pairs: [
        { term: "Norwegian Oil Fund", def: "Saves oil revenues for future generations; only 4.2% spent per year" },
        { term: "North Sea Link", def: "World's longest subsea cable — exports Norwegian HEP to UK" },
        { term: "SRBE Project (Bhutan)", def: "14,000 efficient stoves reducing fuelwood use in rural Bhutan" },
        { term: "Fracking moratorium", def: "UK ban on fracking introduced in 2019 due to earthquakes" },
        { term: "HEP (Bhutan)", def: "95% of households electrified; 70% electricity exported to India" }
      ]},
      truefalse: [
        { s: "Norway gets over 90% of its electricity from renewables.", a: true },
        { s: "Fracking uses high-pressure air to crack shale rock.", a: false, c: "Fracking uses high-pressure WATER (and chemicals)." },
        { s: "Bhutan exports about 70% of its electricity to India.", a: true },
        { s: "The UK produces all its natural gas domestically.", a: false, c: "The UK imports 44% of its gas from Norway, Qatar and Turkey." },
        { s: "The Norwegian Oil Fund spends all oil revenues on public services each year.", a: false, c: "Only 4.2% per year is spent — the rest is saved for future generations." }
      ],
      exam: { q: "Evaluate the success of energy management in Norway. (8 marks)", model: "Norway is a highly developed country (HDI rank 1) that has managed energy remarkably sustainably.\n\nSuccesses: over 90% of electricity comes from HEP — zero carbon electricity using the natural advantage of steep fjords and high rainfall. The Norwegian Oil Fund has accumulated over $1.4 trillion, ensuring oil wealth is saved for future generations rather than spent immediately. Over 80% of new cars sold are electric (2024), the highest rate globally, reducing transport emissions significantly. The North Sea Link exports surplus clean electricity to the UK.\n\nHowever, Norway is a very wealthy country — these strategies require significant capital investment that developing nations cannot afford. Norway also continues to extract and export large quantities of oil and gas (including to the UK), which contradicts its green image domestically. Some argue Norway is exporting its carbon footprint rather than eliminating it.\n\nOverall, Norway's energy management is very successful domestically, but its continued oil export complicates its global sustainability credentials.", marks: 8, hint: "HEP + Oil Fund + EVs + North Sea Link → statistics → limitations (wealth, oil exports) → overall judgement" }
    }
  ]
};

/* ── SECTION 8: Geographical Investigations ── */
window.GEO_DATA[8] = {
  title: "Geographical Investigations",
  paper: 3, paperLabel: "Paper 3 · Applied", color: "p3",
  topics: [
    {
      title: "Fieldwork Methods & the Enquiry Process",
      spec: "Paper 3A",
      flashcards: [
        { q: "What are the six stages of geographical enquiry?", a: "1. Formulate question/hypothesis. 2. Select methods & collect data. 3. Process & present data. 4. Analyse & explain. 5. Draw conclusions. 6. Evaluate." },
        { q: "Primary vs secondary data?", a: "Primary = data you collect in the field (beach profiles, questionnaires). Secondary = data collected by others (Census, BGS maps, satellite images)." },
        { q: "Quantitative vs qualitative data?", a: "Quantitative = numerical (pebble sizes, footfall counts). Qualitative = descriptive (field sketches, perceptions, photos)." },
        { q: "What is reliability in fieldwork?", a: "How representative and repeatable your data is. Improved by: more sites, larger sample size, repeat measurements, consistent method." },
        { q: "Name three sampling methods.", a: "Random (chance selection), Systematic (at regular intervals e.g. every 2m), Stratified (split by category e.g. age/gender)." }
      ],
      mcq: [
        { q: "Which is primary data?", opts: ["ONS Census statistics", "OS map", "Beach profiles measured in the field", "BGS geology map"], correct: 2 },
        { q: "What is systematic sampling?", opts: ["Random selection", "Samples at regular intervals", "Split by category", "Chosen by the student"], correct: 1 },
        { q: "Which stage of enquiry comes AFTER data collection?", opts: ["Formulating the question", "Processing and presenting data", "Drawing conclusions", "Risk assessment"], correct: 1 },
        { q: "What does 'validity' mean in fieldwork?", opts: ["How repeatable the data is", "Whether the method tests the actual enquiry question", "How large the sample is", "How accurate the measurements are"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Primary data", def: "Data collected by you in the field" },
        { term: "Secondary data", def: "Data collected by others (Census, BGS maps)" },
        { term: "Quantitative", def: "Numerical — pebble sizes, footfall counts, angles" },
        { term: "Qualitative", def: "Descriptive — field sketches, opinions, photos" },
        { term: "Reliability", def: "How representative and repeatable the data is" },
        { term: "Validity", def: "Whether the method actually tests the enquiry question" }
      ]},
      truefalse: [
        { s: "Primary data is collected by someone else before your fieldwork.", a: false, c: "Primary data is collected by YOU in the field." },
        { s: "A larger sample size generally improves reliability.", a: true },
        { s: "Systematic sampling involves choosing samples at random.", a: false, c: "Systematic = regular intervals. Random = chance selection." },
        { s: "The BGS geology map is primary data.", a: false, c: "It's SECONDARY — produced by the British Geological Survey, not by you." },
        { s: "Drawing conclusions comes before data collection.", a: false, c: "Conclusions come AFTER collection, presentation and analysis." }
      ],
      exam: { q: "Evaluate the success of your fieldwork data collection methods. (8 marks)", model: "In my coastal fieldwork at Hornsea, I used beach profiling at 2-metre intervals with ranging poles and a clinometer. This gave systematic quantitative data on beach gradient and allowed me to identify how the profile changed. Systematic sampling ensured regular coverage and reduced bias.\n\nHowever, only three locations were profiled — a small sample may not represent the whole beach. Weather conditions on the day affected wave energy, so results may not represent typical conditions. Pebble sampling (10 pebbles per quadrat) was also a small sample.\n\nAn improvement would be to repeat the survey on different days and in different weather conditions, increasing reliability. A larger number of profile sites would also improve representativeness. Overall, my methods provided useful data but would benefit from larger samples and repeated measurements.", marks: 8, hint: "State method → what it measured → limitation → improvement → overall judgement" }
    },
    {
      title: "UK Challenges — Economy, Population & Climate",
      spec: "Paper 3B",
      flashcards: [
        { q: "What is the UK's 'two-speed economy'?", a: "London and the South East generate disproportionate wealth (agglomeration). The North, Wales and Midlands have lower wages and higher unemployment." },
        { q: "Greenfield vs brownfield development?", a: "Greenfield = building on undeveloped land (countryside). Brownfield = building on previously developed land (old industrial sites). Brownfield is more sustainable." },
        { q: "What climate changes are predicted for the UK by 2100?", a: "Up to 4°C warmer. Drier summers, wetter winters. More extreme events (floods, droughts, heatwaves). Rising sea levels." },
        { q: "What is agglomeration?", a: "Clustering of businesses in one place — London/SE — creating a self-reinforcing cycle of growth." },
        { q: "What is net migration?", a: "Immigration minus emigration. Record net migration of ~745,000 in the year to March 2023 in the UK." }
      ],
      mcq: [
        { q: "What is brownfield land?", opts: ["Undeveloped countryside", "Farmland near cities", "Previously developed land like old industrial sites", "Green belt"], correct: 2 },
        { q: "What does 'net migration' measure?", opts: ["Total immigration", "Total emigration", "Immigration minus emigration", "Population growth rate"], correct: 2 },
        { q: "What is the Northern Powerhouse?", opts: ["A power station in Yorkshire", "A strategy to boost northern England's economy", "A wind farm in the North Sea", "A motorway network"], correct: 1 },
        { q: "UK climate models predict which summer change by 2100?", opts: ["Cooler, wetter summers", "Hotter, drier summers", "Same as now", "Cooler, drier summers"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Greenfield", def: "Building on undeveloped countryside — more land, but damages environment" },
        { term: "Brownfield", def: "Building on old industrial sites — sustainable but costly to clean up" },
        { term: "Agglomeration", def: "Self-reinforcing clustering of business in one area (London/SE)" },
        { term: "Net migration", def: "Immigration minus emigration — UK record: 745,000 in 2023" },
        { term: "Northern Powerhouse", def: "Government strategy to boost northern England's economy" }
      ]},
      truefalse: [
        { s: "Brownfield development is generally more sustainable than greenfield.", a: true },
        { s: "UK climate models predict cooler, wetter summers by 2100.", a: false, c: "Models predict HOTTER, DRIER summers and wetter, stormier winters." },
        { s: "Net migration reached approximately 745,000 in the year to March 2023.", a: true },
        { s: "Agglomeration means businesses spreading evenly across the UK.", a: false, c: "Agglomeration = CLUSTERING together in one area." },
        { s: "The South East generates less GDP per head than the North of England.", a: false, c: "The South East generates significantly MORE GDP per head." }
      ],
      exam: { q: "Evaluate strategies to manage flood risk in the UK. (8 marks)", model: "Hard engineering (Thames Barrier, Humber flood defences) provides reliable protection for large populations but is expensive and can transfer flood risk downstream. The Thames Barrier has protected London from flooding over 200 times since 1982.\n\nSoft engineering is increasingly preferred. Managed realignment at Medmerry (West Sussex) created coastal wetland providing natural flood protection at lower cost. Catchment-scale approaches — afforestation and SuDS (Sustainable Urban Drainage) — address root causes of flooding rather than just symptoms.\n\nFloodplain zoning (preventing new building in high-risk areas) is cost-effective but politically difficult. The Somerset Levels response (2014) combined dredging and raising roads at £20m — effective but expensive.\n\nOverall, soft engineering is more sustainable long term, but hard engineering remains essential where large populations need immediate protection. The most effective approach combines both, tailored to local context.", marks: 8, hint: "Hard (effective but expensive, transfers risk) + soft (sustainable) + named examples + overall judgement" }
    }
  ]
};

/* ── SECTION 9: Skills Appendix ── */
window.GEO_DATA[9] = {
  title: "Skills Appendix",
  paper: "S", paperLabel: "Skills · All Papers", color: "ps",
  topics: [
    {
      title: "Maps, Graphs & Statistical Skills",
      spec: "All Papers",
      flashcards: [
        { q: "How do you give a six-figure grid reference?", a: "Read easting first (along the bottom), then northing (up the side). Divide the grid square into tenths for the extra digit. Format: eastings (3 digits) then northings (3 digits)." },
        { q: "What does a choropleth map show?", a: "Data shaded by area — darker shading = higher value. E.g. population density by county." },
        { q: "When would you use a scatter graph?", a: "To show the relationship (correlation) between two variables. Plot points, draw a best-fit line, look for positive or negative correlation." },
        { q: "What is the Spearman's Rank test used for?", a: "To measure the strength of correlation between two sets of data. Result (rs) between -1 (perfect negative) and +1 (perfect positive). 0 = no correlation." },
        { q: "What is a dispersion diagram?", a: "A graph showing spread of values around a mean. Shows range and distribution. Useful for comparing two data sets, e.g. pebble sizes at two sites." }
      ],
      mcq: [
        { q: "In a six-figure grid reference, which do you read first?", opts: ["Northing (up the side)", "Easting (along the bottom)", "Either — order does not matter", "The grid square letter"], correct: 1 },
        { q: "A Spearman's Rank result of +0.95 suggests:", opts: ["No correlation", "Strong negative correlation", "Weak positive correlation", "Strong positive correlation"], correct: 3 },
        { q: "A choropleth map uses:", opts: ["Bars to show values", "Shading to represent values by area", "Dots of different sizes", "Lines joining equal values"], correct: 1 },
        { q: "What does a best-fit line on a scatter graph show?", opts: ["Each exact data point", "The overall trend/correlation between two variables", "The maximum value", "The median value"], correct: 1 }
      ],
      match: { pairs: [
        { term: "Choropleth map", def: "Areas shaded by data value — darker = higher" },
        { term: "Scatter graph", def: "Shows relationship/correlation between two variables" },
        { term: "Spearman's Rank", def: "Statistical test for strength of correlation (−1 to +1)" },
        { term: "Dispersion diagram", def: "Shows spread of values around a mean" },
        { term: "Six-figure GR", def: "Easting (3 digits) then Northing (3 digits) — pinpoints a 100m square" }
      ]},
      truefalse: [
        { s: "You read the northing (up the side) before the easting on a grid reference.", a: false, c: "You read the EASTING first (along the bottom), then northing." },
        { s: "A Spearman's Rank result close to +1 shows a strong positive correlation.", a: true },
        { s: "A choropleth map uses dots to show values.", a: false, c: "Choropleth maps use SHADING by area." },
        { s: "A best-fit line on a scatter graph must pass through every data point.", a: false, c: "It shows the overall TREND — it rarely passes through every point." },
        { s: "A dispersion diagram shows the spread of values around a mean.", a: true }
      ],
      exam: { q: "Explain how to use a choropleth map to describe the distribution of a geographical feature. (4 marks)", model: "A choropleth map uses shading to show how values vary across areas — darker shading typically represents higher values. To describe the distribution, identify: (1) where the highest values are concentrated (e.g. 'the darkest shading is in the South East, showing highest population density'), (2) where the lowest values are found, (3) any spatial patterns — e.g. is there a north-south divide? (4) any anomalies or exceptions to the main pattern. Always refer to specific places and give actual values from the key.", marks: 4, hint: "Darkest area = highest value → describe pattern → note anomalies → refer to specific places and figures" }
    }
  ]
};
