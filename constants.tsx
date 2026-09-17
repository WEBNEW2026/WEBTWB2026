
import React from 'react';
import { Villa, MenuItem, ActivityCategory, Offer, Experience, Package, Translation, Review } from './types';

export const TRANSLATIONS: Translation = {
  heroHeadline: {
    id: 'KEMBALI KE ALAM YANG SESUNGGUHNYA',
    en: 'CLAIM YOUR MOUNTAIN SANCTUARY',
    zh: '专属山林度假胜地',
    de: 'IHR ZUFLUCHTSORT IN DEN BERGEN',
      ja: "山の保護区を主張しましょう",
      fr: "RÉCLAMEZ VOTRE SANCTUAIRE DE MONTAGNE",
      ko: "산악 보호구역을 확보하세요"
},
  heroSub: {
    id: 'Hanya 2 Jam dari Jakarta. Sebuah pelarian eksklusif di Gunung Puntang.',
    en: 'Only 2 Hours from Jakarta. An exclusive escape in Mount Puntang.',
    zh: '距离雅加达仅两小时，在纯正奢华中寻找宁静',
    de: 'Nur 2 Stunden von Jakarta entfernt. Ein exklusiver R�ckzugsort am Mount Puntang.',
      fr: "À seulement 2 heures de Jakarta. Une escapade exclusive au Mont Puntang.",
      ko: "자카르타에서 단 2시간 거리. 푼탕 산에서의 특별한 탈출.",
      ja: "ジャカルタからわずか2時間。プンタン山での特別な休暇。"
},
  introText: {
    id: 'Setiap sudut Bougenville dirancang untuk mendekatkan Anda dengan alam, keluarga, dan diri sendiri. Temukan kemewahan autentik di tengah hutan pinus purba.',
    en: 'Every corner of Bougenville is designed to bring you closer to nature, family, and yourself. Discover authentic luxury amidst the ancient pine forest.',
    zh: 'Bougenville 的每一个角落都旨在让您更接近自然、家人和自我。在Puntang山脚下的古老松林中发现真正的奢华。',
    de: 'Jeder Winkel von Bougenville ist darauf ausgelegt, Sie der Natur, Ihrer Familie und sich selbst n�her zu bringen. Entdecken Sie authentischen Luxus inmitten des alten Kiefernwaldes.',
      fr: "Chaque recoin de Bougenville est conçu pour vous rapprocher de la nature, de la famille et de vous-même. Découvrez le luxe authentique au milieu de la pinède ancienne.",
      ko: "Bougenville의 모든 곳은 자연, 가족, 자신에게 더 가까이 다가갈 수 있도록 설계되었습니다. 고대 소나무 숲 속에서 진정한 럭셔리함을 느껴보세요.",
      ja: "ブーゲンビルのあらゆる場所は、自然、家族、そして自分自身に近づけるようにデザインされています。古代の松林の中で本物の贅沢を発見してください。"
},
  historyTitle: {
    id: 'Warisan Nagara Puntang',
    en: 'The Heritage of Nagara Puntang',
    zh: '纳加拉Puntang的遗产',
    de: 'Das Erbe von Nagara Puntang',
      ja: "ナガラ プンタンの遺産",
      ko: "나가라 푼탕의 유산",
      fr: "L'héritage de Nagara Puntang"
},
  historyDesc: {
    id: 'Berabad lalu, kerajaan "Nagara Puntang" berdiri megah di tanah ini. Kami menjaga semangat tersebut melalui arsitektur yang menghormati alam dan keramahtamahan Sunda yang tulus.',
    en: 'Centuries ago, the "Nagara Puntang" kingdom stood majestically on this land. We preserve that spirit through nature-respecting architecture and genuine Sundanese hospitality.',
    zh: '?????,�?????�????????????? ?????????????????????????????',
    de: 'Vor Jahrhunderten stand das K�nigreich "Nagara Puntang" majest�tisch auf diesem Land. Wir bewahren diesen Geist durch naturverbundene Architektur und echte sundanesische Gastfreundschaft.',
      fr: "Il y a des siècles, le royaume « Nagara Puntang » se dressait majestueusement sur ces terres. Nous préservons cet esprit grâce à une architecture respectueuse de la nature et à une véritable hospitalité sundanaise.",
      ja: "何世紀も前、「ナガラ プンタン」王国はこの地に堂々と建っていました。私たちは自然を尊重した建築と真のスンダ式おもてなしを通じてその精神を守り続けています。",
      ko: "수세기 전, \"나가라 푼탕\" 왕국이 이 땅에 위엄있게 서 있었습니다. 우리는 자연을 존중하는 건축과 진정한 순다식 환대를 통해 그 정신을 보존합니다."
},
  ctaBook: {
    id: 'RESERVASI SEKARANG',
    en: 'RESERVE YOUR STAY',
    zh: '立即预订',
    de: 'JETZT BUCHEN',
      fr: "RÉSERVEZ VOTRE SÉJOUR",
      ko: "숙박을 예약하세요",
      ja: "宿泊を予約する"
},
  ctaChat: {
    id: 'CHAT CONCIERGE',
    en: 'CHAT CONCIERGE',
    zh: '联系管家',
    de: 'CONCIERGE CHAT',
      ko: "채팅 컨시어지",
      fr: "CONCIERGERIE DE CHAT",
      ja: "チャットコンシェルジュ"
},
  villasTitle: {
    id: 'Koleksi Villa Privat',
    en: 'Private Villa Collection',
    zh: '私人别墅系列',
    de: 'Private Villenkollektion',
      fr: "Collection de villas privées",
      ko: "프라이빗 빌라 컬렉션",
      ja: "プライベートヴィラコレクション"
},
  villasSub: {
    id: 'Ruang pribadi untuk menciptakan momen berkesan',
    en: 'Private spaces to create memorable moments',
    zh: '创造难忘时刻的私人空间',
    de: 'Private R�ume f�r unvergessliche Momente',
      ko: "기억에 남는 순간을 만들어주는 프라이빗한 공간",
      fr: "Des espaces privés pour créer des moments mémorables",
      ja: "思い出に残るひとときを演出するプライベート空間"
},
  experiencesTitle: {
    id: 'Curated Mountain Experiences',
    en: 'Curated Mountain Experiences',
    zh: '精选山地体验',
    de: 'Kuratierte Bergerlebnisse',
      ko: "엄선된 산악 체험",
      fr: "Expériences de montagne organisées",
      ja: "厳選された山岳体験"
},
  startFrom: {
    id: 'Mulai dari',
    en: 'Starts from',
    zh: '起价',
    de: 'Ab',
      fr: "Commence à partir de",
      ko: "다음에서 시작",
      ja: "から始まります"
},
  perNight: {
    id: '/malam',
    en: '/night',
    zh: '/ 晚',
    de: '/Nacht',
      fr: "/nuit",
      ja: "/夜",
      ko: "/밤"
},
  bookNow: {
    id: 'Book Now',
    en: 'Book Now',
    zh: '立即预订',
    de: 'Jetzt buchen',
      ko: "지금 예약하세요",
      ja: "今すぐ予約する",
      fr: "Réservez maintenant"
},
  learnMore: {
    id: 'Discover More',
    en: 'Discover More',
    zh: '了解更多',
    de: 'Mehr entdecken',
      ko: "더 알아보기",
      ja: "もっと発見する",
      fr: "En savoir plus"
}
};

// ===================================================================
// LUXURY VILLAS - FOREST HOUSE & MOOI LAKE
// ===================================================================

export const FOREST_HOUSE_VILLAS: Villa[] = [
  {
    id: 'forest-house',
    name: 'Forest House Puntang',
    cluster: 'Forest House Puntang',
    capacity: '13-16 orang',
    bedrooms: 5,
    area: 450,
    toilets: 4,
    price: 25000000,
    priceWeekday: 25000000,
    priceWeekend: 30000000,
    priceHighSeason: 35000000,
    category: 'luxury',
    badge: 'Most Exclusive',
    features: ['Private Waterfall', 'Garden & Pond', 'Gazebo', 'Full Board Meals', 'Premium Service'],
    image: '/images/villas/forest-house/hero.jpg',
    images: [
      '/images/villas/forest-house/hero.jpg',
      '/images/villas/forest-house/DSC00110---CopyWEB.jpg',
      '/images/villas/forest-house/DSC00322WEB.jpg',
      '/images/villas/forest-house/DSC00370WEB.jpg',
      '/images/villas/forest-house/DSC08988WEB.jpg',
      '/images/villas/forest-house/DSC09718WEB.jpg',
      '/images/villas/forest-house/DSC09744WEB.jpg',
      '/images/villas/forest-house/DSC09885WEB.jpg',
      '/images/villas/forest-house/DSC09977.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, label: { id: 'Kamar Utama', en: 'Master Bedroom', zh: '主卧室', de: 'Hauptschlafzimmer', fr: 'Chambre Principale', ja: 'マスターベッドルーム', ko: '마스터 침실' }, beds: '1 king bed (180x200 cm)' },
      { room: 2, beds: '1 king bed (180x200 cm) + 1 trundle bed (2 orang)' },
      { room: 3, beds: '1 queen bed (160x200 cm) + 1 trundle bed (2 orang)' },
      { room: 4, beds: '1 queen bed (160x200 cm) + 1 trundle bed (2 orang)' },
      { room: 5, beds: '1 queen bed (160x200 cm)' }
    ],
    facilities: {
      room: [
        { id: '1 Ruang keluarga', en: '1 Family living room', zh: '1间家庭客厅', de: '1 Familienwohnzimmer',
            fr: "1 Salon familial",
            ko: "1 가족 거실",
            ja: "1 ファミリーリビングルーム"
        },
        { id: '1 Ruang tamu formal', en: '1 Formal living room', zh: '1间正式客厅', de: '1 Formales Wohnzimmer',
            fr: "1 salon formel",
            ja: "1 フォーマルなリビングルーム",
            ko: "1 격식 있는 거실"
        },
        { id: '1 Ruang makan formal', en: '1 Formal dining room', zh: '1间正式餐厅', de: '1 Formales Esszimmer',
            ja: "1 フォーマルなダイニングルーム",
            fr: "1 salle à manger formelle",
            ko: "1 격식을 갖춘 다이닝룸"
        },
        { id: '1 Ruang makan outdoor', en: '1 Outdoor dining room', zh: '1个户外用餐区', de: '1 Außen-Esszimmer',
            ja: "1 屋外ダイニングルーム",
            ko: "1 야외 식당",
            fr: "1 Salle à manger extérieure"
        },
        { id: '1 Dapur bersih', en: '1 Kitchen', zh: '1间厨房', de: '1 Küche',
            ko: "1 주방",
            ja: "1 キッチン",
            fr: "1 cuisine"
        },
        { id: '1 Teras luar di kamar utama', en: '1 Outdoor terrace in master bedroom', zh: '主卧1个户外露台', de: '1 Außenterrasse im Hauptschlafzimmer',
            ja: "マスターベッドルームに屋外テラス1つ",
            fr: "1 Terrasse extérieure dans la chambre principale",
            ko: "1 마스터 침실의 야외 테라스"
        },
        { id: '1 Teras luar sisi sungai', en: '1 Riverside outdoor terrace', zh: '1个河畔户外露台', de: '1 Außenterrasse am Flussufer',
            fr: "1 terrasse extérieure au bord de la rivière",
            ja: "1 リバーサイド屋外テラス",
            ko: "1 강변 야외 테라스"
        },
        { id: '1 Kolam ikan', en: '1 Fish pond', zh: '1个鱼塘', de: '1 Fischteich',
            fr: "1 étang à poissons",
            ko: "1 물고기 연못",
            ja: "1 魚のいる池"
        },
        { id: '1 Air terjun & taman', en: '1 Waterfall & garden', zh: '1个瀑布和花园', de: '1 Wasserfall & Garten',
            ko: "1 폭포와 정원",
            fr: "1 Cascade & jardin",
            ja: "1 滝と庭園"
        },
        { id: '1 Gazebo', en: '1 Gazebo', zh: '1个凉亭', de: '1 Gazebo',
            ko: "1 전망대",
            fr: "1 belvédère",
            ja: "1 ガゼボ"
        }
      ],
      amenities: [
        { id: 'Perlengkapan & alat mandi', en: 'Toiletries & bath supplies', zh: '洗浴用品', de: 'Toilettenartikel & Badezubehör',
            ja: "バスアメニティ＆バス用品",
            ko: "세면도구 및 목욕용품",
            fr: "Articles de toilette et produits de bain"
        },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank',
            fr: "Réfrigérateur",
            ja: "冷蔵庫",
            ko: "냉장고"
        },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle',
            ko: "마이크로파",
            ja: "電子レンジ",
            fr: "Micro-ondes"
        },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            ja: "ウォーターサーバー",
            ko: "정수기",
            fr: "Distributeur d'eau"
        },
        { id: 'Oven', en: 'Oven', zh: '烤箱', de: 'Ofen',
            fr: "Four",
            ja: "オーブン",
            ko: "오븐"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            fr: "Dîner",
            ja: "夕食"
        },
        { id: 'Snacks premium', en: 'Premium snacks', zh: '优质小吃', de: 'Premium-Snacks',
            fr: "Collations haut de gamme",
            ko: "프리미엄 스낵",
            ja: "プレミアムスナック"
        },
        { id: 'Kopi, teh, dan gula', en: 'Coffee, tea, and sugar', zh: '咖啡、茶和糖', de: 'Kaffee, Tee und Zucker',
            ja: "コーヒー、紅茶、砂糖",
            ko: "커피, 차, 설탕",
            fr: "Café, thé et sucre"
        }
      ],
      natural: [
        { id: 'Air terjun & taman privat', en: 'Private Waterfall & Garden', zh: '私人瀑布和花园', de: 'Privater Wasserfall & Garten',
            ko: "개인 폭포 및 정원",
            fr: "Cascade et jardin privés",
            ja: "プライベートな滝と庭園"
        },
        { id: 'Taman indah & kolam alam', en: 'Beautiful Garden & Nature Pool', zh: '美丽花园和自然水池', de: 'Schöner Garten & Naturbecken',
            ko: "아름다운 정원과 자연 수영장",
            fr: "Beau jardin et piscine naturelle",
            ja: "美しい庭園と自然のプール"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ko: "전망대",
            ja: "ガゼボ"
        },
        { id: 'Kids playground', en: 'Kids playground', zh: '儿童游乐场', de: 'Kinderspielplatz',
            fr: "Aire de jeux pour enfants",
            ko: "어린이 놀이터",
            ja: "子供の遊び場"
        },
        { id: 'Trekking/ hiking', en: 'Trekking/ hiking', zh: '徒步旅行', de: 'Trekking / Wandern',
            ko: "트레킹/하이킹",
            fr: "Trekking/randonnée",
            ja: "トレッキング/ハイキング"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            fr: "Passerelle",
            ko: "스카이워크"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '需爬楼梯（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)',
            ko: "계단 이용(주차장에서 약 300m)",
            ja: "階段アクセス（駐車場より約300m）",
            fr: "Accès par escaliers (à environ 300 m du parking)"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung (melalui Tol Soroja dan keluar di Exit Tol Soreang, kemudian mengambil arah Banjaran-Pangalengan).', en: 'Estimated travel time about 1-2 hours from Bandung city center (via Soroja Toll and exit at Soreang Toll Exit, then take direction to Banjaran-Pangalengan).', zh: '预计从万隆市中心出发约需1-2小时（经Soroja收费站，在Soreang收费站出口下，然后往Banjaran-Pangalengan方向行驶）。', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung (über Soroja-Maut und Ausfahrt Soreang, dann Richtung Banjaran-Pangalengan).',
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung (via le péage de Soroja et la sortie à péage de Soreang, puis prendre la direction de Banjaran-Pangalengan).",
            ko: "반둥 시내 중심에서 약 1~2시간 정도 소요됩니다(소로자 통행료를 경유하여 소렝 통행료 출구로 나온 후 반자란-팡갈렌간 방향으로 이동).",
            ja: "バンドン市内中心部からの推定所要時間は約 1 ～ 2 時間です (ソロジャ料金所を経由し、ソレアン料金所出口で出て、バンジャラン-パンガレンガン方面に進みます)。"
        },
        { id: 'Harga belum termasuk Tax 10%', en: 'Price excludes 10% Tax', zh: '价格不含10%税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は10%税抜です"
        }
      ]
    },
    description: {
      id: 'Villa privat super mewah dengan pemandangan hutan langsung. Kapasitas 13-16 orang dengan fasilitas air terjun & taman privat.',
      en: 'Super luxurious private villa with direct forest views. Capacity for 13-16 people with private waterfall & garden facilities.',
      zh: '超豪华私人别墅，可直接欣赏森林美景。 可容纳13-16人，配有私人瀑布和花园设施。',
      de: 'Super luxuriöse Privatvilla mit direktem Waldblick. Kapazität für 13-16 Personen mit privatem Wasserfall & Gartenanlagen.',
        ja: "森の景色を直接望む超豪華なプライベートヴィラ。専用の滝と庭園施設を備えた 13 ～ 16 名様まで収容可能。",
        ko: "직접 숲의 전망을 감상할 수 있는 매우 고급스러운 전용 빌라입니다. 전용 폭포와 정원 시설을 갖추고 13~16명을 수용할 수 있습니다.",
        fr: "Villa privée super luxueuse avec vue directe sur la forêt. Capacité de 13 à 16 personnes avec cascade privée et jardin."
    },
    longDescription: {
      id: 'Forest House Puntang, villa privat super mewah dengan pemandangan hutan langsung yang berada di dalam kawasan Taman Wisata Bougenville. Luas villa 450 m2. Termasuk sarapan, makan malam, snacks premium, kopi, teh, dan gula.',
      en: 'Forest House Puntang, a super luxurious private villa with direct forest views located within the Taman Wisata Bougenville area. Villa area 450 m2. Includes breakfast, dinner, premium snacks, coffee, tea, and sugar.',
      zh: 'Forest House Puntang，位于 Taman Wisata Bougenville 区域内的超豪华私人别墅，可直接欣赏森林美景。 别墅面积450平方米。 包括早餐、晚餐、优质小吃、咖啡、茶和糖。',
      de: 'Forest House Puntang, eine super luxuriöse Privatvilla mit direktem Waldblick im Gebiet Taman Wisata Bougenville. Villengröße 450 m2. Inklusive Frühstück, Abendessen, Premium-Snacks, Kaffee, Tee und Zucker.',
        ko: "Taman Wisata Bougenville 지역에 위치한 숲의 직접적인 전망을 갖춘 초호화 프라이빗 빌라인 Forest House Puntang입니다. 빌라 면적 450m2. 아침, 저녁, 프리미엄 스낵, 커피, 차, 설탕이 포함되어 있습니다.",
        fr: "Forest House Puntang, une villa privée super luxueuse avec vue directe sur la forêt située dans la région de Taman Wisata Bougenville. Superficie de la villa 450 m2. Comprend le petit-déjeuner, le dîner, des collations haut de gamme, du café, du thé et du sucre.",
        ja: "Forest House Puntangは、タマン・ウィサタ・ブーゲンビルエリア内に位置し、森の景色を直接望む超豪華なプライベートヴィラです。別荘面積450㎡。朝食、夕食、プレミアムスナック、コーヒー、紅茶、砂糖が含まれます。"
    }
  }
];

