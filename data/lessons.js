/* DeutschWeg — lessons data
 *
 * Schema per lesson:
 *   slug, emoji, title, titleHtml, level, duration, idx, intro
 *   vocab     [{ art, w, ua, ex }]          (10 items; verbs use art:'—')
 *   reading   { paragraphs:[html], uaSummary }  paragraphs may include <mark title="ua">word</mark>
 *   dialog    [{ who, de, ua }]             (5 lines; right-aligned on odd indexes)
 *   grammar   { chip, html }                 html rendered via innerHTML — uses <table class="grammar-table">
 *   quiz      [{ q, opts:[…], a:index }]    (5 questions)
 */

window.LESSONS = {

  /* ============================================================
   * 01 · KOCHEN — Essen & Kochen · A2
   * ============================================================ */
  kochen: {
    slug: 'kochen',
    emoji: '🍳',
    title: 'Essen & Kochen',
    titleHtml: 'Essen &amp;<br><em>Kochen</em> 🍳',
    level: 'A2',
    duration: '~18 min',
    idx: '01',
    intro: 'Brot, Brezeln und Butter — und die Wörter, mit denen du im Supermarkt NICHT mehr dumm dastehst. 🥨',
    memoryAnchors: {
      title: 'Riech mal kurz hin 👃',
      hint: 'Welches Essen bringt dich sofort irgendwohin? Schließ die Augen.',
      items: [
        { emoji: '🍜', de: 'Warme Nudelsuppe an kalten Tagen' },
        { emoji: '🥐', de: 'Duft von frischem Croissant am Morgen' },
        { emoji: '🌿', de: 'Basilikum frisch vom Fenster' },
        { emoji: '🍫', de: 'Schokolade, die langsam schmilzt' },
        { emoji: '🧄', de: 'Knoblauch in der Pfanne mit Olivenöl' },
        { emoji: '🍋', de: 'Zitrone über warmem Fisch' }
      ]
    },
    speakQuestions: [
      'Was isst du am liebsten? Hast du ein Lieblingsgericht?',
      'Kochst du oft zu Hause oder isst du lieber im Restaurant?',
      'Wer kocht bei dir zu Hause? Kochst du manchmal selbst?',
      'Was ist ein typisches Gericht in deinem Land? Beschreibe es.',
      'Frühstückst du jeden Morgen? Was isst du normalerweise zum Frühstück?',
      'Isst du gern Fleisch oder bist du Vegetarier/Veganer? Warum?',
      'Hast du schon einmal ein deutsches Gericht probiert? Was war das?',
      'Welches Essen magst du gar nicht? Warum?'
    ],
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
    reading: {
      paragraphs: [
        'In Deutschland isst man normalerweise dreimal am Tag: zum Frühstück, zum Mittagessen und zum Abendessen. Das Frühstück ist sehr wichtig — viele Deutsche essen <mark title="хліб">Brot</mark> oder Brötchen mit Käse, Wurst oder Marmelade.',
        'Das Mittagessen ist oft die <mark title="головна страва дня">Hauptmahlzeit</mark>. Viele Familien kochen ein warmes <mark title="страва">Gericht</mark> — zum Beispiel Kartoffeln mit Gemüse und Fleisch oder Fisch. Wer arbeitet, isst oft in der Kantine.',
        'Am Abend essen viele Deutsche kalt: Brot mit Käse, Wurst und Salat. Das nennt man «<mark title="вечеря з бутербродів">Abendbrot</mark>». Beliebt sind auch Suppen oder einfache Nudelgerichte.',
        'Aber die deutsche Küche hat sich verändert. Viele Deutsche essen international: Pizza, Pasta, Sushi, Döner. Es gibt immer mehr Vegetarier — sie kochen mit <mark title="рослинний">pflanzlichen</mark> <mark title="інгредієнтами">Zutaten</mark> wie Tofu oder Linsen.'
      ],
      uaSummary: '🇺🇦 У Німеччині зазвичай їдять тричі на день. Сніданок важливий — хліб або булочки з сиром чи мармеладом. На обід часто теплі страви. Увечері — «Abendbrot»: бутерброди з сиром, ковбасою та салатом.'
    },
    dialog: [
      { who:'👩', de:'Hey, was kochen wir heute? Ich hab Hunger! 🤤', ua:'Що сьогодні готуємо? Я хочу їсти!' },
      { who:'🧑', de:"Wie wär's mit Pasta? Hab Tomaten und Knoblauch.", ua:'Як щодо пасти? Є помідори та часник.' },
      { who:'👩', de:'Geil! 🔥 Ich schneide das Gemüse, du brätst die Zwiebeln?', ua:'Супер! Я поріжу овочі, ти підсмажиш цибулю?' },
      { who:'🧑', de:'Deal! Und würzen wir mit Basilikum und Parmesan? ✨', ua:'Домовились! Приправимо базиліком і пармезаном?' },
      { who:'👩', de:'Klar — lass uns kochen! 🍝', ua:'Звісно — давай готувати!' }
    ],
    grammar: {
      chip: 'Verben mit Präpositionen & Pronominaladverbien (darauf, darüber, worüber …)',
      html: `<div class="case-box"><div class="case-box-title">Крок 1 — Що таке дієслова з прийменниками?</div><p>Багато німецьких дієслів вимагають після себе <strong>фіксований прийменник</strong> — як і в українській. Наприклад: <strong>сподіватися на</strong> щось, <strong>говорити про</strong> щось, <strong>думати про</strong> когось.</p><p>У німецькій: <code>hoffen auf</code> (сподіватися на), <code>sprechen über</code> (говорити про), <code>denken an</code> (думати про). Ці комбінації потрібно <strong>вчити напам'ять</strong>!</p></div><div class="grammar-note"><strong>Але увага:</strong> коли після прийменника стоїть <strong>неживий об'єкт</strong>, в німецькій використовують особливі форми: <code>da(r)+прийменник</code> і <code>wo(r)+прийменник</code>.</div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 1: Дієслово + прийменник + іменник</div><p>Все як звичайно — дієслово, прийменник, іменник.</p></div><ul class="examples"><li>Ich <strong>hoffe auf</strong> gutes Wetter. <em>(Я сподіваюся на гарну погоду.)</em></li><li>Ich <strong>spreche über</strong> meine Reise. <em>(Я говорю про свою подорож.)</em></li></ul><div class="case-box"><div class="case-box-title">Випадок 2: Дієслово + прийменник + займенник (ЖИВЕ)</div><p>Коли мова про <strong>людину</strong>, використовуємо звичайний займенник після прийменника.</p></div><ul class="examples"><li>Ich <strong>hoffe auf</strong> sie. <em>(Я сподіваюся на неї.)</em></li><li>Ich <strong>spreche über</strong> ihn. <em>(Я говорю про нього.)</em></li></ul><div class="case-box"><div class="case-box-title">Випадок 3: Дієслово + da(r)+прийменник (НЕЖИВЕ)</div><p>Коли мова про <strong>річ, ідею, погоду</strong>, ми <strong>не можемо</strong> сказати <em>auf es</em>. Замість цього: <code>da + прийменник</code>. Якщо прийменник на голосну, додаємо <strong>r</strong>: <code>darauf</code>, <code>darüber</code>.</p></div><table class="rule-table"><thead><tr><th>Präposition</th><th>da(r)+форма</th><th>Приклад</th></tr></thead><tbody><tr><td>auf</td><td><code>darauf</code></td><td>Ich hoffe <strong>darauf</strong>.</td></tr><tr><td>über</td><td><code>darüber</code></td><td>Ich spreche <strong>darüber</strong>.</td></tr><tr><td>an</td><td><code>daran</code></td><td>Ich denke <strong>daran</strong>.</td></tr><tr><td>mit</td><td><code>damit</code></td><td>Ich bin <strong>damit</strong> zufrieden.</td></tr><tr><td>für</td><td><code>dafür</code></td><td>Ich bin <strong>dafür</strong>.</td></tr><tr><td>von</td><td><code>davon</code></td><td>Ich träume <strong>davon</strong>.</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 4: Питання про ЖИВЕ → прийменник + wen/wem</div><p>Питання про <strong>людину</strong>: прийменник + <code>wen</code> (Akk.) або <code>wem</code> (Dat.).</p></div><ul class="examples"><li><strong>Auf wen</strong> hoffst du? <em>(На кого?)</em></li><li><strong>Über wen</strong> sprichst du? <em>(Про кого?)</em></li><li><strong>Mit wem</strong> triffst du dich? <em>(З ким?)</em></li></ul><div class="case-box"><div class="case-box-title">Випадок 5: Питання про НЕЖИВЕ → wo(r)+прийменник</div><p>Питання про <strong>річ</strong>: <code>wo + прийменник</code>. Якщо прийменник на голосну — додаємо <strong>r</strong>: <code>worauf</code>, <code>worüber</code>.</p></div><table class="rule-table"><thead><tr><th>Präposition</th><th>wo(r)+форма</th><th>Приклад</th></tr></thead><tbody><tr><td>auf</td><td><code>worauf</code></td><td><strong>Worauf</strong> hoffst du?</td></tr><tr><td>über</td><td><code>worüber</code></td><td><strong>Worüber</strong> sprichst du?</td></tr><tr><td>an</td><td><code>woran</code></td><td><strong>Woran</strong> denkst du?</td></tr><tr><td>mit</td><td><code>womit</code></td><td><strong>Womit</strong> bist du zufrieden?</td></tr><tr><td>für</td><td><code>wofür</code></td><td><strong>Wofür</strong> interessierst du dich?</td></tr><tr><td>von</td><td><code>wovon</code></td><td><strong>Wovon</strong> träumst du?</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 6: da(r)+прийменник + підрядне речення</div><p>Коли йде <strong>ціле підрядне</strong> (dass, ob, was), використовуємо <code>da(r)+прийменник</code> як «тримач місця». Дієслово в підрядному — в <strong>кінець</strong>!</p></div><ul class="examples"><li>Ich hoffe <strong>darauf</strong>, <strong>dass</strong> du morgen <strong>kommst</strong>. <em>(Я сподіваюся, що ти прийдеш.)</em></li><li>Ich spreche <strong>darüber</strong>, <strong>was</strong> wir morgen <strong>kochen</strong>. <em>(Я говорю про те, що ми будемо готувати.)</em></li></ul><div class="divider"></div><div class="grammar-note"><strong>📌 Головне правило — запам'ятай!</strong><br>• <strong>Живе</strong> → прийменник + займенник / питання: <em>auf wen? mit wem?</em><br>• <strong>Неживе</strong> → <code>da(r)+прийменник</code> / питання: <code>wo(r)+прийменник</code>.</div>`
    },
    quiz: [
      { q:'Was bedeutet «die Zutat»?',                             opts:['інгредієнт','страва','ложка','рецепт'], a:0 },
      { q:'«Ich brate das Fleisch in der ___»',                    opts:['Löffel','Pfanne','Rezept','Mahlzeit'], a:1 },
      { q:'Welcher Artikel: ___ Gericht?',                         opts:['der','die','das','—'], a:2 },
      { q:'Was ist «das Abendbrot»?',                              opts:['warmes Abendessen','kaltes Abendessen mit Brot','Frühstück','Snack'], a:1 },
      { q:'Welches Wort bedeutet «смак»?',                         opts:['Geschmack','Geschwindigkeit','Geschirr','Gesicht'], a:0 }
    ]
  },

  /* ============================================================
   * 02 · UMWELT — Die Umwelt · A2
   * ============================================================ */
  umwelt: {
    slug: 'umwelt',
    emoji: '🌳',
    title: 'Die Umwelt',
    titleHtml: 'Die <em>Umwelt</em> 🌳',
    level: 'A2',
    duration: '~15 min',
    idx: '02',
    intro: 'Plastik, Müll und Klimawandel — Wörter, die du brauchst, um über unsere Erde zu sprechen. 🌍',
    speakQuestions: [
      'Was machst du persönlich für die Umwelt?',
      'Trennst du deinen Müll zu Hause? Wie machst du das?',
      'Fährst du oft mit dem Auto oder lieber mit dem Fahrrad oder dem Bus?',
      'Was ist das größte Umweltproblem in deiner Stadt oder in deinem Land?',
      'Kaufst du manchmal Bio-Produkte? Warum oder warum nicht?',
      'Wie war die Natur in deiner Kindheit? Hat sich etwas verändert?',
      'Was können Kinder für die Umwelt lernen?',
      'Was soll die Regierung für den Klimaschutz tun?'
    ],
    vocab: [
      { art:'die', w:'Umwelt',            ua:'довкілля',              ex:'Die Umwelt ist sehr wichtig für uns alle.' },
      { art:'der', w:'Müll',              ua:'сміття',                ex:'Es gibt zu viel Müll in den Städten.' },
      { art:'die', w:'Luftverschmutzung', ua:'забруднення повітря',   ex:'Die Luftverschmutzung ist ein großes Problem.' },
      { art:'das', w:'Recycling',         ua:'переробка',             ex:'Recycling hilft der Umwelt sehr.' },
      { art:'der', w:'Klimawandel',       ua:'зміна клімату',         ex:'Der Klimawandel macht die Temperaturen wärmer.' },
      { art:'die', w:'Energie',           ua:'енергія',               ex:'Wir müssen weniger Energie verbrauchen.' },
      { art:'—',   w:'sparen',            ua:'економити',             ex:'Wir können Wasser und Strom sparen.' },
      { art:'—',   w:'schützen',          ua:'захищати',              ex:'Viele Menschen versuchen, die Umwelt zu schützen.' },
      { art:'die', w:'Natur',             ua:'природа',               ex:'Die Natur ist wunderschön und wichtig.' },
      { art:'das', w:'Fahrrad',           ua:'велосипед',             ex:'Ich fahre mit dem Fahrrad statt mit dem Auto.' }
    ],
    reading: {
      paragraphs: [
        'Die <mark title="довкілля">Umwelt</mark> ist sehr wichtig für uns alle. Leider haben wir heute viele Probleme: Die Luft in den Städten ist oft schmutzig, und es gibt zu viel <mark title="сміття">Müll</mark>.',
        'Viele Menschen versuchen, die <mark title="довкілля">Umwelt</mark> zu schützen. Sie fahren mit dem <mark title="велосипед">Fahrrad</mark> statt mit dem Auto. Sie kaufen weniger Plastik und trennen ihren <mark title="сміття">Müll</mark> zu Hause.',
        'Auch der <mark title="зміна клімату">Klimawandel</mark> ist ein großes Problem. Die Temperaturen werden wärmer, und das Wetter ändert sich. Wir müssen <mark title="енергія">Energie</mark> sparen und mehr erneuerbare Energie benutzen.',
        'Jeder kann etwas tun — auch zu Hause. Zum Beispiel: das Licht ausschalten, kürzere Duschen nehmen oder weniger Fleisch essen. Kleine Schritte helfen der Umwelt sehr.'
      ],
      uaSummary: '🇺🇦 Довкілля дуже важливе для нас. Забруднення повітря і сміття — великі проблеми. Люди намагаються захищати природу: їздять на велосипедах, розділяють сміття, економлять енергію. Кожен може допомогти.'
    },
    dialog: [
      { who:'👩', de:'Hey, hast du gehört? Unsere Schule macht ein Umweltprojekt!',                             ua:'Слухай, наша школа робить проект про довкілля!' },
      { who:'🧑', de:'Echt? Was müssen wir denn machen?',                                                      ua:'Правда? Що нам робити?' },
      { who:'👩', de:'Wir sollen Müll sammeln und die Stadt sauberer machen. Möchtest du mitmachen?',          ua:'Ми маємо збирати сміття і очищувати місто. Хочеш долучитися?' },
      { who:'🧑', de:'Natürlich! Ich fahre immer mit dem Fahrrad — das ist auch umweltfreundlich! 🌱',          ua:'Звісно! Я завжди їжджу на велосипеді — це теж екологічно!' },
      { who:'👩', de:'Super! Zusammen können wir die Umwelt schützen. Wann treffen wir uns?',                  ua:'Супер! Разом ми можемо захистити довкілля. Коли зустрічаємось?' }
    ],
    grammar: {
      chip: 'Modalverben — шість модальних дієслів',
      html: `<div class="grammar-note">Модальні дієслова — <strong>хотіти, могти, мусити</strong> та ін. У німецькій їх <strong>шість</strong>. Головне дієслово — в <strong>кінці речення в інфінітиві</strong>.</div><div class="gram-box"><div class="gram-title">Крок 1 — müssen vs sollen (бути повинним)</div><div class="gram-rule">Обидва перекладаються як <strong>«повинен»</strong>, але різниця важлива!<ul class="examples"><li><strong>müssen</strong> — <strong>твоє власне</strong> відчуття обов'язку.<br><em>Ich muss mein Zimmer aufräumen.</em> — я сам так вважаю.</li><li><strong>sollen</strong> — <strong>хтось інший</strong> сказав.<br><em>Ich soll keine Tabletten nehmen.</em> — лікар так сказав.</li></ul></div></div><div class="gram-box"><div class="gram-title">Крок 2 — können vs dürfen (могти)</div><div class="gram-rule"><ul class="examples"><li><strong>können</strong> — <strong>фізична здатність</strong>.<br><em>Ich kann Gitarre spielen.</em></li><li><strong>dürfen</strong> — <strong>дозвіл</strong>.<br><em>Hier darf man nicht parken.</em> (Знак забороняє.)</li></ul></div></div><div class="gram-box"><div class="gram-title">Крок 3 — wollen vs möchten (хотіти)</div><div class="gram-rule"><ul class="examples"><li><strong>wollen</strong> — просте «хочу».<br><em>Ich will ein neues Handy.</em></li><li><strong>möchten</strong> — ввічливе «хотілося б».<br><em>Ich möchte einen Tee, bitte.</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Крок 4 — Повна таблиця відмінювання</div><div class="gram-rule">Однина (ich, du, er) — <strong>змінює голосну</strong>. Форми <code>ich</code> та <code>er/sie/es</code> — <strong>завжди однакові</strong>!<table class="gram-table"><thead><tr><th>Person</th><th>müssen</th><th>sollen</th><th>können</th><th>dürfen</th><th>wollen</th><th>möchten</th></tr></thead><tbody><tr><td><strong>ich</strong></td><td>muss</td><td>soll</td><td>kann</td><td>darf</td><td>will</td><td>möchte</td></tr><tr><td><strong>du</strong></td><td>musst</td><td>sollst</td><td>kannst</td><td>darfst</td><td>willst</td><td>möchtest</td></tr><tr><td><strong>er/sie/es</strong></td><td>muss</td><td>soll</td><td>kann</td><td>darf</td><td>will</td><td>möchte</td></tr><tr><td><strong>wir</strong></td><td>müssen</td><td>sollen</td><td>können</td><td>dürfen</td><td>wollen</td><td>möchten</td></tr><tr><td><strong>ihr</strong></td><td>müsst</td><td>sollt</td><td>könnt</td><td>dürft</td><td>wollt</td><td>möchtet</td></tr><tr><td><strong>sie/Sie</strong></td><td>müssen</td><td>sollen</td><td>können</td><td>dürfen</td><td>wollen</td><td>möchten</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Крок 5 — Порядок слів</div><div class="gram-rule">Модальне дієслово стоїть на <strong>другому місці</strong>, основне — в <strong>кінці в інфінітиві</strong>.<ul class="examples"><li><em>Ich <strong>muss</strong> mehr Wasser <strong>sparen</strong>.</em></li><li><em>Wir <strong>wollen</strong> die Natur <strong>schützen</strong>.</em></li><li><em><strong>Musst</strong> du morgen <strong>arbeiten</strong>?</em> (питання — модальне на першому місці)</li></ul></div></div><div class="gram-box"><div class="gram-title">Крок 6 — Модальні на тему Umwelt</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Дієслово</th><th>Приклад</th><th>Переклад</th></tr></thead><tbody><tr><td><strong>müssen</strong></td><td>Wir müssen mehr Energie sparen.</td><td>Мусимо економити.</td></tr><tr><td><strong>sollen</strong></td><td>Die Regierung soll mehr tun.</td><td>Уряд має робити більше.</td></tr><tr><td><strong>können</strong></td><td>Jeder kann etwas tun.</td><td>Кожен може щось зробити.</td></tr><tr><td><strong>dürfen</strong></td><td>Man darf hier keinen Müll wegwerfen.</td><td>Не можна викидати сміття.</td></tr><tr><td><strong>wollen</strong></td><td>Ich will weniger Plastik benutzen.</td><td>Хочу менше пластика.</td></tr><tr><td><strong>möchten</strong></td><td>Ich möchte mehr über Recycling lernen.</td><td>Хотіла б дізнатися більше.</td></tr></tbody></table></div></div>`
    },
    quiz: [
      { q:'Was bedeutet «die Umwelt»?',                                    opts:['сміття','довкілля','природна катастрофа','автомобіль'],            a:1 },
      { q:'«Ich ___ Energie sparen.» — welches Modalverb passt?',           opts:['bin','möchte','kann','wird'],                                     a:2 },
      { q:'Was ist umweltfreundlich?',                                     opts:['viel Auto fahren','mit dem Fahrrad fahren','Müll wegwerfen','Plastik kaufen'], a:1 },
      { q:'Der Klimawandel — was passiert?',                               opts:['Temperaturen werden kälter','Temperaturen werden wärmer','Regen wird weniger','nichts'], a:1 },
      { q:'Was kann ich zu Hause für die Umwelt tun?',                     opts:['nur Plastik einkaufen','Licht ausschalten und Müll trennen','mehr fahren','weniger Wasser trinken'], a:1 }
    ]
  },

  /* ============================================================
   * 03 · REISEN — Das Reisen · A2
   * ============================================================ */
  reisen: {
    slug: 'reisen',
    emoji: '✈️',
    title: 'Das Reisen',
    titleHtml: 'Das <em>Reisen</em> ✈️',
    level: 'A2',
    duration: '~18 min',
    idx: '03',
    intro: 'Flüge buchen, Züge nehmen, Hotels finden — alles, was du brauchst, um die Welt zu entdecken. 🗺️',
    memoryAnchors: {
      title: 'Dein Lieblingsmoment unterwegs ✈️',
      hint: 'Schließ kurz die Augen. Wo bist du gerade?',
      items: [
        { emoji: '🗺', de: 'Der erste Blick auf eine fremde Stadt' },
        { emoji: '☕', de: 'Kaffee in einem Café, das keiner kennt' },
        { emoji: '🏖', de: 'Sand zwischen den Zehen am Morgen' },
        { emoji: '🚂', de: 'Das Rattern eines Zuges durch Felder' },
        { emoji: '🌅', de: 'Sonnenaufgang, den du fast verschlafen hast' },
        { emoji: '🧳', de: 'Der Moment, wenn der Koffer endlich zu ist' }
      ]
    },
    speakQuestions: [
      'Beschreibe deine beste Reise in drei Sätzen: Wohin bist du gefahren, wie war es und was war das Schönste?',
      'Was ist dir bei einer Reise am wichtigsten — das Hotel, das Essen oder die Sehenswürdigkeiten?',
      'Hast du schon einmal einen Zug oder einen Flug verpasst? Was ist passiert?',
      'Reist du lieber spontan oder planst du alles im Voraus? Vor- und Nachteile?',
      'Wie bereitest du dich auf eine Reise vor? Was machst du zuerst?',
      'Welche Stadt oder welches Land möchtest du unbedingt einmal besuchen und warum?',
      'Hast du schon einmal allein gereist? War das eine positive oder negative Erfahrung?',
      'Was machst du, wenn du dich im Urlaub erholen willst?'
    ],
    vocab: [
      { art:'der', w:'Flughafen',        ua:'аеропорт',               ex:'Wir kommen um 6 Uhr früh am Flughafen an.' },
      { art:'das', w:'Gepäck',           ua:'багаж',                  ex:'Dein Gepäck ist zu schwer — du musst etwas rausnehmen.' },
      { art:'der', w:'Reisepass',        ua:'закордонний паспорт',    ex:'Vergiss deinen Reisepass nicht!' },
      { art:'die', w:'Abfahrt',          ua:'відправлення',           ex:'Die Abfahrt des Zuges ist um 14:32 Uhr.' },
      { art:'die', w:'Ankunft',          ua:'прибуття',               ex:'Die Ankunft in Barcelona war um Mitternacht.' },
      { art:'—',   w:'umsteigen',        ua:'робити пересадку',       ex:'Du musst in Wien umsteigen.' },
      { art:'die', w:'Sehenswürdigkeit', ua:'визначна пам’ятка',      ex:'Die Altstadt hat viele interessante Sehenswürdigkeiten.' },
      { art:'die', w:'Verspätung',       ua:'запізнення',             ex:'Der Zug hatte 40 Minuten Verspätung.' },
      { art:'—',   w:'sich erholen',     ua:'відпочивати',            ex:'Im Urlaub habe ich mich wirklich gut erholt.' },
      { art:'—',   w:'sich vorbereiten', ua:'готуватися',             ex:'Ich habe mich gut auf die Reise vorbereitet.' }
    ],
    reading: {
      paragraphs: [
        'Letzten Sommer hat sich meine Freundin Laura ihren Traum erfüllt: eine <mark title="подорож">Reise</mark> nach Portugal. Sie hatte sich monatelang <mark title="готуватися">vorbereitet</mark> — Tickets gebucht, Hotels verglichen und Listen mit den <mark title="визначні пам’ятки">Sehenswürdigkeiten</mark> gemacht.',
        'Am <mark title="аеропорт">Flughafen</mark> hat sie sich schnell eingecheckt und ihr <mark title="багаж">Gepäck</mark> aufgegeben. Sie hatte ihren <mark title="закордонний паспорт">Reisepass</mark> dabei — zum Glück! Der Flug war kurz, und Laura hat sich beim Lesen <mark title="відпочивати">erholt</mark>.',
        'In Lissabon hat Laura sofort ihr Zimmer bezogen. Am Abend ist sie in die Altstadt gegangen und hat sich von der Atmosphäre begeistern lassen. Mit der alten Straßenbahn Nummer 28 ist sie durch die engen Gassen gefahren — das war ihr liebstes Erlebnis.',
        'Nach zehn Tagen war die Reise zu Ende. Auf dem Rückflug hat Laura sich an alle schönen Momente erinnert. Nächstes Mal vielleicht mit dem Zug — durch Spanien, mit oder ohne <mark title="запізнення">Verspätung</mark>!'
      ],
      uaSummary: '🇺🇦 Лаура подорожувала до Португалії та готувалася кілька місяців. В аеропорту зареєструвалась, взяла багаж, перевірила паспорт. У Лісабоні їздила на трамваї 28. Через 10 днів поїхала назад з чудовими спогадами.'
    },
    dialog: [
      { who:'👩', de:'Ben, ich habe mich schon so lange auf einen richtigen Urlaub gefreut! Wie wäre es mit Wien?',                          ua:'Бене, я так довго чекала на відпустку! Як щодо Відня?' },
      { who:'🧑', de:'Stimmt! Aber wie lange dauert die Zugfahrt? Und muss man irgendwo umsteigen?',                                        ua:'Так! Але скільки часу їхати поїздом? Потрібно робити пересадку?' },
      { who:'👩', de:'Direkt etwa vier Stunden. Kein Umsteigen. Ich habe mich schon nach Verbindungen erkundigt — um 8:15 gibt es einen Direktzug!', ua:'Прямо близько чотирьох годин. Без пересадки. Я вже перевірила — о 8:15 є прямий потяг!' },
      { who:'🧑', de:'Perfekt! Und wo bleiben wir? Du hattest doch ein Hotel erwähnt…',                                                    ua:'Ідеально! А де ми зупинимось? Ти згадувала готель…' },
      { who:'👩', de:'Genau! Ich habe ein schönes Boutiquehotel im dritten Bezirk gefunden — nicht zu teuer und sehr zentral.',             ua:'Саме так! Знайшла чудовий бутік-готель у третьому районі — недорогий і центральний.' }
    ],
    grammar: {
      chip: 'Reflexivverben — зворотні дієслова на тему подорожей',
      html: `<div class="gram-box"><div class="gram-title">Крок 1 — Was ist ein Reflexivverb?</div><div class="gram-rule">Зворотне дієслово — дія якого <strong>повертається на підмет</strong>. По-українськи: я миюся, я радію. Частка <strong>-ся</strong> = скорочення від «себе».<ul class="examples"><li>❌ <strong>Не зворотне:</strong> <em>Ich wasche das Auto.</em> — дія іде на об'єкт.</li><li>✅ <strong>Зворотне:</strong> <em>Ich wasche <span class="sich">mich</span>.</em> — дія повертається на мене.</li></ul>У німецькій зворотна частка <strong>відокремлена від дієслова</strong> — <strong>Reflexivpronomen</strong>.</div></div><div class="gram-box"><div class="gram-title">Крок 2 — Таблиця зворотних займенників</div><div class="gram-rule">Для <em>er/sie/es/sie(Pl)/Sie</em> — завжди <strong>sich</strong>. Для інших — як звичайні особові.<table class="gram-table"><thead><tr><th>Особа</th><th>Приклад (sich freuen)</th><th>Akkusativ</th><th>Dativ</th></tr></thead><tbody><tr><td><strong>ich</strong></td><td>Ich freue <span class="sich">mich</span>.</td><td class="key">mich</td><td class="key">mir</td></tr><tr><td><strong>du</strong></td><td>Du freust <span class="sich">dich</span>.</td><td class="key">dich</td><td class="key">dir</td></tr><tr><td><strong>er/sie/es</strong></td><td>Er freut <span class="sich">sich</span>.</td><td class="key">sich</td><td class="key">sich</td></tr><tr><td><strong>wir</strong></td><td>Wir freuen <span class="sich">uns</span>.</td><td class="key">uns</td><td class="key">uns</td></tr><tr><td><strong>ihr</strong></td><td>Ihr freut <span class="sich">euch</span>.</td><td class="key">euch</td><td class="key">euch</td></tr><tr><td><strong>sie/Sie</strong></td><td>Sie freuen <span class="sich">sich</span>.</td><td class="key">sich</td><td class="key">sich</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Крок 3 — Akkusativ чи Dativ?</div><div class="gram-rule">Більшість — <strong>Akkusativ</strong> (себе). Dativ (собі) — коли є ще один об'єкт.<ul class="examples"><li><strong>Akk:</strong> Ich wasche <strong>mich</strong>. · Er freut <strong>sich</strong>. · Wir erholen <strong>uns</strong>.</li><li><strong>Dat + об'єкт:</strong> Ich wasche <strong>mir</strong> die Hände. · Ich merke <strong>mir</strong> das Wort.</li></ul><strong>Правило:</strong> якщо в реченні є інший об'єкт — <code>sich</code> в Dativ.</div></div><div class="gram-box"><div class="gram-title">Крок 4 — Відмінності від української</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>По-українськи</th><th>По-німецьки</th><th>Важливо!</th></tr></thead><tbody><tr><td>відпочивати (не зворотне)</td><td><code>sich erholen</code> ✅</td><td>В німецькій — зворотне!</td></tr><tr><td>запізнюватися</td><td><code>sich verspäten</code> ✅</td><td>В німецькій — зворотне!</td></tr><tr><td>сміятися (зворотне)</td><td><code>lachen</code> ❌</td><td>В німецькій — НЕ зворотне!</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Крок 5 — Порядок слів</div><div class="gram-rule"><ul class="examples"><li><strong>Просте:</strong> <em>Ich freue <strong>mich</strong> auf den Urlaub.</em></li><li><strong>Perfekt:</strong> <em>Ich habe <strong>mich</strong> gut erholt.</em> (НЕ: ~Ich habe erholt mich~)</li><li><strong>Modalverb:</strong> <em>Ich muss <strong>mich</strong> beeilen.</em></li><li><strong>Питання:</strong> <em>Hast du <strong>dich</strong> gut erholt?</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Важливі зворотні дієслова на тему Reisen</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Дієслово</th><th>Переклад</th><th>Приклад</th></tr></thead><tbody><tr><td><code>sich freuen auf + Akk.</code></td><td>радіти (майбутньому)</td><td><em>Ich freue mich auf den Urlaub.</em></td></tr><tr><td><code>sich vorbereiten auf + Akk.</code></td><td>готуватися до</td><td><em>Er hat sich auf die Reise vorbereitet.</em></td></tr><tr><td><code>sich erholen</code></td><td>відпочивати</td><td><em>Wir haben uns erholt.</em></td></tr><tr><td><code>sich beeilen</code></td><td>поспішати</td><td><em>Du musst dich beeilen!</em></td></tr><tr><td><code>sich anmelden</code></td><td>реєструватися</td><td><em>Ich habe mich angemeldet.</em></td></tr><tr><td><code>sich erinnern an + Akk.</code></td><td>згадувати</td><td><em>Ich erinnere mich an Portugal.</em></td></tr></tbody></table></div></div>`
    },
    quiz: [
      { q:'Was bedeutet «der Flughafen»?',                         opts:['вокзал','аеропорт','автостанція','морський порт'], a:1 },
      { q:'«Ich ___ mich auf die Reise vorbereitet.»',              opts:['bin','habe','werde','muss'],                      a:1 },
      { q:'Welches Verb ist reflexiv?',                            opts:['gehen','fahren','sich erholen','kaufen'],         a:2 },
      { q:'Was ist eine «Verspätung»?',                            opts:['рано','на час','запізнення','скасування'],        a:2 },
      { q:'Worauf hat sich Laura gefreut?',                        opts:['auf den Zug','auf Portugal','auf den Flughafen','auf Sparen'], a:1 }
    ]
  },

  /* ============================================================
   * 04 · FREIZEIT — Freizeit · A2
   * ============================================================ */
  freizeit: {
    slug: 'freizeit',
    emoji: '🎮',
    title: 'Freizeit',
    titleHtml: '<em>Freizeit</em> 🎮',
    level: 'A2',
    duration: '~20 min',
    idx: '04',
    intro: 'Sport, Hobbys, Partys — wie verbringst du deine freie Zeit? Hier lernst du die Wörter dafür. 🎾',
    speakQuestions: [
      'Was machst du normalerweise in deiner Freizeit? Beschreibe einen typischen freien Tag.',
      'Hast du ein besonderes Hobby? Seit wann machst du das und warum gefällt es dir?',
      'Bist du Mitglied in einem Verein oder einer Mannschaft?',
      'Was unternimmst du am liebsten mit Freunden? Erzähle von einem schönen Erlebnis.',
      'Wie entspannst du dich nach einem langen Arbeitstag?',
      'Welche Veranstaltungen besuchst du gern — Konzerte, Sportspiele, Festivals?',
      'Verbringst du deine Freizeit lieber aktiv oder gemütlich zu Hause?',
      'Wie hat sich deine Freizeit in den letzten Jahren verändert?'
    ],
    vocab: [
      { art:'die', w:'Freizeit',         ua:'вільний час',     ex:'In meiner Freizeit spiele ich gern Gitarre und treffe Freunde.' },
      { art:'das', w:'Hobby',            ua:'хобі',            ex:'Mein liebstes Hobby ist das Fotografieren.' },
      { art:'der', w:'Verein',           ua:'клуб, гурток',    ex:'Er ist seit drei Jahren Mitglied in einem Sportverein.' },
      { art:'die', w:'Mannschaft',       ua:'команда',         ex:'Unsere Mannschaft hat gestern das Spiel gewonnen!' },
      { art:'das', w:'Erlebnis',         ua:'враження',        ex:'Das Konzert war ein unvergessliches Erlebnis.' },
      { art:'die', w:'Veranstaltung',    ua:'захід, подія',    ex:'Am Wochenende gibt es eine Veranstaltung im Park.' },
      { art:'—',   w:'sich entspannen',  ua:'розслаблятися',   ex:'Nach der Arbeit entspanne ich mich mit einem Buch.' },
      { art:'—',   w:'teilnehmen',       ua:'брати участь',    ex:'Möchtest du am Workshop am Samstag teilnehmen?' },
      { art:'—',   w:'unternehmen',      ua:'здійснювати',     ex:'Am Sonntag wollen wir etwas Besonderes unternehmen.' },
      { art:'—',   w:'gesellig',         ua:'товариський',     ex:'Sie ist ein sehr geselliger Mensch.' }
    ],
    reading: {
      paragraphs: [
        'Mein Freund Lukas hat einen stressigen Job, aber in seiner <mark title="вільний час">Freizeit</mark> ist er aktiv und <mark title="товариський">gesellig</mark>. Sein wichtigstes <mark title="хобі">Hobby</mark> ist Fußball. Seit fünf Jahren ist er in einem <mark title="клуб">Verein</mark> und trainiert zweimal pro Woche mit seiner <mark title="команда">Mannschaft</mark>.',
        'Am Wochenende <mark title="здійснювати">unternimmt</mark> Lukas immer etwas Besonderes. Letzte Woche hat er an einer <mark title="захід">Veranstaltung</mark> im Stadtpark <mark title="брати участь">teilgenommen</mark> — einem Straßenmusik-Festival. Das war ein tolles <mark title="враження">Erlebnis</mark>! Er hat neue Leute kennengelernt und getanzt.',
        'Unter der Woche <mark title="розслаблятися">entspannt</mark> sich Lukas zu Hause. Er kocht etwas Leckeres, hört Musik und liest deutsche Krimis. Manchmal trifft er sich mit alten Freunden und sie spielen Karten.',
        'Lukas sagt: Eine gute Balance zwischen Sport und Erholung ist das Wichtigste. Im Verein bin ich Teil einer Mannschaft — das gibt mir Energie. Aber zu Hause mit Tee auf dem Sofa — das gibt mir inneren Frieden.'
      ],
      uaSummary: '🇺🇦 Лукас активно проводить вільний час: грає у футбол в клубі, ходить на заходи, танцює на фестивалях. Під час тижня розслабляється вдома: готує, слухає музику, читає. Баланс між спортом і спокоєм — найважливіший.'
    },
    dialog: [
      { who:'👩', de:'Max, was machst du am Wochenende? Möchtest du etwas Besonderes unternehmen?',                                      ua:'Макс, що ти робиш на вихідних? Хочеш щось цікаве зробити?' },
      { who:'🧑', de:'Ich weiß noch nicht… Trainierst du noch im Verein? Ich könnte teilnehmen!',                                        ua:'Ще не знаю… Ти ще тренуєшся в клубі? Я міг би долучитися!' },
      { who:'👩', de:'Ja, immer dienstags und donnerstags! Oder wir könnten zu einer Veranstaltung gehen — es gibt ein Musikfestival!', ua:'Так, по вівторках і четвергах! Або підемо на захід — у парку музичний фестиваль!' },
      { who:'🧑', de:'Oh, ein Festival! Das klingt toll. Danach könnten wir in einem Café entspannen.',                                  ua:'О, фестиваль! Звучить чудово. Потім розслабимось у кафе.' },
      { who:'👩', de:'Perfekt! Du bist ein geselliger Typ. Sollen wir um 6 Uhr dort anfangen?',                                         ua:'Ідеально! Ти товариський. Можемо почати о 6?' }
    ],
    grammar: {
      chip: 'Adjektivdeklination — відмінювання прикметників',
      html: `<div class="gram-box"><div class="gram-title">Блок 1 — Що таке відмінювання прикметників?</div><div class="gram-rule">Прикметники <strong>змінюють закінчення</strong> залежно від відмінка, роду і артикля. Закінчення з'являється <strong>тільки перед іменником</strong>. Після <em>sein/werden</em> — без закінчення.<ul class="examples"><li>✅ <em>Das ist ein <strong>großer</strong> Park.</em> · <em>Ich sehe den <strong>schönen</strong> Garten.</em></li><li>❌ <em>Der Park ist <strong>groß</strong>.</em> (без закінчення — це предикатив)</li></ul>Існують <strong>три типи</strong> — залежно від артикля.</div></div><div class="gram-box"><div class="gram-title">Блок 2 — Тип 1: Слабке (з der/die/das)</div><div class="gram-rule">Коли артикль вже <strong>показує</strong> рід і відмінок. Закінчення — тільки <strong>-e</strong> або <strong>-en</strong>.<table class="gram-table"><thead><tr><th>Kasus</th><th>Maskulin</th><th>Neutrum</th><th>Feminin</th><th>Plural</th></tr></thead><tbody><tr><td><strong>Nom.</strong></td><td>der groß<span class="ending">e</span> Mann</td><td>das klein<span class="ending">e</span> Kind</td><td>die schön<span class="ending">e</span> Frau</td><td>die gut<span class="ending-en">en</span> Kinder</td></tr><tr><td><strong>Akk.</strong></td><td>den groß<span class="ending-en">en</span> Mann</td><td>das klein<span class="ending">e</span> Kind</td><td>die schön<span class="ending">e</span> Frau</td><td>die gut<span class="ending-en">en</span> Kinder</td></tr><tr><td><strong>Dat.</strong></td><td>dem groß<span class="ending-en">en</span> Mann</td><td>dem klein<span class="ending-en">en</span> Kind</td><td>der schön<span class="ending-en">en</span> Frau</td><td>den gut<span class="ending-en">en</span> Kindern</td></tr></tbody></table><strong>Запам'ятай:</strong> «острівець» -e — це Nom. (M/N/F) + Akk. (N/F). Все інше — <strong>-en</strong>.</div></div><div class="gram-box"><div class="gram-title">Блок 3 — Тип 2: Мішане (з ein/mein/kein)</div><div class="gram-rule">У 3 формах <code>ein</code> не показує рід → прикметник бере цю роботу.<table class="gram-table"><thead><tr><th>Kasus</th><th>Maskulin</th><th>Neutrum</th><th>Feminin</th><th>Plural</th></tr></thead><tbody><tr><td><strong>Nom.</strong></td><td>ein groß<span class="ending-special">er</span> Mann</td><td>ein klein<span class="ending-special">es</span> Kind</td><td>eine schön<span class="ending">e</span> Frau</td><td>meine gut<span class="ending-en">en</span> Kinder</td></tr><tr><td><strong>Akk.</strong></td><td>einen groß<span class="ending-en">en</span> Mann</td><td>ein klein<span class="ending-special">es</span> Kind</td><td>eine schön<span class="ending">e</span> Frau</td><td>meine gut<span class="ending-en">en</span> Kinder</td></tr><tr><td><strong>Dat.</strong></td><td>einem groß<span class="ending-en">en</span> Mann</td><td>einem klein<span class="ending-en">en</span> Kind</td><td>einer schön<span class="ending-en">en</span> Frau</td><td>meinen gut<span class="ending-en">en</span> Kindern</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Блок 4 — Тип 3: Сильне (без артикля)</div><div class="gram-rule">Прикметник сам показує рід і відмінок (закінчення — як у <em>der/die/das</em>).<table class="gram-table"><thead><tr><th>Kasus</th><th>Maskulin</th><th>Neutrum</th><th>Feminin</th><th>Plural</th></tr></thead><tbody><tr><td><strong>Nom.</strong></td><td>groß<span class="ending-special">er</span> Mann</td><td>klein<span class="ending-special">es</span> Kind</td><td>schön<span class="ending">e</span> Frau</td><td>gut<span class="ending">e</span> Kinder</td></tr><tr><td><strong>Akk.</strong></td><td>groß<span class="ending-en">en</span> Mann</td><td>klein<span class="ending-special">es</span> Kind</td><td>schön<span class="ending">e</span> Frau</td><td>gut<span class="ending">e</span> Kinder</td></tr><tr><td><strong>Dat.</strong></td><td>groß<span class="ending-special">em</span> Mann</td><td>klein<span class="ending-special">em</span> Kind</td><td>schön<span class="ending-special">er</span> Frau</td><td>gut<span class="ending-en">en</span> Kindern</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Блок 5 — Просте правило</div><div class="gram-rule"><ol><li>Артикль <strong>вже показує</strong> рід/відмінок? → <strong>-e</strong> або <strong>-en</strong></li><li>Артикль <strong>НЕ показує</strong>? → Прикметник <strong>бере роботу</strong> (закінчення як у der/die/das)</li><li>Після іменника (<em>sein</em>)? → <strong>Без закінчення</strong>!</li></ol></div></div><div class="gram-box"><div class="gram-title">Важливі прикметники Freizeit</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Прикметник</th><th>Переклад</th><th>Приклад</th></tr></thead><tbody><tr><td><code>sportlich</code></td><td>спортивний</td><td><em>ein sportlicher Typ</em> (Тип 2)</td></tr><tr><td><code>gesellig</code></td><td>товариський</td><td><em>mit geselligen Leuten</em> (Тип 3)</td></tr><tr><td><code>spannend</code></td><td>захоплюючий</td><td><em>einen spannenden Film</em> (Тип 2)</td></tr><tr><td><code>gemütlich</code></td><td>затишний</td><td><em>in dem gemütlichen Café</em> (Тип 1)</td></tr></tbody></table></div></div>`
    },
    quiz: [
      { q:'Was bedeutet «die Freizeit»?',                                  opts:['робочий час','вільний час','канікули','уроки'], a:1 },
      { q:'«Das war eine ___ Veranstaltung.» Welches Adjektiv passt?',     opts:['langweilig','langweilige','langweiligen','—'],  a:1 },
      { q:'«Ich bin ein ___ Mensch.»',                                     opts:['geselliger','gesellige','geselligen','gesellig'], a:0 },
      { q:'Lukas trainiert in einem ___. Was ist das?',                    opts:['Café','Verein','Festival','Konzert'],          a:1 },
      { q:'Was bedeutet «sich entspannen»?',                               opts:['arbeiten','spielen','sich ausruhen','trainieren'], a:2 }
    ]
  },

  /* ============================================================
   * 05 · BERUF — Arbeit & Beruf · A2-B1
   * ============================================================ */
  beruf: {
    slug: 'beruf',
    emoji: '💼',
    title: 'Arbeit & Beruf',
    titleHtml: 'Arbeit &amp;<br><em>Beruf</em> 💼',
    level: 'A2-B1',
    duration: '~18 min',
    idx: '05',
    intro: 'Bewerbung, Vorstellungsgespräch, Ausbildung — alles, was du für den deutschen Arbeitsmarkt brauchst. 📝',
    speakQuestions: [
      'Was ist dein Traumberuf? Warum interessiert dich dieser Beruf?',
      'Hast du schon mal ein Vorstellungsgespräch gehabt? Wie war es?',
      'Was ist dir bei der Arbeit am wichtigsten — Gehalt, Kollegen oder Arbeitszeiten?',
      'Möchtest du lieber selbstständig arbeiten oder in einer großen Firma? Warum?',
      'Welche Berufe sind in deinem Land besonders beliebt?',
      'Was muss man machen, um in Deutschland eine gute Arbeit zu finden?',
      'Hast du schon einmal einen Nebenjob gehabt? Was hast du dort gemacht?',
      'Wie stellst du dir deine Karriere in fünf Jahren vor?'
    ],
    vocab: [
      { art:'der', w:'Arbeitgeber',           ua:'роботодавець',         ex:'Mein Arbeitgeber bietet flexible Arbeitszeiten an.' },
      { art:'der', w:'Arbeitnehmer',          ua:'працівник',            ex:'Die Arbeitnehmer haben Recht auf 30 Tage Urlaub.' },
      { art:'die', w:'Bewerbung',             ua:'заявка на роботу',     ex:'Ich habe meine Bewerbung an drei Firmen geschickt.' },
      { art:'das', w:'Vorstellungsgespräch',  ua:'співбесіда',           ex:'Morgen habe ich ein wichtiges Vorstellungsgespräch.' },
      { art:'die', w:'Ausbildung',            ua:'професійне навчання',  ex:'Nach der Schule hat er eine Ausbildung gemacht.' },
      { art:'der', w:'Lebenslauf',            ua:'автобіографія, CV',    ex:'Dein Lebenslauf muss aktuell und übersichtlich sein.' },
      { art:'—',   w:'kündigen',              ua:'звільнятися',          ex:'Er hat gekündigt, weil er eine bessere Stelle gefunden hat.' },
      { art:'—',   w:'sich bewerben',         ua:'подавати заявку',      ex:'Sie bewirbt sich um eine Stelle als Marketingmanagerin.' },
      { art:'—',   w:'verdienen',             ua:'заробляти',            ex:'Als Ingenieur verdient man in Deutschland gut.' },
      { art:'—',   w:'selbstständig',         ua:'самозайнятий',         ex:'Mein Bruder arbeitet selbstständig als Grafikdesigner.' }
    ],
    reading: {
      paragraphs: [
        'Marta kommt aus der Ukraine und lebt seit zwei Jahren in Deutschland. Am Anfang war es nicht leicht, eine Arbeit zu finden. Zuerst hat sie einen <mark title="автобіографія, CV">Lebenslauf</mark> geschrieben und viele <mark title="заявка на роботу">Bewerbungen</mark> an verschiedene Firmen geschickt.',
        'Nach drei Wochen hat sie eine Einladung zu einem <mark title="співбесіда">Vorstellungsgespräch</mark> bei einer Marketingfirma bekommen. Sie hat versucht, sich gut vorzubereiten. Der <mark title="роботодавець">Arbeitgeber</mark> war freundlich und hat Marta viele Fragen gestellt.',
        'Leider hat Marta die Stelle nicht bekommen. Aber anstatt aufzugeben, hat sie beschlossen, eine <mark title="професійне навчання">Ausbildung</mark> als Bürokauffrau zu machen. Sie <mark title="заробляти">verdient</mark> jetzt gut und ist zufrieden.',
        'Ihre Kollegin Anna hat letzten Monat <mark title="звільнятися">gekündigt</mark>, weil sie <mark title="самозайнятий">selbstständig</mark> arbeiten möchte. Sie plant, eine eigene kleine Firma zu gründen — nicht einfach, aber sehr spannend.'
      ],
      uaSummary: '🇺🇦 Марта з України переїхала в Німеччину. Спочатку важко було знайти роботу. Вона написала резюме та подала заявки у різні компанії. Першу співбесіду не пройшла, але замість здачі записалась на навчання і тепер добре заробляє.'
    },
    dialog: [
      { who:'👩', de:'Hey, wie war dein Vorstellungsgespräch heute? Erzähl mir alles!',                                 ua:'Привіт, як була твоя співбесіда сьогодні? Розкажи все!' },
      { who:'🧑', de:'Anfangs war ich sehr nervös, aber der Chef war sehr freundlich und nett.',                        ua:'Спочатку я дуже нервувався, але начальник був дуже привітний.' },
      { who:'👩', de:'Das ist gut! Hast du schon erfahren, ob du den Job bekommst?',                                    ua:'Це добре! Ти вже знаєш, чи отримаєш роботу?' },
      { who:'🧑', de:'Leider nicht. Sie sagten, sie brauchen noch eine Woche, um eine Entscheidung zu treffen.',        ua:'На жаль, ще ні. Сказали, що потрібен ще тиждень.' },
      { who:'👩', de:'Dann drücke ich dir die Daumen! Ich bin sicher, dass alles gut wird! 🍀',                          ua:'Тоді тримаю за тебе кулаки! Впевнена, усе буде добре!' }
    ],
    grammar: {
      chip: 'Infinitivsätze — zu + Infinitiv, um...zu, ohne...zu, (an)statt...zu',
      html: `<div class="gram-box"><div class="gram-title">Блок 1 — Що таке інфінітивне речення?</div><div class="gram-rule">Інфінітивні речення — конструкція <strong>zu + Infinitiv</strong> наприкінці. Часто замінюють підрядне з <em>dass</em>.<ul class="examples"><li><strong>dass-Satz:</strong> <em>Ich hoffe, dass ich die Prüfung bestehe.</em></li><li><strong>zu + Infinitiv:</strong> <em>Ich hoffe, die Prüfung <strong>zu bestehen</strong>.</em></li></ul><strong>Важливо:</strong> zu + Infinitiv працює тільки коли <strong>підмет обох частин однаковий!</strong> Якщо різний → тільки <em>dass</em>.<br><br><strong>З відокремлюваними дієсловами:</strong> <code>zu</code> ставиться <strong>між</strong> префіксом і дієсловом: <em>anzufangen, einzukaufen, vorzubereiten</em>.</div></div><div class="gram-box"><div class="gram-title">Блок 2 — Дієслова з zu + Infinitiv</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Дієслово / Вираз</th><th>Переклад</th><th>Приклад</th></tr></thead><tbody><tr><td><code>versuchen</code></td><td>намагатися</td><td><em>Ich versuche, pünktlich zu kommen.</em></td></tr><tr><td><code>anfangen</code></td><td>починати</td><td><em>Er fängt an, Deutsch zu lernen.</em></td></tr><tr><td><code>aufhören</code></td><td>припиняти</td><td><em>Sie hat aufgehört, dort zu arbeiten.</em></td></tr><tr><td><code>hoffen</code></td><td>сподіватися</td><td><em>Wir hoffen, bald eine Antwort zu bekommen.</em></td></tr><tr><td><code>planen</code></td><td>планувати</td><td><em>Ich plane, mich zu bewerben.</em></td></tr><tr><td><code>Es ist wichtig / schwer</code></td><td>Це важливо / важко</td><td><em>Es ist wichtig, einen guten Lebenslauf zu haben.</em></td></tr><tr><td><code>Ich habe Lust / Angst</code></td><td>Я маю бажання / страх</td><td><em>Ich habe Angst, den Job zu verlieren.</em></td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Блок 3 — um...zu + Infinitiv (щоб)</div><div class="gram-rule"><code>um ... zu + Infinitiv</code> виражає <strong>мету</strong> — навіщо хтось щось робить.<ul class="examples"><li><em>Ich lerne Deutsch, <strong>um</strong> in Deutschland <strong>zu arbeiten</strong>.</em></li><li><em>Er spart Geld, <strong>um</strong> ein Auto <strong>zu kaufen</strong>.</em></li><li><em>Sie schreibt eine Bewerbung, <strong>um</strong> eine Stelle <strong>zu finden</strong>.</em></li></ul><strong>Увага:</strong> якщо підмети <strong>різні</strong> → <code>damit</code>, не um...zu!<br><em>Er spricht langsam, <strong>damit ich</strong> ihn verstehe.</em></div></div><div class="gram-box"><div class="gram-title">Блок 4 — ohne...zu + Infinitiv (без того, щоб)</div><div class="gram-rule"><ul class="examples"><li><em>Er ging weg, <strong>ohne</strong> sich <strong>zu verabschieden</strong>.</em> (не попрощавшись)</li><li><em>Sie hat den Vertrag unterschrieben, <strong>ohne</strong> ihn <strong>zu lesen</strong>.</em></li><li><em>Er hat gekündigt, <strong>ohne</strong> eine neue Stelle <strong>zu haben</strong>.</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Блок 5 — (an)statt...zu + Infinitiv (замість того, щоб)</div><div class="gram-rule"><ul class="examples"><li><em><strong>Anstatt</strong> zu arbeiten, spielt er Computerspiele.</em></li><li><em><strong>Statt</strong> den Bus <strong>zu nehmen</strong>, geht sie zu Fuß.</em></li><li><em><strong>Anstatt</strong> aufzugeben, hat Marta eine Ausbildung gemacht.</em></li></ul><code>anstatt</code> і <code>statt</code> — це одне й те саме.</div></div><div class="gram-box"><div class="gram-title">Підсумок — чотири конструкції</div><div class="gram-rule"><ol><li><strong>zu + Inf:</strong> <em>Ich versuche, pünktlich zu kommen.</em></li><li><strong>um...zu:</strong> <em>Ich lerne, um besser zu sprechen.</em></li><li><strong>ohne...zu:</strong> <em>Er ging, ohne etwas zu sagen.</em></li><li><strong>(an)statt...zu:</strong> <em>Statt zu lernen, schläft er.</em></li></ol></div></div>`
    },
    quiz: [
      { q:'Was bedeutet «der Arbeitgeber»?',                        opts:['той, хто дає роботу','той, хто працює','дипломат','менеджер'], a:0 },
      { q:'Welche Konstruktion drückt die Absicht aus?',            opts:['ohne…zu','um…zu','statt zu','versuchen zu'],                   a:1 },
      { q:'Marta hat beschlossen, eine ___ zu machen.',             opts:['Stelle','Bewerbung','Ausbildung','Vorstellung'],               a:2 },
      { q:'Was bedeutet «selbstständig»?',                          opts:['самозайнятий','зайнятий','організований','комунікабельний'],    a:0 },
      { q:'Das Hauptproblem von Marta am Anfang?',                  opts:['Sie kannte niemanden','Sie sprach kein Deutsch','Es war schwer, Arbeit zu finden','Sie hatte kein Geld'], a:2 }
    ]
  },

  /* ============================================================
   * 06 · TECHNIK — Internet & Technik · B1
   * ============================================================ */
  technik: {
    slug: 'technik',
    emoji: '📱',
    title: 'Internet & Technik',
    titleHtml: 'Internet &amp;<br><em>Technik</em> 📱',
    level: 'B1',
    duration: '~20 min',
    idx: '06',
    intro: 'Apps, Passwörter, Clouds und Cybersicherheit — die Wörter, die du in der digitalen Welt brauchst. 💾',
    speakQuestions: [
      'Wie viele Stunden verbringst du täglich im Internet?',
      'Welche Apps benutzt du am häufigsten und warum?',
      'Hast du schon mal ein Sicherheitsproblem im Internet gehabt?',
      'Kaufst du lieber online oder im Geschäft? Warum?',
      'Welche sozialen Netzwerke benutzt du? Was gefällt dir daran?',
      'Glaubst du, dass das Internet mehr Vorteile oder Nachteile hat?',
      'Welche App würdest du erfinden, wenn du könntest?',
      'Wie schützt du deine persönlichen Daten online?'
    ],
    vocab: [
      { art:'das', w:'Internet',       ua:'інтернет',         ex:'Ich nutze das Internet täglich für die Arbeit.' },
      { art:'das', w:'Handy',          ua:'мобільний телефон', ex:'Mein Handy hat einen großen Akku.' },
      { art:'die', w:'App',            ua:'додаток',          ex:'Die App, die ich am meisten benutze, heißt Duolingo.' },
      { art:'der', w:'Computer',       ua:'комп’ютер',        ex:'Der Computer, den ich für die Arbeit brauche, ist schnell.' },
      { art:'das', w:'Passwort',       ua:'пароль',           ex:'Das Passwort muss sicher sein.' },
      { art:'die', w:'Webseite',       ua:'веб-сайт',         ex:'Die Webseite ist sehr informativ.' },
      { art:'das', w:'Netzwerk',       ua:'мережа',           ex:'Das Netzwerk, dem alle Mitarbeiter angehören, funktioniert gut.' },
      { art:'—',   w:'herunterladen',  ua:'завантажувати',    ex:'Ich habe das Programm heruntergeladen.' },
      { art:'—',   w:'speichern',      ua:'зберігати',        ex:'Alle Dateien, die du speicherst, landen in der Cloud.' },
      { art:'die', w:'Cloud',          ua:'хмарне сховище',   ex:'Die Cloud ist ein Speicher, den man übers Internet nutzt.' }
    ],
    reading: {
      paragraphs: [
        'Das <mark title="інтернет">Internet</mark> ist heute ein wichtiger Teil unseres Lebens. Julia ist eine Studentin, die in München Informatik studiert. Sie lernt viel online und benutzt eine <mark title="додаток">App</mark> zum Sprachenlernen.',
        'Aber nicht alles ist einfach in der digitalen Welt. Das <mark title="пароль">Passwort</mark>, das man für jeden Online-Service braucht, muss sicher sein. Viele Menschen, die dasselbe Passwort für alle Konten benutzen, machen einen gefährlichen Fehler.',
        'Julia hat deshalb einen Passwort-Manager — ein Programm, das sichere Passwörter erstellt und <mark title="зберігати">speichert</mark>. Sie empfiehlt ihn allen Freunden, die ihr online schreiben.',
        'Das Internet ist ein Werkzeug, das man richtig benutzen muss. Informationen, die man findet, sollte man immer überprüfen — vor allem in sozialen <mark title="мережі">Netzwerken</mark>, wo Falschmeldungen schnell verbreitet werden.'
      ],
      uaSummary: '🇺🇦 Інтернет — важлива частина життя. Студентка Юлія використовує додаток Duolingo для навчання мов. Найбільша проблема — небезпечні паролі. Вона рекомендує менеджер паролів, щоб захистити облікові записи від хакерів.'
    },
    dialog: [
      { who:'💻', de:'Guten Tag, hier ist der IT-Support. Was kann ich für Sie tun?',                                                     ua:'Добрий день, це IT-підтримка. Чим можу допомогти?' },
      { who:'📞', de:'Guten Tag! Mein Computer startet nicht mehr. Ich habe ihn mehrmals neu gestartet, aber es hat nichts geholfen.',    ua:'Добрий день! Мій комп’ютер не запускається. Я перезавантажував кілька разів, але не допомогло.' },
      { who:'💻', de:'Seit wann haben Sie dieses Problem?',                                                                              ua:'Відколи у вас ця проблема?' },
      { who:'📞', de:'Seit heute Morgen. Ich wollte eine wichtige Datei öffnen, und seitdem funktioniert nichts mehr.',                   ua:'З сьогоднішнього ранку. Хотів відкрити важливий файл — і тепер нічого не працює.' },
      { who:'💻', de:'Welches Betriebssystem benutzen Sie — Windows oder Mac? Ich kann Ihnen besser helfen, wenn ich das weiß.',           ua:'Яку операційну систему використовуєте — Windows чи Mac? Знаючи це, я краще допоможу.' }
    ],
    grammar: {
      chip: 'Relativsätze — відносні речення',
      html: `<div class="gram-box"><div class="gram-title">Relativsätze — відносні речення</div><div class="gram-rule">Relativsätze пояснюють або уточнюють іменник (<strong>Bezugswort</strong>). Дієслово стоїть <strong>НАПРИКІНЦІ</strong>.<ul class="examples"><li>✅ <em>Das ist die Frau, <strong>die</strong> hier arbeitet.</em> (Nom — хто)</li><li>✅ <em>Das ist die Frau, <strong>die</strong> ich kenne.</em> (Akk — кого)</li><li>✅ <em>Das ist die Frau, <strong>der</strong> ich helfe.</em> (Dat — кому)</li></ul></div></div><div class="gram-box"><div class="gram-title">Relativpronomen — повна таблиця</div><div class="gram-rule"><table class="gram-table"><thead><tr><th></th><th>Maskulin</th><th>Neutrum</th><th>Feminin</th><th>Plural</th></tr></thead><tbody><tr><td><strong>Nominativ</strong></td><td class="key">der</td><td class="key">das</td><td class="key">die</td><td class="key">die</td></tr><tr><td><strong>Akkusativ</strong></td><td class="key">den</td><td class="key">das</td><td class="key">die</td><td class="key">die</td></tr><tr><td><strong>Dativ</strong></td><td class="key">dem</td><td class="key">dem</td><td class="key">der</td><td class="key">denen</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Правила</div><div class="gram-rule"><ol><li><strong>Bezugswort</strong> → визначає <strong>рід</strong> (M/N/F)</li><li><strong>Роль у Relativsatz</strong> → визначає <strong>відмінок</strong> (Nom/Akk/Dat)</li><li><strong>Verb</strong> → завжди <strong>в кінці</strong> Relativsatz</li><li><strong>Relativsatz</strong> → стоїть після Bezugswort</li></ol></div></div><div class="gram-box"><div class="gram-title">Relativsatz всередині речення</div><div class="gram-rule">Якщо Relativsatz стоїть в середині головного, головне продовжується після коми:<ul class="examples"><li>Der Mann, <strong>der</strong> hier wohnt, <em>ist mein Freund.</em></li><li>Das Buch, <strong>das</strong> ich lese, <em>ist sehr interessant.</em></li></ul></div></div><div class="gram-box"><div class="gram-title">З прийменниками (advanced)</div><div class="gram-rule">Якщо дієслово вимагає прийменника, він стоїть перед Relativpronomen:<ul class="examples"><li>Der Drucker, <strong>mit dem</strong> ich drucke, ist kaputt. <em>(mit + Dat)</em></li><li>Die Frau, <strong>auf die</strong> ich warte, kommt gleich. <em>(auf + Akk)</em></li></ul></div></div>`
    },
    quiz: [
      { q:'Das Handy, ___ ich gekauft habe, funktioniert gut.',              opts:['das','der','den','dem'],                        a:0 },
      { q:'Die Webseite, ___ ich besuche, ist informativ.',                  opts:['die','den','dem','der'],                        a:0 },
      { q:'Ein Passwort ist ein Code, ___ man für Online-Konten braucht.',   opts:['den','das','dem','der'],                        a:0 },
      { q:'Wo steht das Verb in einem Relativsatz?',                         opts:['am Anfang','in der Mitte','am Ende','nach dem Subjekt'], a:2 },
      { q:'Das ist die App, ___ Julia am liebsten benutzt.',                 opts:['dem','den','die','das'],                        a:2 }
    ]
  },

  /* ============================================================
   * 07 · FREUNDE — Freunde & Beziehungen · A2-B1
   * ============================================================ */
  freunde: {
    slug: 'freunde',
    emoji: '👯',
    title: 'Freunde & Beziehungen',
    titleHtml: 'Freunde &amp;<br><em>Beziehungen</em> 👯',
    level: 'A2-B1',
    duration: '~19 min',
    idx: '07',
    intro: 'Wer ist dein Lieblingsmensch? Hier lernst du, ihn zu beschreiben und zu vergleichen. 💛',
    memoryAnchors: {
      title: 'Dein Mensch fürs Leben 💞',
      hint: 'An wen denkst du zuerst? Lass das Bild einfach kommen.',
      items: [
        { emoji: '📱', de: 'Eine Nachricht, die dich immer zum Lächeln bringt' },
        { emoji: '🎵', de: 'Ein Lied, das nur für euch zwei ist' },
        { emoji: '🍕', de: 'Pizza mitten in der Nacht' },
        { emoji: '🚶', de: 'Ein Spaziergang, bei dem ihr stundenlang redet' },
        { emoji: '🎬', de: 'Ein Film, den ihr zu oft gesehen habt' },
        { emoji: '☕', de: 'Ein Kaffee, der drei Stunden dauert' }
      ]
    },
    speakQuestions: [
      'Wie ist dein bester Freund oder deine beste Freundin? Beschreibe ihn oder sie.',
      'Was ist dir in einer Freundschaft am wichtigsten — Ehrlichkeit, Humor oder Loyalität?',
      'Hast du eher viele Bekannte oder wenige, aber enge Freunde?',
      'Streitet ihr euch manchmal? Worüber und wie löst ihr Konflikte?',
      'Was macht ihr am liebsten zusammen?',
      'Bist du heute genauso gesellig wie früher oder hat sich das verändert?',
      'Wie hast du deinen besten Freund kennengelernt?',
      'Wie wichtig sind dir Online-Freundschaften im Vergleich zu echten?'
    ],
    vocab: [
      { art:'der', w:'Freund',          ua:'друг',           ex:'Meine beste Freundin kennt mich besser als ich mich selbst.' },
      { art:'die', w:'Beziehung',       ua:'стосунки',       ex:'Eine gute Beziehung braucht Vertrauen, Ehrlichkeit und Zeit.' },
      { art:'—',   w:'vertrauen',       ua:'довіряти',       ex:'Ich vertraue meiner Freundin mehr als jedem anderen.' },
      { art:'—',   w:'ehrlich',         ua:'чесний',         ex:'Ehrliche Freunde sagen dir die Wahrheit.' },
      { art:'—',   w:'zuverlässig',     ua:'надійний',       ex:'Der zuverlässigste Mensch in meinem Leben ist meine Schwester.' },
      { art:'—',   w:'sich streiten',   ua:'сваритися',      ex:'Manchmal streiten sich auch die besten Freunde.' },
      { art:'die', w:'Gemeinsamkeit',   ua:'спільна риса',   ex:'Je mehr Gemeinsamkeiten man hat, desto leichter ist die Freundschaft.' },
      { art:'—',   w:'unterstützen',    ua:'підтримувати',   ex:'Wahre Freunde unterstützen dich, wenn es dir schlecht geht.' },
      { art:'der', w:'Unterschied',     ua:'відмінність',    ex:'Obwohl wir viele Unterschiede haben, sind wir beste Freunde.' },
      { art:'—',   w:'sich verstehen',  ua:'порозумітися',   ex:'Ich verstehe mich am besten mit Menschen mit ähnlichen Interessen.' }
    ],
    reading: {
      paragraphs: [
        'Mia und Lisa sind seit der Schulzeit befreundet — das sind fast fünfzehn Jahre. Auf den ersten Blick sind sie sehr verschieden: Mia ist <mark title="вища ніж">größer als</mark> Lisa, aber Lisa ist <mark title="спортивніша">sportlicher</mark>. Mia geht <mark title="охочіше">lieber</mark> ins Museum, während Lisa <mark title="найохочіше">am liebsten</mark> ins Fitnessstudio geht.',
        'Im Beruf ist Mia <mark title="амбітніша ніж">ehrgeiziger als</mark> Lisa. Sie arbeitet länger, schläft kürzer und hat mehr Stress. Lisa findet ihr Leben entspannter: Sie sei zwar nicht die <mark title="найуспішніша">Erfolgreichste</mark>, aber dafür die <mark title="найщасливіша">Glücklichste</mark>.',
        'Trotz aller Unterschiede verstehen sie sich <mark title="найкраще">am besten</mark> unter allen Freundinnen. Sie streiten sich selten, und wenn, dann versöhnen sie sich schneller als andere.',
        'Ihre Freundschaft ist eine der <mark title="найсильніших">stärksten</mark>, die man sich vorstellen kann. Und Mia sagt immer: «Eine richtig gute Freundin ist wichtiger als zehn Bekannte.»'
      ],
      uaSummary: '🇺🇦 Міа і Ліза — подруги зі школи вже 15 років. Вони дуже різні: Міа вища, але Ліза спортивніша. Міа амбітніша в роботі, Ліза живе спокійніше. Їхня дружба одна з найсильніших — вони довіряють одна одній більше за всіх.'
    },
    dialog: [
      { who:'😊', de:'Hey Tom! Ich habe gerade ein Quiz gemacht — «Wer ist extrovertierter, du oder ich?» Rate mal, wer gewonnen hat!', ua:'Томе! Я щойно пройшла тест — «Хто екстровертніший, ти чи я?» Вгадай, хто виграв!' },
      { who:'🤔', de:'Ich glaube, du bist extrovertierter als ich. Du sprichst immer viel mehr. Was hat das Quiz gesagt?',               ua:'Думаю, ти екстровертніша за мене. Ти завжди більше говориш. Що сказав тест?' },
      { who:'😊', de:'Natürlich ich! Aber interessant: Das Quiz sagt, du bist zuverlässiger als ich. Das stimmt, glaube ich.',           ua:'Звісно, я! Але цікаво: тест каже, що ти надійніший за мене. Гадаю, це правда.' },
      { who:'🤔', de:'Na ja, vielleicht. Ich halte meine Versprechen öfter als du — aber du bist spontaner, und das macht das Leben interessanter!', ua:'Можливо. Я частіше тримаю слово, але ти спонтанніша — і життя стає цікавішим!' },
      { who:'😊', de:'Und wer ist deiner Meinung nach freundlicher — du, ich oder unser Freund Jonas?',                                  ua:'А хто, на твою думку, найдружелюбніший — ти, я чи наш друг Йонас?' }
    ],
    grammar: {
      chip: 'Komparativ & Superlativ',
      html: `<div class="gram-box"><div class="gram-title">Komparativ — порівнюємо людей і речі</div><div class="gram-rule">Komparativ утворюється додаванням <strong>-er</strong>. Використовується з <strong>als</strong> (ніж) або <strong>genauso ... wie</strong> (так само ... як).<ul class="examples"><li>✅ <em>Lisa ist <strong>sportlicher als</strong> Mia.</em> → нерівність: <strong>als</strong></li><li>✅ <em>Mia ist <strong>genauso intelligent wie</strong> Lisa.</em> → рівність: <strong>genauso ... wie</strong></li></ul></div></div><div class="gram-box"><div class="gram-title">Bildung Komparativ</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Grundform</th><th>Komparativ</th><th>Besonderheit</th></tr></thead><tbody><tr><td>klein</td><td class="key">kleiner</td><td>регулярний</td></tr><tr><td>langsam</td><td class="key">langsamer</td><td>регулярний</td></tr><tr><td>groß</td><td class="key">größer</td><td>Umlaut!</td></tr><tr><td>jung</td><td class="key">jünger</td><td>Umlaut!</td></tr><tr><td>alt</td><td class="key">älter</td><td>Umlaut!</td></tr><tr><td>gut</td><td class="key">besser</td><td>нерегулярний</td></tr><tr><td>viel</td><td class="key">mehr</td><td>нерегулярний</td></tr><tr><td>gern</td><td class="key">lieber</td><td>нерегулярний</td></tr><tr><td>hoch</td><td class="key">höher</td><td>нерегулярний</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Vergleichssätze: als vs. genauso ... wie</div><div class="gram-rule"><ul class="examples"><li><strong>als</strong> → нерівність: <em>Lisa ist sportlicher <strong>als</strong> Mia.</em></li><li><strong>genauso ... wie</strong> → рівність: <em>Mia ist genauso intelligent <strong>wie</strong> Lisa.</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Superlativ — найвищий ступінь</div><div class="gram-rule"><ul class="examples"><li><strong>з іменником</strong> (з артиклем): der/die/das + <strong>-ste(n)</strong> — <em>der schnellste Läufer · die beste Freundin</em></li><li><strong>без іменника</strong> (am ...sten): <em>Er läuft am schnellsten.</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Umlaut im Superlativ — нерегулярні</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Grundform</th><th>Komparativ</th><th>Superlativ</th></tr></thead><tbody><tr><td>gut</td><td class="key">besser</td><td>am besten / der beste</td></tr><tr><td>viel</td><td class="key">mehr</td><td>am meisten / die meisten</td></tr><tr><td>gern</td><td class="key">lieber</td><td>am liebsten</td></tr><tr><td>groß</td><td class="key">größer</td><td>am größten / der größte</td></tr><tr><td>hoch</td><td class="key">höher</td><td>am höchsten</td></tr><tr><td>lang</td><td class="key">länger</td><td>am längsten / der längste</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Adjektivendungen im Komparativ/Superlativ</div><div class="gram-rule">Прикметник у Komparativ/Superlativ отримує звичайні Adjektivendungen:<ul class="examples"><li>ein <strong>schnellerer</strong> Läufer (Komp. + -er)</li><li>der <strong>schnellste</strong> Läufer (Sup. + -e)</li><li>die <strong>ältesten</strong> Freunde (Sup. + -en)</li></ul></div></div>`
    },
    quiz: [
      { q:'Lisa ist ___ als Mia (sportlich).',                             opts:['sportlich','sportlichere','sportlicher','am sportlichsten'], a:2 },
      { q:'Der Superlativ von «gut» ist ___',                               opts:['guter','besserer','am besten','der gute'],                   a:2 },
      { q:'Wenn zwei gleich intelligent sind, sagen wir:',                  opts:['Lisa ist intelligenter','Lisa ist genauso intelligent wie Mia','Lisa ist die intelligenteste','Lisa ist intelligentestes'], a:1 },
      { q:'Der Komparativ von «groß» ist ___',                              opts:['großer','grösser','größer','am größten'],                    a:2 },
      { q:'Mia und Lisa sind seit ___ Jahren befreundet.',                  opts:['zehn','fünfzehn','zwanzig','zwölf'],                         a:1 }
    ]
  },

  /* ============================================================
   * 08 · FAMILIE — Die Familie · A1-A2
   * ============================================================ */
  familie: {
    slug: 'familie',
    emoji: '👨‍👩‍👧',
    title: 'Die Familie',
    titleHtml: 'Die <em>Familie</em> 👨‍👩‍👧',
    level: 'A1-A2',
    duration: '~15 min',
    idx: '08',
    intro: 'Mutter, Vater, Bruder, Schwester — und wie man über sie spricht. Possessivartikel inklusive! 💞',
    memoryAnchors: {
      title: 'Dein Zuhause im Herzen 🏡',
      hint: 'Welches Bild taucht zuerst auf? Nur fühlen — nichts sagen.',
      items: [
        { emoji: '🍳', de: 'Sonntagmorgen in der Küche' },
        { emoji: '😂', de: 'Ein Witz, über den nur ihr lacht' },
        { emoji: '📞', de: 'Mamas Stimme am Telefon' },
        { emoji: '🧸', de: 'Dein Lieblingsstofftier aus Kindertagen' },
        { emoji: '🎂', de: 'Ein Geburtstag mit selbstgemachtem Kuchen' },
        { emoji: '🚗', de: 'Lange Autofahrten mit Musik von früher' }
      ]
    },
    speakQuestions: [
      'Wie groß ist deine Familie? Hast du Geschwister?',
      'Wie oft siehst du deine Familie? Was macht ihr zusammen?',
      'Bist du eher deiner Mutter oder deinem Vater ähnlich — im Aussehen oder im Charakter?',
      'Welche Familienmitglieder stehen dir am nächsten? Warum?',
      'Welche Familienfeste feiert ihr besonders gern?',
      'Wie war das Familienleben bei euch, als du Kind warst?',
      'Wie wichtig ist für dich die Familie — mehr oder weniger als Freunde?',
      'Welche Werte hat deine Familie dir mitgegeben?'
    ],
    vocab: [
      { art:'die', w:'Familie',      ua:'сім’я',              ex:'Meine Familie wohnt in einer kleinen Stadt in Süddeutschland.' },
      { art:'—',   w:'Eltern (Pl.)', ua:'батьки',             ex:'Meine Eltern feiern bald ihren 30. Hochzeitstag.' },
      { art:'der', w:'Bruder',       ua:'брат',               ex:'Mein älterer Bruder studiert Medizin in Berlin.' },
      { art:'die', w:'Schwester',    ua:'сестра',             ex:'Ich verstehe mich sehr gut mit meiner jüngeren Schwester.' },
      { art:'der', w:'Sohn',         ua:'син',                ex:'Ihr Sohn ist erst drei Jahre alt, aber er spricht schon viel.' },
      { art:'die', w:'Tochter',      ua:'донька',             ex:'Unsere Tochter hat heute ihren ersten Schultag!' },
      { art:'—',   w:'Großeltern',   ua:'бабуся і дідусь',    ex:'Wir besuchen unsere Großeltern jeden Sonntag zum Mittagessen.' },
      { art:'der', w:'Enkel',        ua:'онук / онучка',      ex:'Das Liebste für meine Oma ist, Zeit mit ihren Enkeln zu verbringen.' },
      { art:'—',   w:'heiraten',     ua:'одружуватися',       ex:'Meine Schwester heiratet im Sommer.' },
      { art:'der', w:'Zwilling',     ua:'близнюк',            ex:'Die Zwillinge sehen gleich aus, aber ihre Charaktere sind verschieden.' }
    ],
    reading: {
      paragraphs: [
        'Die Familie Berger ist groß und lebt in ganz Deutschland verteilt. Der Großvater Hans und seine Frau Elfriede wohnen in einem kleinen Haus in Bayern. Ihre drei Kinder — Martin, Petra und Klaus — sind erwachsen und leben mit ihren eigenen <mark title="сім’ями">Familien</mark> in verschiedenen Städten.',
        'Martin ist der älteste Sohn. Er und seine Frau Sabine haben zwei Kinder: ihren Sohn Lukas und ihre <mark title="донька">Tochter</mark> Emma. Emma ist die Jüngste, aber sie hat die stärkste Stimme von allen.',
        'Petra hat keinen Mann, aber ihren Partner Felix. Ihr gemeinsamer Sohn Jonas ist Einzelkind. Er besucht seine Großeltern jeden Sommer — das ist seine liebste Zeit im Jahr.',
        'Klaus ist noch nicht verheiratet. Er wohnt bei seinen <mark title="батьки">Eltern</mark> und hilft ihnen im Garten. Elfriede sagt immer: «Unser Klaus ist unser bestes Kind!» — aber das sagt sie über alle drei.'
      ],
      uaSummary: '🇺🇦 Сім’я Бергер велика і розсіяна по Німеччині. Дідусь Ганс і Ельфрідa мають трьох дорослих дітей — Мартіна, Петру й Клауса. Всі живуть у різних містах зі своїми сім’ями. Раз на рік родина збирається разом.'
    },
    dialog: [
      { who:'👩', de:'Ben, du kennst meine Familie ja noch nicht. Darf ich sie dir ein bisschen beschreiben?',               ua:'Бене, ти мою сім’ю ще не знаєш. Можна я трохи розкажу?' },
      { who:'🧑', de:'Oh ja, gerne! Wie groß ist deine Familie eigentlich?',                                                  ua:'О так, залюбки! Яка в тебе сім’я?' },
      { who:'👩', de:'Wir sind fünf: meine Eltern, mein älterer Bruder Max, meine jüngere Schwester Lena und ich.',           ua:'Нас п’ятеро: мої батьки, старший брат Макс, молодша сестра Лена і я.' },
      { who:'🧑', de:'Wow, eine richtig große Familie! Wohnen alle zusammen oder in verschiedenen Städten?',                  ua:'Вау, справді велика! Всі живуть разом чи в різних містах?' },
      { who:'👩', de:'Meine Eltern wohnen noch in unserem Heimatort. Mein Bruder Max lebt in München mit seiner Frau.',       ua:'Батьки живуть у рідному місті. Брат Макс — у Мюнхені з дружиною.' }
    ],
    grammar: {
      chip: 'Possessivartikel — присвійні артиклі',
      html: `<div class="gram-box"><div class="gram-title">Possessivartikel — чий? чия? чиє?</div><div class="gram-rule">Possessivartikel відповідають на питання <strong>wessen?</strong> (чий?) і змінюються як ein/kein — залежно від роду іменника і відмінку.</div></div><div class="gram-box"><div class="gram-title">Übersicht: Possessivartikel</div><div class="gram-rule"><table class="gram-table"><thead><tr><th></th><th>ich</th><th>du</th><th>er/es</th><th>sie</th><th>wir</th><th>ihr</th><th>sie/Sie</th></tr></thead><tbody><tr><td class="key">Artikel</td><td><strong>mein</strong></td><td><strong>dein</strong></td><td><strong>sein</strong></td><td><strong>ihr</strong></td><td><strong>unser</strong></td><td><strong>euer</strong></td><td><strong>ihr / Ihr</strong></td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Endungen (як ein/kein)</div><div class="gram-rule"><table class="gram-table"><thead><tr><th></th><th>Maskulin</th><th>Neutrum</th><th>Feminin</th><th>Plural</th></tr></thead><tbody><tr><td class="key">Nominativ</td><td>mein— Vater</td><td>mein— Kind</td><td>mein<strong>e</strong> Mutter</td><td>mein<strong>e</strong> Eltern</td></tr><tr><td class="key">Akkusativ</td><td>mein<strong>en</strong> Vater</td><td>mein— Kind</td><td>mein<strong>e</strong> Mutter</td><td>mein<strong>e</strong> Eltern</td></tr><tr><td class="key">Dativ</td><td>mein<strong>em</strong> Vater</td><td>mein<strong>em</strong> Kind</td><td>mein<strong>er</strong> Mutter</td><td>mein<strong>en</strong> Eltern</td></tr></tbody></table>Інші (dein-, sein-, ihr-, unser-, euer-) працюють аналогічно.</div></div><div class="gram-box"><div class="gram-title">Увага: euer</div><div class="gram-rule"><strong>euer</strong> → перед закінченням <strong>-e-</strong> випадає:<ul class="examples"><li>euer + e → <strong>eure</strong> Mutter</li><li>euer + en → <strong>euren</strong> Vater</li><li>❌ НЕ: <em>euere</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Приклади</div><div class="gram-rule"><ul class="examples"><li>Das ist <strong>mein</strong> Bruder. (Nom., M) — Das ist <strong>meine</strong> Schwester. (Nom., F)</li><li>Ich liebe <strong>meine</strong> Familie. (Akk., F) — Er besucht <strong>seinen</strong> Vater. (Akk., M)</li><li>Wir helfen <strong>unserer</strong> Oma. (Dat., F) — Sie schreibt <strong>ihrem</strong> Bruder. (Dat., M)</li><li>Er wohnt bei <strong>seinen</strong> Eltern. (Dat., Pl)</li></ul></div></div>`
    },
    quiz: [
      { q:'Як перекладається «die Familie»?',                         opts:['брат','сім’я','сестра','батьки'],         a:1 },
      { q:'«Ich liebe ___ Schwester» — правильна форма?',              opts:['mein','meine','meinen','meinem'],        a:1 },
      { q:'Як називається батько матері?',                            opts:['Vater','Großvater','Onkel','Sohn'],      a:1 },
      { q:'Який артикль у слова «Bruder»?',                           opts:['die','der','das','—'],                   a:1 },
      { q:'Dativ: «Ich helfe ___ Mutter»',                            opts:['meine','meinen','meiner','meines'],      a:2 }
    ]
  },

  /* ============================================================
   * 09 · GESUNDHEIT — Gesundheit · A2-B1
   * ============================================================ */
  gesundheit: {
    slug: 'gesundheit',
    emoji: '🏥',
    title: 'Gesundheit',
    titleHtml: '<em>Gesundheit</em> 🏥',
    level: 'A2-B1',
    duration: '~18 min',
    idx: '09',
    intro: 'Kopfschmerzen, Arzt, Apotheke — wenn es zwickt und zwackt, brauchst du die richtigen Wörter. 🤒',
    speakQuestions: [
      'Was machst du, wenn du krank bist?',
      'Gehst du oft zum Arzt? Hast du einen Hausarzt?',
      'Was hilft dir bei Erkältung oder Kopfschmerzen?',
      'Treibst du Sport, um gesund zu bleiben? Was machst du?',
      'Hast du schon mal im Krankenhaus gelegen? Erzähl davon.',
      'Was isst und trinkst du, wenn du auf deine Gesundheit achtest?',
      'Nimmst du gern Medikamente oder probierst du lieber Hausmittel?',
      'Wie hat sich dein Lebensstil verändert, seit du älter geworden bist?'
    ],
    vocab: [
      { art:'der', w:'Arzt',          ua:'лікар',            ex:'Ich gehe zum Arzt, weil ich starke Kopfschmerzen habe.' },
      { art:'das', w:'Krankenhaus',   ua:'лікарня',          ex:'Das Krankenhaus, in dem meine Mutter arbeitet, ist modern.' },
      { art:'die', w:'Apotheke',      ua:'аптека',           ex:'In der Apotheke bekomme ich die Medikamente.' },
      { art:'das', w:'Medikament',    ua:'ліки',             ex:'Du sollst das Medikament dreimal täglich nehmen.' },
      { art:'die', w:'Erkältung',     ua:'застуда',          ex:'Bei einer Erkältung hilft es, viel Tee zu trinken.' },
      { art:'der', w:'Schmerz',       ua:'біль',             ex:'Ich habe starke Schmerzen im Rücken.' },
      { art:'—',   w:'krank',         ua:'хворий',           ex:'Wenn du krank bist, bleib zu Hause.' },
      { art:'—',   w:'gesund',        ua:'здоровий',         ex:'Sport und gesundes Essen helfen, gesund zu bleiben.' },
      { art:'—',   w:'sich erholen',  ua:'відновлюватися',   ex:'Nach der langen Krankheit muss er sich erholen.' },
      { art:'das', w:'Rezept',        ua:'рецепт',           ex:'Ohne Rezept kann ich dieses Medikament nicht kaufen.' }
    ],
    reading: {
      paragraphs: [
        'Lena fühlt sich seit drei Tagen nicht gut. Sie hat <mark title="біль горла">Halsschmerzen</mark>, Husten und Fieber. Heute Morgen geht sie zum <mark title="лікар">Arzt</mark>.',
        'In der Arztpraxis setzt sie sich ins Wartezimmer. An der Wand hängen Bilder von der Natur. Auf dem Tisch liegen Zeitschriften. Neben ihr sitzt ein alter Mann, der leise hustet.',
        'Nach zwanzig Minuten ruft die Krankenschwester Lena in das Sprechzimmer. Dr. Meier untersucht sie: Er schaut in den Mund, misst Fieber und hört mit dem Stethoskop auf die Lunge.',
        '«Sie haben eine <mark title="застуда">Erkältung</mark>», sagt er. «Gehen Sie ins Bett und trinken Sie viel Wasser. Ich schreibe Ihnen ein <mark title="рецепт">Rezept</mark> für Medikamente. Sie können morgen in die <mark title="аптека">Apotheke</mark> gehen.»'
      ],
      uaSummary: '🇺🇦 Лена три дні відчуває себе погано і йде до лікаря. Dr. Meier оглядає її, слухає легені й ставить діагноз — звичайна застуда. Він радить залишатися вдома, пити багато води та дає рецепт для аптеки.'
    },
    dialog: [
      { who:'👨‍⚕️', de:'Guten Morgen! Setzen Sie sich bitte. Was fehlt Ihnen?',                                                    ua:'Добрий день! Сідайте, будь ласка. Що вас турбує?' },
      { who:'🤒', de:'Guten Morgen, Herr Doktor. Ich fühle mich seit drei Tagen nicht gut. Halsschmerzen, Husten, und seit gestern auch Fieber.', ua:'Добрий день, пане лікарю. Три дні погано почуваюся. Болить горло, кашель, з учора ще й температура.' },
      { who:'👨‍⚕️', de:'Wie hoch ist das Fieber?',                                                                                  ua:'Яка температура?' },
      { who:'🤒', de:'Fast 39 Grad. Ich habe es heute Morgen gemessen.',                                                             ua:'Майже 39. Я виміряла зранку.' },
      { who:'👨‍⚕️', de:'Sie haben eine Erkältung. Bleiben Sie im Bett und trinken Sie viel. Ich schreibe Ihnen ein Rezept.',         ua:'У вас застуда. Залишайтесь у ліжку й пийте багато води. Я випишу рецепт.' }
    ],
    grammar: {
      chip: 'Wechselpräpositionen — Wo? / Wohin?',
      html: `<div class="gram-box"><div class="gram-title">Wechselpräpositionen — де і куди?</div><div class="gram-rule">9 прийменників змінюють відмінок залежно від питання:<ul class="examples"><li>✅ <strong>Wo?</strong> (де?) → <strong>Dativ</strong> — <em>Ich bin <strong>im</strong> Krankenhaus.</em></li><li>✅ <strong>Wohin?</strong> (куди?) → <strong>Akkusativ</strong> — <em>Ich gehe <strong>ins</strong> Krankenhaus.</em></li></ul></div></div><div class="gram-box"><div class="gram-title">Die 9 Wechselpräpositionen</div><div class="gram-rule"><strong>in · an · auf · über · unter · vor · hinter · neben · zwischen</strong></div></div><div class="gram-box"><div class="gram-title">Wohin? vs. Wo?</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Wohin? (→ Akk)</th><th>Wo? (→ Dat)</th></tr></thead><tbody><tr><td>Ich gehe <span class="key">ins</span> Krankenhaus.</td><td>Ich bin <span class="key">im</span> Krankenhaus.</td></tr><tr><td>Er legt das Buch <span class="key">auf den</span> Tisch.</td><td>Das Buch liegt <span class="key">auf dem</span> Tisch.</td></tr><tr><td>Sie stellt die Vase <span class="key">neben die</span> Lampe.</td><td>Die Vase steht <span class="key">neben der</span> Lampe.</td></tr><tr><td>Das Kind läuft <span class="key">hinter das</span> Haus.</td><td>Das Kind spielt <span class="key">hinter dem</span> Haus.</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Zusammenziehungen (злиття)</div><div class="gram-rule"><strong>in + dem = im</strong> · <strong>in + das = ins</strong> · <strong>an + dem = am</strong> · <strong>an + das = ans</strong><br>(Інші Wechselpräpositionen не зливаються з артиклем.)</div></div><div class="gram-box"><div class="gram-title">Важливі дієслова</div><div class="gram-rule"><ul class="examples"><li><strong>Wohin? (Akk):</strong> legen, stellen, hängen, setzen, stecken, gehen, fahren, fliegen</li><li><strong>Wo? (Dat):</strong> liegen, stehen, hängen (intr.), sitzen, stecken, sein, bleiben</li></ul></div></div><div class="gram-box"><div class="gram-title">Lokale Präpositionen (місце)</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Frage</th><th>Präposition</th><th>Beispiel</th></tr></thead><tbody><tr><td><strong>Wo?</strong></td><td class="key">bei, in, an, auf</td><td>beim Arzt · in der Apotheke · am Strand · auf dem Markt</td></tr><tr><td><strong>Wohin?</strong></td><td class="key">zu, nach, in, an, auf</td><td>zum Arzt · nach Berlin · ins Kino · an den Strand</td></tr><tr><td><strong>Woher?</strong></td><td class="key">aus, von</td><td>aus der Apotheke · vom Arzt</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Merkhilfe</div><div class="gram-rule"><ul class="examples"><li><strong>zu</strong> + Personen/Gebäude: <em>zum Arzt, zur Apotheke, zu meiner Mutter</em></li><li><strong>nach</strong> + Städte/Länder без артикля: <em>nach Berlin, nach Deutschland, nach Hause</em></li><li><strong>in</strong> + Länder з артиклем: <em>in die Schweiz, in die USA, in den Iran</em></li></ul></div></div>`
    },
    quiz: [
      { q:'Як перекладається «das Medikament»?',                              opts:['аптека','ліки','лікар','рецепт'],                   a:1 },
      { q:'«Ich gehe ___ Arzt» — яка правильна форма?',                        opts:['zum','im','bei','aus'],                             a:0 },
      { q:'«Die Vase steht ___ der Lampe» — Wechselpräposition',                opts:['neben','zwischen','hinter','über'],                a:0 },
      { q:'«Ich gehe ___ Krankenhaus» — Wohin (Akkusativ)?',                    opts:['das Krankenhaus','den Krankenhaus','ins Krankenhaus','im Krankenhaus'], a:2 },
      { q:'«Ich sitze ___ Wartezimmer» — Wo (Dativ)?',                         opts:['im','in','ins','aus dem'],                          a:0 }
    ]
  },

  /* ============================================================
   * 10 · MEDIEN — Medien & Nachrichten · B1
   * ============================================================ */
  medien: {
    slug: 'medien',
    emoji: '📺',
    title: 'Medien & Nachrichten',
    titleHtml: 'Medien &amp;<br><em>Nachrichten</em> 📺',
    level: 'B1',
    duration: '~20 min',
    idx: '10',
    intro: 'Nachrichten, die verbreitet werden, Informationen, die gesendet werden — willkommen beim Passiv! 📰',
    speakQuestions: [
      'Wie informierst du dich über aktuelle Nachrichten — Zeitung, TV, Internet oder Social Media?',
      'Welchen Medien vertraust du am meisten? Warum?',
      'Gibt es Nachrichten, die dich besonders beeindruckt oder schockiert haben?',
      'Wie oft schaust du Nachrichten? Hast du Lieblingssendungen?',
      'Was hältst du von sozialen Medien als Informationsquelle — hilfreich oder gefährlich?',
      'Welche Nachrichten aus deinem Land würdest du einem Deutschen erklären?',
      'Glaubst du, dass Journalisten heute noch unabhängig arbeiten können?',
      'Wie erkennst du, ob eine Nachricht eine Falschmeldung ist?'
    ],
    vocab: [
      { art:'die', w:'Nachricht',       ua:'новина',           ex:'Die wichtigsten Nachrichten werden abends im Fernsehen gezeigt.' },
      { art:'das', w:'Medium',          ua:'медіа, ЗМІ',       ex:'Durch soziale Medien werden Informationen sehr schnell verbreitet.' },
      { art:'—',   w:'berichten',       ua:'повідомляти',      ex:'In der Zeitung wird über den neuen Bürgermeister berichtet.' },
      { art:'die', w:'Meinung',         ua:'думка',            ex:'In einer Demokratie darf jeder seine Meinung frei äußern.' },
      { art:'—',   w:'veröffentlichen', ua:'публікувати',      ex:'Der Artikel wurde gestern Abend veröffentlicht.' },
      { art:'die', w:'Schlagzeile',     ua:'заголовок',        ex:'Die Schlagzeile wurde von Millionen Menschen gelesen.' },
      { art:'das', w:'Interview',       ua:'інтерв’ю',         ex:'Der Politiker wurde live im Fernsehen interviewt.' },
      { art:'—',   w:'aktuell',         ua:'актуальний',       ex:'Es ist wichtig, sich über aktuelle Ereignisse zu informieren.' },
      { art:'die', w:'Sendung',         ua:'передача',         ex:'Diese Sendung wird jeden Montag um 20 Uhr ausgestrahlt.' },
      { art:'—',   w:'kritisieren',     ua:'критикувати',      ex:'Die neue Medienpolitik wird von vielen Journalisten kritisiert.' }
    ],
    reading: {
      paragraphs: [
        'Die Art, wie <mark title="новини">Nachrichten</mark> konsumiert werden, hat sich stark verändert. Früher wurden Zeitungen morgens nach Hause geliefert, und abends wurden die Nachrichten im Fernsehen gesehen. Heute werden Informationen rund um die Uhr über Smartphones und soziale Netzwerke <mark title="поширювати">verbreitet</mark>.',
        'Studien zeigen, dass immer weniger junge Menschen traditionelle Medien nutzen. Tageszeitungen werden seltener gekauft, Nachrichtensendungen weniger geschaut. Stattdessen werden kurze Videos und Beiträge in sozialen Netzwerken bevorzugt.',
        'Das hat Vor- und Nachteile. Einerseits können Nachrichten sofort geteilt werden — ein Ereignis wird binnen Minuten weltweit bekannt. Andererseits können auch <mark title="фейки">Falschmeldungen</mark> schnell verbreitet werden. Es wird deshalb immer wichtiger, Informationen zu überprüfen.',
        'Qualitätsjournalismus muss heute hart erkämpft werden. Gute Journalisten müssen ausgebildet, faire Löhne müssen gezahlt und unabhängige Redaktionen müssen finanziert werden. Nur so kann eine freie Presse geschützt werden.'
      ],
      uaSummary: '🇺🇦 Спосіб споживання новин сильно змінився. Раніше газети доставляли додому, тепер інформацію поширюють через соцмережі та смартфони. Молодь менше дивиться ТВ — це створює ризик фейків. Якісна журналістика потребує фінансування.'
    },
    dialog: [
      { who:'👩', de:'Jonas, hast du schon die Nachrichten von heute gelesen? Die neue Mediensteuer wird eingeführt — überall wird berichtet!', ua:'Йонасе, ти читав сьогоднішні новини? Вводиться новий медіа-збір — про це скрізь повідомляють!' },
      { who:'🧑', de:'Was? Das wird überall diskutiert! Weißt du, warum diese Steuer eingeführt wird?',                                          ua:'Що? Це всюди обговорюють! Ти знаєш, чому її вводять?' },
      { who:'👩', de:'Es heißt, damit soll der öffentliche Rundfunk finanziert werden. Sender wie ARD und ZDF werden dadurch unterstützt.',       ua:'Кажуть, щоб фінансувати державне мовлення. Канали ARD і ZDF отримають підтримку.' },
      { who:'🧑', de:'Ich finde das sinnvoll. Qualitätsjournalismus muss irgendwie finanziert werden — sonst wird nur noch Werbung gesendet.',     ua:'Це має сенс. Якісну журналістику треба якось фінансувати — інакше буде лише реклама.' },
      { who:'👩', de:'Stimmt. Aber viele Leute ärgern sich, weil sie kaum noch Fernsehen schauen. Sie informieren sich lieber über Social Media.', ua:'Так. Але багато людей сердяться, бо ТВ вже майже не дивляться. Вони інформуються через соцмережі.' }
    ],
    grammar: {
      chip: 'Passiv — дія важливіша за виконавця',
      html: `<div class="gram-box"><div class="gram-title">Passiv — дія важливіша за виконавця</div><div class="gram-rule">У Passiv важлива <strong>дія</strong>, а не хто її виконує.<ul class="examples"><li><strong>Aktiv:</strong> Der Journalist <strong>schreibt</strong> den Artikel.</li><li><strong>Passiv:</strong> Der Artikel <strong>wird</strong> geschrieben. (von wem — неважливо)</li></ul></div></div><div class="gram-box"><div class="gram-title">Bildung Passiv Präsens: werden + Partizip II</div><div class="gram-rule"><table class="gram-table"><thead><tr><th>Person</th><th>werden</th><th>Beispiel</th></tr></thead><tbody><tr><td class="key">ich</td><td><strong>werde</strong></td><td>Ich werde gefragt.</td></tr><tr><td class="key">du</td><td><strong>wirst</strong></td><td>Du wirst informiert.</td></tr><tr><td class="key">er/sie/es</td><td><strong>wird</strong></td><td>Der Artikel wird gelesen.</td></tr><tr><td class="key">wir</td><td><strong>werden</strong></td><td>Wir werden eingeladen.</td></tr><tr><td class="key">ihr</td><td><strong>werdet</strong></td><td>Ihr werdet benachrichtigt.</td></tr><tr><td class="key">sie/Sie</td><td><strong>werden</strong></td><td>Die Nachrichten werden gesendet.</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">Passiv Präteritum: wurde/wurden + Partizip II</div><div class="gram-rule"><ul class="examples"><li><strong>Singular:</strong> Das Buch <strong>wurde</strong> veröffentlicht.</li><li><strong>Plural:</strong> Die Artikel <strong>wurden</strong> geschrieben.</li></ul>Präteritum von <em>werden</em>: ich/er/sie/es <strong>wurde</strong> · du <strong>wurdest</strong> · wir/sie/Sie <strong>wurden</strong> · ihr <strong>wurdet</strong></div></div><div class="gram-box"><div class="gram-title">⚠️ Passiv Perfekt: sein + P II + worden</div><div class="gram-rule">⚠️ У Passiv Perfekt — завжди <strong>worden</strong> (без ge-)!<ul class="examples"><li>✅ Der Artikel ist veröffentlicht <strong>worden</strong>.</li><li>❌ Der Artikel ist veröffentlicht <em>geworden</em>.</li></ul></div></div><div class="gram-box"><div class="gram-title">Passiv з модальним дієсловом</div><div class="gram-rule">Modalverb + Partizip II + <strong>werden</strong> (інфінітив в кінці):<table class="gram-table"><tbody><tr><td>Der Artikel <strong>muss</strong> überprüft <strong>werden</strong>.</td><td>треба перевірити</td></tr><tr><td>Die Sendung <strong>kann</strong> aufgezeichnet <strong>werden</strong>.</td><td>можна записати</td></tr><tr><td>Hier <strong>darf</strong> nicht geraucht <strong>werden</strong>.</td><td>не можна курити</td></tr></tbody></table></div></div><div class="gram-box"><div class="gram-title">von + Dativ (Urheber angeben)</div><div class="gram-rule">Якщо виконавець важливий → <strong>von + Dativ</strong>:<ul class="examples"><li>Der Artikel wurde <strong>vom Journalisten</strong> geschrieben.</li><li>Die Sendung wird <strong>von Millionen Menschen</strong> gesehen.</li></ul></div></div>`
    },
    quiz: [
      { q:'Як перекладається «die Nachricht»?',                                  opts:['думка','новина','передача','медіа'],                                    a:1 },
      { q:'«Der Artikel ___ gelesen» — Präsens Passiv?',                          opts:['sein','wird','ist','werden'],                                          a:1 },
      { q:'Passiv Perfekt: «Das Buch ist ___ worden»',                            opts:['geschrieben','schreiben','gelesen','veröffentlicht'],                   a:3 },
      { q:'Як перекладається «veröffentlichen»?',                                 opts:['критикувати','повідомляти','публікувати','читати'],                      a:2 },
      { q:'«Hier ___ nicht gegessen werden» — Modalverb',                         opts:['darf','kann','muss','wird'],                                           a:0 }
    ]
  },

  /* ============================================================
   * 11 · ERINNERUNGEN — Storytelling · B1
   * ============================================================ */
  erinnerungen: {
    slug: 'erinnerungen',
    emoji: '💭',
    title: 'Erinnerungen',
    titleHtml: 'Er<em>innerungen</em> 💭',
    level: 'B1',
    duration: '~20 min',
    idx: '11',
    intro: 'Manche Wörter riechst du, andere schmeckst du. Hier lernst du die, die dich zurück in die Vergangenheit bringen. 🕰',
    memoryAnchors: {
      title: 'Schließ kurz die Augen 👁',
      hint: 'Welches Bild taucht auf? Nichts sagen — nur ein Blitz im Kopf reicht.',
      items: [
        { emoji: '🍞', de: 'Duft von frisch gebackenem Brot' },
        { emoji: '☀️', de: 'Erster Sonnenstrahl nach langem Winter' },
        { emoji: '🍓', de: 'Geschmack der ersten reifen Erdbeere' },
        { emoji: '🌧', de: 'Regen auf heißem Asphalt im Sommer' },
        { emoji: '🎵', de: 'Drei Töne eines alten Lieblingslieds' },
        { emoji: '🤲', de: 'Warme Umarmung einer vertrauten Person' }
      ]
    },
    speakQuestions: [
      'Was ist deine früheste Erinnerung? Erzähl mir davon.',
      'Welcher Duft erinnert dich sofort an deine Kindheit?',
      'Gibt es ein Lied, das für dich mit einem bestimmten Moment verknüpft ist?',
      'Welchen Augenblick möchtest du nie vergessen?',
      'Welcher Geschmack bringt dich sofort zurück in die Kindheit?',
      'Gibt es einen Ort, der dich immer an damals erinnert?',
      'Welche Erinnerung bringt dich jedes Mal zum Lachen?',
      'Was war deine schönste Erinnerung aus dem letzten Jahr?'
    ],
    vocab: [
      { art:'—',   w:'sich erinnern an', ua:'згадувати про',    ex:'Ich erinnere mich noch genau an diesen Sommer.' },
      { art:'die', w:'Erinnerung',       ua:'спогад',           ex:'Das ist meine schönste Erinnerung.' },
      { art:'der', w:'Moment',           ua:'мить, момент',     ex:'In diesem Moment wusste ich alles.' },
      { art:'der', w:'Duft',             ua:'аромат',           ex:'Der Duft von Kaffee weckt alte Erinnerungen.' },
      { art:'das', w:'Gefühl',           ua:'почуття',          ex:'Ich hatte ein warmes Gefühl im Bauch.' },
      { art:'die', w:'Kindheit',         ua:'дитинство',        ex:'In meiner Kindheit gab es keine Handys.' },
      { art:'—',   w:'vermissen',        ua:'сумувати за',      ex:'Ich vermisse diese Zeit wirklich.' },
      { art:'—',   w:'verknüpft mit',    ua:'пов\'язане з',      ex:'Dieses Lied ist mit meiner ersten Liebe verknüpft.' },
      { art:'—',   w:'damals',           ua:'тоді, колись',     ex:'Damals war alles noch einfacher.' },
      { art:'—',   w:'für immer',        ua:'назавжди',         ex:'Dieses Bild bleibt für immer in meinem Kopf.' }
    ],
    reading: {
      paragraphs: [
        'Es war ein Sommerabend im Juli. Ich war sieben Jahre alt, und die Luft roch nach frisch geschnittenem Gras. Mein Opa saß auf der Veranda, eine alte Gitarre in den Händen. Er spielte ein Lied, das ich heute noch kenne — und jedes Mal, wenn ich es höre, bin ich wieder dort. Wieder sieben. Wieder dieser Sommerabend. Wieder dieser warme Wind im Haar.',
        'Damals lebte unsere ganze Familie auf dem Land. Wir hatten ein kleines Holzhaus mit blauen Fensterläden und einem riesigen Apfelbaum im Garten. Im Sommer kletterten wir Kinder auf den Baum, aßen die ersten grünen Äpfel und lachten, bis uns der Bauch wehtat. Meine Cousine Anna war meine beste Freundin — wir waren unzertrennlich.',
        'Das ist das Geheimnis der <mark title="спогадів">Erinnerungen</mark>: Sie leben nicht nur im Kopf. Sie leben im <mark title="аромат">Duft</mark> von Regen auf heißem Asphalt, im <mark title="почуття">Gefühl</mark> einer Umarmung, im Geschmack von Omas Apfelkuchen. Du kannst sie nicht festhalten. Aber sie tauchen plötzlich auf — beim Spazierengehen, beim Kochen, mitten in der Nacht.',
        '<mark title="тоді">Damals</mark>, in meiner <mark title="дитинство">Kindheit</mark>, wusste ich nicht, dass diese <mark title="миті">Momente</mark> so kostbar waren. Ich dachte, sie kommen wieder. Ich dachte, der Sommer ist endlos und die Großeltern bleiben für immer da. Heute weiß ich: Sie kommen nicht wieder. Aber sie bleiben — <mark title="назавжди">für immer</mark> in mir.',
        'Es gibt Lieder, Gerüche, Orte, die <mark title="пов&#39;язані з">verknüpft mit</mark> einem bestimmten Moment sind. Du hörst drei Töne — und plötzlich bist du neunzehn, sitzt im alten Auto deines Vaters und fährst in den ersten Urlaub ohne Eltern. Du riechst ein Parfum — und deine Großmutter ist wieder da, obwohl sie seit zehn Jahren nicht mehr lebt. Diese Erinnerungen sind wie kleine Geschenke, die uns das Leben heimlich in die Tasche steckt.',
        'Manche Erinnerungen tun weh. Der erste Abschied vom besten Freund, der in eine andere Stadt zog. Der letzte Sommer mit Opa, bevor er krank wurde. Das Telefonat mit Mama, als sie weinend sagte, dass Oma in der Nacht gestorben war. Ich war zwanzig und konnte nicht glauben, dass jemand so wichtig einfach <strong>weg</strong> sein konnte.',
        'Aber die meisten Erinnerungen machen mich glücklich. Der Geschmack von Omas Borschtsch. Das Gefühl, wenn Papa mich abends in die Luft warf und ich vor Lachen quietschte. Der Klang der Glocken in unserem Dorf am Sonntagmorgen. Der erste Kuss in der Schulpause hinter der Turnhalle. Der Moment, als ich meinen Schulabschluss in der Hand hielt und wusste: jetzt fängt etwas Neues an.',
        'Ich <mark title="сумую">vermisse</mark> diese Zeit. Aber ich <mark title="згадую">erinnere mich</mark> — jeden Tag, in tausend kleinen Augenblicken. Und solange ich mich erinnere, ist nichts wirklich vorbei. Vielleicht ist das der größte Trost: Was wir geliebt haben, geht nie ganz verloren. Es lebt weiter — in uns, in unseren Geschichten, in den Liedern, die wir summen, ohne zu wissen, warum.'
      ],
      uaSummary: '🇺🇦 Літній вечір. Мені сім. Дідусь грає на гітарі — ту саму мелодію, яку я досі знаю. Ми жили в маленькому будиночку на селі, лазили по яблуні з кузиною Анею і реготали до болю в животі. Спогади живуть не лише в голові: вони в запаху дощу, в обіймах, у смаку бабусиного пирога. Деякі спогади болять — перше прощання з другом, останнє літо з дідусем, дзвінок мами, коли померла бабуся. Але більшість роблять щасливим: смак борщу, тато, що підкидає в повітря, перший поцілунок у школі. Тоді я не знав, що ці миті — дорогоцінні. Сьогодні знаю: вони не повертаються. Але залишаються — назавжди в мені. Поки я пам\'ятаю — нічого не зникло.'
    },
    dialog: [
      { who:'🧑', de:'Hey, hast du heute Morgen auch diesen Geruch gerochen? Nasser Asphalt nach dem Regen — genau wie früher.', ua:'Гей, ти теж сьогодні вранці відчула цей запах? Мокрий асфальт після дощу — точно як колись.' },
      { who:'👩', de:'Oh ja! Das ist mein Sommer-Duft aus der Kindheit. Ich erinnere mich sofort an unser altes Haus.',           ua:'О так! Це мій літній аромат з дитинства. Я одразу згадую наш старий дім.' },
      { who:'🧑', de:'Wahnsinn, oder? Manche Momente sind so mit Gerüchen verknüpft, dass man sie nie vergisst.',                 ua:'Божевілля, правда? Деякі миті так пов\'язані із запахами, що їх ніколи не забудеш.' },
      { who:'👩', de:'Genau. Für mich ist es auch dieses Lied — «Wonderwall». Damals in der 8. Klasse… das war meine ganze Welt.', ua:'Саме так. Для мене це ще й та пісня — «Wonderwall». Тоді у 8-му класі… це був весь мій світ.' },
      { who:'🧑', de:'Krass. Solche Erinnerungen bleiben für immer. Ich glaube, das sind die einzigen Dinge, die wirklich zählen.', ua:'Круто. Такі спогади лишаються назавжди. Думаю, це єдине, що справді важливо.' }
    ],
    grammar: {
      chip: 'Präteritum — Zeit zum Erzählen (war, hatte, dachte, kannte …)',
      html: `<div class="case-box"><div class="case-box-title">Крок 1 — Präteritum = час оповіді</div><p>Коли ти <strong>розповідаєш історію</strong> про минуле — особливо емоційну, про дитинство, спогади, враження — використовуй <strong>Präteritum</strong>. Це «літературний» минулий час. У розмові про вчорашній день німці використовують <em>Perfekt</em>, але для оповіді — завжди <strong>Präteritum</strong>.</p></div><div class="grammar-note"><strong>📌 Різниця на прикладі:</strong><br>• <em>Perfekt (розмова):</em> Ich <strong>habe</strong> ihn gestern <strong>gesehen</strong>.<br>• <em>Präteritum (оповідь):</em> Es war Sommer. Ich <strong>sah</strong> ihn zum ersten Mal — und ich <strong>wusste</strong>, alles würde anders.</div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 1: sein, haben, werden — ЗАВЖДИ в Präteritum</div><p>Ці три дієслова використовують Präteritum навіть у звичайній розмові. Вчи напам'ять — це твій фундамент для будь-якої історії.</p></div><table class="rule-table"><thead><tr><th>Infinitiv</th><th>ich / er / sie / es</th><th>Приклад з історії</th></tr></thead><tbody><tr><td>sein</td><td><code>war</code></td><td>Ich <strong>war</strong> sieben Jahre alt.</td></tr><tr><td>haben</td><td><code>hatte</code></td><td>Ich <strong>hatte</strong> ein warmes Gefühl.</td></tr><tr><td>werden</td><td><code>wurde</code></td><td>Es <strong>wurde</strong> plötzlich still.</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 2: Сильні дієслова — змінюють корінь</div><p>Ці форми треба запам'ятати. Ось TOP-6 для оповіді про спогади:</p></div><table class="rule-table"><thead><tr><th>Infinitiv</th><th>Präteritum</th><th>Приклад</th></tr></thead><tbody><tr><td>sehen</td><td><code>sah</code></td><td>Ich <strong>sah</strong> ihn zum ersten Mal.</td></tr><tr><td>gehen</td><td><code>ging</code></td><td>Wir <strong>gingen</strong> durch den Park.</td></tr><tr><td>kommen</td><td><code>kam</code></td><td>Sie <strong>kam</strong> plötzlich zurück.</td></tr><tr><td>wissen</td><td><code>wusste</code></td><td>Ich <strong>wusste</strong> nichts davon.</td></tr><tr><td>denken</td><td><code>dachte</code></td><td>Ich <strong>dachte</strong> an meine Oma.</td></tr><tr><td>geben</td><td><code>gab</code></td><td>Es <strong>gab</strong> einmal einen Sommer…</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 3: Слабкі дієслова — додай <code>-te</code></div><p>Більшість дієслів «слабкі»: до кореня додається <code>-te</code> + особове закінчення. Це <strong>90% усіх дієслів</strong>.</p></div><ul class="examples"><li>spielen → ich <strong>spielte</strong> <em>(грав)</em></li><li>lachen → ich <strong>lachte</strong> <em>(сміявся)</em></li><li>fühlen → ich <strong>fühlte</strong> <em>(відчував)</em></li><li>hören → ich <strong>hörte</strong> <em>(чув)</em></li><li>riechen → ich <strong>roch</strong> <em>(нюхав — сильне!)</em></li></ul><div class="divider"></div><div class="grammar-note"><strong>💡 Лайфгак для відповіді партнеру:</strong><br>Коли партнер питає «Was ist deine früheste Erinnerung?», починай з одного з цих шаблонів — і слухач одразу втягнеться в історію:<br><br>• <code>Ich war … Jahre alt, als …</code> <em>(Мені було … років, коли…)</em><br>• <code>Damals hatte ich …</code> <em>(Тоді в мене було…)</em><br>• <code>Es war ein … Tag. Ich …</code> <em>(Був … день. Я…)</em><br>• <code>Ich erinnere mich noch genau an …</code> <em>(Я досі чітко пам'ятаю…)</em></div>`
    },
    quiz: [
      { q:'Was bedeutet «der Duft»?',                                          opts:['запах / аромат','почуття','спогад','мить'],                                           a:0 },
      { q:'Wie sagt man «згадувати про щось» auf Deutsch?',                    opts:['vergessen','sich erinnern an','vermissen','verknüpfen'],                              a:1 },
      { q:'«Ich ___ sieben Jahre alt.» — Präteritum von sein:',                opts:['war','hatte','wurde','bin'],                                                           a:0 },
      { q:'Welches Wort passt zu «назавжди»?',                                 opts:['damals','für immer','plötzlich','in diesem Moment'],                                   a:1 },
      { q:'«Dieses Lied ist ___ meiner ersten Liebe verknüpft.»',              opts:['an','mit','bei','von'],                                                                a:1 }
    ]
  },

  /* ============================================================
   * 12 · SINNE & FARBEN — Assoziationen · B1
   * ============================================================ */
  sinne: {
    slug: 'sinne',
    emoji: '🌈',
    title: 'Sinne & Farben',
    titleHtml: 'Sinne &amp; <em>Farben</em> 🌈',
    level: 'B1',
    duration: '~20 min',
    idx: '12',
    intro: 'Warum fühlt sich Blau kühl an? Warum riecht Rot nach Zimt? Hier lernst du die Sprache der Sinne — und wie du Gefühle in Worte fasst. 🎨',
    memoryAnchors: {
      title: 'Welche Farbe siehst du? 🎨',
      hint: 'Atme kurz ein. Jede Farbe hat einen Klang, einen Duft, ein Gefühl.',
      items: [
        { emoji: '💛', de: 'Senfgelb wie ein Dienstagnachmittag' },
        { emoji: '🩷', de: 'Rosa wie ein Freitag voller Pläne' },
        { emoji: '💙', de: 'Tiefblau wie stille Morgen am Meer' },
        { emoji: '💚', de: 'Waldgrün nach dem Sommerregen' },
        { emoji: '🧡', de: 'Orange wie Zimt im warmen Tee' },
        { emoji: '🤍', de: 'Weiß wie frischer Schnee im Park' }
      ]
    },
    speakQuestions: [
      'Welche Farbe hat für dich der Montag?',
      'Wenn Glück ein Geschmack wäre — wie würde es schmecken?',
      'Welches Geräusch gibt dir sofort ein warmes Gefühl?',
      'Gibt es einen Duft, der dich traurig macht? Warum?',
      'Welche Farbe passt zu deiner Kindheit?',
      'Wenn deine beste Freundin eine Farbe wäre, welche?',
      'Welches Lied fühlt sich an, als wäre es nur für dich geschrieben?',
      'Was ist für dich der Geschmack von «zu Hause»?'
    ],
    vocab: [
      { art:'der', w:'Sinn',             ua:'відчуття; сенс',         ex:'Der Mensch hat fünf Sinne: Sehen, Hören, Riechen, Schmecken, Fühlen.' },
      { art:'die', w:'Farbe',            ua:'колір',                  ex:'Blau ist meine Lieblingsfarbe.' },
      { art:'—',   w:'verbinden mit',    ua:'пов\'язувати з',          ex:'Ich verbinde Gelb mit Sommer und Zitronen.' },
      { art:'die', w:'Assoziation',      ua:'асоціація',              ex:'Welche Assoziation hast du mit dem Wort «Freiheit»?' },
      { art:'die', w:'Stimmung',         ua:'настрій',                ex:'Die Farbe verändert sofort meine Stimmung.' },
      { art:'—',   w:'wirken',           ua:'діяти; справляти враження', ex:'Grün wirkt beruhigend auf mich.' },
      { art:'—',   w:'auslösen',         ua:'викликати (почуття)',    ex:'Dieser Geruch löst in mir eine tiefe Traurigkeit aus.' },
      { art:'die', w:'Wahrnehmung',      ua:'сприйняття',             ex:'Jeder hat eine andere Wahrnehmung von Farben.' },
      { art:'—',   w:'sich anfühlen',    ua:'відчуватися',            ex:'Es fühlt sich an, als wäre ich wieder zehn.' },
      { art:'—',   w:'als ob',           ua:'ніби; наче',             ex:'Rot schmeckt für mich, als ob es Zimt wäre.' }
    ],
    reading: {
      paragraphs: [
        'Hast du schon einmal einen Montag geschmeckt? Für mich ist Montag <strong>grau</strong> mit einem Hauch Kaffee. Dienstag ist <strong>dunkelblau</strong> und riecht nach Bürofluren. Mittwoch ist <strong>senfgelb</strong> — nicht schön, aber ehrlich. Freitag? Freitag ist <strong>pink</strong> und schmeckt nach Sekt und Freiheit.',
        'Das klingt vielleicht verrückt, aber viele Menschen erleben die Welt so. Die Wissenschaft nennt das <strong>Synästhesie</strong> — wenn zwei <mark title="відчуття">Sinne</mark> sich vermischen. Manche hören Farben, andere sehen Musik, wieder andere schmecken Wörter. Aber eigentlich machen wir das alle — nur ein bisschen weniger extrem.',
        'Denk mal nach: Warum <mark title="діє">wirkt</mark> <strong>Blau</strong> kühl und <strong>Rot</strong> warm? Warum <mark title="викликає">löst</mark> der Geruch von frischem Brot ein Gefühl von Geborgenheit <mark title="викликає">aus</mark>? Warum ist die <mark title="сприйняття">Wahrnehmung</mark> von «leise» bei jedem Menschen anders?',
        'Unser Gehirn ist ein Meister der <mark title="асоціацій">Assoziationen</mark>. Es <mark title="пов&#39;язує">verbindet</mark> jede Erfahrung mit allem, was gerade passiert — Licht, Geräusch, Duft, Temperatur, Gefühl. Deshalb hat jede Erinnerung eine <mark title="колір">Farbe</mark>, einen Soundtrack, manchmal sogar einen Geschmack.',
        'Meine Großmutter war <strong>Ockergelb</strong>. Warm, alt, geborgen — wie eine Decke im Herbst. Mein erster Schultag war <strong>grellrot</strong> und klang wie ein Alarm. Meine beste Freundin aus der fünften Klasse ist <strong>Türkis</strong> — kühl, klar, ein bisschen traurig. Sie zog nach Berlin, als wir dreizehn waren, und seitdem ist Türkis meine «Heimweh-Farbe».',
        'Gerüche sind die stärksten Trigger. Die Nase hat eine direkte Verbindung zum emotionalen Gehirn — stärker als Augen oder Ohren. Wenn ich irgendwo den Geruch von Sonnencreme und Chlor rieche, bin ich sofort wieder sieben. Freibad. Pommes rot-weiß. Der Sommer, als mein Cousin mir das Schwimmen beibrachte und ich zum ersten Mal keine Angst hatte.',
        'Musik funktioniert genauso. Ich höre drei Töne von «Mr. Brightside» — und es <mark title="відчувається">fühlt</mark> sich <mark title="відчувається">an</mark>, <mark title="ніби">als ob</mark> ich wieder neunzehn wäre. Mit meinem ersten Freund im Auto, Fenster auf, viel zu laut, endlos Sommer. Die Lieder lügen nicht. Sie tragen die <mark title="настрій">Stimmung</mark> eines ganzen Jahres in sich — und öffnen sie in drei Sekunden.',
        'Deshalb lohnt es sich, die Sprache der Sinne zu lernen. Wer weiß, wie Glück <em>schmeckt</em> und wie Traurigkeit <em>riecht</em>, kann Gefühle besser verstehen — die eigenen und die anderer. Und wenn das nächste Mal jemand fragt «Wie geht es dir?», sagst du vielleicht nicht «gut», sondern: «Heute fühle ich mich wie ein warmer Dienstagnachmittag im Oktober.»'
      ],
      uaSummary: '🇺🇦 Чи куштував ти колись понеділок? Для мене він сірий з нотками кави, вівторок — темно-синій, а п\'ятниця — рожева і пахне шампанським. Це синестезія: коли відчуття змішуються. Мозок пов\'язує кожен момент із кольором, звуком, ароматом. Моя бабуся — вохра. Перший шкільний день — яскраво-червоний. Запахи — найсильніший тригер: запах хлору і крему від сонця — і мені знов сім. Музика так само: три ноти, і ти знов маєш дев\'ятнадцять. Варто вчити мову відчуттів — щоб краще розуміти себе й інших.'
    },
    dialog: [
      { who:'👩', de:'Sag mal, was für eine Farbe ist für dich eigentlich Freitag?',                                     ua:'Слухай, а якого кольору для тебе п\'ятниця?' },
      { who:'🧑', de:'Pink. Ganz klar. Und du? Du wirkst heute irgendwie… blau.',                                          ua:'Рожева. Однозначно. А ти? Ти сьогодні якась… синя.' },
      { who:'👩', de:'Voll getroffen! Es fühlt sich an, als ob ich unter Wasser wäre. Zu viel los diese Woche.',            ua:'У десятку! Почуваюся, ніби під водою. Забагато всього цього тижня.' },
      { who:'🧑', de:'Weißt du, was hilft? Orange. Ein Tee mit Zimt, ein Film von früher — löst sofort ein warmes Gefühl aus.', ua:'Знаєш, що допомагає? Помаранчеве. Чай із корицею, старий фільм — одразу викликає тепле почуття.' },
      { who:'👩', de:'Ha, du bist verrückt. Aber okay — ich verbinde das jetzt mit Freundschaft. Danke, mein gelber Tag.',  ua:'Ха, ти божевільний. Але добре — тепер це в мене асоціація з дружбою. Дякую, мій жовтий день.' }
    ],
    grammar: {
      chip: 'Konjunktiv II + «als ob» — die Sprache der Assoziationen (als wäre, als hätte, als würde …)',
      html: `<div class="case-box"><div class="case-box-title">Крок 1 — «als ob» = «ніби / наче»</div><p>Коли ти описуєш <strong>асоціацію</strong> або <strong>нереальне враження</strong> («виглядає, ніби…», «почуваюся, наче…»), німці використовують конструкцію <strong>«als ob» + Konjunktiv II</strong> (умовний спосіб).</p><p>Це не реальність — це <em>твоє сприйняття</em>. Саме тому дієслово йде в <strong>Konjunktiv II</strong>: воно каже «так, ніби це було б правдою, але це не так».</p></div><div class="grammar-note"><strong>📌 Порівняй:</strong><br>• <em>Indikativ (реально):</em> Es <strong>ist</strong> kalt. <em>(Холодно.)</em><br>• <em>Konjunktiv II (асоціація):</em> Es fühlt sich an, <strong>als ob</strong> es Winter <strong>wäre</strong>. <em>(Відчувається, ніби зима.)</em></div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 1 — TOP-5 форм Konjunktiv II напам'ять</div><p>Ці п'ять форм покривають <strong>80% всього</strong>, що ти скажеш про відчуття та асоціації. Вчи як мантру.</p></div><table class="rule-table"><thead><tr><th>Infinitiv</th><th>Konjunktiv II</th><th>Приклад</th></tr></thead><tbody><tr><td>sein</td><td><code>wäre</code></td><td>…als ob ich wieder zehn <strong>wäre</strong>.</td></tr><tr><td>haben</td><td><code>hätte</code></td><td>…als ob ich keine Sorgen <strong>hätte</strong>.</td></tr><tr><td>werden</td><td><code>würde</code></td><td>…als ob alles gut <strong>werden würde</strong>.</td></tr><tr><td>können</td><td><code>könnte</code></td><td>…als ob ich fliegen <strong>könnte</strong>.</td></tr><tr><td>wissen</td><td><code>wüsste</code></td><td>…als ob sie alles <strong>wüsste</strong>.</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 2 — «als ob» vs «als» (без «ob»)</div><p>Обидва варіанти означають одне й те саме — АЛЕ <strong>порядок слів різний</strong>!</p></div><table class="rule-table"><thead><tr><th>Форма</th><th>Порядок</th><th>Приклад</th></tr></thead><tbody><tr><td><code>als ob</code></td><td>дієслово <strong>в кінці</strong></td><td>Es sieht aus, <strong>als ob</strong> es regnen <strong>würde</strong>.</td></tr><tr><td><code>als</code> (без ob)</td><td>дієслово <strong>одразу після «als»</strong> (Inversion)</td><td>Es sieht aus, <strong>als würde</strong> es regnen.</td></tr></tbody></table><div class="grammar-note">💡 <strong>Порада:</strong> на початку вчи <code>als ob</code> — правило простіше (дієслово в кінець, як у звичайному підрядному). А <code>als</code> без «ob» — це літературний варіант, звучить елегантніше.</div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 3 — шаблони для асоціацій (вчи як формули)</div><p>Ось 6 шаблонів, які одразу звучать як носій. Зубри їх:</p></div><ul class="examples"><li>Es fühlt sich an, <strong>als ob</strong> … <em>(Відчувається, ніби…)</em></li><li>Es sieht aus, <strong>als ob</strong> … <em>(Виглядає, ніби…)</em></li><li>Es klingt, <strong>als ob</strong> … <em>(Звучить, ніби…)</em></li><li>Es schmeckt, <strong>als ob</strong> … <em>(На смак, ніби…)</em></li><li>Es riecht, <strong>als ob</strong> … <em>(Пахне, ніби…)</em></li><li>Es ist, <strong>als ob</strong> … <em>(Таке враження, наче…)</em></li></ul><div class="case-box"><div class="case-box-title">Випадок 4 — «als» з інверсією (елегантний варіант)</div><p>Якщо прибираєш «ob», дієслово одразу стрибає на друге місце — як у питанні.</p></div><ul class="examples"><li>…<strong>als wäre</strong> ich wieder zehn. <em>(ніби мені знов десять)</em></li><li>…<strong>als hätte</strong> ich nie geschlafen. <em>(ніби я взагалі не спав)</em></li><li>…<strong>als könnte</strong> ich die Welt umarmen. <em>(ніби я можу обійняти весь світ)</em></li><li>…<strong>als würde</strong> die Zeit stehenbleiben. <em>(ніби час зупинився)</em></li></ul><div class="divider"></div><div class="grammar-note"><strong>💡 Лайфгак для Sprechen:</strong><br>Коли партнер питає «Wie fühlst du dich?», використовуй Konjunktiv II — і ти одразу звучиш як B1/B2. Приклади відповідей:<br><br>• <code>Ich fühle mich, als ob ich alles schaffen könnte.</code><br>• <code>Es ist, als wäre heute ein besonderer Tag.</code><br>• <code>Montag klingt für mich, als würde jemand einen alten Wecker stellen.</code><br>• <code>Dieses Lied fühlt sich an, als hätte es jemand nur für mich geschrieben.</code></div>`
    },
    quiz: [
      { q:'Was bedeutet «die Wahrnehmung»?',                                      opts:['колір','сприйняття','настрій','відчуття дотику'],                                  a:1 },
      { q:'Wie sagt man «викликати почуття» auf Deutsch?',                        opts:['verbinden','auslösen','wirken','anfühlen'],                                       a:1 },
      { q:'«Es fühlt sich an, als ob ich wieder zehn ___.» — Konjunktiv II von sein:', opts:['bin','war','wäre','werde'],                                                 a:2 },
      { q:'«Als ob»: wo steht das Verb?',                                         opts:['sofort nach «als ob»','in der Mitte','am Ende','egal'],                           a:2 },
      { q:'«Grün ___ beruhigend auf mich.»',                                      opts:['verbindet','wirkt','löst','fühlt'],                                               a:1 }
    ]
  },

  /* ============================================================
   * 13 · REDEWENDUNGEN — Idiome & Bilder · B1
   * ============================================================ */
  redewendungen: {
    slug: 'redewendungen',
    emoji: '🎭',
    title: 'Redewendungen',
    titleHtml: 'Rede<em>wendungen</em> 🎭',
    level: 'B1',
    duration: '~25 min',
    idx: '13',
    intro: 'Sonntagmorgen in einer Berliner WG-Küche. Lukas hat Kater, Mia ist sauer — und in fünf Minuten fliegen acht Redewendungen, die du wirklich jeden Tag hörst. Kein Lehrbuch-Deutsch. 🥱☕',
    memoryAnchors: {
      title: 'Kleines Kopfkino 🎬',
      hint: 'Stell dir jedes Bild kurz vor. Nicht übersetzen — nur sehen.',
      items: [
        { emoji: '🍪😤', de: 'auf den Keks — etwas nervt' },
        { emoji: '🐐0️⃣', de: 'null Bock — keine Lust' },
        { emoji: '👃😮‍💨', de: 'Nase voll — satthaben' },
        { emoji: '🗺️❌', de: 'kein Plan — keine Ahnung' },
        { emoji: '🌭🤷', de: 'Wurst — egal' },
        { emoji: '💩🔨', de: 'Mist bauen — vermasseln' },
        { emoji: '🐱🎒', de: 'Katze aus dem Sack — Geheimnis raus' },
        { emoji: '💬✨', de: 'Tacheles — ehrlich reden' }
      ]
    },
    speakQuestions: [
      'Was geht dir gerade richtig auf den Keks?',
      'Auf was hast du heute null Bock?',
      'Wovon hast du langsam die Nase voll?',
      'In welcher Situation hast du oft keinen Plan?',
      'Was ist dir komplett Wurst — auch wenn andere sich aufregen?',
      'Wann hast du zuletzt richtig Mist gebaut?',
      'Welches Geheimnis hast du letzte Woche aus dem Sack gelassen?',
      'Mit wem solltest du dringend mal Tacheles reden?'
    ],
    vocab: [
      { art:'die', w:'WG',          ua:'спільна квартира',   ex:'Ich wohne in einer WG mit zwei Leuten.' },
      { art:'der', w:'Streit',      ua:'суперечка, сварка',  ex:'Schon am Morgen hatten sie wieder Streit.' },
      { art:'der', w:'Kater',       ua:'похмілля',           ex:'Lukas hat heute einen üblen Kater.' },
      { art:'—',   w:'nerven',      ua:'дратувати, бісити',  ex:'Das nervt mich richtig.' },
      { art:'—',   w:'sauer',       ua:'злий, ображений',    ex:'Mia ist sauer auf Lukas.' },
      { art:'—',   w:'aufräumen',   ua:'прибирати',          ex:'Niemand will die Küche aufräumen.' },
      { art:'—',   w:'spülen',      ua:'мити посуд',         ex:'Spülen ist sein absoluter Hassjob.' },
      { art:'der', w:'Quatsch',     ua:'дурня, нісенітниця', ex:'Red doch nicht so einen Quatsch!' },
      { art:'—',   w:'ehrlich',     ua:'чесно, чесний',      ex:'Ehrlich gesagt, ich bin total fertig.' },
      { art:'—',   w:'zugeben',     ua:'визнати',            ex:'Ich gebe es zu — ich hab Mist gebaut.' }
    ],
    idioms: [
      {
        de: 'Das geht mir auf den Keks',
        emoji: '🍪😤',
        lit: 'це йде мені на печиво',
        meaning: 'etwas oder jemand nervt total',
        example: 'Das laute Auto vor dem Fenster geht mir voll auf den Keks.',
        when: 'Wenn dich etwas richtig nervt.',
        ua: 'Дратує, бісить'
      },
      {
        de: 'Null Bock haben',
        emoji: '🐐0️⃣',
        lit: 'мати нуль козла',
        meaning: 'gar keine Lust haben',
        example: 'Heute hab ich null Bock auf Uni — ich bleib im Bett.',
        when: 'Wenn du absolut keine Lust auf etwas hast.',
        ua: 'Немає жодного бажання, впадло'
      },
      {
        de: 'Die Nase voll haben',
        emoji: '👃😮‍💨',
        lit: 'мати повний ніс',
        meaning: 'etwas satt haben, genug haben',
        example: 'Ich hab die Nase voll von diesem Regenwetter.',
        when: 'Wenn dich etwas dauerhaft genervt hat.',
        ua: 'Дістало, заколебало'
      },
      {
        de: 'Keinen Plan haben',
        emoji: '🗺️❌',
        lit: 'не мати плану',
        meaning: 'keine Ahnung haben',
        example: 'Wann der Bus kommt? Keinen Plan, ehrlich.',
        when: 'Wenn du wirklich nichts weißt.',
        ua: 'Без поняття, не в курсі'
      },
      {
        de: 'Das ist mir Wurst',
        emoji: '🌭🤷',
        lit: 'це мені сосиска',
        meaning: 'es ist mir völlig egal',
        example: 'Pizza oder Pasta? Ist mir Wurst, beides ok.',
        when: 'Wenn dir eine Wahl wirklich egal ist.',
        ua: 'Мені пофіг'
      },
      {
        de: 'Mist bauen',
        emoji: '💩🔨',
        lit: 'будувати гній',
        meaning: 'einen Fehler machen, etwas vermasseln',
        example: 'Ich hab im Job ziemlich Mist gebaut — der Chef ist sauer.',
        when: 'Wenn du etwas verbockt hast.',
        ua: 'Накосячити, налажати'
      },
      {
        de: 'Die Katze aus dem Sack lassen',
        emoji: '🐱🎒',
        lit: 'випустити кота з мішка',
        meaning: 'ein Geheimnis verraten',
        example: 'Jetzt lass endlich die Katze aus dem Sack — was ist passiert?',
        when: 'Wenn jemand endlich ein Geheimnis verrät.',
        ua: 'Розкрити карти, проговоритись'
      },
      {
        de: 'Tacheles reden',
        emoji: '💬✨',
        lit: 'говорити «таХелес» (їдиш — суть, діло)',
        meaning: 'offen und direkt über ein Problem sprechen',
        example: 'Wir müssen mal Tacheles reden — so geht das nicht weiter.',
        when: 'Wenn ein ehrliches, klares Gespräch nötig ist.',
        ua: 'Поговорити начистоту'
      }
    ],
    reading: {
      paragraphs: [
        'Sonntag, halb elf. Mia steht in der WG-Küche und schaut auf die <mark title="мийка">Spüle</mark>. Drei Pizzakartons, leere Flaschen, irgendwo zwischen den Tellern eine halbe Avocado. Sie atmet tief ein.',
        'Lukas schlurft rein, T-Shirt schief, Haare wild — <mark title="похмілля">Kater</mark> der Stufe sieben. Er murmelt «Morgen» und greift nach der Kaffeekanne. Leer. Natürlich.',
        '«Lukas, ehrlich. Das geht mir <mark title="бісить">auf den Keks</mark>», sagt Mia ruhig. Und das ist die ruhige Stimme, die noch gefährlicher ist als Schreien. «Jeden Sonntag dasselbe. Ich hab die <mark title="заколебало">Nase voll</mark>.»',
        '«Sorry, echt», nuschelt Lukas. «Ich hab grad <mark title="нема бажання">null Bock</mark> auf Streit. Und ehrlich — ich hab <mark title="без поняття">keinen Plan</mark>, was nach Mitternacht passiert ist.»',
        'Mia verschränkt die Arme. «Genau das ist das Problem. Du baust am Wochenende <mark title="накосячити">Mist</mark>, und am Sonntag <mark title="прибираю">räume</mark> ich auf. Pizza oder Pasta gestern — das war mir <mark title="пофіг">Wurst</mark>. Aber das hier?» Sie zeigt auf die Spüle.',
        'Lukas seufzt, setzt sich hin. «Okay. Lass uns mal <mark title="чесно поговорити">Tacheles reden</mark>. Ich räum jetzt auf, und wir machen einen <mark title="графік миття">Spülplan</mark>. Versprochen.»',
        '«Gut.» Mia drückt ihm einen Kaffee in die Hand. «Aber jetzt lass auch mal die <mark title="секрет">Katze aus dem Sack</mark> — was war eigentlich mit Tom gestern? Er war so komisch drauf.»',
        'Lukas grinst zum ersten Mal an diesem Morgen. «Du, das wirst du nicht glauben. Tom hat sich verlobt. Heimlich. Niemand sollte es wissen — aber jetzt weißt du\'s.» Er nimmt einen Schluck. «Und jetzt — wo ist der Spüllappen?»'
      ],
      uaSummary: '🇺🇦 Неділя, пів на одинадцяту. Мія стоїть на кухні WG і дивиться на гору посуду після вечірки. Заходить Лукас з похміллям, шукає каву — пусто. Мія тихо: «Лукасе, мене це реально бісить (geht mir auf den Keks). Кожної неділі те саме. Я заколебалась (Nase voll)». Лукас бурмоче: «Вибач, у мене немає сили (null Bock) на сварку, і я навіть без поняття (keinen Plan), що було після півночі». Мія: «Ти косячиш (baust Mist), а я прибираю. Що було їсти — пофіг (war mir Wurst), але це вже занадто». Лукас сідає: «Окей, поговоримо начистоту (Tacheles reden), складемо графік миття». Мія дає йому каву: «А тепер розкажи нарешті (lass die Katze aus dem Sack) — що було з Томом?» Лукас усміхається: «Він заручився. Таємно. Ніхто не мав знати — але тепер ти знаєш».'
    },
    dialog: [
      { who:'👩', de:'Lukas, ehrlich — das geht mir voll auf den Keks. Die Küche ist ein Albtraum.',                       ua:'Лукасе, чесно — мене це реально бісить. На кухні якесь жахіття.' },
      { who:'🧑', de:'Sorry… ich hab grad null Bock auf Streit. Und keinen Plan, was gestern passiert ist.',              ua:'Вибач… у мене зараз нема сил на сварку. І без поняття, що було вчора.' },
      { who:'👩', de:'Ich hab echt die Nase voll. Du baust Mist, ich räum auf — jedes Wochenende dasselbe.',              ua:'Я реально вже заколебалась. Ти косячиш, я прибираю — кожні вихідні те саме.' },
      { who:'🧑', de:'Du, das ist mir nicht Wurst, ehrlich. Lass uns Tacheles reden, ich räum sofort auf.',                ua:'Слухай, мені не пофіг, чесно. Давай поговоримо начистоту, я зараз приберу.' },
      { who:'👩', de:'Okay. Aber jetzt lass auch mal die Katze aus dem Sack — was war gestern mit Tom?',                  ua:'Окей. Але тепер давай — розкажи нарешті, що було з Томом.' },
      { who:'🧑', de:'Du wirst lachen — er hat sich verlobt. Heimlich. Eigentlich sollte es keiner wissen.',              ua:'Ти не повіриш — він заручився. Таємно. Взагалі ніхто не мав знати.' }
    ],
    grammar: {
      chip: 'Розмовні ідіоми — Dativ для емоцій + типові дієслова',
      html: `<div class="case-box"><div class="case-box-title">Крок 1 — Розмовні ідіоми = Dativ для емоцій</div><p>У живій німецькій більшість ідіом, що описують <strong>як ти почуваєшся</strong>, мають конструкцію з <strong>Dativ</strong>. Особа, якій щось набридло, байдуже або дратує — у давальному відмінку.</p></div><div class="grammar-note"><strong>📌 Шаблон:</strong> Das geht <strong>mir</strong> auf den Keks · Das ist <strong>mir</strong> Wurst · <strong>Mir</strong> reicht's · <strong>Mir</strong> ist schlecht.</div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 1 — займенники у Dativ</div><p>Запам'ятай раз і назавжди — у цих ідіомах займенник <strong>обов'язково</strong> у Dativ. Не «mich», не «ich» — тільки <code>mir</code>.</p></div><table class="rule-table"><thead><tr><th>Хто</th><th>Nominativ</th><th>Dativ (для ідіом)</th></tr></thead><tbody><tr><td>я</td><td>ich</td><td><code>mir</code></td></tr><tr><td>ти</td><td>du</td><td><code>dir</code></td></tr><tr><td>він</td><td>er</td><td><code>ihm</code></td></tr><tr><td>вона</td><td>sie</td><td><code>ihr</code></td></tr><tr><td>ми</td><td>wir</td><td><code>uns</code></td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 2 — типові дієслова розмовних ідіом</div><p>На відміну від «літературних» ідіом (де домінує <em>haben</em>), у щоденній мові правлять інші дієслова. Вчи дієслово разом з іменником — як одне ціле.</p></div><ul class="examples"><li><strong>gehen + auf:</strong> Das geht mir auf den Keks · auf die Nerven</li><li><strong>sein + Dativ:</strong> Das ist mir Wurst · Mir ist schlecht</li><li><strong>haben + Akk:</strong> null Bock haben · die Nase voll haben · keinen Plan haben</li><li><strong>bauen / lassen / reden:</strong> Mist bauen · die Katze aus dem Sack lassen · Tacheles reden</li></ul><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 3 — порядок слів з відокремлюваними дієсловами</div><p>У дієсловах типу <em>aufräumen</em>, <em>zugeben</em> префікс <strong>летить у кінець</strong> речення. Це звучить дивно для українського вуха — але саме це й робить німецьку німецькою.</p></div><table class="rule-table"><thead><tr><th>Інфінітив</th><th>У реченні</th></tr></thead><tbody><tr><td>aufräumen</td><td>Ich räume die Küche <strong>auf</strong>.</td></tr><tr><td>zugeben</td><td>Ich gebe es <strong>zu</strong> — ich hab Mist gebaut.</td></tr><tr><td>aus·lassen</td><td>Lass die Katze endlich aus dem Sack!</td></tr></tbody></table><div class="grammar-note"><strong>💡 Лайфгак:</strong> у живій мові ідіоми йдуть <strong>пакетом з вигуком</strong>: «Boah, geht mir auf den Keks!», «Ach, ist mir Wurst!». Вчи їх з вигуком на початку — і одразу звучатимеш як носій, а не як підручник.</div>`
    },
    quiz: [
      { q:'«Das geht mir auf den Keks» bedeutet:',                          opts:['Ich habe Hunger','Ich finde es lustig','Es nervt mich total','Ich liebe es'],                  a:2 },
      { q:'Wenn jemand «null Bock» hat, dann …',                           opts:['hat er viel Lust','hat er gar keine Lust','ist er hungrig','ist er sauer'],                    a:1 },
      { q:'«Mist bauen» heißt:',                                           opts:['putzen','einen Fehler machen','kochen','lügen'],                                                 a:1 },
      { q:'«Tacheles reden» passt zu dieser Situation:',                   opts:['Smalltalk auf der Party','ein offenes, ehrliches Gespräch','ein Vortrag','Klatsch und Tratsch'], a:1 },
      { q:'Welche Form ist richtig? «Das ist ___ Wurst.»',                 opts:['ich','mich','mir','mein'],                                                                       a:2 }
    ]
  },

  /* ============================================================
   * 14 · KLASSIKER · neu gelesen — Literatur ohne Staub · B1
   * ============================================================ */
  klassiker: {
    slug: 'klassiker',
    emoji: '✒',
    title: 'Klassiker · neu',
    titleHtml: 'Klas<em>siker</em> · neu ✒',
    level: 'B1',
    duration: '~22 min',
    idx: '14',
    intro: 'Goethe hat geghostet. Werther war der erste Bro mit «main character syndrome». Kafka hatte Existenzkrise vor TikTok. Hier — die deutschen Klassiker, aber ohne Staub. 📜',
    speakQuestions: [
      'Welches Buch hast du als letztes gelesen — und ehrlich: war es gut?',
      'Welches «klassische» Buch wolltest du immer lesen, hast es aber nie geschafft?',
      'Welche Figur aus einem Buch oder Film fühlt sich für dich am ähnlichsten?',
      'Liest du lieber auf Papier, digital oder als Hörbuch?',
      'Welcher Autor oder welche Autorin würde heute wohl einen viralen Tweet schreiben?',
      'Glaubst du, in 200 Jahren liest noch jemand Harry Potter?',
      'Welches Buch hat dich wirklich verändert?',
      'Was war das letzte Buch, das du nicht zu Ende gelesen hast — und warum?'
    ],
    vocab: [
      { art:'der', w:'Roman',          ua:'роман',                  ex:'Goethes Roman «Werther» wurde sofort ein Bestseller.' },
      { art:'die', w:'Autorin / der Autor', ua:'авторка / автор',   ex:'Die Autorin schreibt seit zwanzig Jahren.' },
      { art:'das', w:'Werk',           ua:'твір; робота',           ex:'«Faust» ist Goethes berühmtestes Werk.' },
      { art:'die', w:'Figur',          ua:'персонаж',               ex:'Die Hauptfigur ist jung, klug und ein bisschen verloren.' },
      { art:'die', w:'Handlung',       ua:'сюжет; дія',             ex:'Die Handlung spielt im 18. Jahrhundert.' },
      { art:'der', w:'Held / die Heldin', ua:'герой / героїня',     ex:'Der tragische Held verliert am Ende alles.' },
      { art:'—',   w:'veröffentlichen', ua:'публікувати',           ex:'Kafka veröffentlichte zu Lebzeiten kaum etwas.' },
      { art:'—',   w:'behaupten',      ua:'стверджувати',           ex:'Der Autor behauptet, er habe das Buch in einer Nacht geschrieben.' },
      { art:'die', w:'Aussage',        ua:'висловлювання; тeza',    ex:'Die Aussage des Romans ist zeitlos.' },
      { art:'die', w:'Epoche',         ua:'епоха',                  ex:'Goethe gehört zur Epoche der Klassik.' }
    ],
    reading: {
      paragraphs: [
        'Stell dir vor: Du bist 25, frisch verliebt, sie ist verlobt mit einem anderen, du schreibst ihr 200 Seiten <mark title="лист">Brief</mark> über deine Gefühle, sie liest sie nicht — und am Ende ziehst du dir blaue Klamotten an und ballerst dich selbst mit einer geliehenen Pistole ab. Glückwunsch: Du bist Werther. Goethes <mark title="роман">Roman</mark> «Die Leiden des jungen Werthers» (1774) war der erste internationale Bestseller — und der erste «main character syndrome» auf 200 Seiten.',
        'Damals war das so krass, dass junge Männer in ganz Europa anfingen, sich blau anzuziehen und sich selbst zu erschießen. Echt jetzt. Die Wissenschaft nennt das heute «<strong>Werther-Effekt</strong>». 1774 war Goethes Buch das, was wir heute «virale Romantisierung» nennen würden.',
        'Springen wir 50 Jahre weiter: Goethe ist alt, berühmt, lebt in Weimar wie ein Influencer mit Hofstaat. Er <mark title="публікує">veröffentlicht</mark> «Faust» — die Story von einem Wissenschaftler, der einen Deal mit dem Teufel macht, weil ihm das Leben zu langweilig ist. Klingt wie eine Netflix-Serie? Ist es auch — wurde 47-mal verfilmt. Der <mark title="герой">Held</mark> Faust will <em>alles</em> wissen, alles fühlen, alles haben. Sehr 2026.',
        'Dann kommt die nächste <mark title="епоха">Epoche</mark>: <strong>Romantik</strong>. Friedrich Schiller, Heinrich Heine, die Brüder Grimm. Sie schreiben über Wälder, Mondlicht, gebrochene Herzen und tote Mädchen. Sehr aesthetic, sehr Tumblr-2014. Heine ist der schärfste Tweet-Schreiber des 19. Jahrhunderts: «Wo man Bücher verbrennt, verbrennt man am Ende auch Menschen.» — geschrieben 1820. Hat er ungelogen vorhergesagt.',
        'Hundert Jahre später, Prag, 1915. Ein Versicherungs-Beamter namens <strong>Franz Kafka</strong> wacht auf und schreibt: «Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheuren Ungeziefer verwandelt.» Der Typ wird zur Kakerlake. Seine Familie ekelt sich. Niemand fragt, <em>warum</em>. Das ganze Buch ist eine einzige Existenzkrise — geschrieben, bevor Existenzkrise ein Wort war.',
        'Kafka <mark title="стверджував">behauptete</mark>, seine Bücher seien Müll, und bat seinen Freund Max Brod, alles nach seinem Tod zu verbrennen. Brod ignorierte das komplett. Heute kennt jeder das Wort «kafkaesk» — wenn die Welt absurd, bürokratisch und unheimlich ist. Spoiler: das ist das Finanzamt.',
        'Und dann <strong>Bertolt Brecht</strong> — der Punk unter den Klassikern. Er schrieb in den 1920ern Stücke, in denen die Schauspieler plötzlich aufhörten zu spielen und das Publikum direkt anredeten. «Hey, das ist nur Theater. Denkt nach!» Sein berühmtester Song: «Mackie Messer» aus der «Dreigroschenoper». Du kennst die Melodie — alle kennen sie. Brecht hat den ersten Anti-Held der modernen Bühne erfunden — und ganz nebenbei das Theater neu definiert.',
        'Was sie alle gemeinsam haben? Sie schrieben über Leute, die nicht klar kommen. Werther, Faust, Gregor Samsa, Mackie Messer — keiner von denen ist «happy». Aber genau deshalb funktioniert deutsche Literatur immer noch: weil sie ehrlich ist über das Chaos im Kopf. Klassiker sind keine alten weißen Bücher in Bibliotheken. Sie sind die ersten Memes der Menschheit — nur länger und besser geschrieben. 📚'
      ],
      uaSummary: '🇺🇦 Уяви: тобі 25, ти закоханий у заручену, пишеш їй 200 сторінок листів, вона їх не читає — і ти стріляєшся в синій куртці. Вітаю, ти Вертер (Гете, 1774). Це був перший вірусний роман — після нього молоді чоловіки масово копіювали самогубство. Далі Гете пише «Фауст» — про вченого, що уклав угоду з дияволом. Шиллер, Гайне, брати Грімм пишуть про темні ліси й розбиті серця. Гайне передбачає 1933: «Де палять книги, там палять і людей». Кафка перетворює свого героя на жука — це один великий екзистенційний кризис. Брехт винаходить театр, у якому актори говорять до глядачів напряму. Усі ці автори писали про людей, які не справляються — і саме тому вони працюють досі. Класика — це не нудні книжки в бібліотеці. Це перші меми людства, тільки довші й краще написані.'
    },
    dialog: [
      { who:'🧑', de:'Hast du «Werther» wirklich freiwillig gelesen? Ehrlich?',                                                ua:'Ти серйозно «Вертера» сам прочитав? Чесно?' },
      { who:'👩', de:'Ehrlich gesagt: ja. Aber nur, weil mein Lehrer behauptet hat, es sei der erste Influencer-Roman.',         ua:'Чесно — так. Але тільки тому, що вчитель казав, що це перший «інфлюенсер-роман».' },
      { who:'🧑', de:'Ha! Trotzdem mega cringe. Der Typ heult 200 Seiten lang, weil eine Frau ihn nicht will.',                  ua:'Ха! Все одно крінж. Чувак 200 сторінок ниє, бо дівчина його не хоче.' },
      { who:'👩', de:'Genau das ist ja der Punkt! Goethe sagt, jeder von uns sei manchmal Werther — nur ohne die Pistole.',     ua:'Саме в цьому фішка! Гете каже, що кожен із нас іноді Вертер — тільки без пістолета.' },
      { who:'🧑', de:'Okay, fair. Aber ich lese trotzdem lieber Kafka. Der hat wenigstens Humor in seinen Existenzkrisen.',     ua:'Ок, справедливо. Але я все одно більше Кафку люблю. У нього хоч гумор у тих його екзистенційних кризах.' }
    ],
    grammar: {
      chip: 'Konjunktiv I — indirekte Rede («Goethe sagt, er sei… / habe… / werde…»)',
      html: `<div class="case-box"><div class="case-box-title">Крок 1 — навіщо взагалі Konjunktiv I?</div><p>Коли ти <strong>переказуєш чужі слова</strong> — особливо в новинах, статтях, аналізі літератури — німці використовують <strong>Konjunktiv I</strong>. Це сигналізує: «це не моя думка, це він/вона так сказав/ла».</p><p>Це звучить дуже літературно і академічно. Тому ідеально пасує до розмов про авторів та літературу.</p></div><div class="grammar-note"><strong>📌 Порівняй:</strong><br>• <em>Indikativ (твоя думка):</em> Goethe <strong>ist</strong> der größte Dichter. <em>(Гете — найбільший поет.)</em><br>• <em>Konjunktiv I (переказ):</em> Schiller sagte, Goethe <strong>sei</strong> der größte Dichter. <em>(Шиллер казав, що Гете — найбільший поет.)</em></div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 1 — TOP-6 форм Konjunktiv I напам'ять</div><p>Як і Konjunktiv II, ці форми треба знати назубок. Вони покривають 90% переказу.</p></div><table class="rule-table"><thead><tr><th>Infinitiv</th><th>Konjunktiv I (er/sie/es)</th><th>Приклад</th></tr></thead><tbody><tr><td>sein</td><td><code>sei</code></td><td>Kafka sagt, das Leben <strong>sei</strong> absurd.</td></tr><tr><td>haben</td><td><code>habe</code></td><td>Goethe behauptet, er <strong>habe</strong> Werther in 4 Wochen geschrieben.</td></tr><tr><td>werden</td><td><code>werde</code></td><td>Brecht meint, das Theater <strong>werde</strong> politisch.</td></tr><tr><td>können</td><td><code>könne</code></td><td>Heine schreibt, jeder <strong>könne</strong> ein Gedicht verstehen.</td></tr><tr><td>müssen</td><td><code>müsse</code></td><td>Schiller sagt, Kunst <strong>müsse</strong> frei sein.</td></tr><tr><td>wollen</td><td><code>wolle</code></td><td>Faust sagt, er <strong>wolle</strong> alles wissen.</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Випадок 2 — коли Konjunktiv I = Indikativ → бери Konjunktiv II</div><p>Проблема: у формах <code>wir / sie / Sie</code> Konjunktiv I часто виглядає так само, як звичайний Indikativ. Тоді переходь на <strong>Konjunktiv II</strong> (або форму з <code>würde</code>) — щоб не плутати.</p></div><table class="rule-table"><thead><tr><th>Person</th><th>Indikativ</th><th>Konjunktiv I</th><th>→ берем Konj. II</th></tr></thead><tbody><tr><td>sie (Plural)</td><td>haben</td><td><em>haben</em> ❌</td><td><code>hätten</code> ✅</td></tr><tr><td>wir</td><td>gehen</td><td><em>gehen</em> ❌</td><td><code>würden gehen</code> ✅</td></tr><tr><td>sie (Plural)</td><td>wollen</td><td><em>wollen</em> ❌</td><td><code>wollten</code> ✅</td></tr></tbody></table><div class="grammar-note">💡 <strong>Просте правило:</strong> якщо Konjunktiv I звучить точно як звичайний теперішній час — заміняй на <strong>Konjunktiv II</strong>. Слухач одразу зрозуміє, що це переказ.</div><div class="divider"></div><div class="case-box"><div class="case-box-title">Випадок 3 — шаблони для розмов про літературу</div><p>Зубри ці фрази — і ти одразу звучиш як критик або філолог.</p></div><ul class="examples"><li>Der Autor <strong>sagt</strong>, … <em>(Автор каже, що…)</em></li><li>Die Autorin <strong>behauptet</strong>, … <em>(Авторка стверджує, що…)</em></li><li>Im Buch <strong>heißt es</strong>, … <em>(У книжці сказано, що…)</em></li><li>Der Held <strong>meint</strong>, … <em>(Герой вважає, що…)</em></li><li>Kafka <strong>schreibt</strong>, das Leben <strong>sei</strong> absurd.</li><li>Goethe <strong>betont</strong>, die Liebe <strong>könne</strong> alles ändern.</li></ul><div class="case-box"><div class="case-box-title">Випадок 4 — переказ запитання («ob» / W-Wort)</div><p>Коли переказуєш питання — використовуй <code>ob</code> (так/ні) або W-слово (was, wer, wann, warum…).</p></div><ul class="examples"><li>Sie fragte: «Liest du gern?» → Sie fragte, <strong>ob</strong> ich gern <strong>lese</strong>.</li><li>Er fragte: «Was hast du gelesen?» → Er fragte, <strong>was</strong> ich gelesen <strong>habe</strong>.</li></ul><div class="divider"></div><div class="grammar-note"><strong>💡 Лайфгак для Sprechen про книжки:</strong><br>Замість «Я думаю, що автор каже X», скажи: <code>Der Autor sagt, … sei / habe / werde …</code> — і ти одразу звучиш як B2 у літературній розмові:<br><br>• <code>Goethe behauptet, die Liebe sei stärker als der Tod.</code><br>• <code>Kafka schreibt, der Mensch sei ein Insekt im System.</code><br>• <code>Die Autorin meint, jeder Roman habe eine geheime Aussage.</code><br>• <code>Im Werk heißt es, der Held wolle die Welt verändern.</code></div>`
    },
    quiz: [
      { q:'Was bedeutet «das Werk»?',                                              opts:['робота / твір','герой','розділ','епоха'],                                          a:0 },
      { q:'Wer schrieb «Die Leiden des jungen Werthers»?',                         opts:['Kafka','Schiller','Goethe','Brecht'],                                              a:2 },
      { q:'«Goethe sagt, er ___ alles wissen.» — Konjunktiv I von wollen:',        opts:['will','wolle','wollte','würde wollen'],                                            a:1 },
      { q:'Konjunktiv I von «sein» (er/sie/es):',                                  opts:['ist','sei','wäre','war'],                                                          a:1 },
      { q:'«Kafka behauptet, seine Bücher ___ Müll.» — wir nehmen Konj. II, weil Konj. I = Indikativ:', opts:['sind','seien','wären','sein'],                                  a:2 }
    ]
  },

  /* ============================================================
   * 15 · WOHNEN — Eine neue Wohnung · B1
   * ============================================================ */
  wohnen: {
    slug: 'wohnen',
    emoji: '🏠',
    title: 'Eine neue Wohnung',
    titleHtml: 'Eine neue <em>Wohnung</em> 🏠',
    level: 'B1',
    duration: '~20 min',
    idx: '15',
    intro: 'Kaution, Mietvertrag, WG oder eigene Bude — alles, was du brauchst, wenn du in Deutschland eine Wohnung suchst. 🔑',
    speakQuestions: [
      'Wohnst du alleine oder mit anderen zusammen? Wie gefällt dir das?',
      'Was ist dir bei einer Wohnung am wichtigsten — Lage, Größe oder Preis?',
      'Hast du schon mal eine Wohnung gesucht? Wie war das?',
      'Was sind die Vor- und Nachteile einer WG gegenüber einer eigenen Wohnung?',
      'Wie hoch sind die Mieten in deiner Stadt? Sind sie teuer?',
      'Was würdest du in deiner Traumwohnung haben wollen?',
      'Hast du schon mal umgezogen? Wie war der Umzug?',
      'Was machst du, wenn der Vermieter eine defekte Heizung nicht repariert?'
    ],
    vocab: [
      { art:'die', w:'Miete',             ua:'орендна плата',         ex:'Die Miete für diese Wohnung beträgt 800 Euro.' },
      { art:'der', w:'Vermieter',         ua:'орендодавець',          ex:'Der Vermieter ist sehr freundlich und hilfsbereit.' },
      { art:'die', w:'Kaution',           ua:'застава / завдаток',    ex:'Beim Einzug muss man drei Monatsmieten als Kaution zahlen.' },
      { art:'der', w:'Mietvertrag',       ua:'договір оренди',        ex:'Ich habe den Mietvertrag heute unterschrieben.' },
      { art:'die', w:'Wohngemeinschaft',  ua:'спільна квартира (WG)', ex:'In einer WG teilt man Küche und Bad mit anderen.' },
      { art:'die', w:'Nebenkosten',       ua:'комунальні витрати',    ex:'Die Nebenkosten für Strom und Wasser kommen noch dazu.' },
      { art:'der', w:'Umzug',             ua:'переїзд',               ex:'Der Umzug war stressig, aber jetzt bin ich happy!' },
      { art:'—',   w:'renovieren',        ua:'робити ремонт',         ex:'Die Küche muss vor dem Einzug renoviert werden.' },
      { art:'die', w:'Nachbarschaft',     ua:'сусідство / район',     ex:'Die Nachbarschaft hier ist ruhig und sehr nett.' },
      { art:'die', w:'Kündigung',         ua:'розірвання договору',   ex:'Die Kündigung muss drei Monate vorher eingereicht werden.' }
    ],
    reading: {
      paragraphs: [
        'Niklas ist 24 Jahre alt und studiert ab Oktober Informatik an der Humboldt-Universität in Berlin. Dafür muss er aus Hannover in die Hauptstadt ziehen — und braucht dringend eine Wohnung. Das Problem: Die <mark title="орендна плата">Mieten</mark> in Berlin sind in den letzten Jahren stark gestiegen. Eine 2-Zimmer-Wohnung kostet oft zwischen 900 und 1.300 Euro <mark title="холодна оренда — без комунальних">kalt</mark> — also ohne <mark title="комунальні витрати">Nebenkosten</mark> wie Strom, Wasser und Heizung. Mit allem zusammen kann das schnell 1.500 Euro im Monat werden.',
        'Um überhaupt eine Chance auf eine Wohnung zu haben, braucht man in Deutschland die richtigen Unterlagen: eine <mark title="довідка про кредитоспроможність">Schufa-Auskunft</mark>, Kopien der letzten drei Gehaltsabrechnungen und einen Personalausweis. Für Studenten ist das schwierig — sie haben oft kein regelmäßiges Einkommen. Deshalb müssen viele Eltern als <mark title="поручитель">Bürgen</mark> unterschreiben. Auch Niklas bittet seinen Vater darum.',
        'Niklas schaut täglich auf Portalen wie ImmoScout24, WG-Gesucht und Kleinanzeigen. Er bewirbt sich auf viele Angebote — aber die meisten sind schon vergeben oder viel zu teuer. Die wenigen, bei denen er eine Antwort bekommt, enden in <mark title="перегляди квартир">Besichtigungen</mark> mit zehn bis zwanzig anderen Bewerbern. Einmal fragt ihn ein Vermieter direkt: «Warum sollten wir gerade Ihnen die Wohnung geben?» Auf Empfehlung einer Freundin schreibt Niklas danach persönliche Briefe an jeden Vermieter — mit ein paar Sätzen darüber, wer er ist und warum ihm die Wohnung wichtig ist.',
        'Nach drei Wochen hat er endlich Glück: Ein Zimmer in einer <mark title="спільна квартира">Wohngemeinschaft</mark> in Prenzlauer Berg ist noch frei — 480 Euro <mark title="тепла оренда — комунальні вже включені">warm</mark>, also mit Nebenkosten. Das Zimmer liegt nur zehn Minuten vom Campus entfernt — mit dem Fahrrad. Aber erst muss Niklas ein WG-Gespräch führen: Die beiden Mitbewohner Sandra und Tobias wollen wissen, ob er zu ihnen passt. Sie kochen gerne, sind ordentlich und mögen keine lauten Partys. Niklas passt gut dazu — und bekommt das Zimmer.',
        'Beim Einzug zahlt Niklas eine <mark title="застава">Kaution</mark> — zwei Monatsmieten, also 960 Euro. Er unterschreibt den <mark title="договір оренди">Mietvertrag</mark> und bekommt seine Schlüssel. Wichtig: Im Vertrag steht eine <mark title="термін повідомлення про розірвання">Kündigungsfrist</mark> von drei Monaten. Das bedeutet: Wenn Niklas ausziehen will, muss er das drei Monate im Voraus ankündigen. Außerdem gibt es einen Putzplan — jede Woche putzt jemand anderes das Bad und die Küche.',
        'Am ersten Tag macht Niklas mit dem <mark title="орендодавець">Vermieter</mark> ein <mark title="акт приймання-передачі квартири">Übergabeprotokoll</mark>: Sie gehen durch alle Räume und schreiben auf, welche Schäden schon vorher da waren — ein Kratzer an der Tür, ein Fleck an der Wand. Das ist wichtig, damit Niklas am Ende nicht für alte Schäden zahlen muss. Der Vermieter erklärt ihm außerdem, wie die Heizung funktioniert, wo der Sicherungskasten ist und wie man in diesem Haus den Müll trennt.',
        'Einen Monat später ist Niklas angekommen. Die <mark title="сусідство, квартал">Nachbarschaft</mark> in Prenzlauer Berg ist ruhig: alte Häuser, ein kleiner Park um die Ecke, ein türkischer Supermarkt nebenan. Sandra kocht manchmal für alle drei, Tobias repariert gerne Dinge in der Wohnung. Abends sitzen sie manchmal auf dem Balkon und reden. Nach dem stressigen <mark title="переїзд">Umzug</mark> und der langen Suche fühlt Niklas sich endlich zu Hause — auch wenn ihm die 960 Euro Kaution noch lange im Kopf bleiben.'
      ],
      uaSummary: '🇺🇦 Ніклас переїжджає з Ганновера до Берліна на навчання. Оренда в Берліні дорога — до 1500 € з комунальними. Щоб зняти житло, потрібні: Schufa, довідки про зарплату, посвідчення особи. Студентам часто потрібен поручитель. Після 3 тижнів пошуків і безлічі переглядів він знаходить кімнату в WG за 480 € warm. Проходить WG-розмову, платить 960 € заставу, підписує договір із 3-місячним терміном повідомлення. Разом з орендодавцем складають Übergabeprotokoll — фіксують наявні пошкодження. Тепер живе з Сандрою та Тобіасом — і нарешті вдома.'
    },
    dialog: [
      { who:'📞', de:'Guten Tag, ich rufe wegen der Wohnung auf ImmoScout an — ist sie noch frei?', ua:'Добрий день, я дзвоню щодо квартири на ImmoScout — вона ще вільна?' },
      { who:'🏠', de:'Ja, sie ist noch frei! Wann könnten Sie vorbeikommen?', ua:'Так, вона вільна! Коли б ви могли приїхати подивитися?' },
      { who:'📞', de:'Am Samstagnachmittag würde gut passen. Und — darf ich fragen, wie hoch ist die Kaution?', ua:'Субота після обіду підійшла б. Можна запитати — яка застава?' },
      { who:'🏠', de:'Zwei Monatsmieten. Das sind 1.400 Euro. Und wir brauchen eine Schufa-Auskunft.', ua:'Два місячних платежі. Це 1400 €. І нам потрібна довідка Schufa.' },
      { who:'📞', de:'Alles klar! Ich bringe alles mit. Ich freue mich auf die Besichtigung! 😊', ua:'Добре! Я все принесу. Чекаю на перегляд квартири!' }
    ],
    grammar: {
      chip: 'Konjunktiv II — höflich fragen & Wünsche ausdrücken (hätte, wäre, könnte, würde …)',
      html: `<div class="case-box"><div class="case-box-title">Крок 1 — Навіщо Konjunktiv II?</div><p>Коли ти шукаєш квартиру, пишеш орендодавцю або телефонуєш — <strong>Konjunktiv II робить тебе ввічливим</strong>. Порівняй:</p></div><ul class="examples"><li>❌ «Ich will die Wohnung sehen.» <em>(звучить грубо — «Я хочу»)</em></li><li>✅ «Ich <strong>würde</strong> die Wohnung gerne sehen.» <em>(ввічливо — «Я б хотів»)</em></li><li>✅ «<strong>Könnte</strong> ich am Samstag vorbeikommen?» <em>(дуже ввічливо — «Чи міг би я?»)</em></li></ul><div class="divider"></div><div class="case-box"><div class="case-box-title">Крок 2 — 4 форми, які вирішують усе</div></div><table class="rule-table"><thead><tr><th>Infinitiv</th><th>Konjunktiv II (ich/er/sie)</th><th>Приклад</th></tr></thead><tbody><tr><td>sein</td><td><code>wäre</code></td><td><strong>Wäre</strong> die Wohnung noch frei?</td></tr><tr><td>haben</td><td><code>hätte</code></td><td>Ich <strong>hätte</strong> gerne ein ruhiges Zimmer.</td></tr><tr><td>können</td><td><code>könnte</code></td><td><strong>Könnte</strong> ich die Wohnung besichtigen?</td></tr><tr><td>alle anderen</td><td><code>würde + Infinitiv</code></td><td>Ich <strong>würde</strong> den Vertrag sofort unterschreiben.</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Крок 3 — Живі шаблони для пошуку квартири</div></div><ul class="examples"><li>«Ich <strong>hätte</strong> Interesse an der Wohnung.»</li><li>«<strong>Wäre</strong> eine Besichtigung am Wochenende möglich?»</li><li>«<strong>Könnten</strong> Sie mir mehr Fotos schicken?»</li><li>«Ich <strong>würde</strong> gerne so bald wie möglich einziehen.»</li><li>«<strong>Wäre</strong> die Kaution verhandelbar?»</li></ul><div class="grammar-note"><strong>📌 Запам'ятай:</strong> для всіх «звичайних» дієслів → <code>würde + Infinitiv</code>. Це найлегший і найчастіший спосіб!</div>`
    },
    quiz: [
      { q:'Niklas zahlt 480 Euro «warm» für sein WG-Zimmer. Was bedeutet «warm» beim Mietpreis?',
        opts:['Die Heizung ist extra zu bezahlen','Nebenkosten wie Strom und Heizung sind im Preis enthalten','Der Preis gilt nur im Winter','Es gibt keine Kaution'],
        a:1 },
      { q:'Warum müssen viele Studenten ihre Eltern als Bürgen eintragen lassen?',
        opts:['Weil Studenten keine Schufa beantragen dürfen','Weil Vermieter keine jungen Mieter mögen','Weil Studenten oft kein regelmäßiges Einkommen haben','Weil es so im Gesetz steht'],
        a:2 },
      { q:'Was ist ein Übergabeprotokoll und wofür braucht man es?',
        opts:['Eine Liste der Hausregeln für alle Mieter','Ein Dokument, das bestehende Schäden beim Einzug festhält — Schutz für den Mieter','Ein Formular für die Ummeldung beim Einwohnermeldeamt','Eine Quittung für die bezahlte Kaution'],
        a:1 },
      { q:'«___ eine Besichtigung am Samstag möglich?» — höflichste Form (Konjunktiv II):',
        opts:['Ist','War','Wäre','Wird'],
        a:2 },
      { q:'Im Mietvertrag steht eine Kündigungsfrist von drei Monaten. Was bedeutet das für Niklas?',
        opts:['Er kann nach drei Monaten kostenlos ausziehen','Er muss drei Monate im Voraus kündigen, bevor er auszieht','Er zahlt drei Monate extra, wenn er kündigt','Der Vermieter kann ihn nach drei Monaten rauswerfen'],
        a:1 },
      { q:'Warum schreibt Niklas persönliche Briefe an die Vermieter?',
        opts:['Weil er kein Telefon hatte','Weil er kein Deutsch sprechen konnte','Weil der Vermieter es verlangt hat','Weil eine Freundin ihm das empfohlen hat, um ernsthaftes Interesse zu zeigen'],
        a:3 },
      { q:'«Ich ___ gerne so bald wie möglich einziehen.» — richtige Konjunktiv-II-Form:',
        opts:['will','möchte','würde','werde'],
        a:2 }
    ],
    leseverstehen: {
      teil1: {
        instruction: 'Lesen Sie den Text sorgfältig. Sind die Aussagen <b>richtig (R)</b> oder <b>falsch (F)</b>? Achtung: Manche Aussagen sind fast richtig!',
        statements: [
          { s: 'Niklas zieht von Berlin nach Hannover um, um dort zu studieren.',                                                      correct: false },
          { s: 'Die Miete für eine 2-Zimmer-Wohnung in Berlin beträgt inklusive Nebenkosten oft bis zu 1.500 Euro.',                  correct: true  },
          { s: 'Das WG-Zimmer kostet 480 Euro kalt — Nebenkosten werden separat berechnet.',                                          correct: false },
          { s: 'Niklas muss vor dem Einzug ein Gespräch mit seinen zukünftigen Mitbewohnern führen.',                                 correct: true  },
          { s: 'Die Kündigungsfrist in Niklas\' Mietvertrag beträgt vier Monate.',                                                    correct: false },
          { s: 'Das Übergabeprotokoll schützt Niklas davor, am Auszug für Schäden zu zahlen, die schon vorher da waren.',             correct: true  }
        ]
      },
      teil2: {
        instruction: 'Welche Anzeige (A–D) passt zu welcher Person? Lesen Sie alle Details genau — nicht jedes Merkmal passt auf den ersten Blick!',
        ads: [
          { id: 'A', text: '1-Zi.-Whg., 38 m², 4. OG ohne Aufzug, vollmöbliert, keine Haustiere, Kurzzeitmiete (bis 6 Monate) möglich. NK inkl. 590 €.' },
          { id: 'B', text: 'WG-Zimmer, 16 m², 5er-WG, Gemeinschaftsküche, WLAN inkl., Raucher willkommen, ab sofort. 350 € warm.' },
          { id: 'C', text: '3-Zi.-Whg., 75 m², Erdgeschoss, großer Garten, Haustiere ausdrücklich erlaubt, unbefristeter Vertrag. 1.050 € kalt + NK.' },
          { id: 'D', text: 'Möbliertes Zimmer in 2er-WG, ruhige Lage, Nicht-Raucher, berufstätige Mitbewohnerin. Keine Studenten. 490 € warm.' }
        ],
        people: [
          { name: 'Oksana',        desc: 'Kommt für 4 Monate als Austauschstudentin. Hat keine eigenen Möbel, raucht gelegentlich, sehr kleines Budget.',  answer: 'B' },
          { name: 'Herr Vogel',    desc: '65 Jahre, pensioniert, hat einen Labrador. Sucht ruhige Erdgeschosswohnung, möchte unbefristet wohnen.',           answer: 'C' },
          { name: 'Lisa',          desc: 'Berufseinsteigerin, braucht Unterkunft nur für ihr 5-Monate-Projekt, hat keine Möbel dabei, keine Haustiere.',     answer: 'A' },
          { name: 'Mohammed',      desc: 'Arbeitet Vollzeit im Büro, raucht nicht, mag es ruhig, sucht WG ohne Studenten, Budget bis 550 €.',                answer: 'D' }
        ]
      }
    },
    anzeige: {
      badge: '🏠 WG-Anzeige · WG-Gesucht.de',
      text: `
        <p><strong>WG-Zimmer in Prenzlauer Berg — ab 1. Oktober frei</strong></p>
        <p>Wir sind Sandra (28, Lehrerin) und Tobias (30, Ingenieur) und suchen ein/e neue/n Mitbewohner/in für unser gemütliches Zimmer in einer ruhigen Seitenstraße.</p>
        <p><strong>Das Zimmer:</strong> 16 m², vollständig möbliert (Bett, Schreibtisch, Kleiderschrank), 3. Etage (kein Aufzug), Blick in den Innenhof.</p>
        <p><strong>Die Wohnung:</strong> 75 m² gesamt, große Küche, ein Badezimmer. WLAN inklusive. Rauchen nur draußen auf dem Balkon erlaubt. Haustiere leider nicht möglich.</p>
        <p><strong>Kosten:</strong> 480 € warm (alle Nebenkosten inklusive). Kaution: 960 € (zwei Monatsmieten).</p>
        <p><strong>Wir wünschen uns:</strong> jemanden, der ordentlich ist, gerne kocht und keine lauten Partys veranstaltet.</p>
        <p><strong>Melde dich mit kurzem Vorstellungstext:</strong> wg-pbg@mail.de</p>`,
      questions: [
        { q: 'Wie viel kostet das Zimmer pro Monat?',
          opts: ['350 € kalt', '480 € warm', '480 € kalt', '960 € warm'], a: 1 },
        { q: 'Was ist in den 480 € enthalten?',
          opts: ['Nur die Miete', 'Miete + alle Nebenkosten + WLAN', 'Miete + Strom, aber ohne WLAN', 'Nichts — alles extra'], a: 1 },
        { q: 'Wie groß ist das angebotene Zimmer?',
          opts: ['75 m²', '30 m²', '16 m²', '28 m²'], a: 2 },
        { q: 'Was ist in der Wohnung NICHT erlaubt?',
          opts: ['Kochen', 'Haustiere', 'Rauchen auf dem Balkon', 'WLAN nutzen'], a: 1 },
        { q: 'Wie hoch ist die Kaution?',
          opts: ['480 Euro', '750 Euro', '960 Euro', '1.200 Euro'], a: 2 },
        { q: 'Wann ist das Zimmer frei?',
          opts: ['Sofort', 'Ab 1. September', 'Ab 1. Oktober', 'Ab 1. November'], a: 2 }
      ]
    },
    wortschatzPlus: {
      lueckentext: {
        intro: 'Wähle ein Wort aus dem Kasten und klick auf die passende Lücke — jedes Wort passt genau einmal.',
        words: ['Miete', 'Kaution', 'Mietvertrag', 'Nebenkosten', 'Kündigung', 'Vermieter', 'Umzug', 'renovieren'],
        sentences: [
          { pre: 'Vor dem Einzug zahlt man zwei Monatsmieten als', blank: 'Kaution', post: '— das Geld bekommt man beim Auszug zurück.' },
          { pre: 'Die', blank: 'Miete', post: 'für das WG-Zimmer beträgt 480 Euro warm.' },
          { pre: 'Strom, Wasser und Heizung nennt man', blank: 'Nebenkosten', post: '— sie kommen zur Kaltmiete dazu.' },
          { pre: 'Ich habe den', blank: 'Mietvertrag', post: 'sorgfältig gelesen und dann unterschrieben.' },
          { pre: 'Der', blank: 'Vermieter', post: 'muss die kaputte Heizung reparieren — das ist gesetzlich seine Pflicht.' },
          { pre: 'Die', blank: 'Kündigung', post: 'muss drei Monate im Voraus schriftlich eingereicht werden.' },
          { pre: 'Der', blank: 'Umzug', post: 'war stressig, aber jetzt bin ich glücklich in meiner neuen Wohnung.' },
          { pre: 'Vor dem Einzug muss die Küche noch', blank: 'renovieren', post: 'werden — die Wände sind ganz alt.' }
        ]
      }
    }
  },

  /* ============================================================
   * 16 · BEWERBUNG — Die Bewerbung · B1
   * ============================================================ */
  bewerbung: {
    slug: 'bewerbung',
    emoji: '💼',
    title: 'Die Bewerbung',
    titleHtml: 'Die <em>Bewerbung</em> 💼',
    level: 'B1',
    duration: '~22 min',
    idx: '16',
    intro: 'Lebenslauf, Vorstellungsgespräch, Probezeit — alles, was du brauchst, um deinen ersten Job in Deutschland zu bekommen. 🖊️',
    speakQuestions: [
      'Hast du schon mal ein Vorstellungsgespräch auf Deutsch gehabt? Wie war es?',
      'Was ist für dich beim Job am wichtigsten — Gehalt, Atmosphäre oder Aufgaben?',
      'Wie schreibt man einen guten Lebenslauf? Was darf nicht fehlen?',
      'Was machst du, wenn du im Interview eine schwierige Frage bekommst?',
      'Was sind deiner Meinung nach deine größten Stärken im Beruf?',
      'Hast du schon mal einen Job gewechselt? Was hat dich dazu bewogen?',
      'Was ist die Probezeit und wozu dient sie?',
      'Würdest du lieber selbstständig arbeiten oder als Angestellter? Warum?'
    ],
    vocab: [
      { art:'die', w:'Bewerbung',              ua:'заявка на роботу',       ex:'Ich schicke heute meine Bewerbung ab.' },
      { art:'das', w:'Vorstellungsgespräch',   ua:'співбесіда',             ex:'Das Vorstellungsgespräch war auf Englisch und Deutsch.' },
      { art:'der', w:'Lebenslauf',             ua:'резюме',                 ex:'Mein Lebenslauf ist zwei Seiten lang.' },
      { art:'die', w:'Stelle',                 ua:'посада / вакансія',      ex:'Ich bewerbe mich auf eine Stelle als Marketingassistentin.' },
      { art:'der', w:'Arbeitgeber',            ua:'роботодавець',           ex:'Der Arbeitgeber bietet flexible Arbeitszeiten an.' },
      { art:'die', w:'Erfahrung',              ua:'досвід',                 ex:'Ich habe drei Jahre Erfahrung im Kundenkontakt.' },
      { art:'—',   w:'kündigen',               ua:'звільнятися / розривати договір', ex:'Sie hat gekündigt, weil sie eine bessere Stelle gefunden hat.' },
      { art:'—',   w:'einstellen',             ua:'наймати на роботу',      ex:'Die Firma stellt ab Januar neue Mitarbeiter ein.' },
      { art:'das', w:'Gehalt',                 ua:'зарплата',               ex:'Das Gehalt beträgt 2.400 Euro brutto pro Monat.' },
      { art:'die', w:'Probezeit',              ua:'випробувальний термін',  ex:'Die Probezeit dauert sechs Monate.' }
    ],
    reading: {
      paragraphs: [
        'Mia ist 27 Jahre alt und arbeitet seit drei Jahren als Kellnerin in Köln. Sie hat Wirtschaftswissenschaften studiert — und möchte endlich im Büro arbeiten. Eines Morgens sieht sie auf einer Jobplattform eine <mark title="вакансія">Stelle</mark> als Marketingassistentin in einer kleinen Agentur. Sie liest die Beschreibung zweimal. Dann schreibt sie ihrer Freundin Jana: «Ich glaube, das bin ich.»',
        'Jana gibt ihr Tipps für die <mark title="заявка на роботу">Bewerbung</mark>: «Kein Urlaubsfoto im <mark title="резюме">Lebenslauf</mark>. Schreib alle relevanten Praktika rein. Und lies das Anschreiben dreimal Korrektur — Tippfehler sind ein No-Go.» Das Anschreiben ist das Schwierigste: Man muss auf einer Seite erklären, warum genau diese Stelle und warum genau diese Firma. Mia schreibt vier Versionen, bevor sie zufrieden ist.',
        'Nach einer Woche kommt eine E-Mail: «Wir freuen uns, Sie zu einem <mark title="співбесіда">Vorstellungsgespräch</mark> einzuladen.» Mia atmet tief aus. Dann beginnt die Vorbereitung. Sie sucht Informationen über die Agentur, übt typische Fragen vor dem Spiegel und legt am Abend vorher ihre Kleidung raus.',
        'Am Morgen des Gesprächs kommt Mia fünf Minuten früher — nicht zu früh, nicht zu spät. Zwei Personen sitzen ihr gegenüber: Herr Bauer, der Geschäftsführer, und Frau Koch, die Teamleiterin. Die Fragen klingen vertraut: «Erzählen Sie uns von sich.» «Was sind Ihre Stärken?» «Wo sehen Sie sich in fünf Jahren?» Mia antwortet ruhig und konkret.',
        'Eine Frage überrascht sie: «Warum möchten Sie die Gastronomie gegen einen Bürojob tauschen?» Mia denkt kurz nach. «Als Kellnerin habe ich gelernt, unter Druck zu arbeiten und Kundenwünsche schnell zu verstehen. Diese <mark title="досвід">Erfahrung</mark> möchte ich jetzt in einem anderen Umfeld einsetzen.» Herr Bauer nickt. Frau Koch macht sich eine Notiz.',
        'Drei Tage später klingelt Mias Handy. Es ist Frau Koch: «Wir würden Sie gerne <mark title="наймати">einstellen</mark>.» Das <mark title="зарплата">Gehalt</mark> beträgt 2.400 Euro brutto, mit einer sechsmonatigen <mark title="випробувальний термін">Probezeit</mark>. Mia sagt zu. Danach ruft sie Jana an. Sie lacht und weint ein bisschen gleichzeitig.',
        'Am ersten Arbeitstag fühlt sich Mia fremd zwischen den Kollegen. Frau Koch zeigt ihr den Arbeitsplatz, erklärt die Tools und stellt sie dem Team vor. «Frag einfach, wenn du etwas nicht weißt», sagt sie zum Schluss. Das klingt simpel. Aber nach drei Jahren als Kellnerin weiß Mia: Das ist eigentlich der wichtigste Satz.'
      ],
      uaSummary: '🇺🇦 Міа, 27, три роки пропрацювала офіціанткою, хоча вивчала економіку. Вона подає заявку на посаду маркетинг-асистентки. Подруга Яна допомагає їй із резюме та супровідним листом. Після тижня очікування — запрошення на співбесіду. На інтервʼю Міа відповідає чесно: досвід офіціантки навчив її працювати під тиском. Через три дні — дзвінок із пропозицією роботи. 2400 € бруто, 6 місяців випробувального терміну. Перший день у новому офісі — все незнайоме, але вона вже вдома.'
    },
    dialog: [
      { who:'👔', de:'Erzählen Sie uns bitte kurz von sich — Ausbildung, Erfahrung, was Sie hierher bringt.',            ua:'Розкажіть трохи про себе — освіта, досвід, що привело вас до нас.' },
      { who:'💼', de:'Ich habe Wirtschaftswissenschaften studiert und danach drei Jahre in der Gastronomie gearbeitet. Jetzt möchte ich meine Erfahrung im Büroumfeld einsetzen.',  ua:'Я вивчала економіку, потім три роки працювала в ресторані. Тепер хочу застосувати свій досвід у офісному середовищі.' },
      { who:'👔', de:'Was würden Sie sagen — was sind Ihre größten Stärken?',                                             ua:'Як би ви описали свої найбільші сильні сторони?' },
      { who:'💼', de:'Ich arbeite gut unter Druck, bin sehr organisiert und lerne schnell neue Software. Außerdem kommuniziere ich gerne direkt.',  ua:'Я добре працюю під тиском, дуже організована і швидко вчуся. Плюс — мені подобається пряма комунікація.' },
      { who:'👔', de:'Haben Sie noch Fragen an uns?',                                                                    ua:'У вас є запитання до нас?' },
      { who:'💼', de:'Ja — wie sieht ein typischer Arbeitstag in dieser Position aus?',                                  ua:'Так — як виглядає типовий робочий день на цій посаді?' }
    ],
    grammar: {
      chip: 'Präteritum — die Vergangenheit erzählen (war, hatte, arbeitete, kam …)',
      html: `<div class="case-box"><div class="case-box-title">Навіщо Präteritum?</div><p>У співбесіді та резюме ти розповідаєш про минуле. Для письма і формальних розмов — <strong>Präteritum</strong>, не Perfekt:</p><ul class="examples"><li>❌ «Ich habe drei Jahre gearbeitet.» <em>(розмовний, прийнятний — але...)</em></li><li>✅ «Ich <strong>arbeitete</strong> drei Jahre als Assistentin.» <em>(офіційно, у резюме)</em></li><li>✅ «Sie <strong>war</strong> sehr nervös, aber <strong>antwortete</strong> ruhig.» <em>(оповідь)</em></li></ul></div><div class="divider"></div><div class="case-box"><div class="case-box-title">Ключові неправильні дієслова (B1 must-know)</div></div><table class="rule-table"><thead><tr><th>Infinitiv</th><th>Präteritum (ich/er/sie)</th><th>Приклад</th></tr></thead><tbody><tr><td>sein</td><td><code>war</code></td><td>Das Interview <strong>war</strong> schwierig.</td></tr><tr><td>haben</td><td><code>hatte</code></td><td>Sie <strong>hatte</strong> viel Erfahrung.</td></tr><tr><td>kommen</td><td><code>kam</code></td><td>Sie <strong>kam</strong> pünktlich an.</td></tr><tr><td>gehen</td><td><code>ging</code></td><td>Er <strong>ging</strong> zur Arbeit.</td></tr><tr><td>finden</td><td><code>fand</code></td><td>Sie <strong>fand</strong> die Stelle online.</td></tr><tr><td>sagen</td><td><code>sagte</code></td><td>Er <strong>sagte</strong> «Herzlich willkommen».</td></tr></tbody></table><div class="case-box"><div class="case-box-title">Правильні дієслова — схема</div></div><div class="gram-rule">Основа + <strong>-te</strong> (ich/er/sie) / <strong>-ten</strong> (wir/sie/Sie):<ul class="examples"><li>arbeiten → <strong>arbeitete</strong> / arbeiteten</li><li>lernen → <strong>lernte</strong> / lernten</li><li>machen → <strong>machte</strong> / machten</li><li>fragen → <strong>fragte</strong> / fragten</li></ul></div><div class="grammar-note"><strong>📌 Запам'ятай:</strong> sein і haben — завжди <code>war / hatte</code>, ніяких виключень. Вивчи їх першими — вони зустрічаються в кожному тексті!</div>`
    },
    quiz: [
      { q:'Was bedeutet «die Probezeit»?',
        opts:['Urlaub nach dem ersten Monat','Випробувальний термін перед постійним договором','Надбавка до зарплати','Термін подачі заявки'],
        a:1 },
      { q:'Mia sagt: «Ich möchte meine Erfahrung im neuen Umfeld einsetzen.» Was meint sie?',
        opts:['Sie möchte die Gastronomie nicht verlassen','Sie will ihre bisherigen Fähigkeiten in einem anderen Bereich nutzen','Sie hat keine Erfahrung und will etwas lernen','Sie sucht eine Stelle in einem Restaurant'],
        a:1 },
      { q:'«Das Interview ___ schwierig, aber sie ___ ruhig.» — Präteritum (sein / antworten):',
        opts:['war / antwortete','ist / antwortete','war / hat geantwortet','wäre / antwortete'],
        a:0 },
      { q:'Wie lange ist Mias Probezeit?',
        opts:['3 Monate','6 Monate','1 Jahr','Es gibt keine Probezeit'],
        a:1 },
      { q:'Was empfiehlt Jana beim Lebenslauf?',
        opts:['Ein schönes Urlaubsfoto beifügen','Das Anschreiben dreimal auf Fehler prüfen','Nur den letzten Job angeben','Keine Praktika erwähnen'],
        a:1 },
      { q:'«Sie ___ eine bessere Stelle und ___ bei der alten Firma.» — Präteritum (finden / kündigen):',
        opts:['fand / kündigte','gefunden / hat gekündigt','findet / kündigt','fand / hat gekündigt'],
        a:0 },
      { q:'Welche Form ist Präteritum von «gehen»?',
        opts:['geht','gegangen','ging','ist gegangen'],
        a:2 }
    ],
    leseverstehen: {
      teil1: {
        instruction: 'Lesen Sie den Text sorgfältig. Sind die Aussagen <b>richtig (R)</b> oder <b>falsch (F)</b>? Achtung: Manche Aussagen sind fast richtig!',
        statements: [
          { s: 'Mia hat Wirtschaft studiert und danach sofort eine Bürostelle gefunden.',                                              correct: false },
          { s: 'Jana rät Mia, das Anschreiben mehrmals auf Tippfehler zu prüfen.',                                                    correct: true  },
          { s: 'Beim Vorstellungsgespräch kommt Mia absichtlich zehn Minuten zu früh, um einen guten Eindruck zu machen.',            correct: false },
          { s: 'Mia erklärt, dass ihre Zeit als Kellnerin ihr geholfen hat, unter Druck zu arbeiten.',                                correct: true  },
          { s: 'Die Stelle wird Mia noch am Ende des Gesprächs direkt angeboten.',                                                    correct: false },
          { s: 'Mias Vertrag enthält eine sechsmonatige Probezeit.',                                                                  correct: true  }
        ]
      },
      teil2: {
        instruction: 'Welche Stellenanzeige (A–D) passt zu welcher Person? Lesen Sie alle Details genau — Budget, Erfahrung und Bedingungen zählen!',
        ads: [
          { id: 'A', text: 'Marketingassistenz (m/w/d), Vollzeit, Köln. Erfahrung im Kundenkontakt von Vorteil. Gehalt: 2.200–2.600 € brutto. Probezeit 6 Monate.' },
          { id: 'B', text: 'Senior-Softwareentwickler:in, 100% remote möglich. Min. 4 Jahre Erfahrung in Python. Gehalt ab 4.800 € brutto.' },
          { id: 'C', text: 'Werkstudent:in Grafikdesign, 20 Std./Woche, München. Für Studierende ab dem 3. Semester. Vergütung: 14 €/Std.' },
          { id: 'D', text: 'Vertriebsleiter:in, Reisebereitschaft 60%, Frankfurt. Führungserfahrung erforderlich. Gehalt ab 5.200 € brutto + Bonus.' }
        ],
        people: [
          { name: 'Mia',   desc: 'Wirtschaftsabsolventin, Erfahrung im Kundenkontakt, sucht Bürostelle in Vollzeit, wohnt in Köln.',                      answer: 'A' },
          { name: 'Jonas', desc: 'Informatik-Student im 4. Semester in München, sucht Nebenjob, kann nicht mehr als 20 Std./Woche arbeiten.',               answer: 'C' },
          { name: 'Elena', desc: '12 Jahre Vertriebserfahrung, hat ein Team von 10 Personen geführt, reist gerne, sucht eine Führungsposition.',            answer: 'D' },
          { name: 'Tobias',desc: 'Python-Entwickler mit 5 Jahren Erfahrung, möchte vollständig von zu Hause aus arbeiten, erwartet hohes Gehalt.',          answer: 'B' }
        ]
      }
    },
    anzeige: {
      badge: '💼 Stellenanzeige · jobs.de',
      text: `
        <p><strong>Marketingassistenz (m/w/d) — Agentur Kreativwerk GmbH, Köln</strong></p>
        <p>Du liebst es, Ideen zu entwickeln und Projekte zu koordinieren? Wir suchen Verstärkung für unser kleines, motiviertes Team!</p>
        <p><strong>Deine Aufgaben:</strong></p>
        <ul>
          <li>Unterstützung bei Planung und Durchführung von Marketingkampagnen</li>
          <li>Pflege der Social-Media-Kanäle (Instagram, LinkedIn)</li>
          <li>Kundenkommunikation per E-Mail und Telefon</li>
          <li>Erstellung von Präsentationen und Reports</li>
        </ul>
        <p><strong>Dein Profil:</strong></p>
        <ul>
          <li>Abgeschlossenes Studium (Wirtschaft, Kommunikation o.Ä.) oder vergleichbare Ausbildung</li>
          <li>Erfahrung im Kundenkontakt von Vorteil</li>
          <li>Sicherer Umgang mit MS Office; Kenntnisse in Canva ein Plus</li>
          <li>Sehr gute Deutschkenntnisse (mind. B2), Englischkenntnisse erwünscht</li>
        </ul>
        <p><strong>Wir bieten:</strong> Vollzeit · 2.200–2.600 € brutto · 6 Monate Probezeit · flexible Arbeitszeiten · modernes Büro im Herzen Kölns</p>
        <p><strong>Bewerbung an:</strong> bewerbung@kreativwerk-koeln.de — bitte Lebenslauf und Anschreiben beifügen.</p>`,
      questions: [
        { q: 'In welcher Stadt befindet sich diese Stelle?',
          opts: ['München', 'Berlin', 'Köln', 'Frankfurt'], a: 2 },
        { q: 'Was gehört NICHT zu den genannten Aufgaben?',
          opts: ['Social-Media-Pflege', 'Softwareentwicklung', 'Kundenkommunikation', 'Erstellung von Präsentationen'], a: 1 },
        { q: 'Wie hoch ist das angebotene Gehalt?',
          opts: ['1.800–2.200 € brutto', '2.200–2.600 € brutto', 'ab 3.000 € brutto', 'wird nicht genannt'], a: 1 },
        { q: 'Welches Mindest-Sprachniveau Deutsch wird verlangt?',
          opts: ['A2', 'B1', 'B2', 'C1'], a: 2 },
        { q: 'Was muss man mit der Bewerbung einschicken?',
          opts: ['Nur den Lebenslauf', 'Nur das Anschreiben', 'Lebenslauf und Anschreiben', 'Zeugnisse und Foto'], a: 2 },
        { q: 'Wie lange dauert die Probezeit?',
          opts: ['3 Monate', '6 Monate', '1 Jahr', 'keine Probezeit'], a: 1 }
      ]
    },
    wortschatzPlus: {
      lueckentext: {
        intro: 'Wähle ein Wort aus dem Kasten und klick auf die passende Lücke — jedes Wort passt genau einmal.',
        words: ['Bewerbung', 'Lebenslauf', 'Stelle', 'Probezeit', 'Gehalt', 'Erfahrung', 'kündigen', 'einstellen'],
        sentences: [
          { pre: 'Ich schicke heute meine', blank: 'Bewerbung', post: 'mit Anschreiben und Lebenslauf ab.' },
          { pre: 'Mein', blank: 'Lebenslauf', post: 'ist zwei Seiten lang und enthält alle Praktika.' },
          { pre: 'Ich bewerbe mich auf eine', blank: 'Stelle', post: 'als Marketingassistentin in Köln.' },
          { pre: 'Das', blank: 'Gehalt', post: 'für diese Position beträgt 2.400 Euro brutto pro Monat.' },
          { pre: 'Drei Jahre Arbeit im Restaurant sind wertvolle', blank: 'Erfahrung', post: 'im Kundenkontakt.' },
          { pre: 'Die', blank: 'Probezeit', post: 'dauert sechs Monate — danach gibt es einen unbefristeten Vertrag.' },
          { pre: 'Sie hat', blank: 'gekündigt', post: ', weil sie eine bessere Stelle gefunden hat.' },
          { pre: 'Die Firma möchte ab Januar fünf neue Mitarbeiter', blank: 'einstellen', post: '.' }
        ]
      }
    }
  }

};
