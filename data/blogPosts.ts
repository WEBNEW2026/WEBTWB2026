import { LocalizedString } from '../types';

export interface BlogPost {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString; // HTML or Markdown content
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'romantic-honeymoon-mount-puntang',
    title: {
      id: 'Bulan Madu Romantis di Gunung Puntang: Panduan untuk Pasangan',
      en: 'Romantic Honeymoon in Mount Puntang: A Guide for Couples',
      zh: '蓬唐山的浪漫蜜月：情侣指南',
      de: 'Romantische Flitterwochen am Mount Puntang: Ein Leitfaden für Paare'
    },
    excerpt: {
      id: 'Lari dari hiruk pikuk kota dan temukan kembali romansa di udara pegunungan yang sejuk. Berikut adalah rencana perjalanan sempurna untuk bulan madu di Taman Wisata Bougenville.',
      en: 'Escape the city and rediscover romance in the cool mountain air. Here is your perfect itinerary for a honeymoon at Taman Wisata Bougenville.',
      zh: '逃离城市，在凉爽的山区空气中重新发现浪漫。 这是您在 Taman Wisata Bougenville 度蜜月的完美行程。',
      de: 'Entfliehen Sie der Stadt und entdecken Sie die Romantik in der kühlen Bergluft neu. Hier ist Ihre perfekte Reiseroute für Flitterwochen im Taman Wisata Bougenville.'
    },
    image: 'https://images.unsplash.com/photo-1510018572596-e40e2619b412?q=80&w=1600',
    date: 'Nov 29, 2025',
    author: 'Sarah Lovejoy',
    category: 'Honeymoon',
    readTime: '5 min',
    tags: ['honeymoon', 'romantic', 'couple', 'villa'],
    content: {
      id: `
      <h2>Mengapa Memilih Gunung Puntang untuk Bulan Madu Anda?</h2>
      <p>Gunung Puntang menawarkan perpaduan unik antara ketenangan, keindahan alam, dan privasi yang sulit ditemukan di tempat lain. Berbeda dengan tempat-tempat ramai di Puncak atau Lembang, resor kami menyediakan tempat perlindungan terpencil di mana Anda benar-benar dapat fokus satu sama lain.</p>
      
      <h3>Villa Sempurna: Mooi Lake View</h3>
      <p>Untuk pasangan, kami sangat merekomendasikan villa <strong>Mooi Lake View</strong> kami. Dengan balkon pribadi yang menghadap ke danau dan akses langsung ke jalur alam, ini adalah lambang pengasingan romantis.</p>
      
      <h3>Aktivitas Romantis</h3>
      <ul>
        <li><strong>Sarapan Matahari Terbit:</strong> Nikmati sarapan pribadi di balkon Anda saat matahari terbit di atas pegunungan.</li>
        <li><strong>Spa Pasangan:</strong> Manjakan diri dengan pijat tradisional di gazebo tepi sungai kami.</li>
        <li><strong>Melihat Bintang:</strong> Langit pegunungan yang cerah sangat cocok untuk malam romantis di bawah bintang-bintang.</li>
      </ul>
      
      <h3>Pesan Liburan Romantis Anda</h3>
      <p>Siap menciptakan kenangan tak terlupakan? <a href="#booking">Pesan penginapan Anda sekarang</a> dan tanyakan tentang paket bulan madu spesial kami.</p>
    `,
      en: `
      <h2>Why Choose Mount Puntang for Your Honeymoon?</h2>
      <p>Mount Puntang offers a unique blend of serenity, natural beauty, and privacy that is hard to find elsewhere. Unlike the crowded spots in Puncak or Lembang, our resort provides a secluded sanctuary where you can truly focus on each other.</p>
      
      <h3>The Perfect Villa: Mooi Lake View</h3>
      <p>For couples, we highly recommend our <strong>Mooi Lake View</strong> villa. With its private balcony overlooking the lake and direct access to the nature trails, it's the epitome of romantic seclusion.</p>
      
      <h3>Romantic Activities</h3>
      <ul>
        <li><strong>Sunrise Breakfast:</strong> Enjoy a private breakfast on your balcony as the sun rises over the mountains.</li>
        <li><strong>Couple's Spa:</strong> Indulge in a traditional massage at our riverside gazebo.</li>
        <li><strong>Stargazing:</strong> The clear mountain skies are perfect for a romantic night under the stars.</li>
      </ul>
      
      <h3>Book Your Romantic Getaway</h3>
      <p>Ready to create unforgettable memories? <a href="#booking">Book your stay now</a> and ask about our special honeymoon package.</p>
    `,
      zh: `
      <h2>为什么选择蓬唐山度蜜月？</h2>
      <p>蓬唐山提供独特的宁静、自然美景和隐私，这是其他地方难以找到的。 与普卡或伦邦的拥挤景点不同，我们的度假村提供了一个僻静的避难所，让您可以真正专注于彼此。</p>
      
      <h3>完美别墅：Mooi Lake View</h3>
      <p>对于情侣，我们要强烈推荐我们的 <strong>Mooi Lake View</strong> 别墅。 拥有俯瞰湖泊的私人阳台和直接通往自然小径的通道，这是浪漫隐居的缩影。</p>
      
      <h3>浪漫活动</h3>
      <ul>
        <li><strong>日出早餐：</strong> 当太阳从山上升起时，在您的阳台上享用私人早餐。</li>
        <li><strong>情侣水疗：</strong> 在我们的河畔凉亭享受传统按摩。</li>
        <li><strong>观星：</strong> 清澈的山空非常适合在星空下度过浪漫的夜晚。</li>
      </ul>
      
      <h3>预订您的浪漫之旅</h3>
      <p>准备好创造难忘的回忆了吗？ <a href="#booking">立即预订您的住宿</a> 并咨询我们的特别蜜月套餐。</p>
    `,
      de: `
      <h2>Warum Mount Puntang für Ihre Flitterwochen wählen?</h2>
      <p>Mount Puntang bietet eine einzigartige Mischung aus Gelassenheit, natürlicher Schönheit und Privatsphäre, die anderswo schwer zu finden ist. Im Gegensatz zu den überfüllten Orten in Puncak oder Lembang bietet unser Resort einen abgeschiedenen Rückzugsort, an dem Sie sich wirklich aufeinander konzentrieren können.</p>
      
      <h3>Die perfekte Villa: Mooi Lake View</h3>
      <p>Für Paare empfehlen wir unsere <strong>Mooi Lake View</strong> Villa wärmstens. Mit ihrem privaten Balkon mit Blick auf den See und direktem Zugang zu den Naturpfaden ist sie der Inbegriff romantischer Abgeschiedenheit.</p>
      
      <h3>Romantische Aktivitäten</h3>
      <ul>
        <li><strong>Sonnenaufgangsfrühstück:</strong> Genießen Sie ein privates Frühstück auf Ihrem Balkon, während die Sonne über den Bergen aufgeht.</li>
        <li><strong>Paar-Spa:</strong> Gönnen Sie sich eine traditionelle Massage in unserem Pavillon am Flussufer.</li>
        <li><strong>Sternenbeobachtung:</strong> Der klare Berghimmel ist perfekt für eine romantische Nacht unter den Sternen.</li>
      </ul>
      
      <h3>Buchen Sie Ihren romantischen Kurzurlaub</h3>
      <p>Bereit, unvergessliche Erinnerungen zu schaffen? <a href="#booking">Buchen Sie jetzt Ihren Aufenthalt</a> und fragen Sie nach unserem speziellen Flitterwochenpaket.</p>
    `
    }
  },
  {
    id: 'ultimate-family-gathering-guide',
    title: {
      id: 'Panduan Gathering Keluarga Utama di Bougenville',
      en: 'The Ultimate Family Gathering Guide at Bougenville',
      zh: 'Bougenville 终极家庭聚会指南',
      de: 'Der ultimative Leitfaden für Familientreffen in Bougenville'
    },
    excerpt: {
      id: 'Merencanakan reuni keluarga? Temukan mengapa villa penghubung dan ruang terbuka luas kami menjadikan kami pilihan terbaik untuk keluarga besar.',
      en: 'Planning a family reunion? Discover why our connecting villas and large open spaces make us the best choice for big families.',
      zh: '计划家庭团聚？ 了解为什么我们的连通别墅和宽敞的开放空间使我们成为大家庭的最佳选择。',
      de: 'Planen Sie ein Familientreffen? Entdecken Sie, warum unsere Verbindungsvillen und großen Freiflächen uns zur besten Wahl für große Familien machen.'
    },
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1600',
    date: 'Nov 25, 2025',
    author: 'Budi Santoso',
    category: 'Family',
    readTime: '7 min',
    tags: ['family', 'gathering', 'kids', 'activities'],
    content: {
      id: `
      <h2>Ruang untuk Semua Orang</h2>
      <p>Salah satu tantangan terbesar dalam merencanakan gathering keluarga adalah menemukan tempat yang menampung semua orang dengan nyaman. Di Taman Wisata Bougenville, kami menawarkan <strong>villa penghubung</strong> seperti cluster Cemara, yang dapat menampung anggota keluarga bersama-sama.</p>
      
      <h3>Aktivitas untuk Segala Usia</h3>
      <p>Kami memastikan tidak ada yang bosan, dari balita hingga kakek-nenek:</p>
      <ul>
        <li><strong>Untuk Anak-anak:</strong> Taman bermain dan kolam sungai dangkal kami aman dan menyenangkan.</li>
        <li><strong>Untuk Remaja:</strong> Flying fox dan jalur trekking menawarkan petualangan yang mereka idamkan.</li>
        <li><strong>Untuk Dewasa:</strong> Bersantai di restoran Bale Puntang kami atau nikmati kopi di tepi sungai.</li>
      </ul>
      
      <h3>Makan Menjadi Mudah</h3>
      <p>Lupakan kerumitan memasak. Paket katering kami menawarkan masakan Sunda lezat yang disajikan prasmanan tepat di villa Anda.</p>
    `,
      en: `
      <h2>Space for Everyone</h2>
      <p>One of the biggest challenges of planning a family gathering is finding a venue that accommodates everyone comfortably. At Taman Wisata Bougenville, we offer <strong>connecting villas</strong> like the Cemara cluster, which can host family members together.</p>
      
      <h3>Activities for All Ages</h3>
      <p>We ensure that no one gets bored, from toddlers to grandparents:</p>
      <ul>
        <li><strong>For Kids:</strong> Our playground and shallow river pools are safe and fun.</li>
        <li><strong>For Teens:</strong> Flying fox and trekking trails offer the adventure they crave.</li>
        <li><strong>For Adults:</strong> Relax at our Bale Puntang restaurant or enjoy a coffee by the river.</li>
      </ul>
      
      <h3>Dining Made Easy</h3>
      <p>Forget the hassle of cooking. Our catering packages offer delicious Sundanese cuisine served buffet-style right at your villa.</p>
    `,
      zh: `
      <h2>每个人的空间</h2>
      <p>计划家庭聚会的最大挑战之一是找到一个能舒适容纳所有人的场地。 在 Taman Wisata Bougenville，我们提供 <strong>连通别墅</strong>，如 Cemara 组团，可同时容纳多名家庭成员。</p>
      
      <h3>适合所有年龄段的活动</h3>
      <p>我们确保没有人会感到无聊，从蹒跚学步的孩子到祖父母：</p>
      <ul>
        <li><strong>对于孩子：</strong> 我们的游乐场和浅河池既安全又有趣。</li>
        <li><strong>对于青少年：</strong> 飞狐和徒步小径提供了他们渴望的冒险。</li>
        <li><strong>对于成年人：</strong> 在我们的 Bale Puntang 餐厅放松身心，或在河边享用咖啡。</li>
      </ul>
      
      <h3>用餐变得简单</h3>
      <p>忘记烹饪的麻烦。 我们的餐饮套餐提供美味的巽他美食，以自助餐形式在您的别墅内供应。</p>
    `,
      de: `
      <h2>Platz für alle</h2>
      <p>Eine der größten Herausforderungen bei der Planung eines Familientreffens besteht darin, einen Veranstaltungsort zu finden, der alle bequem unterbringt. Im Taman Wisata Bougenville bieten wir <strong>Verbindungsvillen</strong> wie die Cluster Cemara an, die Familienmitglieder zusammen beherbergen können.</p>
      
      <h3>Aktivitäten für alle Altersgruppen</h3>
      <p>Wir sorgen dafür, dass sich niemand langweilt, vom Kleinkind bis zu den Großeltern:</p>
      <ul>
        <li><strong>Für Kinder:</strong> Unser Spielplatz und die flachen Flussbecken sind sicher und machen Spaß.</li>
        <li><strong>Für Teenager:</strong> Flying Fox und Trekkingpfade bieten das Abenteuer, nach dem sie sich sehnen.</li>
        <li><strong>Für Erwachsene:</strong> Entspannen Sie sich in unserem Restaurant Bale Puntang oder genießen Sie einen Kaffee am Fluss.</li>
      </ul>
      
      <h3>Essen leicht gemacht</h3>
      <p>Vergessen Sie den Stress beim Kochen. Unsere Catering-Pakete bieten köstliche sundanesische Küche, die direkt in Ihrer Villa als Buffet serviert wird.</p>
    `
    }
  },
  {
    id: 'history-radio-malabar',
    title: {
      id: 'Gema Sejarah: Kisah Radio Malabar',
      en: 'Echoes of History: The Story of Radio Malabar',
      zh: '历史的回声：马拉巴尔广播电台的故事',
      de: 'Echos der Geschichte: Die Geschichte von Radio Malabar'
    },
    excerpt: {
      id: 'Tahukah Anda bahwa Gunung Puntang pernah menjadi pusat komunikasi global? Selami sejarah menarik Radio Malabar.',
      en: 'Did you know that Mount Puntang was once the center of global communication? Dive into the fascinating history of Radio Malabar.',
      zh: '你知道蓬唐山曾经是全球通信的中心吗？ 深入了解马拉巴尔广播电台的迷人历史。',
      de: 'Wussten Sie, dass der Mount Puntang einst das Zentrum der globalen Kommunikation war? Tauchen Sie ein in die faszinierende Geschichte von Radio Malabar.'
    },
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1600',
    date: 'Oct 15, 2025',
    author: 'Prof. Sejarahwan',
    category: 'History',
    readTime: '10 min',
    tags: ['history', 'heritage', 'radio malabar', 'culture'],
    content: {
      id: `
      <h2>Koneksi ke Dunia</h2>
      <p>Pada awal abad ke-20, pemerintah Hindia Belanda mendirikan Radio Malabar di Gunung Puntang. Itu adalah keajaiban teknik pada masanya, mampu melakukan komunikasi nirkabel dengan Belanda—ribuan kilometer jauhnya.</p>
      
      <h3>Reruntuhan Hari Ini</h3>
      <p>Hari ini, Anda masih dapat mengunjungi reruntuhan stasiun tersebut, yang dikenal sebagai "Kolam Cinta" karena bentuknya. Ini adalah situs yang indah dan menghantui yang mengingatkan kita pada warisan teknologi daerah tersebut.</p>
      
      <h3>Tur Sejarah Terpandu</h3>
      <p>Tamu di Taman Wisata Bougenville dapat mengatur tur terpandu ke situs Radio Malabar. Ini adalah perjalanan singkat dari resor kami dan wajib dikunjungi bagi penggemar sejarah.</p>
    `,
      en: `
      <h2>A Connection to the World</h2>
      <p>In the early 20th century, the Dutch East Indies government established Radio Malabar in Mount Puntang. It was an engineering marvel of its time, capable of wireless communication with the Netherlands—thousands of kilometers away.</p>
      
      <h3>The Ruins Today</h3>
      <p>Today, you can still visit the ruins of the station, known as "Kolam Cinta" (Love Pool) due to its shape. It's a hauntingly beautiful site that reminds us of the area's technological heritage.</p>
      
      <h3>Guided Historical Tours</h3>
      <p>Guests at Taman Wisata Bougenville can arrange for a guided tour to the Radio Malabar site. It's a short trek from our resort and a must-visit for history buffs.</p>
    `,
      zh: `
      <h2>与世界的连接</h2>
      <p>20世纪初，荷属东印度政府在蓬唐山建立了马拉巴尔广播电台。 这是当时的工程奇迹，能够与数千公里外的荷兰进行无线通信。</p>
      
      <h3>今天的废墟</h3>
      <p>今天，您仍然可以参观该站的废墟，因其形状而被称为“爱情池”（Kolam Cinta）。 这是一个令人难以忘怀的美丽景点，提醒着我们该地区的技术遗产。</p>
      
      <h3>导游历史之旅</h3>
      <p>Taman Wisata Bougenville 的客人可以安排前往马拉巴尔广播电台遗址的导游之旅。 从我们的度假村出发只需很短的路程，是历史爱好者的必游之地。</p>
    `,
      de: `
      <h2>Eine Verbindung zur Welt</h2>
      <p>Im frühen 20. Jahrhundert errichtete die Regierung von Niederländisch-Ostindien Radio Malabar am Mount Puntang. Es war ein technisches Wunderwerk seiner Zeit, das in der Lage war, drahtlos mit den Niederlanden zu kommunizieren – tausende Kilometer entfernt.</p>
      
      <h3>Die Ruinen heute</h3>
      <p>Heute können Sie noch die Ruinen der Station besuchen, die aufgrund ihrer Form als "Kolam Cinta" (Liebesbecken) bekannt ist. Es ist ein eindringlich schöner Ort, der uns an das technologische Erbe der Region erinnert.</p>
      
      <h3>Geführte historische Touren</h3>
      <p>Gäste im Taman Wisata Bougenville können eine geführte Tour zur Radio Malabar-Stätte arrangieren. Es ist eine kurze Wanderung von unserem Resort entfernt und ein Muss für Geschichtsinteressierte.</p>
    `
    }
  },
  {
    id: 'lebaran-2025-bougenville',
    title: {
      id: 'Rayakan Lebaran 2025 di Alam',
      en: 'Celebrate Lebaran 2025 in Nature',
      zh: '在大自然中庆祝 2025 年开斋节',
      de: 'Feiern Sie Lebaran 2025 in der Natur'
    },
    excerpt: {
      id: 'Lewati kemacetan kota dan rayakan Idul Fitri dalam kedamaian pegunungan. Pesan lebih awal untuk paket Lebaran spesial kami.',
      en: 'Skip the city traffic and celebrate Idul Fitri in the peace of the mountains. Book early for our special Lebaran packages.',
      zh: '避开城市交通，在宁静的山区庆祝开斋节。 尽早预订我们的特别开斋节套餐。',
      de: 'Vermeiden Sie den Stadtverkehr und feiern Sie Idul Fitri in der Ruhe der Berge. Buchen Sie frühzeitig unsere speziellen Lebaran-Pakete.'
    },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600',
    date: 'Sep 10, 2025',
    author: 'Admin',
    category: 'Seasonal',
    readTime: '4 min',
    tags: ['lebaran', 'holiday', 'promo', 'family'],
    content: {
      id: `
      <h2>Lebaran yang Berbeda</h2>
      <p>Bayangkan bangun dengan suara burung dan sungai di pagi Lebaran, bukan kebisingan kota. Resor kami menawarkan tempat perlindungan yang damai bagi keluarga Anda untuk saling memaafkan, melupakan, dan terhubung kembali.</p>
      
      <h3>Menu Lebaran Spesial</h3>
      <p>Koki kami menyiapkan pesta Lebaran spesial yang menampilkan Ketupat, Opor Ayam, dan Sambal Goreng Ati, jadi Anda tidak perlu khawatir memasak. Nikmati hidangan tradisional dengan pemandangan.</p>
      
      <h3>Penawaran Early Bird</h3>
      <p>Lebaran adalah musim tersibuk kami. Pesan sebelum Desember 2025 untuk mengamankan villa pilihan Anda dan nikmati diskon early bird 10%.</p>
    `,
      en: `
      <h2>A Different Kind of Lebaran</h2>
      <p>Imagine waking up to the sound of birds and the river on Lebaran morning, instead of city noise. Our resort offers a peaceful sanctuary for your family to forgive, forget, and reconnect.</p>
      
      <h3>Special Lebaran Menu</h3>
      <p>Our chefs prepare a special Lebaran feast featuring Ketupat, Opor Ayam, and Sambal Goreng Ati, so you don't have to worry about cooking. Enjoy a traditional meal with a view.</p>
      
      <h3>Early Bird Offer</h3>
      <p>Lebaran is our busiest season. Book before December 2025 to secure your preferred villa and enjoy a 10% early bird discount.</p>
    `,
      zh: `
      <h2>不一样的开斋节</h2>
      <p>想象一下，在开斋节的早晨，在鸟鸣和河流声中醒来，而不是城市的喧嚣。 我们的度假村为您的家人提供了一个宁静的避难所，让您可以原谅、遗忘并重新建立联系。</p>
      
      <h3>特别开斋节菜单</h3>
      <p>我们的厨师准备了特别的开斋节盛宴，包括 Ketupat、Opor Ayam 和 Sambal Goreng Ati，所以您不必担心烹饪。 边欣赏美景边享用传统美食。</p>
      
      <h3>早鸟优惠</h3>
      <p>开斋节是我们最繁忙的季节。 在 2025 年 12 月之前预订以确保您首选的别墅，并享受 10% 的早鸟折扣。</p>
    `,
      de: `
      <h2>Ein anderes Lebaran</h2>
      <p>Stellen Sie sich vor, am Lebaran-Morgen mit dem Zwitschern der Vögel und dem Rauschen des Flusses aufzuwachen, anstatt mit Stadtlärm. Unser Resort bietet einen friedlichen Zufluchtsort für Ihre Familie, um zu vergeben, zu vergessen und sich wieder zu verbinden.</p>
      
      <h3>Spezielles Lebaran-Menü</h3>
      <p>Unsere Köche bereiten ein spezielles Lebaran-Festmahl mit Ketupat, Opor Ayam und Sambal Goreng Ati zu, sodass Sie sich keine Sorgen ums Kochen machen müssen. Genießen Sie ein traditionelles Essen mit Aussicht.</p>
      
      <h3>Frühbucherangebot</h3>
      <p>Lebaran ist unsere geschäftigste Saison. Buchen Sie vor Dezember 2025, um sich Ihre bevorzugte Villa zu sichern und einen Frühbucherrabatt von 10 % zu genießen.</p>
    `
    }
  }
];