export const MOOI_LAKE_VILLAS: Villa[] = [
  {
    id: 'mooi-lake',
    name: 'Mooi Lake House Puntang',
    cluster: 'Mooi Lake House Puntang',
    capacity: '9 orang',
    bedrooms: 3,
    area: 116.8,
    toilets: 2,
    price: 12500000,
    priceWeekday: 12500000,
    priceWeekend: 15000000,
    priceHighSeason: 17500000,
    category: 'luxury',
    badge: 'Lakeside Living',
    features: ['Private Lake & Boat', 'Full Board Meals', 'Lakeside Terrace'],

    image: '/images/mlh-hero.webp',
    images: [
      '/images/mlh-hero.webp',
      '/images/villas/mooi-lake/awb.web.jpg',
      '/images/villas/mooi-lake/blue-room1web.jpg',
      '/images/villas/mooi-lake/DSC06182-01WEB.jpg',
      '/images/villas/mooi-lake/DSC06382-01WEB.jpg',
      '/images/villas/mooi-lake/DSC06446-01WEB.jpg',
      '/images/villas/mooi-lake/livingroom2.WEB.jpg',
      '/images/villas/mooi-lake/pink-bedroom1WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (king bed)' },
      { room: 2, beds: 'Kids bedroom 1 (3 single bed)' },
      { room: 3, beds: 'Kids bedroom 2 (4 single bed)' }
    ],
    facilities: {
      room: [
        { id: '1 Ruang keluarga', en: '1 Living room', zh: '1间客厅', de: '1 Wohnzimmer',
            ko: "1 거실",
            ja: "1 リビングルーム",
            fr: "1 Salon"
        },
        { id: '1 Dapur bersih', en: '1 Clean kitchen', zh: '1间厨房', de: '1 Saubere Küche',
            ko: "1 깨끗한 주방",
            fr: "1 Cuisine propre",
            ja: "1 清潔なキッチン"
        },
        { id: 'Meja makan', en: 'Dining table', zh: '餐桌', de: 'Esstisch',
            ko: "식탁",
            fr: "Table à manger",
            ja: "ダイニングテーブル"
        },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse',
            fr: "Terrasse",
            ko: "테라스",
            ja: "テラス"
        }
      ],
      amenities: [
        { id: '2 Kamar mandi & toilet', en: '2 Bathrooms & toilets', zh: '2个浴室和卫生间', de: '2 Badezimmer & Toiletten',
            ja: "2 バスルームとトイレ",
            fr: "2 Salles de bains et toilettes",
            ko: "2 욕실 및 화장실"
        },
        { id: 'Perlengkapan & alat mandi', en: 'Toiletries & bath supplies', zh: '洗浴用品', de: 'Toilettenartikel & Badezubehör',
            ja: "バスアメニティ＆バス用品",
            ko: "세면도구 및 목욕용품",
            fr: "Articles de toilette et produits de bain"
        },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank',
            fr: "Réfrigérateur",
            ko: "냉장고",
            ja: "冷蔵庫"
        },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle',
            ko: "마이크로파",
            ja: "電子レンジ",
            fr: "Micro-ondes"
        },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            ko: "정수기",
            fr: "Distributeur d'eau",
            ja: "ウォーターサーバー"
        },
        { id: 'Oven', en: 'Oven', zh: '烤箱', de: 'Ofen',
            ja: "オーブン",
            fr: "Four",
            ko: "오븐"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ko: "아침",
            ja: "朝食"
        },

        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            ja: "夕食",
            fr: "Dîner"
        },
        { id: 'Cemilan premium', en: 'Premium snacks', zh: '优质小吃', de: 'Premium-Snacks',
            ja: "プレミアムスナック",
            fr: "Collations haut de gamme",
            ko: "프리미엄 스낵"
        }
      ],
      natural: [
        { id: 'Danau & kano privat', en: 'Private lake & canoe', zh: '私人湖泊和独木舟', de: 'Privater See & Kanu',
            ko: "전용 호수 및 카누",
            fr: "Lac privé et canot",
            ja: "プライベート湖とカヌー"
        },
        { id: 'Kids playground', en: 'Kids playground', zh: '儿童游乐场', de: 'Kinderspielplatz',
            fr: "Aire de jeux pour enfants",
            ja: "子供の遊び場",
            ko: "어린이 놀이터"
        },
        { id: 'Trekking/ hiking', en: 'Trekking/hiking', zh: '徒步/远足', de: 'Trekking / Wandern',
            fr: "Trekking/randonnée",
            ko: "트레킹/하이킹",
            ja: "トレッキング/ハイキング"
        },
        { id: 'Taman indah & kolam alam', en: 'Beautiful Garden & Nature Pool', zh: '美丽花园和自然水池', de: 'Schöner Garten & Naturbecken',
            ja: "美しい庭園と自然のプール",
            fr: "Beau jardin et piscine naturelle",
            ko: "아름다운 정원과 자연 수영장"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ko: "시그르강",
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            fr: "Passerelle",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ja: "鳥籠橋",
            ko: "새장 다리",
            fr: "Pont cage à oiseaux"
        },
        { id: 'Taman bunga', en: 'Flower garden', zh: '花园', de: 'Blumengarten',
            ko: "꽃밭",
            ja: "花畑",
            fr: "Jardin fleuri"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300m from parking area)', zh: '楼梯通道（距停车场约300米）', de: 'Treppenzugang (ca. 300m vom Parkplatz)',
            ko: "계단 이용(주차장에서 약 300m)",
            fr: "Accès par escaliers (à environ 300 m du parking)",
            ja: "階段アクセス（駐車場より約300m）"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung (melalui Tol Soroja dan keluar di Exit Tol Soreang, kemudian mengambil arah Banjaran-Pangalengan).', en: 'Estimated travel time about 1-2 hours from Bandung city center (via Soroja Toll and exit at Soreang Toll Exit, then take direction to Banjaran-Pangalengan).', zh: '?????????1-2??(??Soroja???,?Soreang??????,????Banjaran-Pangalengan??)?', de: 'Gesch�tzte Fahrzeit ca. 1-2 Stunden vom Stadtzentrum Bandung (�ber Soroja Maut und Ausfahrt bei Soreang Maut-Ausfahrt, dann Richtung Banjaran-Pangalengan).',
            ko: "반둥 시내 중심에서 약 1~2시간 정도 소요됩니다(소로자 통행료를 경유하여 소렝 통행료 출구로 나온 후 반자란-팡갈렌간 방향으로 이동).",
            ja: "バンドン市内中心部からの推定所要時間は約 1 ～ 2 時間です (ソロジャ料金所を経由し、ソレアン料金所出口で出て、バンジャラン-パンガレンガン方面に進みます)。",
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung (via le péage de Soroja et la sortie à péage de Soreang, puis prendre la direction de Banjaran-Pangalengan)."
        },
        { id: 'Harga belum termasuk Tax 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: { id: 'Villa mewah privat dengan pemandangan danau langsung. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap.', en: 'Luxurious private villa with direct lake views. Capacity for 9 people, includes complete stay facilities.', zh: '豪华私人别墅，可直接欣赏湖景。 可容纳9人，包含完整的住宿设施。', de: 'Luxuriöse Privatvilla mit direktem Seeblick. Kapazität für 9 Personen, inklusive kompletter Aufenthaltsmöglichkeiten.',
        ko: "직접적인 호수 전망을 갖춘 고급스러운 전용 빌라입니다. 9명을 수용할 수 있으며 완벽한 숙박 시설이 포함되어 있습니다.",
        fr: "Luxueuse villa privée avec vue directe sur le lac. Capacité de 9 personnes, comprend des installations de séjour complètes.",
        ja: "湖の景色を直接望む豪華なプライベートヴィラ。収容人数は9名で、完全な滞在設備が含まれます。"
    },
    longDescription: { id: 'Villa mewah privat dengan pemandangan danau langsung, berada di dalam kawasan Taman Wisata Bougenville. Kapasitas untuk 9 orang, sudah termasuk fasilitas menginap lengkap diantaranya sarapan dan makan malam plus cemilan premium.', en: 'Luxurious private villa with direct lake views, located within the Taman Wisata Bougenville area. Capacity for 9 people, includes complete stay facilities including breakfast and dinner plus premium snacks.', zh: '豪华私人别墅，可直接欣赏湖景，位于Taman Wisata Bougenville区域内。可容纳9人，包含完整的住宿设施，包括早餐、晚餐和优质小吃。', de: 'Luxuriöse Privatvilla mit direktem Seeblick im Gebiet Taman Wisata Bougenville. Kapazität für 9 Personen, inklusive kompletter Aufenthaltsmöglichkeiten wie Frühstück, Mittag- und Abendessen sowie Premium-Snacks.',
        ko: "Taman Wisata Bougenville 지역에 위치한 호수 전망을 직접 감상할 수 있는 고급스러운 전용 빌라입니다. 9명을 수용할 수 있으며 아침, 저녁 식사와 프리미엄 스낵을 포함한 완벽한 숙박 시설이 포함됩니다.",
        ja: "タマン・ウィサタ・ブーゲンビルエリア内に位置する、湖を直接望む豪華なプライベートヴィラ。定員は9名で、朝食と夕食と高級スナックを含む完全な滞在設備が含まれます。",
        fr: "Luxueuse villa privée avec vue directe sur le lac, située dans le quartier de Taman Wisata Bougenville. Capacité de 9 personnes, comprend des installations de séjour complètes comprenant le petit-déjeuner et le dîner ainsi que des collations haut de gamme."
    }
  }
];

// ===================================================================
// EMERALD VILLAS
// ===================================================================

export const EMERALD_VILLAS: Villa[] = [
  {
    id: 'emerald-01',
    name: 'Emerald Villa 01 (Unit Bawah)',
    localizedName: {
      id: 'Emerald Villa 01 (Unit Bawah)',
      en: 'Emerald Villa 01 (Lower Unit)',
      zh: 'Emerald Villa 01 (下层单元)',
      de: 'Emerald Villa 01 (Untere Einheit)',
      ko: 'Emerald Villa 01 (하층 유닛)',
      ja: 'Emerald Villa 01 (下層ユニット)',
      fr: 'Emerald Villa 01 (Unité Inférieure)'
    },
    cluster: 'Emerald Villas Puntang',
    capacity: '7 orang',
    bedrooms: 2,
    area: 135.33,
    toilets: 2,
    price: 8750000,
    priceWeekday: 8750000,
    priceWeekend: 10000000,
    priceHighSeason: 12000000,
    category: 'luxury',
    features: ['American Farmhouse', 'Garden Access', 'Patio'],
    image: '/images/optimized/villas/emerald-01/hero.webp',
    images: [
      '/images/optimized/villas/emerald-01/hero.webp',
      '/images/villas/emerald-01/DSC04218WEB.jpg',
      '/images/villas/emerald-01/DSC03984WEB.jpg',
      '/images/villas/emerald-01/DSC04104WEB.jpg',
      '/images/villas/emerald-01/DSC04151WEB.jpg',
      '/images/villas/emerald-01/DSC04186WEB.jpg',
      '/images/villas/emerald-01/DSC04416WEB.jpg',
      '/images/villas/emerald-01/DSC04902WEB.jpg',
      '/images/villas/emerald-01/DSC04918.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 tempat tidur King (180 x 200 cm) dan 1 tempat tidur Single (90 x 200 cm)' },
      { room: 2, beds: '2 tempat tidur Queen (160 x 200 cm) masing-masing' }
    ],
    facilities: {
      room: [
        { id: '2 kamar tidur', en: '2 Bedrooms', zh: '2间卧室', de: '2 Schlafzimmer',
            ko: "침실 2개",
            fr: "2 chambres",
            ja: "2ベッドルーム"
        },
        { id: '2 toilet', en: '2 Toilets', zh: '2个洗手间', de: '2 Toiletten',
            fr: "2 toilettes",
            ja: "トイレ2か所",
            ko: "화장실 2개"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            fr: "Chauffe-eau",
            ja: "給湯器"
        },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV',
            fr: "Télévision intelligente",
            ja: "スマートテレビ",
            ko: "스마트 TV"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            ja: "Wi-Fi",
            fr: "Wi-Fi",
            ko: "와이파이"
        },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank',
            ko: "냉장고",
            fr: "Réfrigérateur",
            ja: "冷蔵庫"
        },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle',
            ko: "마이크로파",
            fr: "Micro-ondes",
            ja: "電子レンジ"
        },
        { id: 'Mesin kopi', en: 'Coffee machine', zh: '咖啡机', de: 'Kaffeemaschine',
            ja: "コーヒーマシン",
            ko: "커피머신",
            fr: "Machine à café"
        },
        { id: 'Kompor listrik', en: 'Electric stove', zh: '电炉', de: 'Elektroherd',
            fr: "Cuisinière électrique",
            ko: "전기스토브",
            ja: "電気ストーブ"
        },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            fr: "Distributeur d'eau",
            ko: "정수기",
            ja: "ウォーターサーバー"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            fr: "Petit-déjeuner",
            ja: "朝食"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            ja: "ランチ",
            fr: "Déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            fr: "Dîner",
            ja: "夕食",
            ko: "저녁"
        },
        { id: 'Welcome fruits', en: 'Welcome fruits', zh: '迎宾水果', de: 'Begrüßungsfrüchte',
            ja: "ウェルカムフルーツ",
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue"
        },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser',
            ko: "광천수",
            fr: "Eau minérale",
            ja: "ミネラルウォーター"
        },
        { id: 'Kopi kapsul, teh, dan gula', en: 'Capsule coffee, tea, and sugar', zh: '胶囊咖啡、茶和糖', de: 'Kapselkaffee, Tee und Zucker',
            ko: "캡슐 커피, 차, 설탕",
            fr: "Capsules de café, thé et sucre",
            ja: "カプセルコーヒー、紅茶、砂糖"
        }
      ],
      natural: [
        { id: 'Playground', en: 'Playground', zh: '游乐场', de: 'Spielplatz',
            ko: "운동장",
            ja: "遊び場",
            fr: "Aire de jeux"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: '2 kolam renang umum', en: '2 Public swimming pools', zh: '2个公共游泳池', de: '2 Öffentliche Schwimmbäder',
            fr: "2 piscines publiques",
            ko: "2개의 공공 수영장",
            ja: "2 つの公共プール"
        },
        { id: 'Area bermain di sungai', en: 'River play area', zh: '河流戏水区', de: 'Flussspielbereich',
            ko: "강 놀이 공간",
            ja: "川遊びエリア",
            fr: "Aire de jeux en rivière"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak menyediakan dan/atau menggunakan ekstra bed', en: 'Does not provide and/or use extra bed', zh: '不提供和/或不使用加床', de: 'Kein Zustellbett verfügbar',
            ko: "엑스트라 베드를 제공 및/또는 사용하지 않습니다.",
            ja: "エキストラベッドの提供および/または使用はありません",
            fr: "Ne fournit pas et/ou n'utilise pas de lit d'appoint"
        },
        { id: 'Tidak dapat menampung kapasitas lebih dari 7 orang', en: 'Cannot accommodate more than 7 people', zh: '最多只能容纳7人', de: 'Kann nicht mehr als 7 Personen beherbergen',
            ko: "7명 이상 수용할 수 없습니다.",
            fr: "Ne peut pas accueillir plus de 7 personnes",
            ja: "7名以上は宿泊できません"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: { id: 'Villa bergaya American Farmhouse dengan akses langsung ke taman. Unit bawah yang nyaman untuk keluarga.', en: 'American Farmhouse style villa with direct garden access. Comfortable lower unit for families.', zh: '美式农舍风格别墅，可直接通往花园。适合家庭的舒适下层单元。', de: 'Villa im amerikanischen Farmhouse-Stil mit direktem Gartenzugang. Komfortable untere Einheit für Familien.',
        ko: "정원으로 직접 연결되는 미국 농가 스타일의 빌라입니다. 가족을 위한 편안한 하부 유닛.",
        fr: "Villa de style ferme américaine avec accès direct au jardin. Unité inférieure confortable pour les familles.",
        ja: "庭園に直接アクセスできるアメリカンファームハウススタイルのヴィラ。家族向けの快適な下部ユニット。"
    }
  },
  {
    id: 'emerald-02',
    name: 'Emerald Villa 02 (Unit Atas)',
    localizedName: {
      id: 'Emerald Villa 02 (Unit Atas)',
      en: 'Emerald Villa 02 (Upper Unit)',
      zh: 'Emerald Villa 02 (上层单元)',
      de: 'Emerald Villa 02 (Obere Einheit)',
      ko: 'Emerald Villa 02 (상층 유닛)',
      fr: 'Emerald Villa 02 (Unité Supérieure)',
      ja: 'Emerald Villa 02 (上層ユニット)'
    },
    cluster: 'Emerald Villas Puntang',
    capacity: '7 orang',
    bedrooms: 2,
    area: 134.67,
    toilets: 2,
    price: 8500000,
    priceWeekday: 8500000,
    priceWeekend: 9500000,
    priceHighSeason: 11000000,
    category: 'luxury',
    features: ['American Farmhouse', 'Mountain View', 'Balcony'],
    image: '/images/emerald-atas-hero.webp',
    images: [
      '/images/emerald-atas-hero.webp',
      '/images/villas/emerald-02/DSC04507WEB.jpg',
      '/images/villas/emerald-02/DSC04511WEB.jpg',
      '/images/villas/emerald-02/DSC04515WEB.jpg',
      '/images/villas/emerald-02/DSC04566WEB.jpg',
      '/images/villas/emerald-02/DSC04602WEB.jpg',
      '/images/villas/emerald-02/DSC04778WEB.jpg',
      '/images/villas/emerald-02/DSC04923WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 tempat tidur King (180 x 200 cm) dan 1 tempat tidur Single (90 x 200 cm)' },
      { room: 2, beds: '2 tempat tidur Queen (160 x 200 cm) masing-masing' }
    ],
    facilities: {
      room: [
        { id: '2 kamar tidur', en: '2 Bedrooms', zh: '2间卧室', de: '2 Schlafzimmer',
            fr: "2 chambres",
            ko: "침실 2개",
            ja: "2ベッドルーム"
        },
        { id: '2 toilet', en: '2 Toilets', zh: '2个洗手间', de: '2 Toiletten',
            fr: "2 toilettes",
            ja: "トイレ2か所",
            ko: "화장실 2개"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV',
            ko: "스마트 TV",
            fr: "Télévision intelligente",
            ja: "スマートテレビ"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ja: "Wi-Fi",
            ko: "와이파이"
        },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank',
            fr: "Réfrigérateur",
            ja: "冷蔵庫",
            ko: "냉장고"
        },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle',
            ja: "電子レンジ",
            ko: "마이크로파",
            fr: "Micro-ondes"
        },
        { id: 'Mesin kopi', en: 'Coffee machine', zh: '咖啡机', de: 'Kaffeemaschine',
            ko: "커피머신",
            ja: "コーヒーマシン",
            fr: "Machine à café"
        },
        { id: 'Kompor listrik', en: 'Electric stove', zh: '电炉', de: 'Elektroherd',
            fr: "Cuisinière électrique",
            ja: "電気ストーブ",
            ko: "전기스토브"
        },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            fr: "Distributeur d'eau",
            ja: "ウォーターサーバー",
            ko: "정수기"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ko: "아침",
            ja: "朝食"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ko: "점심",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            fr: "Dîner",
            ko: "저녁",
            ja: "夕食"
        },
        { id: 'Welcome fruits', en: 'Welcome fruits', zh: '迎宾水果', de: 'Begrüßungsfrüchte',
            fr: "Fruits de bienvenue",
            ja: "ウェルカムフルーツ",
            ko: "웰컴 과일"
        },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser',
            ja: "ミネラルウォーター",
            ko: "광천수",
            fr: "Eau minérale"
        },
        { id: 'Kopi kapsul, teh, dan gula', en: 'Capsule coffee, tea, and sugar', zh: '胶囊咖啡、茶和糖', de: 'Kapselkaffee, Tee und Zucker',
            fr: "Capsules de café, thé et sucre",
            ja: "カプセルコーヒー、紅茶、砂糖",
            ko: "캡슐 커피, 차, 설탕"
        }
      ],
      natural: [
        { id: 'Playground', en: 'Playground', zh: '游乐场', de: 'Spielplatz',
            ko: "운동장",
            fr: "Aire de jeux",
            ja: "遊び場"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            fr: "Jeu d'eau",
            ja: "水遊び"
        },
        { id: '2 kolam renang umum', en: '2 Public swimming pools', zh: '2个公共游泳池', de: '2 Öffentliche Schwimmbäder',
            ko: "2개의 공공 수영장",
            fr: "2 piscines publiques",
            ja: "2 つの公共プール"
        },
        { id: 'Area bermain di sungai', en: 'River play area', zh: '河流戏水区', de: 'Flussspielbereich',
            fr: "Aire de jeux en rivière",
            ja: "川遊びエリア",
            ko: "강 놀이 공간"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak menyediakan dan/atau menggunakan ekstra bed', en: 'Does not provide and/or use extra bed', zh: '不提供和/或不使用加床', de: 'Kein Zustellbett verfügbar',
            fr: "Ne fournit pas et/ou n'utilise pas de lit d'appoint",
            ko: "엑스트라 베드를 제공 및/또는 사용하지 않습니다.",
            ja: "エキストラベッドの提供および/または使用はありません"
        },
        { id: 'Tidak dapat menampung kapasitas lebih dari 7 orang', en: 'Cannot accommodate more than 7 people', zh: '最多只能容纳7人', de: 'Kann nicht mehr als 7 Personen beherbergen',
            ja: "7名以上は宿泊できません",
            ko: "7명 이상 수용할 수 없습니다.",
            fr: "Ne peut pas accueillir plus de 7 personnes"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: { id: 'Villa bergaya American Farmhouse dengan pemandangan pegunungan yang menakjubkan. Unit atas dengan balkon luas.', en: 'American Farmhouse style villa with stunning mountain views. Upper unit with spacious balcony.', zh: '美式农舍风格别墅，享有迷人的山景。带宽敞阳台的上层单元。', de: 'Villa im amerikanischen Farmhouse-Stil mit atemberaubendem Bergblick. Obere Einheit mit großem Balkon.',
        ja: "素晴らしい山の景色を望むアメリカンファームハウススタイルのヴィラ。広々としたバルコニー付きの上層ユニット。",
        ko: "멋진 산 전망을 자랑하는 미국 농가 스타일의 빌라입니다. 넓은 발코니가 있는 위층 객실입니다.",
        fr: "Villa de style ferme américaine avec une vue imprenable sur les montagnes. Unité du haut avec balcon spacieux."
    }
  }
];

