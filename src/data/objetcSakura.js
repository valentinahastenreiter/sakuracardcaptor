const cartas = [
  {
    _id: '6039396a68347a4a842920cf',
    cardNumber: 1,
    spanishName: 'Viento',
    englishName: 'The Windy',
    kanji: '風',
    Rōmaji: 'Kaze',
    appeardManga: '1',
    appeardAnime: '1',
    clowCard: 'https://i.ibb.co/ftvH3CX/Viento.jpg',
    sakuraCard: 'https://i.ibb.co/k5HVTP7/Viento-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      'Simboliza el intelecto, la sabiduría, la meteorología muestra información valiosa.',
    __v: 0
  },
  {
    _id: '603a5d82e708590015ca94cc',
    cardNumber: 2,
    spanishName: 'Vuelo',
    englishName: 'The fly',
    kanji: '翔',
    Rōmaji: 'Shō',
    appeardManga: '2',
    appeardAnime: '1',
    clowCard: 'https://i.ibb.co/qgs2pQ3/the-fly-1.jpg',
    sakuraCard: 'https://i.ibb.co/ry15JSV/Vuelo-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza la libertad, la evasión.',
    __v: 0
  },
  {
    _id: '603a5e3ce708590015ca94cd',
    cardNumber: 3,
    spanishName: 'Sombra',
    englishName: 'The Shadow',
    kanji: '影',
    Rōmaji: 'Kage',
    appeardManga: '10',
    appeardAnime: '2',
    clowCard: 'https://i.ibb.co/9W42mHB/Sombra.jpg',
    sakuraCard: 'https://i.ibb.co/q7dgnKZ/Sombra-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Indica el sigilo.',
    __v: 0
  },
  {
    _id: '603a5eb7e708590015ca94ce',
    cardNumber: 4,
    spanishName: 'Agua',
    englishName: 'The Watery',
    kanji: '水',
    Rōmaji: 'Mizu',
    appeardManga: '3',
    appeardAnime: '3',
    clowCard: 'https://i.ibb.co/KLrv3BF/Agua.jpg',
    sakuraCard: 'https://i.ibb.co/HxLpWy5/Agua-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      'Simboliza los sentimientos, la expansión, la habilidad de la adivinación.',
    __v: 0
  },
  {
    _id: '603a5f60e708590015ca94cf',
    cardNumber: 5,
    spanishName: 'Lluvia',
    englishName: 'The Rain',
    kanji: '雨',
    Rōmaji: 'Ame',
    appeardManga: '',
    appeardAnime: '4',
    clowCard: 'https://i.ibb.co/ryfdTjL/Lluvia.jpg',
    sakuraCard: 'https://i.ibb.co/YBxFKBt/Lluvia-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      'Simboliza la cancelación de planes o procesos debido a agentes externos.',
    __v: 0
  },
  {
    _id: '603a600be708590015ca94d0',
    cardNumber: 6,
    spanishName: 'Bosque',
    englishName: 'The Wood',
    kanji: '樹',
    Rōmaji: 'Ki',
    appeardManga: '1',
    appeardAnime: '4',
    clowCard: 'https://i.ibb.co/17154Dk/Bosque.jpg',
    sakuraCard: 'https://i.ibb.co/hYMDk2F/Bosque-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      'Simboliza el dominio y la integración del medio, de la naturaleza.',
    __v: 0
  },
  {
    _id: '603a6076e708590015ca94d1',
    cardNumber: 7,
    spanishName: 'Salto',
    englishName: 'The Jump',
    kanji: '跳',
    Rōmaji: 'Odo',
    appeardManga: '1',
    appeardAnime: '5',
    clowCard: 'https://i.ibb.co/BfJYRBK/Salto.jpg',
    sakuraCard: 'https://i.ibb.co/QdT7ZjS/Salto-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: ' Representa la evasión de los problemas.',
    __v: 0
  },
  {
    _id: '603a60e8e708590015ca94d2',
    cardNumber: 8,
    spanishName: 'Ilusión',
    englishName: 'The Illusion',
    kanji: '幻',
    Rōmaji: 'Maboroshi',
    appeardManga: '5',
    appeardAnime: '6',
    clowCard: 'https://i.ibb.co/T0JB8PM/Ilusi-n.jpg',
    sakuraCard: 'https://i.ibb.co/b5rxvqT/Ilusi-n-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza la esperanza, las ganas, la alegría.',
    __v: 0
  },
  {
    _id: '603a617de708590015ca94d3',
    cardNumber: 9,
    spanishName: 'Silencio',
    englishName: 'The Silent',
    kanji: '静',
    Rōmaji: 'Sei',
    appeardManga: '',
    appeardAnime: '7',
    clowCard: 'https://i.ibb.co/Rjn67P1/Silencio.jpg',
    sakuraCard: 'https://i.ibb.co/bsQzMK5/Silencio-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      'Simboliza un secreto, el pensar antes de hablar, la represión de la libertad de expresión.',
    __v: 0
  },
  {
    _id: '603a622ce708590015ca94d4',
    cardNumber: 10,
    spanishName: 'Trueno',
    englishName: 'The Thunder',
    kanji: '雷',
    Rōmaji: 'Kaminari',
    appeardManga: '10',
    appeardAnime: '8',
    clowCard: 'https://i.ibb.co/41jrxGB/Trueno.jpg',
    sakuraCard: 'https://i.ibb.co/1LvxQsH/Trueno-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza la parálisis, la energía',
    __v: 0
  },
  {
    _id: '603a628ce708590015ca94d5',
    cardNumber: 11,
    spanishName: 'Espada',
    englishName: 'The Sword',
    kanji: '剣',
    Rōmaji: 'Ken',
    appeardManga: '9',
    appeardAnime: '9',
    clowCard: 'https://i.ibb.co/QJ01Qh0/Espada.jpg',
    sakuraCard: 'https://i.ibb.co/RY3KShT/Espada-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Representa el ataque, la agresión.',
    __v: 0
  },
  {
    _id: '603a66f3e708590015ca94d6',
    cardNumber: 12,
    spanishName: 'Flor',
    englishName: 'The Flower',
    kanji: '花',
    Rōmaji: 'Hana',
    appeardManga: '7',
    appeardAnime: '10',
    clowCard: 'https://i.ibb.co/2cVhp4b/Flor.jpg',
    sakuraCard: 'https://i.ibb.co/b3HYXyp/Flor-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      ' Representa la salud, el comienzo de un amor, o el florecimiento de algo.',
    __v: 0
  },
  {
    _id: '603a6814e708590015ca94d7',
    cardNumber: 13,
    spanishName: 'Escudo',
    englishName: 'The Shield',
    kanji: '盾',
    Rōmaji: 'Tate',
    appeardManga: '13',
    appeardAnime: '11',
    clowCard: 'https://i.ibb.co/jWVBtJx/Escudo.jpg',
    sakuraCard: 'https://i.ibb.co/8KHfgds/Escudo-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      'Simboliza la protección, tanto personal como de algo que nosotros consideremos muy valioso.',
    __v: 0
  },
  {
    _id: '603a6898e708590015ca94d8',
    cardNumber: 14,
    spanishName: 'Tiempo',
    englishName: 'The Time',
    kanji: '時',
    Rōmaji: 'Toki',
    appeardManga: '',
    appeardAnime: '12',
    clowCard: 'https://i.ibb.co/nQjGfBQ/Tiempo.jpg',
    sakuraCard: 'https://i.ibb.co/p4kcRMS/Tiempo-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: ' Simboliza el paso del tiempo, su escasez.',
    __v: 0
  },
  {
    _id: '603a68e3e708590015ca94d9',
    cardNumber: 15,
    spanishName: 'Poder',
    englishName: 'The Power',
    kanji: '力',
    Rōmaji: 'Chikara',
    appeardManga: '',
    appeardAnime: '13',
    clowCard: 'https://i.ibb.co/LPgpbB5/Poder.jpg',
    sakuraCard: 'https://i.ibb.co/HVdcRrf/Poder-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: ' Esta carta simboliza la superación de obstáculos.',
    __v: 0
  },
  {
    _id: '603a6983e708590015ca94da',
    cardNumber: 16,
    spanishName: 'Niebla',
    englishName: 'The Mist',
    kanji: '霧',
    Rōmaji: 'Kiri',
    appeardManga: '',
    appeardAnime: '14',
    clowCard: 'https://i.ibb.co/VxtF7LL/Niebla.jpg',
    sakuraCard: 'https://i.ibb.co/QKSnXnG/Niebla-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Representa la confusión, lo difuso.',
    __v: 0
  },
  {
    _id: '603a69d1e708590015ca94db',
    cardNumber: 17,
    spanishName: 'Tormenta',
    englishName: 'The Storm',
    kanji: '嵐',
    Rōmaji: 'Arashi',
    appeardManga: '',
    appeardAnime: '15',
    clowCard: 'https://i.ibb.co/qW0ZdhR/Tormenta.jpg',
    sakuraCard: 'https://i.ibb.co/CKKCGQj/Tormenta-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza el caos, los problemas.',
    __v: 0
  },
  {
    _id: '603a6a29e708590015ca94dc',
    cardNumber: 18,
    spanishName: 'Flote',
    englishName: 'The Float',
    kanji: '浮',
    Rōmaji: 'Uka',
    appeardManga: '',
    appeardAnime: '15',
    clowCard: 'https://i.ibb.co/1GVn0SR/Flote.jpg',
    sakuraCard: 'https://i.ibb.co/0VZ0RGV/Flote-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning:
      ' Simboliza la capacidad de tener una visión general sobre algo, o de evadirse de un problema.',
    __v: 0
  },
  {
    _id: '603a6a7fe708590015ca94dd',
    cardNumber: 19,
    spanishName: 'Borrar',
    englishName: 'The Erase',
    kanji: '消',
    Rōmaji: 'Shō',
    appeardManga: '17',
    appeardAnime: '17',
    clowCard: 'https://i.ibb.co/rMRHYLV/Borrar.jpg',
    sakuraCard: 'https://i.ibb.co/xGT9X0p/Borrar-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Representa la desaparición, el olvido.',
    __v: 0
  },
  {
    _id: '603a6b0ee708590015ca94de',
    cardNumber: 20,
    spanishName: 'Brillo',
    englishName: 'The Glow',
    kanji: '灯',
    Rōmaji: 'Akari',
    appeardManga: '18',
    appeardAnime: '18',
    clowCard: 'https://i.ibb.co/M7ynsLg/Brillo.jpg',
    sakuraCard: 'https://i.ibb.co/2YDm0j7/Brillo-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Esta carta simboliza la iluminación.',
    __v: 0
  },
  {
    _id: '603a6d10e708590015ca94df',
    cardNumber: 21,
    spanishName: 'Movimiento',
    englishName: 'The Move',
    kanji: '移',
    Rōmaji: 'Utsuri',
    appeardManga: '',
    appeardAnime: '19',
    clowCard: 'https://i.ibb.co/0f92bH5/Movimiento.jpg',
    sakuraCard: 'https://i.ibb.co/R0W9hTz/Movimiento-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza un cambio, un movimiento.',
    __v: 0
  },
  {
    _id: '603a6d85e708590015ca94e0',
    cardNumber: 22,
    spanishName: 'Pelea',
    englishName: 'The Fight',
    kanji: '闘',
    Rōmaji: 'Tō',
    appeardManga: '',
    appeardAnime: '20',
    clowCard: 'https://i.ibb.co/YR210sq/Pelea.jpg',
    sakuraCard: 'https://i.ibb.co/2h4XJZf/Pelea-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza la destreza y la lucha.',
    __v: 0
  },
  {
    _id: '603a6e30e708590015ca94e1',
    cardNumber: 23,
    spanishName: 'Aro',
    englishName: 'The Loop',
    kanji: '輪',
    Rōmaji: 'Wa',
    appeardManga: '',
    appeardAnime: '21',
    clowCard: 'https://i.ibb.co/Tr3ZqDM/Aro.jpg',
    sakuraCard: 'https://i.ibb.co/mHdYQy5/Aro-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza la continuidad, la perseverancia, una prisión.',
    __v: 0
  },
  {
    _id: '603a6fc6e708590015ca94e2',
    cardNumber: 24,
    spanishName: 'Dormir',
    englishName: 'The Sleep',
    kanji: '眠',
    Rōmaji: 'Nemuri',
    appeardManga: '',
    appeardAnime: '22',
    clowCard: 'https://i.ibb.co/pwNB8mJ/Dormir.jpg',
    sakuraCard: 'https://i.ibb.co/rGgQfZp/Dormir-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza la paralización, el despiste, el descanso.',
    __v: 0
  },
  {
    _id: '603a701fe708590015ca94e3',
    cardNumber: 25,
    spanishName: 'Canción',
    englishName: 'The Song',
    kanji: '歌',
    Rōmaji: 'Uta',
    appeardManga: '',
    appeardAnime: '23',
    clowCard: 'https://i.ibb.co/hmyxC61/Canci-n.jpg',
    sakuraCard: 'https://i.ibb.co/3kmsTBj/Canci-n-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: ' Simboliza la paz, la tranquilidad y la alegría.',
    __v: 0
  },
  {
    _id: '603a710ae708590015ca94e4',
    cardNumber: 26,
    spanishName: 'Pequeño',
    englishName: 'The Little',
    kanji: '小',
    Rōmaji: 'Shō',
    appeardManga: '',
    appeardAnime: '24',
    clowCard: 'https://i.ibb.co/4mvMqT8/Peque-o.jpg',
    sakuraCard: 'https://i.ibb.co/fdqWVKM/Peque-o-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: 'Simboliza el retroceso, el decrecimiento, el fracaso.',
    __v: 0
  },
  {
    _id: '603a71dfe708590015ca94e5',
    cardNumber: 27,
    spanishName: 'Espejo',
    englishName: 'The Mirror',
    kanji: '鏡',
    Rōmaji: 'Kagami',
    appeardManga: '12',
    appeardAnime: '25',
    clowCard: 'https://i.ibb.co/k6YjCg9/Espejo.jpg',
    sakuraCard: 'https://i.ibb.co/55bYWJy/Espejo-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: ' Simboliza el reflejo, la protección.',
    __v: 0
  },
  {
    _id: '603a7270e708590015ca94e6',
    cardNumber: 28,
    spanishName: 'Laberinto',
    englishName: 'The Maze',
    kanji: '迷',
    Rōmaji: 'Mei',
    appeardManga: '15',
    appeardAnime: '26',
    clowCard: 'https://i.ibb.co/3kgK8Lt/Laberinto.jpg',
    sakuraCard: 'https://i.ibb.co/G2K8q2y/Laberinto-Sakura.jpg',
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    },
    meaning: ' Simboliza la desorientación, una prisión.',
    __v: 0
  },
  {
    _id: '603a73afe708590015ca94e7',
    cardNumber: 29,
    spanishName: 'Regreso',
    englishName: 'The Return',
    kanji: '戻',
    Rōmaji: 'Modo',
    appeardManga: '',
    appeardAnime: '27',
    clowCard: 'https://i.ibb.co/ctBrqNj/Regreso.jpg',
    sakuraCard: 'https://i.ibb.co/Hq1H85v/Regreso-Sakura.jpg',
    meaning: 'Simboliza la repetición de algo pasado, el mirar hacia atrás.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a7434e708590015ca94e8',
    cardNumber: 30,
    spanishName: 'Disparo',
    englishName: 'The Shot',
    kanji: '撃',
    Rōmaji: 'Geki',
    appeardManga: '',
    appeardAnime: '28',
    clowCard: 'https://i.ibb.co/17LzHvc/Disparo.jpg',
    sakuraCard: 'https://i.ibb.co/7KB9jCR/Disparo-Sakura.jpg',
    meaning: 'Representa la agresión.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a74a6e708590015ca94e9',
    cardNumber: 31,
    spanishName: 'Dulce',
    englishName: 'The Sweet',
    kanji: '甘',
    Rōmaji: 'Ama',
    appeardManga: '',
    appeardAnime: '29',
    clowCard: 'https://i.ibb.co/1Ggd29p/Dulce.jpg',
    sakuraCard: 'https://i.ibb.co/HpthzhS/Dulce-Sakura.jpg',
    meaning:
      'Simboliza la dulzura, la infancia, la protección de nuestros padres.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a7567e708590015ca94ea',
    cardNumber: 32,
    spanishName: 'Carrera',
    englishName: 'The Dash',
    kanji: '駆',
    Rōmaji: 'Ka',
    appeardManga: '',
    appeardAnime: '30',
    clowCard: 'https://i.ibb.co/sq76L1J/Carrera.jpg',
    sakuraCard: 'https://i.ibb.co/Wz0VZpP/Carrera-Sakura.jpg',
    meaning:
      'Simboliza la velocidad, los reflejos, la capacidad de actuar rápidamente',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a827f3da2c60015bd692c',
    cardNumber: 33,
    spanishName: 'Grande',
    englishName: 'The Big',
    kanji: '大',
    Rōmaji: 'Dai',
    appeardManga: '',
    appeardAnime: '31',
    clowCard: 'https://i.ibb.co/gz8Qmfb/Grande.jpg',
    sakuraCard: 'https://i.ibb.co/J2NYWjS/Grande-Sakura.jpg',
    meaning: 'Esta carta simboliza el crecimiento, el avance, el éxito.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a82db3da2c60015bd692d',
    cardNumber: 34,
    spanishName: 'Creación',
    englishName: 'The Create',
    kanji: '創',
    Rōmaji: 'Sō',
    appeardManga: '',
    appeardAnime: '31',
    clowCard: 'https://i.ibb.co/Jqs1nHj/Creaci-n.jpg',
    sakuraCard: 'https://i.ibb.co/sWnYwzC/Creaci-n-Sakura.jpg',
    meaning: 'Simboliza la creación, la imaginación, el desafío.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a83503da2c60015bd692e',
    cardNumber: 35,
    spanishName: 'Cambio',
    englishName: 'The Change',
    kanji: '替',
    Rōmaji: 'Kawa',
    appeardManga: '',
    appeardAnime: '32',
    clowCard: 'https://i.ibb.co/xmxSHrT/Cambio.jpg',
    sakuraCard: 'https://i.ibb.co/wMRvj2L/Cambio-Sakura.jpg',
    meaning: 'Esta carta simboliza cambio, apariencia, adaptación.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a84883da2c60015bd692f',
    cardNumber: 36,
    spanishName: 'Hielo',
    englishName: 'The Freeze',
    kanji: '凍',
    Rōmaji: 'Koo',
    appeardManga: '',
    appeardAnime: '33',
    clowCard: 'https://i.ibb.co/7KqPsn2/Hielo.jpg',
    sakuraCard: 'https://i.ibb.co/txQPBq6/Hielo-Sakura.jpg',
    meaning:
      'Simboliza la dificultad al avanzar, un bloqueo, o la parada de algo.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a84f13da2c60015bd6930',
    cardNumber: 37,
    spanishName: 'Fuego',
    englishName: 'The Firey',
    kanji: '火',
    Rōmaji: 'Hi',
    appeardManga: '23',
    appeardAnime: '35',
    clowCard: 'https://i.ibb.co/k8y5MGc/Fuego.jpg',
    sakuraCard: 'https://i.ibb.co/B6B1wHB/Fuego-Sakura.jpg',
    meaning:
      'Simboliza la creatividad, la creación, la fuerza de voluntad y el amor.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a85633da2c60015bd6931',
    cardNumber: 38,
    spanishName: 'Flecha',
    englishName: 'The Arrow',
    kanji: '矢',
    Rōmaji: 'Ya',
    appeardManga: '',
    appeardAnime: 'Movie n° 1',
    clowCard: 'https://i.ibb.co/8x77Jxw/Flecha.jpg',
    sakuraCard: 'https://i.ibb.co/BrtpnY6/Flecha-Sakura.jpg',
    meaning: ' Esta carta simboliza la precisión, la certeza, un objetivo.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a85cf3da2c60015bd6932',
    cardNumber: 39,
    spanishName: 'Burbujas',
    englishName: 'The Bubbles',
    kanji: '泡',
    Rōmaji: 'Awa',
    appeardManga: '',
    appeardAnime: '35/36',
    clowCard: 'https://i.ibb.co/jDBH1Nw/Burbujas.jpg',
    sakuraCard: 'https://i.ibb.co/8sQ5Yrg/Burbujas-Sakura.jpg',
    meaning: ' Simboliza la multitud, la unión, el camuflaje.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a86283da2c60015bd6933',
    cardNumber: 40,
    spanishName: 'Ola',
    englishName: 'The Wave',
    kanji: '波',
    Rōmaji: 'Nami',
    appeardManga: '',
    appeardAnime: '35/36',
    clowCard: 'https://i.ibb.co/9rt8KyL/Ola.jpg',
    sakuraCard: 'https://i.ibb.co/KzL7xPt/Ola-Sakura.jpg',
    meaning: ' Simboliza la adaptación, la comunicación, la expansión.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a86773da2c60015bd6934',
    cardNumber: 41,
    spanishName: 'Equilibrio',
    englishName: 'The Libra',
    kanji: '秤',
    Rōmaji: 'Hakari',
    appeardManga: '',
    appeardAnime: '35/36',
    clowCard: 'https://i.ibb.co/hySQgHY/Equilibrio.jpg',
    sakuraCard: 'https://i.ibb.co/vJ319Jt/Equilibrio-Sakura.jpg',
    meaning:
      'Simboliza la verdad, la justicia, el balance del bien y el mal, el equilibrio.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a86c73da2c60015bd6935',
    cardNumber: 42,
    spanishName: 'Atravesar',
    englishName: 'The Through',
    kanji: '抜',
    Rōmaji: 'Batsu',
    appeardManga: '',
    appeardAnime: '35/36',
    clowCard: 'https://i.ibb.co/8jk5q45/Atravesar.jpg',
    sakuraCard: 'https://i.ibb.co/KLPP4CK/Atravesar-Sakura.jpg',
    meaning: 'Simboliza el camino, el cambio.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a871b3da2c60015bd6936',
    cardNumber: 43,
    spanishName: 'Nieve',
    englishName: 'The Snow',
    kanji: '雪',
    Rōmaji: 'Yuki',
    appeardManga: '',
    appeardAnime: '36',
    clowCard: 'https://i.ibb.co/XzZTfxN/Nieve.jpg',
    sakuraCard: 'https://i.ibb.co/pbDdzt1/Nieve-Sakura.jpg',
    meaning: 'Simboliza el bloqueo, la inmovilidad y el fin de los problemas.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a876b3da2c60015bd6937',
    cardNumber: 44,
    spanishName: 'Voz',
    englishName: 'The Voice',
    kanji: '声',
    Rōmaji: 'Koe',
    appeardManga: '',
    appeardAnime: '37',
    clowCard: 'https://i.ibb.co/B3N6Cxs/Voz.jpg',
    sakuraCard: 'https://i.ibb.co/dMdGb3n/Voz-Sakura.jpg',
    meaning: 'Simboliza la autoridad, la convicción.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a87dc3da2c60015bd6938',
    cardNumber: 45,
    spanishName: 'Candado',
    englishName: 'The Lock',
    kanji: '錠',
    Rōmaji: 'Joe',
    appeardManga: '',
    appeardAnime: '38',
    clowCard: 'https://i.ibb.co/1rMcDq9/Candado.jpg',
    sakuraCard: 'https://i.ibb.co/tc0kMqW/Candado-Sakura.jpg',
    meaning: ' Simboliza la soledad, la ignorancia, el misterio.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a883e3da2c60015bd6939',
    cardNumber: 46,
    spanishName: 'Nube',
    englishName: 'The Cloud',
    kanji: '雲',
    Rōmaji: 'Kumo',
    appeardManga: '',
    appeardAnime: '39',
    clowCard: 'https://i.ibb.co/YydjPX0/Nube.jpg',
    sakuraCard: 'https://i.ibb.co/wh7w3kG/Nube-Sakura.jpg',
    meaning: 'Esta carta simboliza incertidumbre.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a88853da2c60015bd693a',
    cardNumber: 47,
    spanishName: 'Sueño',
    englishName: 'The Dream',
    kanji: '夢',
    Rōmaji: 'Yume',
    appeardManga: '',
    appeardAnime: '40',
    clowCard: 'https://i.ibb.co/RYqzvQ2/Sue-o.jpg',
    sakuraCard: 'https://i.ibb.co/qgCj1mQ/Sue-o-Sakura.jpg',
    meaning: ' Simboliza el futuro, la adivinación, los sueños premonitorios.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a88df3da2c60015bd693b',
    cardNumber: 48,
    spanishName: 'Arena',
    englishName: 'The Sand',
    kanji: '砂',
    Rōmaji: 'Suna',
    appeardManga: '',
    appeardAnime: '41',
    clowCard: 'https://i.ibb.co/dK9q5Np/Arena.jpg',
    sakuraCard: 'https://i.ibb.co/L8KtZjv/Arena-Sakura.jpg',
    meaning: 'Simboliza la seguridad y la tranquilidad.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a89413da2c60015bd693c',
    cardNumber: 49,
    spanishName: 'Oscuridad',
    englishName: 'The Dark',
    kanji: '闇',
    Rōmaji: 'Yami',
    appeardManga: '21',
    appeardAnime: '42',
    clowCard: 'https://i.ibb.co/wWcWD0n/Oscuridad.jpg',
    sakuraCard: 'https://i.ibb.co/QXgNZxr/Oscuridad-Sakura.jpg',
    meaning: 'Simboliza lo oculto, lo que aún está por descubrir, la ventaja.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a89a93da2c60015bd693d',
    cardNumber: 50,
    spanishName: 'Luz',
    englishName: 'The Light',
    kanji: '光',
    Rōmaji: 'Hikari',
    appeardManga: '21',
    appeardAnime: '42',
    clowCard: 'https://i.ibb.co/CvvsjCJ/Luz.jpg',
    sakuraCard: 'https://i.ibb.co/fp4CYWd/Luz-Sakura.jpg',
    meaning: 'Simboliza la claridad, la revelación, un futuro brillante.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a8a553da2c60015bd693f',
    cardNumber: 52,
    spanishName: 'Tierra',
    englishName: 'The Earthy',
    kanji: '地',
    Rōmaji: 'Chi',
    appeardManga: '24',
    appeardAnime: '45',
    clowCard: 'https://i.ibb.co/cvJHXG4/Tierra.jpg',
    sakuraCard: 'https://i.ibb.co/1nd4cL8/Tierra-Sakura.jpg',
    meaning: 'Simboliza la solidez, la sujeción y la vida.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a8b423da2c60015bd6941',
    cardNumber: 51,
    spanishName: 'Gemelos',
    englishName: 'The Twin',
    kanji: '双',
    Rōmaji: 'Sō',
    appeardManga: '',
    appeardAnime: '43',
    clowCard: 'https://i.ibb.co/NVc0wX3/Gemelos.jpg',
    sakuraCard: 'https://i.ibb.co/MBSwTL4/Gemelos-Sakura.jpg',
    meaning: ' Simbolizan la dualidad, la compañía, la multiplicación.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  },
  {
    _id: '603a8c063da2c60015bd6942',
    cardNumber: 54,
    spanishName: 'La Nada',
    englishName: 'The Nothing',
    kanji: '無',
    Rōmaji: 'Mu',
    appeardManga: '',
    appeardAnime: 'Movie n° 2',
    clowCard: 'https://i.ibb.co/gPXkCJZ/Nada.jpg',
    sakuraCard: 'https://i.ibb.co/zG7fpxp/Nada-Sakura.jpg',
    meaning: 'Simboliza el espacio vacío, la nada, lo negativo.',
    __v: 0,
    cardsReverse: {
      clowReverse: 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg',
      sakuraReverse: 'https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg'
    }
  }
]

export default cartas
