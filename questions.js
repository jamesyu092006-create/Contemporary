const QUESTIONS = [
  {
    "lesson": "Lesson 1",
    "q": "During which Stone Age era did humans live in small nomadic groups and rely mainly on hunting and gathering?",
    "o": [
      "Paleolithic Era",
      "Mesolithic Era",
      "Neolithic Era",
      "Industrial Era"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 1",
    "q": "Which era served as the transition from hunting and gathering to farming?",
    "o": [
      "Paleolithic Era",
      "Mesolithic Era",
      "Neolithic Era",
      "Bronze Age"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "Which development is associated with the Neolithic Era?",
    "o": [
      "Only nomadic hunting",
      "The invention of the telegraph",
      "Permanent settlements and animal domestication",
      "The creation of the United Nations"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 1",
    "q": "What was the Silk Road?",
    "o": [
      "A military alliance in Europe",
      "A single road built by Rome",
      "A modern shipping company",
      "A network of trade routes connecting East Asia and Europe"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 1",
    "q": "The Spice Routes mainly linked Asia and Europe through what kind of routes?",
    "o": [
      "Sea routes",
      "Air routes",
      "Railways",
      "Underground tunnels"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 1",
    "q": "The Age of Exploration and Colonization is generally placed between which centuries?",
    "o": [
      "5th to 8th century",
      "15th to 18th century",
      "10th to 12th century",
      "19th to 21st century"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 1",
    "q": "When did the First Wave of Globalization occur according to the module?",
    "o": [
      "1914–1945",
      "1945–1980s",
      "1860–1914",
      "1990–2000"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 1",
    "q": "Which institutions were highlighted as supporting global economic integration during the Second Wave of Globalization?",
    "o": [
      "ASEAN and NATO",
      "WHO and UNICEF",
      "OPEC and APEC",
      "IMF and World Bank"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 2",
    "q": "What does the global interstate system refer to?",
    "o": [
      "A dynamic network of relations among sovereign states",
      "A single world government",
      "A system limited to trade only",
      "A network of private companies"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Which historical settlement established the ideas of state sovereignty and non-interference?",
    "o": [
      "Treaty of Versailles",
      "Peace of Westphalia",
      "Bangkok Declaration",
      "Bretton Woods Agreement"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 2",
    "q": "What is unipolarity?",
    "o": [
      "Two powers dominate equally",
      "Several powers dominate",
      "One great power dominates the international system",
      "No state has power"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 2",
    "q": "What is bipolarity?",
    "o": [
      "One dominant state",
      "Several regional powers only",
      "No major powers exist",
      "Two superpowers dominate the international system"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 2",
    "q": "Which theory emphasizes power, survival, and national interest in international politics?",
    "o": [
      "Realism",
      "Liberal institutionalism",
      "Functionalism",
      "Symbolic interactionism"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 2",
    "q": "Liberal institutionalism emphasizes the importance of what?",
    "o": [
      "Isolation from other states",
      "International institutions and cooperation",
      "Military power alone",
      "Eliminating global organizations"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 2",
    "q": "Who developed the world-systems theory discussed in the module?",
    "o": [
      "Karl Marx",
      "Saskia Sassen",
      "Immanuel Wallerstein",
      "Adam Smith"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 2",
    "q": "Which set lists the four fundamental elements of a state?",
    "o": [
      "Trade, army, religion, language",
      "Population, currency, culture, technology",
      "Land, exports, laws, alliances",
      "People, territory, sovereignty, government"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 3",
    "q": "According to the IMF definition in the module, the global economy includes the worldwide flow of what?",
    "o": [
      "Goods, services, capital, and people",
      "Only money",
      "Only imported goods",
      "Only labor"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "What is international trade?",
    "o": [
      "Trade only within one city",
      "Exchange of goods and services between countries",
      "Exchange of votes between governments",
      "Movement of people without goods"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 3",
    "q": "Which of the following is a tariff?",
    "o": [
      "A total ban on all exports",
      "A limit on population",
      "A tax imposed on imported goods",
      "A currency exchange system"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 3",
    "q": "What is a quota in international trade?",
    "o": [
      "A tax on salaries",
      "A free trade agreement",
      "A type of currency",
      "A limit on the quantity of goods that may be imported or exported"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 3",
    "q": "Which is an example of a non-tariff barrier?",
    "o": [
      "Product standards and complex customs procedures",
      "Income tax",
      "Population policy",
      "Tourist visa"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 3",
    "q": "What may happen to international trade during a global economic slowdown?",
    "o": [
      "Trade always doubles",
      "Demand for imported goods and services may decrease",
      "All tariffs disappear",
      "Currencies stop changing"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 3",
    "q": "Which factors were identified as helping the growth of the global economy?",
    "o": [
      "Isolation and closed borders",
      "Less communication",
      "Reduced trade barriers, technology, and greater interdependence",
      "Eliminating international trade"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 3",
    "q": "Which three areas are described as interconnected in the lesson introduction?",
    "o": [
      "Religion, sports, and weather",
      "Language, art, and music only",
      "Agriculture, elections, and tourism only",
      "Trade, labor, and technology"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 4",
    "q": "What is regionalism?",
    "o": [
      "Coordination and cooperation among states in a geographic region",
      "Complete isolation of neighboring states",
      "A system where only one country makes policy",
      "A type of private business"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "What is regionalization?",
    "o": [
      "The breakup of all regional ties",
      "Growing interaction and economic interdependence among neighboring countries",
      "The creation of one global government",
      "The end of cross-border trade"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 4",
    "q": "Which organization is used in the module as an example of regionalism in Asia?",
    "o": [
      "NATO",
      "OPEC",
      "ASEAN",
      "G7"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 4",
    "q": "Which organization is used as an example of regionalization in the Asia-Pacific?",
    "o": [
      "WHO",
      "UNICEF",
      "IMF",
      "APEC"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 4",
    "q": "Which characteristic of regionalism refers to strong pride and loyalty to one's region?",
    "o": [
      "Local identity",
      "Neutrality",
      "Globalization",
      "Privatization"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 4",
    "q": "Which characteristic of regionalism involves greater economic or political self-governance?",
    "o": [
      "Dependence",
      "Autonomy",
      "Isolation",
      "Uniformity"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 4",
    "q": "How does the module describe globalization in relation to regionalism?",
    "o": [
      "They are exactly the same",
      "They can never occur together",
      "They are different but interrelated concepts",
      "Regionalism completely prevents globalization"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 4",
    "q": "When was ASEAN established through the Bangkok Declaration?",
    "o": [
      "June 26, 1945",
      "January 1, 2000",
      "September 11, 2001",
      "August 8, 1967"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 5",
    "q": "What does media refer to in the module?",
    "o": [
      "Means used to communicate, store, and disseminate information, ideas, and entertainment",
      "Only printed newspapers",
      "Only television programs",
      "Government offices"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "How is social media described in the module?",
    "o": [
      "A one-way printed publication",
      "Platforms that host user-generated content and allow user interaction",
      "A private banking network",
      "A transportation system"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 5",
    "q": "Which platforms are mentioned as examples of popular social media?",
    "o": [
      "Word, Excel, PowerPoint, and Paint",
      "Netflix, Spotify, Zoom, and Maps",
      "Facebook, TikTok, Instagram, and X",
      "Chrome, Firefox, Edge, and Safari"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 5",
    "q": "As of January 2025, about what percentage of the world's population was estimated to be using social media?",
    "o": [
      "20%",
      "35%",
      "95%",
      "64%"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 5",
    "q": "In anthropology, culture refers to what?",
    "o": [
      "Material and non-material aspects of human living",
      "Only traditional clothing",
      "Only religious beliefs",
      "Only entertainment"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 5",
    "q": "One promise of globalization for culture identified in the module is:",
    "o": [
      "Complete elimination of local culture",
      "Cultural enrichment and exchange",
      "No communication between cultures",
      "The end of cultural creativity"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 5",
    "q": "In theocratic societies such as Saudi Arabia, Iran, and to some extent Vatican City, religion may serve as:",
    "o": [
      "A replacement for all economic activity",
      "A ban on public institutions",
      "A foundation for governance",
      "A system unrelated to government"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 6",
    "q": "Why are cities described as both sites and engines of globalization?",
    "o": [
      "Cities are isolated from global activity",
      "Only national governments experience globalization",
      "Cities do not affect culture or production",
      "Global processes occur in cities, and cities also drive global flows of culture and business"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 6",
    "q": "Which city is identified as the seat of American political power?",
    "o": [
      "Washington, D.C.",
      "New York",
      "Los Angeles",
      "San Francisco"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 6",
    "q": "Which city houses the headquarters of ASEAN?",
    "o": [
      "Tokyo",
      "Jakarta",
      "Seoul",
      "Bangkok"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 6",
    "q": "Which city is cited as a major global supply-chain hub with an extremely busy container port?",
    "o": [
      "Boston",
      "Copenhagen",
      "Shanghai",
      "Manchester"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 6",
    "q": "What is gentrification?",
    "o": [
      "Moving factories outside cities",
      "Building more public parks",
      "Reducing the cost of housing",
      "Displacing poorer residents in favor of newer, wealthier residents"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 6",
    "q": "According to the module, cities occupy about 2% of Earth's land but consume nearly what share of global energy?",
    "o": [
      "80%",
      "10%",
      "25%",
      "50%"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 6",
    "q": "Who popularized the term 'global city' in the 1990s?",
    "o": [
      "Immanuel Wallerstein",
      "Saskia Sassen",
      "Hans Morgenthau",
      "Talcott Parsons"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 7",
    "q": "What is demography?",
    "o": [
      "The study of weather",
      "The study of trade agreements",
      "The study of population and its characteristics",
      "The study of cities only"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 7",
    "q": "How does the module define migration?",
    "o": [
      "Traveling for one afternoon",
      "Buying goods from another country",
      "Using social media abroad",
      "Crossing the boundary of a political or administrative unit for a certain minimum period"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 7",
    "q": "What is internal migration?",
    "o": [
      "Moving from one area to another within the same country",
      "Crossing from one country to another",
      "Returning goods to a store",
      "Working online for another country"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 7",
    "q": "What is international migration?",
    "o": [
      "Moving to another barangay",
      "Crossing national frontiers from one state to another",
      "Traveling within one province",
      "Changing schools in one city"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 7",
    "q": "Which best describes a push factor in migration?",
    "o": [
      "A benefit that attracts people to a destination",
      "A tourism advertisement",
      "A condition that drives people to leave their place of residence",
      "A passport requirement"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 7",
    "q": "Which is an example of a pull factor?",
    "o": [
      "Civil war",
      "Political persecution",
      "Lack of employment",
      "Higher salaries and better job prospects"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 7",
    "q": "Who are asylum-seekers?",
    "o": [
      "People who cross borders in search of protection",
      "People who travel only for vacation",
      "People who never leave their country",
      "People who move only within a city"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 8",
    "q": "What is the Brundtland Commission's central idea of sustainable development?",
    "o": [
      "Using all resources as fast as possible",
      "Meeting present needs without compromising future generations' ability to meet theirs",
      "Focusing only on economic profit",
      "Avoiding all development"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 8",
    "q": "Which three factors must be balanced to achieve sustainability?",
    "o": [
      "Military, political, and religious",
      "Local, national, and international",
      "Economic, environmental, and social",
      "Agriculture, tourism, and transport"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 8",
    "q": "Environmental sustainability mainly requires people to:",
    "o": [
      "Ignore resource scarcity",
      "Use resources without limits",
      "Focus only on profit",
      "Consume natural resources at a sustainable rate"
    ],
    "a": 3
  },
  {
    "lesson": "Lesson 8",
    "q": "What does economic sustainability require?",
    "o": [
      "Efficient and responsible use of resources for long-term operation",
      "Using resources as quickly as possible",
      "Avoiding all profit",
      "Ignoring social and environmental effects"
    ],
    "a": 0
  },
  {
    "lesson": "Lesson 8",
    "q": "What is the main concern of social sustainability?",
    "o": [
      "Increasing imports",
      "Maintaining social well-being over time",
      "Expanding military power",
      "Reducing all public services"
    ],
    "a": 1
  },
  {
    "lesson": "Lesson 8",
    "q": "Which sustainability assessment measures the land and sea area needed to support people's way of life?",
    "o": [
      "Life Cycle Analysis",
      "Quality of Life",
      "Ecological Footprint",
      "Natural Step Framework"
    ],
    "a": 2
  },
  {
    "lesson": "Lesson 8",
    "q": "How many Sustainable Development Goals are included in the 2030 Agenda?",
    "o": [
      "8",
      "21",
      "30",
      "17"
    ],
    "a": 3
  }
];
