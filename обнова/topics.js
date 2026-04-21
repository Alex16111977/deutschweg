/* DeutschWeg — Topic data with extended text + Grammatik for each theme */
window.TOPICS = {

  /* ====================== 01 · KOCHEN ====================== */
  kochen: {
    emoji: '🍳', name: 'Essen & Kochen', level: 'A2', num: '01', color: 'var(--sun)',
    tagline: 'Brot, Brezeln und Butter — und die Wörter, mit denen du im Supermarkt NICHT mehr dumm dastehst. 🥨',
    vocab: [
      { art:'das', w:'Gericht',   ua:'страва',       ex:'Mein Lieblingsgericht ist Pasta.' },
      { art:'die', w:'Zutat',     ua:'інгредієнт',   ex:'Für dieses Rezept braucht man nur 5 Zutaten.' },
      { art:'der', w:'Geschmack', ua:'смак',         ex:'Der Geschmack von frischem Brot ist wunderbar.' },
      { art:'die', w:'Pfanne',    ua:'сковорідка',   ex:'Brate die Zwiebeln in einer heißen Pfanne.' },
      { art:'der', w:'Topf',      ua:'каструля',     ex:'Koch das Wasser in einem großen Topf.' },
      { art:'das', w:'Rezept',    ua:'рецепт',       ex:'Das Rezept ist von meiner Oma!' },
      { art:'die', w:'Mahlzeit',  ua:'прийом їжі',   ex:'Das Mittagessen ist die wichtigste Mahlzeit.' },
      { art:'das', w:'Gewürz',    ua:'прянощі',      ex:'Salz und Pfeffer sind die Basis-Gewürze.' },
      { art:'der', w:'Löffel',    ua:'ложка',        ex:'Ein Löffel Zucker, bitte!' },
      { art:'die', w:'Gabel',     ua:'виделка',      ex:'Die Gabel liegt links vom Teller.' }
    ],
    textTitle: 'Deutsche Essgewohnheiten',
    text: [
      'Wenn du in Deutschland lebst, merkst du schnell: Essen ist hier richtig wichtig. Die meisten Deutschen essen dreimal am Tag — zum Frühstück, zum Mittagessen und zum Abendessen. Jede <mark title="прийом їжі">Mahlzeit</mark> hat ihre eigene Zeit und ihre eigenen Regeln.',
      'Das Frühstück ist oft herzhaft: frisches <mark title="хліб">Brot</mark> oder knusprige Brötchen mit Käse, Wurst, Marmelade oder Honig. Dazu ein Kaffee oder Tee. Am Sonntag nehmen sich Familien richtig Zeit — es gibt Brunch mit Eiern, Müsli und sogar Sekt. 🍾',
      'Das Mittagessen ist traditionell die <mark title="головна страва дня">Hauptmahlzeit</mark>. Viele Familien kochen ein warmes <mark title="страва">Gericht</mark>: Kartoffeln mit Gemüse und Fleisch, Fisch oder eine leckere Suppe. Wer arbeitet, isst oft in der Kantine oder macht sich eine Lunchbox.',
      'Am Abend essen viele Deutsche kalt — das nennt man «<mark title="вечеря з бутербродів">Abendbrot</mark>». Auf dem Tisch: Brot mit Käse, Wurst und Salat. Klingt langweilig, ist aber mega gemütlich, wenn du mit Familie zusammensitzt.',
      'Aber die deutsche Küche hat sich krass verändert. Heute essen viele international: Pizza, Pasta, Sushi, Döner. Besonders in Städten wie Berlin oder München findest du Restaurants aus der ganzen Welt. Der Döner ist sogar fast ein deutsches Nationalgericht geworden. 🥙',
      'Es gibt auch immer mehr Vegetarier und Veganer. Sie kochen mit <mark title="рослинний">pflanzlichen</mark> <mark title="інгредієнтами">Zutaten</mark> wie Tofu, Linsen oder Kichererbsen. Die Supermärkte haben ganze Regale nur für vegane Produkte.',
      'Und was kaufst du wo? Brot in der Bäckerei, Fleisch beim Metzger, Obst und Gemüse am Markt oder im Bio-Laden. Das ist typisch deutsch: für jedes Produkt der richtige Ort. 🛒'
    ],
    textUa: '🇺🇦 У Німеччині зазвичай їдять тричі на день. Сніданок — хліб, сир, ковбаса. Обід — головна страва з теплою їжею. Увечері — «Abendbrot», холодна вечеря з бутербродами. Зростає кількість вегетаріанців. Для кожного продукту — свій магазин.',
    grammar: {
      title: 'Artikel: der, die, das',
      intro: 'У німецькій мові кожен іменник має рід. Артикль — це «прикраса» слова, яку треба вчити РАЗОМ зі словом.',
      rules: [
        { head: 'der · чоловічий рід 🔵', body: 'Часто: професії (der Koch), напої (der Wein), дні тижня (der Montag).', ex: ['der Löffel — ложка', 'der Topf — каструля', 'der Geschmack — смак'] },
        { head: 'die · жіночий рід 🩷', body: 'Часто: слова на -ung, -heit, -keit, -tion; овочі та фрукти (die Tomate).', ex: ['die Pfanne — сковорідка', 'die Gabel — виделка', 'die Mahlzeit — прийом їжі'] },
        { head: 'das · середній рід 🟡', body: 'Часто: слова на -chen, -lein; зменшувальні; більшість назв країн.', ex: ['das Gericht — страва', 'das Rezept — рецепт', 'das Gewürz — прянощі'] }
      ],
      tip: '💡 Лайфгак: вчи слово завжди з артиклем і кольором — синій/рожевий/жовтий. Так мозок запам\'ятовує швидше.',
      miniQuiz: [
        { q:'___ Pfanne', a:'die' },
        { q:'___ Rezept', a:'das' },
        { q:'___ Löffel', a:'der' }
      ]
    },
    dialogTitle: 'Beim Kochen 🍳',
    dialog: [
      { s:'👩', t:'Hey, was kochen wir heute? Ich hab Hunger! 🤤', ua:'Що сьогодні готуємо? Я хочу їсти!' },
      { s:'🧑', t:'Wie wär\'s mit Pasta? Hab Tomaten und Knoblauch.', ua:'Як щодо пасти? Є помідори та часник.', r:true },
      { s:'👩', t:'Geil! 🔥 Ich schneide das Gemüse, du brätst die Zwiebeln?', ua:'Супер! Я поріжу овочі, ти підсмажиш цибулю?' },
      { s:'🧑', t:'Deal! Und würzen wir mit Basilikum und Parmesan? ✨', ua:'Домовились! Приправимо базиліком і пармезаном?', r:true },
      { s:'👩', t:'Klar — lass uns kochen! 🍝', ua:'Звісно — давай готувати!' }
    ],
    quiz: [
      { q:'Was bedeutet «die Zutat»?', opts:['інгредієнт','страва','ложка','рецепт'], a:0 },
      { q:'«Ich brate das Fleisch in der ___»', opts:['Löffel','Pfanne','Rezept','Mahlzeit'], a:1 },
      { q:'Welcher Artikel: ___ Gericht?', opts:['der','die','das','—'], a:2 },
      { q:'Was ist «das Abendbrot»?', opts:['warmes Abendessen','kaltes Abendessen mit Brot','Frühstück','Snack'], a:1 },
      { q:'Welches Wort bedeutet «смак»?', opts:['Geschmack','Geschwindigkeit','Geschirr','Gesicht'], a:0 }
    ]
  },

  /* ====================== 02 · UMWELT ====================== */
  umwelt: {
    emoji: '🌳', name: 'Die Umwelt', level: 'A2', num: '02', color: 'var(--mint)',
    tagline: 'Plastik, Panda, Planet — die Wörter, mit denen du auf jeder Klima-Demo klarkommst. 🌍',
    vocab: [
      { art:'die', w:'Umwelt',       ua:'довкілля',      ex:'Wir müssen die Umwelt schützen.' },
      { art:'der', w:'Müll',         ua:'сміття',        ex:'Wirf den Müll bitte in den Eimer!' },
      { art:'die', w:'Mülltrennung', ua:'сортування',    ex:'Mülltrennung ist in Deutschland Pflicht.' },
      { art:'der', w:'Klimawandel',  ua:'зміна клімату', ex:'Der Klimawandel ist real.' },
      { art:'die', w:'Energie',      ua:'енергія',       ex:'Solarenergie ist die Zukunft.' },
      { art:'das', w:'Plastik',      ua:'пластик',       ex:'Weniger Plastik — weniger Probleme.' },
      { art:'der', w:'Wald',         ua:'ліс',           ex:'Der deutsche Wald ist magisch. 🌲' },
      { art:'die', w:'Luft',         ua:'повітря',       ex:'In Berlin ist die Luft schmutzig.' },
      { art:'das', w:'Wasser',       ua:'вода',          ex:'Trinkwasser sparen!' },
      { art:'der', w:'Baum',         ua:'дерево',        ex:'Jedes Jahr pflanzen wir einen Baum.' }
    ],
    textTitle: 'Deutschland und der Klimawandel',
    text: [
      'Deutschland gilt weltweit als <mark title="піонер">Vorreiter</mark> im Umweltschutz. Schon als Kind lernt man hier, wie man <mark title="сміття">Müll</mark> richtig trennt: Papier, Plastik, Bio, Glas und Restmüll. Jeder Haushalt hat mindestens drei verschiedene Tonnen vor dem Haus.',
      'Plastikflaschen und Dosen bringst du zurück in den Supermarkt — das heißt «Pfand». Für jede Flasche bekommst du 8 bis 25 Cent zurück. Klingt wenig? In einem Jahr kommen da ein paar hundert Euro zusammen! 💰',
      'Ein riesiges Thema ist die <mark title="енергетичний перехід">Energiewende</mark>. Statt Kohle und Atom soll der Strom aus Sonne und Wind kommen. Auf vielen Dächern siehst du <mark title="сонячні батареї">Solarpaneele</mark>, und im Norden stehen tausende Windräder.',
      'Aber es gibt auch Probleme. Der deutsche <mark title="ліс">Wald</mark> leidet unter Trockenheit und Borkenkäfer. Ganze Gebiete sehen aus wie nach einer Katastrophe. Auch die <mark title="повітря">Luft</mark> in Städten wie Berlin oder Stuttgart ist oft schlecht — besonders im Sommer.',
      'Viele Jugendliche sind deshalb sauer. «Fridays for Future» ist eine große Bewegung — Schüler und Studenten demonstrieren jeden Freitag für das Klima. Ihr Motto: Die Zukunft ist grün oder gar nicht!',
      'Im Alltag machen Deutsche viele kleine Dinge für die Umwelt: Fahrrad statt Auto, Stofftasche statt Plastiktüte, Duschen statt Baden. Viele essen auch weniger Fleisch, weil die Tierhaltung dem Klima schadet.',
      'Und die Politik? Die Regierung setzt auf klimaneutrale Mobilität bis 2045. Das heißt: keine Autos mit Benzin mehr, mehr Züge, bessere Radwege. Ob das klappt? Wir werden sehen. 🌱'
    ],
    textUa: '🇺🇦 Німеччина — піонер захисту довкілля. Усі сортують сміття, здають пляшки за Pfand. Енергетичний перехід — сонце та вітер. Ліс страждає від посухи. Молодь виходить на «Fridays for Future». До 2045 року — кліматична нейтральність.',
    grammar: {
      title: 'Modalverben: müssen & können',
      intro: 'Модальні дієслова — це найкорисніші слова в німецькій. «Мусити», «могти» — потрібні щодня, особливо коли говориш про обов\'язки та можливості.',
      rules: [
        { head: 'müssen · мусити', body: 'Означає обов\'язок. Основне дієслово йде в кінці у Infinitiv.', ex: ['Wir müssen die Umwelt schützen. — Ми мусимо захищати довкілля.', 'Ich muss den Müll trennen. — Я мушу сортувати сміття.'] },
        { head: 'können · могти', body: 'Означає можливість або вміння.', ex: ['Du kannst Pfand zurückbekommen. — Можеш повернути заставу.', 'Wir können mehr Fahrrad fahren. — Ми можемо їздити більше велосипедом.'] },
        { head: 'Позиція у реченні', body: 'Модальне дієслово — на 2 місці, Infinitiv — в самий кінець (Satzklammer).', ex: ['Ich (1) muss (2) heute den Müll (…) trennen (last).'] }
      ],
      tip: '💡 Модальне дієслово змінюється за особою, а Infinitiv — завжди в кінці. Це як рамка навколо речення.',
      miniQuiz: [
        { q:'Ich ___ Müll trennen. (мушу)', a:'muss' },
        { q:'Wir ___ Rad fahren. (можемо)', a:'können' },
        { q:'Du ___ das machen. (мусиш)', a:'musst' }
      ]
    },
    dialogTitle: 'Beim Recyceln 🗑',
    dialog: [
      { s:'👨', t:'Ey, wohin mit der Pizza-Schachtel? Papier oder Restmüll?', ua:'Гей, куди коробку від піци? Папір чи загальне сміття?' },
      { s:'👩', t:'Wenn sie fettig ist — Restmüll. Sauber — Papier.', ua:'Якщо жирна — в загальне. Чиста — в папір.', r:true },
      { s:'👨', t:'Krass, so kompliziert! Und die Plastikflasche?', ua:'Жесть, так складно! А пластикова пляшка?' },
      { s:'👩', t:'Pfand! 25 Cent zurück. 💰', ua:'Pfand! 25 центів назад. 💰', r:true },
      { s:'👨', t:'Oh geil, dann sammle ich ab jetzt alle Flaschen! 🍾', ua:'О кльово, тоді з цього моменту збиратиму всі пляшки!' }
    ],
    quiz: [
      { q:'Was bedeutet «die Umwelt»?', opts:['погода','довкілля','світ','космос'], a:1 },
      { q:'«Fridays for ___» — welche Bewegung?', opts:['Free','Future','Fun','Food'], a:1 },
      { q:'Welcher Artikel: ___ Klimawandel?', opts:['der','die','das','—'], a:0 },
      { q:'Was ist «die Energiewende»?', opts:['Wetteränderung','Wechsel zu grünem Strom','Stromausfall','Energiesparen'], a:1 },
      { q:'«Pfand» — was ist das?', opts:['Strafe','Pfand auf Flaschen','Müllgebühr','Energiesteuer'], a:1 }
    ]
  },

  /* ====================== 03 · REISEN ====================== */
  reisen: {
    emoji: '✈', name: 'Das Reisen', level: 'A2', num: '03', color: 'var(--lilac)',
    tagline: 'Koffer packen, Ticket in der Hand — und ab nach Berlin, Wien oder Prag. 🎒',
    vocab: [
      { art:'die', w:'Reise',      ua:'подорож',    ex:'Meine Reise nach Italien war super.' },
      { art:'der', w:'Bahnhof',    ua:'вокзал',     ex:'Der Bahnhof ist um die Ecke.' },
      { art:'das', w:'Ticket',     ua:'квиток',     ex:'Ich hab mein Ticket vergessen!' },
      { art:'der', w:'Koffer',     ua:'валіза',     ex:'Mein Koffer ist zu schwer.' },
      { art:'die', w:'Unterkunft', ua:'житло',      ex:'Die Unterkunft war sauber und billig.' },
      { art:'der', w:'Flug',       ua:'рейс',       ex:'Mein Flug hat 2 Stunden Verspätung.' },
      { art:'die', w:'Grenze',     ua:'кордон',     ex:'An der Grenze musst du den Pass zeigen.' },
      { art:'das', w:'Abenteuer',  ua:'пригода',    ex:'Jede Reise ist ein Abenteuer!' },
      { art:'der', w:'Zug',        ua:'потяг',      ex:'Der Zug fährt in 5 Minuten.' },
      { art:'die', w:'Landkarte',  ua:'мапа',       ex:'Ohne Landkarte bin ich verloren.' }
    ],
    textTitle: 'Interrail durch Europa',
    text: [
      'Für viele junge Deutsche gehört eine große <mark title="подорож">Reise</mark> nach der Schule einfach dazu. Wer nicht gleich studieren oder arbeiten will, packt den <mark title="валіза">Rucksack</mark> und verschwindet für Wochen. Das heißt «Gap Year» — Lücke zwischen Schule und Uni.',
      'Super beliebt ist Interrail. Mit nur einem <mark title="квиток">Ticket</mark> kannst du einen Monat lang mit dem <mark title="потяг">Zug</mark> durch ganz Europa fahren. Heute Paris, morgen Barcelona, übermorgen Rom — alles mit einem Pass!',
      'Du packst nur das Nötigste: Klamotten, Zahnbürste, Kamera, Powerbank. Der kleine <mark title="валіза">Koffer</mark> oder Rucksack muss reichen. Wenn du zu viel mitnimmst, trägst du am Ende den ganzen Tag zu viel Gewicht durch die Gegend.',
      'Die <mark title="житло">Unterkunft</mark> findest du spontan über Hostelworld oder Booking. Hostels sind billig und super, weil du andere Reisende triffst. Alternative: Couchsurfing — du schläfst kostenlos auf dem Sofa von Einheimischen und lernst die Stadt von innen kennen.',
      'Das Beste am Reisen in Europa: die <mark title="кордон">Grenzen</mark> in der EU sind offen. Du merkst oft gar nicht, wann du in einem neuen Land bist. Plötzlich steht auf dem Schild «Benvenuti» statt «Herzlich Willkommen» und du denkst: ach, Italien!',
      'Natürlich gibt\'s auch Probleme. Der <mark title="рейс">Flug</mark> hat Verspätung, der <mark title="потяг">Zug</mark> wird gestrichen, dein Handy geht kaputt. Aber genau das wird später deine beste Story. Pannen machen eine Reise zum <mark title="пригода">Abenteuer</mark>!',
      'Pro-Tipp von allen, die schon gereist sind: weniger planen, mehr spüren. Lass dich treiben. Triff Leute. Iss komisches Essen. Und mach wenigstens ein Foto mit einer altmodischen <mark title="мапа">Landkarte</mark> in der Hand. 📍'
    ],
    textUa: '🇺🇦 Німці їдуть Interrail у «Gap Year». Один квиток — цілий місяць Європою. Пакуй рюкзак, шукай хостел або Couchsurfing. ЄС — відкриті кордони. Пам\'ятай: менше планів — більше пригод.',
    grammar: {
      title: 'Dativ: mit + куди/коли/як',
      intro: 'Коли ти кажеш «з ким» або «на чому їдеш» — потрібен Dativ. Це найпоширеніший відмінок у розмові.',
      rules: [
        { head: 'mit + Dativ', body: 'Артиклі змінюються: der → dem, die → der, das → dem.', ex: ['Ich fahre mit dem Zug. — Їду потягом.', 'Er fliegt mit dem Flugzeug.', 'Sie reist mit der Freundin.'] },
        { head: 'in + Dativ (де?)', body: 'Коли відповідає на «де?», а не «куди?».', ex: ['Ich bin in Berlin.', 'Wir wohnen in der Stadt.'] },
        { head: 'nach + місто/країна', body: 'Коли кажеш «куди їдеш» — нейтральні країни без артикля.', ex: ['Ich fahre nach Italien.', 'Wir fliegen nach Prag.'] }
      ],
      tip: '💡 «Auto, Zug, Bus, Flugzeug» завжди з «mit dem» — це середній/чоловічий рід. А «mit der Bahn» — жіночий.',
      miniQuiz: [
        { q:'Ich fahre ___ dem Zug.', a:'mit' },
        { q:'Wir fliegen ___ Italien.', a:'nach' },
        { q:'Mit ___ Freundin (вона)', a:'der' }
      ]
    },
    dialogTitle: 'Am Bahnhof 🚆',
    dialog: [
      { s:'🧑', t:'Entschuldigung, von welchem Gleis fährt der Zug nach Prag?', ua:'Вибачте, з якої колії йде потяг до Праги?' },
      { s:'👮', t:'Gleis 7, in 12 Minuten. Hast du dein Ticket?', ua:'Колія 7, через 12 хвилин. Є квиток?', r:true },
      { s:'🧑', t:'Ja, digital auf dem Handy. Ist das OK?', ua:'Так, цифровий на телефоні. Так можна?' },
      { s:'👮', t:'Klar, passt. Gute Reise! ✈', ua:'Звісно, все ок. Гарної подорожі!', r:true },
      { s:'🧑', t:'Danke dir! Ich freu mich schon auf Prag! 🏰', ua:'Дякую! Вже радію Празі!' }
    ],
    quiz: [
      { q:'Was bedeutet «der Koffer»?', opts:['рюкзак','валіза','сумка','шафа'], a:1 },
      { q:'«Ich fahre mit dem ___ nach Berlin»', opts:['Zug','Ticket','Koffer','Bahnhof'], a:0 },
      { q:'Welcher Artikel: ___ Flug?', opts:['der','die','das','—'], a:0 },
      { q:'Was ist «Interrail»?', opts:['Zug-Firma','EU-Zug-Ticket','Flug-App','Hostel-Kette'], a:1 },
      { q:'«die Grenze» bedeutet:', opts:['міст','кордон','місто','парк'], a:1 }
    ]
  },

  /* ====================== 04 · FREIZEIT ====================== */
  freizeit: {
    emoji: '🎮', name: 'Freizeit', level: 'A2', num: '04', color: 'var(--peach)',
    tagline: 'Netflix, Fußball, Zocken — was machst du am Wochenende? 🎮',
    vocab: [
      { art:'die', w:'Freizeit',   ua:'дозвілля',    ex:'In meiner Freizeit zocke ich.' },
      { art:'das', w:'Hobby',      ua:'хобі',        ex:'Mein Hobby ist Fotografie.' },
      { art:'der', w:'Film',       ua:'фільм',       ex:'Der Film war Hammer!' },
      { art:'die', w:'Serie',      ua:'серіал',      ex:'Welche Serie schaust du gerade?' },
      { art:'das', w:'Spiel',      ua:'гра',         ex:'Das Spiel ist richtig süchtig machend.' },
      { art:'die', w:'Musik',      ua:'музика',      ex:'Ohne Musik kein Leben. 🎧' },
      { art:'der', w:'Sport',      ua:'спорт',       ex:'Ich mach dreimal die Woche Sport.' },
      { art:'das', w:'Buch',       ua:'книга',       ex:'Dieses Buch ist ein Banger!' },
      { art:'der', w:'Verein',     ua:'клуб/гурток', ex:'Ich bin im Fußballverein.' },
      { art:'die', w:'Party',      ua:'вечірка',     ex:'Die Party geht bis 5 Uhr! 🎉' }
    ],
    textTitle: 'Was machen Jugendliche?',
    text: [
      'Die <mark title="дозвілля">Freizeit</mark> ist für junge Deutsche heilig. Nach der Schule? Chill-Zeit. Am Wochenende? Erst recht. Wenn jemand fragt «Wie war dein Wochenende?» — da erwartet niemand «Ich hab gelernt». Jeder erzählt, wo er war, was er gemacht hat, wen er getroffen hat.',
      'Mega beliebt ist <mark title="гра">Gaming</mark>. Viele Teenager verbringen Stunden auf der Konsole, am PC oder am Handy. Fortnite, Valorant, Minecraft — alles dabei. Manche zocken sogar professionell und verdienen Geld damit. E-Sports ist ein riesiger Markt.',
      'Aber klassische <mark title="хобі">Hobbys</mark> sterben nicht aus. Fast jeder Jugendliche ist in einem <mark title="клуб">Verein</mark> — Fußball, Schwimmen, Tanzen, Musik. Das ist typisch deutsch: zusammen <mark title="спорт">Sport</mark> machen oder musizieren, jede Woche zur gleichen Zeit.',
      'Am Abend gibt\'s zwei Modi: zuhause oder draußen. Zuhause bedeutet <mark title="серіал">Serien</mark>-Binge auf Netflix, Pizza bestellen, chillen. Draußen heißt: mit Freunden in die Stadt, ins Café, an den See oder in den Park.',
      '<mark title="музика">Musik</mark> läuft immer im Hintergrund. Spotify ist überall, und jeder hat seine Playlist. Deutscher Rap ist gerade krass beliebt — aber auch internationale Hits, besonders aus Korea (K-Pop) und den USA.',
      'Und die <mark title="вечірка">Party</mark>? In Berlin kommst du ab 16 in manche Clubs — mit viel Glück. Ab 18 überall. Berliner Techno, Hamburger Indie, Kölner Karneval — jede Stadt hat ihre eigene Szene. Die Nacht beginnt erst um Mitternacht richtig.',
      'Lesen? <mark title="книга">Bücher</mark> sind auch nicht tot. BookTok auf TikTok hat eine ganze Generation wieder zum Lesen gebracht. Fantasy und Romance sind besonders gefragt. Was willst du mehr? 🎉'
    ],
    textUa: '🇺🇦 Дозвілля для молодих німців — святе. Ігри, клуби (Verein), серіали на Netflix, музика Spotify. У клуб з 16 у Берлін, з 18 — скрізь. BookTok повернув молодь до книг.',
    grammar: {
      title: 'Trennbare Verben — відокремлювані дієслова',
      intro: 'У німецькій купа дієслів зі «склеєним» префіксом, який у реченні відлітає в кінець. Це маркер: хто це не зрозумів — той не німець. 😅',
      rules: [
        { head: 'Основний принцип', body: 'Префікс відокремлюється і йде в кінець речення.', ex: ['fernsehen → Ich sehe jeden Abend fern. — Я щовечора дивлюсь ТБ.', 'aufstehen → Ich stehe um 7 Uhr auf. — Встаю о 7.'] },
        { head: 'Типові префікси', body: 'ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, fern-, zurück-.', ex: ['anrufen — дзвонити', 'einkaufen — робити покупки', 'mitkommen — йти з кимось'] },
        { head: 'У Infinitiv', body: 'Коли дієслово в кінці (з модальним або у підрядному) — залишається цілим.', ex: ['Ich muss früh aufstehen.', 'Wenn ich fernsehe, esse ich Chips.'] }
      ],
      tip: '💡 У словнику префікс завжди стоїть першим — але в реченні він любить утікати в самий кінець. Це і є «Satzklammer» (рамка речення).',
      miniQuiz: [
        { q:'Ich ___ um 7 ___. (aufstehen)', a:'stehe … auf' },
        { q:'Sie ___ jeden Abend ___. (fernsehen)', a:'sieht … fern' },
        { q:'Kommst du ___? (mit)', a:'mit' }
      ]
    },
    dialogTitle: 'Am Wochenende 🎉',
    dialog: [
      { s:'👩', t:'Hey, was machst du am Samstag? Langweilig zu Hause?', ua:'Що робиш у суботу? Вдома нудно?' },
      { s:'🧑', t:'Nah, ich zock mit Max und dann Kino — neuer Marvel-Film.', ua:'Та не, граю з Максом, потім кіно — новий Marvel.', r:true },
      { s:'👩', t:'Ach cool! Kino ist immer geil. Und Sonntag?', ua:'О круто! Кіно завжди топ. А неділя?' },
      { s:'🧑', t:'Fußball im Verein, dann vielleicht Party in Kreuzberg.', ua:'Футбол у клубі, потім може вечірка в Кройцберзі.', r:true },
      { s:'👩', t:'Bruh, mega Wochenende! Ich komm mit! 🕺', ua:'Чувак, крутий вікенд! Я з тобою!' }
    ],
    quiz: [
      { q:'Was bedeutet «das Hobby»?', opts:['робота','хобі','урок','здача'], a:1 },
      { q:'«Ich schaue eine ___ auf Netflix»', opts:['Spiel','Serie','Musik','Buch'], a:1 },
      { q:'Welcher Artikel: ___ Party?', opts:['der','die','das','—'], a:1 },
      { q:'«der Verein» — was ist das?', opts:['окрема гра','клуб/гурток','фільм','турнір'], a:1 },
      { q:'«zocken» bedeutet (Slang):', opts:['спати','грати','їсти','танцювати'], a:1 }
    ]
  },

  /* ====================== 05 · ARBEIT ====================== */
  arbeit: {
    emoji: '💼', name: 'Arbeit & Beruf', level: 'B1', num: '05', color: 'var(--lime)',
    tagline: 'Von Bewerbung bis Feierabend — die Wörter, mit denen du im Büro klarkommst. 💼',
    vocab: [
      { art:'der', w:'Beruf',       ua:'професія',         ex:'Was ist dein Traumberuf?' },
      { art:'die', w:'Bewerbung',   ua:'заявка',           ex:'Ich schreibe gerade meine Bewerbung.' },
      { art:'das', w:'Gehalt',      ua:'зарплата',         ex:'Das Gehalt ist OK, aber nicht Hammer.' },
      { art:'der', w:'Chef',        ua:'шеф',              ex:'Mein Chef ist eigentlich chill.' },
      { art:'die', w:'Kollegin',    ua:'колега',           ex:'Meine Kollegin bringt immer Kuchen mit.' },
      { art:'der', w:'Vertrag',     ua:'контракт',         ex:'Unterschreib den Vertrag erst, wenn du ihn gelesen hast!' },
      { art:'der', w:'Feierabend',  ua:'кінець роб. дня',  ex:'Endlich Feierabend! 🍻' },
      { art:'die', w:'Besprechung', ua:'нарада',           ex:'Die Besprechung dauerte 2 Stunden. 😴' },
      { art:'das', w:'Praktikum',   ua:'стажування',       ex:'Mein Praktikum war super.' },
      { art:'der', w:'Urlaub',      ua:'відпустка',        ex:'30 Tage Urlaub — typisch Deutschland!' }
    ],
    textTitle: 'Work-Life-Balance in Deutschland',
    text: [
      'Arbeit ist in Deutschland wichtig, aber <mark title="кінець дня">Feierabend</mark> ist heilig. Um 17 Uhr ist das Büro oft schon leer, und um 17:05 bist du längst beim Bäcker oder unterwegs nach Hause. Wer nach Feierabend anruft, bekommt entweder nichts oder einen genervten Ton. ⏰',
      'Ein Job startet meistens mit einer <mark title="заявка">Bewerbung</mark>. Die Deutschen sind extrem formell: Lebenslauf mit Foto (oft), Anschreiben, Zeugnisse — alles im PDF-Format. Dann kommt das Vorstellungsgespräch, und nur dann der <mark title="контракт">Vertrag</mark>.',
      'Es gibt zwei Arten von Verträgen: «unbefristet» (ohne Ende, sicherer) und «befristet» (nur für eine bestimmte Zeit). Viele junge Leute starten mit einem befristeten Vertrag oder einem <mark title="стажування">Praktikum</mark>, um Erfahrung zu sammeln.',
      'Das <mark title="зарплата">Gehalt</mark> wird monatlich überwiesen, meistens am Monatsende. Brutto ist nicht Netto — vom Brutto-Gehalt gehen Steuern und Sozialversicherung ab. Ein Drittel bis zur Hälfte kann weg sein. Autsch. 💸',
      'Dafür bekommst du aber richtig viel <mark title="відпустка">Urlaub</mark>: gesetzlich mindestens 20 Tage, viele Firmen geben 25-30. Und wenn du krank bist, bekommst du trotzdem Gehalt. Elternzeit? Gibt es auch — Mama und Papa können bis zu 3 Jahre daheim bleiben.',
      'Die <mark title="колега">Kolleginnen</mark> und <mark title="шеф">Chefs</mark> sind oft überraschend locker. Du-Kultur verbreitet sich immer mehr, besonders in Start-ups und Tech. Aber Achtung: in klassischen Firmen (Banken, Gerichte) gilt immer noch das formale «Sie».',
      '<mark title="нарада">Besprechungen</mark> sind ein Sport für sich. Jeden Morgen gibt\'s Meetings, jeden Nachmittag auch. Manche enden genervt mit «Das Meeting hätte eine E-Mail sein können». Aber der Kaffee danach? Heilig. ☕'
    ],
    textUa: '🇺🇦 Feierabend о 17:00 — святе. Заявка формальна з фото та резюме. Контракти: безстрокові або строкові. Зарплата брутто ≠ нетто, мінус податки. Відпустка 25-30 днів. Нарад багато, але кава після — головне.',
    grammar: {
      title: 'Perfekt — розмовне минуле',
      intro: 'Коли розповідаєш, що робив — «Ich habe gearbeitet», «Ich bin gegangen». Perfekt = haben/sein + Partizip II. Це 90% минулого часу в розмові.',
      rules: [
        { head: 'haben + Partizip II', body: 'Більшість дієслів.', ex: ['Ich habe gearbeitet. — Я працював.', 'Wir haben gelernt. — Ми вчились.', 'Er hat den Vertrag unterschrieben.'] },
        { head: 'sein + Partizip II', body: 'Рух (gehen, fahren, kommen) та зміна стану (werden, sterben).', ex: ['Ich bin zur Arbeit gefahren.', 'Sie ist nach Hause gekommen.'] },
        { head: 'Partizip II: ge- + -t / -en', body: 'Правильні: ge+stamm+t (gearbeitet). Неправильні: ge+stamm+en (gegangen, gesehen).', ex: ['machen → gemacht', 'gehen → gegangen', 'sein → gewesen'] }
      ],
      tip: '💡 Правило #1: дієслова на -ieren НЕ отримують ge-. «Ich habe studiert» (НЕ gestudiert).',
      miniQuiz: [
        { q:'Ich ___ gearbeitet.', a:'habe' },
        { q:'Er ___ gekommen.', a:'ist' },
        { q:'machen → ge___t', a:'gemacht' }
      ]
    },
    dialogTitle: 'Im Büro 💼',
    dialog: [
      { s:'👨', t:'Hey, wie war dein erster Tag als Praktikant?', ua:'Як перший день стажування?' },
      { s:'🧑', t:'Intensiv! Viele Besprechungen, aber die Kollegen sind nett.', ua:'Інтенсивно! Купа нарад, але колеги добрі.', r:true },
      { s:'👨', t:'Und dein Chef? So streng wie gedacht?', ua:'А шеф? Такий суворий, як думав?' },
      { s:'🧑', t:'Nee, er hat mich sogar zum Kaffee eingeladen. ☕', ua:'Та ні, навіть на каву запросив.', r:true },
      { s:'👨', t:'Geil! Dann Feierabend und ab nach Hause! 🍻', ua:'Супер! Тоді Feierabend і додому!' }
    ],
    quiz: [
      { q:'Was ist «die Bewerbung»?', opts:['зарплата','заявка на роботу','відпустка','контракт'], a:1 },
      { q:'«Ich hab heute ___ um 17 Uhr»', opts:['Urlaub','Feierabend','Gehalt','Vertrag'], a:1 },
      { q:'Welcher Artikel: ___ Gehalt?', opts:['der','die','das','—'], a:2 },
      { q:'«das Praktikum» bedeutet:', opts:['підвищення','стажування','звільнення','нарада'], a:1 },
      { q:'Wie viele Urlaubstage typisch in DE?', opts:['14','20','30','45'], a:2 }
    ]
  },

  /* ====================== 06 · TECH ====================== */
  tech: {
    emoji: '📱', name: 'Internet & Tech', level: 'B1', num: '06', color: 'var(--blue)',
    tagline: 'WLAN, Apps, KI — die digitale Welt auf Deutsch. 📱',
    vocab: [
      { art:'das', w:'Handy',       ua:'телефон',      ex:'Mein Handy ist kaputt! 😩' },
      { art:'der', w:'Akku',        ua:'акумулятор',   ex:'Der Akku ist schon wieder leer.' },
      { art:'das', w:'WLAN',        ua:'Wi-Fi',        ex:'Das WLAN hier ist mega langsam.' },
      { art:'die', w:'App',         ua:'додаток',      ex:'Diese App ist echt süchtig machend.' },
      { art:'das', w:'Netzwerk',    ua:'мережа',       ex:'Kein Netzwerk — kein Instagram. 😱' },
      { art:'die', w:'Nachricht',   ua:'повідомлення', ex:'Ich schick dir gleich eine Nachricht.' },
      { art:'der', w:'Bildschirm',  ua:'екран',        ex:'Der Bildschirm ist gesplittert!' },
      { art:'das', w:'Passwort',    ua:'пароль',       ex:'Ich hab mein Passwort vergessen… wieder.' },
      { art:'der', w:'Nutzer',      ua:'користувач',   ex:'Die App hat schon 1 Mio Nutzer.' },
      { art:'die', w:'Daten',       ua:'дані',         ex:'Meine Daten sind heilig! 🔒' }
    ],
    textTitle: 'Digital in Deutschland',
    text: [
      'Die <mark title="Wi-Fi">WLAN</mark>-Situation in Deutschland ist… naja, ein Meme. In Südkorea hast du 5G in der U-Bahn, in Japan in jedem Café — hier rennst du manchmal nach draußen, nur um eine <mark title="повідомлення">Nachricht</mark> zu senden. Im Zug fällt das Internet alle 3 Minuten aus. Klassiker. 📶',
      'Aber <mark title="додаток">Apps</mark> boomen trotzdem. WhatsApp ist die Nummer eins — über 80% aller Deutschen nutzen es täglich. Instagram, TikTok, BeReal? Auch fast alle, besonders unter 25. Signal und Telegram nutzen die, die Datenschutz wichtig finden.',
      'Jede Behörde hat mittlerweile ihre eigene App. Finanzamt? App. Krankenkasse? App. Arbeitsamt? App. Mit jeweils eigenem <mark title="пароль">Passwort</mark>, natürlich. Niemand merkt sich das alles, alle nutzen Passwort-Manager oder schreiben es auf einen Zettel. 🙃',
      'KI (Künstliche Intelligenz) ist das Thema der Stunde. ChatGPT, Gemini, Claude — Lehrer fürchten sie, Schüler lieben sie. In der Uni machen die Profs jetzt extra mündliche Prüfungen, weil Hausarbeiten kaum noch von Menschen geschrieben werden.',
      'Zahlen mit dem <mark title="телефон">Handy</mark>? In Deutschland eher nicht. Die Leute zahlen immer noch bar, besonders kleinere Beträge. Wer mit Karte zahlen will, kriegt oft ein genervtes «Nur Bar oder EC-Karte». Apple Pay wird zwar akzeptiert, aber nicht überall.',
      'Und die <mark title="дані">Daten</mark>? Deutsche sind paranoid — zu Recht. «Datenschutz» ist fast ein Heiligtum. Kein Wunder, dass die DSGVO (GDPR) hier erfunden wurde. Wenn eine Webseite deine Daten sammelt, muss sie dich fragen. Jede. Einzelne. Webseite. Cookie-Banner sind der Horror.',
      'Zukunftstrend: alles soll «smart» werden. Smart Home, Smart City, Smart Car. Aber viele Deutsche sind skeptisch — lieber analoge Lösungen, die einfach funktionieren. Oma mit ihrem Fax-Gerät lacht über alle Techies. 📠'
    ],
    textUa: '🇺🇦 Wi-Fi у Німеччині — мем. Застосунки бурхливо ростуть: WhatsApp №1. ChatGPT ламає навчання. Платять досі готівкою. GDPR — винахід Німеччини: кукі-банери всюди. Бабуся з факсом сміється над усіма.',
    grammar: {
      title: 'Negation: nicht vs. kein',
      intro: 'Як сказати «ні»? Залежить від того, що заперечуєш — дієслово/прикметник чи іменник.',
      rules: [
        { head: 'nicht — дієслова, прикметники', body: 'Коли заперечуєш дію, якість або конкретне поняття з артиклем.', ex: ['Ich verstehe das nicht.', 'Das ist nicht schnell.', 'Ich nutze Instagram nicht.'] },
        { head: 'kein — іменники без артикля', body: 'Коли заперечуєш сам іменник. Відмінюється як ein.', ex: ['Ich habe kein Handy. — У мене немає телефона.', 'Hier gibt\'s kein WLAN.', 'Er hat keine Zeit.'] },
        { head: 'Позиція nicht', body: 'Зазвичай у кінці речення, АЛЕ перед прикметником/дієсловом, яке заперечує.', ex: ['Ich arbeite heute nicht. (в кінці)', 'Das ist nicht gut. (перед прикм.)'] }
      ],
      tip: '💡 Правило: є «ein» чи ніякого артикля → використовуй kein. Є «der/die/das» → використовуй nicht.',
      miniQuiz: [
        { q:'Ich habe ___ Akku. (немає)', a:'keinen' },
        { q:'Das ist ___ gut.', a:'nicht' },
        { q:'Hier gibt\'s ___ WLAN.', a:'kein' }
      ]
    },
    dialogTitle: 'WLAN-Drama 📶',
    dialog: [
      { s:'👩', t:'Hast du das WLAN-Passwort? Mein Handy ist offline!', ua:'Маєш пароль від Wi-Fi? Телефон офлайн!' },
      { s:'🧑', t:'Lol klar — steht auf dem Router. Aber Achtung: langsam AF.', ua:'Звісно — на роутері. Але він повільний.', r:true },
      { s:'👩', t:'Egal, ich muss nur ne Nachricht senden.', ua:'Байдуже, лише повідомлення відправити.' },
      { s:'🧑', t:'Und wie ist der Akku? Mein Handy stirbt täglich. 🔋', ua:'А акум як? Мій щодня помирає.', r:true },
      { s:'👩', t:'Frag nicht — 8% und kein Ladekabel. Zivilisationskrise!', ua:'Не питай — 8% і нема зарядки. Криза!' }
    ],
    quiz: [
      { q:'«der Akku» bedeutet:', opts:['зарядка','акумулятор','кабель','екран'], a:1 },
      { q:'«Ich hab mein ___ vergessen» (login)', opts:['Handy','Passwort','WLAN','Nutzer'], a:1 },
      { q:'Welcher Artikel: ___ App?', opts:['der','die','das','—'], a:1 },
      { q:'DSGVO bedeutet (grob):', opts:['Wi-Fi Gesetz','Datenschutz','Netzkosten','Tech-Steuer'], a:1 },
      { q:'«die Nachricht» — was ist das?', opts:['новина/повідомлення','пошта','файл','акаунт'], a:0 }
    ]
  },

  /* ====================== 07 · FREUNDE ====================== */
  freunde: {
    emoji: '👯', name: 'Freunde & Beziehungen', level: 'A2', num: '07', color: 'var(--pink)',
    tagline: 'Bro-Code, Dates, BFFs — die Sprache der Liebe (und des Friendzone). 💘',
    vocab: [
      { art:'der', w:'Freund',    ua:'друг/хлопець',     ex:'Mein bester Freund wohnt in Hamburg.' },
      { art:'die', w:'Freundin',  ua:'подруга/дівчина',  ex:'Meine Freundin ist aus Kyiv.' },
      { art:'die', w:'Beziehung', ua:'стосунки',         ex:'Wir sind seit 2 Jahren in einer Beziehung.' },
      { art:'das', w:'Date',      ua:'побачення',        ex:'Mein erstes Date war Hammer. 😳' },
      { art:'das', w:'Gefühl',    ua:'почуття',          ex:'Das Gefühl ist gegenseitig, glaub ich.' },
      { art:'der', w:'Kuss',      ua:'поцілунок',        ex:'Ein Kuss sagt mehr als tausend Worte.' },
      { art:'die', w:'Umarmung',  ua:'обійми',           ex:'Gib mir eine Umarmung! 🤗' },
      { art:'der', w:'Streit',    ua:'сварка',           ex:'Nach dem Streit haben wir uns versöhnt.' },
      { art:'die', w:'Hochzeit',  ua:'весілля',          ex:'Die Hochzeit ist im Sommer.' },
      { art:'das', w:'Vertrauen', ua:'довіра',           ex:'Ohne Vertrauen gibt\'s keine Beziehung.' }
    ],
    textTitle: 'Freundschaft auf Deutsch',
    text: [
      'In Deutschland ist der Unterschied zwischen «Bekannter» und «<mark title="друг">Freund</mark>» riesig. Ein Bekannter ist jemand, den du kennst — zum Beispiel aus der Uni oder vom Sport. Ein Freund ist jemand, dem du um 3 Uhr morgens schreiben kannst, wenn du ein Problem hast. Das dauert, bis man dahin kommt.',
      'Deutsche sind am Anfang oft etwas distanziert. Man grüßt freundlich, aber nicht jeder wird gleich dein Buddy. Nach ein paar Wochen oder Monaten aber — wenn es klickt — sind Deutsche die loyalsten Freunde, die du dir vorstellen kannst.',
      'Neue Freunde findet man in der Uni, in <mark title="клубах">Vereinen</mark>, auf WG-Partys oder über Apps wie Bumble BFF. WGs (Wohngemeinschaften) sind besonders gut: du wohnst mit 2-5 Leuten zusammen, teilst Küche und Klo, feierst und zankst — und bist nach 6 Monaten Familie.',
      'Und <mark title="стосунки">Beziehungen</mark>? Dating ist heute fast immer über Apps — Tinder, Bumble, Hinge. Aber viele Deutsche treffen ihren <mark title="хлопець">Freund</mark> oder ihre <mark title="дівчина">Freundin</mark> immer noch IRL: durch Freunde, beim Feiern, im Zug. Cute. 💘',
      'Das erste <mark title="побачення">Date</mark> ist oft ein Spaziergang oder ein Kaffee — nicht gleich ein großes Dinner. Bezahlt wird oft geteilt, außer einer bestimmt, dass er einlädt. Gender-Regeln sind hier entspannter als in manchen Ländern.',
      'Wichtig in jeder Beziehung: <mark title="довіра">Vertrauen</mark> und offene Kommunikation. Deutsche reden viel über Gefühle — auch Männer. «Wie geht\'s dir wirklich?» ist eine ernste Frage, keine Höflichkeit. Ein <mark title="сварка">Streit</mark> wird ausdiskutiert, nicht unter den Teppich gekehrt.',
      'Und wenn\'s Ernst wird? <mark title="весілля">Hochzeit</mark> oder lange Partnerschaft ohne Trauschein — beides total normal. Viele heiraten erst mit 35+, manche gar nicht. Liebe muss nicht in ein Papier passen. 🤗'
    ],
    textUa: '🇺🇦 «Bekannter» і «Freund» — різні речі. Німці спочатку дистанційні, але стають найлояльнішими друзями. Нові друзі — у WG, клубах. Стосунки — переважно через додатки. Одружуються після 35, а можуть і ніколи.',
    grammar: {
      title: 'Possessivpronomen — мій, твій, наш',
      intro: 'Коли ти говориш про «мого друга» чи «твою дівчину», потрібен присвійний займенник. Він змінюється за родом і відмінком.',
      rules: [
        { head: 'Основна форма (Nominativ)', body: 'mein / dein / sein / ihr / unser / euer / ihr, Ihr.', ex: ['mein Freund — мій друг', 'deine Freundin — твоя дівчина', 'unser Vertrauen — наша довіра'] },
        { head: 'Закінчення як у «ein»', body: 'чоловічий — без закінчення, жіночий — -e, середній — без, множина — -e.', ex: ['mein (der) Freund', 'meine (die) Freundin', 'mein (das) Date', 'meine (die) Freunde'] },
        { head: 'Akkusativ', body: 'Тільки чоловічий рід отримує -en.', ex: ['Ich liebe meinen Freund.', 'Ich sehe meine Freundin.', 'Ich mag mein Date.'] }
      ],
      tip: '💡 «ihr» = «її» (однина) АБО «їхній» (множина) — з контексту зрозуміло. А «Ihr» з великої — ввічливе «Ваш».',
      miniQuiz: [
        { q:'___ Freund (мій, чол.)', a:'mein' },
        { q:'___ Freundin (моя)', a:'meine' },
        { q:'Ich liebe ___ Freund. (мого)', a:'meinen' }
      ]
    },
    dialogTitle: 'Das erste Date 💕',
    dialog: [
      { s:'🧑', t:'Hey Julia, war\'s gestern nicht mega?', ua:'Привіт Юля, вчора було класно, так?' },
      { s:'👩', t:'Ja, total! Das Café war so süß. 🥰', ua:'Так, супер! Кав\'ярня була мила.', r:true },
      { s:'🧑', t:'Willst du Samstag wieder was machen? Kino vielleicht?', ua:'Хочеш у суботу зустрітись? Може кіно?' },
      { s:'👩', t:'Klar! Aber nur wenn du bezahlst. 😜', ua:'Звісно! Але тільки якщо платиш.', r:true },
      { s:'🧑', t:'Deal! 🎬 Bis Samstag!', ua:'Домовились! До суботи!' }
    ],
    quiz: [
      { q:'«die Beziehung» bedeutet:', opts:['знайомство','стосунки','зустріч','весілля'], a:1 },
      { q:'«Gib mir eine ___»', opts:['Kuss','Umarmung','Beziehung','Streit'], a:1 },
      { q:'Welcher Artikel: ___ Date?', opts:['der','die','das','—'], a:2 },
      { q:'Was ist wichtiger als Liebe?', opts:['Kuss','Vertrauen','Geld','Freizeit'], a:1 },
      { q:'«die Hochzeit» — was ist das?', opts:['висота','весілля','годинник','суботник'], a:1 }
    ]
  },

  /* ====================== 08 · FAMILIE ====================== */
  familie: {
    emoji: '👨‍👩‍👧', name: 'Die Familie', level: 'A1', num: '08', color: 'var(--sun)',
    tagline: 'Oma, Opa und die ganze Gang — die wichtigsten Leute deines Lebens. 👨‍👩‍👧',
    vocab: [
      { art:'die', w:'Familie',   ua:'сім\'я', ex:'Meine Familie wohnt in Kyiv.' },
      { art:'die', w:'Mutter',    ua:'мама',   ex:'Meine Mutter ist die Beste! ❤' },
      { art:'der', w:'Vater',     ua:'тато',   ex:'Mein Vater arbeitet als Lehrer.' },
      { art:'der', w:'Bruder',    ua:'брат',   ex:'Mein Bruder ist 2 Jahre älter.' },
      { art:'die', w:'Schwester', ua:'сестра', ex:'Meine Schwester studiert in Berlin.' },
      { art:'die', w:'Oma',       ua:'бабуся', ex:'Oma bäckt den besten Kuchen! 🍰' },
      { art:'der', w:'Opa',       ua:'дідусь', ex:'Opa erzählt coole Geschichten.' },
      { art:'die', w:'Tante',     ua:'тітка',  ex:'Meine Tante wohnt in München.' },
      { art:'der', w:'Onkel',     ua:'дядько', ex:'Mein Onkel ist richtig lustig.' },
      { art:'das', w:'Kind',      ua:'дитина', ex:'Das Kind spielt im Park.' }
    ],
    textTitle: 'Meine Familie',
    text: [
      'Ich heiße Anna und meine <mark title="сім\'я">Familie</mark> ist klein aber fein. Wir sind zu fünft: Mama, Papa, mein Bruder, meine Schwester und ich. Plus Oma, die bei uns wohnt — sie ist quasi die sechste Person. Und natürlich unser Kater Murr! 🐱',
      'Meine <mark title="мама">Mutter</mark> heißt Olena und ist Ärztin in einem Krankenhaus. Sie arbeitet oft Schichten, aber wenn sie zu Hause ist, kocht sie das beste Essen der Welt. Borschtsch, Wareniki, alles frisch. Mein <mark title="тато">Vater</mark> heißt Ivan — er ist Ingenieur und baut Brücken.',
      'Ich habe einen <mark title="брат">Bruder</mark>, Max, und eine kleine <mark title="сестра">Schwester</mark>, Sofia. Max ist 15 und denkt, er sei der König der Welt. Sofia ist erst 8 und malt den ganzen Tag. Jeden Morgen gibt\'s ein kleines Chaos im Bad.',
      'Meine <mark title="бабуся">Oma</mark> Tetiana wohnt bei uns. Sie ist 72 und topfit — geht jeden Tag spazieren und macht Yoga (!). Sie backt jeden Sonntag — die beste Oma der Welt! 🥰 Mein <mark title="дідусь">Opa</mark> Vasyl ist leider schon vor 5 Jahren gestorben. Wir erinnern uns oft an ihn.',
      'Auf der Seite meiner Mutter habe ich zwei <mark title="тітка">Tanten</mark> und einen <mark title="дядько">Onkel</mark>. Tante Katya wohnt in den Karpaten mit Onkel Petro — sie haben ein Haus mit Garten und Hühnern. 🐔 Tante Nadia lebt in Polen und besucht uns manchmal.',
      'Auf der Seite meines Vaters habe ich drei Cousins und zwei Cousinen. Sie sind alle älter als ich und haben schon eigene <mark title="дитина">Kinder</mark>. Das heißt: ich bin mit 19 schon Tante! Verrückt. 🤯',
      'In den Ferien fahren wir fast immer zu Tante Katya in die Karpaten. Dort ist es ruhig, wir sammeln Pilze im Wald, baden im Fluss und essen abends am Lagerfeuer. Familie ist kompliziert — aber am Ende das Beste, was man hat. 🏔'
    ],
    textUa: '🇺🇦 Анна з Києва, у сім\'ї — мама (лікарка), тато (інженер), брат Макс, сестра Софія і бабуся. Дідусь помер 5 років тому. Є тітки, дядьки, кузени. На канікули — до Карпат.',
    grammar: {
      title: 'Verb sein + Possessiv',
      intro: 'Найпростіше дієслово німецької — але неправильне. Без нього не скажеш навіть «Я — Анна».',
      rules: [
        { head: 'Відмінювання sein', body: 'ich bin · du bist · er/sie/es ist · wir sind · ihr seid · sie/Sie sind.', ex: ['Ich bin Anna.', 'Das ist meine Mutter.', 'Wir sind eine Familie.'] },
        { head: 'Mein(e), dein(e)', body: 'Чол. і сер. рід — без закінчення, жін. рід — з -e.', ex: ['mein Vater', 'meine Mutter', 'mein Bruder', 'meine Schwester'] },
        { head: 'Розповідь про сім\'ю', body: 'Типова формула: «Das ist mein/meine …, er/sie ist … Jahre alt und arbeitet als …».', ex: ['Das ist meine Mutter. Sie ist 45 und arbeitet als Ärztin.'] }
      ],
      tip: '💡 Діти завжди das Kind (сер. рід), навіть якщо це дівчинка або хлопчик. А мама і сестра — die, тато і брат — der. Зручно!',
      miniQuiz: [
        { q:'Ich ___ Max.', a:'bin' },
        { q:'Er ___ mein Bruder.', a:'ist' },
        { q:'Wir ___ eine Familie.', a:'sind' }
      ]
    },
    dialogTitle: 'Am Familientreffen 🎂',
    dialog: [
      { s:'👵', t:'Anna, Liebling! Komm her, umarm deine Oma! 🤗', ua:'Аня, кохана! Іди сюди, обійми бабусю!' },
      { s:'👧', t:'Oma! Ich hab dich so vermisst!', ua:'Бабусю! Я так скучила!', r:true },
      { s:'👵', t:'Und wo ist dein Bruder Max?', ua:'А де брат твій, Макс?' },
      { s:'👧', t:'Er kommt gleich mit Papa. Mama ist schon in der Küche.', ua:'Він зараз з татом прийде. Мама вже на кухні.', r:true },
      { s:'👵', t:'Perfekt — die ganze Familie zusammen! ❤', ua:'Ідеально — вся сім\'я разом!' }
    ],
    quiz: [
      { q:'«die Oma» bedeutet:', opts:['тітка','бабуся','сестра','мама'], a:1 },
      { q:'Bruder von Mutter ist dein ___:', opts:['Onkel','Opa','Vater','Cousin'], a:0 },
      { q:'Welcher Artikel: ___ Kind?', opts:['der','die','das','—'], a:2 },
      { q:'«die Schwester» — was ist das?', opts:['шкільна','сестра','шосе','коротше'], a:1 },
      { q:'Wie viele Geschwister hat Anna?', opts:['1','2','3','keine'], a:1 }
    ]
  },

  /* ====================== 09 · GESUND ====================== */
  gesund: {
    emoji: '🏥', name: 'Gesundheit', level: 'A2', num: '09', color: 'var(--mint)',
    tagline: 'Von Kopfschmerzen bis Grippe — was sagen, wenn dir nicht gut ist. 🤒',
    vocab: [
      { art:'die', w:'Gesundheit',  ua:'здоров\'я',   ex:'Gesundheit ist das Wichtigste!' },
      { art:'der', w:'Arzt',        ua:'лікар',       ex:'Mein Arzt ist echt nett.' },
      { art:'die', w:'Apotheke',    ua:'аптека',      ex:'Die Apotheke ist gleich um die Ecke.' },
      { art:'das', w:'Medikament',  ua:'ліки',        ex:'Nimm das Medikament dreimal am Tag.' },
      { art:'die', w:'Krankheit',   ua:'хвороба',     ex:'Eine Krankheit, die jeder kennt: Erkältung.' },
      { art:'der', w:'Schmerz',     ua:'біль',        ex:'Mein Kopf tut weh — starker Schmerz!' },
      { art:'das', w:'Fieber',      ua:'температура', ex:'Ich hab 39 Grad Fieber. 🥵' },
      { art:'der', w:'Termin',      ua:'прийом',      ex:'Ich hab um 10 Uhr einen Termin.' },
      { art:'die', w:'Grippe',      ua:'грип',        ex:'Die Grippe macht mich fertig.' },
      { art:'das', w:'Rezept',      ua:'рецепт',      ex:'Ohne Rezept bekommst du das nicht.' }
    ],
    textTitle: 'Beim Arzt in Deutschland',
    text: [
      'Krank in Deutschland? Dann brauchst du einen <mark title="прийом">Termin</mark> beim <mark title="лікар">Arzt</mark>. Einfach hingehen klappt selten — ohne Termin wartest du oft stundenlang, oder sie schicken dich wieder nach Hause. Pro-Tipp: viele Arztpraxen bieten Termine online an.',
      'Beim ersten Besuch nimmst du deine Versicherungskarte mit. Fast alle in Deutschland haben eine gesetzliche oder private Krankenversicherung — ohne sie wird es richtig teuer. Die Karte zeigst du an der Rezeption, und schon bist du im System. 💳',
      'Der <mark title="лікар">Hausarzt</mark> ist dein erster Ansprechpartner bei allem — <mark title="біль">Schmerzen</mark>, Müdigkeit, <mark title="температура">Fieber</mark>, komische Flecken. Er untersucht dich, stellt Fragen und entscheidet, ob er dir direkt helfen kann oder zum Spezialisten (Facharzt) überweist.',
      'Wenn du Medikamente brauchst, bekommst du ein <mark title="рецепт">Rezept</mark>. Damit gehst du in die <mark title="аптека">Apotheke</mark>. In Deutschland gibt\'s fast keine Medikamente im Supermarkt — nur Vitamine und ein paar Kleinigkeiten. Alles andere? Nur Apotheke, nur mit Rezept.',
      'Ein großes Plus des deutschen Systems: Krankschreibung. Wenn du richtig krank bist — <mark title="грип">Grippe</mark>, starkes <mark title="температура">Fieber</mark> — schreibt dich der Arzt krank. Du schickst die Krankschreibung deinem Chef und bleibst legal zu Hause. Dein Gehalt bekommst du trotzdem. 🛌',
      'Notfälle? Ruf die 112 (kostenlos!) oder geh in die «Notaufnahme» im Krankenhaus. Aber Achtung: wenn es nicht wirklich ein Notfall ist, wartest du stundenlang — Herzinfarkt geht vor Schnupfen.',
      'Prävention ist in Deutschland groß. Jedes Jahr gibt\'s Check-ups bei der Krankenkasse. Zähne zum Zahnarzt zweimal im Jahr, sonst zahlst du mehr. Klingt nervig, aber <mark title="здоров\'я">Gesundheit</mark> ist hier wirklich das Wichtigste. 🏥'
    ],
    textUa: '🇺🇦 Потрібен запис до лікаря. Показуєш страховку. Лікар виписує рецепт → аптека → ліки. З температурою дають лікарняний, і зарплата йде. Швидка — 112. Профілактика важлива: стоматолог 2 рази на рік.',
    grammar: {
      title: 'Imperativ — накази та поради',
      intro: 'Коли лікар каже «Приймай ліки!» або мама — «Одягни куртку!», це Imperativ. Форм три: ти, ви (ввічливо), ви (множ.).',
      rules: [
        { head: 'du-Form', body: 'Беремо дієслово, вирізаємо -en і -st. «nehmen» → «nimm!» (сильні дієслова міняють корінь).', ex: ['Nimm das Medikament!', 'Trink viel Wasser!', 'Geh zum Arzt!'] },
        { head: 'Sie-Form (ввічливо)', body: 'Infinitiv + Sie: «Nehmen Sie!», «Trinken Sie!».', ex: ['Nehmen Sie Platz!', 'Warten Sie einen Moment!'] },
        { head: 'ihr-Form (мн.)', body: 'Як у теперішньому часі ihr: «Nehmt!», «Trinkt!».', ex: ['Trinkt mehr Wasser!', 'Kommt morgen wieder!'] }
      ],
      tip: '💡 У du-формі сильні дієслова зберігають зміну кореня: essen → iss!, nehmen → nimm!, sehen → sieh! Слабкі — ні: machen → mach!',
      miniQuiz: [
        { q:'___ das Medikament! (du)', a:'Nimm' },
        { q:'___ viel Wasser! (du)', a:'Trink' },
        { q:'___ Sie Platz! (ввічливо)', a:'Nehmen' }
      ]
    },
    dialogTitle: 'Beim Arzt 👨‍⚕',
    dialog: [
      { s:'👩', t:'Guten Tag. Ich hab seit 3 Tagen starke Kopfschmerzen und Fieber.', ua:'Добрий день. Вже 3 дні сильний головний біль і температура.' },
      { s:'👨‍⚕', t:'OK, lassen Sie mich mal messen. Wie hoch ist das Fieber?', ua:'OK, дайте поміряю. Яка температура?', r:true },
      { s:'👩', t:'39 Grad. Und ich fühle mich total schwach.', ua:'39 градусів. Почуваюсь слабо.' },
      { s:'👨‍⚕', t:'Das ist eine Grippe. Ich schreib Ihnen ein Rezept und eine Krankschreibung.', ua:'Це грип. Виписую рецепт і лікарняний.', r:true },
      { s:'👩', t:'Danke, Herr Doktor! Gute Besserung mir selbst! 😅', ua:'Дякую! Одужання мені самій!' }
    ],
    quiz: [
      { q:'«die Apotheke» bedeutet:', opts:['лікарня','аптека','кабінет','рецепт'], a:1 },
      { q:'«Ich hab 39 Grad ___»', opts:['Termin','Fieber','Rezept','Grippe'], a:1 },
      { q:'Welcher Artikel: ___ Arzt?', opts:['der','die','das','—'], a:0 },
      { q:'Was brauchst du für Medikament?', opts:['Termin','Rezept','Geld','Freund'], a:1 },
      { q:'«die Krankschreibung» ist:', opts:['рецепт','лікарняний','діагноз','мазь'], a:1 }
    ]
  },

  /* ====================== 10 · MEDIEN ====================== */
  medien: {
    emoji: '📺', name: 'Medien & News', level: 'B1', num: '10', color: 'var(--lilac)',
    tagline: 'Von TikTok bis Tagesschau — wie Deutsche Informationen konsumieren. 📰',
    vocab: [
      { art:'die', w:'Nachrichten', ua:'новини',       ex:'Ich schau Nachrichten meist auf Insta.' },
      { art:'die', w:'Zeitung',     ua:'газета',       ex:'Meine Oma liest jeden Morgen Zeitung.' },
      { art:'das', w:'Fernsehen',   ua:'телебачення',  ex:'Fernsehen ist so 2010. 😂' },
      { art:'die', w:'Sendung',     ua:'передача',     ex:'Diese Sendung läuft immer sonntags.' },
      { art:'der', w:'Kanal',       ua:'канал',        ex:'Sein YouTube-Kanal hat 1 Mio Abos.' },
      { art:'die', w:'Werbung',     ua:'реклама',      ex:'Werbung auf TikTok ist überall!' },
      { art:'der', w:'Journalist',  ua:'журналіст',    ex:'Der Journalist hat alles aufgedeckt.' },
      { art:'die', w:'Quelle',      ua:'джерело',      ex:'Prüf immer deine Quelle!' },
      { art:'die', w:'Meinung',     ua:'думка',        ex:'Jeder hat seine eigene Meinung.' },
      { art:'das', w:'Interview',   ua:'інтерв\'ю',    ex:'Das Interview war richtig lang.' }
    ],
    textTitle: 'News im Jahr 2026',
    text: [
      'Wie informieren sich Deutsche heute? Das hängt total vom Alter ab. Die Generation 60+ hält an den Klassikern fest: <mark title="газета">Zeitung</mark> am Morgen, Radio beim Autofahren, <mark title="телебачення">Fernsehen</mark> am Abend. Die «Tagesschau» um 20 Uhr ist heilig — fast 10 Millionen Menschen schauen sie täglich.',
      'Ab Mitte 30 wird\'s gemischt: Podcasts statt Radio, News-Apps statt Zeitung, Streamingdienste statt klassisches TV. Viele haben gar keinen Fernseher mehr — sie streamen alles über Laptop oder Smart-TV.',
      'Die Jungen? Instagram, TikTok, YouTube. Ein <mark title="канал">YouTube-Kanal</mark> kann heute mehr Reichweite haben als eine ganze <mark title="газета">Zeitung</mark>. Auf TikTok gibt es sogar «News-Creators», die in 60 Sekunden erklären, was auf der Welt los ist.',
      'Aber das hat einen Preis: <mark title="реклама">Werbung</mark> und Algorithmus-Blasen. Was du siehst, ist genau das, was der Algorithmus dir zeigen will — also meistens nur Dinge, die du ohnehin magst. So entstehen «Echo-Chambers», wo jeder seine eigene Wahrheit lebt.',
      'Fake News sind ein Riesenthema. Besonders vor Wahlen. Deepfakes werden immer realistischer — du siehst ein Video, es sieht echt aus, aber es ist komplett erfunden. Deshalb: check IMMER deine <mark title="джерело">Quelle</mark>. Am besten zwei oder drei verschiedene.',
      'Gute <mark title="журналіст">Journalisten</mark> sind Gold wert. Sie recherchieren, fragen kritisch, machen <mark title="інтерв\'ю">Interviews</mark> und decken Skandale auf. Deutschland hat starke öffentlich-rechtliche Sender (ARD, ZDF) — finanziert durch den Rundfunkbeitrag, den jeder Haushalt zahlt.',
      'Und deine eigene <mark title="думка">Meinung</mark>? Bilde sie nicht aus einem Post. Lies mehrere Quellen, hör verschiedene <mark title="передача">Sendungen</mark>, diskutier mit Freunden. Das ist anstrengender als nur TikTok scrollen — aber auch viel cooler. 🧠'
    ],
    textUa: '🇺🇦 60+ читає газети і дивиться «Tagesschau». 30+ — подкасти й стрімінг. Молодь — TikTok, Insta, YouTube. Фейки, дипфейки — перевіряй джерела. ARD і ZDF фінансуються через Rundfunkbeitrag.',
    grammar: {
      title: 'Konjunktiv II — «я б сказав»',
      intro: 'Коли хочеш сказати «я б зробив», «це було б круто» або ввічливо щось попросити — треба Konjunktiv II. Головна форма — «würde + Infinitiv».',
      rules: [
        { head: 'würde + Infinitiv', body: 'Найпростіший спосіб — для майже всіх дієслів.', ex: ['Ich würde das prüfen. — Я б це перевірив.', 'Würdest du mir helfen? — Ти б мені допоміг?'] },
        { head: 'wäre, hätte, könnte', body: 'Найважливіші «особливі» форми — вчити окремо.', ex: ['Das wäre super! — Це було б круто.', 'Ich hätte Zeit. — Я б мав час.', 'Könnten Sie…? — Чи не могли б Ви…?'] },
        { head: 'Вживання', body: 'Ввічливі прохання, фантазії («Якби я був…»), поради («На твоєму місці я б…»).', ex: ['Ich würde mehr lesen. — Я б більше читав.', 'An deiner Stelle würde ich die Quelle prüfen.'] }
      ],
      tip: '💡 «Könnten Sie mir helfen?» звучить у 10 разів ввічливіше, ніж «Können Sie mir helfen?». Magic word!',
      miniQuiz: [
        { q:'Ich ___ das gern machen.', a:'würde' },
        { q:'Das ___ super!', a:'wäre' },
        { q:'___ Sie mir helfen? (ввічливо)', a:'Könnten' }
      ]
    },
    dialogTitle: 'Die heiße Debatte 🔥',
    dialog: [
      { s:'👨', t:'Hast du den Skandal auf TikTok gesehen? Krass!', ua:'Бачив скандал у TikTok? Жесть!' },
      { s:'👩', t:'Bro, check deine Quelle! Das war ein Deepfake.', ua:'Брат, перевір джерело! Це був дипфейк.', r:true },
      { s:'👨', t:'Ernsthaft? Echt schwer, heute echte Nachrichten zu finden.', ua:'Серйозно? Важко знайти справжні новини.' },
      { s:'👩', t:'Genau. Ich les die Zeitung AM MORGEN, Podcasts am Abend.', ua:'Точно. Вранці газета, ввечері подкасти.', r:true },
      { s:'👨', t:'OK Boomer! 😂 Aber du hast recht — ich prüf das jetzt. 🧠', ua:'OK Boomer! Але твоя правда — піду перевірю.' }
    ],
    quiz: [
      { q:'«die Quelle» bedeutet:', opts:['стаття','джерело','автор','вихід'], a:1 },
      { q:'«Fake News» heißt:', opts:['правдиві новини','фейк/брехня','нова рубрика','гороскоп'], a:1 },
      { q:'Welcher Artikel: ___ Meinung?', opts:['der','die','das','—'], a:1 },
      { q:'«die Tagesschau» ist:', opts:['газета','вечірня ТВ-новина','подкаст','журнал'], a:1 },
      { q:'«der Kanal» im Internet:', opts:['потік','канал','пост','підписка'], a:1 }
    ]
  }
};
