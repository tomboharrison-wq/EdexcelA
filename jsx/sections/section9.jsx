/* SECTION 9 — Skills Appendix (All Papers) */
function Section9() {
  const P = "S";
  return (
    <React.Fragment>

      <SectionDivider paper={P} paperLabel="All papers · Skills"
        num="9"
        title="Skills Appendix"
        subtitle="Geographical, mathematical and statistical skills for Papers 1, 2 and 3."
        meta={["Edexcel A · 1GA0","Use throughout the workbook","Quick-reference"]}
        covers={[
          "OS Maps, Scale, Distance, Coordinates",
          "GIS, Satellite Images, BGS Maps, Choropleths",
          "Choosing & Reading Graphs",
          "Mean, Range, Quartiles & IQR",
          "Scatter Graphs & Lines of Best Fit",
          "Carbon & Ecological Footprints",
          "Fieldwork Reliability & Accuracy",
          "Exam Command Words & Resource Booklet Technique",
        ]}
        routine="Skills can be assessed anywhere on the Edexcel A GCSE Geography exam — return here whenever a question demands a specific technique." />

      {/* ---------- 1 OS MAPS ---------- */}
      <Page paper={P} running="Section 9 · OS Maps & Distance" folio="1.1">
        <SubsectionHeader num={1} title="OS Maps, Scale, Distance & Coordinates" spec="" />
        <WkTable id="s9-1-skills" head={["Skill","How to do it","Common exam wording"]}
          rows={[
            ["Four-figure grid reference","Read along the bottom first, then up the side. Easting then northing.","Give the four-figure grid reference for…"],
            ["Six-figure grid reference","Divide the grid square into tenths. Read easting, extra easting digit, northing, extra northing digit.","Give the six-figure grid reference for…"],
            ["Scale & distance","Measure the map distance, then use the scale to convert. Include units.","Calculate the distance between…"],
            ["Contours","Close contours = steep slope; wide = gentle. Values show height.","Describe the relief of the area shown."],
            ["Direction","Use compass points. Precise: north-east / south-west, never 'up/down'.","Describe the direction of flow / movement."],
          ]} />
        <Activity num={1} kind="Practice" title="Quick tasks" spec="">
          <WkTable id="s9-1-prac" head={["Practice task","Answer space"]}
            colWidths={["50%",null]}
            rows={[
              ["1. Explain how contour spacing shows slope steepness.",null],
              ["2. Write a sentence describing relief using height and contour spacing.",null],
              ["3. If 4 cm on a map represents 2 km, what does 7 cm represent?",null],
              ["4. Describe the route of a river using compass directions.",null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 2 GIS ---------- */}
      <Page paper={P} running="Section 9 · GIS & Map Types" folio="2.1">
        <SubsectionHeader num={2} title="GIS, Satellite Images, BGS Maps & Choropleths" spec="" />
        <WkTable id="s9-2-sources" head={["Source","What it shows","How to use it"]}
          rows={[
            ["GIS map","Layered spatial data — land use, flood risk, services, deprivation, forest loss","Compare layers; identify spatial patterns"],
            ["Satellite image","Land cover, urban growth, vegetation, coastline change, river patterns","Identify change over time and visible features"],
            ["BGS geology map","Rock types and geological boundaries","Link geology to relief, erosion, landforms, resources"],
            ["Choropleth map","Data shaded by area — development, rainfall, density, water stress","Describe highest/lowest, clustered patterns, anomalies"],
            ["Flow-line map","Movement of people, goods, trade, aid. Thicker lines = larger flows.","Describe direction, volume, links between places"],
          ]} />
        <WkTable id="s9-2-cmd" head={["Command word","Use this answer structure"]}
          colWidths={["28%",null]}
          rows={[
            ["Describe the pattern","Overall pattern → highest/lowest areas → exceptions"],
            ["Suggest reasons","Link pattern to physical, economic, political or social causes"],
            ["Assess usefulness","What the source shows well + what it does NOT show"],
          ]} />
      </Page>

      {/* ---------- 3 GRAPHS ---------- */}
      <Page paper={P} running="Section 9 · Graphs" folio="3.1">
        <SubsectionHeader num={3} title="Choosing and Reading Graphs" spec="" />
        <WkTable id="s9-3-graphs" head={["Graph type","Best used for…","Geography examples"]}
          rows={[
            ["Line graph","Change over time","Climate change, population growth, energy demand"],
            ["Bar chart","Comparing categories","Employment sectors, impacts, resource use by country"],
            ["Compound / stacked bar","Showing parts of a total","Energy mix, employment structure"],
            ["Pie chart","Proportions of a whole","Energy mix, land-use percentages"],
            ["Scatter graph","Relationship between two variables","GDP vs life expectancy, distance from sea vs pebble size"],
            ["Population pyramid","Age-sex structure","Development and demographic change"],
            ["Climate graph","Monthly temperature and rainfall","Biome characteristics, drought risk"],
          ]} />
        <Activity num={1} kind="Practice" title="Choose the best graph" spec="">
          <WkTable id="s9-3-prac" head={["Data situation","Best graph","Reason"]}
            rows={[
              ["Temperature from 1900–2020",null,null],
              ["Energy mix percentages",null,null],
              ["Comparing rainfall in 5 locations",null,null],
              ["GDP and life expectancy for 20 countries",null,null],
              ["Age structure of Nigeria",null,null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 4 STATS ---------- */}
      <Page paper={P} running="Section 9 · Statistics" folio="4.1">
        <SubsectionHeader num={4} title="Mean, Range, Quartiles & IQR" spec="" />
        <WkTable id="s9-4-stats" head={["Statistic","How to calculate","What it tells you"]}
          rows={[
            ["Mean","Add all values, divide by count","The average"],
            ["Median","Order values, find the middle","Central value; less affected by extremes"],
            ["Mode","Most common value","Most frequent category"],
            ["Range","Highest − lowest","Spread of the data"],
            ["Lower quartile (Q1)","Middle of lower half","¼ of values below this"],
            ["Upper quartile (Q3)","Middle of upper half","¾ of values below this"],
            ["Interquartile range (IQR)","Q3 − Q1","Spread of middle 50%; extremes less effect"],
          ]} />
        <Activity num={1} kind="Practice" title="Data: 2, 3, 4, 5, 7, 8, 10, 14" spec="">
          <WkTable id="s9-4-prac" head={["Practice","Answer"]}
            colWidths={["56%",null]}
            rows={[
              ["Calculate the mean.",null],
              ["Calculate the median.",null],
              ["Calculate the range.",null],
              ["Find Q1 and Q3.",null],
              ["Calculate the IQR.",null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 5 SCATTER ---------- */}
      <Page paper={P} running="Section 9 · Scatter Graphs" folio="5.1">
        <SubsectionHeader num={5} title="Scatter Graphs & Lines of Best Fit" spec="" />
        <NoteP>Scatter graphs show the relationship between two variables. <strong>Positive</strong> correlation — both increase together. <strong>Negative</strong> — one rises as the other falls. <strong>No correlation</strong> — no clear relationship.</NoteP>
        <WkTable id="s9-5-skills" head={["Skill","How to do it"]}
          colWidths={["28%",null]}
          rows={[
            ["Plotting points","x-axis: independent variable. y-axis: dependent. Plot each pair carefully."],
            ["Describing correlation","Use positive, negative, weak, strong or no correlation."],
            ["Line of best fit","Draw through the middle of the pattern with roughly equal points either side. NOT dot-to-dot."],
            ["Using anomalies","Identify points that don't fit and suggest why."],
            ["Making a conclusion","State the relationship; support with figures."],
          ]} />
        <Activity num={1} kind="Sentence starters" title="Scatter graph analysis" spec="">
          <WkTable id="s9-5-prac" head={["Sentence starter","Finish the sentence"]}
            colWidths={["50%",null]}
            rows={[
              ["There is a positive/negative correlation because…",null],
              ["One anomaly is…",null],
              ["The data suggests that…",null],
              ["However, the relationship may not be reliable because…",null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 6 FOOTPRINTS ---------- */}
      <Page paper={P} running="Section 9 · Footprints & Calculations" folio="6.1">
        <SubsectionHeader num={6} title="Carbon Footprints, Ecological Footprints & Resource Calculations" spec="" />
        <WkTable id="s9-6-skills" head={["Skill","Definition / method","Exam link"]}
          rows={[
            ["Carbon footprint","Total GHG emissions caused directly and indirectly by a person, place or activity","Energy management, UK challenges, sustainability"],
            ["Ecological footprint","Land/water needed to provide resources and absorb waste for a person/population","Sustainable cities, resource management, UK challenges"],
            ["Percentage change","(new − old) ÷ old × 100","Population, resource consumption, erosion rates"],
            ["Per capita calculation","Total ÷ population","GDP per capita, energy per person"],
          ]} />
        <Activity num={1} kind="Practice" title="Calculations" spec="">
          <WkTable id="s9-6-prac" head={["Practice","Working space"]}
            colWidths={["56%",null]}
            rows={[
              ["A country emits 400 million tonnes of CO₂ and has 50 million people. Emissions per capita?",null],
              ["Energy use rises from 200 units to 260 units. Percentage increase?",null],
              ["A city has an ecological footprint of 4.8 gha/person. Another has 2.4. How many times larger is the first?",null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 7 FIELDWORK SKILLS ---------- */}
      <Page paper={P} running="Section 9 · Fieldwork Skills" folio="7.1">
        <SubsectionHeader num={7} title="Fieldwork Skills — Reliability, Accuracy & Evaluation" spec="" />
        <WkTable id="s9-7-skills" head={["Term","Meaning","How to improve it"]}
          rows={[
            ["Reliability","How representative and repeatable the data is","More sites, repeat measurements, larger sample, consistent method"],
            ["Accuracy","How close measurements are to the true value","Correct equipment, careful reading, training, avoid parallax error"],
            ["Validity","Whether the method actually tests the enquiry question","Choose methods that directly match the hypothesis"],
            ["Primary data","Data collected by the student in the field","Plan carefully; use consistent sampling"],
            ["Secondary data","Data collected by someone else","Use up-to-date, trustworthy sources; compare with primary"],
          ]} />
        <Activity num={1} kind="Sentence starters" title="Evaluation" spec="">
          <WkTable id="s9-7-prac" head={["Sentence starter","Complete it"]}
            colWidths={["48%",null]}
            rows={[
              ["One limitation of our method was…",null],
              ["This affected reliability because…",null],
              ["A realistic improvement would be…",null],
              ["This would make the enquiry better because…",null],
            ]} />
        </Activity>
      </Page>

      {/* ---------- 8 COMMAND WORDS ---------- */}
      <Page paper={P} running="Section 9 · Command Words" folio="8.1">
        <SubsectionHeader num={8} title="Exam Command Words & Resource Booklet Technique" spec="" />
        <WkTable id="s9-8-cmd" head={["Command word","What it wants","Student action"]}
          rows={[
            ["Describe","Say what something is like","Use patterns, figures and map evidence"],
            ["Explain","Give reasons why","Use connectives: because, therefore, this means"],
            ["Compare","Say similarities and differences","Use both places/data sets in every paragraph"],
            ["Assess","Weigh up importance and make a judgement","Evidence for both sides → decide overall"],
            ["Evaluate","Judge success, usefulness or effectiveness","Positives + negatives → conclude"],
          ]} />
        <div className="eyebrow" style={{marginTop:"14px"}}>Resource booklet routine</div>
        <WkTable id="s9-8-rb" head={["Step","What to do"]}
          colWidths={["36%",null]}
          rows={[
            ["1. Read the question first","Underline command word, topic and number of marks"],
            ["2. Find the correct figure","Check the figure number carefully"],
            ["3. Extract evidence","Use figures, names, dates or map evidence"],
            ["4. Link to own knowledge","Don't just copy the figure — explain using geography"],
            ["5. Finish with judgement","For assess/evaluate, clearly decide overall"],
          ]} />
        <HrOrn />
        <NoteP><em>End of workbook.</em> Return to any topic that you rated R or A in a RAG self-assessment — re-read the Key Knowledge, redo the activity in a new colour, and re-rate yourself in green when you've nailed it.</NoteP>
      </Page>

    </React.Fragment>
  );
}
window.Section9 = Section9;
