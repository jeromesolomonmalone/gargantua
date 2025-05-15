const films = [
  {
    release: new Date("2023-04-05"),
    publication: new Date("2023-05-13"),
    format: "фильм",
    grade: "B",
    title: "Air: Большой прыжок",
    original: "Air",
    kinopoisk:
      "https://www.kinopoisk.ru/film/5000997/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Бен Аффлек",
      },
    ],
    cast: [
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Джейсон Бейтман",
      },
      {
        name: "Бен Аффлек",
      },
      {
        name: "Виола Дэвис",
      },
      {
        name: "Крис Мессина",
      },
    ],
    description:
      "История сотрудничества Майкла Джордана с Nike, которое породило бренд Air Jordan, изменивший мир спорта и культуры.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 19,
  }, // air: большой прыжок
  {
    release: new Date("2024-04-10"),
    publication: new Date("2024-04-29"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Fallout",
    original: "Fallout",
    kinopoisk: "https://www.kinopoisk.ru/series/1394131/",
    director: [
      {
        name: "Грэм Вагнер",
      },
      {
        name: "Женева Робертсон-Дуорет",
      },
    ],
    cast: [
      {
        name: "Элла Пернелл",
      },
      {
        name: "Аарон Мотен",
      },
      {
        name: "Уолтон Гоггинс",
      },
    ],
    description:
      "В 2296 году, более 200 лет спустя после ядерной войны, потомки привилегированных и богатых живут в автономных благоустроенных бункерах, а остальное человечество выживает в жёстких условиях.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 33,
  }, // fallout 1
  {
    release: new Date("2024-01-11"),
    publication: new Date("2024-03-28"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Третий лишний",
    original: "Ted",
    kinopoisk: "https://www.kinopoisk.ru/series/4475348/",
    director: [
      {
        name: "Сет Макфарлейн",
      },
    ],
    cast: [
      {
        name: "Сет Макфарлейн",
      },
      {
        name: "Макс Буркхолдер",
      },
    ],
    description:
      "На дворе 1993 год, и момент славы медвежонка Теда миновал. Он живет дома со своим лучшим другом Джоном Беннеттом и его семьей.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 12,
  }, // ted 1
  {
    release: new Date("2024-02-15"),
    publication: new Date("2024-10-07"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "The Vince Staples Show",
    original: "The Vince Staples Show",
    kinopoisk:
      "https://www.kinopoisk.ru/series/5450042/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Йен Эдельман",
      },
      {
        name: "Морис Уильямс",
      },
      {
        name: "Винс Стэйплс",
      },
    ],
    cast: [
      {
        name: "Винс Стэйплс",
      },
    ],
    description:
      "Известный рэпер Винс Стэйплс сталкивается с трудностями и неожиданностями повседневной жизни в своем родном городе Бич.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 19,
  }, // vince staples show
  {
    release: new Date("2021-12-25"),
    publication: new Date("2023-10-28"),
    format: "фильм",
    grade: "A",
    title: "Американский неудачник",
    original: "American Underdog",
    kinopoisk: "https://www.kinopoisk.ru/film/1347733/",
    director: [
      {
        name: "Эндрю Эрвин",
      },
      {
        name: "Джон Эрвин",
      },
    ],
    cast: [
      {
        name: "Закари Ливай",
      },
    ],
    description:
      "История жизни и карьеры профессионального футболиста Курта Уорнера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 13,
  }, // американский неудачник
  {
    release: new Date("2023-12-22"),
    publication: new Date("2024-03-03"),
    format: "фильм",
    grade: "A",
    title: "Американское чтиво",
    original: "American Fiction",
    kinopoisk: "https://www.kinopoisk.ru/film/5212291/",
    director: [
      {
        name: "Корд Джефферсон",
      },
    ],
    cast: [
      {
        name: "Джеффри Райт",
      },
    ],
    description:
      "Интеллектуал пишет роман, целиком состоящий из стереотипов об афроамериканцах. Вскоре он просыпается суперзвездой.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
  }, // американское чтиво
  {
    release: new Date("2023-04-16"),
    publication: new Date("2024-09-10"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk:
      "https://www.kinopoisk.ru/series/972587/?utm_referrer=www.google.com",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 28,
  }, // барри 4
  {
    release: new Date("2022-04-24"),
    publication: new Date("2024-09-09"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk:
      "https://www.kinopoisk.ru/series/972587/?utm_referrer=www.google.com",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 27,
  }, // барри 3
  {
    release: new Date("2019-03-31"),
    publication: new Date("2024-09-08"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk:
      "https://www.kinopoisk.ru/series/972587/?utm_referrer=www.google.com",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 25,
  }, // барри 2
  {
    release: new Date("2018-03-25"),
    publication: new Date("2024-09-07"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Барри",
    original: "Barry",
    kinopoisk:
      "https://www.kinopoisk.ru/series/972587/?utm_referrer=www.google.com",
    director: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Алек Берг",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
    ],
    description: "Киллер влюбляется в театр и решает начать новую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 21,
  }, // барри 1
  {
    release: new Date("2023-12-08"),
    publication: new Date("2024-03-03"),
    format: "фильм",
    grade: "B",
    title: "Бедные-несчастные",
    original: "Poor Things",
    kinopoisk: "https://www.kinopoisk.ru/film/4396438/",
    director: [
      {
        name: "Йоргос Лантимос",
      },
    ],
    cast: [
      {
        name: "Эмма Стоун",
      },
      {
        name: "Уиллем Дефо",
      },
      {
        name: "Марк Руффало",
      },
      {
        name: "Рами Юссеф",
      },
    ],
    description:
      "Сумасшедший хирург вылавливает из Темзы тело молодой беременной женщины, прыгнувшей с моста, пересаживает ей мозг её собственного нерожденного младенца и реанимирует.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 42,
  }, // бедные несчастные
  {
    release: new Date("2009-11-25"),
    publication: new Date("2023-05-01"),
    format: "фильм",
    grade: "B",
    title: "Бесподобный мистер Фокс",
    original: "Fantastic Mr. Fox",
    kinopoisk: "https://www.kinopoisk.ru/film/86621/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Мэрил Стрип",
      },
      {
        name: "Джейсон Шварцман",
      },
    ],
    description:
      "Разъяренные фермеры, уставшие от постоянных нападок хитрого лиса на их курятники, готовятся уничтожить своего врага и его «хитрое» семейство.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 24,
  }, // бесподобный мистер фокс
  {
    release: new Date("1980-11-13"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "C",
    title: "Бешеный бык",
    original: "Raging Bull",
    kinopoisk:
      "https://www.kinopoisk.ru/film/374/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Мартин Скорсезе",
      },
    ],
    cast: [
      {
        name: "Роберт Де Ниро",
      },
      {
        name: "Джо Пеши",
      },
    ],
    description:
      "Джейк ЛаМотта по прозвищу Бронксский бык - боксер 1940-х годов, не умевший обуздывать свою грубую силу даже за пределами ринга.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 30,
  }, // бешеный бык
  {
    release: new Date("2017-09-29"),
    publication: new Date("2023-05-05"),
    format: "фильм",
    grade: "C",
    title: "Битва полов",
    original: "Battle of the Sexes",
    kinopoisk: "https://www.kinopoisk.ru/film/928805/",
    director: [
      {
        name: "Джонатан Дэйтон",
      },
      {
        name: "Валери Фэрис",
      },
    ],
    cast: [
      {
        name: "Эмма Стоун",
      },
      {
        name: "Стив Карелл",
      },
    ],
    description:
      "Правдивая история теннисного матча 1973 года между первой ракеткой мира Билли Джин Кинг и экс-чемпионом Бобби Риггсом.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "биография",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 15,
  }, // битва полов
  {
    release: new Date("2017-06-15"),
    publication: new Date("2024-03-04"),
    format: "фильм",
    grade: "A",
    title: "Большой злой лис и другие сказки",
    original:
      "The Big Bad Fox and Other Tales... / Le grand méchant renard et autres contes...",
    kinopoisk: "https://www.kinopoisk.ru/film/1047719/",
    director: [
      {
        name: "Патрик Имбер",
      },
      {
        name: "Бенжамин Реннер",
      },
    ],
    cast: [
      {
        name: "Гийом Дарно",
      },
      {
        name: "Дамьен Витецка",
      },
      {
        name: "Камел Абдессадок",
      },
      {
        name: "Антуан Шумский",
      },
    ],
    description:
      "Переполох за переполохом происходит на одной отдаленной ферме. Свинья, кролик, утка и лис попадают в разные передряги.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 43,
  }, // большой злой лис и другие сказки
  {
    release: new Date("2023-04-07"),
    publication: new Date("2023-11-26"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Быть присяжным",
    original: "Jury Duty",
    kinopoisk: "https://www.kinopoisk.ru/series/5106451/",
    director: [
      {
        name: "Ли Айзенберг",
      },
      {
        name: "Джин Ступницки",
      },
    ],
    cast: [
      {
        name: "Рональд Гладден",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "О работе американского суда глазами Рональда Гладдена, присяжного, который не подозревает, что все, кроме него, — актёры, и происходящее тщательно спланировано.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "реалити",
      },
    ],
    screenshots: 21,
  }, // быть присяжным
  {
    release: new Date("2022-12-23"),
    publication: new Date("2023-02-05"),
    format: "фильм",
    grade: "A",
    title: "Вавилон",
    original: "Babylon",
    kinopoisk: "https://www.kinopoisk.ru/film/1283955/",
    director: [
      {
        name: "Дэмьен Шазелл",
      },
    ],
    cast: [
      {
        name: "Диего Кальва",
      },
      {
        name: "Марго Робби",
      },
      {
        name: "Брэд Питт",
      },
    ],
    description:
      "Голливуд, конец 1920-х. Звезды немого кино пытаются найти место в новом мире, где набирают популярность звуковые фильмы.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 40,
  }, // вавилон
  {
    release: new Date("2023-09-04"),
    publication: new Date("2024-08-19"),
    format: "фильм",
    grade: "B",
    title: "Великая ирония",
    original: "Coup de chance",
    kinopoisk: "https://www.kinopoisk.ru/film/4541527/",
    director: [
      {
        name: "Вуди Аллен",
      },
    ],
    cast: [
      {
        name: "Лу де Лааж",
      },
      {
        name: "Нильс Шнайдер",
      },
      {
        name: "Мельвиль Пупо",
      },
    ],
    description:
      "Связь двух молодых людей приводит к супружеской неверности и, в конечном счете, к преступлению.",
    genres: [
      {
        genre: "мелодрама",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 17,
  }, // великая ирония
  {
    release: new Date("2023-11-03"),
    publication: new Date("2023-12-09"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Голубоглазый самурай",
    original: "Blue Eye Samurai",
    kinopoisk: "https://www.kinopoisk.ru/series/4992678/",
    director: [
      {
        name: "Майкл Грин",
      },
      {
        name: "Эмбер Ноидзуми",
      },
    ],
    cast: [
      {
        name: "Майя Эрскин",
      },
    ],
    description: "Юная воительница мстит тем, из-за кого она стала изгоем.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 40,
  }, // голубоглазый самурай
  {
    release: new Date("2023-06-23"),
    publication: new Date("2023-07-14"),
    format: "фильм",
    grade: "B",
    title: "Город астероидов",
    original: "Asteroid City",
    kinopoisk: "https://www.kinopoisk.ru/film/4395987/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джейсон Шварцман",
      },
      {
        name: "Скарлетт Йоханссон",
      },
      {
        name: "Том Хэнкс",
      },
    ],
    description:
      "События, меняющие мир, нарушают ежегодное празднование Дня астероида в американском городке в пустыне.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 39,
  }, // город астероидов
  {
    release: new Date("2023-08-25"),
    publication: new Date("2023-09-30"),
    format: "фильм",
    grade: "B",
    title: "Гран туризмо",
    original: "Gran Turismo",
    kinopoisk: "https://www.kinopoisk.ru/film/1044002/",
    director: [
      {
        name: "Нил Бломкамп",
      },
    ],
    cast: [
      {
        name: "Арчи Мадекве",
      },
      {
        name: "Дэвид Харбор",
      },
      {
        name: "Орландо Блум",
      },
    ],
    description:
      "Подросток, благодаря навыкам в видеоигре «Gran Turismo», стал профессиональным гонщиком.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 16,
  }, // гран туризмо
  {
    release: new Date("2024-09-13"),
    publication: new Date("2024-09-30"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Кларксон, Хэммонд и Мэй отправляются в Зимбабве на трех автомобилях, о которых всегда мечтали. Путешествие по красивым пейзажам приводит к эмоциональному финалу.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 20,
  }, // гранд тур 6
  {
    release: new Date("2022-09-16"),
    publication: new Date("2024-02-25"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Джереми, Ричард и Джеймс путешествуют по всему миру, создавая искрометные обзоры новых интересных автомобилей от разных производителей",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 28,
  }, // гранд тур 5
  {
    release: new Date("2019-12-13"),
    publication: new Date("2022-03-04"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Джереми, Ричард и Джеймс путешествуют по всему миру, создавая искрометные обзоры новых интересных автомобилей от разных производителей",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 19,
  }, // гранд тур 4
  {
    release: new Date("2019-01-18"),
    publication: new Date("2020-02-02"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Гранд тур",
    original: "The Grand Tour",
    kinopoisk: "https://www.kinopoisk.ru/series/982730/",
    director: [
      {
        name: "Энди Уилман",
      },
    ],
    cast: [
      {
        name: "Джереми Кларксон",
      },
      {
        name: "Ричард Хаммонд",
      },
      {
        name: "Джеймс Мэй",
      },
    ],
    description:
      "Джереми, Ричард и Джеймс путешествуют по всему миру, создавая искрометные обзоры новых интересных автомобилей от разных производителей",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "ток-шоу",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 18,
  }, // гранд тур 3
  {
    release: new Date("2023-04-06"),
    publication: new Date("2023-04-26"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Грызня",
    original: "Beef",
    kinopoisk: "https://www.kinopoisk.ru/series/4477341/",
    director: [
      {
        name: "Ли Сон-джин",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Али Вон",
      },
      {
        name: "Джозеф Ли",
      },
      {
        name: "Янг Мазино",
      },
    ],
    description:
      "Столкновение на парковке перерастает в вражду: случайная ссора становится поводом для взаимной мести.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 31,
  }, // грызня 1
  {
    release: new Date("2019-04-18"),
    publication: new Date("2024-03-04"),
    format: "фильм",
    grade: "B",
    title: "Дело Коллини",
    original: "The Collini Case / Der Fall Collini",
    kinopoisk: "https://www.kinopoisk.ru/film/939981/",
    director: [
      {
        name: "Марко Кройцпайнтнер",
      },
    ],
    cast: [
      {
        name: "Элиас М’Барек",
      },
    ],
    description:
      "Молодой юрист обнаруживает темные тайны прошлого, расследуя дело о жестоком убийстве.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
  }, // дело коллини
  {
    release: new Date("2024-09-27"),
    publication: new Date("2024-10-27"),
    format: "фильм",
    grade: "A",
    title: "Дикий робот",
    original: "The Wild Robot",
    kinopoisk: "https://www.kinopoisk.ru/film/5457899/",
    director: [
      {
        name: "Крис Сандерс",
      },
    ],
    cast: [
      {
        name: "Лупита Нионго",
      },
      {
        name: "Педро Паскаль",
      },
      {
        name: "Кит Коннор",
      },
    ],
    description:
      "Посылка с роботом-помощником ROZZUM 7134 падает на необитаемый остров. Чтобы приспособиться к суровым условиям, «Роз» сближается с животными острова.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 25,
  }, // дикий робот
  {
    release: new Date("2000-08-11"),
    publication: new Date("2023-02-10"),
    format: "фильм",
    grade: "B",
    title: "Дублеры",
    original: "The Replacements",
    kinopoisk: "https://www.kinopoisk.ru/film/800/",
    director: [
      {
        name: "Ховард Дойч",
      },
    ],
    cast: [
      {
        name: "Киану Ривз",
      },
      {
        name: "Джин Хэкмен",
      },
      {
        name: "Брук Лэнгтон",
      },
    ],
    description:
      "Во время забастовки профессиональных футболистов владельцы нанимают простых работяг.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 25,
  }, // дублеры
  {
    release: new Date("2024-03-01"),
    publication: new Date("2024-05-11"),
    format: "фильм",
    grade: "A+",
    title: "Дюна: Часть вторая",
    original: "Dune: Part Two",
    kinopoisk:
      "https://www.kinopoisk.ru/film/4540126/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Зендея",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Хавьер Бардем",
      },
    ],
    description:
      "Герцог Пол Атрейдес присоединяется к фрименам, чтобы стать Муад Дибом, одновременно пытаясь остановить наступление войны.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 78,
  }, // дюна 2
  {
    release: new Date("2021-09-03"),
    publication: new Date("2022-10-28"),
    format: "фильм",
    grade: "A+",
    title: "Дюна",
    original: "Dune",
    kinopoisk: "https://www.kinopoisk.ru/film/409424/",
    director: [
      {
        name: "Дени Вильнёв",
      },
    ],
    cast: [
      {
        name: "Тимоти Шаламе",
      },
      {
        name: "Оскар Айзек",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Зендея",
      },
      {
        name: "Хавьер Бардем",
      },
    ],
    description:
      "Пустынная планета Арракис – это единственный источник вещества, необходимого для полетов в космос. Два Великих Дома межгалактической империи вступают в борьбу за Арракис.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 47,
  }, // дюна
  {
    release: new Date("2022-12-23"),
    publication: new Date("2023-04-30"),
    format: "фильм",
    grade: "B",
    title: "Жить",
    original: "Living",
    kinopoisk: "https://www.kinopoisk.ru/film/4502701/",
    director: [
      {
        name: "Оливер Херманус",
      },
    ],
    cast: [
      {
        name: "Билл Найи",
      },
      {
        name: "Эйми Лу Вуд",
      },
    ],
    description:
      "Госслужащий мистер Уильямс узнаёт о своей смертельной болезни и решает прожить остаток жизни на максимуме.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 14,
  }, // жить
  {
    release: new Date("2024-08-09"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "C",
    title: "Зачинщики",
    original: "The Instigators",
    kinopoisk: "https://www.kinopoisk.ru/film/5274244/",
    director: [
      {
        name: "Даг Лайман",
      },
    ],
    cast: [
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Кейси Аффлек",
      },
    ],
    description:
      "Рори и Кобби — неожиданные сообщники: отчаявшийся отец и бывший заключенный, объединившиеся для ограбления.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 21,
  }, // зачинщики
  {
    release: new Date("1942-11-26"),
    publication: new Date("2024-08-10"),
    format: "фильм",
    grade: "B",
    title: "Касабланка",
    original: "Casablanca",
    kinopoisk: "https://www.kinopoisk.ru/film/330/",
    director: [
      {
        name: "Майкл Кёртиц",
      },
    ],
    cast: [
      {
        name: "Хамфри Богарт",
      },
      {
        name: "Ингрид Бергман",
      },
    ],
    description:
      "Оставивший родину американец, владелец игорного клуба в Касабланке, встречается с покинувшей его несколько лет назад возлюбленной.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 21,
  }, // касабланка
  {
    release: new Date("2024-05-03"),
    publication: new Date("2024-06-15"),
    format: "фильм",
    grade: "C",
    title: "Каскадёры",
    original: "The Fall Guy",
    kinopoisk: "https://www.kinopoisk.ru/film/535243/",
    director: [
      {
        name: "Дэвид Литч",
      },
    ],
    cast: [
      {
        name: "Райан Гослинг",
      },
      {
        name: "Эмили Блант",
      },
    ],
    description:
      "Каскадер, только что переживший аварию, которая едва не положила конец его карьере, должен разыскать пропавшую кинозвезду.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 14,
  }, // каскадеры
  {
    release: new Date("1960-06-15"),
    publication: new Date("2024-08-19"),
    format: "фильм",
    grade: "B",
    title: "Квартира",
    original: "The Apartment",
    kinopoisk: "https://www.kinopoisk.ru/film/404/",
    director: [
      {
        name: "Билли Уайлдер",
      },
    ],
    cast: [
      {
        name: "Джек Леммон",
      },
      {
        name: "Ширли Маклейн",
      },
      {
        name: "Фред Макмюррей",
      },
    ],
    description:
      "Страховой клерк из Манхэттена пытается подняться по карьерной лестнице в своей компании, позволяя ее руководителям использовать свою квартиру для свиданий.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 16,
  }, // квартира
  {
    release: new Date("2023-02-24"),
    publication: new Date("2023-03-16"),
    format: "фильм",
    grade: "B",
    title: "Кокаиновый медведь",
    original: "Cocaine Bear",
    kinopoisk: "https://www.kinopoisk.ru/film/4476889/",
    director: [
      {
        name: "Элизабет Бэнкс",
      },
    ],
    cast: [
      {
        name: "Кери Рассел",
      },
      {
        name: "Кристиан Конвери",
      },
      {
        name: "Олден Эренрайк",
      },
      {
        name: "О’Ши Джексон мл.",
      },
      {
        name: "Бруклин Принс",
      },
    ],
    description:
      "Наркокурьер выбросил из самолёта в лесах Джорджии пакеты с кокаином. Один из них нашёл медведь, съел содержимое и пришёл в неистовство, представляя опасность для всех встречных.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
  }, // кокаиновый медведь
  {
    release: new Date("2012-06-29"),
    publication: new Date("2023-05-02"),
    format: "фильм",
    grade: "C",
    title: "Королевство полной луны",
    original: "Moonrise Kingdom",
    kinopoisk: "https://www.kinopoisk.ru/film/571892/",
    director: [
      {
        name: "Уэс Андерсон",
      },
    ],
    cast: [
      {
        name: "Джаред Гилман",
      },
      {
        name: "Кара Хэйуорд",
      },
      {
        name: "Брюс Уиллис",
      },
      {
        name: "Эдвард Нортон",
      },
      {
        name: "Билл Мюррей",
      },
      {
        name: "Фрэнсис Макдорманд",
      },
    ],
    description:
      "Двое 12-летних подростков влюбляются друг в друга и сбегают в дикую местность.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
  }, // королевство полной луны
  {
    release: new Date("2022-11-13"),
    publication: new Date("2023-05-13"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Король Талсы",
    original: "Tulsa King",
    kinopoisk:
      "https://www.kinopoisk.ru/series/4760854/?utm_referrer=www.google.com",
    director: [
      {
        name: "Тейлор Шеридан",
      },
    ],
    cast: [
      {
        name: "Сильвестр Сталлоне",
      },
    ],
    description:
      "Дуайт «Генерал» Манфреди, капо Нью-Йоркской мафии, после 25 лет тюрьмы отправляется в Талсу.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 17,
  }, // король талсы 1
  {
    release: new Date("2016-01-29"),
    publication: new Date("2023-12-26"),
    format: "фильм",
    grade: "A+",
    title: "Кунг-фу Панда 3",
    original: "Kung Fu Panda 3",
    kinopoisk: "https://www.kinopoisk.ru/film/692865/",
    director: [
      {
        name: "Алессандро Карлони",
      },
      {
        name: "Дженнифер Ю Нельсон",
      },
    ],
    cast: [
      {
        name: "Джек Блэк",
      },
      {
        name: "Брайан Крэнстон",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Анджелина Джоли",
      },
    ],
    description:
      "Злодей Кай уничтожает мастеров кунг-фу в Китае. Теперь По должен обучить боевым искусствам деревню панд и превратить её в команду кунг-фу.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 20,
  }, // кунг-фу панда 3
  {
    release: new Date("2011-05-26"),
    publication: new Date("2023-12-21"),
    format: "фильм",
    grade: "A+",
    title: "Кунг-фу Панда 2",
    original: "Kung Fu Panda 2",
    kinopoisk: "https://www.kinopoisk.ru/film/427878/",
    director: [
      {
        name: "Дженнифер Ю Нельсон",
      },
    ],
    cast: [
      {
        name: "Джек Блэк",
      },
      {
        name: "Анджелина Джоли",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Гари Олдман",
      },
    ],
    description:
      "По и его друзья должны помешать злобному павлину Лорду Шэню завоевать Китай с помощью нового смертоносного оружия, но сначала Воин Дракона должен познать своё прошлое.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 23,
  }, // кунг-фу панда 2
  {
    release: new Date("2008-06-06"),
    publication: new Date("2023-12-18"),
    format: "фильм",
    grade: "A+",
    title: "Кунг-фу Панда",
    original: "Kung Fu Panda",
    kinopoisk: "https://www.kinopoisk.ru/film/103734/",
    director: [
      {
        name: "Марк Осборн",
      },
      {
        name: "Джон Стивенсон",
      },
    ],
    cast: [
      {
        name: "Джек Блэк",
      },
      {
        name: "Анджелина Джоли",
      },
      {
        name: "Дастин Хоффман",
      },
      {
        name: "Иэн Макшейн",
      },
    ],
    description:
      "Панда По — избранный, которому предстоит познать все тонкости кунг-фу и защитить Долину Мира от Тай Лунга.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 36,
  }, // кунг-фу панда
  {
    release: new Date("2023-11-17"),
    publication: new Date("2023-11-26"),
    format: "фильм",
    grade: "B",
    title: "Лео",
    original: "Leo",
    kinopoisk: "https://www.kinopoisk.ru/film/1346564/",
    director: [
      {
        name: "Роберт Марианетти",
      },
      {
        name: "Роберт Шмигель",
      },
      {
        name: "Дэвид Уочтенхейм",
      },
    ],
    cast: [
      {
        name: "Адам Сэндлер",
      },
      {
        name: "Билл Бёрр",
      },
    ],
    description:
      "74-летний ящер по имени Лео решает сбежать из террариума школьного класса во Флориде, где он жил десятилетиями.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 13,
  }, // лео
  {
    release: new Date("2023-10-05"),
    publication: new Date("2023-11-13"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Локи",
    original: "Loki",
    kinopoisk: "https://www.kinopoisk.ru/series/1203039/",
    director: [
      {
        name: "Майкл Уолдрон",
      },
    ],
    cast: [
      {
        name: "Том Хиддлстон",
      },
      {
        name: "Оуэн Уилсон",
      },
      {
        name: "Софи Ди Мартино",
      },
    ],
    description:
      "Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.",
    genres: [
      {
        genre: "приключения",
      },
      {
        genre: "фантастика",
      },
      {
        genre: "фэнтези",
      },
    ],
    screenshots: 35,
  }, // локи 2
  {
    release: new Date("2016-11-18"),
    publication: new Date("2022-03-19"),
    format: "фильм",
    grade: "A",
    title: "Лунный свет",
    original: "Moonlight",
    kinopoisk: "https://www.kinopoisk.ru/film/939981/",
    director: [
      {
        name: "Барри Дженкинс",
      },
    ],
    cast: [
      {
        name: "Алекс Р. Хибберт",
      },
      {
        name: "Эштон Сандерс",
      },
      {
        name: "Треванте Роудс",
      },
    ],
    description:
      "Мальчик, подросток, мужчина… Ему выпало родиться и жить в Майами, где миром правят наркотики и деньги.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 20,
  }, // лунный свет
  {
    release: new Date("2006-05-26"),
    publication: new Date("2023-09-15"),
    format: "фильм",
    grade: "B",
    title: "Люди Икс: Последняя битва",
    original: "X-Men: The Last Stand",
    kinopoisk: "https://www.kinopoisk.ru/film/61361/",
    director: [
      {
        name: "Бретт Рэтнер",
      },
    ],
    cast: [
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Фамке Янссен",
      },
    ],
    description:
      "Люди Икс под руководством профессора Ксавьера сражаются с эволюцией в лице воскресшей Джин Грэй, превратившейся в Тёмного Феникса. Её сила угрожает всем: мутантам и людям.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 31,
  }, // люди икс 3
  {
    release: new Date("2003-05-02"),
    publication: new Date("2023-09-14"),
    format: "фильм",
    grade: "B",
    title: "Люди Икс 2",
    original: "X2",
    kinopoisk:
      "https://www.kinopoisk.ru/film/298/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Брайан Сингер",
      },
    ],
    cast: [
      {
        name: "Патрик Стюарт",
      },
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Фамке Янссен",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "Мутантов обвиняют в покушении на президента. Забыв разногласия, супергерои сплочаются против общего врага.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 14,
  }, // люди икс 2
  {
    release: new Date("2000-07-14"),
    publication: new Date("2023-09-13"),
    format: "фильм",
    grade: "B",
    title: "Люди Икс",
    original: "X-Men",
    kinopoisk: "https://www.kinopoisk.ru/film/886/",
    director: [
      {
        name: "Брайан Сингер",
      },
    ],
    cast: [
      {
        name: "Патрик Стюарт",
      },
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Иэн Маккеллен",
      },
      {
        name: "Фамке Янссен",
      },
      {
        name: "Джеймс Марсден",
      },
    ],
    description:
      "Появляются люди с суперспособностями. Их боятся, но профессор Ксавье учит жить с людьми в мире. Магнето хочет захватить мир - Ксавье ему противостоит.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 16,
  }, // люди икс
  {
    release: new Date("2023-11-17"),
    publication: new Date("2023-12-10"),
    format: "фильм",
    grade: "B",
    title: "Май декабрь",
    original: "May December",
    kinopoisk: "https://www.kinopoisk.ru/film/4477074/",
    director: [
      {
        name: "Тодд Хейнс",
      },
    ],
    cast: [
      {
        name: "Натали Портман",
      },
      {
        name: "Джулианна Мур",
      },
      {
        name: "Чарльз Мелтон",
      },
    ],
    description:
      "Ради роли актриса сближается с женщиной, соблазнившей подростка.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 30,
  }, // май декабрь
  {
    release: new Date("2024-06-26"),
    publication: new Date("2024-08-28"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 30,
  }, // медведь 3
  {
    release: new Date("2023-06-22"),
    publication: new Date("2023-08-05"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
  }, // медведь 2
  {
    release: new Date("2022-06-23"),
    publication: new Date("2022-07-29"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Медведь",
    original: "The Bear",
    kinopoisk: "https://www.kinopoisk.ru/series/4481731/",
    director: [
      {
        name: "Кристофер Сторер",
      },
    ],
    cast: [
      {
        name: "Джереми Аллен Уайт",
      },
      {
        name: "Айо Эдебири",
      },
      {
        name: "Эбон Мосс-Бакрак",
      },
    ],
    description:
      "Молодой шеф-повар возвращается в Чикаго, чтобы управлять семейным рестораном.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 22,
  }, // медведь 1
  {
    release: new Date("2001-03-02"),
    publication: new Date("2023-07-30"),
    format: "фильм",
    grade: "B",
    title: "Мексиканец",
    original: "The Mexican",
    kinopoisk: "https://www.kinopoisk.ru/film/753/",
    director: [
      {
        name: "Гор Вербински",
      },
    ],
    cast: [
      {
        name: "Брэд Питт",
      },
      {
        name: "Джулия Робертс",
      },
      {
        name: "Джеймс Гандольфини",
      },
    ],
    description:
      "Мелкий гангстер должен разыскать в Мексике бесценный антикварный пистолет, прозванный «Мексиканец».",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 35,
  }, // мексиканец
  {
    release: new Date("2023-12-22"),
    publication: new Date("2024-02-25"),
    format: "фильм",
    grade: "A",
    title: "Миграция",
    original: "Migration",
    kinopoisk: "https://www.kinopoisk.ru/film/4878248/",
    director: [
      {
        name: "Бенжамин Реннер",
      },
      {
        name: "Гейло Хомси",
      },
    ],
    cast: [
      {
        name: "Кумэйл Нанджиани",
      },
      {
        name: "Элизабет Бэнкс",
      },
    ],
    description:
      "Семейство уток пытается убедить своего чрезмерно заботливого отца отправиться в отпуск, который бывает раз в жизни.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 22,
  }, // миграция
  {
    release: new Date("2022-01-13"),
    publication: new Date("2022-04-17"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Миротворец",
    original: "Peacemaker",
    kinopoisk: "https://www.kinopoisk.ru/series/1421587/",
    director: [
      {
        name: "Джеймс Ганн",
      },
    ],
    cast: [
      {
        name: "Джон Сина",
      },
      {
        name: "Даниэль Брукс",
      },
      {
        name: "Фредди Строма",
      },
      {
        name: "Чукуди Ивуджи",
      },
      {
        name: "Дженнифер Холлэнд",
      },
    ],
    description:
      "Пацифист безжалостно борется за мир во всем мире и пытается поладить с отцом.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 21,
  }, // миротворец 1
  {
    release: new Date("2023-07-12"),
    publication: new Date("2023-10-12"),
    format: "фильм",
    grade: "A+",
    title: "Миссия невыполнима: Смертельная расплата. Часть первая",
    original: "Mission: Impossible - Dead Reckoning Part One",
    kinopoisk: "https://www.kinopoisk.ru/film/1229684/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Хейли Этвелл",
      },
      {
        name: "Эсай Моралес",
      },
      {
        name: "Пом Клементьефф",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
    ],
    description:
      "Итан Хант и его команда должны разыскать опасное оружие до того, как оно попадет не в те руки.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 26,
  }, // миссия невыполнима: смертельная расплата. часть первая (7)
  {
    release: new Date("2018-07-27"),
    publication: new Date("2023-05-25"),
    format: "фильм",
    grade: "A+",
    title: "Миссия невыполнима: Последствия",
    original: "Mission: Impossible - Fallout",
    kinopoisk: "https://www.kinopoisk.ru/film/926540/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Генри Кавилл",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
    ],
    description: "Агенты ЦРУ должны изъять плутоний из рук террористов.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 35,
  }, // миссия невыполнима: последствия (6)
  {
    release: new Date("2015-07-31"),
    publication: new Date("2023-05-22"),
    format: "фильм",
    grade: "A",
    title: "Миссия невыполнима: Племя изгоев",
    original: "Mission: Impossible - Rogue Nation",
    kinopoisk: "https://www.kinopoisk.ru/film/678549/",
    director: [
      {
        name: "Кристофер Маккуорри",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Ребекка Фергюсон",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Саймон Пегг",
      },
      {
        name: "Винг Реймз",
      },
    ],
    description:
      "Итан Хант сталкивается с международной сетью спецагентов Синдикатом, которые планируют разрушительные теракты ради нового мирового порядка.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 19,
  }, // миссия невыполнима: племя изгоев (5)
  {
    release: new Date("2011-12-21"),
    publication: new Date("2023-05-21"),
    format: "фильм",
    grade: "A",
    title: "Миссия невыполнима: Протокол Фантом",
    original: "Mission: Impossible - Ghost Protocol",
    kinopoisk: "https://www.kinopoisk.ru/film/472362/",
    director: [
      {
        name: "Брэд Бёрд",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Пола Пэттон",
      },
      {
        name: "Джереми Реннер",
      },
      {
        name: "Саймон Пегг",
      },
    ],
    description:
      "Итан Хант обвинен во взрыве Кремля. Чтобы очистить своё имя, он должен предотвратить новую атаку.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 19,
  }, // миссия невыполнима: протокол фантом (4)
  {
    release: new Date("2006-05-05"),
    publication: new Date("2023-05-19"),
    format: "фильм",
    grade: "A+",
    title: "Миссия: невыполнима 3",
    original: "Mission: Impossible III",
    kinopoisk: "https://www.kinopoisk.ru/film/9552/",
    director: [
      {
        name: "Джей Джей Абрамс",
      },
    ],
    cast: [
      {
        name: "Том Круз",
      },
      {
        name: "Филип Сеймур Хоффман",
      },
      {
        name: "Мишель Монахэн",
      },
      {
        name: "Винг Реймз",
      },
      {
        name: "Джонатан Риз Майерс",
      },
      {
        name: "Мэгги Кью",
      },
    ],
    description:
      "Итан Хант готовится к отставке, но получает последнее задание — спасти бывшую ученицу из лап торговца оружием. Задание приводит к череде опасных миссий в трёх городах.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 26,
  }, // миссия: невыполнима 3
  {
    release: new Date("2024-02-02"),
    publication: new Date("2024-02-17"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Мистер и миссис Смит",
    original: "Mr. & Mrs. Smith",
    kinopoisk: "https://www.kinopoisk.ru/series/4363942/",
    director: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Франческа Слоун",
      },
    ],
    cast: [
      {
        name: "Дональд Гловер",
      },
      {
        name: "Майя Эрскин",
      },
    ],
    description:
      "Двум агентам необходимо выдавать себя за пару во время опасной миссии.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 89,
  }, // мистер и миссис смит
  {
    release: new Date("2019-03-28"),
    publication: new Date("2024-08-18"),
    format: "фильм",
    grade: "A",
    title: "Мы",
    original: "Us",
    kinopoisk: "https://www.kinopoisk.ru/film/1122138/",
    director: [
      {
        name: "Джордан Пил",
      },
    ],
    cast: [
      {
        name: "Лупита Нионго",
      },
      {
        name: "Уинстон Дьюк",
      },
    ],
    description:
      "Семейная пара с дочерью-подростком и сыном приезжает на побережье. Ночью к ним наведывается четверо загадочных гостей.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "ужасы",
      },
    ],
    screenshots: 19,
  }, // мы
  {
    release: new Date("2024-02-07"),
    publication: new Date("2024-09-01"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Начальная школа «Эбботт»",
    original: "Abbott Elementary",
    kinopoisk:
      "https://www.kinopoisk.ru/series/4478603/?ysclid=m74pvwvqqp557423758",
    director: [
      {
        name: "Кинта Брансон",
      },
    ],
    cast: [
      {
        name: "Кинта Брансон",
      },
      {
        name: "Тайлер Джеймс Уильямс",
      },
      {
        name: "Лиза Энн Уолтер",
      },
      {
        name: "Шерил Ли Ральф",
      },
      {
        name: "Крис Перфетти",
      },
      {
        name: "Джанелл Джеймс",
      },
    ],
    description:
      "Несколько самоотверженных учителей работают в одной из худших государственных школ Филадельфии.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 26,
  }, // начальная школа эбботт 3
  {
    release: new Date("2022-09-21"),
    publication: new Date("2024-01-13"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Начальная школа «Эбботт»",
    original: "Abbott Elementary",
    kinopoisk:
      "https://www.kinopoisk.ru/series/4478603/?ysclid=m74pvwvqqp557423758",
    director: [
      {
        name: "Кинта Брансон",
      },
    ],
    cast: [
      {
        name: "Кинта Брансон",
      },
      {
        name: "Тайлер Джеймс Уильямс",
      },
      {
        name: "Лиза Энн Уолтер",
      },
      {
        name: "Шерил Ли Ральф",
      },
      {
        name: "Крис Перфетти",
      },
      {
        name: "Джанелл Джеймс",
      },
    ],
    description:
      "Несколько самоотверженных учителей работают в одной из худших государственных школ Филадельфии.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 25,
  }, // начальная школа эбботт 2
  {
    release: new Date("2021-12-07"),
    publication: new Date("2024-01-08"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Начальная школа «Эбботт»",
    original: "Abbott Elementary",
    kinopoisk:
      "https://www.kinopoisk.ru/series/4478603/?ysclid=m74pvwvqqp557423758",
    director: [
      {
        name: "Кинта Брансон",
      },
    ],
    cast: [
      {
        name: "Кинта Брансон",
      },
      {
        name: "Тайлер Джеймс Уильямс",
      },
      {
        name: "Лиза Энн Уолтер",
      },
      {
        name: "Шерил Ли Ральф",
      },
      {
        name: "Крис Перфетти",
      },
      {
        name: "Джанелл Джеймс",
      },
    ],
    description:
      "Несколько самоотверженных учителей работают в одной из худших государственных школ Филадельфии.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мокьюментари",
      },
    ],
    screenshots: 16,
  }, // начальная школа эбботт 1
  {
    release: new Date("2006-03-20"),
    publication: new Date("2025-01-19"),
    format: "фильм",
    grade: "B",
    title: "Не пойман – не вор",
    original: "Inside Man",
    kinopoisk: "https://www.kinopoisk.ru/film/103785/",
    director: [
      {
        name: "Спайк Ли",
      },
    ],
    cast: [
      {
        name: "Дензел Вашингтон",
      },
      {
        name: "Клайв Оуэн",
      },
      {
        name: "Джоди Фостер",
      },
    ],
    description:
      "Когда вооруженная банда в масках проникает в банк, запирает двери и захватывает заложников, детектив, которому поручено добиться их освобождения, вступает в переговоры.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "детектив",
      },
    ],
    screenshots: 16,
  }, // не пойман не вор
  {
    release: new Date("2003-09-02"),
    publication: new Date("2024-08-11"),
    format: "фильм",
    grade: "A",
    title: "Невыносимая жестокость",
    original: "Intolerable Cruelty",
    kinopoisk:
      "https://www.kinopoisk.ru/film/2886/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Джоэл Коэн",
      },
      {
        name: "Итан Коэн",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Кэтрин Зета-Джонс",
      },
    ],
    description:
      "Майлз, известный адвокат по бракоразводным процессам, выигрывает дело для своего богатого, но неверного клиента. Но бывшая жена клиента жаждет денег и замышляет отомстить Майлзу.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 35,
  }, // невыносимая жестокость
  {
    release: new Date("2023-11-03"),
    publication: new Date("2024-04-16"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Непобедимый",
    original: "Invincible",
    kinopoisk: "https://www.kinopoisk.ru/series/1171895/",
    director: [
      {
        name: "Роберт Киркман",
      },
      {
        name: "Кори Уокер",
      },
      {
        name: "Райан Оттли",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Сандра О",
      },
    ],
    description:
      "17-летний Марк Грэйсон — сын самого могучего супергероя на Земле.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 29,
  }, // непобедимый 2
  {
    release: new Date("2021-03-26"),
    publication: new Date("2021-05-09"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Непобедимый",
    original: "Invincible",
    kinopoisk: "https://www.kinopoisk.ru/series/1171895/",
    director: [
      {
        name: "Роберт Киркман",
      },
      {
        name: "Кори Уокер",
      },
      {
        name: "Райан Оттли",
      },
    ],
    cast: [
      {
        name: "Стивен Ян",
      },
      {
        name: "Дж.К. Симмонс",
      },
      {
        name: "Сандра О",
      },
    ],
    description:
      "17-летний Марк Грэйсон — сын самого могучего супергероя на Земле.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 21,
  }, // непобедимый 1
  {
    release: new Date("2022-07-22"),
    publication: new Date("2023-05-26"),
    format: "фильм",
    grade: "A",
    title: "Нет",
    original: "Nope",
    kinopoisk: "https://www.kinopoisk.ru/film/1447137/",
    director: [
      {
        name: "Джордан Пил",
      },
    ],
    cast: [
      {
        name: "Дэниэл Калуя",
      },
      {
        name: "Кеке Палмер",
      },
      {
        name: "Брэндон Переа",
      },
      {
        name: "Стивен Ян",
      },
    ],
    description:
      "Жители уединённого ущелья в глубине Калифорнии становятся свидетелями сверхъестественных и пугающих событий.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "триллер",
      },
    ],
    screenshots: 34,
  }, // нет
  {
    release: new Date("2023-09-01"),
    publication: new Date("2023-10-17"),
    format: "фильм",
    grade: "B",
    title: "Неудачницы",
    original: "Bottoms",
    kinopoisk: "https://www.kinopoisk.ru/film/4994465/",
    director: [
      {
        name: "Эмма Селигман",
      },
    ],
    cast: [
      {
        name: "Рэйчел Сеннотт",
      },
      {
        name: "Айо Эдебири",
      },
    ],
    description:
      "Две непопулярные лесбиянки-старшеклассницы организуют в школе бойцовский клуб, чтобы успеть заняться сексом до выпускного.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
  }, // неудачницы
  {
    release: new Date("2023-05-04"),
    publication: new Date("2023-08-24"),
    format: "сериал",
    season: "1",
    grade: "B",
    title: "Ничегошеньки",
    original: "Bupkis",
    kinopoisk: "https://www.kinopoisk.ru/series/4967577/",
    director: [
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Джуда Миллер",
      },
      {
        name: "Дэйв Сирус",
      },
    ],
    cast: [
      {
        name: "Пит Дэвидсон",
      },
      {
        name: "Иди Фалько",
      },
      {
        name: "Джо Пеши",
      },
    ],
    description:
      "История жизни Пита Дэвидсона, сочетающая повествование с некоторыми абсурдными элементами мировоззрения героя.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 45,
  }, // ничегошеньки
  {
    release: new Date("2000-05-13"),
    publication: new Date("2024-08-14"),
    format: "фильм",
    grade: "B",
    title: "О, где же ты, брат?",
    original: "O Brother, Where Art Thou?",
    kinopoisk: "https://www.kinopoisk.ru/film/546/",
    director: [
      {
        name: "Джоэл Коэн",
      },
      {
        name: "Итан Коэн",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Джон Туртурро",
      },
      {
        name: "Тим Блейк Нельсон",
      },
    ],
    description:
      "Трио каторжников пускается в бега, чтобы сорвать крупный куш.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "криминал",
      },
      {
        genre: "музыка",
      },
    ],
    screenshots: 24,
  }, // о где же ты брат
  {
    release: new Date("2009-09-18"),
    publication: new Date("2023-07-14"),
    format: "фильм",
    grade: "B",
    title: "Облачно, возможны осадки в виде фрикаделек",
    original: "Cloudy with a Chance of Meatballs",
    kinopoisk:
      "https://www.kinopoisk.ru/film/276363/?utm_referrer=www.google.com",
    director: [
      {
        name: "Фил Лорд",
      },
      {
        name: "Кристофер Миллер",
      },
    ],
    cast: [
      {
        name: "Билл Хейдер",
      },
      {
        name: "Анна Фэрис",
      },
    ],
    description:
      "Ученый-неудачник изобретает машину, которая может заставлять еду падать с неба.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 24,
  }, // облачно возможны осадки в виде фрикаделек
  {
    release: new Date("2024-09-01"),
    publication: new Date("2024-10-01"),
    format: "фильм",
    grade: "C",
    title: "Одинокие волки",
    original: "Wolfs",
    kinopoisk: "https://www.kinopoisk.ru/film/4825582/",
    director: [
      {
        name: "Джон Уоттс",
      },
    ],
    cast: [
      {
        name: "Джордж Клуни",
      },
      {
        name: "Брэд Питт",
      },
    ],
    description:
      "Пути двух чистильщиков пересекаются, когда обоих вызывают решить проблему нью-йоркского прокурора.",
    genres: [
      {
        genre: "криминал",
      },
    ],
    screenshots: 30,
  }, // одинокие волки
  {
    release: new Date("2023-07-14"),
    publication: new Date("2023-07-28"),
    format: "фильм",
    grade: "C",
    title: "Они клонировали Тайрона",
    original: "They Cloned Tyrone",
    kinopoisk:
      "https://www.kinopoisk.ru/film/1405266/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Джуэл Тейлор",
      },
    ],
    cast: [
      {
        name: "Джон Бойега",
      },
      {
        name: "Джейми Фокс",
      },
      {
        name: "Тейона Паррис",
      },
    ],
    description:
      "Череда жутких событий выводит необычную троицу на след правительственного заговора.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 21,
  }, // они клонировали тайрона
  {
    release: new Date("2023-07-21"),
    publication: new Date("2023-11-18"),
    format: "фильм",
    grade: "B",
    title: "Оппенгеймер",
    original: "Oppenheimer",
    kinopoisk: "https://www.kinopoisk.ru/film/4664634/",
    director: [
      {
        name: "Кристофер Нолан",
      },
    ],
    cast: [
      {
        name: "Киллиан Мерфи",
      },
      {
        name: "Эмили Блант",
      },
      {
        name: "Мэтт Дэймон",
      },
      {
        name: "Роберт Дауни мл.",
      },
      {
        name: "Флоренс Пью",
      },
    ],
    description:
      "История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия.",
    genres: [
      {
        genre: "биография",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 36,
  }, // оппенгеймер
  {
    release: new Date("2024-02-02"),
    publication: new Date("2024-02-06"),
    format: "фильм",
    grade: "A",
    title: "Орион и Тьма",
    original: "Orion and the Dark",
    kinopoisk: "https://www.kinopoisk.ru/film/5326241/",
    director: [
      {
        name: "Шон Чэрмэтц",
      },
    ],
    cast: [
      {
        name: "Джейкоб Тремблей",
      },
      {
        name: "Пол Уолтер Хаузер",
      },
    ],
    description:
      "Мальчик Орион панически боится высоты, домашних животных, но больше всего — темноты.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 30,
  }, // орион и тьма
  {
    release: new Date("2023-11-10"),
    publication: new Date("2023-12-17"),
    format: "фильм",
    grade: "B",
    title: "Оставленные",
    original: "The Holdovers",
    kinopoisk: "https://www.kinopoisk.ru/film/4499386/",
    director: [
      {
        name: "Александр Пэйн",
      },
    ],
    cast: [
      {
        name: "Пол Джаматти",
      },
      {
        name: "Доминик Сесса",
      },
      {
        name: "Давайн Джой Рэндольф",
      },
    ],
    description:
      "Ученики престижной закрытой школы для мальчиков разъезжаются на каникулы. Несколько учеников остаются, и за ними присматривают учитель истории Ханэм и повариха Мэри.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
      {
        genre: "новогодний",
      },
    ],
    screenshots: 25,
  }, // оставленные
  {
    release: new Date("2023-11-22"),
    publication: new Date("2023-12-13"),
    format: "фильм",
    grade: "B",
    title: "Оставь мир позади",
    original: "Leave the World Behind",
    kinopoisk: "https://www.kinopoisk.ru/film/4511543/",
    director: [
      {
        name: "Сэм Эсмейл",
      },
    ],
    cast: [
      {
        name: "Джулия Робертс",
      },
      {
        name: "Итан Хоук",
      },
      {
        name: "Махершала Али",
      },
      {
        name: "Майхала Херролд",
      },
    ],
    description:
      "Две семьи оказываются заперты в загородном доме, пока мир вокруг рушится.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 40,
  }, // оставь мир позади
  {
    release: new Date("2014-11-14"),
    publication: new Date("2022-03-26"),
    format: "фильм",
    grade: "A",
    title: "Охотник на лис",
    original: "Foxcatcher",
    kinopoisk:
      "https://www.kinopoisk.ru/film/638053/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Беннетт Миллер",
      },
    ],
    cast: [
      {
        name: "Стив Карелл",
      },
      {
        name: "Ченнинг Татум",
      },
      {
        name: "Марк Руффало",
      },
    ],
    description:
      "Молодой борец попадает под влияние психически нестабильного миллионера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 50,
  }, // охотник на лис
  {
    release: new Date("2001-06-08"),
    publication: new Date("2023-09-30"),
    format: "фильм",
    grade: "C",
    title: "Пароль «Рыба-меч»",
    original: "Swordfish",
    kinopoisk:
      "https://www.kinopoisk.ru/film/849/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Доминик Сена",
      },
    ],
    cast: [
      {
        name: "Джон Траволта",
      },
      {
        name: "Хью Джекман",
      },
      {
        name: "Холли Берри",
      },
      {
        name: "Дон Чидл",
      },
    ],
    description:
      "Опасный шпион Гэбриэл Шир, бывший агент ЦРУ, планирует украсть 9 миллиардов из секретных фондов правительства. Ему нужен хакер для взлома систем безопасности.",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 19,
  }, // пароль «рыба-меч»
  {
    release: new Date("2024-06-13"),
    publication: new Date("2024-08-02"),
    format: "сериал",
    season: "4",
    grade: "B",
    title: "Пацаны",
    original: "The Boys",
    kinopoisk: "https://www.kinopoisk.ru/series/460586/",
    director: [
      {
        name: "Эрик Крипке",
      },
    ],
    cast: [
      {
        name: "Карл Урбан",
      },
      {
        name: "Джек Куэйд",
      },
      {
        name: "Энтони Старр",
      },
      {
        name: "Эрин Мориарти",
      },
      {
        name: "Лас Алонсо",
      },
      {
        name: "Томер Капон",
      },
      {
        name: "Карен Фукухара",
      },
      {
        name: "Чейс Кроуфорд",
      },
      {
        name: "Джесси Ашер",
      },
    ],
    description:
      "В мире, где супергерои — популярные звёзды, за идеальным фасадом скрывается мрачный мир наркотиков и разврата. Противостоит им отряд «Пацаны».",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 25,
  }, // пацаны 4
  {
    release: new Date("2022-06-03"),
    publication: new Date("2022-07-09"),
    format: "сериал",
    season: "3",
    grade: "B",
    title: "Пацаны",
    original: "The Boys",
    kinopoisk: "https://www.kinopoisk.ru/series/460586/",
    director: [
      {
        name: "Эрик Крипке",
      },
    ],
    cast: [
      {
        name: "Карл Урбан",
      },
      {
        name: "Джек Куэйд",
      },
      {
        name: "Энтони Старр",
      },
      {
        name: "Эрин Мориарти",
      },
      {
        name: "Лас Алонсо",
      },
      {
        name: "Томер Капон",
      },
      {
        name: "Карен Фукухара",
      },
      {
        name: "Чейс Кроуфорд",
      },
      {
        name: "Джесси Ашер",
      },
    ],
    description:
      "В мире, где супергерои — популярные звёзды, за идеальным фасадом скрывается мрачный мир наркотиков и разврата. Противостоит им отряд «Пацаны».",
    genres: [
      {
        genre: "боевик",
      },
      {
        genre: "комедия",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 22,
  }, // пацаны 3
  {
    release: new Date("2019-10-07"),
    publication: new Date("2023-05-06"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Первобытный",
    original: "Primal",
    kinopoisk: "https://www.kinopoisk.ru/series/1263399/",
    director: [
      {
        name: "Генндий Тартаковский",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Пещерный человек и тираннозавр объединяются для выживания в доисторическом мире.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 50,
  }, // первобытный 1
  {
    release: new Date("2004-10-22"),
    publication: new Date("2023-12-30"),
    format: "фильм",
    grade: "C",
    title: "Пережить Рождество",
    original: "Surviving Christmas",
    kinopoisk: "https://www.kinopoisk.ru/film/20105/",
    director: [
      {
        name: "Майк Митчелл",
      },
    ],
    cast: [
      {
        name: "Бен Аффлек",
      },
      {
        name: "Джеймс Гандольфини",
      },
      {
        name: "Кристина Эпплгейт",
      },
      {
        name: "Кэтрин О’Хара",
      },
    ],
    description:
      "Одинокий, несносный молодой миллионер платит семье за то, чтобы они провели с ним Рождество.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "новогодний",
      },
    ],
    screenshots: 15,
  }, // пережить рождество
  {
    release: new Date("2024-09-19"),
    publication: new Date("2024-11-15"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A",
    title: "Пингвин",
    original: "The Penguin",
    kinopoisk: "https://www.kinopoisk.ru/series/4635062/",
    director: [
      {
        name: "Лорен Лефранк",
      },
    ],
    cast: [
      {
        name: "Колин Фаррелл",
      },
      {
        name: "Кристин Милиоти",
      },
    ],
    description:
      "После событий фильма «Бэтмен» Освальд Кобблпот, он же Пингвин, пытается захватить бразды правления криминальным миром Готэма.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
  }, // пингвин
  {
    release: new Date("2024-08-21"),
    publication: new Date("2024-10-01"),
    format: "фильм",
    grade: "B",
    title: "Подай знак",
    original: "Blink Twice",
    kinopoisk: "https://www.kinopoisk.ru/film/4630624/",
    director: [
      {
        name: "Зои Кравиц",
      },
    ],
    cast: [
      {
        name: "Наоми Аки",
      },
      {
        name: "Ченнинг Татум",
      },
      {
        name: "Адриа Архона",
      },
    ],
    description:
      "Миллионер приглашает Фриду с подругой в отпуск мечты на частном острове, но на месте девушки замечают нечто зловещее.",
    genres: [
      {
        genre: "триллер",
      },
    ],
    screenshots: 33,
  }, // подай знак
  {
    release: new Date("2018-06-12"),
    publication: new Date("2024-08-10"),
    format: "фильм",
    grade: "B",
    title: "Подстава",
    original: "Set It Up",
    kinopoisk: "https://www.kinopoisk.ru/film/976520/",
    director: [
      {
        name: "Клер Скэнлон",
      },
    ],
    cast: [
      {
        name: "Зои Дойч",
      },
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Люси Лью",
      },
      {
        name: "Тэй Диггз",
      },
    ],
    description:
      "Два ассистента замышляют коварный план, чтобы заставить своих несносных боссов встречаться.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "мелодрама",
      },
    ],
    screenshots: 18,
  }, // подстава
  {
    release: new Date("2024-02-08"),
    publication: new Date("2024-05-04"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Полиция Токио",
    original: "Tokyo Vice",
    kinopoisk: "https://www.kinopoisk.ru/series/762194/",
    director: [
      {
        name: "Дж.Т. Роджерс",
      },
    ],
    cast: [
      {
        name: "Энсел Элгорт",
      },
      {
        name: "Кэн Ватанабэ",
      },
      {
        name: "Рэйчел Келлер",
      },
      {
        name: "Сё Касамацу",
      },
      {
        name: "Ринко Кикути",
      },
    ],
    description:
      "Американец, приехав в Японию в конце 90-х, становится первым иностранным журналистом в крупной газете и погружается в опасный мир токийского криминала.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 23,
  }, // полиция токио 2
  {
    release: new Date("2022-04-07"),
    publication: new Date("2022-04-29"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Полиция Токио",
    original: "Tokyo Vice",
    kinopoisk: "https://www.kinopoisk.ru/series/762194/",
    director: [
      {
        name: "Дж.Т. Роджерс",
      },
    ],
    cast: [
      {
        name: "Энсел Элгорт",
      },
      {
        name: "Кэн Ватанабэ",
      },
      {
        name: "Рэйчел Келлер",
      },
      {
        name: "Сё Касамацу",
      },
      {
        name: "Ринко Кикути",
      },
    ],
    description:
      "Американец, приехав в Японию в конце 90-х, становится первым иностранным журналистом в крупной газете и погружается в опасный мир токийского криминала.",
    genres: [
      {
        genre: "триллер",
      },
      {
        genre: "драма",
      },
      {
        genre: "криминал",
      },
    ],
    screenshots: 29,
  }, // полиция токио 1
  {
    release: new Date("2024-04-26"),
    publication: new Date("2024-06-15"),
    format: "фильм",
    grade: "A+",
    title: "Претенденты",
    original: "Challengers",
    kinopoisk: "https://www.kinopoisk.ru/film/4860116/",
    director: [
      {
        name: "Лука Гуаданьино",
      },
    ],
    cast: [
      {
        name: "Зендея",
      },
      {
        name: "Майк Фейст",
      },
      {
        name: "Джош О’Коннор",
      },
    ],
    description:
      "Таши Дункан решила отправить своего мужа Арта на соревнования «Челленджер», в надежде возродить его страсть к теннису. Однако его соперником окажется бывший партнёр Таши.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 66,
  }, // претенденты
  {
    release: new Date("2020-03-05"),
    publication: new Date("2024-04-30"),
    format: "сериал",
    season: "мини–сериал",
    grade: "C",
    title: "Программисты",
    original: "Devs",
    kinopoisk: "https://www.kinopoisk.ru/series/1137249/",
    director: [
      {
        name: "Алекс Гарленд",
      },
    ],
    cast: [
      {
        name: "Соноя Мидзуно",
      },
      {
        name: "Ник Офферман",
      },
      {
        name: "Чин Ха",
      },
      {
        name: "Кейли Спейни",
      },
      {
        name: "Элисон Пилл",
      },
    ],
    description:
      "Компьютерный инженер Лили Чан подозревает, что руководство фирмы, в которой она работает, виновно в смерти её парня.",
    genres: [
      {
        genre: "детектив",
      },
      {
        genre: "драма",
      },
      {
        genre: "триллер",
      },
      {
        genre: "фантастика",
      },
    ],
    screenshots: 44,
  }, // программисты
  {
    release: new Date("2008-01-06"),
    publication: new Date("2024-11-20"),
    format: "сериал",
    season: "5",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 47,
  }, // прослушка 5
  {
    release: new Date("2006-09-10"),
    publication: new Date("2024-11-12"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 65,
  }, // прослушка 4
  {
    release: new Date("2004-09-19"),
    publication: new Date("2024-02-15"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 59,
  }, // прослушка 3
  {
    release: new Date("2003-06-01"),
    publication: new Date("2024-02-05"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 60,
  }, // прослушка 2
  {
    release: new Date("2002-06-02"),
    publication: new Date("2024-01-26"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Прослушка",
    original: "The Wire",
    kinopoisk: "https://www.kinopoisk.ru/series/402955/",
    director: [
      {
        name: "Дэвид Саймон",
      },
    ],
    cast: [
      {
        name: "Доминик Уэст",
      },
      {
        name: "Идрис Эльба",
      },
      {
        name: "Лэнс Реддик",
      },
      {
        name: "Уэнделл Пирс",
      },
      {
        name: "Кларк Питерс",
      },
      {
        name: "Соня Сон",
      },
    ],
    description:
      "Наркобизнес Балтимора глазами наркоторговцев и правоохранительных органов.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 90,
  }, // прослушка 1
  {
    release: new Date("2023-06-30"),
    publication: new Date("2023-12-17"),
    format: "фильм",
    grade: "A",
    title: "Прошлые жизни",
    original: "Past Lives",
    kinopoisk: "https://www.kinopoisk.ru/film/1346482/",
    director: [
      {
        name: "Селин Сон",
      },
    ],
    cast: [
      {
        name: "Грета Ли",
      },
      {
        name: "Тео Ю",
      },
      {
        name: "Джон Магаро",
      },
    ],
    description: "Замужняя Нора встречает друга, которого любила в детстве.",
    genres: [
      {
        genre: "драма",
      },
    ],
    screenshots: 37,
  }, // прошлые жизни
  {
    release: new Date("2023-08-02"),
    publication: new Date("2023-10-12"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Псы резервации",
    original: "Reservation Dogs",
    kinopoisk: "https://www.kinopoisk.ru/series/4296469/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Стерлин Харджо",
      },
    ],
    cast: [
      {
        name: "Д’Фарао Ун-А-Тай",
      },
      {
        name: "Девери Джейкобс",
      },
      {
        name: "Паулина Алексис",
      },
      {
        name: "Лэйн Фэктор",
      },
    ],
    description:
      "Жизнь четырех подростков из числа коренных американцев, выросших в резервации на востоке Оклахомы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 41,
  }, // псы резервации 3
  {
    release: new Date("2022-08-03"),
    publication: new Date("2023-05-17"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Псы резервации",
    original: "Reservation Dogs",
    kinopoisk: "https://www.kinopoisk.ru/series/4296469/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Стерлин Харджо",
      },
    ],
    cast: [
      {
        name: "Д’Фарао Ун-А-Тай",
      },
      {
        name: "Девери Джейкобс",
      },
      {
        name: "Паулина Алексис",
      },
      {
        name: "Лэйн Фэктор",
      },
    ],
    description:
      "Жизнь четырех подростков из числа коренных американцев, выросших в резервации на востоке Оклахомы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 33,
  }, // псы резервации 2
  {
    release: new Date("2021-08-09"),
    publication: new Date("2021-10-03"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Псы резервации",
    original: "Reservation Dogs",
    kinopoisk: "https://www.kinopoisk.ru/series/4296469/",
    director: [
      {
        name: "Тайка Вайтити",
      },
      {
        name: "Стерлин Харджо",
      },
    ],
    cast: [
      {
        name: "Д’Фарао Ун-А-Тай",
      },
      {
        name: "Девери Джейкобс",
      },
      {
        name: "Паулина Алексис",
      },
      {
        name: "Лэйн Фэктор",
      },
    ],
    description:
      "Жизнь четырех подростков из числа коренных американцев, выросших в резервации на востоке Оклахомы.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "драма",
      },
    ],
    screenshots: 11,
  }, // псы резервации 1
  {
    release: new Date("2009-08-13"),
    publication: new Date("2024-10-02"),
    format: "фильм",
    grade: "B",
    title: "Район №9",
    original: "District 9",
    kinopoisk: "https://www.kinopoisk.ru/film/397494/",
    director: [
      {
        name: "Нил Бломкамп",
      },
    ],
    cast: [
      {
        name: "Шарлто Копли",
      },
      {
        name: "Джейсон Коуп",
      },
    ],
    description:
      "В 1982 году над южноафриканским Йоханнесбургом появляется массивный космический корабль, на борту которого люди обнаруживают истощенных инопланетян. Правительство ЮАР оказывает пришельцам всяческую помощь и организовывает для пришельцев временный лагерь в Районе №9.",
    genres: [
      {
        genre: "фантастика",
      },
    ],
    screenshots: 11,
  }, // район № 9
  {
    release: new Date("2022-09-30"),
    publication: new Date("2024-03-13"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Рами",
    original: "Ramy",
    kinopoisk: "https://www.kinopoisk.ru/series/1108755/",
    director: [
      {
        name: "Рами Юссеф",
      },
    ],
    cast: [
      {
        name: "Рами Юссеф",
      },
      {
        name: "Амр Вакед",
      },
      {
        name: "Хиам Аббасс",
      },
      {
        name: "Мэй Каламави",
      },
    ],
    description:
      "Рами Хассан — американец египетского происхождения из Нью-Джерси, разрывающийся между культурой миллениалов и традициями своей веры.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
  }, // рами 3
  {
    release: new Date("2023-08-06"),
    publication: new Date("2024-01-17"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Время побеждать: Расцвет династии Лейкерс",
    original: "Winning Time: The Rise of the Lakers Dynasty",
    kinopoisk: "https://www.kinopoisk.ru/series/1272097/",
    director: [
      {
        name: "Макс Боренштейн",
      },
      {
        name: "Джим Хехт",
      },
    ],
    cast: [
      {
        name: "Джон Си Райли",
      },
      {
        name: "Куинси Исайя",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Хэдли Робинсон",
      },
      {
        name: "Джейсон Кларк",
      },
    ],
    description: "История восхождения «Лейкерс» к вершинам спортивного олимпа.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 38,
  }, // расцвет династии лейкерс 2
  {
    release: new Date("2022-03-06"),
    publication: new Date("2022-08-11"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Время побеждать: Расцвет династии Лейкерс",
    original: "Winning Time: The Rise of the Lakers Dynasty",
    kinopoisk: "https://www.kinopoisk.ru/series/1272097/",
    director: [
      {
        name: "Макс Боренштейн",
      },
      {
        name: "Джим Хехт",
      },
    ],
    cast: [
      {
        name: "Джон Си Райли",
      },
      {
        name: "Куинси Исайя",
      },
      {
        name: "Эдриан Броуди",
      },
      {
        name: "Джейсон Сигел",
      },
      {
        name: "Хэдли Робинсон",
      },
      {
        name: "Джейсон Кларк",
      },
    ],
    description: "История восхождения «Лейкерс» к вершинам спортивного олимпа.",
    genres: [
      {
        genre: "спорт",
      },
      {
        genre: "биография",
      },
    ],
    screenshots: 17,
  }, // расцвет династии лейкерс 1
  {
    release: new Date("2023-10-15"),
    publication: new Date("2023-12-28"),
    format: "сериал",
    season: "7",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 30,
  }, // рик и морти 7
  {
    release: new Date("2022-09-04"),
    publication: new Date("2023-01-03"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
  }, // рик и морти 6
  {
    release: new Date("2021-06-20"),
    publication: new Date("2021-09-16"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Рик и Морти",
    original: "Rick and Morty",
    kinopoisk: "https://www.kinopoisk.ru/series/685246/",
    director: [
      {
        name: "Дэн Хармон",
      },
      {
        name: "Джастин Ройланд",
      },
    ],
    cast: [
      {
        name: "Джастин Ройланд",
      },
      {
        name: "Крис Парнелл",
      },
      {
        name: "Спенсер Грэммер",
      },
      {
        name: "Сара Чок",
      },
    ],
    description:
      "Приключения циничного безумного учёного Рика Санчеса и его наивного, капризного и неуверенного в себе внука Морти.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
  }, // рик и морти 5
  {
    release: new Date("2024-04-04"),
    publication: new Date("2024-05-05"),
    format: "сериал",
    season: "мини–сериал",
    grade: "A+",
    title: "Рипли",
    original: "Ripley",
    kinopoisk: "https://www.kinopoisk.ru/series/1311083/",
    director: [
      {
        name: "Стивен Зеллиан",
      },
    ],
    cast: [
      {
        name: "Эндрю Скотт",
      },
      {
        name: "Дакота Фаннинг",
      },
      {
        name: "Джонни Флинн",
      },
    ],
    description:
      "Богатый бизнесмен нанимает Тома Рипли, чтобы тот помог ему вернуть сына из Италии обратно в Соединенные Штаты.",
    genres: [
      {
        genre: "криминал",
      },
      {
        genre: "триллер",
      },
      {
        genre: "чёрно-белое",
      },
    ],
    screenshots: 310,
  }, // рипли
  {
    release: new Date("2003-06-22"),
    publication: new Date("2023-08-25"),
    format: "сериал",
    season: "6",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 25,
  }, // секс в большом городе 6
  {
    release: new Date("2001-06-03"),
    publication: new Date("2023-04-07"),
    format: "сериал",
    season: "4",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
  }, // секс в большом городе 4
  {
    release: new Date("2000-06-04"),
    publication: new Date("2023-03-11"),
    format: "сериал",
    season: "3",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 30,
  }, // секс в большом городе 3
  {
    release: new Date("1999-06-06"),
    publication: new Date("2023-01-21"),
    format: "сериал",
    season: "2",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
  }, // секс в большом городе 2
  {
    release: new Date("1998-06-07"),
    publication: new Date("2022-11-14"),
    format: "сериал",
    season: "1",
    grade: "A+",
    title: "Секс в большом городе",
    original: "Sex and the City",
    kinopoisk: "https://www.kinopoisk.ru/series/77042/",
    director: [
      {
        name: "Даррен Стар",
      },
    ],
    cast: [
      {
        name: "Сара Джессика Паркер",
      },
      {
        name: "Ким Кэтролл",
      },
      {
        name: "Кристин Дэвис",
      },
      {
        name: "Синтия Никсон",
      },
    ],
    description:
      "Четыре подруги из Нью-Йорка открыто обсуждают отношения между полами.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 11,
  }, // секс в большом городе 1
  {
    release: new Date("2023-09-21"),
    publication: new Date("2023-10-03"),
    format: "сериал",
    season: "4",
    grade: "B",
    title: "Сексуальное просвещение",
    original: "Sex Education / Половое воспитание",
    kinopoisk: "https://www.kinopoisk.ru/series/1147693/",
    director: [
      {
        name: "Лори Нанн",
      },
    ],
    cast: [
      {
        name: "Эйса Баттерфилд",
      },
      {
        name: "Джиллиан Андерсон",
      },
      {
        name: "Шути Гатва",
      },
      {
        name: "Эмма Маки",
      },
      {
        name: "Коннор Суинделлс",
      },
      {
        name: "Эйми Лу Вуд",
      },
    ],
    description:
      "Застенчивый подросток, живущий с матерью-сексологом, начинает помогать одноклассникам, давая советы сексуального характера.",
    genres: [
      {
        genre: "драма",
      },
      {
        genre: "мелодрама",
      },
      {
        genre: "комедия",
      },
    ],
    screenshots: 19,
  }, // сексуальное просвещение 4
  {
    release: new Date("2023-10-01"),
    publication: new Date("2024-08-23"),
    format: "сериал",
    season: "35",
    grade: "B",
    title: "Симпсоны",
    original: "The Simpsons",
    kinopoisk:
      "https://www.kinopoisk.ru/series/77164/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
    ],
    cast: [
      {
        name: "Дэн Кастелланета",
      },
      {
        name: "Джули Кавнер",
      },
      {
        name: "Нэнси Картрайт",
      },
    ],
    description:
      "Приключения семьи из рабочего класса в неблагополучном городе Спрингфилд.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 17,
  }, // симпсоны 35
  {
    release: new Date("2022-09-25"),
    publication: new Date("2023-08-13"),
    format: "сериал",
    season: "34",
    grade: "B",
    title: "Симпсоны",
    original: "The Simpsons",
    kinopoisk:
      "https://www.kinopoisk.ru/series/77164/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
    ],
    cast: [
      {
        name: "Дэн Кастелланета",
      },
      {
        name: "Джули Кавнер",
      },
      {
        name: "Нэнси Картрайт",
      },
    ],
    description:
      "Приключения семьи из рабочего класса в неблагополучном городе Спрингфилд.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 18,
  }, // симпсоны 34
  {
    release: new Date("2021-09-26"),
    publication: new Date("2022-09-06"),
    format: "сериал",
    season: "33",
    grade: "B",
    title: "Симпсоны",
    original: "The Simpsons",
    kinopoisk:
      "https://www.kinopoisk.ru/series/77164/?utm_referrer=www.kinopoisk.ru",
    director: [
      {
        name: "Мэтт Грейнинг",
      },
    ],
    cast: [
      {
        name: "Дэн Кастелланета",
      },
      {
        name: "Джули Кавнер",
      },
      {
        name: "Нэнси Картрайт",
      },
    ],
    description:
      "Приключения семьи из рабочего класса в неблагополучном городе Спрингфилд.",
    genres: [
      {
        genre: "мультфильм",
      },
    ],
    screenshots: 23,
  }, // симпсоны 33
  {
    release: new Date("2023-08-18"),
    publication: new Date("2023-09-29"),
    format: "фильм",
    grade: "C",
    title: "Синий Жук",
    original: "Blue Beetle",
    kinopoisk: "https://www.kinopoisk.ru/film/1219153/",
    director: [
      {
        name: "Анхель Мануэль Сото",
      },
    ],
    cast: [
      {
        name: "Шоло Маридуэнья",
      },
      {
        name: "Бруна Маркезини",
      },
      {
        name: "Дамиан Алькасар",
      },
    ],
    description:
      "Мексиканский подросток Хайме Рейес получает инопланетный костюм, который даёт ему суперсилы.",
    genres: [
      {
        genre: "фантастика",
      },
      {
        genre: "приключения",
      },
    ],
    screenshots: 16,
  }, // синий жук
  {
    release: new Date("2023-07-27"),
    publication: new Date("2023-11-07"),
    format: "сериал",
    season: "1",
    grade: "C",
    title: "Скрежет металла",
    original: "Twisted Metal",
    kinopoisk: "https://www.kinopoisk.ru/series/4397762/",
    director: [
      {
        name: "Ретт Риз",
      },
      {
        name: "Майкл Джонатан Смит",
      },
      {
        name: "Пол Верник",
      },
    ],
    cast: [
      {
        name: "Энтони Маки",
      },
      {
        name: "Стефани Беатрис",
      },
    ],
    description:
      "Джон Доу должен доставить таинственную посылку через постапокалиптическую пустошь в обмен на лучшую жизнь.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "боевик",
      },
    ],
    screenshots: 18,
  }, // скрежет металла 1
  {
    release: new Date("2023-11-17"),
    publication: new Date("2024-01-28"),
    format: "фильм",
    grade: "C",
    title: "Следующий гол – победный",
    original: "Next Goal Wins",
    kinopoisk: "https://www.kinopoisk.ru/film/1318952/",
    director: [
      {
        name: "Тайка Вайтити",
      },
    ],
    cast: [
      {
        name: "Майкл Фассбендер",
      },
    ],
    description:
      "Футбольный тренер Томас Ронген приезжает в Американское Самоа, чтобы подготовить местную команду к отборочному циклу чемпионата мира.",
    genres: [
      {
        genre: "комедия",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 20,
  }, // следующий гол победный
  {
    release: new Date("2010-04-16"),
    publication: new Date("2024-01-13"),
    format: "фильм",
    grade: "B",
    title: "Смерть на похоронах",
    original: "Death at a Funeral",
    kinopoisk: "https://www.kinopoisk.ru/film/450725/",
    director: [
      {
        name: "Нил Лабут",
      },
    ],
    cast: [
      {
        name: "Крис Рок",
      },
      {
        name: "Мартин Лоуренс",
      },
      {
        name: "Реджина Холл",
      },
      {
        name: "Зои Салдана",
      },
      {
        name: "Джеймс Марсден",
      },
      {
        name: "Питер Динклэйдж",
      },
    ],
    description:
      "Похоронная церемония превращается в настоящий хаос из-за раскрытых семейных тайн.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 23,
  }, // смерть на похоронах
  {
    release: new Date("2024-07-08"),
    publication: new Date("2024-08-18"),
    format: "фильм",
    grade: "C",
    title: "Смерч 2",
    original: "Twisters",
    kinopoisk: "https://www.kinopoisk.ru/film/5388362/",
    director: [
      {
        name: "Ли Айзек Чун",
      },
    ],
    cast: [
      {
        name: "Дейзи Эдгар-Джонс",
      },
      {
        name: "Глен Пауэлл",
      },
      {
        name: "Энтони Рамос",
      },
    ],
    description:
      "Команда ученых исследуют смерчи. Оказавшись в эпицентре опасных штормов, им приходится бороться за свою жизнь.",
    genres: [
      {
        genre: "приключения",
      },
    ],
    screenshots: 15,
  }, // смерч 2
  {
    release: new Date("2015-03-17"),
    publication: new Date("2023-12-03"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 14,
  }, // сообщетсво 6
  {
    release: new Date("2014-01-02"),
    publication: new Date("2023-03-27"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Кен Жонг",
      },
      {
        name: "Джонатан Бэнкс",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 13,
  }, // сообщетсво 5
  {
    release: new Date("2013-02-07"),
    publication: new Date("2023-03-20"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэвид Гарасио",
      },
      {
        name: "Моусес Порт",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 20,
  }, // сообщетсво 4
  {
    release: new Date("2011-09-22"),
    publication: new Date("2023-03-12"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 34,
  }, // сообщетсво 3
  {
    release: new Date("2010-09-23"),
    publication: new Date("2022-10-19"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 48,
  }, // сообщетсво 2
  {
    release: new Date("2009-09-17"),
    publication: new Date("2022-10-11"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Сообщество",
    original: "Community",
    kinopoisk: "https://www.kinopoisk.ru/series/471825/",
    director: [
      {
        name: "Дэн Хармон",
      },
    ],
    cast: [
      {
        name: "Джоэл Макхэйл",
      },
      {
        name: "Дональд Гловер",
      },
      {
        name: "Гиллиан Джейкобс",
      },
      {
        name: "Элисон Бри",
      },
      {
        name: "Дэнни Пуди",
      },
      {
        name: "Иветт Николь Браун",
      },
      {
        name: "Чеви Чейз",
      },
      {
        name: "Кен Жонг",
      },
    ],
    description:
      "Сериал рассказывает о студенческом сообществе, которое состоит из школьных лузеров, старающихся сохранить трезвый ум.",
    genres: [
      {
        genre: "комедия",
      },
    ],
    screenshots: 19,
  }, // сообщетсво 1
  {
    release: new Date("2025-03-07"),
    publication: new Date("2025-05-03"),
    format: "сериал",
    season: "7",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 47,
  }, // формула 1. драйв выживания 7
  {
    release: new Date("2024-02-23"),
    publication: new Date("2024-07-21"),
    format: "сериал",
    season: "6",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 24,
  }, // формула 1. драйв выживания 6
  {
    release: new Date("2023-02-24"),
    publication: new Date("2024-07-14"),
    format: "сериал",
    season: "5",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 23,
  }, // формула 1. драйв выживания 5
  {
    release: new Date("2022-03-11"),
    publication: new Date("2024-06-07"),
    format: "сериал",
    season: "4",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 17,
  }, // формула 1. драйв выживания 4
  {
    release: new Date("2021-03-19"),
    publication: new Date("2024-05-29"),
    format: "сериал",
    season: "3",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 11,
  }, // формула 1. драйв выживания 3
  {
    release: new Date("2020-02-28"),
    publication: new Date("2023-07-08"),
    format: "сериал",
    season: "2",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 21,
  }, // формула 1. драйв выживания 2
  {
    release: new Date("2019-03-08"),
    publication: new Date("2023-07-02"),
    format: "сериал",
    season: "1",
    grade: "A",
    title: "Формула 1. Драйв выживания",
    original: "Formula 1: Drive to Survive",
    kinopoisk: "https://www.kinopoisk.ru/series/1240162/",
    director: [
      {
        name: "Джеймс Гэй-Рис",
      },
      {
        name: "Пол Мартин",
      },
    ],
    cast: [
      {
        name: "",
      },
    ],
    description:
      "Документальный сериал, дающий возможность заглянуть в закулисье «Формулы-1».",
    genres: [
      {
        genre: "документальный",
      },
      {
        genre: "спорт",
      },
    ],
    screenshots: 18,
  }, // формула 1. драйв выживания 1
];

// Сортировка films по дате публикации
films.sort((dateA, dateB) => dateA.publication - dateB.publication).reverse();

const location_of_the_images =
  "https://jeromesolomonmalone.github.io/gargantua/images/";

function name_for_link(element) {
  const names = element
    .toLowerCase()
    .split(" /")[0]
    .trim()
    .replace(/[^a-z0-9\-\s]/g, "")
    .replace(/[-\s]/g, "_")
    .replace(/__+/g, "_")
    .substring(0, 250);
  return names;
}

// константа ПОПАПА ФИЛЬМА
const popupFilm = document.querySelector(".popup__film");
const popupScreenshot = document.querySelector(".popup__screenshot");
const popupNavigation = document.querySelector(".popup__navigation");

// функция ДОБАВЛЕНИЯ чего-угодно из темплейта
function addAnything(template, className, outside, inside) {
  function add(item) {
    const element = template.querySelector("." + className).cloneNode(true);
    element.textContent = item;
    return element;
  }
  outside.forEach(function (element) {
    inside.append(add(element));
  });
}

// ФОРМАТ в навигацию
const filmsFormat = Array.from(films, ({ format }) => format);
const filmsFormatSet = new Set(filmsFormat.sort().reverse());
const navigationFormatTemplate = document.querySelector(
  "#navigation__format-template"
).content;
const navigationFormat = document.querySelector(".navigation__format");
// ЖАНРЫ в навигацию
const filmsGenresMany = Array.from(films, ({ genres }) => genres);
const filmsGenresAll = filmsGenresMany.flat();
const filmsGenres = Array.from(filmsGenresAll, ({ genre }) => genre);
const filmsGenresSet = new Set(filmsGenres.sort());
const navigationGenresTemplate = document.querySelector(
  "#navigation__genres-template"
).content;
const navigationGenres = document.querySelector(".navigation__genres");
// ГОДА в навигацию
const filmsReleases = Array.from(films, ({ release }) =>
  release.toString().slice(11, 15)
);
const filmsReleasesSet = new Set(filmsReleases.sort().reverse());
const navigationReleasesTemplate = document.querySelector(
  "#navigation__releases-template"
).content;
const navigationReleases = document.querySelector(".navigation__releases");
// РЕЖИССЕРЫ в попап
const filmsDirectorMany = Array.from(films, ({ director }) => director);
const filmsDirectorAll = filmsDirectorMany.flat();
const filmsDirectorArray = Array.from(filmsDirectorAll, ({ name }) => name);
const filmsDirectorSet = new Set(filmsDirectorArray.sort());
const filmDirectorTemplate = document.querySelector(
  "#film__director-template"
).content;
const filmDirector = document.querySelector(".film__director");
// КАСТ в попап
const filmsCastMany = Array.from(films, ({ cast }) => cast);
const filmsCastAll = filmsCastMany.flat();
const filmsCastArray = Array.from(filmsCastAll, ({ name }) => name);
const filmsCastSet = new Set(filmsCastArray.sort());
const filmCastTemplate = document.querySelector("#film__cast-template").content;
const filmCast = document.querySelector(".film__cast");

addAnything(
  navigationFormatTemplate,
  "navigation__format__item",
  filmsFormatSet,
  navigationFormat
);

addAnything(
  navigationGenresTemplate,
  "navigation__genres__item",
  filmsGenresSet,
  navigationGenres
);

addAnything(
  navigationReleasesTemplate,
  "navigation__releases__item",
  filmsReleasesSet,
  navigationReleases
);

addAnything(
  filmDirectorTemplate,
  "film__director__name",
  filmsDirectorSet,
  filmDirector
);

addAnything(filmCastTemplate, "film__cast__name", filmsCastSet, filmCast);

const GradeAPlus = "https://img.icons8.com/ios/100/grades.png";
const GradeA = "https://img.icons8.com/ios/100/circled-a.png";
const GradeB = "https://img.icons8.com/ios/100/circled-b.png";
const GradeC = "https://img.icons8.com/ios/100/circled-c.png";

const WhiteGradeAPlus =
  "https://img.icons8.com/ios-filled/100/FFFFFF/grades.png";
const WhiteGradeA =
  "https://img.icons8.com/ios-filled/100/FFFFFF/circled-a.png";
const WhiteGradeB =
  "https://img.icons8.com/ios-filled/100/FFFFFF/circled-b.png";
const WhiteGradeC =
  "https://img.icons8.com/ios-filled/100/FFFFFF/circled-c.png";

function defineGradeBlack(item, element) {
  if (item === "A+") {
    element.src = GradeAPlus;
    element.alt = "Иконка Оценки A+";
    element.title = item;
  } else if (item === "A") {
    element.src = GradeA;
    element.alt = "Иконка Оценки A";
    element.title = item;
  } else if (item === "B") {
    element.src = GradeB;
    element.alt = "Иконка Оценки B";
    element.title = item;
  } else if (item === "C") {
    element.src = GradeC;
    element.alt = "Иконка Оценки C";
    element.title = item;
  }
}

function defineGradeWhite(item, element) {
  if (item === "A+") {
    element.src = WhiteGradeAPlus;
    element.alt = "Иконка Оценки A+";
    element.title = item;
  } else if (item === "A") {
    element.src = WhiteGradeA;
    element.alt = "Иконка Оценки A";
    element.title = item;
  } else if (item === "B") {
    element.src = WhiteGradeB;
    element.alt = "Иконка Оценки B";
    element.title = item;
  } else if (item === "C") {
    element.src = WhiteGradeC;
    element.alt = "Иконка Оценки C";
    element.title = item;
  }
}

function Grades() {
  const filmsGrades = Array.from(films, ({ grade }) => grade);
  const filmsGradesSet = new Set(filmsGrades.sort());

  const navigationGradesTemplate = document.querySelector(
    "#navigation__grades-template"
  ).content;
  const navigationGrades = document.querySelector(".navigation__grades");

  function addNavigationGrades(item) {
    const navigationGradeElement = navigationGradesTemplate
      .querySelector(".navigation__grades__item")
      .cloneNode(true);
    const navigationGradesImage = navigationGradeElement.querySelector(
      ".navigation__grades__image"
    );
    defineGradeBlack(item, navigationGradesImage);
    return navigationGradeElement;
  }

  filmsGradesSet.forEach(function (element) {
    navigationGrades.append(addNavigationGrades(element));
  });
}

Grades();

// функция ОТКРЫТИЯ ПОПАПА
function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
  document.body.style.overflowY = "hidden";
  document.addEventListener("keydown", closePopupByEsc);
}

// функция ЗАКРЫТИЯ ПОПАПА
function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");
  document.body.style.overflowY = "auto";
  document.removeEventListener("keydown", closePopupByEsc);
}

// функция ЗАКРЫТИЯ попапа СКРИШОТА
function closePopupScreenshot(popupElement) {
  popupElement.classList.remove("popup_is-opened");
}

// функция ЗАКРЫТИЯ ПОПАПА по клавише ESC
function closePopupByEsc(evt) {
  if (
    evt.key === "Escape" &&
    evt.code === "Escape" &&
    popupScreenshot.classList.contains("popup_is-opened")
  ) {
    closePopupScreenshot(popupScreenshot);
    REMOVE(popupScreenshot.querySelectorAll(".popup__screenshot__block"));
  } else if (
    evt.key === "Escape" &&
    evt.code === "Escape" &&
    popupFilm.classList.contains("popup_is-opened")
  ) {
    closePopup(popupFilm);
    REMOVE(popupFilm.querySelectorAll(".film__screenshot"));
  } else if (
    evt.key === "Escape" &&
    evt.code === "Escape" &&
    popupNavigation.classList.contains("popup_is-opened")
  ) {
    closePopup(popupNavigation);
  }
}

// функция ЗАКРЫТИЯ ПОПАПА по клику ВНЕ оверлея
function addCloseOverlayListener(element) {
  element.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
      closePopup(e.currentTarget);
      REMOVE(popupScreenshot.querySelectorAll(".popup__screenshot__block"));
    }
  });
}

// использование закрытия и открытия попапа с НАВИГАЦИЕЙ
document
  .querySelector(".header__navigation_button")
  .addEventListener("click", function () {
    openPopup(popupNavigation);
  });
document
  .querySelector(".popup__navigation__close")
  .addEventListener("click", function () {
    closePopup(popupNavigation);
  });
addCloseOverlayListener(popupNavigation);

// константы ПОИСКА
const headerSearchSubmit = document.querySelector(".header__search__submit");
const headerClearButton = document.querySelector(".header__clear__button");
const headerSearchButton = document.querySelector(".header__search__button");
const headerSearch = document.forms["header-search"];
const searchInput = headerSearch.elements.search;
const mainSearch = document.querySelector(".main__search");
// НЕАКТИВНЫЙ поиск
headerSearchSubmit.disabled = true;
// функция НЕАКТИВНОГО поиска
function searchDisabled() {
  headerSearchSubmit.disabled = true;
  headerSearchSubmit.classList.remove("header__search__submit_is-active");
  headerClearButton.classList.remove("header__clear__button_is-opened");
}
// функция НАЖАТИЯ на ЛУПУ
function Search() {
  headerSearchButton.addEventListener("click", function () {
    headerSearch.classList.toggle("header__search_is-opened");
  });
  // значение поиска влияет на КНОПКИ поиска
  searchInput.addEventListener("input", function (evt) {
    if (this.value.length > 0) {
      headerSearchSubmit.disabled = false;
      headerSearchSubmit.classList.add("header__search__submit_is-active");
      headerClearButton.classList.add("header__clear__button_is-opened");
    } else {
      searchDisabled();
    }
  });
  // ОЧИСТКА поиска
  headerClearButton.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    searchInput.value = "";
    searchDisabled();
  });
}
// функция ЗАКРЫТИЯ поиска
function clearSearch() {
  headerSearch.reset();
  headerSearch.classList.remove("header__search_is-opened");
  searchDisabled();
  mainSearch.classList.remove("main__search_is-opened");
}
// ПОИСК
Search();

// функция изменения НАВИГАЦИИ и передвижения ПОИСКА из-за сужжения экрана
const navigationItems = document.querySelectorAll(".navigation__item");
function MovingSearch_and_ChangingNavigation() {
  navigationItems.forEach(function (item) {
    item.classList.add("navigation__item_is-hover");
  });
  function moveDetails() {
    let target = document.querySelector(".popup__navigation__content"),
      origin = document.querySelector(".search"),
      breakPoint = 1023,
      viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < breakPoint) {
      target.appendChild(headerSearch);
      navigationItems.forEach(function (item) {
        item.classList.remove("navigation__item_is-hover");
      });
    }
    window.addEventListener("resize", () => {
      let viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;
      if (viewportWidth < breakPoint) {
        target.appendChild(headerSearch);
        navigationItems.forEach(function (item) {
          item.classList.remove("navigation__item_is-hover");
        });
      } else {
        origin.appendChild(headerSearch);
        navigationItems.forEach(function (item) {
          item.classList.add("navigation__item_is-hover");
        });
      }
    });
  }
  moveDetails();
  navigationItems.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("navigation__item_is-rotate");
      item
        .querySelector(".navigation__hidden")
        .classList.toggle("navigation__hidden_is-opened");
    });
  });
}
MovingSearch_and_ChangingNavigation();