// ===================================================================
// DANDENONG VILLAS (American Farmhouse)
// ===================================================================

export const DANDENONG_VILLAS: Villa[] = [
  {
    id: 'olinda',
    name: 'Olinda Villa',
    cluster: 'Dandenong Villas Puntang',
    capacity: '12 orang',
    bedrooms: 3,
    area: 145.40,
    toilets: 2,
    price: 15000000,
    priceWeekday: 15000000,
    priceWeekend: 17500000,
    priceHighSeason: 20000000,
    category: 'luxury',
    features: ['Spacious Living', 'Large Garden', 'Jacuzzi'],
    image: '/images/villas/olinda/hero.jpg',
    images: [
      '/images/villas/olinda/jacuzzi.webp',
      '/images/villas/olinda/DSC00382WEB.jpg',
      '/images/villas/olinda/DSC00446WEB.jpg',
      '/images/villas/olinda/DSC00629WEB.jpg',
      '/images/villas/olinda/DSC00630WEB.jpg',
      '/images/villas/olinda/DSC00789WEB.jpg',
      '/images/villas/olinda/DSC00931WEB.jpg',

    ],
    bedConfiguration: [
      { room: 1, beds: '1 king bed (180 x 200)' },
      { room: 2, beds: '2 queen bed (160 x 200)' },
      { room: 3, beds: '2 queen bed (160 x 200) & 2 single bed (90 x 200)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer',
            fr: "Salon",
            ja: "リビングルーム",
            ko: "거실"
        },
        { id: 'Meja makan', en: 'Dining table', zh: '餐桌', de: 'Esstisch',
            ko: "식탁",
            ja: "ダイニングテーブル",
            fr: "Table à manger"
        },
        { id: 'Dapur', en: 'Kitchen', zh: '厨房', de: 'Küche',
            fr: "Cuisine",
            ko: "주방",
            ja: "台所"
        },
        { id: '3 Kamar tidur', en: '3 Bedrooms', zh: '3间卧室', de: '3 Schlafzimmer',
            ja: "3 ベッドルーム",
            fr: "3 chambres",
            ko: "침실 3개"
        },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse',
            ja: "テラス",
            fr: "Terrasse",
            ko: "테라스"
        }
      ],
      amenities: [
        { id: '2 Toilet & kamar mandi', en: '2 Toilets & bathrooms', zh: '2个洗手间与浴室', de: '2 Toiletten & Badezimmer',
            ja: "2 トイレとバスルーム",
            ko: "2 화장실 및 욕실",
            fr: "2 toilettes et salles de bains"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ko: "온수기",
            ja: "給湯器"
        },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen',
            ja: "スマートテレビ/ケーブルテレビ",
            ko: "스마트 TV/케이블 TV",
            fr: "Télévision intelligente/TV par câble"
        },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN',
            ko: "Wi-Fi",
            fr: "Wi-Fi",
            ja: "Wi-Fi"
        },
        { id: 'Jacuzzi', en: 'Jacuzzi', zh: '按摩浴缸', de: 'Whirlpool',
            ja: "ジャグジー",
            fr: "Jacuzzi",
            ko: "자쿠지"
        },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank',
            ja: "冷蔵庫",
            ko: "냉장고",
            fr: "Réfrigérateur"
        },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle',
            ko: "마이크로파",
            fr: "Micro-ondes",
            ja: "電子レンジ"
        },
        { id: 'ketel listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher',
            ja: "電気ケトル",
            ko: "전기 주전자",
            fr: "Bouilloire électrique"
        },
        { id: 'kompor listrik', en: 'Electric stove', zh: '电炉', de: 'Elektroherd',
            ja: "電気ストーブ",
            ko: "전기스토브",
            fr: "Cuisinière électrique"
        },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            fr: "Distributeur d'eau",
            ko: "정수기",
            ja: "ウォーターサーバー"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            ko: "비누",
            ja: "石鹸",
            fr: "Savon"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            fr: "Shampooing",
            ko: "샴푸",
            ja: "シャンプー"
        },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta',
            ja: "歯ブラシと歯磨き粉",
            fr: "Brosse à dents et dentifrice",
            ko: "칫솔 & 치약"
        },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch',
            ja: "タオル",
            fr: "Serviette",
            ko: "수건"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            ja: "夕食",
            fr: "Dîner"
        },
        { id: 'Kopi, teh, gula, creamer', en: 'Coffee, tea, sugar, creamer', zh: '??,?,?,??', de: 'Kaffee, Tee, Zucker, Sahne',
            ko: "커피, 차, 설탕, 크리머",
            fr: "Café, thé, sucre, crème",
            ja: "コーヒー、紅茶、砂糖、クリーマー"
        },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser',
            fr: "Eau minérale",
            ko: "광천수",
            ja: "ミネラルウォーター"
        }
      ],
      natural: [
        { id: 'Jacuzzi private', en: 'Private Jacuzzi', zh: '私人按摩浴缸', de: 'Privater Whirlpool',
            fr: "Jacuzzi privé",
            ko: "프라이빗 자쿠지",
            ja: "プライベートジャグジー"
        },
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad',
            ko: "수영장",
            fr: "Piscine",
            ja: "スイミングプール"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ja: "水遊び",
            ko: "물놀이",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss',
            ko: "강",
            ja: "川",
            fr: "Rivière"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            fr: "Belvédère",
            ja: "ガゼボ"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 150 m dari area parkir)', en: 'Stairs access (about 150 m from parking area)', zh: '需爬楼梯（距停车场约150米）', de: 'Treppenzugang (ca. 150 m vom Parkplatz)',
            ko: "계단 이용(주차장에서 약 150m)",
            fr: "Accès par escaliers (à environ 150 m du parking)",
            ja: "階段アクセス（駐車場より約150m）"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '从万隆市中心出发，预计车程约1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung',
            ja: "バンドン市内中心部からの所要時間は約 1 ～ 2 時間です。",
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung",
            ko: "반둥 시내 중심에서 약 1~2시간 소요"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: { id: 'Villa luas dengan kapasitas besar dan Jacuzzi pribadi. Cocok untuk gathering keluarga besar.', en: 'Spacious villa with large capacity and private Jacuzzi. Perfect for large family gatherings.', zh: '宽敞的别墅，容量大，配有私人按摩浴缸。非常适合大型家庭聚会。', de: 'Geräumige Villa mit großer Kapazität und privatem Jacuzzi. Perfekt für große Familientreffen.',
        fr: "Villa spacieuse de grande capacité et jacuzzi privé. Parfait pour les grandes réunions de famille.",
        ko: "대용량과 전용 자쿠지를 갖춘 넓은 빌라입니다. 대규모 가족 모임에 적합합니다.",
        ja: "大容量のプライベートジャグジーを備えた広々としたヴィラ。大家族の集まりに最適です。"
    }
  },
  {
    id: 'selby',
    name: 'Selby Villa',
    cluster: 'Dandenong Villas Puntang',
    capacity: '4 orang',
    bedrooms: 2,
    area: 76.45,
    toilets: 1,
    price: 5000000,
    priceWeekday: 5000000,
    priceWeekend: 6000000,
    priceHighSeason: 7500000,
    category: 'luxury',
    features: ['Cozy', 'Private', 'Garden View'],
    image: '/images/villas/selby/hero.jpg',
    images: [
      '/images/villas/selby/DSC03113.WEB.jpg',
      '/images/villas/selby/DSC02726WEB.jpg',
      '/images/villas/selby/DSC02763WEB.jpg',
      '/images/villas/selby/DSC02805WEB.jpg',
      '/images/villas/selby/DSC02837WEB.jpg',
      '/images/villas/selby/DSC02872WEB.jpg',
      '/images/villas/selby/DSC03055WEB.jpg',
      '/images/villas/selby/DSC00238.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 king bed 180 x 200' },
      { room: 2, beds: '1 queen bed 160 x 200' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer',
            fr: "Salon",
            ja: "リビングルーム",
            ko: "거실"
        },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            fr: "Chambre à coucher",
            ko: "침실",
            ja: "寝室"
        },
        { id: 'Dapur', en: 'Kitchen', zh: '厨房', de: 'Küche',
            ko: "주방",
            fr: "Cuisine",
            ja: "台所"
        },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse',
            ja: "テラス",
            fr: "Terrasse",
            ko: "테라스"
        }
      ],
      amenities: [
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '洗手间与浴室', de: 'Toilette & Badezimmer',
            ko: "화장실 및 욕실",
            fr: "Toilettes et salle de bain",
            ja: "トイレ＆バスルーム"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen',
            ko: "스마트 TV/케이블 TV",
            ja: "スマートテレビ/ケーブルテレビ",
            fr: "Télévision intelligente/TV par câble"
        },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ja: "Wi-Fi",
            ko: "Wi-Fi"
        },
        { id: 'Kulkas', en: 'Refrigerator', zh: '冰箱', de: 'Kühlschrank',
            ja: "冷蔵庫",
            fr: "Réfrigérateur",
            ko: "냉장고"
        },
        { id: 'Microwave', en: 'Microwave', zh: '微波炉', de: 'Mikrowelle',
            ja: "電子レンジ",
            fr: "Micro-ondes",
            ko: "마이크로파"
        },
        { id: 'Dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            ko: "정수기",
            fr: "Distributeur d'eau",
            ja: "ウォーターサーバー"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            ko: "비누",
            fr: "Savon",
            ja: "石鹸"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            ja: "シャンプー",
            ko: "샴푸",
            fr: "Shampooing"
        },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta',
            ko: "칫솔 & 치약",
            ja: "歯ブラシと歯磨き粉",
            fr: "Brosse à dents et dentifrice"
        },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch',
            fr: "Serviette",
            ja: "タオル",
            ko: "수건"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            ja: "朝食",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            fr: "Dîner",
            ja: "夕食"
        },
        { id: 'Kopi, gula, teh, creamer', en: 'Coffee, sugar, tea, creamer', zh: '咖啡、糖、茶、奶精', de: 'Kaffee, Zucker, Tee, Sahne',
            fr: "Café, sucre, thé, crème",
            ko: "커피, 설탕, 차, 크리머",
            ja: "コーヒー、砂糖、紅茶、クリーマー"
        },
        { id: 'Air mineral', en: 'Mineral water', zh: '矿泉水', de: 'Mineralwasser',
            ko: "광천수",
            ja: "ミネラルウォーター",
            fr: "Eau minérale"
        }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad',
            ja: "スイミングプール",
            ko: "수영장",
            fr: "Piscine"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss',
            ko: "강",
            ja: "川",
            fr: "Rivière"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            fr: "Belvédère",
            ja: "ガゼボ"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            fr: "Passerelle",
            ko: "스카이워크",
            ja: "スカイウォーク"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 150 m dari area parkir)', en: 'Stairs access (about 150 m from parking area)', zh: '需爬楼梯（距停车场约150米）', de: 'Treppenzugang (ca. 150 m vom Parkplatz)',
            ko: "계단 이용(주차장에서 약 150m)",
            fr: "Accès par escaliers (à environ 150 m du parking)",
            ja: "階段アクセス（駐車場より約150m）"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '从万隆市中心出发，预计车程约1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung',
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung",
            ja: "バンドン市内中心部からの所要時間は約 1 ～ 2 時間です。",
            ko: "반둥 시내 중심에서 약 1~2시간 소요"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: { id: 'Villa cozy untuk keluarga kecil. Suasana tenang dengan pemandangan taman.', en: 'Cozy villa for small families. Quiet atmosphere with garden views.', zh: '适合小家庭的舒适别墅。环境安静，享有花园景致。', de: 'Gemütliche Villa für kleine Familien. Ruhige Atmosphäre mit Gartenblick.',
        ja: "少人数のご家族向けの居心地の良いヴィラ。庭園を望む静かな雰囲気。",
        ko: "소규모 가족을 위한 아늑한 빌라입니다. 정원 전망을 갖춘 조용한 분위기.",
        fr: "Villa confortable pour petites familles. Ambiance calme avec vue sur le jardin."
    }
  }
];

// ===================================================================
// PROVINCIAL VILLAS (French Countryside)
// ===================================================================

