/* SECTION 5 — Changing Cities · Hull & Rio (Paper 2) */
function Section5() {
  const P = "2";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="Paper 2 · Component 2 · Topic 4" num="5"
        title="Changing Cities"
        subtitle="Urbanisation, Hull and Rio de Janeiro."
        meta={["Edexcel A · 1GA0/02","Hull (UK) + Rio (developing)","Knowledge check + glossary"]}
        covers={[
          "What is Urbanisation? · Push and Pull","Urbanisation in the UK",
          "Hull — Location, Site & Situation","Structure of Hull — Burgess Model",
          "Changes in Hull's Population","Migration in Hull",
          "Deindustrialisation in Hull","Retailing & the CBD",
          "Sustainability in Hull","Rio de Janeiro — Overview",
          "Inequality & Favelas","Rapid Urbanisation — Challenges & Solutions",
          "Government Policies in Rio","Key Terms Glossary",
        ]}
        routine="Revision routine — complete each activity in order, correct in purple pen, and highlight any topics to revisit before the exam." />

      {/* ---------- 1 URBANISATION ---------- */}
      <Page paper={P} running="Section 5 · What is Urbanisation?" folio="1.1">
        <SubsectionHeader num={1} title="What is Urbanisation?" spec="Spec 4.1" />
        <KeyKnowledge items={[
          "<strong>Urbanisation</strong> = an increase in the PROPORTION of people living in urban areas compared to rural.",
          "Global trend — 1950: 29% lived in cities; 2007: 49%; 2030 projected: 60%.",
          "<strong>Push (leave countryside):</strong> lack of jobs, low wages, poor healthcare/education, natural disasters, mechanisation of farming.",
          "<strong>Pull (move to cities):</strong> more jobs, higher wages, better hospitals/schools, entertainment, family already there.",
        ]} stats="1950: 29% urban · 2007: 49% · 2030 projected: 60%" />
        <Activity num={1} kind="Key Term Match" title="Urbanisation vocabulary" spec="Spec 4.1">
          <MatchTable id="s5-1-match"
            left={["Urbanisation","Push factor","Pull factor","Rural area","Urban area"]}
            right={[
              "An increase in the proportion of people living in cities",
              "A reason that makes people want to leave the countryside",
              "A reason that attracts people towards a city",
              "An area of countryside / small villages",
              "A built-up area such as a town or city",
            ]} />
        </Activity>

        <Activity num={2} kind="Data Analysis" title="Urbanisation rates by region" spec="Spec 4.1a">
          <WkTable id="s5-1-data" head={["Region","1950","2007","2030 (projected)"]}
            rows={[["World","29%","49%","60%"],["Africa","15%","37%","51%"],["Asia","17%","41%","54%"],["Europe","51%","72%","78%"],["Latin America","42%","76%","84%"]]} />
          <div style={{marginTop:"10px"}}>
            <div style={{fontWeight:600,fontSize:"11pt"}}>1. Which region had the highest urbanisation rate in 1950?</div>
            <AnswerLines n={1} id="s5-1-q1" />
            <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>2. Which region showed the greatest increase between 1950 and 2007?</div>
            <AnswerLines n={1} id="s5-1-q2" />
            <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>3. Describe the global trend 1950–2030. Use data.</div>
            <AnswerLines n={3} id="s5-1-q3" />
          </div>
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · What is Urbanisation?" folio="1.2">
        <Activity num={3} kind="Exam Practice" title="Developing vs developed urbanisation" spec="Spec 4.1b">
          <ExamQuestion id="s5-1-eq" lines={9}
            prompt="Rates of urbanisation are higher in developing countries than in developed countries. Explain why."
            marks={4}
            hint="push factors · pull factors · economic development · natural increase" />
        </Activity>

        <SubsectionHeader num={2} title="Urbanisation in the UK" spec="Spec 4.2" />
        <KeyKnowledge items={[
          "UK is one of the world's most urbanised countries — over <strong>83%</strong> of people live in urban areas.",
          "Population is unevenly distributed — denser in SE, NW, Midlands and Yorkshire.",
          "High-urbanisation regions: North East 96.1%, North West 96.3%, Yorkshire & Humber 95.8%. Low: Scotland 82% — terrain and fewer opportunities.",
          "<strong>Factors:</strong> relief (flat land easier to build on), natural resources (coal/iron drove industrial cities), transport links, location of government/services.",
        ]} stats="UK 83% urban · NW 96.3% · Scotland 82% — driven by terrain" />
      </Page>

      <Page paper={P} running="Section 5 · UK Urbanisation" folio="2.1">
        <Activity num={4} kind="Fill in the Blanks" title="UK urbanisation" spec="Spec 4.2">
          <FillBlanks id="s5-2-blanks"
            bank={["transport","urban","rural","relief","South East","83","densely","sparsely"]}
            items={[
              ["Over ", null, "% of people in the UK live in ", null, " areas."],
              ["Areas with high urbanisation are ", null, " populated; areas like the Scottish Highlands are ", null, " populated."],
              ["The most highly urbanised region is the ", null, ", due to its flat ", null, " and excellent ", null, " links."],
            ]} />
        </Activity>
        <Activity num={5} kind="Short Response" title="2-mark answers" spec="Spec 4.2b">
          <div style={{fontWeight:600,fontSize:"11pt"}}>1. Give TWO reasons why the South East has higher urbanisation than Scotland.</div>
          <AnswerLines n={2} id="s5-2-q1" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"8px"}}>2. Give TWO reasons why natural resources led to urbanisation in northern England.</div>
          <AnswerLines n={2} id="s5-2-q2" />
        </Activity>
        <Activity num={6} kind="Exam Practice" title="Physical factors" spec="Spec 4.2">
          <ExamQuestion id="s5-2-eq" lines={7}
            prompt="Explain how physical factors influence the distribution of urban populations in the UK."
            marks={4} hint="relief · natural resources · transport links · examples" />
        </Activity>
      </Page>

      {/* ---------- 3 HULL LOCATION ---------- */}
      <Page paper={P} running="Section 5 · Hull — Location & Site" folio="3.1">
        <SubsectionHeader num={3} title="Hull — Location, Site & Situation" spec="Spec 4.3a" />
        <KeyKnowledge items={[
          "<strong>Location.</strong> Kingston upon Hull, East Riding of Yorkshire. North bank of the Humber Estuary, ~25 miles from the North Sea.",
          "<strong>Site (why HERE).</strong> Confluence of River Hull and Humber Estuary; flat low-lying land; natural sheltered harbour; fresh water from the River Hull; North Sea fish stocks.",
          "<strong>Situation (national).</strong> A63/M62 to Leeds and Manchester; fast rail to London (~2 h 30); Humberside Airport; Port of Hull to Rotterdam; close to North Sea oil & gas.",
          "<strong>Connectivity.</strong> Historic Scandinavian fishing/trade links. Ferry routes to Rotterdam (Netherlands) and Zeebrugge (Belgium).",
        ]} />
        
        <Activity num={7} kind="Sort It" title="Site vs Situation" spec="Spec 4.3a">
          <SortIt id="s5-3-sort" headLeft="Site" headRight="Situation"
            bank={[
              "Flat land near the river","M62 motorway connects Hull to the rest of England",
              "River Hull provided fresh water","Close to Europe by ferry",
              "Sheltered harbour for ships","Fast train to London",
            ]} rows={3} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Hull — Location & Site" folio="3.2">
        <Activity num={8} kind="Explain" title="Site factor explanation" spec="Spec 4.3a">
          <NoteP>Example: <em>Flat land helped Hull grow as a city because it was easier and cheaper to build on. This encouraged more businesses and houses to be built, attracting more people to the area.</em></NoteP>
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>Write your own explanation for ONE other site factor:</div>
          <AnswerLines n={4} id="s5-3-explain" />
        </Activity>
        <Activity num={9} kind="Extended Answer" title="Site vs situation" spec="Spec 4.3">
          <ExamQuestion id="s5-3-eq" lines={10}
            prompt="'Site is more important than situation in explaining Hull's growth as a city.' Do you agree? Explain your answer."
            marks={8} />
        </Activity>
      </Page>

      {/* ---------- 4 BURGESS MODEL ---------- */}
      <Page paper={P} running="Section 5 · Structure of Hull" folio="4.1">
        <SubsectionHeader num={4} title="Structure of Hull — The Burgess Model" spec="Spec 4.3b" />
        <KeyKnowledge items={[
          "<strong>Burgess Model</strong> — cities arranged in concentric rings from the centre outwards.",
        ]} />
        <WkTable id="s5-4-burg" head={["Zone","Name","Characteristics"]}
          rows={[
            ["A","CBD (Central Business District)","Highest land values; offices, shops, banks. HU1. Very little housing."],
            ["B","Inner City","Old terraced houses, factories, warehouses. Poor housing quality. HU3."],
            ["C","Inner Suburbs","Semi-detached houses, some green space. HU4."],
            ["D","Outer Suburbs","Detached houses, large gardens, newer builds. HU13."],
            ["E","Urban-Rural Fringe","Edge of city, DIY stores, out-of-town retail parks, new estates. HU14."],
          ]} />
        <Activity num={10} kind="Draw and Label" title="Burgess Model" spec="Spec 4.3b">
          
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Structure of Hull" folio="4.2">
        <Activity num={11} kind="House Prices" title="Pattern across the city" spec="Spec 4.3b">
          <NoteP>House prices (approx.): CBD (HU1) £60k · Inner City (HU3) £80k · Inner Suburbs (HU4) £130k · Outer Suburbs (HU13) £200k · Rural Fringe (HU14) £280k.</NoteP>
          <div style={{fontWeight:600,fontSize:"11pt"}}>1. Describe the pattern of house prices from CBD to rural fringe.</div>
          <AnswerLines n={2} id="s5-4-q1" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>2. Explain ONE reason why house prices are highest at the urban-rural fringe.</div>
          <AnswerLines n={3} id="s5-4-q2" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>3. Explain why land values are highest in the CBD even though house prices there are low.</div>
          <AnswerLines n={3} id="s5-4-q3" />
        </Activity>
        <Activity num={12} kind="MCQ Checkpoint" title="Burgess Model" spec="Spec 4.3">
          <MCQ id="s5-4-mcq" items={[
            { q: "Which zone has the highest land values?", opts: ["Outer Suburbs","Inner City","CBD","Urban-Rural Fringe"] },
            { q: "What postcode area represents Hull's CBD?", opts: ["HU3","HU4","HU14","HU1"] },
            { q: "Which zone has large DIY stores and retail parks?", opts: ["CBD","Inner City","Urban-Rural Fringe","Inner Suburbs"] },
            { q: "What term describes the edge of a city where it meets countryside?", opts: ["Counter-urbanisation","Urban-Rural Fringe","Re-urbanisation","Suburbanisation"] },
          ]} />
        </Activity>
      </Page>

      {/* ---------- 5 POPULATION CHANGE ---------- */}
      <Page paper={P} running="Section 5 · Hull's Population" folio="5.1">
        <SubsectionHeader num={5} title="Changes in Hull's Population" spec="Spec 4.4a–b" />
        <WkTable id="s5-5-proc" head={["Process","Definition"]}
          colWidths={["32%",null]}
          rows={[
            ["Urbanisation","Increase in the proportion of people living in urban areas."],
            ["Suburbanisation","Growth of a town/city outward into surrounding countryside; people move OUT to the suburbs."],
            ["Counter-urbanisation","Movement of people FROM cities TO rural/countryside areas; enabled by cars and remote working."],
            ["Re-urbanisation","Movement of people BACK into cities after regeneration — often young professionals."],
          ]} />
        <KeyKnowledge items={[
          "<strong>Hull's population:</strong> 27,000 (1800) → 200,000 (1900) → 295,000 peak (1950) → 240,000 (2000) → 267,000 (2020).",
          "Rapid industrial growth → post-deindustrialisation decline → recent growth from migration and regeneration.",
          "<strong>Why growing again?</strong> Inward migration; Kingswood housing; University (16,000 students); major employers (Cranswick, Croda, Smith & Nephew); C4Di tech hub; school rebuilding.",
        ]} />
        <Activity num={13} kind="Line Graph" title="Hull's population over time" spec="Spec 4.5a">
          
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Hull's Population" folio="5.2">
        <Activity num={14} kind="Match" title="Population processes" spec="Spec 4.4a">
          <WkTable id="s5-5-pm" head={["Description","Process"]}
            rows={[
              ["A family moves from Hull city centre to Kingswood on the outskirts.", null],
              ["A professional moves from a Lincolnshire village back to Hull city centre after regeneration.", null],
              ["A Welsh farmer moves to London to find better paid work.", null],
              ["A retired couple sell their Leeds apartment and move to a North Yorkshire village.", null],
            ]} />
        </Activity>
        <Activity num={15} kind="Exam Practice" title="Hull's population decline and revival" spec="Spec 4.4a">
          <ExamQuestion id="s5-5-eq" lines={9}
            prompt="Explain why Hull's population declined between 1950 and 2000, and then began to grow again."
            marks={6}
            hint="deindustrialisation · loss of fishing/shipbuilding · migration · new industries · regeneration" />
        </Activity>
      </Page>

      {/* ---------- 6 MIGRATION ---------- */}
      <Page paper={P} running="Section 5 · Migration in Hull" folio="6.1">
        <SubsectionHeader num={6} title="Migration in Hull" spec="Spec 4.4b" />
        <KeyKnowledge items={[
          "<strong>National migration</strong> — movement WITHIN a country. <em>Push:</em> lack of jobs in rural areas, low wages in old industrial towns, better opportunities elsewhere.",
          "<strong>International migration</strong> — between countries (e.g. Polish workers to Hull). <em>Pull:</em> higher wages in the UK, more jobs, EU freedom of movement (pre-Brexit).",
          "<strong>Census</strong> — every 10 years since 1801 (last 2021). Records age, sex, occupation, housing, nationality. £1,000 fine for non-completion.",
          "<strong>Impact on Hull.</strong> International migrants (especially Eastern Europeans) boost population; fill jobs in food processing (Cranswick), NHS, manufacturing. Affects age structure, housing demand, services.",
        ]} />
        <Activity num={16} kind="True or False" title="Migration" spec="Spec 4.4b">
          <WkTable id="s5-6-tf" head={["Statement","T / F"]}
            colWidths={["80%",null]}
            rows={[
              ["National migration is movement from one country to another.", null],
              ["The Census is collected every 10 years.", null],
              ["International migrants have helped increase Hull's population.", null],
              ["Migration has no impact on housing demand in Hull.", null],
              ["Push factors make people want to move TO a place.", null],
            ]} />
        </Activity>
        <Activity num={17} kind="Cause and Effect" title="Impacts of migration" spec="Spec 4.4b">
          <WkTable id="s5-6-ce" head={["Impact","+/−","Explanation"]}
            colWidths={["38%","10%",null]}
            rows={[
              ["Fills job vacancies in food processing", null, null],
              ["Increases pressure on schools & GPs", null, null],
              ["Boosts the local economy through taxes", null, null],
              ["Creates cultural diversity in communities", null, null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 7 DEINDUSTRIALISATION ---------- */}
      <Page paper={P} running="Section 5 · Deindustrialisation" folio="7.1">
        <SubsectionHeader num={7} title="Deindustrialisation in Hull" spec="Spec 4.5b" />
        <WkTable id="s5-7-sectors" head={["Sector","What it involves & change over time"]}
          colWidths={["22%",null]}
          rows={[
            ["Primary","Extracting raw materials (farming, fishing, mining). Declined from ~70% (1800) → ~10% (2000) — mechanisation and imports."],
            ["Secondary","Manufacturing (shipbuilding, chemicals). Rose during industrial revolution then declined to ~30% — globalisation and automation."],
            ["Tertiary","Service sector (retail, healthcare, education). Grew from ~10% (1800) → ~55% (2000) as population grew."],
            ["Quaternary","High-tech / knowledge (research, IT). 0% (1800) → ~5% (2000). Includes C4Di in Hull."],
            ["Deindustrialisation","Decline of manufacturing industry — in Hull: loss of fishing, shipbuilding, traditional industries."],
          ]} />
        <KeyKnowledge items={[
          "<strong>Two main causes.</strong> <em>Global shift</em> — manufacturing moved to cheaper countries (China) — lower wages, weaker unions. <em>Mechanisation</em> — machines replaced workers.",
        ]} />
        <Activity num={18} kind="MCQ Checkpoint" title="Sectors" spec="Spec 4.5b">
          <MCQ id="s5-7-mcq" items={[
            { q: "Which job sector involves extracting raw materials?", opts: ["Tertiary","Secondary","Primary","Quaternary"] },
            { q: "Deindustrialisation refers to the decline of which sector?", opts: ["Primary","Secondary","Tertiary","Quaternary"] },
            { q: "Term for machines replacing workers in factories?", opts: ["Globalisation","Mechanisation","Deindustrialisation","Suburbanisation"] },
            { q: "Which is a Quaternary industry in Hull?", opts: ["Cranswick Food","Ship building","C4Di","Fishing fleet"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Deindustrialisation" folio="7.2">
        <Activity num={19} kind="Change Over Time" title="Sector change" spec="Spec 4.5b">
          <WkTable id="s5-7-change" head={["Sector","Change ↑↓","Reason for change"]}
            rows={[["Primary",null,null],["Secondary",null,null],["Tertiary",null,null],["Quaternary",null,null]]} />
        </Activity>
        <Activity num={20} kind="Exam Practice" title="Deindustrialisation in a UK city" spec="Spec 4.5b">
          <ExamTip>For 8-mark questions: 4+ developed points with evidence, named examples, conclusion. Structure: cause → impact → evidence → judgement.</ExamTip>
          <ExamQuestion id="s5-7-eq" lines={15}
            prompt="Assess the causes of deindustrialisation and its impacts on a UK city you have studied."
            marks={8}
            hint="global shift · mechanisation · employment · population · inequality" />
        </Activity>
      </Page>

      {/* ---------- 8 RETAIL & CBD ---------- */}
      <Page paper={P} running="Section 5 · Retailing & CBD" folio="8.1">
        <SubsectionHeader num={8} title="Changes to Retailing & the CBD in Hull" spec="Spec 4.5d" />
        <KeyKnowledge items={[
          "<strong>1. CBD decline.</strong> High rents/rates, lack of parking, 'ghost' shops, less footfall as online shopping grows.",
          "<strong>2. Out-of-town shopping.</strong> Cheaper land, easy parking — Kingswood Retail Park; B&Q, Asda, IKEA — ring road / A63 access.",
          "<strong>3. Internet shopping.</strong> 24/7 availability, price comparison, home delivery / click-and-collect.",
          "<strong>Winners:</strong> online retailers, delivery firms, consumers. <strong>Losers:</strong> small CBD shops, market traders, city centre workers.",
        ]} />
        <Activity num={21} kind="Sort It" title="Impacts of internet shopping" spec="Spec 4.5d">
          <SortIt id="s5-8-sort" headLeft="Positive impacts" headRight="Negative impacts"
            bank={[
              "More empty shops in the city centre","Cheaper goods for consumers",
              "Small town centre businesses close","Less traffic in the CBD",
              "Amazon creates thousands of warehouse jobs","City centre loses tax revenue",
            ]} rows={3} />
        </Activity>
        <Activity num={22} kind="Exam Practice" title="Internet shopping evaluation" spec="Spec 4.5c–d">
          <ExamQuestion id="s5-8-eq" lines={11}
            prompt="'Internet shopping has been more harmful than beneficial for cities like Hull.' To what extent do you agree?"
            marks={8} />
        </Activity>
      </Page>

      {/* ---------- 9 SUSTAINABILITY ---------- */}
      <Page paper={P} running="Section 5 · Sustainability in Hull" folio="9.1">
        <SubsectionHeader num={9} title="Sustainability in Hull" spec="Spec 4.5e" />
        <KeyKnowledge items={[
          "<strong>Sustainable urban living</strong> — meeting present needs without compromising future generations' ability to meet theirs.",
          "<strong>Economic.</strong> New jobs (C4Di); attracting businesses; City of Culture 2017 boosted tourism.",
          "<strong>Social.</strong> 17 new schools built; improved healthcare; affordable housing at Kingswood.",
          "<strong>Environmental.</strong> Renewable energy — offshore wind (Siemens Gamesa); recycling programmes; green spaces.",
        ]} />
        
        <Activity num={23} kind="Evaluation" title="Sustainability strategies" spec="Spec 4.5e"
          instructions="For each strategy, write one benefit AND one limitation.">
          <WkTable id="s5-9-eval" head={["Strategy","Benefit","Limitation"]}
            rows={[["Building new schools",null,null],["Offshore wind energy",null,null],["Affordable housing schemes",null,null]]} />
        </Activity>
      </Page>

      {/* ---------- 10 RIO OVERVIEW ---------- */}
      <Page paper={P} running="Section 5 · Rio de Janeiro" folio="10.1">
        <SubsectionHeader num={10} title="Rio de Janeiro — Case Study Overview" spec="Spec 4.6–4.7" />
        <KeyKnowledge items={[
          "<strong>Location.</strong> East coast of Brazil, South America. Atlantic to the east; close to São Paulo (~125 km); just above the Tropic of Capricorn.",
          "<strong>Key facts.</strong> Population ~6.77 million (2020). Former capital. Hosted 2014 FIFA World Cup and 2016 Olympics. Famous for Carnival and Christ the Redeemer.",
          "<strong>Opportunities.</strong> Tourism, Olympic infrastructure, HEP, oil & gas, manufacturing, financial services, UNESCO landscape.",
          "<strong>Population growth.</strong> 1950: 2.4m → 2020: 6.8m (fastest growth in 1970s).",
        ]} stats="Population ~6.77m (2020) · 1950–2020: 2.4m → 6.8m · 125 km from São Paulo" />
        
        <Activity num={24} kind="Fill in the Blanks" title="Rio's location" spec="Spec 4.6–4.7">
          <FillBlanks id="s5-10-blanks"
            bank={["east","Atlantic","South America","Capricorn","São Paulo","10","north-west","2016"]}
            items={[
              ["Rio de Janeiro is situated on the ", null, " coast of Brazil."],
              ["Brazil is surrounded by ", null, " different countries in the continent of ", null, "."],
              ["The ", null, " Ocean is to the east of Rio and the city is very close to ", null, "."],
              ["The Amazon rainforest is to the ", null, " of Rio."],
              ["Rio sits just above the Tropic of ", null, "."],
              ["Rio hosted the Olympics in ", null, "."],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Rio de Janeiro" folio="10.2">
        <Activity num={25} kind="Opportunities" title="Why each is an opportunity" spec="Spec 4.7">
          <WkTable id="s5-10-opp" head={["Opportunity","Why this is an opportunity for Rio"]}
            colWidths={["28%",null]}
            rows={[["Tourism",null],["2016 Olympics legacy",null],["Oil & Gas",null],["Hydroelectric power",null]]} />
        </Activity>
      </Page>

      {/* ---------- 11 INEQUALITY & FAVELAS ---------- */}
      <Page paper={P} running="Section 5 · Inequality & Favelas" folio="11.1">
        <SubsectionHeader num={11} title="Inequality & Favelas in Rio" spec="Spec 4.7c" />
        <KeyKnowledge items={[
          "<strong>Scale.</strong> Rio's lowest-paid workers would need to work for 19 YEARS to earn what the richest earn in 1 MONTH. Rio's 6 richest people own as much as the poorest 50% combined.",
          "<strong>Favelas</strong> — informal squatter settlements built by low-income migrants on the outskirts or steep hillsides.",
          "<strong>Why favelas exist?</strong> Rapid rural-urban migration; arrivals can't afford proper housing → self-build on unused land (often illegal). Minimum wage ~£2,900/year.",
          "<strong>Causes of inequality.</strong> Low income → can't afford private school (£26,000/yr) → underfunded favela schools (4 hrs/day, no room to sit) → no degree → locked out of financial-services jobs → remain poor.",
          "<strong>Problems in favelas.</strong> Poor sanitation, no legal electricity/water, crime, overcrowding, lack of health services, insecure work, risk of landslides.",
        ]} stats="Minimum wage £2,900/year · Private school £26,000/year · Top earners' 1 month = poorest 19 years" />
        
        <Activity num={26} kind="Calculation" title="Inequality stats" spec="Spec 4.7c">
          <div style={{fontWeight:600,fontSize:"11pt"}}>1. If a top earner makes £2,900 per month, how many times more do they earn per year than someone on minimum wage?</div>
          <AnswerLines n={2} id="s5-11-q1" />
          <div style={{fontWeight:600,fontSize:"11pt",marginTop:"6px"}}>2. Write ONE sentence describing the level of inequality in Rio, using a statistic.</div>
          <AnswerLines n={2} id="s5-11-q2" />
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Inequality & Favelas" folio="11.2">
        <Activity num={27} kind="Flow Diagram" title="Inequality and education" spec="Spec 4.7">
          <NoteP>Complete the flow showing HOW inequality is caused by the education system.</NoteP>
          <WkTable id="s5-11-flow" head={["Start","→","Then","→","End"]}
            rows={[
              ["Family on minimum wage (£2,900/yr)","→",null,"→",null],
              [null,"→",null,"→","Cannot get financial-services job → remains in low-paid work"],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 12 CHALLENGES & SOLUTIONS ---------- */}
      <Page paper={P} running="Section 5 · Rio — Rapid Urbanisation" folio="12.1">
        <SubsectionHeader num={12} title="Rapid Urbanisation — Challenges & Solutions" spec="Spec 4.8a–b" />
        <WkTable id="s5-12-ch" head={["Challenge","Key Facts"]}
          colWidths={["24%",null]}
          rows={[
            ["Unemployment","12.9% unemployed; another 12% underemployed. Many informal sector jobs."],
            ["Traffic & Pollution","Traffic jams can stretch 183 miles. 6.2 million cars. Air pollution 20 μg/m³ (TWICE safe limit). ~4,500 deaths/year."],
            ["Favelas","Informal housing; lack clean water, sewage, electricity, healthcare. Steep hillside landslide risk."],
            ["Lack of Services","Water shortages; energy supply cuts; schools overcrowded."],
          ]} />
        <KeyKnowledge items={[
          "<strong>Top-Down — Favela-Bairro Project.</strong> Government/city led. Upgraded 60+ favelas (water, electricity, roads, schools). Cost: $300m+. ✓ Large-scale, professional. ✗ Local needs not always considered.",
          "<strong>Bottom-Up — Self-Help Schemes.</strong> Residents build/improve own homes; government supplies materials; community-led. ✓ Empowers locals, cheap. ✗ Slow, inconsistent quality.",
        ]} />
      </Page>

      <Page paper={P} running="Section 5 · Rio — Rapid Urbanisation" folio="12.2">
        <Activity num={28} kind="MCQ Checkpoint" title="Rio challenges" spec="Spec 4.8a">
          <MCQ id="s5-12-mcq" items={[
            { q: "What % of Rio's population is unemployed?", opts: ["5%","20%","12.9%","30%"] },
            { q: "How far can traffic jams stretch on bad days?", opts: ["50 miles","183 miles","10 miles","300 miles"] },
            { q: "The Favela-Bairro Project is which type of strategy?", opts: ["Bottom-up","Self-help","Top-down","International aid"] },
            { q: "Air pollution in Rio is how many times the safe limit?", opts: ["Three times","Half","Twice","Ten times"] },
          ]} />
        </Activity>
        <Activity num={29} kind="Exam Practice" title="Top-down vs bottom-up" spec="Spec 4.8b">
          <ExamQuestion id="s5-12-eq" lines={15}
            prompt="'Top-down strategies are more effective than bottom-up strategies in improving quality of life in Rio.' Discuss."
            marks={8}
            hint="scale · cost · community involvement · speed · examples — balanced argument" />
        </Activity>
      </Page>

      {/* ---------- 13 GOVERNMENT POLICIES ---------- */}
      <Page paper={P} running="Section 5 · Government Policies in Rio" folio="13.1">
        <SubsectionHeader num={13} title="Government Policies to Improve Life in Rio" spec="Spec 4.8c" />
        <WkTable id="s5-13-gov" head={["Problem","Government strategy","SEE benefit"]}
          rows={[
            ["Traffic & air pollution","BRT (Bus Rapid Transit); subsidised fares; car-sharing; cycle lanes","Fewer cars → less pollution (env); cheaper transport (soc/econ)"],
            ["Housing shortage","Strategic Master Plan — zoning; Favela-Bairro upgrades","Better housing reduces health risks; regulates growth"],
            ["Water shortage","Investment in water infrastructure; clamping down on illegal connections; desalination trials","Reliable supply improves health; reduces waste"],
          ]} />
        <Activity num={30} kind="Evaluate" title="One policy in depth" spec="Spec 4.8c">
          <div style={{fontWeight:600,fontSize:"11pt"}}>Policy chosen:</div>
          <AnswerLines n={1} id="s5-13-policy" />
          <WkTable id="s5-13-eval" head={["","Your response"]}
            colWidths={["28%",null]}
            rows={[["Social benefit",null],["Economic benefit",null],["Environmental benefit",null]]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 5 · Government Policies in Rio" folio="13.2">
        <Activity num={31} kind="Exam Practice" title="Quality of life in cities" spec="Spec 4.8">
          <ExamTip>"Assess" — consider government policies, self-help, TNCs, NGOs, international aid. Weigh up which matters most and reach a clear overall judgement.</ExamTip>
          <ExamQuestion id="s5-13-eq" lines={17}
            prompt="'Government policies are the most important factor in improving quality of life in cities in developing countries.' Assess this statement with reference to a city you have studied."
            marks={8} />
        </Activity>
      </Page>

      {/* ---------- 14 GLOSSARY ---------- */}
      <Page paper={P} running="Section 5 · Key Terms Glossary" folio="GL.1">
        <SubsectionHeader num={14} title="Key Terms Glossary" spec="" />
        <NoteP>Tick each one when confident.</NoteP>
        <WkTable id="s5-gl" head={["✓","Term","Definition"]}
          colWidths={["6%","24%",null]}
          rows={[
            [null,"Urbanisation","Increase in the proportion of people living in urban areas."],
            [null,"Suburbanisation","Growth of a city outward into the surrounding countryside."],
            [null,"Counter-urbanisation","Movement of people from cities to rural areas."],
            [null,"Re-urbanisation","Movement of people back into cities after regeneration."],
            [null,"Site","The actual land on which a settlement is built."],
            [null,"Situation","The location of a settlement in relation to surrounding areas."],
            [null,"Connectivity","How a place is linked to other settlements/countries."],
            [null,"CBD","Central Business District — the commercial core (Zone A in Burgess)."],
            [null,"Deindustrialisation","Decline of manufacturing industry in a country or city."],
            [null,"Mechanisation","Use of machines to replace human workers in industry."],
            [null,"Global shift","Movement of manufacturing from developed to developing countries."],
            [null,"Favela","An informal squatter settlement in Brazilian cities."],
            [null,"Inequality","Unfair differences in wealth, access to services and quality of life."],
            [null,"Top-down strategy","Solution designed/delivered by the government or large organisation."],
            [null,"Bottom-up strategy","Community-led solution where local people are empowered."],
            [null,"Sustainable development","Meeting present needs without harming future generations'."],
          ]} />
        <HrOrn />
      </Page>

      <Page paper={P} running="Section 5 · RAG Self-Assessment" folio="RAG">
        <SubsectionHeader num={15} title="RAG Self-Assessment — Changing Cities" spec="" />
        <NoteP>R = don't know · A = partly know · G = know well</NoteP>
        <RAGTable items={[
          "Definitions of urbanisation, suburbanisation, counter-urbanisation, re-urbanisation",
          "Push and pull factors driving urbanisation",
          "UK urbanisation patterns and physical factors",
          "Hull — site, situation and connectivity",
          "Burgess Model and applying it to Hull",
          "House price patterns and bid-rent in Hull",
          "Hull's population over time and key drivers of change",
          "National vs international migration in Hull",
          "Deindustrialisation — causes (global shift, mechanisation) and impacts",
          "Changes to retailing — out-of-town and internet shopping",
          "Sustainability strategies in Hull (economic / social / environmental)",
          "Rio — location, opportunities and population growth",
          "Inequality and favelas — causes, scale and statistics",
          "Rio's challenges — unemployment, traffic, favelas, services",
          "Top-down vs bottom-up strategies (Favela-Bairro & self-help)",
          "Government policies — BRT, Master Plan, water investment",
          '8-mark "Assess" technique on city improvement strategies',
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section5 = Section5;