const clonedArray = structuredClone(films);
clonedArray.forEach(function (item) {
  item.screenshots = Array.from(
    { length: item.screenshots },
    (element, index) => {
      var plus = index + 1;

      if (item.format == "фильм") {
        element =
          location_of_the_images +
          "films/" +
          item.release.getFullYear() +
          "/" +
          name_for_link(item.original) +
          "/" +
          plus +
          ".jpg";
      } else if (item.season == "мини–сериал") {
        element =
          location_of_the_images +
          "serials/" +
          name_for_link(item.original) +
          "/" +
          plus +
          ".jpg";
      } else {
        element =
          location_of_the_images +
          "serials/" +
          name_for_link(item.original) +
          "/" +
          "season__" +
          item.season +
          "/" +
          plus +
          ".jpg";
      }

      return element;
    }
  );

  const random = Math.floor(Math.random() * item.screenshots.length);
  const qwerty = item.screenshots[random];

  item.screenshots = Array.from({ length: 1 }, (element, index) => {
    return (element = qwerty);
  });
});

const ScreenshotsAll = Array.from(
  clonedArray,
  ({ screenshots }) => screenshots
);
const Screenshots = ScreenshotsAll.flat();

// функция СОЗДАНИЯ в шапке сайта КАРТИНКИ с сеткой
function BigImage() {
  function efficientRandomElements(arr, count) {
    let result = new Array(count),
      len = arr.length,
      taken = new Array(len);
    if (count > len)
      throw new RangeError(
        "efficientRandomElements: количество запрашиваемых элементов превышает их количество в массиве"
      );
    while (count--) {
      let x = Math.floor(Math.random() * len);
      result[count] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
  // !!! если что, менять количество изображений в картинке ЗДЕСЬ !!!
  const Number = 25;
  // !!!
  const ScreenshotsN = efficientRandomElements(Screenshots, Number);

  function imagesHeader() {
    const topImagesTemplate = document.querySelector(
      "#top__images-template"
    ).content;

    const topImages = document.querySelectorAll(".top__images");

    function addTopImages(item) {
      const topImagesElement = topImagesTemplate
        .querySelector(".top__images_block")
        .cloneNode(true);

      const topImage = topImagesElement.querySelector(".top__images_image");

      topImage.src = item;
      topImage.alt = "Скриншот";
      topImage.addEventListener("load", function () {
        topImage.style.opacity = "1";
      });

      return topImagesElement;
    }

    topImages.forEach((item) => {
      ScreenshotsN.forEach(function (element) {
        item.append(addTopImages(element));
      });
    });
  }
  imagesHeader();
}
BigImage();

// переключение ТЕМ
const buttonThemeLight = document.querySelector(".theme__light");
const buttonThemeDark = document.querySelector(".theme__dark");
buttonThemeLight.addEventListener("click", function () {
  document.body.classList.remove("dark-theme");
  function changeGrades(element) {
    if (element.src == WhiteGradeAPlus) {
      element.src = GradeAPlus;
    } else if (element.src == WhiteGradeA) {
      element.src = GradeA;
    } else if (element.src == WhiteGradeB) {
      element.src = GradeB;
    } else if (element.src == WhiteGradeC) {
      element.src = GradeC;
    }
  }
  const mainGrade = document.querySelector(".main__description__grade");
  changeGrades(mainGrade);
  buttonThemeLight.classList.toggle("theme__button_is-active");
  buttonThemeDark.classList.toggle("theme__button_is-active");
  buttonThemeLight.disabled = true;
  buttonThemeDark.disabled = false;
  closePopup(popupNavigation);
});
buttonThemeDark.addEventListener("click", function () {
  document.body.classList.add("dark-theme");
  function changeGrades(element) {
    if (element.src == GradeAPlus) {
      element.src = WhiteGradeAPlus;
    } else if (element.src == GradeA) {
      element.src = WhiteGradeA;
    } else if (element.src == GradeB) {
      element.src = WhiteGradeB;
    } else if (element.src == GradeC) {
      element.src = WhiteGradeC;
    }
  }
  const mainGrade = document.querySelector(".main__description__grade");
  changeGrades(mainGrade);
  buttonThemeLight.classList.toggle("theme__button_is-active");
  buttonThemeDark.classList.toggle("theme__button_is-active");
  buttonThemeLight.disabled = false;
  buttonThemeDark.disabled = true;
  closePopup(popupNavigation);
});

// константа главного листа
const mainList = document.querySelector(".main__list");

// функция ДОБАВЛЕНИЯ КАРТ
function addCard(item) {
  const mainListTemplate = document.querySelector(
    "#main__list-template"
  ).content;
  const mainListElement = mainListTemplate
    .querySelector(".main__list__item")
    .cloneNode(true);

  const originalName = mainListElement.querySelector(".card__title__original");
  originalName.textContent = item.original;

  const year_for_link = item.release.getFullYear();

  const elementPoster = mainListElement.querySelector(".card__poster");
  if (item.format == "фильм" || item.season == "мини–сериал") {
    elementPoster.src =
      location_of_the_images +
      "miniposters/" +
      name_for_link(originalName.textContent) +
      ".jpg";
  } else {
    elementPoster.src =
      location_of_the_images +
      "miniposters/" +
      name_for_link(originalName.textContent) +
      "_" +
      item.season +
      ".jpg";
  }

  elementPoster.alt = "Постер из «" + item.title + "»";
  elementPoster.addEventListener("load", function () {
    elementPoster.style.opacity = "1";
  });

  mainListElement.querySelector(".card__grade").textContent = item.grade;
  mainListElement.querySelector(".card__title").textContent = item.title;

  mainListElement.querySelector(".card__year__original").textContent =
    item.release.getTime();
  mainListElement.querySelector(".card__publication__original").textContent =
    item.publication.getTime();

  mainListElement.classList.add("main__list__item_is-opened");

  const headerSearch = document.forms["header-search"];
  const searchInput = headerSearch.elements.search;

  function searchFilms(evt) {
    evt.preventDefault();
    removeNavigationTitle();
    document.querySelector(".main__search__result").textContent =
      searchInput.value;
    mainSearch.classList.add("main__search_is-opened");

    if (
      item.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.original.toLowerCase().includes(searchInput.value.toLowerCase())
    ) {
      mainListElement.classList.add("main__list__item_is-opened");
      document.querySelector(".main__base").scrollIntoView();
      setTimeout(function () {
        headerSearch.reset();
        headerSearch.classList.remove("header__search_is-opened");
        searchDisabled();
      }, 0);
    } else {
      mainListElement.classList.remove("main__list__item_is-opened");
    }

    closePopup(popupNavigation);
  }

  headerSearch.addEventListener("submit", searchFilms);

  const description = document.querySelector(".main__description");
  const descriptionBlock = document.querySelector(".main__description__block");
  const descriptionFormat = document.querySelector(
    ".main__description__format"
  );
  const descriptionElements = document.querySelector(
    ".main__description__elements"
  );
  const descriptionTitle = document.querySelector(".main__description__title");
  const descriptionGrade = document.querySelector(".main__description__grade");
  const descriptionNames = document.querySelector(".main__description__names");
  const descriptionJob = document.querySelector(".main__description__job");
  const descriptionName = document.querySelector(".main__description__name");

  function removeNavigationTitle() {
    descriptionBlock.classList.remove("main__description_is-opened");
    descriptionElements.classList.remove("main__description_is-opened");
    descriptionFormat.classList.remove("main__description__element_is-opened");
    descriptionNames.classList.remove("main__description_is-opened");
    descriptionGrade.title = undefined;
    descriptionTitle.textContent = undefined;
  }

  function openCard() {
    document.querySelector(".main__base").scrollIntoView();
    clearSearch();
    closePopup(popupNavigation);
    mainListElement.classList.add("main__list__item_is-opened");
  }

  function mistake() {
    mainListElement.classList.remove("main__list__item_is-opened");
    closePopup(popupNavigation);
    document.querySelector(".main__base").scrollIntoView();
  }

  const formatButtons = document.querySelectorAll(".navigation__format__item");
  formatButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      if (element.textContent.toLowerCase() == item.format) {
        if (
          descriptionElements.classList.contains("main__description_is-opened")
        ) {
          descriptionNames.classList.remove("main__description_is-opened");
          descriptionBlock.classList.add("main__description_is-opened");
          descriptionFormat.classList.add(
            "main__description__element_is-opened"
          );
          descriptionFormat.classList.add(
            "main__description__format_is-marked"
          );
          descriptionFormat.classList.add("main__description__subtitle");
          descriptionFormat.textContent = element.textContent;

          for (let i = 0; i < item.genres.length; i++) {
            if (
              item.genres[i].genre ==
                descriptionTitle.textContent.toLowerCase() &&
              element.textContent.toLowerCase() == item.format
            ) {
              openCard();
              break;
            } else if (
              descriptionTitle.textContent ==
                item.release.toString().slice(11, 15) &&
              element.textContent.toLowerCase() == item.format
            ) {
              openCard();
            } else if (
              descriptionGrade.title == item.grade &&
              element.textContent.toLowerCase() == item.format
            ) {
              openCard();
            }
          }
        } else {
          descriptionNames.classList.remove("main__description_is-opened");
          descriptionBlock.classList.add("main__description_is-opened");
          descriptionFormat.classList.add(
            "main__description__element_is-opened"
          );
          descriptionFormat.classList.add(
            "main__description__format_is-marked"
          );
          descriptionFormat.classList.remove("main__description__subtitle");
          descriptionFormat.textContent = element.textContent;

          openCard();
        }
      } else {
        mistake();
      }
    });
  });

  const genreButtons = document.querySelectorAll(".navigation__genres__item");
  genreButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      for (let i = 0; i < item.genres.length; i++) {
        if (item.genres[i].genre == element.textContent.toLowerCase()) {
          if (
            descriptionFormat.classList.contains(
              "main__description__element_is-opened"
            )
          ) {
            descriptionNames.classList.remove("main__description_is-opened");
            descriptionBlock.classList.add("main__description_is-opened");
            descriptionElements.classList.add("main__description_is-opened");
            descriptionFormat.classList.add("main__description__subtitle");
            descriptionTitle.classList.add(
              "main__description__element_is-opened"
            );
            descriptionTitle.textContent = element.textContent;
            descriptionGrade.classList.remove(
              "main__description__element_is-opened"
            );
            descriptionGrade.title = undefined;

            if (descriptionFormat.textContent.toLowerCase() == item.format) {
              openCard();
              break;
            }
          } else {
            descriptionNames.classList.remove("main__description_is-opened");
            descriptionBlock.classList.add("main__description_is-opened");
            descriptionElements.classList.add("main__description_is-opened");
            descriptionTitle.classList.add(
              "main__description__element_is-opened"
            );
            descriptionTitle.textContent = element.textContent;
            descriptionGrade.classList.remove(
              "main__description__element_is-opened"
            );
            descriptionGrade.title = undefined;

            openCard();
            break;
          }
        } else {
          mistake();
        }
      }
    });
  });

  const yearButtons = document.querySelectorAll(".navigation__releases__item");
  yearButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      if (element.textContent == item.release.toString().slice(11, 15)) {
        if (
          descriptionFormat.classList.contains(
            "main__description__element_is-opened"
          )
        ) {
          descriptionNames.classList.remove("main__description_is-opened");
          descriptionBlock.classList.add("main__description_is-opened");
          descriptionElements.classList.add("main__description_is-opened");
          descriptionFormat.classList.add("main__description__subtitle");
          descriptionTitle.classList.add(
            "main__description__element_is-opened"
          );
          descriptionTitle.textContent = element.textContent;
          descriptionGrade.classList.remove(
            "main__description__element_is-opened"
          );
          descriptionGrade.title = undefined;

          if (descriptionFormat.textContent.toLowerCase() == item.format) {
            openCard();
          }
        } else {
          descriptionNames.classList.remove("main__description_is-opened");
          descriptionBlock.classList.add("main__description_is-opened");
          descriptionElements.classList.add("main__description_is-opened");
          descriptionTitle.classList.add(
            "main__description__element_is-opened"
          );
          descriptionTitle.textContent = element.textContent;
          descriptionGrade.classList.remove(
            "main__description__element_is-opened"
          );
          descriptionGrade.title = undefined;

          openCard();
        }
      } else {
        mistake();
      }
    });
  });

  const gradeButtons = document.querySelectorAll(".navigation__grades__item");
  gradeButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      const elementImg = element.querySelector(".navigation__grades__image");
      if (elementImg.title == item.grade) {
        if (
          descriptionFormat.classList.contains(
            "main__description__element_is-opened"
          )
        ) {
          descriptionNames.classList.remove("main__description_is-opened");
          descriptionBlock.classList.add("main__description_is-opened");
          descriptionElements.classList.add("main__description_is-opened");
          descriptionFormat.classList.add("main__description__subtitle");
          descriptionTitle.classList.remove(
            "main__description__element_is-opened"
          );
          descriptionTitle.textContent = undefined;
          descriptionGrade.classList.add(
            "main__description__element_is-opened"
          );
          descriptionGrade.src = elementImg.src;
          descriptionGrade.alt = elementImg.alt;
          descriptionGrade.title = elementImg.title;
          if (descriptionFormat.textContent.toLowerCase() == item.format) {
            openCard();
          }
        } else {
          descriptionNames.classList.remove("main__description_is-opened");
          descriptionBlock.classList.add("main__description_is-opened");
          descriptionElements.classList.add("main__description_is-opened");
          descriptionTitle.classList.remove(
            "main__description__element_is-opened"
          );
          descriptionTitle.textContent = undefined;
          descriptionGrade.classList.add(
            "main__description__element_is-opened"
          );
          descriptionGrade.src = elementImg.src;
          descriptionGrade.alt = elementImg.alt;
          descriptionGrade.title = elementImg.title;

          openCard();
        }
      } else {
        mistake();
      }
    });
  });

  mainListElement.addEventListener("click", function () {
    window.setTimeout(() => {
      popupFilm.scrollTo(0, 0);
    }, 0);
    showFilmCard(item);
  });

  const castButtons = document.querySelectorAll(".film__cast__name");
  castButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      for (let i = 0; i < item.cast.length; i++) {
        if (item.cast[i].name == element.textContent) {
          descriptionBlock.classList.remove("main__description_is-opened");
          descriptionElements.classList.remove("main__description_is-opened");
          descriptionFormat.classList.remove(
            "main__description__element_is-opened"
          );
          descriptionGrade.title = undefined;
          descriptionNames.classList.add("main__description_is-opened");
          descriptionJob.textContent = "В главных ролях";
          descriptionName.textContent = element.textContent;

          openCard();
          closePopup(popupFilm);
          REMOVE(popupFilm.querySelectorAll(".film__screenshot"));
          REMOVE(popupFilm.querySelectorAll(".film__poster"));
          break;
        } else {
          mainListElement.classList.remove("main__list__item_is-opened");
        }
      }
    });
  });

  const directorButtons = document.querySelectorAll(".film__director__name");
  directorButtons.forEach(function (element) {
    element.addEventListener("click", function () {
      for (let i = 0; i < item.director.length; i++) {
        if (item.director[i].name == element.textContent) {
          descriptionBlock.classList.remove("main__description_is-opened");
          descriptionElements.classList.remove("main__description_is-opened");
          descriptionFormat.classList.remove(
            "main__description__element_is-opened"
          );
          descriptionGrade.title = undefined;
          descriptionNames.classList.add("main__description_is-opened");
          if (item.format == "фильм") {
            descriptionJob.textContent = "Режиссер";
          } else {
            descriptionJob.textContent = "Создатель";
          }
          descriptionName.textContent = element.textContent;

          openCard();
          closePopup(popupFilm);
          REMOVE(popupFilm.querySelectorAll(".film__screenshot"));
          REMOVE(popupFilm.querySelectorAll(".film__poster"));
          break;
        } else {
          mainListElement.classList.remove("main__list__item_is-opened");
        }
      }
    });
  });

  // функция ПЕРЕЗАГРУЗКИ всей страницы
  function Reset() {
    clearSearch();
    mainListElement.classList.add("main__list__item_is-opened");
    sortZA("card__publication__original");
    closePopup(popupNavigation);
    deleteSortTitle();
    removeNavigationTitle();
  }

  // использование функции ПЕРЕЗАГРУЗКИ при нажатии на ГЛАВНУЮ КНОПКУ
  document
    .querySelector(".navigation__main__item")
    .addEventListener("click", function () {
      Reset();
      document.querySelector(".main__base").scrollIntoView();
    });
  document
    .querySelector(".header__main__button")
    .addEventListener("click", function () {
      Reset();
      window.scrollTo(0, 0);
    });

  return mainListElement;
}