export const PROVINCIAL_VILLAS: Villa[] = [
  {
    id: 'villa-gordes',
    name: 'Gordes Villa',
    cluster: 'Provincial Villas Puntang',
    capacity: '4 orang',
    bedrooms: 2,
    area: 76.96,
    toilets: 1,
    price: 5000000,
    priceWeekday: 5000000,
    priceWeekend: 6000000,
    priceHighSeason: 7500000,
    category: 'luxury',
    color: 'Hijau',
    features: ['French Style', 'Garden View', 'Charming'],
    image: '/images/villas/gordes/DSC07573(1).WEB.jpg',
    images: [
      '/images/villas/gordes/DSC06229WEB.jpg',
      '/images/villas/gordes/DSC06246WEB.jpg',
      '/images/villas/gordes/DSC06287WEB.jpg',
      '/images/villas/gordes/DSC06309WEB.jpg',
      '/images/villas/gordes/DSC06316(1)WEB.jpg',
      '/images/villas/gordes/DSC06348WEB.jpg',
      '/images/villas/gordes/DSC06397WEB.jpg',
      '/images/villas/gordes/DSC07573(1).WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm' },
      { room: 2, beds: 'queen bed 160x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer',
            ko: "거실",
            ja: "リビングルーム",
            fr: "Salon"
        },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ko: "침실",
            fr: "Chambre à coucher",
            ja: "寝室"
        },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '洗手间与浴室', de: 'Toilette & Badezimmer',
            ko: "화장실 및 욕실",
            ja: "トイレ＆バスルーム",
            fr: "Toilettes et salle de bain"
        },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse',
            ko: "테라스",
            fr: "Terrasse",
            ja: "テラス"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen',
            ja: "スマートテレビ/ケーブルテレビ",
            fr: "Télévision intelligente/TV par câble",
            ko: "스마트 TV/케이블 TV"
        },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN',
            ja: "Wi-Fi",
            ko: "Wi-Fi",
            fr: "Wi-Fi"
        },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '矿泉水和饮水机', de: 'Mineralwasser & Spender',
            fr: "Eau minérale et distributeur",
            ko: "미네랄 워터 및 디스펜서",
            ja: "ミネラルウォーター＆ディスペンサー"
        },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '咖啡、奶精、糖、茶', de: 'Kaffee, Sahne, Zucker, Tee',
            ja: "コーヒー、クリーマー、砂糖、紅茶",
            fr: "Café, crème, sucre, thé",
            ko: "커피, 크리머, 설탕, 차"
        },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '胶囊咖啡', de: 'Kapselkaffee',
            fr: "Café en capsules",
            ko: "캡슐커피",
            ja: "カプセルコーヒー"
        },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '咖啡壶', de: 'Kaffeemaschine',
            fr: "Cafetière",
            ja: "コーヒーメーカー",
            ko: "커피 메이커"
        },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher',
            ja: "電気ケトル",
            ko: "전기 주전자",
            fr: "Bouilloire électrique"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            ko: "비누",
            fr: "Savon",
            ja: "石鹸"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            ja: "シャンプー",
            ko: "샴푸",
            fr: "Shampooing"
        },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta',
            ja: "歯ブラシと歯磨き粉",
            ko: "칫솔 & 치약",
            fr: "Brosse à dents et dentifrice"
        },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch',
            ko: "수건",
            fr: "Serviette",
            ja: "タオル"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            fr: "Petit-déjeuner",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ja: "ランチ",
            ko: "점심",
            fr: "Déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            fr: "Dîner",
            ja: "夕食"
        }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad',
            fr: "Piscine",
            ko: "수영장",
            ja: "スイミングプール"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            fr: "Jeu d'eau",
            ja: "水遊び"
        },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss',
            ja: "川",
            ko: "강",
            fr: "Rivière"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            ja: "スカイウォーク",
            fr: "Passerelle"
        },
        { id: 'Taman', en: 'Garden', zh: '花园', de: 'Garten',
            ja: "庭",
            ko: "정원",
            fr: "Jardin"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '需爬楼梯（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)',
            ko: "계단 이용(주차장에서 약 300m)",
            fr: "Accès par escaliers (à environ 300 m du parking)",
            ja: "階段アクセス（駐車場より約300m）"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '从万隆市中心出发，预计车程约1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung',
            ko: "반둥 시내 중심에서 약 1~2시간 소요",
            ja: "バンドン市内中心部からの所要時間は約 1 ～ 2 時間です。",
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: { id: 'Villa dengan sentuhan pedesaan Prancis. Nuansa hijau yang menenangkan.', en: 'Villa with a touch of French countryside. Soothing green nuances.', zh: '带有法国乡村风情的别墅。令人放松的绿色色调。', de: 'Villa mit einem Hauch von französischer Landschaft. Beruhigende grüne Nuancen.',
        ko: "프랑스 시골의 느낌이 물씬 풍기는 빌라입니다. 차분한 녹색 뉘앙스.",
        fr: "Villa avec une touche de campagne française. Nuances vertes apaisantes.",
        ja: "フランスの田舎の雰囲気を感じられるヴィラ。落ち着いたグリーンのニュアンス。"
    }
  },
  {
    id: 'villa-roussillon',
    name: 'Roussillon Villa',
    cluster: 'Provincial Villas Puntang',
    capacity: '5 orang',
    bedrooms: 2,
    area: 102.09,
    toilets: 1,
    price: 6500000,
    priceWeekday: 6500000,
    priceWeekend: 7500000,
    priceHighSeason: 9000000,
    category: 'luxury',
    color: 'Abu-abu',
    features: ['French Style', 'Elegant', 'Garden View'],
    image: '/images/villas/roussillon/DSC07418.WEB.jpg',
    images: [
      '/images/villas/roussillon/DSC07004WEB.jpg',
      '/images/villas/roussillon/DSC07070WEB.jpg',
      '/images/villas/roussillon/DSC07080WEB.jpg',
      '/images/villas/roussillon/DSC07088WEB.WEB.jpg',
      '/images/villas/roussillon/DSC07125WEB.jpg',
      '/images/villas/roussillon/DSC07140WEB.jpg',
      '/images/villas/roussillon/DSC07418.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm dan single bed 90x200cm' },
      { room: 2, beds: 'queen bed 160x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer',
            ko: "거실",
            fr: "Salon",
            ja: "リビングルーム"
        },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            fr: "Chambre à coucher",
            ko: "침실"
        },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '洗手间与浴室', de: 'Toilette & Badezimmer',
            fr: "Toilettes et salle de bain",
            ja: "トイレ＆バスルーム",
            ko: "화장실 및 욕실"
        },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse',
            ko: "테라스",
            fr: "Terrasse",
            ja: "テラス"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen',
            ja: "スマートテレビ/ケーブルテレビ",
            fr: "Télévision intelligente/TV par câble",
            ko: "스마트 TV/케이블 TV"
        },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN',
            ja: "Wi-Fi",
            fr: "Wi-Fi",
            ko: "Wi-Fi"
        },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '矿泉水和饮水机', de: 'Mineralwasser & Spender',
            fr: "Eau minérale et distributeur",
            ja: "ミネラルウォーター＆ディスペンサー",
            ko: "미네랄 워터 및 디스펜서"
        },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '咖啡、奶精、糖、茶', de: 'Kaffee, Sahne, Zucker, Tee',
            ja: "コーヒー、クリーマー、砂糖、紅茶",
            ko: "커피, 크리머, 설탕, 차",
            fr: "Café, crème, sucre, thé"
        },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '胶囊咖啡', de: 'Kapselkaffee',
            ko: "캡슐커피",
            fr: "Café en capsules",
            ja: "カプセルコーヒー"
        },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '咖啡壶', de: 'Kaffeemaschine',
            fr: "Cafetière",
            ko: "커피 메이커",
            ja: "コーヒーメーカー"
        },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher',
            fr: "Bouilloire électrique",
            ko: "전기 주전자",
            ja: "電気ケトル"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            fr: "Savon",
            ko: "비누",
            ja: "石鹸"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            ja: "シャンプー",
            ko: "샴푸",
            fr: "Shampooing"
        },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta',
            ko: "칫솔 & 치약",
            ja: "歯ブラシと歯磨き粉",
            fr: "Brosse à dents et dentifrice"
        },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch',
            ja: "タオル",
            fr: "Serviette",
            ko: "수건"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            fr: "Petit-déjeuner",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            fr: "Déjeuner",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            fr: "Dîner",
            ko: "저녁"
        }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad',
            ja: "スイミングプール",
            ko: "수영장",
            fr: "Piscine"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss',
            ko: "강",
            fr: "Rivière",
            ja: "川"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            ja: "スカイウォーク",
            fr: "Passerelle"
        },
        { id: 'Taman', en: 'Garden', zh: '花园', de: 'Garten',
            fr: "Jardin",
            ko: "정원",
            ja: "庭"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '需爬楼梯（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)',
            ko: "계단 이용(주차장에서 약 300m)",
            fr: "Accès par escaliers (à environ 300 m du parking)",
            ja: "階段アクセス（駐車場より約300m）"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '从万隆市中心出发，预计车程约1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung',
            ja: "バンドン市内中心部からの所要時間は約 1 ～ 2 時間です。",
            ko: "반둥 시내 중심에서 약 1~2시간 소요",
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: { id: 'Villa elegan dengan nuansa abu-abu klasik. Cocok untuk keluarga kecil.', en: 'Elegant villa with classic gray nuances. Suitable for small families.', zh: '典雅别墅，经典的灰色调。适合小家庭游玩。', de: 'Elegante Villa mit klassischen grauen Nuancen. Geeignet für kleine Familien.',
        ko: "클래식한 그레이 컬러가 돋보이는 우아한 빌라입니다. 소규모 가족에게 적합합니다.",
        fr: "Villa élégante aux nuances de gris classiques. Convient aux petites familles.",
        ja: "クラシックなグレーのニュアンスを持つエレガントなヴィラ。少人数のご家族に適しています。"
    }
  },
  {
    id: 'villa-lourmarin',
    name: 'Lourmarin Villa',
    cluster: 'Provincial Villas Puntang',
    capacity: '6 orang',
    bedrooms: 2,
    area: 106.24,
    toilets: 1,
    price: 7500000,
    priceWeekday: 7500000,
    priceWeekend: 9000000,
    priceHighSeason: 11000000,
    category: 'luxury',
    color: 'Coklat',
    features: ['French Style', 'Warm', 'Garden View'],
    image: '/images/villas/lourmarin/DSC09984.WEB.jpg',
    images: [
      '/images/villas/lourmarin/DSC06545WEB.jpg',
      '/images/villas/lourmarin/DSC06614WEB.jpg',
      '/images/villas/lourmarin/DSC06663WEB.jpg',
      '/images/villas/lourmarin/DSC06692WEB.jpg',
      '/images/villas/lourmarin/DSC06844WEB.jpg',
      '/images/villas/lourmarin/DSC06853WEB.jpg',
      '/images/villas/lourmarin/DSC06916WEB.jpg',
      '/images/villas/lourmarin/DSC09984.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: 'queen bed 160x200 cm dan single bed 90x200 cm' },
      { room: 2, beds: 'queen bed 160x200 cm dan single bed 90x200 cm' }
    ],
    facilities: {
      room: [
        { id: 'Ruang tamu', en: 'Living room', zh: '客厅', de: 'Wohnzimmer',
            fr: "Salon",
            ko: "거실",
            ja: "リビングルーム"
        },
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            fr: "Chambre à coucher",
            ko: "침실"
        },
        { id: 'Toilet & kamar mandi', en: 'Toilet & bathroom', zh: '洗手间与浴室', de: 'Toilette & Badezimmer',
            ko: "화장실 및 욕실",
            fr: "Toilettes et salle de bain",
            ja: "トイレ＆バスルーム"
        },
        { id: 'Teras', en: 'Terrace', zh: '露台', de: 'Terrasse',
            fr: "Terrasse",
            ko: "테라스",
            ja: "テラス"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        },
        { id: 'Smart TV/ TV kabel', en: 'Smart TV/ Cable TV', zh: '智能电视/有线电视', de: 'Smart TV / Kabelfernsehen',
            ja: "スマートテレビ/ケーブルテレビ",
            ko: "스마트 TV/케이블 TV",
            fr: "Télévision intelligente/TV par câble"
        },
        { id: 'Wi-Fi', en: 'Wi-Fi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ko: "Wi-Fi",
            ja: "Wi-Fi"
        },
        { id: 'Air mineral & dispenser', en: 'Mineral water & dispenser', zh: '矿泉水和饮水机', de: 'Mineralwasser & Spender',
            ko: "미네랄 워터 및 디스펜서",
            ja: "ミネラルウォーター＆ディスペンサー",
            fr: "Eau minérale et distributeur"
        },
        { id: 'Kopi, creamer, gula, teh', en: 'Coffee, creamer, sugar, tea', zh: '咖啡、奶精、糖、茶', de: 'Kaffee, Sahne, Zucker, Tee',
            fr: "Café, crème, sucre, thé",
            ja: "コーヒー、クリーマー、砂糖、紅茶",
            ko: "커피, 크리머, 설탕, 차"
        },
        { id: 'Kopi kapsul', en: 'Capsule coffee', zh: '胶囊咖啡', de: 'Kapselkaffee',
            ja: "カプセルコーヒー",
            fr: "Café en capsules",
            ko: "캡슐커피"
        },
        { id: 'Coffee maker', en: 'Coffee maker', zh: '咖啡壶', de: 'Kaffeemaschine',
            ja: "コーヒーメーカー",
            fr: "Cafetière",
            ko: "커피 메이커"
        },
        { id: 'Teko listrik', en: 'Electric kettle', zh: '电热水壶', de: 'Wasserkocher',
            ko: "전기 주전자",
            fr: "Bouilloire électrique",
            ja: "電気ケトル"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            ja: "石鹸",
            ko: "비누",
            fr: "Savon"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            fr: "Shampooing",
            ko: "샴푸",
            ja: "シャンプー"
        },
        { id: 'Sikat & pasta gigi', en: 'Toothbrush & toothpaste', zh: '牙刷和牙膏', de: 'Zahnbürste & Zahnpasta',
            ja: "歯ブラシと歯磨き粉",
            ko: "칫솔 & 치약",
            fr: "Brosse à dents et dentifrice"
        },
        { id: 'Handuk', en: 'Towel', zh: '毛巾', de: 'Handtuch',
            ko: "수건",
            fr: "Serviette",
            ja: "タオル"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ja: "ランチ",
            ko: "점심",
            fr: "Déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            ko: "저녁",
            fr: "Dîner"
        }
      ],
      natural: [
        { id: 'Kolam renang', en: 'Swimming pool', zh: '游泳池', de: 'Schwimmbad',
            ja: "スイミングプール",
            fr: "Piscine",
            ko: "수영장"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ja: "水遊び",
            ko: "물놀이"
        },
        { id: 'Sungai', en: 'River', zh: '河流', de: 'Fluss',
            ko: "강",
            fr: "Rivière",
            ja: "川"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ja: "ガゼボ",
            ko: "전망대"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            fr: "Passerelle",
            ja: "スカイウォーク"
        },
        { id: 'Taman', en: 'Garden', zh: '花园', de: 'Garten',
            ja: "庭",
            ko: "정원",
            fr: "Jardin"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Jalan naik turun tangga (sekitar 300 m dari area parkir)', en: 'Stairs access (about 300 m from parking area)', zh: '需爬楼梯（距停车场约300米）', de: 'Treppenzugang (ca. 300 m vom Parkplatz)',
            ja: "階段アクセス（駐車場より約300m）",
            ko: "계단 이용(주차장에서 약 300m)",
            fr: "Accès par escaliers (à environ 300 m du parking)"
        },
        { id: 'Estimasi waktu tempuh sekitar 1-2 jam dari pusat kota Bandung', en: 'Estimated travel time about 1-2 hours from Bandung city center', zh: '从万隆市中心出发，预计车程约1-2小时', de: 'Geschätzte Reisezeit ca. 1-2 Stunden vom Stadtzentrum Bandung',
            ja: "バンドン市内中心部からの所要時間は約 1 ～ 2 時間です。",
            fr: "Temps de trajet estimé à environ 1 à 2 heures depuis le centre-ville de Bandung",
            ko: "반둥 시내 중심에서 약 1~2시간 소요"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: { id: 'Villa hangat dengan nuansa coklat kayu. Kapasitas lebih besar untuk kenyamanan ekstra.', en: 'Warm villa with wood brown nuances. Larger capacity for extra comfort.', zh: '充满木质棕色暖意的别墅。容量较大，提供额外的舒适感。', de: 'Warme Villa mit holzbraunen Nuancen. Größere Kapazität für zusätzlichen Komfort.',
        fr: "Villa chaleureuse aux nuances marron bois. Une plus grande capacité pour plus de confort.",
        ja: "ウッドブラウンのニュアンスのある温かみのあるヴィラ。より快適な大容量。",
        ko: "우드 브라운 뉘앙스가 돋보이는 따뜻한 빌라입니다. 더 큰 편안함을 위한 더 큰 용량."
    }
  }
];

// Couple Retreat
export const RIVERSIDE_VILLAS: Villa[] = [
  {
    id: 'riverside-hana',
    name: 'Hana Villa',
    cluster: 'Riverside Villas Puntang',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 129.5,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Elegant Grey Interior'],
    image: '/images/villas/riverside-hana/HANA---Mix-Interior-3WEB.jpg',
    images: [
      '/images/villas/riverside-hana/HANA---KTC-2WEB.jpg',
      '/images/villas/riverside-hana/HANA---MB-7WEB.jpg',
      '/images/villas/riverside-hana/HANA---Mix-Interior-3WEB.jpg',
      '/images/villas/riverside-hana/HANA---Sc-MB-2WEB.jpg',
      '/images/villas/riverside-hana/HANA---Sc-MB-3WEB.jpg',
      '/images/villas/riverside-hana/HANA---Up-3WEB.jpg',
      '/images/villas/riverside-hana/RSV---Bathroom-1WEB.jpg',
      '/images/villas/riverside-hana/Rsv-11kompres.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '家庭房', de: 'Familienzimmer',
            ko: "패밀리룸",
            fr: "Salle familiale",
            ja: "ファミリールーム"
        },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '厨房与餐厅', de: 'Küche und Esszimmer',
            ko: "주방과 식당",
            fr: "Cuisine et salle à manger",
            ja: "キッチンとダイニングルーム"
        },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '别墅内洗手间及浴室', de: 'Toilette & Badezimmer in der Villa',
            ko: "빌라 내부 화장실 및 욕실",
            fr: "Toilettes et salle de bain à l'intérieur de la villa",
            ja: "ヴィラ内のトイレとバスルーム"
        },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '大堂内洗手间及浴室', de: 'Toilette & Badezimmer in der Villenlobby',
            ko: "빌라 로비의 화장실 및 욕실",
            fr: "Toilettes et salle de bains dans le hall de la villa",
            ja: "ヴィラロビーのトイレとバスルーム"
        },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz',
            fr: "Emplacement pour feu de joie et 1 paquet de bois de chauffage",
            ja: "焚き火スポット＆薪1束",
            ko: "모닥불 장소 및 장작 1다발"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            fr: "Chauffe-eau",
            ko: "온수기"
        },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV',
            ko: "스마트 TV",
            ja: "スマートテレビ",
            fr: "Télévision intelligente"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ko: "와이파이",
            ja: "Wi-Fi"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ja: "朝食",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ja: "ランチ",
            ko: "점심"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            fr: "Dîner",
            ko: "저녁",
            ja: "夕食"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide",
            ja: "冷水プール 2 つ"
        },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '徒步/远足', de: 'Trekking / Wandern',
            ja: "トレッキング/ハイキング",
            fr: "Trekking/randonnée",
            ko: "트레킹/하이킹"
        },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz',
            ko: "어린이 놀이터",
            fr: "Aire de jeux pour enfants",
            ja: "子供の遊び場"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ja: "水遊び",
            ko: "물놀이",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川",
            ko: "시그르강"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            ja: "スカイウォーク",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ja: "鳥籠橋",
            ko: "새장 다리",
            fr: "Pont cage à oiseaux"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            fr: "Quai",
            ja: "ドック",
            ko: "독"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            fr: "Spot photo naturel",
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。",
            ko: "계단 이용 가능."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: { id: 'Villa elegan dengan interior abu-abu bernuansa modern yang terletak tepat di samping sungai Cigeureuh.', en: 'Elegant villa with modern grey interior located right next to the Cigeureuh river.', zh: '典雅别墅，拥有现代灰色内饰，紧靠Cigeureuh河边。', de: 'Elegante Villa mit modernem grauem Interieur direkt am Fluss Cigeureuh.',
        fr: "Elégante villa à l'intérieur gris moderne située juste à côté de la rivière Cigeureuh.",
        ko: "시그르강 바로 옆에 위치한 현대적인 회색 인테리어의 우아한 빌라입니다.",
        ja: "Cigeureuh川のすぐ隣に位置する、モダンなグレーのインテリアのエレガントなヴィラです。"
    }
  },
  {
    id: 'riverside-fiore',
    name: 'Fiore Villa',
    cluster: 'Riverside Villas Puntang',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 129.5,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Fresh Green Interior'],
    image: '/images/villas/riverside-fiore/FIORE---Living-Room-1WEB.jpg',
    images: [
      '/images/villas/riverside-fiore/FIORE---Living-Room-1WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Master-Bedroom-2WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Master-Bedroom-4WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Mix-Interior-6WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Upstairs-2WEB.jpg',
      '/images/villas/riverside-fiore/FIORE---Upstairs-3WEB.jpg',
      '/images/villas/riverside-fiore/RSV---Bathroom-1WEB.jpg',
      '/images/villas/riverside-fiore/Rsv-11kompres.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '家庭房', de: 'Familienzimmer',
            ko: "패밀리룸",
            ja: "ファミリールーム",
            fr: "Salle familiale"
        },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '厨房与餐厅', de: 'Küche und Esszimmer',
            ja: "キッチンとダイニングルーム",
            fr: "Cuisine et salle à manger",
            ko: "주방과 식당"
        },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '别墅内洗手间及浴室', de: 'Toilette & Badezimmer in der Villa',
            fr: "Toilettes et salle de bain à l'intérieur de la villa",
            ko: "빌라 내부 화장실 및 욕실",
            ja: "ヴィラ内のトイレとバスルーム"
        },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '大堂内洗手间及浴室', de: 'Toilette & Badezimmer in der Villenlobby',
            ja: "ヴィラロビーのトイレとバスルーム",
            ko: "빌라 로비의 화장실 및 욕실",
            fr: "Toilettes et salle de bains dans le hall de la villa"
        },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz',
            fr: "Emplacement pour feu de joie et 1 paquet de bois de chauffage",
            ja: "焚き火スポット＆薪1束",
            ko: "모닥불 장소 및 장작 1다발"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            fr: "Chauffe-eau",
            ko: "온수기"
        },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV',
            fr: "Télévision intelligente",
            ko: "스마트 TV",
            ja: "スマートテレビ"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            ja: "Wi-Fi",
            ko: "와이파이",
            fr: "Wi-Fi"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ja: "ランチ",
            ko: "점심",
            fr: "Déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            fr: "Dîner",
            ko: "저녁"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '徒步/远足', de: 'Trekking / Wandern',
            fr: "Trekking/randonnée",
            ko: "트레킹/하이킹",
            ja: "トレッキング/ハイキング"
        },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz',
            ja: "子供の遊び場",
            fr: "Aire de jeux pour enfants",
            ko: "어린이 놀이터"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ja: "水遊び",
            ko: "물놀이"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋",
            ko: "새장 다리"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            ja: "ドック",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            fr: "Spot photo naturel",
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            ja: "階段でのアクセス。",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior hijau bernuansa segar dan sejuk yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with fresh green interior located right next to the Cigeureuh river.',
      zh: '?????,?????????,?? Cigeureuh ???',
      de: 'Elegante Villa mit frischem gr�nem Interieur direkt am Fluss Cigeureuh.',
        ko: "찌그르강 바로 옆에 위치한 싱그러운 녹색 인테리어의 우아한 빌라입니다.",
        ja: "Cigeureuh川のすぐ隣に位置する、新緑の内装のエレガントなヴィラです。",
        fr: "Elégante villa avec un intérieur verdoyant et frais située juste à côté de la rivière Cigeureuh."
    }
  },
  {
    id: 'riverside-blomst',
    name: 'Blomst Villa',
    cluster: 'Riverside Villas Puntang',
    capacity: '6 Pax',
    bedrooms: 3,
    area: 240.4,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7000000,
    priceHighSeason: 8500000,
    category: 'luxury',
    features: ['Riverside Location', 'Full Board Meals', 'Warm Brown Interior'],
    image: '/images/villas/riverside-blomst/BLOMST---Living-Room-1WEB.jpg',
    images: [
      '/images/villas/riverside-blomst/BLOMST---Living-Room-1WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Master-Bedroom-8WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Master-Bedroom-13WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Mix-Interior-5WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Second-Master-Bedroom-1WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Upstairs-2WEB.jpg',
      '/images/villas/riverside-blomst/BLOMST---Upstairs-5.WEB.jpg'
    ],
    bedConfiguration: [
      { room: 1, beds: '1 Master bedroom (1 king bed)' },
      { room: 2, beds: '1 Second bedroom (1 king bed)' },
      { room: 3, beds: '1 Kamar tidur mezzanine (2 single bed)' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Family room', zh: '家庭房', de: 'Familienzimmer',
            ja: "ファミリールーム",
            ko: "패밀리룸",
            fr: "Salle familiale"
        },
        { id: 'Dapur dan ruang makan', en: 'Kitchen and dining room', zh: '厨房与餐厅', de: 'Küche und Esszimmer',
            ja: "キッチンとダイニングルーム",
            fr: "Cuisine et salle à manger",
            ko: "주방과 식당"
        },
        { id: 'Toilet & kamar mandi di dalam villa', en: 'Toilet & bathroom inside villa', zh: '别墅内洗手间及浴室', de: 'Toilette & Badezimmer in der Villa',
            ko: "빌라 내부 화장실 및 욕실",
            fr: "Toilettes et salle de bain à l'intérieur de la villa",
            ja: "ヴィラ内のトイレとバスルーム"
        },
        { id: 'Toilet & kamar mandi di lobby villa', en: 'Toilet & bathroom in villa lobby', zh: '大堂内洗手间及浴室', de: 'Toilette & Badezimmer in der Villenlobby',
            ja: "ヴィラロビーのトイレとバスルーム",
            fr: "Toilettes et salle de bains dans le hall de la villa",
            ko: "빌라 로비의 화장실 및 욕실"
        },
        { id: 'Tempat api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz',
            ko: "모닥불 장소 및 장작 1다발",
            fr: "Emplacement pour feu de joie et 1 paquet de bois de chauffage",
            ja: "焚き火スポット＆薪1束"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ko: "온수기",
            ja: "給湯器"
        },
        { id: 'Smart TV', en: 'Smart TV', zh: '智能电视', de: 'Smart TV',
            ko: "스마트 TV",
            fr: "Télévision intelligente",
            ja: "スマートテレビ"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            ko: "와이파이",
            fr: "Wi-Fi",
            ja: "Wi-Fi"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ja: "朝食",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ja: "ランチ",
            ko: "점심"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            ja: "夕食",
            fr: "Dîner"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            fr: "2 piscines d'eau froide",
            ko: "2개의 냉수 수영장"
        },
        { id: 'Trekking/hiking', en: 'Trekking/hiking', zh: '徒步/远足', de: 'Trekking / Wandern',
            ko: "트레킹/하이킹",
            fr: "Trekking/randonnée",
            ja: "トレッキング/ハイキング"
        },
        { id: 'Children playground', en: 'Children playground', zh: '儿童游乐场', de: 'Kinderspielplatz',
            ja: "子供の遊び場",
            ko: "어린이 놀이터",
            fr: "Aire de jeux pour enfants"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            fr: "Pont cage à oiseaux",
            ko: "새장 다리",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            fr: "Quai",
            ja: "ドック",
            ko: "독"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            fr: "Spot photo naturel",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '14.00 WIB',
      checkOut: '10.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            ja: "階段でのアクセス。",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: {
      id: 'Villa elegan dengan interior coklat bernuansa hangat yang terletak tepat di samping sungai Cigeureuh.',
      en: 'Elegant villa with warm brown interior located right next to the Cigeureuh river.',
      zh: '?????,?????????,?? Cigeureuh ???',
      de: 'Elegante Villa mit warmem braunem Interieur direkt am Fluss Cigeureuh.',
        ja: "Cigeureuh 川のすぐ隣に位置する、温かみのある茶色のインテリアが施されたエレガントなヴィラ。",
        fr: "Elégante villa à l'intérieur marron chaleureux située juste à côté de la rivière Cigeureuh.",
        ko: "찌그르강 바로 옆에 위치한 따뜻한 브라운 인테리어의 우아한 빌라입니다."
    }
  }
];

