/* ============================================================
   SECTION MANIFEST — drives navigation, landing grid, dashboard
   Paper colour keys: p1 (teal) · p2 (navy) · p3 (red) · pS (green)
   ============================================================ */
window.SECTIONS = [
  {
    n: 1, file: "section1", fn: "Section1", paper: "1", paperKey: "p1",
    paperLabel: "Paper 1 · Physical",
    title: "Global Climate & Weather Hazards",
    blurb: "Atmospheric circulation, climate change, tropical cyclones and drought.",
    topics: [
      "Weather vs. Climate & Atmospheric Circulation","Ocean Currents and Heat Transfer",
      "Climate Change in the Quaternary Period","Evidence for Natural Climate Change",
      "The Enhanced Greenhouse Effect","Impacts of Climate Change & UK Climate",
      "Tropical Cyclones — Location & Formation","Tropical Cyclone Hazards",
      "Hurricane Sandy — Cuba & USA","Causes of Drought",
      "Drought Impacts & Responses","Knowledge Check & RAG",
    ],
  },
  {
    n: 2, file: "section2", fn: "Section2", paper: "1", paperKey: "p1",
    paperLabel: "Paper 1 · Physical",
    title: "Coastal Landscapes",
    blurb: "UK landscapes, coastal processes, landforms and management.",
    topics: [
      "UK Geology & Landscape","Coastal Processes","Transportation & Deposition",
      "Erosional & Depositional Landforms","Human Activity & Coastal Management",
      "Holderness — Europe's fastest-eroding coast","Named Distinctive Landscape",
      "Knowledge Check & RAG",
    ],
  },
  {
    n: 3, file: "section3", fn: "Section3", paper: "1", paperKey: "p1",
    paperLabel: "Paper 1 · Physical",
    title: "River Landscapes & Processes",
    blurb: "Processes, landforms, flooding and management of UK rivers.",
    topics: [
      "River Basin Features & Vocabulary","Source to Mouth Changes",
      "Erosion, Transportation & Deposition","Waterfalls & Gorges",
      "Meanders & Oxbow Lakes","Floodplains & Levees","Factors Affecting Flooding",
      "Storm Hydrographs","Case Study: River Tees","River Management","Knowledge Check & RAG",
    ],
  },
  {
    n: 4, file: "section4", fn: "Section4", paper: "1", paperKey: "p1",
    paperLabel: "Paper 1 · Physical",
    title: "Ecosystems, Biodiversity & Management",
    blurb: "Biomes, the biosphere, tropical rainforest, deciduous woodland and sustainable management.",
    topics: [
      "Distribution of Ecosystems & Biomes","The Biosphere & UK Ecosystems",
      "Marine Ecosystems","Tropical Rainforest — Features & Threats",
      "Sustainable Management — Costa Rica","Deciduous Woodlands",
      "Skills — Gersmehl, Adaptations, Dalby Forest","Knowledge Check & RAG",
    ],
  },
  {
    n: 5, file: "section5", fn: "Section5", paper: "2", paperKey: "p2",
    paperLabel: "Paper 2 · Human",
    title: "Changing Cities — Hull & Rio",
    blurb: "Urbanisation, Hull (UK) and Rio de Janeiro (developing).",
    topics: [
      "What is Urbanisation? · Push & Pull","Urbanisation in the UK",
      "Hull — Location, Site & Situation","Structure of Hull — Burgess Model",
      "Changes in Hull's Population","Migration in Hull","Deindustrialisation in Hull",
      "Retailing & the CBD","Sustainability in Hull","Rio de Janeiro — Overview",
      "Inequality & Favelas","Rapid Urbanisation — Challenges & Solutions",
      "Government Policies in Rio","Key Terms Glossary",
    ],
  },
  {
    n: 6, file: "section6", fn: "Section6", paper: "2", paperKey: "p2",
    paperLabel: "Paper 2 · Human",
    title: "Global Development & Nigeria",
    blurb: "Defining and measuring development, global patterns, and the Nigeria case study.",
    topics: [
      "Defining & Measuring Development","Global Patterns & Causes of Uneven Development",
      "Consequences of Uneven Development","Strategies to Reduce Uneven Development",
      "Nigeria — Location & Importance","Nigeria — Development & Industry",
      "Nigeria — TNCs, Aid & Environment","Knowledge Check & RAG",
    ],
  },
  {
    n: 7, file: "section7", fn: "Section7", paper: "2", paperKey: "p2",
    paperLabel: "Paper 2 · Human",
    title: "Energy Resource Management",
    blurb: "Natural resources, energy production and sustainable management.",
    topics: [
      "Natural Resources — Types & Classification","UK & Global Resource Distribution",
      "Coal & Wind Power","UK Energy Mix & Global Demand","Hydroelectric Power",
      "Fracking","Stakeholder Attitudes","Why Sustainable Management is Needed",
      "Case Study — Norway","Case Study — Bhutan","Knowledge Check & RAG",
    ],
  },
  {
    n: 8, file: "section8", fn: "Section8", paper: "3", paperKey: "p3",
    paperLabel: "Paper 3 · Applied",
    title: "Geographical Investigations",
    blurb: "Fieldwork at Hornsea and UK Challenges. 64 marks · 1 h 30 min · Resource Booklet.",
    topics: [
      "How Paper 3 Works · The Enquiry Process","Fieldwork Key Terms",
      "Hornsea Coastal Fieldwork","Hornsea Rural Fieldwork","Fieldwork Skills Practice",
      "Fieldwork Exam Practice","UK Challenges — Resources & Sustainability",
      "UK Challenges — Settlement, Population & Economy","UK Challenges — Landscapes",
      "UK Challenges — Climate Change","Final Knowledge Check & RAG",
    ],
  },
  {
    n: 9, file: "section9", fn: "Section9", paper: "S", paperKey: "pS",
    paperLabel: "Skills · All papers",
    title: "Skills Appendix",
    blurb: "Geographical, mathematical and statistical skills for Papers 1, 2 and 3.",
    topics: [
      "OS Maps, Scale, Distance, Coordinates","GIS, Satellite Images, BGS, Choropleths",
      "Choosing & Reading Graphs","Mean, Range, Quartiles & IQR",
      "Scatter Graphs & Lines of Best Fit","Carbon & Ecological Footprints",
      "Fieldwork Reliability & Accuracy","Exam Command Words & Resource Booklet Technique",
    ],
  },
];

window.SECTION_BY_N = Object.fromEntries(window.SECTIONS.map(s => [s.n, s]));