// ОБЪЯВЛЕНИЕ функции использования добавления карт
function addingCards() {
  films.forEach(function (element) {
    mainList.append(addCard(element));
  });
}

// ИСПОЛЬЗОВАНИЕ функции добавления карт
addingCards();

function countingSearchResults() {
  end_of_words = (number, words_arr) => {
    number = Math.abs(number);
    if (Number.isInteger(number)) {
      let options = [2, 0, 1, 1, 1, 2];
      return words_arr[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : options[number % 10 < 5 ? number % 10 : 5]
      ];
    }
    return words_arr[1];
  };
  number_of_anything = mainList.getElementsByClassName(
    "main__list__item_is-opened"
  ).length;
  if (number_of_anything == 1) {
    start_of_word = "Показан";
  } else {
    start_of_word = "Показано";
  }
  end_of_word = end_of_words(number_of_anything, [
    "результат",
    "результата",
    "результатов",
  ]);

  document.querySelector(".main__search__number").textContent =
    start_of_word + " " + number_of_anything + " " + end_of_word;
}
headerSearch.addEventListener("submit", countingSearchResults);

const mainSortTitle = document.querySelector(".main__sort");

// функция ДОБАЛЕНИЯ результатов СОРТИРОВКИ
function addSortTitle(element) {
  mainSortTitle.classList.add("main__sort_is-opened");
  mainSortTitle.textContent = element.textContent;
}
// функция УДАЛЕНИЯ результатов СОРТИРОВКИ
function deleteSortTitle() {
  mainSortTitle.classList.remove("main__sort_is-opened");
}