export const KAMPUH_BECIK_VILLAS: Villa[] = [
  // Executive Type Units
  {
    id: 'kampuh-becik-abutilon',
    name: 'Abutilon',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: '/images/villas/abutilon/AWB_4760WEB.jpg',
    images: [
      '/images/villas/abutilon/26102022035607xItWEB.jpg',
      '/images/villas/abutilon/AWB_4760WEB.jpg',
      '/images/villas/abutilon/AWB_4769WEB.jpg',
      '/images/villas/abutilon/AWB_4776WEB.jpg',
      '/images/villas/abutilon/AWB_4781-(1)WEB.jpg',
      '/images/villas/abutilon/AWB_4784WEB.jpg',
      '/images/villas/abutilon/AWB_4788WEB.jpg',
      '/images/villas/abutilon/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            fr: "Chambre à coucher",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ko: "반야외 욕실 및 화장실",
            fr: "Salle de bain et toilettes semi-extérieures",
            ja: "半屋外のバス・トイレ"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ko: "온수기",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            fr: "Petit-déjeuner",
            ja: "朝食"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ko: "점심",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            fr: "Dîner",
            ja: "夕食"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            fr: "Fruits de bienvenue",
            ko: "웰컴 과일",
            ja: "ウェルカムフルーツ"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ko: "페레로로쉐 초콜릿",
            fr: "Chocolat Ferrero Rocher",
            ja: "フェレロ ロシェ チョコレート"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            ja: "水遊び",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            fr: "Passerelle",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ko: "전망대",
            ja: "ガゼボ"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            fr: "Quai",
            ko: "독",
            ja: "ドック"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ko: "자연의 포토스팟",
            fr: "Spot photo naturel",
            ja: "自然のフォトスポット"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.',
        ko: "내추럴한 분위기의 이그제큐티브형 캐빈빌라입니다. 인스타그램에 올릴 수 있는 반야외 욕실을 갖추고 있습니다. 발코니에서 앞 정원 전망을 감상할 수 있는 첫 번째 줄 캐빈 빌라입니다.",
        fr: "Villa cabine de type exécutif à l'ambiance naturelle. Equipé d'une salle de bain semi-extérieure instagramable. Villa cabine au premier rang avec vue sur le jardin avant depuis le balcon.",
        ja: "ナチュラルな雰囲気のエグゼクティブタイプのキャビンヴィラ。インスタ映えする半屋外浴室完備。バルコニーから前庭の景色を望む1列目のキャビンヴィラ。"
    }
  },
  {
    id: 'kampuh-becik-agaphantus',
    name: 'Agaphantus',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'Twin Bed'],
    image: '/images/villas/agaphantus/AWB_4259WEB.jpg',
    images: [
      '/images/villas/agaphantus/AWB_4259WEB.jpg',
      '/images/villas/agaphantus/AWB_4268web.jpg',
      '/images/villas/agaphantus/AWB_4272WEB.jpg',
      '/images/villas/agaphantus/AWB_4306web.jpg',
      '/images/villas/agaphantus/agaphantuss.jpgWEB.jpg',
      '/images/villas/agaphantus/jalan-kb-(1)web.jpg',
      '/images/villas/agaphantus/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            fr: "Chambre à coucher",
            ja: "寝室",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ko: "발코니",
            ja: "バルコニー",
            fr: "Balcon"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            fr: "Salle de bain et toilettes semi-extérieures",
            ko: "반야외 욕실 및 화장실",
            ja: "半屋外のバス・トイレ"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            ko: "온수기",
            fr: "Chauffe-eau"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ja: "朝食",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            fr: "Déjeuner",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            ko: "저녁",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ja: "ウェルカムフルーツ",
            fr: "Fruits de bienvenue",
            ko: "웰컴 과일"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            fr: "Chocolat Ferrero Rocher",
            ko: "페레로로쉐 초콜릿"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ko: "2개의 냉수 수영장",
            ja: "冷水プール 2 つ",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ja: "水遊び",
            ko: "물놀이"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            fr: "Pont cage à oiseaux",
            ko: "새장 다리",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ja: "ガゼボ",
            fr: "Belvédère",
            ko: "전망대"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            fr: "Quai",
            ja: "ドック",
            ko: "독"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟",
            fr: "Spot photo naturel"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ja: "階段でのアクセス。",
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.',
        ko: "내추럴한 분위기의 이그제큐티브형 캐빈빌라입니다. 인스타그램에 올릴 수 있는 반야외 욕실을 갖추고 있습니다. 발코니에서 앞 정원 전망을 감상할 수 있는 첫 번째 줄 캐빈 빌라입니다.",
        fr: "Villa cabine de type exécutif à l'ambiance naturelle. Equipé d'une salle de bain semi-extérieure instagramable. Villa cabine au premier rang avec vue sur le jardin avant depuis le balcon.",
        ja: "ナチュラルな雰囲気のエグゼクティブタイプのキャビンヴィラ。インスタ映えする半屋外浴室完備。バルコニーから前庭の景色を望む1列目のキャビンヴィラ。"
    }
  },
  {
    id: 'kampuh-becik-allamanda',
    name: 'Allamanda',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: '/images/villas/allamanda/AWB_4327WEB.jpg',
    images: [
      '/images/villas/allamanda/AWB_4327WEB.jpg',
      '/images/villas/allamanda/AWB_4331WEB.jpg',
      '/images/villas/allamanda/AWB_4341WEB.jpg',
      '/images/villas/allamanda/AWB_4344WEB.jpg',
      '/images/villas/allamanda/AWB_4349.WEB.jpg',
      '/images/villas/allamanda/KBWEB.jpg',
      '/images/villas/allamanda/jalan-kb-(10)web.jpg',
      '/images/villas/allamanda/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            fr: "Chambre à coucher",
            ja: "寝室",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ja: "半屋外のバス・トイレ",
            ko: "반야외 욕실 및 화장실",
            fr: "Salle de bain et toilettes semi-extérieures"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ko: "온수기",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            ja: "朝食",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ko: "점심",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            ko: "저녁",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ja: "ウェルカムフルーツ",
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ko: "페레로로쉐 초콜릿",
            ja: "フェレロ ロシェ チョコレート",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            fr: "2 piscines d'eau froide",
            ko: "2개의 냉수 수영장",
            ja: "冷水プール 2 つ"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            fr: "Jeu d'eau",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川",
            ko: "시그르강"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            fr: "Passerelle",
            ko: "스카이워크"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ja: "鳥籠橋",
            ko: "새장 다리",
            fr: "Pont cage à oiseaux"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            fr: "Belvédère",
            ja: "ガゼボ"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            fr: "Quai",
            ja: "ドック"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟",
            fr: "Spot photo naturel"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.',
        fr: "Villa cabine de type exécutif à l'ambiance naturelle. Equipé d'une salle de bain semi-extérieure instagramable. Villa cabine au premier rang avec vue sur le jardin avant depuis le balcon.",
        ko: "내추럴한 분위기의 이그제큐티브형 캐빈빌라입니다. 인스타그램에 올릴 수 있는 반야외 욕실을 갖추고 있습니다. 발코니에서 앞 정원 전망을 감상할 수 있는 첫 번째 줄 캐빈 빌라입니다.",
        ja: "ナチュラルな雰囲気のエグゼクティブタイプのキャビンヴィラ。インスタ映えする半屋外浴室完備。バルコニーから前庭の景色を望む1列目のキャビンヴィラ。"
    }
  },
  {
    id: 'kampuh-becik-azalea',
    name: 'Azalea',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'Twin Bed'],
    image: '/images/villas/azalea/AWB_4381WEB.jpg',
    images: [
      '/images/villas/azalea/4.-Detail-BedroomWEB.jpg',
      '/images/villas/azalea/AWB_4381WEB.jpg',
      '/images/villas/azalea/AWB_4390WEB.jpg',
      '/images/villas/azalea/AWB_4405.WEB.jpg',
      '/images/villas/azalea/AWB_4416.WEB.jpg',
      '/images/villas/azalea/jalan-kb-(10)web.jpg',
      '/images/villas/azalea/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            fr: "Chambre à coucher",
            ko: "침실",
            ja: "寝室"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ko: "반야외 욕실 및 화장실",
            ja: "半屋外のバス・トイレ",
            fr: "Salle de bain et toilettes semi-extérieures"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ko: "아침",
            ja: "朝食"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            fr: "Déjeuner",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            ja: "夕食",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue",
            ja: "ウェルカムフルーツ"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            ko: "페레로로쉐 초콜릿",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ja: "水遊び",
            ko: "물놀이"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ko: "시그르강",
            ja: "チグレウ川",
            fr: "Rivière Cigeureuh"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            fr: "Passerelle",
            ko: "스카이워크",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            ja: "鳥籠橋",
            fr: "Pont cage à oiseaux"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ja: "ガゼボ",
            ko: "전망대",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            fr: "Quai",
            ja: "ドック",
            ko: "독"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            fr: "Spot photo naturel",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.',
        fr: "Villa cabine de type exécutif à l'ambiance naturelle. Equipé d'une salle de bain semi-extérieure instagramable. Villa cabine au premier rang avec vue sur le jardin avant depuis le balcon.",
        ko: "내추럴한 분위기의 이그제큐티브형 캐빈빌라입니다. 인스타그램에 올릴 수 있는 반야외 욕실을 갖추고 있습니다. 발코니에서 앞 정원 전망을 감상할 수 있는 첫 번째 줄 캐빈 빌라입니다.",
        ja: "ナチュラルな雰囲気のエグゼクティブタイプのキャビンヴィラ。インスタ映えする半屋外浴室完備。バルコニーから前庭の景色を望む1列目のキャビンヴィラ。"
    }
  },
  {
    id: 'kampuh-becik-buddleja',
    name: 'Buddleja',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2500000,
    priceWeekday: 2500000,
    priceWeekend: 3000000,
    priceHighSeason: 3500000,
    features: ['Direct River Access', 'Romantic Setting', 'King Bed'],
    image: '/images/villas/buddleja/6.-Bedroom-ViewWEB.jpg',
    images: [
      '/images/villas/buddleja/6.-Bedroom-ViewWEB.jpg',
      '/images/villas/buddleja/AWB_4430WEB.jpg',
      '/images/villas/buddleja/AWB_4441-(1)WEB.jpg',
      '/images/villas/buddleja/AWB_4451WEB.jpg',
      '/images/villas/buddleja/AWB_4457-(1).WEB.jpg',
      '/images/villas/buddleja/jalan-kb-(1)web.jpg',
      '/images/villas/buddleja/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Executive Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            fr: "Chambre à coucher",
            ja: "寝室",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ja: "半屋外のバス・トイレ",
            ko: "반야외 욕실 및 화장실",
            fr: "Salle de bain et toilettes semi-extérieures"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            fr: "Chauffe-eau",
            ko: "온수기"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            fr: "Déjeuner",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            fr: "Dîner",
            ko: "저녁"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            fr: "Fruits de bienvenue",
            ko: "웰컴 과일",
            ja: "ウェルカムフルーツ"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            ko: "페레로로쉐 초콜릿",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ko: "2개의 냉수 수영장",
            ja: "冷水プール 2 つ",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            fr: "Jeu d'eau",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            fr: "Passerelle",
            ko: "스카이워크",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ja: "鳥籠橋",
            fr: "Pont cage à oiseaux",
            ko: "새장 다리"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ja: "ガゼボ",
            ko: "전망대",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            ja: "ドック",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ko: "자연의 포토스팟",
            ja: "自然のフォトスポット",
            fr: "Spot photo naturel"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。",
            ko: "계단 이용 가능."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Executive dengan nuansa alami. Dilengkapi kamar mandi semi-outdoor yang instagramable. Villa kabin baris pertama dengan balkon yang memiliki pemandangan taman langsung.',
      en: 'Executive type cabin villa with natural atmosphere. Equipped with instagramable semi-outdoor bathroom. First row cabin villa with front garden view from balcony.',
      zh: '????????,??????? ?????????????',
      de: 'Executive-Kabinen-Villa mit nat�rlicher Atmosph�re. Ausgestattet mit instagram-tauglichem halb-offenem Badezimmer.',
        fr: "Villa cabine de type exécutif à l'ambiance naturelle. Equipé d'une salle de bain semi-extérieure instagramable. Villa cabine au premier rang avec vue sur le jardin avant depuis le balcon.",
        ja: "ナチュラルな雰囲気のエグゼクティブタイプのキャビンヴィラ。インスタ映えする半屋外浴室完備。バルコニーから前庭の景色を望む1列目のキャビンヴィラ。",
        ko: "내추럴한 분위기의 이그제큐티브형 캐빈빌라입니다. 인스타그램에 올릴 수 있는 반야외 욕실을 갖추고 있습니다. 발코니에서 앞 정원 전망을 감상할 수 있는 첫 번째 줄 캐빈 빌라입니다."
    }
  },

  // Deluxe Type Units
  {
    id: 'kampuh-becik-calathea',
    name: 'Calathea',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/calathea/AWB_4490WEB.jpg',
    images: [
      '/images/villas/calathea/AWB_4490WEB.jpg',
      '/images/villas/calathea/AWB_4500WEB.jpg',
      '/images/villas/calathea/AWB_4502WEB.jpg',
      '/images/villas/calathea/AWB_4505WEB.jpg',
      '/images/villas/calathea/AWB_4510WEB.jpg',
      '/images/villas/calathea/AWB_4522WEB.jpg',
      '/images/villas/calathea/jalan-kb-(2).WEB.jpg',
      '/images/villas/calathea/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ko: "침실",
            ja: "寝室",
            fr: "Chambre à coucher"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ko: "반야외 욕실 및 화장실",
            fr: "Salle de bain et toilettes semi-extérieures",
            ja: "半屋外のバス・トイレ"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ko: "온수기",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            fr: "Petit-déjeuner",
            ko: "아침",
            ja: "朝食"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ja: "ランチ",
            fr: "Déjeuner",
            ko: "점심"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            ko: "저녁",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ja: "ウェルカムフルーツ",
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ko: "페레로로쉐 초콜릿",
            ja: "フェレロ ロシェ チョコレート",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            ja: "水遊び",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ja: "チグレウ川",
            ko: "시그르강",
            fr: "Rivière Cigeureuh"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            ja: "スカイウォーク",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            ja: "鳥籠橋",
            fr: "Pont cage à oiseaux"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            fr: "Belvédère",
            ja: "ガゼボ"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ja: "ドック",
            ko: "독",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            fr: "Spot photo naturel",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            ja: "階段でのアクセス。",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Deluxe-Kabinen-Villa mit entspannendem Balkon.',
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다.",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant."
    }
  },
  {
    id: 'kampuh-becik-camelia',
    name: 'Camelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: '/images/villas/camelia/4.-Detail-BedroomWEB.jpg',
    images: [
      '/images/villas/camelia/4.-Detail-BedroomWEB.jpg',
      '/images/villas/camelia/6.-Terrace-ViewWEB.jpg',
      '/images/villas/camelia/AWB_4567WEB.jpg',
      '/images/villas/camelia/AWB_4631WEB.jpg',
      '/images/villas/camelia/CAMELIAaaWEB.jpg',
      '/images/villas/camelia/CAMELIAaWEB.jpg',
      '/images/villas/camelia/CAMELIAWEB.jpg',
      '/images/villas/camelia/KB---View-2.WEB.jpg',
      '/images/villas/camelia/KBWEB.jpg',
      '/images/villas/camelia/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            ko: "침실",
            fr: "Chambre à coucher"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ko: "발코니",
            ja: "バルコニー",
            fr: "Balcon"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            fr: "Salle de bain et toilettes semi-extérieures",
            ko: "반야외 욕실 및 화장실",
            ja: "半屋外のバス・トイレ"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            fr: "Chauffe-eau",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ja: "ランチ",
            ko: "점심",
            fr: "Déjeuner"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            fr: "Dîner",
            ko: "저녁",
            ja: "夕食"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ja: "ウェルカムフルーツ",
            fr: "Fruits de bienvenue",
            ko: "웰컴 과일"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            fr: "Chocolat Ferrero Rocher",
            ko: "페레로로쉐 초콜릿"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ja: "水遊び",
            ko: "물놀이"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ja: "チグレウ川",
            fr: "Rivière Cigeureuh",
            ko: "시그르강"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            fr: "Pont cage à oiseaux",
            ko: "새장 다리",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ja: "ドック",
            ko: "독",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ko: "자연의 포토스팟",
            fr: "Spot photo naturel",
            ja: "自然のフォトスポット"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant.",
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다."
    }
  },
  {
    id: 'kampuh-becik-jacaranda',
    name: 'Jacaranda',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/jacaranda/AWB_4595WEB.jpg',
    images: [
      '/images/villas/jacaranda/AWB_4595WEB.jpg',
      '/images/villas/jacaranda/AWB_4597WEB.jpg',
      '/images/villas/jacaranda/AWB_4608WEB.jpg',
      '/images/villas/jacaranda/AWB_4623WEB.jpg',
      '/images/villas/jacaranda/AWB_4631.WEB.jpg',
      '/images/villas/jacaranda/jalan-kb-(1)web.jpg',
      '/images/villas/jacaranda/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ko: "침실",
            ja: "寝室",
            fr: "Chambre à coucher"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            fr: "Balcon",
            ko: "발코니",
            ja: "バルコニー"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            fr: "Salle de bain et toilettes semi-extérieures",
            ja: "半屋外のバス・トイレ",
            ko: "반야외 욕실 및 화장실"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            ja: "給湯器",
            fr: "Chauffe-eau"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ja: "ランチ",
            ko: "점심"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            ko: "저녁",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            fr: "Fruits de bienvenue",
            ja: "ウェルカムフルーツ",
            ko: "웰컴 과일"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            ko: "페레로로쉐 초콜릿",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            ja: "水遊び",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川",
            ko: "시그르강"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ja: "鳥籠橋",
            fr: "Pont cage à oiseaux",
            ko: "새장 다리"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ja: "ガゼボ",
            ko: "전망대"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            ja: "ドック",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            fr: "Spot photo naturel",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            ja: "階段でのアクセス。",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant.",
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다."
    }
  },
  {
    id: 'kampuh-becik-kigelia',
    name: 'Kigelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: '/images/villas/kigelia/3.-Bedroom-View-WEB.jpg',
    images: [
      '/images/villas/kigelia/3.-Bedroom-View-WEB.jpg',
      '/images/villas/kigelia/5.-BedroomWEB.jpg',
      '/images/villas/kigelia/AWB_4647WEB.jpg',
      '/images/villas/kigelia/AWB_4678WEB.jpg',
      '/images/villas/kigelia/AWB_4683WEB.jpg',
      '/images/villas/kigelia/KB---View-2WEB.jpg',
      '/images/villas/kigelia/KB---View-5WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            ko: "침실",
            fr: "Chambre à coucher"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ko: "발코니",
            ja: "バルコニー",
            fr: "Balcon"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            fr: "Salle de bain et toilettes semi-extérieures",
            ja: "半屋外のバス・トイレ",
            ko: "반야외 욕실 및 화장실"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            ko: "온수기",
            fr: "Chauffe-eau"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            fr: "Petit-déjeuner",
            ja: "朝食"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ja: "ランチ",
            ko: "점심"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            fr: "Dîner",
            ko: "저녁"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ja: "ウェルカムフルーツ",
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ko: "페레로로쉐 초콜릿",
            ja: "フェレロ ロシェ チョコレート",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ko: "2개의 냉수 수영장",
            ja: "冷水プール 2 つ",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            ja: "水遊び",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川",
            ko: "시그르강"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            ja: "スカイウォーク",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ja: "鳥籠橋",
            fr: "Pont cage à oiseaux",
            ko: "새장 다리"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ja: "ガゼボ",
            ko: "전망대",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            fr: "Quai",
            ja: "ドック"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            fr: "Spot photo naturel",
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            fr: "Accès par escaliers.",
            ko: "계단 이용 가능.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다.",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant."
    }
  },
  {
    id: 'kampuh-becik-lophantera',
    name: 'Lophantera',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/lophantera/4.-Detail-BedroomWEB.jpg',
    images: [
      '/images/villas/lophantera/4.-Detail-BedroomWEB.jpg',
      '/images/villas/lophantera/5.-BedroomWEB.jpg',
      '/images/villas/lophantera/AWB_4690-editWEB.jpg',
      '/images/villas/lophantera/AWB_4702.WEB.jpg',
      '/images/villas/lophantera/AWB_4712WEB.jpg',
      '/images/villas/lophantera/AWB_4720WEB.jpg',
      '/images/villas/lophantera/jalan-kb-(10)web.jpg',
      '/images/villas/lophantera/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            fr: "Chambre à coucher",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ja: "半屋外のバス・トイレ",
            ko: "반야외 욕실 및 화장실",
            fr: "Salle de bain et toilettes semi-extérieures"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            fr: "Chauffe-eau",
            ko: "온수기"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            fr: "Petit-déjeuner",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            fr: "Déjeuner",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            ja: "夕食",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ko: "웰컴 과일",
            ja: "ウェルカムフルーツ",
            fr: "Fruits de bienvenue"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            fr: "Chocolat Ferrero Rocher",
            ko: "페레로로쉐 초콜릿",
            ja: "フェレロ ロシェ チョコレート"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            fr: "2 piscines d'eau froide",
            ko: "2개의 냉수 수영장",
            ja: "冷水プール 2 つ"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ko: "시그르강",
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            fr: "Passerelle",
            ko: "스카이워크",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ja: "ガゼボ",
            ko: "전망대"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            ja: "ドック",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            fr: "Spot photo naturel",
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다.",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant."
    }
  },
  {
    id: 'kampuh-becik-monstera',
    name: 'Monstera',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/monstera/4.-Bedroom-ViewWEB.jpg',
    images: [
      '/images/villas/monstera/4.-Bedroom-ViewWEB.jpg',
      '/images/villas/monstera/AWB_4162WEB.jpg',
      '/images/villas/monstera/AWB_4168WEB.jpg',
      '/images/villas/monstera/AWB_4177WEB.jpg',
      '/images/villas/monstera/AWB_4180WEB.jpg',
      '/images/villas/monstera/AWB_4184WEB.jpg',
      '/images/villas/monstera/AWB_4236.WEB.jpg',
      '/images/villas/monstera/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            fr: "Chambre à coucher",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            fr: "Balcon",
            ko: "발코니",
            ja: "バルコニー"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            fr: "Salle de bain et toilettes semi-extérieures",
            ko: "반야외 욕실 및 화장실",
            ja: "半屋外のバス・トイレ"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            fr: "Chauffe-eau",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            fr: "Petit-déjeuner",
            ko: "아침"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            ko: "점심",
            fr: "Déjeuner",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ko: "저녁",
            ja: "夕食",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue",
            ja: "ウェルカムフルーツ"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            ko: "페레로로쉐 초콜릿",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            fr: "2 piscines d'eau froide",
            ja: "冷水プール 2 つ",
            ko: "2개의 냉수 수영장"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            ja: "水遊び",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ja: "チグレウ川",
            ko: "시그르강"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            fr: "Passerelle",
            ko: "스카이워크"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ko: "독",
            fr: "Quai",
            ja: "ドック"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟",
            fr: "Spot photo naturel"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers.",
            ja: "階段でのアクセス。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다.",
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant."
    }
  },
  {
    id: 'kampuh-becik-philodendron',
    name: 'Philodendron',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'Twin Bed'],
    image: '/images/villas/philodendron/AWB_4792WEB.jpg',
    images: [
      '/images/villas/philodendron/AWB_4792WEB.jpg',
      '/images/villas/philodendron/AWB_4795WEB.jpg',
      '/images/villas/philodendron/AWB_4800WEB.jpg',
      '/images/villas/philodendron/AWB_4804web.jpg',
      '/images/villas/philodendron/AWB_4829.WEB.jpg',
      '/images/villas/philodendron/AWB_4829WEB.jpg',
      '/images/villas/philodendron/KB---View-2.WEB.jpg',
      '/images/villas/philodendron/Philodendron-4.WEB.jpg',
      '/images/villas/philodendron/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '2 Single Beds' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            ja: "寝室",
            ko: "침실",
            fr: "Chambre à coucher"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ja: "バルコニー",
            fr: "Balcon",
            ko: "발코니"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ko: "반야외 욕실 및 화장실",
            ja: "半屋外のバス・トイレ",
            fr: "Salle de bain et toilettes semi-extérieures"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            fr: "Chauffe-eau",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            ja: "朝食",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ko: "점심",
            ja: "ランチ"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            fr: "Dîner",
            ja: "夕食",
            ko: "저녁"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ko: "웰컴 과일",
            fr: "Fruits de bienvenue",
            ja: "ウェルカムフルーツ"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            fr: "Chocolat Ferrero Rocher",
            ko: "페레로로쉐 초콜릿",
            ja: "フェレロ ロシェ チョコレート"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            fr: "2 piscines d'eau froide",
            ko: "2개의 냉수 수영장",
            ja: "冷水プール 2 つ"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ja: "チグレウ川",
            ko: "시그르강",
            fr: "Rivière Cigeureuh"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            fr: "Passerelle",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            fr: "Pont cage à oiseaux",
            ko: "새장 다리",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ja: "ガゼボ",
            ko: "전망대"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            ja: "ドック",
            ko: "독",
            fr: "Quai"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            fr: "Spot photo naturel",
            ko: "자연의 포토스팟",
            ja: "自然のフォトスポット"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ko: "계단 이용 가능.",
            ja: "階段でのアクセス。",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다.",
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。",
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant."
    }
  },
  {
    id: 'kampuh-becik-russelia',
    name: 'Russelia',
    cluster: 'Kampuh Becik Villas',
    capacity: '2 Pax',
    bedrooms: 1,
    area: 40,
    toilets: 1,
    price: 2000000,
    priceWeekday: 2000000,
    priceWeekend: 2500000,
    priceHighSeason: 3000000,
    features: ['Mountain View', 'Private Balcony', 'King Bed'],
    image: '/images/villas/russelia/AWB_4851WEB.jpg',
    images: [
      '/images/villas/russelia/AWB_4851WEB.jpg',
      '/images/villas/russelia/AWB_4859WWEB.jpg',
      '/images/villas/russelia/AWB_4869WEB.jpg',
      '/images/villas/russelia/AWB_4879WEB.jpg',
      '/images/villas/russelia/AWB_4884WEB.jpg',
      '/images/villas/russelia/Russelia-7.WEB.jpg',
      '/images/villas/russelia/jalan-kb-(10)web.jpg',
      '/images/villas/russelia/toilet-KB-4WEB.jpg'
    ],
    category: 'couple',
    badge: 'Deluxe Type',
    bedConfiguration: [{ room: 1, beds: '1 King Bed' }],
    facilities: {
      room: [
        { id: 'Kamar tidur', en: 'Bedroom', zh: '??', de: 'Schlafzimmer',
            fr: "Chambre à coucher",
            ja: "寝室",
            ko: "침실"
        },
        { id: 'Balkon', en: 'Balcony', zh: '阳台', de: 'Balkon',
            ko: "발코니",
            ja: "バルコニー",
            fr: "Balcon"
        }
      ],
      amenities: [
        { id: 'Kamar mandi & toilet semi-outdoor', en: 'Semi-outdoor bathroom & toilet', zh: '?????????', de: 'Halb-offenes Badezimmer & Toilette',
            ko: "반야외 욕실 및 화장실",
            ja: "半屋外のバス・トイレ",
            fr: "Salle de bain et toilettes semi-extérieures"
        },
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ko: "온수기",
            fr: "Chauffe-eau",
            ja: "給湯器"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            ja: "朝食",
            fr: "Petit-déjeuner"
        },
        { id: 'Makan siang', en: 'Lunch', zh: '午餐', de: 'Mittagessen',
            fr: "Déjeuner",
            ja: "ランチ",
            ko: "점심"
        },
        { id: 'Makan malam', en: 'Dinner', zh: '晚餐', de: 'Abendessen',
            ja: "夕食",
            ko: "저녁",
            fr: "Dîner"
        },
        { id: 'Welcome fruit', en: 'Welcome fruit', zh: '????', de: 'Begr��ungsfr�chte',
            ja: "ウェルカムフルーツ",
            fr: "Fruits de bienvenue",
            ko: "웰컴 과일"
        },
        { id: 'Coklat ferrero rocher', en: 'Ferrero Rocher chocolate', zh: '??????', de: 'Ferrero Rocher Schokolade',
            ja: "フェレロ ロシェ チョコレート",
            ko: "페레로로쉐 초콜릿",
            fr: "Chocolat Ferrero Rocher"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ja: "冷水プール 2 つ",
            fr: "2 piscines d'eau froide",
            ko: "2개의 냉수 수영장"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ja: "水遊び",
            ko: "물놀이",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ko: "시그르강",
            ja: "チグレウ川",
            fr: "Rivière Cigeureuh"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ko: "전망대",
            ja: "ガゼボ",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Dock', zh: '码头', de: 'Dock',
            fr: "Quai",
            ja: "ドック",
            ko: "독"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spot', zh: '自然拍照点', de: 'Natürlicher Fotospot',
            ja: "自然のフォトスポット",
            ko: "자연의 포토스팟",
            fr: "Spot photo naturel"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다."
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ja: "階段でのアクセス。",
            ko: "계단 이용 가능.",
            fr: "Accès par escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            fr: "Le prix exclut la taxe de 10 %",
            ja: "価格は税抜価格です"
        }
      ]
    },
    description: {
      id: 'Villa kabin tipe Deluxe yang cozy dengan balkon untuk bersantai.',
      en: 'Cozy Deluxe type cabin villa with relaxing balcony.',
      zh: '???????????,???????',
      de: 'Gem�tliche Kabinenvilla vom Typ Deluxe mit entspannendem Balkon.',
        fr: "Villa cabine confortable de type Deluxe avec balcon relaxant.",
        ko: "편안한 발코니를 갖춘 아늑한 디럭스형 캐빈 빌라입니다.",
        ja: "くつろぎのバルコニーを備えた居心地の良いデラックスタイプのキャビンヴィラ。"
    }
  }
];

