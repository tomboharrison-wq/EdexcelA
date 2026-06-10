/* SECTION 6 — Global Development Overview + Nigeria (Paper 2) */
function Section6() {
  const P = "2";
  return (
    <React.Fragment>

      {/* ============= 6A: GLOBAL DEVELOPMENT OVERVIEW ============= */}
      <SectionDivider paper={P} paperLabel="Paper 2 · Component 2 · Topic 5 (Spec 5.1–5.4)" num="6A"
        title="Global Development Overview"
        subtitle="Defining and measuring development, global patterns, consequences and strategies."
        meta={["Edexcel A · 1GA0/02","Spec 5.1–5.4","Knowledge check + RAG"]}
        covers={[
          "Defining & Measuring Development","Global Patterns & Causes of Uneven Development",
          "Consequences of Uneven Development","Strategies to Reduce Uneven Development",
          "RAG Self-Assessment",
        ]}
        routine="Read the Key Knowledge carefully — these definitions and frameworks underpin the Nigeria case study that follows." />

      {/* --- 6A.1 DEFINING --- */}
      <Page paper={P} running="Section 6A · Defining Development" folio="6A.1">
        <SubsectionHeader num={1} title="Defining and Measuring Development" spec="Spec 5.1" />
        <NoteP>Development means improvement in people's quality of life and standard of living. It is not just about money. A country may become richer but still have inequality, corruption, poor services or weak rights for some groups.</NoteP>
        <WkTable id="s6a-1-meas" head={["Measure","What it shows","Strength","Weakness"]}
          rows={[
            ["GDP per capita","Average income per person","Simple economic measure","Hides inequality; doesn't show health, education or political freedom"],
            ["HDI","Composite of income, life expectancy and education","Broader than GDP — includes social development","Hides inequality within a country; doesn't measure corruption"],
            ["Inequality measures","How evenly income/wealth is shared","Shows whether development benefits everyone","Harder to compare; may not show absolute poverty"],
            ["Corruption index","How transparent government and institutions are","Shows whether money and power are used fairly","Based partly on perceptions"],
            ["Birth/death rate, life expectancy","Population health and access to services","Indicator of healthcare, sanitation, nutrition","Affected by age structure, conflict, disease"],
          ]} />
      </Page>

      <Page paper={P} running="Section 6A · Defining Development" folio="6A.2">
        <Activity num={1} kind="Completion" title="Development measures" spec="Spec 5.1c">
          <WkTable id="s6a-1-comp" head={["Measure","Economic / social / political?","What does it measure?","One limitation"]}
            rows={[
              ["GDP per capita", null, null, null],
              ["HDI", null, null, null],
              ["Inequality measure", null, null, null],
              ["Political corruption index", null, null, null],
              ["Life expectancy", null, null, null],
            ]} />
        </Activity>
        <Activity num={2} kind="Judgement" title="Which measure is best?" spec="Spec 5.1">
          <WkTable id="s6a-1-best" head={["Sentence starter","Your answer"]}
            colWidths={["38%",null]}
            rows={[
              ["The most useful measure is ______ because…", null],
              ["However, it is limited because…", null],
              ["A better judgement would use several measures because…", null],
            ]} />
        </Activity>
      </Page>

      {/* --- 6A.2 PATTERNS --- */}
      <Page paper={P} running="Section 6A · Global Patterns" folio="6A.3">
        <SubsectionHeader num={2} title="Global Patterns & Causes of Uneven Development" spec="Spec 5.2" />
        <NoteP>Development is uneven between and within countries. Higher-income countries are concentrated in North America, Europe, Japan, South Korea and Australasia. Lower-income countries are concentrated in parts of sub-Saharan Africa and South Asia — but there are exceptions, and emerging economies are changing rapidly.</NoteP>
        <WkTable id="s6a-2-causes" head={["Cause type","Examples","How it affects development"]}
          rows={[
            ["Physical","Landlocked location, drought, disease, steep relief, lack of natural resources, natural hazards","Makes trade, farming, health and infrastructure harder/more expensive"],
            ["Historical","Colonialism, past conflict, trade relationships, debt","Weak infrastructure, dependence on raw materials, unequal power relationships"],
            ["Economic","Low investment, reliance on primary products, poor trade links, debt, limited technology","Reduces jobs, wages, tax, government ability to invest"],
            ["Political","Corruption, instability, weak governance, conflict","Discourages investment; money not spent on services"],
          ]} />
        <Activity num={3} kind="Sort It" title="Causes of uneven development" spec="Spec 5.2b">
          <SortIt id="s6a-2-sort" headLeft="Physical / Historical" headRight="Economic / Political"
            bank={["colonialism","drought","landlocked country","corruption","reliance on oil","civil war","debt","tropical disease","lack of ports","low investment","trade barriers","poor education"]} rows={6} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6A · Global Patterns" folio="6A.4">
        <Activity num={4} kind="Exam Practice" title="Explain uneven development" spec="Spec 5.2">
          <WkTable id="s6a-2-eq" head={["Question","Marks","Planning notes"]}
            rows={[
              ["Explain one physical reason why development varies globally.","2","Cause + because + effect on development"],
              ["Explain two reasons why some countries develop more slowly than others.","4","Reason 1: ____. Reason 2: ____. Developed chain for each."],
              ["Describe the global pattern of development.","3","Use continents/regions and one exception"],
            ]} />
          <AnswerLines n={10} id="s6a-2-ex" />
        </Activity>
      </Page>

      {/* --- 6A.3 CONSEQUENCES --- */}
      <Page paper={P} running="Section 6A · Consequences" folio="6A.5">
        <SubsectionHeader num={3} title="Consequences of Uneven Development" spec="Spec 5.3" />
        <NoteP>Quality of life means how good life is for people — health, housing, education, employment, safety, technology, food and water access. Consequences of uneven development can be social, economic and environmental.</NoteP>
        <WkTable id="s6a-3-qol" head={["Factor","How uneven development affects it","Example exam language"]}
          rows={[
            ["Housing","Poorer areas have overcrowded or informal housing with limited sanitation","Disease risk increases"],
            ["Health","Lower income reduces access to doctors, clean water, vaccination","Increases infant mortality; reduces life expectancy"],
            ["Education","Families may not afford school fees; governments have less tax for schools","Reduces future employment opportunities"],
            ["Employment","Jobs may be informal, low-paid, insecure","Traps people in a cycle of poverty"],
            ["Technology","Limited internet/electricity reduces access to information","Widens the development gap"],
            ["Food / water","Drought + weak infrastructure makes supplies unreliable","Increases malnutrition and migration"],
          ]} />
        <Activity num={5} kind="SEE Consequences" title="Classify and explain" spec="Spec 5.3">
          <WkTable id="s6a-3-see" head={["Consequence","S / E / Environ?","How does it reduce quality of life?"]}
            rows={[
              ["Poor access to healthcare", null, null],
              ["Low school attendance", null, null],
              ["Informal employment", null, null],
              ["Food insecurity", null, null],
              ["Limited internet access", null, null],
              ["Overcrowded housing", null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6A · Consequences" folio="6A.6">
        <Activity num={6} kind="Exam Practice" title="Consequences" spec="Spec 5.3">
          <WkTable id="s6a-3-eq" head={["Question","Marks","Success criteria"]}
            rows={[
              ["Explain one way uneven development can affect health.","2","Link income/services to health outcome"],
              ["Explain two consequences of uneven development for quality of life.","4","Two developed chains"],
              ["Assess the extent to which uneven development has social consequences.","8","Cover social impacts, recognise economic links, judge"],
            ]} />
          <AnswerLines n={12} id="s6a-3-ex" />
        </Activity>
      </Page>

      {/* --- 6A.4 STRATEGIES --- */}
      <Page paper={P} running="Section 6A · Strategies" folio="6A.7">
        <SubsectionHeader num={4} title="Strategies to Reduce Uneven Development" spec="Spec 5.4" />
        <WkTable id="s6a-4-strat" head={["Strategy","What it means","Advantages","Limitations"]}
          rows={[
            ["International aid","Money, food, equipment or emergency support from one country/org to another","Save lives quickly; fund schools, healthcare, infrastructure","Can create dependency; poorly targeted; affected by corruption"],
            ["Inter-governmental agreements","Trade deals, debt relief, climate or development agreements","Tackle cross-border problems; long-term improvements","Slow, political; may benefit richer countries more"],
            ["Top-down","Large-scale projects by governments / TNCs / international orgs — dams, roads, ports","Infrastructure improvements; jobs at scale","Expensive; may ignore local needs; displace communities"],
            ["Bottom-up","Small-scale community projects — wells, microfinance, appropriate technology","Cheaper, sustainable, matched to local needs","Limited scale; may not solve national infrastructure problems"],
          ]} />
        <Activity num={7} kind="Evaluation" title="Strategy grid" spec="Spec 5.4">
          <WkTable id="s6a-4-eval" head={["Strategy","Benefit","Limitation","Best used when…"]}
            rows={[
              ["International aid", null, null, null],
              ["Inter-governmental agreements", null, null, null],
              ["Top-down project", null, null, null],
              ["Bottom-up project", null, null, null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6A · Strategies" folio="6A.8">
        <Activity num={8} kind="Sort It" title="Top-down or bottom-up?" spec="Spec 5.4b">
          <SortIt id="s6a-4-sort" headLeft="Top-down" headRight="Bottom-up"
            bank={["large dam","community well","TNC-led industrial zone","microfinance group","national railway","solar-powered water pump","major port","local health education project"]} rows={4} />
        </Activity>
        <Activity num={9} kind="Exam Practice" title="Strategies" spec="Spec 5.4">
          <WkTable id="s6a-4-eq" head={["Question","Marks","Planning"]}
            rows={[
              ["Explain one advantage of bottom-up development.","2","Small scale + local needs + sustainability"],
              ["Explain one limitation of top-down development.","2","Cost / displacement / local needs"],
              ["Evaluate the success of different strategies used to reduce uneven development.","8","Compare at least two strategies and judge"],
            ]} />
          <AnswerLines n={8} id="s6a-4-ex" />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6A · Knowledge Check" folio="6A.KC">
        <SubsectionHeader num={5} title="Knowledge Check — Global Development" spec="" />
        <WkTable id="s6a-kc" head={["Question","Answer"]}
          colWidths={["48%",null]}
          rows={[
            ["1. What is development?", null],
            ["2. Why is GDP per capita limited as a development measure?", null],
            ["3. What three factors make up HDI?", null],
            ["4. Name two physical causes of uneven development.", null],
            ["5. Name two historical/economic causes of uneven development.", null],
            ["6. Give two ways uneven development affects quality of life.", null],
            ["7. What is international aid?", null],
            ["8. Difference between top-down and bottom-up development?", null],
          ]} />
        <HrOrn />
        <RAGTable items={[
          "Define development using economic, social and political criteria",
          "Explain strengths and weaknesses of GDP per capita, HDI, inequality and corruption",
          "Describe the global pattern of development using examples",
          "Explain physical, historical and economic causes of uneven development",
          "Explain how uneven development affects quality of life",
          "Compare top-down and bottom-up development strategies",
          "Evaluate aid and inter-governmental agreements",
        ]} />
      </Page>

      {/* ============= 6B: NIGERIA ============= */}
      <SectionDivider paper={P} paperLabel="Paper 2 · Component 2 · Topic 5B" num="6B"
        title="Nigeria — Development & Urbanisation"
        subtitle="Development, trade, aid, inequality, TNCs and rapid urbanisation."
        meta={["Edexcel A · 1GA0/02","Spec 5.5–5.8","Shell + Dangote + Farmcrowdy"]}
        covers={[
          "Location & Global Importance","Core & Periphery Regions",
          "Economic Structure","Trade & Aid",
          "Inequality & Social Development","Geopolitics",
          "Technology & Connectivity","Rapid Development Impacts",
          "TNCs — Shell in Nigeria","Top-Down vs Bottom-Up",
          "Knowledge Check & RAG",
        ]} />

      {/* --- 6B.1 LOCATION --- */}
      <Page paper={P} running="Section 6B · Location" folio="6B.1.1">
        <SubsectionHeader num={1} title="Nigeria's Location and Global Importance" spec="Spec 5.5a–b" />
        <KeyKnowledge items={[
          "Located in <strong>West Africa</strong>, on the Gulf of Guinea (Atlantic), near the equator.",
          "Neighbours: Benin (W), Niger (N), Chad (NE), Cameroon (E).",
          "Population ~<strong>220 million</strong> — most populous country in Africa. Forecast <strong>390m by 2050</strong> (4th largest).",
          "<strong>Largest economy in Africa</strong>, GDP $440bn (2023). Produces 8% of global oil; OPEC member.",
          "<strong>Nollywood</strong> — 3rd largest film industry after Hollywood and Bollywood.",
          "Gained independence from Britain in <strong>1960</strong>; civil war 1967–70; stable government since <strong>1999</strong>.",
          "Largest military in West Africa; leads ECOWAS.",
        ]} stats="Pop. 220m · GDP $440bn · 8% of global oil · Pop. by 2050: 390m" />
        
        <Activity num={1} kind="Completion" title="Key facts" spec="Spec 5.5a">
          <WkTable id="s6b-1-facts" head={["Key Term / Concept","Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Continent",{shaded:true,text:"Africa"}],
              ["Ocean on Nigeria's coast",null],
              ["Population (approx.)",{shaded:true,text:"220 million"}],
              ["Forecast population by 2050",null],
              ["GDP value (2023)",{shaded:true,text:"$440 billion"}],
              ["% of global oil Nigeria produces",null],
              ["Year of independence",{shaded:true,text:"1960"}],
              ["Year stable government began",null],
              ["Name of film industry",{shaded:true,text:"Nollywood"}],
              ["Regional organisation Nigeria leads",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Location" folio="6B.1.2">
        <Activity num={2} kind="Sort It" title="Regional or global importance?" spec="Spec 5.5b">
          <SortIt id="s6b-1-sort" headLeft="Regionally Important (Africa)" headRight="Globally Important (Worldwide)"
            bank={[
              "Population of 220 million","Largest economy in Africa",
              "8% of global oil","Leads ECOWAS",
              "Nollywood — 3rd largest film industry","Port access for landlocked neighbours",
              "China invests for raw materials","Market for global brands like McDonald's",
            ]} rows={4} />
        </Activity>
        <Activity num={3} kind="True or False" title="Nigeria facts" spec="Spec 5.4b">
          <WkTable id="s6b-1-tf" head={["Statement","T/F","Correction"]}
            colWidths={["54%","10%",null]}
            rows={[
              ["Nigeria is located in East Africa.",null,null],
              ["Nigeria's population is the largest in Africa.",null,null],
              ["Nigeria gained independence from France in 1960.",null,null],
              ["Nigeria is a member of OPEC.",null,null],
              ["Nollywood is the largest film industry in the world.",null,null],
              ["Nigeria's government has been stable since 1999.",null,null],
              ["By 2050, Nigeria's population will be 390m.",null,null],
              ["Nigeria has the largest military in West Africa.",null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Location" folio="6B.1.3">
        <Activity num={4} kind="Exam Practice" title="Location & importance" spec="Spec 5.5">
          <ExamTip>For "describe the location" — compass directions, neighbouring countries, oceans and latitude. 4-mark "explain" — aim for 2 developed points.</ExamTip>
          <ExamQuestion id="s6b-1-eq1" lines={5} prompt="Describe the location of Nigeria." marks={2} />
          <ExamQuestion id="s6b-1-eq2" lines={8} prompt="Explain why Nigeria is important at a global scale." marks={4} />
        </Activity>
      </Page>

      {/* --- 6B.2 CORE & PERIPHERY --- */}
      <Page paper={P} running="Section 6B · Core & Periphery" folio="6B.2.1">
        <SubsectionHeader num={2} title="Core & Periphery Regions in Nigeria" spec="Spec 5.5c" />
        <KeyKnowledge items={[
          "<strong>Core</strong> — most economically developed region; most wealth, highest density, best infrastructure.",
          "<strong>Periphery</strong> — less developed: fewer jobs, lower wages, less infrastructure.",
          "In Nigeria, the core is the <strong>South</strong> (especially Lagos and the Niger Delta).",
          "Lagos State avg wealth ~$12,000 (highest). Kano (N) ~$6,000. Abuja FCT ~$9,000 — second core.",
          "Lagos: Nigeria's largest city, 15m+ people — a global megacity.",
          "North-South divide driven by oil, port access and colonial history.",
          "Periphery suffers poor roads, less electricity, fewer hospitals/schools.",
          "Core areas attract migrants from periphery — rural-urban migration.",
        ]} stats="Lagos avg $12,000 · Kano avg $6,000 · Abuja avg $9,000 · Lagos population 15m+" />
        <Activity num={1} kind="Match-Up" title="Core and periphery" spec="Spec 5.5c">
          <MatchTable id="s6b-2-match"
            left={["Core","Periphery","Rural-urban migration","Infrastructure","Population density","Lagos","Abuja","Multiplier effect"]}
            right={[
              "The most economically developed area of a country",
              "Less developed region with fewer jobs and services",
              "Movement of people from the countryside to cities",
              "Transport, roads, airports, power — physical systems",
              "Number of people per square kilometre",
              "Nigeria's largest city; GDP ~$12,000 per person",
              "Nigeria's capital city; average wealth ~$9,000",
              "When one investment creates further economic growth",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Core & Periphery" folio="6B.2.2">
        <Activity num={2} kind="Completion" title="Regional wealth" spec="Spec 5.5c">
          <WkTable id="s6b-2-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Core region of Nigeria",{shaded:true,text:"The South"}],
              ["State with highest average wealth",null],
              ["Average wealth in Lagos State (USD)",{shaded:true,text:"$12,000"}],
              ["Average wealth in Kano State (USD)",null],
              ["Second core area (capital city)",{shaded:true,text:"Abuja"}],
              ["Feature of periphery regions",null],
              ["Main reason the South is richer",{shaded:true,text:"Oil production and port access"}],
              ["Process where people move to core areas",null],
            ]} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Core and periphery" spec="Spec 5.5c">
          <MCQ id="s6b-2-mcq" items={[
            { q: "Which city is Nigeria's economic core?", opts: ["Abuja","Kano","Lagos","Port Harcourt"] },
            { q: "Average wealth per person in Lagos State?", opts: ["$6,000","$9,000","$12,000","$15,000"] },
            { q: "What is the periphery?", opts: ["The most developed region","The capital city","A less developed, outer region","A coastal area"] },
            { q: "Which is a feature of a periphery area?", opts: ["Many airports","High population density","Low levels of infrastructure","High average salaries"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Core & Periphery" folio="6B.2.3">
        <Activity num={4} kind="Exam Practice" title="Core and periphery" spec="Spec 5.5">
          <ExamTip>"Assess" needs balance — reasons FOR and AGAINST, then an overall judgement. 8 marks → 3–4 developed paragraphs with named examples.</ExamTip>
          <ExamQuestion id="s6b-2-eq1" lines={6} prompt="Explain why core and periphery regions exist in Nigeria." marks={4} />
          <ExamQuestion id="s6b-2-eq2" lines={16}
            prompt="Assess the factors that have influenced the growth of core and peripheral areas in Nigeria." marks={8} />
        </Activity>
      </Page>

      {/* --- 6B.3 ECONOMIC STRUCTURE --- */}
      <Page paper={P} running="Section 6B · Economic Structure" folio="6B.3.1">
        <SubsectionHeader num={3} title="Economic Structure and Changing Industry" spec="Spec 5.6a" />
        <KeyKnowledge items={[
          "<strong>Primary</strong> — raw materials (farming, mining, fishing). Employs <strong>35.9%</strong>.",
          "<strong>Secondary</strong> — manufacturing. Employs <strong>14.3%</strong>.",
          "<strong>Tertiary</strong> — services (retail, health, education, transport). ~<strong>49%</strong>.",
          "<strong>Quaternary</strong> — knowledge (ICT, research, finance).",
          "<strong>TNC</strong> — company with operations in more than one country.",
          "Nigeria shifting from agricultural (primary) to industrial (secondary/tertiary) economy.",
          "Telecoms: <1m landline users (1990) → 115m+ mobile customers.",
          "Nollywood contributes significantly to GDP — 3rd largest globally.",
          "Retail & wholesale = 2nd largest employment sector.",
          "<strong>Public investment</strong> = government money. <strong>Private investment</strong> = private financial backers.",
        ]} stats="Primary 35.9% · Secondary 14.3% · Tertiary ~49% · Mobile users 115m+" />
        <Activity num={1} kind="Match-Up" title="Economic sectors" spec="Spec 5.6a">
          <MatchTable id="s6b-3-match"
            left={["Primary sector","Secondary sector","Tertiary sector","Quaternary sector","TNC","Public investment","Private investment","Multiplier effect"]}
            right={[
              "Extracting raw materials — farming, mining, fishing",
              "Manufacturing — turning raw materials into products",
              "Services — retail, health, education, transport",
              "Knowledge-based industries — ICT, research, finance",
              "A company with operations in more than one country",
              "Government money invested into businesses",
              "Money invested by private financial backers",
              "When one investment leads to further economic growth",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Economic Structure" folio="6B.3.2">
        <Activity num={2} kind="Fill in the Blanks" title="Economic change" spec="Spec 5.6a">
          <FillBlanks id="s6b-3-blanks"
            bank={["primary","secondary","tertiary","TNC","Nollywood","telecommunications","agriculture","GDP"]}
            items={[
              ["Nigeria is moving from a ", null, " (farming) economy towards a ", null, " (industrial) economy."],
              ["Shell is an example of a ", null, " — a company that operates in many countries."],
              ["The ", null, " sector includes services like shops, healthcare, and transport."],
              [null, " is Nigeria's film industry and is the 3rd largest in the world."],
              ["In Nigeria, ", null, " employs 35.9% of the workforce."],
              [null, " has grown rapidly — from fewer than 1m users to 115m mobile customers."],
              ["Over half of Nigeria's ", null, " now comes from manufacturing industries."],
            ]} />
        </Activity>
        <Activity num={3} kind="Cause and Effect" title="Changing economic structure" spec="Spec 5.6a">
          <WkTable id="s6b-3-ce" head={["Cause / Factor","+/−","Effect"]}
            colWidths={["38%","10%",null]}
            rows={[
              ["Rapid growth of telecommunications","+",null],
              ["Nollywood film industry growth","+",null],
              ["Small businesses entering the formal economy","+",null],
              ["Overreliance on oil for export earnings","−",null],
              ["Rural farming communities losing workers to cities","−",null],
              ["Foreign TNCs extracting profits overseas","−",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Economic Structure" folio="6B.3.3">
        <Activity num={4} kind="Exam Practice" title="Economic structure" spec="Spec 5.6">
          <ExamTip>Use % data when describing employment structure. For "explain" — give a reason AND its effect on development.</ExamTip>
          <ExamQuestion id="s6b-3-eq1" lines={6} prompt="Describe the employment structure of Nigeria. Use data in your answer." marks={3} />
          <ExamQuestion id="s6b-3-eq2" lines={8} prompt="Explain how Nigeria's economic structure has changed in recent years." marks={4} />
        </Activity>
      </Page>

      {/* --- 6B.4 TRADE & AID --- */}
      <Page paper={P} running="Section 6B · Trade & Aid" folio="6B.4.1">
        <SubsectionHeader num={4} title="Trade & Aid in Nigeria" spec="Spec 5.6b" />
        <KeyKnowledge items={[
          "<strong>Imports</strong> — goods/services BOUGHT. <strong>Exports</strong> — SOLD.",
          "<strong>Trade surplus</strong>: exports &gt; imports. <strong>Trade deficit</strong>: imports &gt; exports.",
          "<strong>Exports total ~$55.6bn.</strong> Top buyers: India $10.8bn · Spain $6.7bn · Netherlands $6.3bn.",
          "<strong>Imports total ~$52.4bn.</strong> Top sellers: China $20.1bn · Netherlands $5.9bn · India $4.8bn.",
          "Nigeria typically runs a <strong>trade surplus</strong> — exports (mainly oil) exceed imports.",
          "<strong>Oil ~90%</strong> of export earnings; over 70% of government revenue.",
          "<strong>Aid ~$2.5bn/year.</strong> Top donors: USA $719m · UK $420m · Germany $300m.",
          "Aid funds education, healthcare, water supply, sanitation.",
        ]} stats="Exports $55.6bn · Imports $52.4bn · Oil = 90% of exports · Aid $2.5bn/yr" />
        <Activity num={1} kind="Completion" title="Trade & aid key terms" spec="Spec 5.6b">
          <WkTable id="s6b-4-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["44%",null]}
            rows={[
              ["Imports",null],
              ["Exports",null],
              ["Trade surplus",{shaded:true,text:"When exports are greater than imports"}],
              ["Trade deficit",null],
              ["Nigeria's total exports",{shaded:true,text:"$55.6 billion"}],
              ["Nigeria's largest import partner",null],
              ["% of exports that is oil",{shaded:true,text:"~90%"}],
              ["USA's aid to Nigeria",null],
              ["Total aid Nigeria receives",{shaded:true,text:"$2.5 billion"}],
              ["Main uses of aid in Nigeria",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Trade & Aid" folio="6B.4.2">
        <Activity num={2} kind="True or False" title="Trade & aid" spec="Spec 5.6b">
          <WkTable id="s6b-4-tf" head={["Statement","T/F","Correction"]}
            colWidths={["54%","10%",null]}
            rows={[
              ["Nigeria usually has a trade deficit.",null,null],
              ["Oil makes up around 90% of Nigeria's export earnings.",null,null],
              ["China is Nigeria's largest import partner.",null,null],
              ["The UK provides more aid than the USA to Nigeria.",null,null],
              ["Nigeria's exports are worth more than its imports.",null,null],
              ["Aid is only used for healthcare in Nigeria.",null,null],
              ["India is one of Nigeria's top export destinations.",null,null],
            ]} />
        </Activity>
        <Activity num={3} kind="Cause and Effect" title="Trade & aid" spec="Spec 5.6b">
          <WkTable id="s6b-4-ce" head={["Cause / Factor","+/−","Effect"]}
            colWidths={["44%","10%",null]}
            rows={[
              ["Oil makes up 90% of exports","+",null],
              ["USA provides $719m in aid for healthcare/education","+",null],
              ["Over-reliance on oil prices","−",null],
              ["Trade surplus — exports exceed imports","+",null],
              ["China sells $20.1bn of goods to Nigeria","−",null],
              ["Aid supports sanitation and water supply","+",null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Trade & Aid" folio="6B.4.3">
        <Activity num={4} kind="Exam Practice" title="Trade & aid" spec="Spec 5.6">
          <ExamTip>Use specific figures ($55.6bn etc.) for higher marks. "Evaluate" needs positives, negatives and a conclusion.</ExamTip>
          <ExamQuestion id="s6b-4-eq1" lines={7} prompt="Explain how trade helps Nigeria to develop." marks={4} />
          <ExamQuestion id="s6b-4-eq2" lines={14} prompt="Evaluate the importance of aid to Nigeria's development." marks={8} />
        </Activity>
      </Page>

      {/* --- 6B.5 INEQUALITY --- */}
      <Page paper={P} running="Section 6B · Inequality" folio="6B.5.1">
        <SubsectionHeader num={5} title="Inequality and Social Development" spec="Spec 5.6d–e" />
        <KeyKnowledge items={[
          "<strong>Social inequality</strong> — wealth, housing, healthcare, education unevenly distributed.",
          "<strong>HDI</strong> — Human Development Index: income + education + life expectancy.",
          "Nigeria ranked <strong>161st of 189</strong> in HDI (2020).",
          "Life expectancy <strong>55.2 years</strong> (global avg 72.6).",
          "Primary education compulsory — only ~70% of rural children attend. National enrolment 84%.",
          "~10% of Nigeria's middle class has significant political influence.",
          "Many rural-urban migrants work in the <strong>informal sector</strong> below the poverty line.",
          "<strong>Cycle of Deprivation:</strong> poverty → poor education → unemployment → poverty.",
          "Urban areas (Lagos) have 65%+ access to healthcare facilities.",
        ]} stats="HDI rank 161/189 · Life expectancy 55.2 yrs · Primary enrolment 84% national, ~70% rural" />
        <Activity num={1} kind="Completion" title="Inequality key facts" spec="Spec 5.6e">
          <WkTable id="s6b-5-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["HDI stands for",null],
              ["Nigeria's HDI rank (2020)",{shaded:true,text:"161st out of 189"}],
              ["Nigeria's life expectancy",null],
              ["Global average life expectancy",{shaded:true,text:"72.6 years"}],
              ["Primary school enrolment nationally",{shaded:true,text:"84%"}],
              ["% of rural children attending school",null],
              ["% of Lagos residents with healthcare access",{shaded:true,text:"Over 65%"}],
              ["Workers in the informal sector are…",null],
              ["The Cycle of Deprivation links poverty to",{shaded:true,text:"Poor education → unemployment → poverty"}],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Inequality" folio="6B.5.2">
        <Activity num={2} kind="MCQ Checkpoint" title="Inequality" spec="Spec 5.5c">
          <MCQ id="s6b-5-mcq" items={[
            { q: "What does HDI stand for?", opts: ["Human Development Index","Health and Development Indicator","Human Deprivation Index","Housing Development Index"] },
            { q: "Nigeria's life expectancy?", opts: ["72.6 years","65.4 years","55.2 years","45.8 years"] },
            { q: "What is social inequality?", opts: ["Uneven distribution of wealth and resources","Differences in political parties","Variation in climate","The gap between imports and exports"] },
            { q: "Nigeria's HDI rank in 2020?", opts: ["100th","130th","161st","189th"] },
          ]} />
        </Activity>
        <Activity num={3} kind="Draw and Label" title="Population pyramid" spec="Spec 5.6d">
          
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Inequality" folio="6B.5.3">
        <Activity num={4} kind="Exam Practice" title="Inequality" spec="Spec 5.6">
          <ExamTip>Link cause to effect. "Because rural schools are underfunded, children receive a poor education, meaning they struggle to find well-paid work, increasing poverty."</ExamTip>
          <ExamQuestion id="s6b-5-eq1" lines={7} prompt="Explain why social inequalities exist between urban and rural areas in Nigeria." marks={4} />
          <ExamQuestion id="s6b-5-eq2" lines={9} prompt="Explain how inequality in Nigeria can be reduced." marks={6} />
        </Activity>
      </Page>

      {/* --- 6B.6 GEOPOLITICS --- */}
      <Page paper={P} running="Section 6B · Geopolitics" folio="6B.6.1">
        <SubsectionHeader num={6} title="The Geopolitics of Nigeria" spec="Spec 5.7a" />
        <KeyKnowledge items={[
          "<strong>Geopolitics</strong> — influence of politics, economics, military and geography on a country.",
          "Nigeria is a member of the <strong>African Union</strong>, the UN, and <strong>ECOWAS</strong>.",
          "Played a key role in peacekeeping in <strong>Liberia and Sierra Leone</strong> through ECOMOG.",
          "Has the largest military in West Africa.",
          "<strong>Bakassi Peninsula dispute</strong>: oil-rich area disputed with Cameroon, ICJ 2002 → ceded to Cameroon 2008.",
          "<strong>Lake Chad Basin</strong> shared with Niger, Chad, Cameroon — water scarcity and Boko Haram.",
          "<strong>Boko Haram</strong> active in North-East — major security threat.",
          "Military agreements: USA (counter-terrorism), UK (defence reforms), China (military hardware).",
          "Maritime boundary disputes with Equatorial Guinea and São Tomé and Príncipe.",
          "Nigeria contributes troops to UN and AU peacekeeping missions.",
        ]} />
        <Activity num={1} kind="Match-Up" title="Geopolitics terms" spec="Spec 5.7a">
          <MatchTable id="s6b-6-match"
            left={["ECOWAS","African Union (AU)","ECOMOG","Boko Haram","Bakassi Peninsula","ICJ","Lake Chad Basin","MNJTF"]}
            right={[
              "Economic Community of West African States — Nigeria leads this",
              "Continental organisation — Nigeria active in peacekeeping",
              "ECOWAS peacekeeping force — restored peace in Liberia/Sierra Leone",
              "Terrorist insurgency group active in Nigeria's North-East",
              "Oil-rich area disputed between Nigeria and Cameroon; ceded 2008",
              "International Court of Justice — resolved Bakassi dispute in 2002",
              "Shared water resource — issues of scarcity and terrorism",
              "Multinational Joint Task Force — combats terrorism across borders",
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Geopolitics" folio="6B.6.2">
        <Activity num={2} kind="Completion" title="Geopolitical relationships" spec="Spec 5.7a">
          <WkTable id="s6b-6-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Organisation Nigeria leads in West Africa",{shaded:true,text:"ECOWAS"}],
              ["Country Nigeria had a border dispute with",null],
              ["How the Bakassi dispute was resolved",{shaded:true,text:"ICJ ruling in 2002"}],
              ["Year Bakassi was ceded to Cameroon",null],
              ["Main security threat in North-East",{shaded:true,text:"Boko Haram"}],
              ["USA's military support to Nigeria",null],
              ["Countries Nigeria kept peace in",{shaded:true,text:"Liberia and Sierra Leone"}],
              ["What the MNJTF does",null],
            ]} />
        </Activity>
        <Activity num={3} kind="Sort It" title="Conflict or cooperation?" spec="Spec 5.7a">
          <SortIt id="s6b-6-sort" headLeft="Conflict / Dispute" headRight="Cooperation / Alliance"
            bank={[
              "Bakassi Peninsula dispute","Nigeria sends troops to Mali",
              "Boko Haram insurgency","USA provides military training",
              "Lake Chad water disputes","Nigeria leads ECOWAS",
              "Maritime boundary with Equatorial Guinea","China supplies military hardware",
            ]} rows={4} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Geopolitics" folio="6B.6.3">
        <Activity num={4} kind="Exam Practice" title="Geopolitics" spec="Spec 5.7">
          <ExamTip>Use PEEL: Point, Evidence (named example), Explain impact, Link to question.</ExamTip>
          <ExamQuestion id="s6b-6-eq1" lines={7} prompt="Explain how geopolitics affects Nigeria's development." marks={4} />
          <ExamQuestion id="s6b-6-eq2" lines={14} prompt="Assess the impact of territorial disputes on Nigeria." marks={8} />
        </Activity>
      </Page>

      {/* --- 6B.7 TECH --- */}
      <Page paper={P} running="Section 6B · Technology & Connectivity" folio="6B.7.1">
        <SubsectionHeader num={7} title="Technology and Connectivity" spec="Spec 5.7b" />
        <KeyKnowledge items={[
          "1990: &lt;1m landline users. <strong>2023: mobile penetration 119%</strong> — more connections than people.",
          "Currently <strong>40%</strong> of Nigeria connected to the internet.",
          "Mobile banking — <strong>Paga, Flutterwave</strong> — simplifies business transactions.",
          "E-learning — <strong>Ulesson, NOUN</strong> — reach remote areas.",
          "<strong>Telemedicine — Omomi</strong> — remote doctor consultations, especially rural.",
          "Social media powered the <strong>#EndSARS</strong> movement — civic engagement.",
          "<strong>Smart Lagos Project</strong> aims to make Lagos a digitally connected city.",
          "Nigeria linking Uganda and Malawi to its <strong>fibre optic</strong> network.",
          "Technology shifting Nigeria's economy from oil-dependence to service/ICT-led growth.",
          "Mobile penetration: 53% (2016) → 119% (2023).",
        ]} stats="Mobile penetration 119% · Internet access 40% · Mobile 2016: 53% → 2023: 119%" />
        <Activity num={1} kind="Fill in the Blanks" title="Technology in Nigeria" spec="Spec 5.7b">
          <FillBlanks id="s6b-7-blanks"
            bank={["119%","Paga","telemedicine","ICT","Ulesson","fibre optic","#EndSARS","40%"]}
            items={[
              ["In 2023, mobile phone penetration in Nigeria reached ", null, ", meaning more connections than people."],
              ["Currently ", null, " of Nigeria is connected to the internet."],
              ["Mobile banking platforms like ", null, " and Flutterwave simplify transactions."],
              [null, " is an e-learning platform that provides education to remote areas."],
              [null, " services like the Omomi app allow patients to consult doctors remotely."],
              ["The ", null, " movement showed how social media can drive civic engagement."],
              ["Nigeria is connecting Uganda and Malawi to its ", null, " network."],
              ["The government sees ", null, " as a key driver of economic development."],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Technology & Connectivity" folio="6B.7.2">
        <Activity num={2} kind="Cause and Effect" title="Technology & development" spec="Spec 5.7b">
          <WkTable id="s6b-7-ce" head={["Cause / Factor","+/−","Effect"]}
            colWidths={["38%","10%",null]}
            rows={[
              ["Mobile phone penetration reaches 119%","+",null],
              ["E-learning platforms reach remote areas","+",null],
              ["Only 40% have internet access","−",null],
              ["Mobile banking via Paga / Flutterwave","+",null],
              ["Telemedicine in rural areas (Omomi)","+",null],
              ["Digital divide between urban and rural","−",null],
            ]} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Technology" spec="Spec 5.6e">
          <MCQ id="s6b-7-mcq" items={[
            { q: "Nigeria's mobile penetration rate in 2023?", opts: ["53%","40%","85%","119%"] },
            { q: "What does Omomi provide?", opts: ["Mobile banking","Telemedicine","E-learning","Fibre optic connections"] },
            { q: "% of Nigeria connected to the internet?", opts: ["25%","40%","60%","80%"] },
            { q: "Which movement demonstrated technology's role in civic engagement?", opts: ["#BringBackOurGirls","#EndSARS","#SmartLagos","#NigeriaRises"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Technology & Connectivity" folio="6B.7.3">
        <Activity num={4} kind="Exam Practice" title="Technology & inequality" spec="Spec 5.7">
          <ExamTip>Consider different groups: rural vs urban, young vs old, men vs women — this pushes answers into Level 3.</ExamTip>
          <ExamQuestion id="s6b-7-eq1" lines={7} prompt="Explain how technology has helped Nigeria to develop. Use examples." marks={4} />
          <ExamQuestion id="s6b-7-eq2" lines={14} prompt="Evaluate how useful technology is in reducing inequality in Nigeria." marks={8} />
        </Activity>
      </Page>

      {/* --- 6B.8 RAPID DEV IMPACTS --- */}
      <Page paper={P} running="Section 6B · Rapid Development Impacts" folio="6B.8.1">
        <SubsectionHeader num={8} title="Rapid Development — Social, Economic & Environmental Impacts" spec="Spec 5.8" />
        <KeyKnowledge items={[
          "GDP $<strong>440bn</strong> — LARGEST in Africa (2023).",
          "Service sector employs ~<strong>50%</strong> of urban workforce.",
          "Primary school enrolment <strong>84%</strong> — rural areas lag.",
          "Lagos = major <strong>tech hub</strong> — attracting FDI.",
          "<strong>7,000+ oil spills</strong> in Niger Delta since 1970s.",
          "<strong>450,000 ha</strong> forest lost annually.",
          "Lagos produces <strong>10,000 tonnes</strong> of waste daily — much untreated.",
          "<strong>Makoko</strong> (Lagos) — informal settlement housing 100,000+.",
          "Rural unemployment <strong>30%+</strong>, especially in the North.",
          "<strong>Lagos-Kano railway</strong> improves transport and connectivity.",
        ]} stats="GDP $440bn · 7,000+ oil spills · 450,000 ha forest lost/yr · Makoko 100,000+ residents" />
        
        <Activity num={1} kind="Sort It" title="Positive or negative impact?" spec="Spec 5.8a">
          <SortIt id="s6b-8-sort" headLeft="Positive Impact" headRight="Negative Impact"
            bank={[
              "GDP largest in Africa at $440bn","Oil spills in Niger Delta (7,000+ since 1970s)",
              "84% primary school enrolment","Makoko slum — 100,000 in poor conditions",
              "Lagos tech hub attracting FDI","450,000 ha forest lost annually",
              "Lagos-Kano railway","30%+ rural unemployment",
              "Lagos produces 10,000t waste daily",
            ]} rows={5} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Rapid Development Impacts" folio="6B.8.2">
        <Activity num={2} kind="Completion" title="Key stats" spec="Spec 5.8a">
          <WkTable id="s6b-8-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["Nigeria's GDP (2023)",{shaded:true,text:"$440 billion"}],
              ["Annual forest loss in Nigeria",null],
              ["% urban workforce in service sector",{shaded:true,text:"~50%"}],
              ["Number of oil spills since 1970s",null],
              ["Daily waste produced by Lagos",{shaded:true,text:"10,000 tonnes"}],
              ["Population of Makoko slum",null],
              ["Rural unemployment rate",{shaded:true,text:"Over 30%"}],
              ["Primary school enrolment rate",null],
            ]} />
        </Activity>
        <Activity num={3} kind="Evaluate" title="Government responses" spec="Spec 5.8b">
          <WkTable id="s6b-8-resp" head={["Strategy","Benefit","Limitation"]}
            rows={[
              ["Universal Basic Education (UBE)","Free schooling reduces inequality",null],
              ["Niger Delta clean-up (HYPREP)",null,"Slow progress; full clean-up will take decades"],
              ["Lagos-Kano railway",null,null],
              ["National Health Insurance Scheme (NHIS)","More Nigerians can access healthcare",null],
              ["Agricultural Promotion Policy (APP)",null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Rapid Development Impacts" folio="6B.8.3">
        <Activity num={4} kind="Exam Practice" title="Rapid development" spec="Spec 5.8">
          <ExamTip>Use <strong>SEE</strong> (Social, Economic, Environmental) to structure 8-mark "evaluate" paragraphs.</ExamTip>
          <ExamQuestion id="s6b-8-eq1" lines={6} prompt="Describe the negative environmental impacts of rapid development in Nigeria." marks={3} />
          <ExamQuestion id="s6b-8-eq2" lines={14} prompt="Evaluate the impacts of rapid development on Nigeria." marks={8} />
        </Activity>
      </Page>

      {/* --- 6B.9 SHELL --- */}
      <Page paper={P} running="Section 6B · TNCs — Shell in Nigeria" folio="6B.9.1">
        <SubsectionHeader num={9} title="TNCs — Shell in Nigeria" spec="Spec 5.6c" />
        <KeyKnowledge items={[
          "<strong>TNC</strong> — company HQ in one country, operations in many.",
          "Shell = Nigeria's largest TNC — produces <strong>21%+</strong> of Nigeria's petroleum.",
          "Shell extracts (primary), refines (secondary), sells internationally (tertiary).",
          "Shell has extracted <strong>$30bn</strong> of crude oil from Ogoniland since the 1950s.",
          "Oil revenue = <strong>75%</strong> of Nigeria's economy — ¾ of that from Shell.",
          "Ogoni people live without electricity or running water despite living in the oil-producing region.",
          "<strong>MOSOP</strong> (Movement for the Survival of the Ogoni People) — led by <strong>Ken Saro-Wiwa</strong>.",
          "Ken Saro-Wiwa arrested 1994, executed <strong>1995</strong> — condemned internationally.",
          "Oil spills have reduced Ogoni life expectancy by ~<strong>10 years</strong>.",
          "<strong>HYPREP</strong> (Hydrocarbon Pollution Remediation Project) is cleaning up Ogoniland.",
        ]} stats="Shell = 21%+ of Nigeria oil · $30bn extracted from Ogoniland · Life expectancy reduced ~10 yrs" />
        <Activity num={1} kind="Completion" title="Shell case study" spec="Spec 5.6c">
          <WkTable id="s6b-9-comp" head={["Key Term / Concept","Detail"]}
            colWidths={["46%",null]}
            rows={[
              ["What is a TNC?",null],
              ["Shell's share of Nigeria's petroleum",{shaded:true,text:"Over 21%"}],
              ["Value of oil extracted from Ogoniland",null],
              ["% of Nigerian economy from oil revenue",{shaded:true,text:"75%"}],
              ["Name of the protest movement",{shaded:true,text:"MOSOP"}],
              ["Who led MOSOP?",null],
              ["Year Ken Saro-Wiwa was executed",{shaded:true,text:"1995"}],
              ["Reduction in Ogoni life expectancy",null],
              ["Project cleaning up Ogoniland",{shaded:true,text:"HYPREP"}],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · TNCs — Shell in Nigeria" folio="6B.9.2">
        <Activity num={2} kind="Evaluate" title="Shell in Nigeria" spec="Spec 5.6c">
          <WkTable id="s6b-9-eval" head={["Aspect","Benefit","Limitation"]}
            rows={[
              ["Employment","Jobs for Nigerians in oil extraction and services",null],
              ["Infrastructure investment",null,"Benefits mainly the oil industry, not local communities"],
              ["Government revenue",{shaded:true,text:"$30bn+ extracted from Ogoniland"},null],
              ["Environmental impact",null,"Oil spills reduce life expectancy by ~10 years"],
              ["Social impact on Ogoni people",null,null],
            ]} />
        </Activity>
        <Activity num={3} kind="MCQ Checkpoint" title="Shell" spec="Spec 5.7b">
          <MCQ id="s6b-9-mcq" items={[
            { q: "What % of Nigeria's petroleum does Shell produce?", opts: ["5%","10%","21%","50%"] },
            { q: "What does MOSOP stand for?", opts: ["Movement of Southern Oil Producers","Movement for the Survival of the Ogoni People","Ministry of Shell Oil Production","Movement for Social and Oil Progress"] },
            { q: "Oil spills have reduced Ogoni life expectancy by approximately:", opts: ["2 years","5 years","10 years","20 years"] },
            { q: "Shell operates across how many sectors?", opts: ["One","Two","Three (primary, secondary, tertiary)","Four"] },
          ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · TNCs — Shell in Nigeria" folio="6B.9.3">
        <Activity num={4} kind="Exam Practice" title="Shell" spec="Spec 5.6">
          <ExamTip>Structure: Para 1 = positives with evidence | Para 2 = negatives with evidence | Conclusion = overall judgement.</ExamTip>
          <ExamQuestion id="s6b-9-eq" lines={16}
            prompt="Is Shell a positive force for development in Nigeria? Use evidence to support your answer."
            marks={8} />
        </Activity>
      </Page>

      {/* --- 6B.10 TOP-DOWN VS BOTTOM-UP --- */}
      <Page paper={P} running="Section 6B · Top-Down vs Bottom-Up" folio="6B.10.1">
        <SubsectionHeader num={10} title="Top-Down vs Bottom-Up Development" spec="Spec 5.4b" />
        <KeyKnowledge items={[
          "<strong>Top-Down 1: Dangote Oil Refinery</strong> — Lekki Free Trade Zone, Lagos. Thousands of jobs; reduces fuel import costs. Risk: pollution, displacement.",
          "<strong>Top-Down 2: Lagos Light Rail</strong> — reduces congestion, improves productivity. Risk: displacement, budget overruns.",
          "<strong>Bottom-Up 1: Farmcrowdy</strong> — digital platform connecting farmers with investors. Empowers rural women, sustainable farming. Risk: digital divide.",
          "<strong>Bottom-Up 2: Lifebank</strong> — motorcycles deliver blood and oxygen to hospitals. Saves lives, reduces maternal mortality. Risk: high costs, limited reach.",
          "Top-down = larger scale impact but can cause displacement and environmental harm.",
          "Bottom-up = more sustainable, community-focused but harder to scale.",
          "Government initiatives: UBE (education), NHIS (healthcare), HYPREP (environment), APP (agriculture).",
          "Both approaches needed for balanced development.",
        ]} />
        <Activity num={1} kind="Sort It" title="Top-down or bottom-up?" spec="Spec 5.4b">
          <SortIt id="s6b-10-sort" headLeft="Top-Down" headRight="Bottom-Up"
            bank={["Dangote Oil Refinery","Farmcrowdy","Lagos Light Rail","Lifebank","Universal Basic Education","Omomi telemedicine app","HYPREP clean-up","MOSOP protests"]} rows={4} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Top-Down vs Bottom-Up" folio="6B.10.2">
        <Activity num={2} kind="Evaluate" title="Development projects" spec="Spec 5.4b">
          <WkTable id="s6b-10-eval" head={["Project","Benefit","Limitation"]}
            rows={[
              ["Dangote Oil Refinery (top-down)","Thousands of jobs; reduces fuel imports",null],
              ["Lagos Light Rail (top-down)",null,"Budget overruns; displacement"],
              ["Farmcrowdy (bottom-up)","Empowers rural farmers; sustainable farming",null],
              ["Lifebank (bottom-up)",null,"High costs; limited reach"],
              ["Government healthcare (NHIS)","More Nigerians access healthcare",null],
            ]} />
        </Activity>
        <Activity num={3} kind="True or False" title="Strategies" spec="Spec 5.4b">
          <WkTable id="s6b-10-tf" head={["Statement","T/F","Correction"]}
            colWidths={["56%","10%",null]}
            rows={[
              ["The Dangote Oil Refinery is a bottom-up development project.",null,null],
              ["Farmcrowdy connects farmers to investors through a digital platform.",null,null],
              ["Lifebank uses drones to deliver medical supplies.",null,null],
              ["Lagos Light Rail aims to reduce traffic congestion.",null,null],
              ["Top-down projects are always more effective than bottom-up.",null,null],
              ["The Dangote Refinery is located in the Lekki Free Trade Zone.",null,null],
              ["Bottom-up projects are often better at including local communities.",null,null],
            ]} />
        </Activity>
      </Page>

      <Page paper={P} running="Section 6B · Top-Down vs Bottom-Up" folio="6B.10.3">
        <Activity num={4} kind="Exam Practice" title="Strategies" spec="Spec 5.4">
          <ExamTip>"Evaluate the success" — examples of both top-down and bottom-up, positives and negatives, then overall judgement.</ExamTip>
          <ExamQuestion id="s6b-10-eq1" lines={9} prompt="Compare the advantages and disadvantages of top-down and bottom-up development in Nigeria." marks={6} />
          <ExamQuestion id="s6b-10-eq2" lines={14}
            prompt="Evaluate the success of top-down and bottom-up development strategies in Nigeria."
            marks={8} />
        </Activity>
      </Page>

      {/* --- 6B KNOWLEDGE CHECK --- */}
      <Page paper={P} running="Section 6B · Knowledge Check" folio="6B.KC.1">
        <SubsectionHeader num={11} title="Knowledge Check — 20 Questions" spec="" />
        <WkTable id="s6b-kc1" head={["#","Question","Answer","✓"]}
          colWidths={["6%","48%",null,"6%"]}
          rows={[
            ["1","Which continent is Nigeria in?",null,null],
            ["2","Approximate population?",null,null],
            ["3","Year of independence from Britain?",null,null],
            ["4","% of global oil Nigeria produces?",null,null],
            ["5","Three largest film industries in the world?",null,null],
            ["6","What does GDP stand for?",null,null],
            ["7","What does the CORE have that the periphery doesn't?",null,null],
            ["8","Nigeria's most important core city?",null,null],
            ["9","What is a TNC?",null,null],
            ["10","Oil Shell has extracted from Ogoniland since 1950s?",null,null],
          ]} />
      </Page>

      <Page paper={P} running="Section 6B · Knowledge Check" folio="6B.KC.2">
        <WkTable id="s6b-kc2" head={["#","Question","Answer","✓"]}
          colWidths={["6%","48%",null,"6%"]}
          rows={[
            ["11","What does HDI measure?",null,null],
            ["12","Nigeria's HDI rank (2020)?",null,null],
            ["13","Nigeria's life expectancy?",null,null],
            ["14","Dispute with Cameroon?",null,null],
            ["15","What does ECOWAS stand for?",null,null],
            ["16","One bottom-up development project?",null,null],
            ["17","One top-down development project?",null,null],
            ["18","Mobile penetration rate in 2023?",null,null],
            ["19","Lagos informal settlement (100,000+)?",null,null],
            ["20","What does HYPREP aim to do?",null,null],
          ]} />
        <HrOrn />
      </Page>

      <Page paper={P} running="Section 6B · RAG Self-Assessment" folio="6B.RAG.1">
        <SubsectionHeader num={12} title="RAG Self-Assessment — Nigeria" spec="" />
        <RAGTable items={[
          "Describe Nigeria's location in Africa",
          "Explain why Nigeria is important at a regional scale",
          "Explain why Nigeria is important at a global scale",
          "Define core and periphery with examples from Nigeria",
          "Explain why the North-South divide exists",
          "Define primary, secondary, tertiary and quaternary sectors",
          "Describe Nigeria's changing economic structure",
          "Define imports, exports, trade surplus, trade deficit",
          "Explain how trade helps Nigeria develop",
          "Explain how aid helps Nigeria develop",
          "Define social inequality and HDI",
        ]} />
      </Page>

      <Page paper={P} running="Section 6B · RAG Self-Assessment" folio="6B.RAG.2">
        <RAGTable items={[
          "Describe patterns of social inequality in Nigeria",
          "Define geopolitics with examples",
          "Explain Nigeria's role in ECOWAS and peacekeeping",
          "Describe the Bakassi Peninsula dispute",
          "Explain how technology helps Nigeria develop",
          "Use data about mobile phone growth in Nigeria",
          "Explain positive and negative impacts of rapid development",
          "Describe the impact of Shell on Nigeria and the Ogoni people",
          "Evaluate top-down vs bottom-up development strategies",
          'Write an 8-mark answer evaluating Nigeria\'s development',
        ]} />
      </Page>

    </React.Fragment>
  );
}
window.Section6 = Section6;