// функция ПОКАЗА попапа фильма
function showFilmCard(item) {
  const filmHeader = popupFilm.querySelector(".film__header");

  filmHeader.classList.toggle("film__header_is-row-reverse");
  filmHeader.classList.toggle("film__header_is-reverse");

  const popupFilmCloseImg = document.querySelector(".popup__film__close__img");

  if (filmHeader.classList.contains("film__header_is-reverse")) {
    popupFilmCloseImg.classList.remove("popup__film__close__img_is-reverse");
  } else {
    popupFilmCloseImg.classList.add("popup__film__close__img_is-reverse");
  }

  const filmHeaderTitle = popupFilm.querySelector(".film__header__title");
  filmHeaderTitle.textContent = item.title;
  if (filmHeaderTitle.textContent.length > 20) {
    filmHeaderTitle.classList.add("film__header__title_is-small");
  } else {
    filmHeaderTitle.classList.remove("film__header__title_is-small");
  }

  const format_for_link = item.format;
  const name = name_for_link(item.original);
  const year_for_link = item.release.getFullYear();
  const season_for_link = item.season;

  // ПОСТЕРЫ в попап
  const filmPosters = document.querySelector(".film__posters");
  const filmPostersTemplate = document.querySelector(
    "#film__poster-template"
  ).content;

  let Posters = Array(12).fill();

  function addPosters(item) {
    const element = filmPostersTemplate
      .querySelector(".film__poster")
      .cloneNode(true);

    if (format_for_link == "фильм" || season_for_link == "мини–сериал") {
      element.src = location_of_the_images + "posters/" + name + ".jpg";
    } else {
      element.src =
        location_of_the_images +
        "posters/" +
        name +
        "_" +
        season_for_link +
        ".jpg";
    }

    element.alt = "Постер из «" + filmHeaderTitle.textContent + "»";
    element.addEventListener("load", function () {
      element.style.opacity = "1";
    });

    return element;
  }

  Posters.forEach(function (element) {
    filmPosters.append(addPosters(element));
  });

  const filmPoster = popupFilm.querySelectorAll(".film__poster");

  const filmGrade = popupFilm.querySelector(".film__header__grade");
  defineGradeWhite(item.grade, filmGrade);

  if (item.season != null) {
    if (item.season == "мини–сериал") {
      popupFilm.querySelector(".film__header__season").textContent =
        item.season + ", ";
    } else {
      popupFilm.querySelector(".film__header__season").textContent =
        "Сезон " + item.season + ",";
    }
  } else {
    popupFilm.querySelector(".film__header__season").textContent = "";
  }
  popupFilm.querySelector(".film__header__year").textContent =
    item.release.getFullYear();

  const filmDirectorTitle = popupFilm.querySelector(".film__director__title");

  if (item.format == "фильм" && item.director.length > 1) {
    filmDirectorTitle.textContent = "Режиссеры: ";
  } else if (item.format == "фильм" && item.director.length == 1) {
    filmDirectorTitle.textContent = "Режиссер: ";
  } else if (item.format == "сериал" && item.director.length > 1) {
    filmDirectorTitle.textContent = "Создатели: ";
  } else {
    filmDirectorTitle.textContent = "Создатель: ";
  }

  if (item.cast.length > 1) {
    popupFilm.querySelector(".film__cast").style.display = "inline-block";
    popupFilm.querySelector(".film__cast__title").textContent =
      "В главных ролях: ";
  } else if (item.cast.length == 1) {
    popupFilm.querySelector(".film__cast__title").textContent =
      "В главной роли: ";
    const arrayCast = item.cast.flat();
    const castTextContent = Array.from(arrayCast, ({ name }) => name);
    if (castTextContent == "") {
      popupFilm.querySelector(".film__cast").style.display = "none";
    } else {
      popupFilm.querySelector(".film__cast").style.display = "inline-block";
    }
  }

  function addImages(template, className1, className2, outside, inside) {
    function add(item) {
      const element = template.querySelector("." + className1).cloneNode(true);

      if (format_for_link == "фильм") {
        element.querySelector("." + className2).src =
          location_of_the_images +
          "films/" +
          year_for_link +
          "/" +
          name +
          "/" +
          item +
          ".jpg";
      } else if (season_for_link == "мини–сериал") {
        element.querySelector("." + className2).src =
          location_of_the_images + "serials/" + name + "/" + item + ".jpg";
      } else {
        element.querySelector("." + className2).src =
          location_of_the_images +
          "serials/" +
          name +
          "/" +
          "season__" +
          season_for_link +
          "/" +
          item +
          ".jpg";
      }

      element.querySelector("." + className2).alt =
        "Скриншот из «" + filmHeaderTitle.textContent + "»";
      element
        .querySelector("." + className2)
        .addEventListener("load", function () {
          element.querySelector("." + className2).style.opacity = "1";
        });

      return element;
    }
    outside.forEach(function (element) {
      inside.append(add(element));
    });
  }

  const filmScreenshots = document.querySelector(".film__screenshots");
  const popupScreenshots = document.querySelector(".popup__screenshots");
  const filmScreenshotsTemplate = document.querySelector(
    "#film__screenshots-template"
  ).content;
  const popupScreenshotsTemplate = document.querySelector(
    "#popup__screenshot-template"
  ).content;
  const Screenshots = Array.from(
    { length: item.screenshots },
    (element, index) => {
      return index + 1;
    }
  );

  addImages(
    filmScreenshotsTemplate,
    "film__screenshot",
    "film__screenshot__img",
    Screenshots,
    filmScreenshots
  );

  const filmDirectorName = popupFilm.querySelectorAll(".film__director__name");
  const filmCastName = popupFilm.querySelectorAll(".film__cast__name");
  const filmScreenshot = popupFilm.querySelectorAll(".film__screenshot");
  const filmScreenshotIMG = popupFilm.querySelectorAll(
    ".film__screenshot__img"
  );

  function nameVerification(outside, inside) {
    for (let i = 0; i < outside.length; i++) {
      if ((outside[i] = inside[i])) {
        outside[i].textContent = inside[i].name;
        outside[i].classList.add("film__name_comma");
        outside[i].classList.remove("film__name_is-closed");
        if (i + 1 == inside.length) {
          outside[i].classList.remove("film__name_comma");
        }
      } else {
        outside[i].classList.add("film__name_is-closed");
      }
    }
  }

  nameVerification(filmDirectorName, item.director);
  nameVerification(filmCastName, item.cast);

  popupFilm.querySelector(".film__description").textContent = item.description;
  popupFilm.querySelector(".film__link").href = item.kinopoisk;
  popupFilm.querySelector(".film__link__name").textContent = item.format;

  filmScreenshots.classList.toggle("film__screenshots_is-even");
  filmScreenshots.classList.toggle("film__screenshots_is-odd");

  for (let i = 0; i < filmScreenshot.length; i++) {
    filmScreenshot[i].addEventListener("click", function () {
      function add(item) {
        const element = popupScreenshotsTemplate
          .querySelector(".popup__screenshot__block")
          .cloneNode(true);

        element.querySelector(".popup__screenshot__img").src =
          item.querySelector(".film__screenshot__img").src;
        element.querySelector(".popup__screenshot__img").alt =
          item.querySelector(".film__screenshot__img").alt;
        element
          .querySelector(".popup__screenshot__img")
          .addEventListener("load", function () {
            element.querySelector(".popup__screenshot__img").style.opacity =
              "1";
          });

        return element;
      }
      popupFilm
        .querySelectorAll(".film__screenshot")
        .forEach(function (element) {
          popupScreenshots.append(add(element));
        });
      openPopup(popupScreenshot);
      const close = document.querySelector(".popup__screenshot__close");
      close.addEventListener("click", function () {
        closePopupScreenshot(popupScreenshot);
        REMOVE(popupScreenshot.querySelectorAll(".popup__screenshot__block"));
      });
      addCloseOverlayListener(popupScreenshot);

      const popupScreen = popupScreenshot.querySelectorAll(
        ".popup__screenshot__block"
      );
      const popupScreenIMG = popupScreenshot.querySelectorAll(
        ".popup__screenshot__img"
      );

      let slideCount = popupScreen.length;
      const prevButton = document.querySelector(".popup__screenshot__left");
      const nextButton = document.querySelector(".popup__screenshot__right");
      const inactiveButton = "aria-disabled";
      let currentSlide = i;

      function updateSlider() {
        popupScreen.forEach((slide, index) => {
          if (index === currentSlide) {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
          } else {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
          }
        });

        prevButton.setAttribute(inactiveButton, currentSlide === 0);
        nextButton.setAttribute(
          inactiveButton,
          currentSlide === slideCount - 1
        );
      }

      prevButton.addEventListener("click", () => {
        if (currentSlide > 0) {
          currentSlide--;
          updateSlider();
        }
      });

      nextButton.addEventListener("click", () => {
        if (currentSlide < slideCount - 1) {
          currentSlide++;
          updateSlider();
        }
      });

      document.addEventListener("keydown", function (event) {
        if (
          event.key === "ArrowLeft" &&
          event.code === "ArrowLeft" &&
          currentSlide > 0 &&
          document
            .querySelector(".popup__screenshot")
            .classList.contains("popup_is-opened")
        ) {
          currentSlide--;
          updateSlider();
        }
        if (
          event.key === "ArrowRight" &&
          event.code === "ArrowRight" &&
          currentSlide < slideCount - 1 &&
          document
            .querySelector(".popup__screenshot")
            .classList.contains("popup_is-opened")
        ) {
          currentSlide++;
          updateSlider();
        }
      });

      updateSlider();
    });
  }

  // закрытие попапа при НАЖАТИИ на кнопку закрытия попапа фильма
  popupFilm
    .querySelector(".popup__film__close")
    .addEventListener("click", function () {
      closePopup(popupFilm);
      REMOVE(filmPoster);
      REMOVE(filmScreenshot);
      REMOVE(popupScreenshot.querySelectorAll(".popup__screenshot__block"));
    });

  openPopup(popupFilm);
}