// Log Home
export const LOG_HOME_VILLAS: Villa[] = [
  {
    id: 'villa-campaka',
    name: 'Campaka Villa',
    cluster: 'Nawa Bumi Villas Puntang',
    capacity: '12 Pax',
    bedrooms: 4,
    area: 146.40,
    toilets: 2,
    price: 6000000,
    priceWeekday: 6000000,
    priceWeekend: 7500000,
    priceHighSeason: 9000000,
    features: ['Ruang Keluarga', 'Dapur Lengkap', 'Dekat Mushola'],
    image: '/images/optimized/villas/villa-campaka/Hero Campaka.webp',
    images: [
      '/images/optimized/villas/villa-campaka/1.webp',
      '/images/optimized/villas/villa-campaka/2.webp',
      '/images/optimized/villas/villa-campaka/3.webp',
      '/images/optimized/villas/villa-campaka/4.webp',
      '/images/optimized/villas/villa-campaka/5.webp',
      '/images/optimized/villas/villa-campaka/6.webp',
      '/images/optimized/villas/villa-campaka/7.webp'
    ],
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '1 king bed' },
      { room: 2, beds: '2 queen bed' },
      { room: 3, beds: '6 single bed' }
    ],
    facilities: {
      room: [
        { id: 'Ruang keluarga', en: 'Living room', zh: '客厅', de: 'Wohnzimmer',
            ja: "リビングルーム",
            fr: "Salon",
            ko: "거실"
        },
        { id: 'Dapur bersih dengan alat masak dan alat makan standar', en: 'Clean kitchen with standard cooking and dining utensils', zh: '??????????????', de: 'Saubere K�che mit Standard-Koch- und Essgeschirr',
            fr: "Cuisine propre avec ustensiles de cuisine et de salle à manger standard",
            ko: "표준 조리 및 식사 도구를 갖춘 깨끗한 주방",
            ja: "標準的な調理器具と食器を備えた清潔なキッチン"
        },
        { id: 'Balkon/ teras', en: 'Balcony/terrace', zh: '??/??', de: 'Balkon/Terrasse',
            ko: "발코니/테라스",
            fr: "Balcon/terrasse",
            ja: "バルコニー/テラス"
        },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz',
            ko: "모닥불 장소 및 장작 1다발",
            fr: "Emplacement pour feu de joie et 1 paquet de bois de chauffage",
            ja: "焚き火スポット＆薪1束"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ja: "給湯器",
            ko: "온수기"
        },
        { id: 'TV', en: 'TV', zh: '??', de: 'Fernseher',
            fr: "TV",
            ja: "テレビ",
            ko: "TV"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ko: "와이파이",
            ja: "Wi-Fi"
        },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            ko: "정수기",
            ja: "ウォーターサーバー",
            fr: "Distributeur d'eau"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            fr: "Savon",
            ja: "石鹸",
            ko: "비누"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            fr: "Shampooing",
            ja: "シャンプー",
            ko: "샴푸"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ko: "아침",
            fr: "Petit-déjeuner",
            ja: "朝食"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 Cold water swimming pools', zh: '2个冷水游泳池', de: '2 Kaltwasser-Schwimmbäder',
            ko: "2개의 냉수 수영장",
            fr: "2 piscines d'eau froide",
            ja: "冷水プール 2 つ"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            ja: "水遊び",
            fr: "Jeu d'eau"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            fr: "Passerelle",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            fr: "Belvédère",
            ko: "전망대",
            ja: "ガゼボ"
        },
        { id: 'Dermaga', en: 'Pier', zh: '??', de: 'Anlegestelle',
            ko: "교각",
            fr: "Jetée",
            ja: "桟橋"
        },
        { id: 'Spot alam untuk berfoto', en: 'Natural photo spots', zh: '?????', de: 'Nat�rliche Fotospots',
            fr: "Spots photo naturels",
            ko: "자연의 사진 명소",
            ja: "自然のフォトスポット"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다."
        },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '???????', de: 'Speisen von au�erhalb sind nicht gestattet.',
            fr: "La nourriture extérieure n’est pas autorisée.",
            ko: "외부 음식은 허용되지 않습니다.",
            ja: "外部からの食べ物の持ち込みは禁止されています。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Stairs access.', zh: '需爬楼梯。', de: 'Treppenzugang.',
            ja: "階段でのアクセス。",
            fr: "Accès par escaliers.",
            ko: "계단 이용 가능."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: {
      id: 'Villa dengan 4 kamar tidur dan dapur bersih. Akses paling dekat dengan kolam renang atas dan mushola umum.',
      en: 'Villa with 4 bedrooms and clean kitchen. Closest access to upper swimming pool and public prayer room.',
      zh: '??4???????????? ??????????????.',
      de: 'Villa mit 4 Schlafzimmern und sauberer K�che. N�chster Zugang zum oberen Schwimmbad und �ffentlichen Gebetsraum.',
        ko: "침실 4개와 깨끗한 주방을 갖춘 빌라입니다. 상부 수영장과 공공 기도실에 가장 가까운 접근.",
        fr: "Villa avec 4 chambres et cuisine propre. Accès le plus proche à la piscine supérieure et à la salle de prière publique.",
        ja: "ベッドルーム4室と清潔なキッチン付きのヴィラ。上部のスイミングプールと公共の礼拝室に最も近いアクセス。"
    }
  },
  {
    id: 'villa-suren',
    name: 'Suren Villa',
    cluster: 'Nawa Bumi Villas Puntang',
    capacity: '8 Pax',
    bedrooms: 2,
    area: 61.28,
    toilets: 1,
    price: 2750000,
    priceWeekday: 2750000,
    priceWeekend: 3250000,
    priceHighSeason: 3900000,
    features: ['Lapangan Luas', 'Api Unggun', 'Family Friendly'],
    image: '/images/optimized/villas/villa-suren/5.-Terraceweb.webp',
    images: [
      '/images/optimized/villas/villa-suren/5.-Terraceweb.webp',
      '/images/optimized/villas/villa-suren/7.-Bedroomweb.webp',
      '/images/optimized/villas/villa-suren/suren-4web.webp',
      '/images/optimized/villas/villa-suren/suren-5web.webp',
      '/images/optimized/villas/villa-suren/suren-7(1)web.webp',
      '/images/optimized/villas/villa-suren/suren-7web.webp',
      '/images/optimized/villas/villa-suren/suren-8kompresWEB.webp',
      '/images/optimized/villas/villa-suren/suren-9.WEB.webp'
    ],
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: 'Total 8 single bed di 2 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '??/??', de: 'Balkon/Terrasse',
            fr: "Balcon/Terrasse",
            ko: "발코니/테라스",
            ja: "バルコニー/テラス"
        },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz',
            ko: "모닥불 장소 및 장작 1다발",
            ja: "焚き火スポット＆薪1束",
            fr: "Emplacement pour feu de joie et 1 paquet de bois de chauffage"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            ja: "給湯器",
            fr: "Chauffe-eau",
            ko: "온수기"
        },
        { id: 'TV', en: 'TV', zh: '??', de: 'Fernseher',
            ko: "TV",
            ja: "テレビ",
            fr: "TV"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ko: "와이파이",
            ja: "Wi-Fi"
        },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            ja: "ウォーターサーバー",
            ko: "정수기",
            fr: "Distributeur d'eau"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            ja: "石鹸",
            fr: "Savon",
            ko: "비누"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            ja: "シャンプー",
            ko: "샴푸",
            fr: "Shampooing"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            fr: "Petit-déjeuner",
            ko: "아침"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2????', de: '2 Kaltwasserpools',
            fr: "2 piscines d'eau froide",
            ko: "냉수 수영장 2개",
            ja: "冷水プール2つ"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            ko: "물놀이",
            fr: "Jeu d'eau",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            fr: "Rivière Cigeureuh",
            ko: "시그르강",
            ja: "チグレウ川"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ko: "스카이워크",
            fr: "Passerelle",
            ja: "スカイウォーク"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            ko: "새장 다리",
            ja: "鳥籠橋",
            fr: "Pont cage à oiseaux"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ja: "ガゼボ",
            ko: "전망대",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Pier', zh: '??', de: 'Pier',
            fr: "Jetée",
            ja: "桟橋",
            ko: "교각"
        },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '?????', de: 'Natur-Fotospots',
            ja: "自然のフォトスポット",
            ko: "자연사진 명소",
            fr: "Spots photos nature"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés."
        },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '????????', de: 'Das Mitbringen von Speisen von au�erhalb ist nicht gestattet.',
            ko: "외부 음식은 허용되지 않습니다.",
            fr: "La nourriture extérieure n’est pas autorisée.",
            ja: "外部からの食べ物の持ち込みは禁止されています。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '?????????', de: 'Der Weg beinhaltet Treppensteigen.',
            ko: "경로에는 계단을 오르내리는 것이 포함됩니다.",
            ja: "道は階段の上り下りが必要です。",
            fr: "Le chemin implique de monter et descendre des escaliers."
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ko: "10% 세금 별도 가격",
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %"
        }
      ]
    },
    description: {
      id: 'Villa dengan 2 kamar tidur dan lapangan terbuka luas. Spot api unggun tersedia.',
      en: 'Villa with 2 bedrooms and spacious open field. Bonfire spot available.',
      zh: '??2?????????????? ??????',
      de: 'Villa mit 2 Schlafzimmern und ger�umigem offenem Feld. Lagerfeuerplatz vorhanden.',
        ko: "침실 2개와 넓은 야외 공간을 갖춘 빌라입니다. 모닥불 장소 이용 가능.",
        fr: "Villa avec 2 chambres et grand terrain ouvert. Place de feu de joie disponible.",
        ja: "ベッドルーム2室と広々としたオープンフィールドのあるヴィラ。焚き火スポットあり。"
    }
  },

  {
    id: 'villa-puspa',
    name: 'Puspa Villa',
    cluster: 'Nawa Bumi Villas Puntang',
    capacity: '15 Pax',
    bedrooms: 3,
    area: 152.61,
    toilets: 2,
    price: 5950000,
    priceWeekday: 5950000,
    priceWeekend: 6500000,
    priceHighSeason: 7950000,
    features: ['Dapur Lengkap', 'Lapangan Luas', 'Dekat Skywalk'],
    image: '/images/optimized/villas/villa-puspa/puspa-7WEB.webp',
    images: [
      '/images/optimized/villas/villa-puspa/Puspa-7(1)WEB.webp',
      '/images/optimized/villas/villa-puspa/Puspa-13WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-7(1)WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-7WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-8WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-12WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-22WEB.webp',
      '/images/optimized/villas/villa-puspa/puspa-27web.webp',
      '/images/optimized/villas/villa-puspa/puspa-33.WEB.webp'
    ],
    category: 'log_home',
    bedConfiguration: [
      { room: 1, beds: '1 king bed dan 13 single bed di 3 ruangan' }
    ],
    facilities: {
      room: [
        { id: 'Dapur bersih dengan alat masak dan alat makan standar', en: 'Clean kitchen with standard cooking and dining utensils', zh: '???????????????', de: 'Saubere K�che mit Standard-Koch- und Essgeschirr',
            ko: "표준 조리 및 식사 도구를 갖춘 깨끗한 주방",
            fr: "Cuisine propre avec ustensiles de cuisine et de salle à manger standard",
            ja: "標準的な調理器具と食器を備えた清潔なキッチン"
        },
        { id: 'Balkon/ teras', en: 'Balcony/Terrace', zh: '??/??', de: 'Balkon/Terrasse',
            ja: "バルコニー/テラス",
            fr: "Balcon/Terrasse",
            ko: "발코니/테라스"
        },
        { id: 'Spot api unggun & 1 ikat kayu bakar', en: 'Bonfire spot & 1 bundle of firewood', zh: '篝火点和1捆木柴', de: 'Lagerfeuerplatz & 1 Bündel Brennholz',
            ko: "모닥불 장소 및 장작 1다발",
            fr: "Emplacement pour feu de joie et 1 paquet de bois de chauffage",
            ja: "焚き火スポット＆薪1束"
        }
      ],
      amenities: [
        { id: 'Water heater', en: 'Water heater', zh: '热水器', de: 'Wasserkocher',
            fr: "Chauffe-eau",
            ja: "給湯器",
            ko: "온수기"
        },
        { id: 'TV', en: 'TV', zh: '??', de: 'Fernseher',
            fr: "TV",
            ja: "テレビ",
            ko: "TV"
        },
        { id: 'Wifi', en: 'Wifi', zh: '无线网络', de: 'WLAN',
            fr: "Wi-Fi",
            ko: "와이파이",
            ja: "Wi-Fi"
        },
        { id: 'Water dispenser', en: 'Water dispenser', zh: '饮水机', de: 'Wasserspender',
            ja: "ウォーターサーバー",
            ko: "정수기",
            fr: "Distributeur d'eau"
        },
        { id: 'Sabun', en: 'Soap', zh: '肥皂', de: 'Seife',
            ko: "비누",
            ja: "石鹸",
            fr: "Savon"
        },
        { id: 'Shampoo', en: 'Shampoo', zh: '洗发水', de: 'Shampoo',
            fr: "Shampooing",
            ko: "샴푸",
            ja: "シャンプー"
        }
      ],
      meals: [
        { id: 'Sarapan', en: 'Breakfast', zh: '早餐', de: 'Frühstück',
            ja: "朝食",
            ko: "아침",
            fr: "Petit-déjeuner"
        }
      ],
      natural: [
        { id: '2 kolam renang air dingin', en: '2 cold water pools', zh: '2????', de: '2 Kaltwasserpools',
            ja: "冷水プール2つ",
            ko: "냉수 수영장 2개",
            fr: "2 piscines d'eau froide"
        },
        { id: 'Water playing', en: 'Water playing', zh: '戏水区', de: 'Wasserspiele',
            fr: "Jeu d'eau",
            ko: "물놀이",
            ja: "水遊び"
        },
        { id: 'Sungai Cigeureuh', en: 'Cigeureuh River', zh: 'Cigeureuh河', de: 'Cigeureuh Fluss',
            ko: "시그르강",
            ja: "チグレウ川",
            fr: "Rivière Cigeureuh"
        },
        { id: 'Skywalk', en: 'Skywalk', zh: '空中漫步桥', de: 'Skywalk',
            ja: "スカイウォーク",
            ko: "스카이워크",
            fr: "Passerelle"
        },
        { id: 'Jembatan sangkar burung', en: 'Bird cage bridge', zh: '鸟笼桥', de: 'Vogelkäfigbrücke',
            fr: "Pont cage à oiseaux",
            ja: "鳥籠橋",
            ko: "새장 다리"
        },
        { id: 'Gazebo', en: 'Gazebo', zh: '凉亭', de: 'Gazebo',
            ja: "ガゼボ",
            ko: "전망대",
            fr: "Belvédère"
        },
        { id: 'Dermaga', en: 'Pier', zh: '??', de: 'Pier',
            fr: "Jetée",
            ja: "桟橋",
            ko: "교각"
        },
        { id: 'Spot alam untuk berfoto', en: 'Nature photo spots', zh: '?????', de: 'Natur-Fotospots',
            fr: "Spots photos nature",
            ko: "자연사진 명소",
            ja: "自然のフォトスポット"
        }
      ]
    },
    policies: {
      checkIn: '15.00 WIB',
      checkOut: '12.00 WIB',
      smokeFree: true,
      specialNotes: [
        { id: 'Tidak diperkenankan membawa hewan, alat pengeras suara, alat musik, dll.', en: 'Pets, loudspeakers, musical instruments, etc. are not allowed.', zh: '不允许携带宠物、使用扩音器、乐器等。', de: 'Haustiere, Lautsprecher, Musikinstrumente usw. sind nicht gestattet.',
            fr: "Les animaux domestiques, haut-parleurs, instruments de musique, etc. ne sont pas autorisés.",
            ja: "ペット、拡声器、楽器等の持ち込みは禁止です。",
            ko: "애완동물, 확성기, 악기 등은 반입하실 수 없습니다."
        },
        { id: 'Tidak diperkenankan membawa makanan dari luar.', en: 'Outside food is not allowed.', zh: '????????', de: 'Das Mitbringen von Speisen von au�erhalb ist nicht gestattet.',
            fr: "La nourriture extérieure n’est pas autorisée.",
            ko: "외부 음식은 허용되지 않습니다.",
            ja: "外部からの食べ物の持ち込みは禁止されています。"
        },
        { id: 'Jalan naik turun tangga.', en: 'Path involves going up and down stairs.', zh: '?????????', de: 'Der Weg beinhaltet Treppensteigen.',
            ko: "경로에는 계단을 오르내리는 것이 포함됩니다.",
            fr: "Le chemin implique de monter et descendre des escaliers.",
            ja: "道は階段の上り下りが必要です。"
        },
        { id: 'Harga belum termasuk pajak 10%', en: 'Price excludes 10% tax', zh: '价格不含10%的税', de: 'Preis exklusive 10% Steuer',
            ja: "価格は税抜価格です",
            fr: "Le prix exclut la taxe de 10 %",
            ko: "10% 세금 별도 가격"
        }
      ]
    },
    description: {
      id: 'Villa dengan 3 kamar tidur dan dapur lengkap. Dekat area Skywalk dengan lapangan terbuka luas.',
      en: 'Villa with 3 bedrooms and complete kitchen. Near Skywalk area with spacious open field.',
      zh: '??3???????????? ??Skywalk?,??????????',
      de: 'Villa mit 3 Schlafzimmern und kompletter K�che. In der N�he des Skywalk-Bereichs mit ger�umigem Freifeldbereich.',
        ja: "ベッドルーム3室と設備の整ったキッチン付きのヴィラ。広々としたオープンフィールドのあるスカイウォークエリアの近く。",
        fr: "Villa avec 3 chambres et cuisine complète. Près de la zone Skywalk avec un champ ouvert spacieux.",
        ko: "침실 3개와 완비된 주방을 갖춘 빌라입니다. 넓은 들판이 있는 스카이워크 지역과 가깝습니다."
    }
  }
];