function REMOVE(item) {
  item.forEach(function (element) {
    element.remove();
  });
}

// константы СОРТИРОВОК в навигации
const sortNameAZ = document.querySelector(".sort__name__AZ");
const sortNameZA = document.querySelector(".sort__name__ZA");
const sortOriginalNameAZ = document.querySelector(".sort__original_name__AZ");
const sortOriginalNameZA = document.querySelector(".sort__original_name__ZA");
const sortYearAZ = document.querySelector(".sort__year__AZ");
const sortYearZA = document.querySelector(".sort__year__ZA");
const sortPublicationAZ = document.querySelector(".sort__publication__AZ");
const sortPublicationZA = document.querySelector(".sort__publication__ZA");

// функция СОРТИРОВКИ

function sortAZ(className) {
  var items = document.querySelectorAll(".main__list__item");
  Array.from(items)
    .sort(function (a, b) {
      a = Number(a.querySelector("." + className).innerText);
      b = Number(b.querySelector("." + className).innerText);
      return (a > b) - (a < b);
    })
    .forEach(function (n, i) {
      n.style.order = i;
    });
  closePopup(popupNavigation);
}

function sortZA(className) {
  var items = document.querySelectorAll(".main__list__item");
  Array.from(items)
    .sort(function (a, b) {
      a = Number(a.querySelector("." + className).innerText);
      b = Number(b.querySelector("." + className).innerText);
      return (a < b) - (a > b);
    })
    .forEach(function (n, i) {
      n.style.order = i;
    });
  closePopup(popupNavigation);
}