// Combined export - All villas from all categories
export const VILLAS: Villa[] = [
  ...FOREST_HOUSE_VILLAS,
  ...MOOI_LAKE_VILLAS,
  ...EMERALD_VILLAS,
  ...DANDENONG_VILLAS,
  ...PROVINCIAL_VILLAS,
  ...RIVERSIDE_VILLAS,
  ...KAMPUH_BECIK_VILLAS,
  ...LOG_HOME_VILLAS
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'nature',
    title: {
      id: 'Mandi Hutan',
      en: 'Forest Bathing',
      zh: '???',
      de: 'Waldbaden',
        ko: "삼림욕",
        ja: "森林浴",
        fr: "Baignade en forêt"
    },
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop',
    category: 'Wellness'
  },
  {
    id: 'dining',
    title: {
      id: 'Makan di Tepi Sungai',
      en: 'Riverfront Dining',
      zh: '????',
      de: 'Essen am Flussufer',
        ko: "강변 식사",
        ja: "リバーフロントのダイニング",
        fr: "Restauration au bord de la rivière"
    },
    image: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=800&auto=format&fit=crop',
    category: 'Culinary'
  },
  {
    id: 'refresh',
    title: {
      id: 'Kolam Mata Air Alami',
      en: 'Natural Spring Pools',
      zh: '?????',
      de: 'Nat�rliche Quellpools',
        ko: "천연 온천 수영장",
        ja: "天然温泉プール",
        fr: "Piscines de source naturelle"
    },
    image: 'https://images.unsplash.com/photo-1513258550130-9755146c6b41?q=80&w=800&auto=format&fit=crop',
    category: 'Relax'
  },
  {
    id: 'active',
    title: {
      id: 'Petualangan Skywalk',
      en: 'Skywalk Adventure',
      zh: '??????',
      de: 'Skywalk-Abenteuer',
        ko: "스카이워크 어드벤처",
        ja: "スカイウォーク アドベンチャー",
        fr: "Aventure Skywalk"
    },
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
    category: 'Adventure'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'romantic',
    title: {
      id: 'Pelarian Romantis Gunung',
      en: 'Romantic Mountain Escape',
      zh: '??????',
      de: 'Romantische Bergflucht',
        ko: "로맨틱한 산 탈출",
        fr: "Escapade romantique en montagne",
        ja: "ロマンチックな山での休暇"
    },
    subtitle: {
      id: '2 Hari 1 Malam',
      en: '2 Days 1 Night',
      zh: '2?1?',
      de: '2 Tage 1 Nacht',
        fr: "2 jours 1 nuit",
        ko: "1박 2일",
        ja: "1泊2日"
    },
    duration: '2D1N',
    includes: ['Executive Villa', 'Candlelight Dinner by the River', 'Couple Spa Treatment', 'Breakfast in Bed', 'Flower Arrangement'],
    originalPrice: 4500000,
    price: 3500000,
    unit: 'couple',
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
    savings: 'Save 22%',
    type: 'romantic'
  },
  {
    id: 'family',
    title: {
      id: 'Ikatan Keluarga Utama',
      en: 'Ultimate Family Bonding',
      zh: '??????',
      de: 'Ultimative Familienbindung',
        fr: "Lien familial ultime",
        ko: "궁극적인 가족 결속",
        ja: "究極の家族の絆"
    },
    subtitle: {
      id: '3 Hari 2 Malam',
      en: '3 Days 2 Nights',
      zh: '3?2?',
      de: '3 Tage 2 N�chte',
        ko: "2박 3일",
        fr: "3 jours 2 nuits",
        ja: "2泊3日"
    },
    duration: '3D2N',
    includes: ['Luxury Family Villa', 'Full Board Organic Meals', 'Private Bonfire & BBQ', 'Kids Nature Tour', 'Flying Fox Access'],
    originalPrice: 7500000,
    price: 5900000,
    unit: 'family (4-6 pax)',
    image: 'https://images.unsplash.com/photo-1542834323-5e025882fb84?q=80&w=800&auto=format&fit=crop',
    savings: 'Save 21%',
    type: 'family'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Clarissa S.',
    location: 'Jakarta Executive',
    rating: 5,
    text: "The silence here is expensive. Forest House gave us the privacy and luxury we couldn't find elsewhere in Bandung. Service was impeccable.",
    date: 'January 2025',
    avatar: 'https://i.pravatar.cc/150?u=clarissa',
    verified: true,
    platform: 'TripAdvisor'
  },
  {
    id: 2,
    name: 'David W.',
    location: 'Singapore',
    rating: 5,
    text: "A true hidden gem. The farm-to-table dining at Bale Puntang exceeded expectations. Highly recommend for a digital detox.",
    date: 'December 2024',
    avatar: 'https://i.pravatar.cc/150?u=david',
    verified: true,
    platform: 'Google'
  }
];

export const RESTO_MENU: MenuItem[] = [
  // SIGNATURE DISHES
  {
    id: 'soto-bandung',
    name: 'Soto Bandung',
    description: {
      id: 'Soto daging sapi bening khas Bandung, disajikan segar dengan lobak, kedelai goreng, dan kuah kaldu sapi kaya rasa.',
      en: 'Clear beef soup originating from Bandung, served fresh with radish, fried soybeans, and rich beef broth.',
      zh: '清炖万隆牛肉汤，配以萝卜、炸大豆和浓郁的牛肉清汤，味道鲜美。',
      de: 'Klare Rindfleischsuppe aus Bandung, frisch serviert mit Rettich, gebratenen Sojabohnen und reichhaltiger Rinderbrühe.',
        fr: "Soupe de bœuf claire originaire de Bandung, servie fraîche avec des radis, des graines de soja frites et un riche bouillon de bœuf.",
        ko: "반둥에서 유래한 맑은 쇠고기 수프에 신선한 무, 튀긴 콩, 진한 쇠고기 국물을 곁들여 먹습니다.",
        ja: "バンドン発祥の透明な牛肉スープ。大根、揚げ大豆、濃厚な牛肉スープを添えて新鮮に提供します。"
    },
    price: 45000,
    category: 'mains',
    image: '/images/resto/Soto Bandung.webp',
    isSignature: true
  },
  {
    id: 'gurame-terbang',
    name: 'Gurame Terbang',
    description: {
      id: 'Ikan Gurame goreng krispi yang dibelah menyerupai sayap terbang, renyah di luar dan lembut di dalam.',
      en: 'Crispy fried Gourami fish split to resemble flying wings, crunchy on the outside and soft inside.',
      zh: '香脆炸飞鱼（古拉美鱼），劈开呈飞翼状，外酥里嫩。',
      de: 'Knusprig gebratener Gourami-Fisch, gespalten wie fliegende Flügel, außen knusprig und innen weich.',
        fr: "Poisson Gourami frit croustillant divisé pour ressembler à des ailes volantes, croustillant à l'extérieur et moelleux à l'intérieur.",
        ko: "날아가는 날개 모양으로 갈라져 겉은 바삭하고 속은 부드러운 구라미 생선을 바삭하게 튀긴 요리입니다.",
        ja: "サクサクに揚げたグラミーフィッシュは、翼のように裂け、外側はサクサク、中は柔らかいです。"
    },
    price: 85000,
    category: 'mains',
    image: '/images/resto/Gurame Terbang.webp',
    isSignature: true
  },
  {
    id: 'ayam-woku',
    name: 'Ayam Woku',
    description: {
      id: 'Sajian ayam dengan bumbu kuning pedas khas Manado yang kaya rempah dan aroma kemangi yang menggugah selera.',
      en: 'Chicken dish with spicy Manado yellow seasoning rich in spices and appetizing basil aroma.',
      zh: '万鸦老风味黄姜辣味鸡肉，香料丰富，罗勒香气诱人',
      de: 'Hühnchengericht mit würzigem gelben Manado-Gewürz, reich an Gewürzen und appetitlichem Basilikumaroma.',
        fr: "Plat de poulet avec assaisonnement épicé jaune Manado riche en épices et arôme appétissant de basilic.",
        ja: "スパイスたっぷりのマナドイエローのスパイシーな味付けとバジルの香りが食欲をそそる鶏肉料理です。",
        ko: "향신료가 듬뿍 들어간 매콤한 마나도 옐로우 시즈닝과 바질 향이 식욕을 돋우는 치킨 요리입니다."
    },
    price: 65000,
    category: 'mains',
    image: '/images/resto/woku.webp',
    isSignature: true
  },
  // MENU RESTO REGULAR
  {
    id: 'gurame-goreng-500',
    name: 'Gurame Goreng Terbang 500 gr',
    description: {
      id: 'Ikan Gurame segar ukuran 500 gr digoreng kering dan renyah. Sangat cocok dinikmati bersama sambal dan nasi hangat.',
      en: 'Fresh 500gr Gourami fish deep-fried until dry and crispy. Perfect with sambal and warm rice.',
      zh: '500克新鲜古拉美鱼，炸至干脆。搭配参巴酱和热米饭，味道极佳。',
      de: 'Frischer 500g Gourami-Fisch, trocken und knusprig frittiert. Perfekt mit Sambal und warmem Reis.',
        fr: "500gr de poisson Gourami frais frit jusqu'à ce qu'il soit sec et croustillant. Parfait avec du sambal et du riz chaud.",
        ko: "신선한 500gr 구라미 생선을 건조하고 바삭해질 때까지 튀겨냈습니다. 삼발과 따뜻한 밥과 잘 어울립니다.",
        ja: "500グラムの新鮮なグラミ魚をカラッとカリカリになるまで揚げました。サンバルや温かいご飯との相性も抜群です。"
    },
    price: 90000,
    category: 'mains',
    image: '/images/resto/gurame.webp',
    isSignature: false
  },
  {
    id: 'sayur-asem',
    name: 'Sayur Asem',
    description: {
      id: 'Sayur asem segar dengan kuah yang gurih dan menyegarkan. Lengkap dengan jagung manis, melinjo, dan labu siam.',
      en: 'Fresh tamarind vegetable soup with savory and refreshing broth. Complete with sweet corn, melinjo, and chayote.',
      zh: '清爽的罗望子蔬菜汤，汤汁鲜美。配有甜玉米、买麻藤果和佛手瓜。',
      de: 'Frische Tamarinden-Gemüsesuppe mit herzhafter und erfrischender Brühe. Komplett mit Zuckermais, Melinjo und Chayote.',
        fr: "Soupe de légumes frais au tamarin avec un bouillon savoureux et rafraîchissant. Complétez avec du maïs sucré, du melinjo et de la chayote.",
        ko: "고소하고 상큼한 국물이 어우러진 상큼한 타마린드 야채 수프입니다. 단옥수수, 멜린조, 차요테를 곁들여 완성하세요.",
        ja: "新鮮なタマリンド野菜の風味豊かでさわやかなスープ。スイートコーン、メリンジョ、ハヤトウリを添えて。"
    },
    price: 35000,
    category: 'mains',
    image: '/images/resto/Sayurasem.webp',
    isSignature: false
  },
  {
    id: 'ayam-bakar',
    name: 'Ayam Bakar',
    description: {
      id: 'Ayam bakar dengan bumbu kecap manis rempah meresap sempurna, diolah dengan gaya tradisional Sunda.',
      en: 'Grilled chicken perfectly marinated in sweet soy sauce and spices, prepared in traditional Sundanese style.',
      zh: '烤鸡完美腌制在甜酱油和香料中，以传统巽他风格烹制。',
      de: 'Gegrilltes Hähnchen, perfekt mariniert in süßer Sojasauce und Gewürzen, zubereitet auf traditionelle sundanesische Art.',
        ko: "달콤한 간장과 향신료로 완벽하게 절인 구운 닭고기를 전통적인 순다식 스타일로 조리합니다.",
        fr: "Poulet grillé parfaitement mariné dans de la sauce soja sucrée et des épices, préparé dans le style traditionnel sundanais.",
        ja: "伝統的なスンダ風に調理された、甘い醤油とスパイスに完璧にマリネされたチキンのグリル。"
    },
    price: 45000,
    category: 'mains',
    image: '/images/resto/ayam-bakar.webp',
    isSignature: false
  },
  {
    id: 'nasi-timbel-komplit',
    name: 'Nasi Timbel Komplit Ayam Goreng',
    description: {
      id: 'Paket lengkap nasi bungkus daun pisang, ayam goreng, tahu, tempe, lalapan segar, dan sambal terasi khas.',
      en: 'Complete package of rice wrapped in banana leaf, fried chicken, tofu, tempeh, fresh vegetables, and signature shrimp paste sambal.',
      zh: '全套香蕉叶包饭、炸鸡、豆腐、丹贝、新鲜蔬菜和招牌虾酱参巴。',
      de: 'Komplettpaket mit in Bananenblatt gewickeltem Reis, gebratenem Hähnchen, Tofu, Tempeh, frischem Gemüse und typischem Garnelenpasten-Sambal.',
        ko: "바나나 잎으로 싸인 밥, 프라이드치킨, 두부, 템페, 신선한 야채, 시그니처 새우 페이스트 삼발이 한 패키지에 담겨 있습니다.",
        fr: "Paquet complet de riz enveloppé dans une feuille de bananier, poulet frit, tofu, tempeh, légumes frais et sambal à la pâte de crevettes signature.",
        ja: "バナナの葉で包んだご飯、フライドチキン、豆腐、テンペ、新鮮な野菜、そして特製のエビペーストのサンバルが入った完全なパッケージです。"
    },
    price: 60000,
    category: 'mains',
    image: '/images/resto/timbel.webp',
    isSignature: false
  },
  {
    id: 'sop-buntut',
    name: 'Sop Buntut',
    description: {
      id: 'Sup buntut sapi empuk berkuah kaldu gurih yang dimasak perlahan bersama wortel, kentang, dan taburan bawang goreng.',
      en: 'Tender oxtail soup in savory broth slow-cooked with carrots, potatoes, and sprinkled with fried shallots.',
      zh: '嫩滑的牛尾汤，在鲜美的肉汤中与胡萝卜、土豆慢炖，并撒上炸红葱头。',
      de: 'Zarte Ochsenschwanzsuppe in herzhafter Brühe, langsam gekocht mit Karotten, Kartoffeln und bestreut mit Röstzwiebeln.',
        ko: "당근, 감자를 넣고 천천히 끓인 맛있는 국물에 부드러운 소꼬리 수프를 넣고 튀긴 샬롯을 뿌립니다.",
        ja: "ニンジン、ジャガイモをじっくり煮込んだ風味豊かなスープに、揚げたエシャロットを散らした柔らかいオックステール スープ。",
        fr: "Tendre soupe de queue de bœuf dans un bouillon savoureux, cuite lentement avec des carottes, des pommes de terre et parsemée d'échalotes frites."
    },
    price: 95000,
    category: 'mains',
    image: '/images/resto/sop-buntut.webp',
    isSignature: false
  },
  {
    id: 'sambel-dadak',
    name: 'Sambel Dadak',
    description: {
      id: 'Sambal terasi segar yang dibuat langsung saat dipesan, pedas dan menggugah selera.',
      en: 'Fresh shrimp paste chili sauce made to order, spicy and appetizing.',
      zh: '现点现做的新鲜虾酱辣椒酱，辛辣开胃。',
      de: 'Frische, auf Bestellung zubereitete Garnelenpasten-Chilisauce, scharf und appetitanregend.',
        ja: "注文してから作る新鮮なエビペーストのチリソースは、スパイシーで食欲をそそります。",
        ko: "주문 즉시 만들어지는 신선한 새우 페이스트 칠리 소스는 매콤하고 식욕을 돋웁니다.",
        fr: "Sauce chili à la pâte de crevettes fraîches préparée sur commande, épicée et appétissante."
    },
    price: 15000,
    category: 'sides',
    image: '/images/resto/sambal.webp',
    isSignature: false
  },
  {
    id: 'mie-tektek',
    name: 'Mie Tektek',
    description: {
      id: 'Mie goreng atau rebus gaya kampung dengan sayuran, telur, dan suwiran ayam. Rasanya sangat nostalgik.',
      en: 'Village-style fried or boiled noodles with vegetables, egg, and shredded chicken. Tastes very nostalgic.',
      zh: '乡村风味的炒面或汤面，配以蔬菜、鸡蛋和鸡肉丝。非常有怀旧感。',
      de: 'Gebratene oder gekochte Nudeln nach Art des Dorfes mit Gemüse, Ei und zerkleinertem Hähnchen. Schmeckt sehr nostalgisch.',
        ko: "야채, 계란, 잘게 썬 닭고기를 곁들인 마을 스타일의 튀기거나 삶은 국수입니다. 매우 향수를 불러일으키는 맛입니다.",
        ja: "野菜、卵、細切り鶏肉を添えた村風の揚げ麺または茹で麺。とても懐かしい味わいです。",
        fr: "Nouilles frites ou bouillies à la manière du village avec légumes, œuf et poulet émincé. Un goût très nostalgique."
    },
    price: 40000,
    category: 'mains',
    image: '/images/resto/mie-tektek.webp',
    isSignature: false
  },
  {
    id: 'mie-baso',
    name: 'Mie Baso',
    description: {
      id: 'Mie kuning lezat disajikan dengan bakso sapi asli yang kenyal, tahu kaldu, dan sayuran segar.',
      en: 'Delicious yellow noodles served with chewy authentic beef meatballs, tofu broth, and fresh vegetables.',
      zh: '美味的黄面条，配以劲道的正宗牛肉丸、豆腐汤和新鲜蔬菜。',
      de: 'Köstliche gelbe Nudeln, serviert mit zähen, authentischen Rindfleischbällchen, Tofubrühe und frischem Gemüse.',
        ko: "쫄깃한 정통 쇠고기 미트볼, 두부 국물, 신선한 야채를 곁들인 맛있는 노란색 국수입니다.",
        ja: "おいしい黄色の麺に、もちもちの本格的な牛肉のつくね、豆腐のスープ、新鮮な野菜を添えます。",
        fr: "De délicieuses nouilles jaunes servies avec des boulettes de viande de bœuf authentiques et moelleuses, un bouillon de tofu et des légumes frais."
    },
    price: 40000,
    category: 'mains',
    image: '/images/resto/mie-baso.webp',
    isSignature: false
  },
  {
    id: 'bala-bala',
    name: 'Bala-bala',
    description: {
      id: 'Bakwan sayur renyah khas Sunda, disajikan panas dengan cocolan sambal atau cabe rawit.',
      en: 'Crispy Sundanese vegetable fritters, served hot with chili dip or whole bird\'s eye chilies.',
      zh: '香脆的巽他风格蔬菜杂烩煎饼，热腾腾地配以辣椒酱或朝天椒。',
      de: 'Knusprige sundanesische Gemüsepuffer, heiß serviert mit Chili-Dip oder ganzen kleinen Chilis.',
        ja: "クリスピーなスンダ野菜のフリッター。チリディップまたは鳥の目唐辛子を添えて温かいままお召し上がりいただけます。",
        fr: "Beignets de légumes croustillants du Sundanais, servis chauds avec une trempette au chili ou des piments oiseaux entiers.",
        ko: "바삭바삭한 순다식 야채 튀김은 칠리 딥이나 새눈 고추와 함께 뜨겁게 제공됩니다."
    },
    price: 25000,
    category: 'starters',
    image: '/images/resto/bala-bala.webp',
    isSignature: false
  },
  {
    id: 'pisang-goreng',
    name: 'Pisang Goreng',
    description: {
      id: 'Pisang manis pilihan digoreng tepung renyah. Cocok untuk hidangan penutup yang hangat menemani waktu sore.',
      en: 'Selected sweet bananas deep-fried in crispy batter. Perfect for a warm afternoon dessert.',
      zh: '精选甜香蕉裹上脆浆炸制。非常适合作为温暖的下午甜点。',
      de: 'Ausgewählte süße Bananen, in knusprigem Teig frittiert. Perfekt als warmes Dessert am Nachmittag.',
        ko: "엄선된 달콤한 바나나를 바삭한 반죽에 튀겨낸 요리입니다. 따뜻한 오후 디저트에 딱 맞습니다.",
        fr: "Bananes sucrées sélectionnées, frites dans une pâte croustillante. Parfait pour un dessert chaud l’après-midi.",
        ja: "厳選した甘みのあるバナナをサクサクの衣で揚げました。温かい午後のデザートにぴったりです。"
    },
    price: 25000,
    category: 'desserts',
    image: '/images/resto/pisang-goreng.webp',
    isSignature: false
  },
  {
    id: 'bebek-goreng',
    name: 'Bebek Goreng',
    description: {
      id: 'Bebek muda yang diungkep sempurna lalu digoreng gurih sampai tulang lunak, disajikan dengan sambal khas pencok pedas.',
      en: 'Perfectly braised young duck deep-fried to savory perfection until bones are soft, served with signature spicy pencok sambal.',
      zh: '完美焖炖的嫩鸭，炸至骨酥肉烂，配以招牌辛辣参巴酱。',
      de: 'Perfekt geschmorte junge Ente, herzhaft frittiert, bis die Knochen weich sind, serviert mit typisch scharfem Pencok-Sambal.',
        ko: "뼈가 부드러워질 때까지 완벽하게 튀겨낸 어린 오리를 매콤한 시그니처 펜콕 삼발과 함께 제공됩니다.",
        ja: "骨が柔らかくなるまで風味豊かに揚げた、完璧に煮込んだ若い鴨を特製のスパイシーなペンコック サンバルとともにお召し上がりください。",
        fr: "Jeune canard parfaitement braisé, frit à la perfection jusqu'à ce que les os soient tendres, servi avec son pencok sambal épicé."
    },
    price: 75000,
    category: 'mains',
    image: '/images/resto/bebek.webp',
    isSignature: false
  },
  {
    id: 'nasi-goreng-pete-teri',
    name: 'Nasi Goreng Pete Teri',
    description: {
      id: 'Nasi goreng harum dengan pete segar dan ikan teri Medan renyah, perpaduan rasa umami yang hakiki.',
      en: 'Fragrant fried rice with fresh stinky beans and crispy Medan anchovies, the ultimate umami blend.',
      zh: '香喷喷的炒饭，配以新鲜臭豆和香脆的棉兰凤尾鱼，极致的鲜味融合。',
      de: 'Duftender gebratener Reis mit frischen Stinkbohnen und knusprigen Medan-Sardellen, die ultimative Umami-Mischung.',
        ko: "향긋한 볶음밥에 신선한 냄새나는 콩과 아삭아삭한 메단 멸치가 어우러져 최고의 감칠맛을 선사합니다.",
        fr: "Riz frit parfumé avec des haricots frais puants et des anchois Medan croustillants, le mélange umami ultime.",
        ja: "新鮮な臭み豆とシャキシャキとしたメダンアンチョビの究極の旨味ブレンドの香り豊かなチャーハン。"
    },
    price: 50000,
    category: 'mains',
    image: '/images/resto/nasgor-pete.webp',
    isSignature: false
  }
];

export const ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {
    id: 'nature',
    title: {
      id: 'Wisata Alam',
      en: 'Nature Discovery',
      zh: '自然探索',
      de: 'Naturentdeckung',
        ko: "자연 발견",
        ja: "自然発見",
        fr: "Découverte de la nature"
    },
    subtitle: {
      id: 'Kembali ke Alam',
      en: 'Reconnect with the Earth',
      zh: '重归自然',
      de: 'Wiederverbindung mit der Erde',
        ko: "지구와 다시 연결",
        fr: "Reconnectez-vous avec la Terre",
        ja: "地球と再びつながる"
    },
    heroImage: '/images/facilities/Nature Discovery.jpg',
    description: {
      id: 'Jelajahi keindahan Gunung Puntang yang masih alami melalui jalur trekking dan skywalk kami.',
      en: 'Explore the untouched beauty of Mount Puntang through curated trekking paths and our signature skywalk.',
      zh: '探索原始普塘山的壮丽景色，体验我们的徒步路径和空中走廊。',
      de: 'Erkunden Sie die unber�hrte Sch�nheit des Mount Puntang auf kuratierten Trekkingpfaden und unserem charakteristischen Skywalk.',
        ko: "선별된 트레킹 경로와 시그니처 스카이워크를 통해 푼탕 산의 손길이 닿지 않은 아름다움을 탐험해보세요.",
        ja: "厳選されたトレッキング コースと当ホテルの特徴的なスカイウォークを通じて、プンタン山の自然のままの美しさを探索してください。",
        fr: "Explorez la beauté intacte du mont Puntang à travers des sentiers de randonnée sélectionnés et notre passerelle emblématique."
    },
    items: [
      {
        title: {
          id: 'Jalur Air Terjun',
          en: 'Waterfall Track',
          zh: '瀑布小径',
          de: 'Wasserfall-Wanderung',
            ko: "폭포 트랙",
            fr: "Piste de cascade",
            ja: "滝のトラック"
        },
        description: {
          id: 'Perjalanan menuju air terjun tersembunyi menembus hutan pinus dan perkebunan kopi lokal.',
          en: 'A journey to the hidden waterfall through pine forests and local coffee plantations.',
          zh: '穿越松林和当地咖啡种植园，寻找隐藏瀑布的旅程。',
          de: 'Eine Reise zum versteckten Wasserfall durch Kiefernw�lder und lokale Kaffeeplantagen.',
            ja: "松林と地元のコーヒー農園を通って、隠された滝を目指す旅。",
            fr: "Un voyage vers la cascade cachée à travers les forêts de pins et les plantations de café locales.",
            ko: "소나무 숲과 현지 커피 농장을 거쳐 숨겨진 폭포로의 여행."
        },
        image: '/images/facilities/waterfall track.jpeg'
      },
      {
        title: {
          id: 'Canopy Skywalk',
          en: 'Canopy Skywalk',
          zh: '树冠空中走廊',
          de: 'Baumkronen-Skywalk',
            ja: "キャノピー スカイウォーク",
            ko: "캐노피 스카이워크",
            fr: "Passerelle auvent"
        },
        description: {
          id: 'Berjalan di antara pepohonan di jembatan gantung kami, menawarkan pemandangan lembah yang indah.',
          en: 'Walk among the treetops on our suspension bridge, offering panoramic valley views.',
          zh: '在我们的吊桥上漫步于树梢之间，欣赏全景山谷美景。',
          de: 'Spazieren Sie auf unserer H�ngebr�cke zwischen den Baumwipfeln und genie�en Sie den Panoramablick auf das Tal.',
            ja: "吊り橋の梢の間を歩きながら、渓谷のパノラマの景色を眺めましょう。",
            ko: "탁 트인 계곡 전망을 감상할 수 있는 현수교의 나무 꼭대기 사이를 거닐어 보세요.",
            fr: "Promenez-vous parmi la cime des arbres sur notre pont suspendu offrant une vue panoramique sur la vallée."
        },
        image: '/images/facilities/Canopy Skywalk.jpg'
      },
      {
        title: {
          id: 'Matahari Terbenam & Bintang',
          en: 'Stargazing',
          zh: '观星体验',
          de: 'Sternenbeobachtung',
            ja: "星空観察",
            ko: "별 관찰",
            fr: "Observation des étoiles"
        },
        description: {
          id: 'Nikmati pemandangan langit malam yang jernih di ketinggian pegunungan, jauh dari polusi cahaya kota.',
          en: 'Enjoy the clear night sky views at high altitude, far from city light pollution.',
          zh: '在高海拔地区享受清澈的夜空，远离城市光污染。',
          de: 'Genie�en Sie den klaren Nachthimmel in gro�er H�he, weit entfernt von der Lichtverschmutzung der Stadt.',
            fr: "Profitez de la vue dégagée du ciel nocturne à haute altitude, loin de la pollution lumineuse de la ville.",
            ja: "都会の光害から遠く離れた高地で、澄んだ夜空の景色をお楽しみください。",
            ko: "도시의 빛공해로부터 멀리 떨어진 높은 고도에서 맑은 밤하늘을 감상해보세요."
        },
        image: '/images/facilities/Stargazing.png'
      }
    ]
  },
  {
    id: 'wellness',
    title: {
      id: 'Wellness Pegunungan',
      en: 'Mountain Wellness',
      zh: '山地康养',
      de: 'Berg-Wellness',
        ko: "마운틴 웰니스",
        fr: "Bien-être en montagne",
        ja: "マウンテンウェルネス"
    },
    subtitle: {
      id: 'Meremajakan Tubuh & Jiwa',
      en: 'Rejuvenate Body & Soul',
      zh: '焕活身心',
      de: 'K�rper & Seele verj�ngen',
        ja: "体と魂を若返らせる",
        ko: "몸과 영혼에 활력을 불어넣으세요",
        fr: "Rajeunir le corps et l'âme"
    },
    heroImage: '/images/facilities/Mountain Wellness.jpeg',
    description: {
      id: 'Benamkan diri Anda dalam kekuatan penyembuhan air pegunungan dan udara segar.',
      en: 'Immerse yourself in the healing power of mountain water and fresh air.',
      zh: '沉浸在山泉水和新鲜空气的治愈力量中。',
      de: 'Tauchen Sie ein in die heilende Kraft von Bergwasser und frischer Luft.',
        fr: "Plongez dans le pouvoir curatif de l’eau de montagne et de l’air frais.",
        ja: "山の水と新鮮な空気の癒しの力に浸ってください。",
        ko: "산속의 물과 신선한 공기가 주는 치유의 힘에 빠져보세요."
    },
    items: [
      {
        title: {
          id: 'Aktivitas Sungai',
          en: 'River Playing',
          zh: '溪流戏水',
          de: 'Flussspiel',
            ko: "강놀이",
            fr: "Jouer à la rivière",
            ja: "川遊び"
        },
        description: {
          id: 'Bermain dan berendam di aliran sungai yang jernih dan segar di kawasan resort.',
          en: 'Play and wade in the clear, fresh river streams within the resort area.',
          zh: '在度假村内清澈凉爽的溪流中嬉戏游玩。',
          de: 'Spielen Sie und waten Sie in den klaren, frischen Flussstr�men im Resortbereich.',
            ja: "リゾートエリア内の澄んだ新鮮な川で遊んだり、歩いたりできます。",
            fr: "Jouez et pataugez dans les ruisseaux clairs et frais de la zone de villégiature.",
            ko: "리조트 지역 내 맑고 신선한 강물에서 놀고 물놀이를 즐겨보세요."
        },
        image: '/images/facilities/Riverplaying.jpg'
      },
      {
        title: {
          id: 'Yoga Matahari Terbit',
          en: 'Sunrise Yoga',
          zh: '日出瑜伽',
          de: 'Sonnenaufgangs-Yoga',
            ko: "선라이즈 요가",
            fr: "Yoga au lever du soleil",
            ja: "サンライズヨガ"
        },
        description: {
          id: 'Sambut matahari saat terbit di atas lembah dari dek yoga kami.',
          en: 'Greet the sun as it rises over the valley from our yoga deck.',
          zh: '在我们的瑜伽平台上迎接山谷上空的日出。',
          de: 'Begr��en Sie die Sonne, wenn sie von unserem Yoga-Deck �ber dem Tal aufgeht.',
            ko: "요가 데크에서 계곡 위로 떠오르는 태양을 맞이해 보세요.",
            fr: "Saluez le soleil qui se lève sur la vallée depuis notre terrasse de yoga.",
            ja: "ヨガデッキから渓谷に昇る太陽をお迎えください。"
        },
        image: '/images/facilities/Sunrise Yoga.jpg'
      }
    ]
  },
  {
    id: 'family',
    title: {
      id: 'Rekreasi Keluarga',
      en: 'Family Recreation',
      zh: '家庭娱乐',
      de: 'Familienerholung',
        ja: "家族のレクリエーション",
        ko: "가족 휴양",
        fr: "Loisirs en famille"
    },
    subtitle: {
      id: 'Momen Bersama Keluarga',
      en: 'Quality Family Time',
      zh: '优质家庭时光',
      de: 'Wertvolle Familienzeit',
        ko: "양질의 가족 시간",
        ja: "充実した家族の時間",
        fr: "Du temps de qualité en famille"
    },
    heroImage: '/images/facilities/Family Recreation.jpg',
    description: {
      id: 'Ciptakan kenangan berharga bersama keluarga Anda dengan berbagai aktivitas seru.',
      en: 'Create precious memories with your family through various exciting activities.',
      zh: '通过各种激动人心的活动与家人创造珍贵的回忆。',
      de: 'Schaffen Sie wertvolle Erinnerungen mit Ihrer Familie durch verschiedene aufregende Aktivit�ten.',
        ja: "さまざまな楽しいアクティビティを通じて、ご家族との大切な思い出を作りましょう。",
        fr: "Créez de précieux souvenirs en famille grâce à diverses activités passionnantes.",
        ko: "다양한 액티비티를 통해 가족과 함께 소중한 추억을 만들어보세요."
    },
    items: [
      {
        title: {
          id: 'Piknik Keluarga',
          en: 'Family Picnic',
          zh: '家庭野餐',
          de: 'Familienpicknick',
            fr: "Pique-nique familial",
            ko: "가족 피크닉",
            ja: "ファミリーピクニック"
        },
        description: {
          id: 'Nikmati waktu bersama keluarga dengan piknik di area taman yang asri dan sejuk.',
          en: 'Enjoy quality time with family with a picnic in the lush and cool garden area.',
          zh: '在郁郁葱葱的凉爽花园区享受与家人的美好时光。',
          de: 'Genie�en Sie wertvolle Zeit mit der Familie bei einem Picknick im �ppigen und k�hlen Gartenbereich.',
            ko: "울창하고 시원한 정원에서 피크닉을 즐기며 가족과 함께 즐거운 시간을 보내보세요.",
            ja: "緑豊かで涼しいガーデンエリアでピクニックをしながら、ご家族と充実した時間をお楽しみください。",
            fr: "Profitez de bons moments en famille avec un pique-nique dans le jardin luxuriant et frais."
        },
        image: '/images/facilities/Picnic Family.webp'
      },
      {
        title: {
          id: 'Kolam Renang',
          en: 'Swimming Pool',
          zh: '游泳池',
          de: 'Schwimmbad',
            fr: "Piscine",
            ko: "수영장",
            ja: "スイミングプール"
        },
        description: {
          id: 'Berenang dan bermain air di kolam renang dengan air pegunungan yang segar dan jernih.',
          en: 'Swim and play in the pool with fresh and clear mountain water.',
          zh: '在拥有清新澄澈山泉水的泳池中游泳嬉戏。',
          de: 'Schwimmen und spielen Sie im Pool mit frischem und klarem Bergwasser.',
            fr: "Nagez et jouez dans la piscine aux eaux de montagne fraîches et claires.",
            ko: "맑고 깨끗한 산수가 흐르는 수영장에서 수영하고 놀아보세요.",
            ja: "新鮮で澄んだ山の水を使用したプールで泳いだり遊んだりできます。"
        },
        image: '/images/facilities/Swimming Pool.jpg'
      },
      {
        title: {
          id: 'Taman Bermain Anak',
          en: 'Children Playground',
          zh: '儿童游乐场',
          de: 'Kinderspielplatz',
            ja: "子供の遊び場",
            ko: "어린이 놀이터",
            fr: "Aire de jeux pour enfants"
        },
        description: {
          id: 'Area bermain anak-anak yang aman dan menyenangkan di tengah alam.',
          en: 'Safe and fun children play area in the middle of nature.',
          zh: '大自然中安全有趣的儿童游乐区。',
          de: 'Sicherer und lustiger Kinderspielbereich inmitten der Natur.',
            ja: "自然の中にある安全で楽しい子供たちの遊び場。",
            fr: "Aire de jeux pour enfants sécuritaire et amusante en pleine nature.",
            ko: "자연 속에서 안전하고 재미있는 어린이 놀이 공간."
        },
        image: '/images/facilities/Children Playground.jpg'
      }
    ]
  }
];

export const OFFERS: Offer[] = [];