function sortNamingAZ(className) {
  var items = document.querySelectorAll(".main__list__item");
  Array.from(items)
    .sort(function (a, b) {
      a = a.querySelector("." + className).innerText;
      b = b.querySelector("." + className).innerText;
      return (a > b) - (a < b);
    })
    .forEach(function (n, i) {
      n.style.order = i;
    });
  closePopup(popupNavigation);
}

function sortNamingZA(className) {
  var items = document.querySelectorAll(".main__list__item");
  Array.from(items)
    .sort(function (a, b) {
      a = a.querySelector("." + className).innerText;
      b = b.querySelector("." + className).innerText;
      return (a < b) - (a > b);
    })
    .forEach(function (n, i) {
      n.style.order = i;
    });
  closePopup(popupNavigation);
}

sortNameAZ.addEventListener("click", function () {
  sortNamingAZ("card__title");
  addSortTitle(sortNameAZ);
  document.querySelector(".main__base").scrollIntoView();
});
sortNameZA.addEventListener("click", function () {
  sortNamingZA("card__title");
  addSortTitle(sortNameZA);
  document.querySelector(".main__base").scrollIntoView();
});
sortOriginalNameAZ.addEventListener("click", function () {
  sortNamingAZ("card__title__original");
  addSortTitle(sortOriginalNameAZ);
  document.querySelector(".main__base").scrollIntoView();
});
sortOriginalNameZA.addEventListener("click", function () {
  sortNamingZA("card__title");
  addSortTitle(sortOriginalNameZA);
  document.querySelector(".main__base").scrollIntoView();
});
sortYearAZ.addEventListener("click", function () {
  sortZA("card__year__original");
  addSortTitle(sortYearAZ);
  document.querySelector(".main__base").scrollIntoView();
});
sortYearZA.addEventListener("click", function () {
  sortAZ("card__year__original");
  addSortTitle(sortYearZA);
  document.querySelector(".main__base").scrollIntoView();
});
sortPublicationAZ.addEventListener("click", function () {
  sortZA("card__publication__original");
  deleteSortTitle();
  document.querySelector(".main__base").scrollIntoView();
});
sortPublicationZA.addEventListener("click", function () {
  sortAZ("card__publication__original");
  addSortTitle(sortPublicationZA);
  document.querySelector(".main__base").scrollIntoView();
});

mainSortTitle.addEventListener("click", function () {
  if (mainSortTitle.textContent == sortYearAZ.textContent) {
    sortAZ("card__year__original");
    mainSortTitle.textContent = sortYearZA.textContent;
  } else if (mainSortTitle.textContent == sortYearZA.textContent) {
    sortZA("card__year__original");
    mainSortTitle.textContent = sortYearAZ.textContent;
  } else if (mainSortTitle.textContent == sortNameZA.textContent) {
    sortNamingAZ("card__title");
    mainSortTitle.textContent = sortNameAZ.textContent;
  } else if (mainSortTitle.textContent == sortNameAZ.textContent) {
    sortNamingZA("card__title");
    mainSortTitle.textContent = sortNameZA.textContent;
  } else if (mainSortTitle.textContent == sortOriginalNameZA.textContent) {
    sortNamingAZ("card__title__original");
    mainSortTitle.textContent = sortOriginalNameAZ.textContent;
  } else if (mainSortTitle.textContent == sortOriginalNameAZ.textContent) {
    sortNamingZA("card__title__original");
    mainSortTitle.textContent = sortOriginalNameZA.textContent;
  } else {
    sortZA("card__publication__original");
    deleteSortTitle();
  }
});

function find_the_right_word() {
  clonedArray.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  for (let i = 0; i < 10; i++) {
    console.log(name_for_link(clonedArray[i].original));
  }
}

// find_the_right_word()

// console.log(document.querySelectorAll(".card").length);
