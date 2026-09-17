import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Users, BedDouble, ArrowRight, Star, Home, Sparkles, TreePine, HeartHandshake, ArrowLeft, Check, Search, Loader, Grid3x3 } from 'lucide-react';
import { Villa } from '../types';
import { VILLAS } from '../constants';
import { SEOHead } from './ui/SEOHead';
import { trackPageView, trackEvent } from '../utils/analytics';

interface VillasPageProps {
  lang: 'id' | 'en' | 'zh';
  onBook: () => void;
  onNavigateToActivity: () => void;
  onNavigateToGallery: () => void;
}

// Define Cluster Interface
interface Cluster {
  id: string;
  name: string;
  description: { id: string; en: string; zh: string; de: string; fr?: string; ja?: string; ko?: string };
  image: string;
  type: 'direct' | 'group';
  villaId?: string; // For direct type
  filterFn?: (villa: any) => boolean; // For group type
  customBadge?: string; // Optional override for the badge label
}

// Helper to parse capacity string to number
const parseCapacity = (capacityStr: string): number => {
  const match = capacityStr.match(/(\d+)/);
  return match ? parseInt(match[0], 10) : 0;
};



const VillasPage: React.FC<VillasPageProps> = ({ lang: propLang, onBook, onNavigateToActivity, onNavigateToGallery }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ko';

  // Track page view on mount
  useEffect(() => {
    trackPageView('/villas', 'Villas | Taman Wisata Bougenville');
  }, []);

  const getContent = (content: any) => {
    if (typeof content === 'string') return content;
    return content[lang] || content['en'] || content['id'] || '';
  };

  const [activeTab, setActiveTab] = useState<'all' | 'luxury' | 'log_home' | 'couple'>('all');
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use static data from constants instead of API
  const villasData = VILLAS;


  // Define Clusters Configuration
  const clusters: Record<string, Cluster[]> = {
    luxury: [
      {
        id: 'forest-house',
        name: 'Forest House Puntang',
        description: {
          id: 'Villa termewah dengan pemandangan hutan pinus.',
          en: 'Most luxurious villa with pine forest views.',
          zh: '拥有松林景观的最豪华别墅。',
          de: 'Luxuriöseste Villa mit Blick auf den Kiefernwald.',
          fr: 'Villa la plus luxueuse avec vue sur la forêt de pins.',
          ja: '松の森の景色を望む最も豪華なヴィラ。',
          ko: '소나무 숲 전망의 가장 고급스러운 빌라.'
        },
        image: '/images/fh-hero.webp',
        type: 'direct',
        villaId: 'forest-house',
        customBadge: 'Signature Villa'
      },
      {
        id: 'mooi-lake',
        name: 'Mooi Lake House Puntang',
        description: {
          id: 'Villa tepi danau dengan perahu privat.',
          en: 'Lakeside villa with private boat.',
          zh: '带私人船只的湖畔别墅。',
          de: 'Villa am See mit privatem Boot.',
          fr: 'Villa au bord du lac avec bateau privé.',
          ja: 'プライベートボート付きの湖畔ヴィラ。',
          ko: '전용 보트가 있는 호수 전망 빌라.'
        },
        image: '/images/mlh-hero.webp',
        type: 'direct',
        villaId: 'mooi-lake',
        customBadge: 'Secluded Villa'
      },
      {
        id: 'dandenong',
        name: 'Dandenong Villas Puntang',
        description: {
          id: 'Koleksi villa American Farmhouse (Olinda, Selby).',
          en: 'American Farmhouse collection (Olinda, Selby).',
          zh: '美式农舍系列（Olinda, Selby）。',
          de: 'Amerikanische Farmhouse-Kollektion (Olinda, Selby).',
          fr: 'Collection American Farmhouse (Olinda, Selby).',
          ja: 'アメリカンファームハウスコレクション（Olinda, Selby）。',
          ko: '아메리칸 팜하우스 컬렉션 (Olinda, Selby).'
        },
        image: '/images/villas/dandenong/facade-dpv.webp',
        type: 'group',
        filterFn: (v) => v.cluster === 'Dandenong Villas Puntang'
      },
      {
        id: 'emerald-villas',
        name: 'Emerald Villas Puntang',
        description: {
          id: 'Dua unit villa American Farmhouse eksklusif (Emerald Villa 01 & 02). Cocok untuk keluarga atau gathering.',
          en: 'Two exclusive American Farmhouse villa units (Emerald Villa 01 & 02). Ideal for families or gatherings.',
          zh: '两栋独家美式农舍别墅单元（Emerald Villa 01 & 02）。适合家庭或聚会。',
          de: 'Zwei exklusive Farmhouse-Villaeinheiten (Emerald Villa 01 & 02). Ideal für Familien oder Zusammenkünfte.',
          fr: 'Deux unités de villa American Farmhouse exclusives (Emerald Villa 01 & 02). Idéal pour les familles ou les réunions.',
          ja: '2棟の専用アメリカンファームハウスヴィラ（Emerald Villa 01 & 02）。家族やグループに最適。',
          ko: '두 개의 전용 아메리칸 팜하우스 빌라 (Emerald Villa 01 & 02). 가족 또는 모임에 이상적.'
        },
        image: '/images/optimized/villas/emerald-01/hero.webp',
        type: 'group',
        filterFn: (v) => v.cluster === 'Emerald Villas Puntang'
      },
      {
        id: 'provincial',
        name: 'Provincial Villas Puntang',
        description: {
          id: 'Villa gaya pedesaan Prancis (Gordes, Roussillon, Lourmarin).',
          en: 'French countryside style villas (Gordes, Roussillon, Lourmarin).',
          zh: '法国乡村风格别墅（Gordes, Roussillon, Lourmarin）。',
          de: 'Villen im französischen Landhausstil (Gordes, Roussillon, Lourmarin).',
          fr: 'Villas de style campagne française (Gordes, Roussillon, Lourmarin).',
          ja: 'フランスの田舎風ヴィラ（Gordes, Roussillon, Lourmarin）。',
          ko: '프랑스 시골 스타일 빌라 (Gordes, Roussillon, Lourmarin).'
        },
        image: '/images/optimized/membership/membership-hero.webp',
        type: 'group',
        filterFn: (v) => v.cluster === 'Provincial Villas Puntang'
      },
      {
        id: 'riverside',
        name: 'Riverside Villas Puntang',
        description: {
          id: 'Villa tepi sungai (Blomst, Fiore, Hana).',
          en: 'Riverside villas (Blomst, Fiore, Hana).',
          zh: '河畔别墅（Blomst, Fiore, Hana）。',
          de: 'Villen am Flussufer (Blomst, Fiore, Hana).',
          fr: 'Villas en bord de rivière (Blomst, Fiore, Hana).',
          ja: '川沿いのヴィラ（Blomst, Fiore, Hana）。',
          ko: '강변 빌라 (Blomst, Fiore, Hana).'
        },
        image: '/images/villas/riverside-hana/Rsv-11kompres.WEB.jpg',
        type: 'group',
        filterFn: (v) => v.cluster === 'Riverside Villas Puntang'
      }
    ],
    couple: [
      {
        id: 'kampuh-becik-deluxe',
        name: 'Kampuh Becik Villas (Deluxe)',
        description: {
          id: 'Kabin romantis tipe Deluxe.',
          en: 'Romantic Deluxe type cabins.',
          zh: '浪漫豪华型小屋。',
          de: 'Romantische Deluxe-Hütten.',
          fr: 'Cabines romantiques de type Deluxe.',
          ja: 'ロマンチックなデラックスタイプのキャビン。',
          ko: '로맨틱 디럭스 타입 캐빈.'
        },
        image: '/images/villas/jacaranda/AWB_4595WEB.jpg',
        type: 'group',
        filterFn: (v) => v.badge === 'Deluxe Type'
      },
      {
        id: 'kampuh-becik-executive',
        name: 'Kampuh Becik Villas (Executive)',
        description: {
          id: 'Kabin romantis tipe Executive dengan akses sungai.',
          en: 'Romantic Executive cabins with river access.',
          zh: '带河流通道的浪漫行政小屋。',
          de: 'Romantische Executive-Hütten mit Flusszugang.',
          fr: 'Cabines romantiques Executive avec accès à la rivière.',
          ja: '川へのアクセス付きのロマンチックなエグゼクティブキャビン。',
          ko: '강 접근이 가능한 로맨틱 이그제큐티브 캐빈.'
        },
        image: '/images/villas/agaphantus/agaphantuss.jpgWEB.jpg',
        type: 'group',
        filterFn: (v) => v.badge === 'Executive Type'
      }
    ],
    log_home: [
      {
        id: 'nawa-bumi',
        name: 'Nawa Bumi Villas Puntang',
        description: {
          id: 'Kompleks Log Home (Campaka, Puspa, Suren).',
          en: 'Log Home complex (Campaka, Puspa, Suren).',
          zh: '原木家居综合体（Campaka, Puspa, Suren）。',
          de: 'Blockhaus-Komplex (Campaka, Puspa, Suren).',
          fr: 'Complexe Log Home (Campaka, Puspa, Suren).',
          ja: 'ログホームコンプレックス（Campaka, Puspa, Suren）。',
          ko: '로그 홈 단지 (Campaka, Puspa, Suren).'
        },
        image: '/images/villas/hero-campaka.webp',
        type: 'group',
        filterFn: (v) => v.category === 'log_home'
      }
    ]
  };

  const categories = [
    { id: 'all', icon: Home },
    { id: 'luxury', icon: Sparkles },
    { id: 'log_home', icon: TreePine },
    { id: 'couple', icon: HeartHandshake },
  ];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    trackEvent({ action: 'villa_filter_tab', category: 'engagement', label: tabId });
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId as any);
      setActiveCluster(null);
      setIsTransitioning(false);
    }, 300);
  };

  const handleClusterClick = (cluster: Cluster) => {
    if (cluster.type === 'direct' && cluster.villaId) {
      // Navigate directly to villa detail
      trackEvent({ action: 'villa_card_click', category: 'engagement', label: cluster.name });
      const event = new CustomEvent('navigate-villa', { detail: cluster.villaId });
      window.dispatchEvent(event);
    } else {
      // Enter group view
      trackEvent({ action: 'villa_cluster_click', category: 'engagement', label: cluster.name });
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCluster(cluster.id);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleBackToCategories = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCluster(null);
      setIsTransitioning(false);
    }, 300);
  };


  // Helper to get capacity range for a cluster
  const getCapacityRange = (cluster: Cluster): string => {
    let minCap = Infinity;
    let maxCap = -Infinity;

    if (cluster.type === 'direct' && cluster.villaId) {
      const villa = villasData.find(v => v.id === cluster.villaId);
      if (villa) {
        // Try to parse range if string contains "-" e.g. "13-16 orang"
        const rangeMatch = villa.capacity.match(/(\d+)\s*-\s*(\d+)/);
        if (rangeMatch) {
          return `${rangeMatch[1]} - ${rangeMatch[2]} Pax`;
        }
        return `${parseCapacity(villa.capacity)} Pax`;
      }
    } else if (cluster.type === 'group' && cluster.filterFn) {
      const matchingVillas = villasData.filter(v => cluster.filterFn!(v));
      matchingVillas.forEach(v => {
        const cap = parseCapacity(v.capacity);
        if (cap < minCap) minCap = cap;
        if (cap > maxCap) maxCap = cap;
      });
    }

    if (minCap === Infinity || maxCap === -Infinity) return '';
    if (minCap === maxCap) return `${minCap} Pax`;
    return `${minCap} - ${maxCap} Pax`;
  };

  // Determine what to render
  const renderContent = () => {
    // 1. Cluster View (Drill-down)
    if (activeCluster) {
      // Find the active cluster object to get the filter function
      let currentClusterObj: Cluster | undefined;
      for (const key in clusters) {
        const found = clusters[key].find(c => c.id === activeCluster);
        if (found) {
          currentClusterObj = found;
          break;
        }
      }

      const clusterVillas = currentClusterObj?.filterFn
        ? villasData.filter(v => currentClusterObj.filterFn!(v))
        : [];

      return (
        <div>
          <button
            onClick={handleBackToCategories}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-forest transition-colors text-sm uppercase tracking-wider font-medium"
          >
            <ArrowLeft size={16} />
            <span>{t('common.backTo', 'Back to')} {activeTab === 'all' ? t('villa.categories.all', 'All') : t(`villa.categories.${activeTab}`)}</span>
          </button>
          <div className="mb-8">
            <h2 className="text-3xl font-serif text-gray-900 mb-2">{currentClusterObj?.name}</h2>
            <p className="text-gray-500 font-light">{getContent(currentClusterObj?.description)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {clusterVillas.map(villa => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>
        </div>
      );
    }

    // 2. Main Category View
    // If 'all', show all clusters from all categories? Or just all villas?
    // User request implies a structured hierarchy. "All" might be messy if we mix clusters and units.
    // Let's make "All" show ALL CLUSTERS.

    let displayClusters: Cluster[] = [];
    let initialClusters: Cluster[] = [];

    if (activeTab === 'all') {
      initialClusters = [
        ...clusters.luxury,
        ...clusters.log_home,
        ...clusters.couple
      ];
    } else {
      initialClusters = clusters[activeTab] || [];
    }

    // Show all clusters
    displayClusters = initialClusters.filter(cluster => {
      if (cluster.type === 'direct' && cluster.villaId) {
        const villa = villasData.find(v => v.id === cluster.villaId);
        return villa ? true : false;
      } else if (cluster.type === 'group' && cluster.filterFn) {
        const matchingVillas = villasData.filter(v => cluster.filterFn!(v));
        return matchingVillas.length > 0;
      }
      return false;
    });

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
        {displayClusters.length > 0 ? (
          displayClusters.map(cluster => {
            const capacityRange = getCapacityRange(cluster);

            return (
              <div
                key={cluster.id}
                onClick={() => handleClusterClick(cluster)}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer h-full flex flex-col active:scale-[0.98]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cluster.image}
                    alt={cluster.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="relative overflow-hidden rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/20">
                      <span className={`block px-3 py-1 text-xs font-medium tracking-wider uppercase backdrop-blur-md ${cluster.type === 'direct' || cluster.customBadge ? 'bg-forest-green/95 text-white' : 'bg-white/90 text-forest-dark'}`}>
                        {cluster.customBadge
                          ? cluster.customBadge
                          : cluster.type === 'direct'
                            ? t('villas.singleUnit', 'Single Unit')
                            : t('villas.cluster', 'Cluster')
                        }
                      </span>
                      {/* Shine effect */}
                      {(cluster.type === 'direct' || cluster.customBadge) && (
                        <div className="absolute inset-0 -translate-x-[150%] animate-shimmer pointer-events-none">
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Capacity Badge (Replaces Price) */}
                  <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-sm text-white text-xs font-medium flex items-center gap-2">
                    <Users size={12} />
                    <span>{capacityRange}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-3 group-hover:text-forest transition-colors">
                    {cluster.name}
                  </h3>
                  <p className="text-gray-600 font-light text-base leading-loose mb-6 flex-grow">
                    {getContent(cluster.description)}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-forest text-xs uppercase tracking-[0.2em] font-medium group-hover:gap-4 transition-all duration-300">
                    <span>{cluster.type === 'direct' ? t('home.viewDetails') : t('villas.exploreCluster', 'Explore Cluster')}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
            <Search size={48} className="mb-4 text-gray-300" />
            <p className="text-lg font-medium">{t('common.noVillas', 'No villas available')}</p>
          </div>
        )}
      </div>
    );
  };

  const categoryContent = {
    all: {
      title: { id: 'Koleksi Villa Kami', en: 'Our Villas Collection', zh: '我们的别墅系列', de: 'Unsere Villenkollektion', fr: 'Notre Collection de Villas', ja: '私たちのヴィラコレクション', ko: '빌라 컬렉션' },
      subtitle: { id: 'Temukan Akomodasi Sempurna Anda', en: 'Discover Your Perfect Accommodation', zh: '发现您的完美住宿', de: 'Entdecken Sie Ihre perfekte Unterkunft', fr: 'Découvrez Votre Hébergement Parfait', ja: '理想の宿泊施設を見つけましょう', ko: '완벽한 숙소를 찾아보세요' },
      description: {
        id: 'Jelajahi koleksi lengkap villa premium kami yang dirancang untuk memberikan pengalaman menginap tak terlupakan.',
        en: 'Explore our complete collection of premium villas designed to provide an unforgettable stay experience.',
        zh: '探索我们旨在提供难忘住宿体验的高级别墅完整系列。',
        de: 'Entdecken Sie unsere komplette Kollektion von Premium-Villen, die für ein unvergessliches Aufenthaltserlebnis konzipiert sind.',
        fr: 'Explorez notre collection complète de villas premium conçues pour offrir une expérience de séjour inoubliable.',
        ja: '忘れられない滞在体験を提供するために設計されたプレミアムヴィラの完全なコレクションをご覧ください。',
        ko: '잊을 수 없는 숙박 경험을 제공하기 위해 설계된 프리미엄 빌라의 전체 컬렉션을 탐색하세요.'
      },
      image: '/images/landscape/Landscape_FH.webp',
    },
    luxury: {
      title: { id: 'Luxury Collection', en: 'Luxury Collection', zh: '豪华系列', de: 'Luxuskollektion', fr: 'Collection Luxe', ja: 'ラグジュアリーコレクション', ko: '럭셔리 컬렉션' },
      subtitle: { id: 'Kemewahan & Kenyamanan', en: 'Luxury & Comfort', zh: '豪华与舒适', de: 'Luxus & Komfort', fr: 'Luxe & Confort', ja: '贅沢と快適さ', ko: '럭셔리 & 컴포트' },
      description: {
        id: 'Koleksi villa termewah kami dengan fasilitas premium. Termasuk Forest House, Mooi Lake, Emerald, Dandenong, Provincial, dan Riverside.',
        en: 'Our most luxurious villa collection with premium facilities. Includes Forest House, Mooi Lake, Emerald, Dandenong, Provincial, and Riverside.',
        zh: '我们最豪华的别墅系列，配备一流的设施。包括森林别墅、莫伊湖、翡翠、丹德农、普罗旺斯和河畔。',
        de: 'Unsere luxuriöseste Villenkollektion mit erstklassigen Einrichtungen. Beinhaltet Forest House, Mooi Lake, Emerald, Dandenong, Provincial und Riverside.',
        fr: 'Notre collection de villas la plus luxueuse avec des installations premium. Comprend Forest House, Mooi Lake, Emerald, Dandenong, Provincial et Riverside.',
        ja: 'プレミアム施設を備えた最も豪華なヴィラコレクション。Forest House、Mooi Lake、Emerald、Dandenong、Provincial、Riversideが含まれます。',
        ko: '프리미엄 시설을 갖춘 가장 고급스러운 빌라 컬렉션. Forest House, Mooi Lake, Emerald, Dandenong, Provincial, Riverside가 포함됩니다.'
      },
      image: '/images/fh-hero.webp',
    },
    log_home: {
      title: { id: 'Log Cabin', en: 'Log Cabin', zh: '原木小屋', de: 'Blockhütte', fr: 'Chalet en Rondin', ja: 'ログキャビン', ko: '로그 캐빈' },
      subtitle: { id: 'Nuansa Kayu Alami', en: 'Natural Wooden Vibes', zh: '天然木质氛围', de: 'Natürliche Holzatmosphäre', fr: 'Ambiance Bois Naturel', ja: '自然な木の雰囲気', ko: '자연스러운 나무 분위기' },
      description: {
        id: 'Rasakan kehangatan menginap di villa kayu autentik yang menyatu dengan alam. Cocok untuk keluarga besar.',
        en: 'Experience the warmth of staying in an authentic wooden villa that blends with nature. Perfect for large families.',
        zh: '体验入住与大自然融为一体的正宗木制别墅的温暖。非常适合大家庭。',
        de: 'Erleben Sie die Wärme eines Aufenthalts in einer authentischen Holzvilla, die mit der Natur verschmilzt. Perfekt für große Familien.',
        fr: 'Vivez la chaleur d\'un séjour dans une villa en bois authentique qui se fond dans la nature. Parfait pour les grandes familles.',
        ja: '自然と調和した本格的な木のヴィラに滞在する暖かさを体験してください。大家族に最適です。',
        ko: '자연과 어우러지는 정통 나무 빌라에서 숙박하는 따뜻함을 경험하세요. 대가족에게 딱입니다.'
      },
      image: '/images/villas/hero-campaka.webp',
    },
    couple: {
      title: { id: 'Couples Retreat', en: 'Couples Retreat', zh: '情侣度假', de: 'Pärchenurlaub', fr: 'Retraite en Couple', ja: 'カップルリトリート', ko: '커플 리트리트' },
      subtitle: { id: 'Romantis & Privat', en: 'Romantic & Private', zh: '浪漫与私密', de: 'Romantisch & Privat', fr: 'Romantique & Privé', ja: 'ロマンチックでプライベート', ko: '로맨틱 & 프라이빗' },
      description: {
        id: 'Villa intim yang dirancang khusus untuk pasangan. Pilihan tipe Deluxe dan Executive.',
        en: 'Intimate villas designed specifically for couples. Choice of Deluxe and Executive types.',
        zh: '专为情侣设计的私密别墅。豪华型和行政型可供选择。',
        de: 'Intime Villen, die speziell für Paare entworfen wurden. Auswahl an Deluxe- und Executive-Typen.',
        fr: 'Villas intimes conçues spécifiquement pour les couples. Choix des types Deluxe et Executive.',
        ja: 'カップルのために特別に設計された親密なヴィラ。デラックスタイプとエグゼクティブタイプからお選びいただけます。',
        ko: '커플을 위해 특별히 설계된 아늑한 빌라. 디럭스 및 이그제큐티브 타입 선택 가능.'
      },
      image: '/images/villas/kb-couple.webp',
    }
  };

  const currentContent = categoryContent[activeTab];

  // SEO Keywords per category - Dynamic targeting
  const seoKeywords = {
    all: t('seo.villasPage.all.keywords'),
    luxury: t('seo.villasPage.luxury.keywords'),
    log_home: t('seo.villasPage.log_home.keywords'),
    couple: t('seo.villasPage.couple.keywords')
  };

  // SEO Titles per category - More specific
  const seoTitles = {
    all: t('seo.villasPage.all.title'),
    luxury: t('seo.villasPage.luxury.title'),
    log_home: t('seo.villasPage.log_home.title'),
    couple: t('seo.villasPage.couple.title')
  };

  // SEO Descriptions per category - Keyword-rich
  const seoDescriptions = {
    all: t('seo.villasPage.all.description'),
    luxury: t('seo.villasPage.luxury.description'),
    log_home: t('seo.villasPage.log_home.description'),
    couple: t('seo.villasPage.couple.description')
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags - Dynamic per Category */}
      <SEOHead
        title={seoTitles[activeTab]}
        description={seoDescriptions[activeTab]}
        keywords={seoKeywords[activeTab]}
        ogImage="https://tamanwisatabougenville.com/images/og-villas.jpg"
        ogUrl={`https://tamanwisatabougenville.com/villas${activeTab !== 'all' ? `?category=${activeTab}` : ''}`}
      />
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentContent.image}
            alt={getContent(currentContent.title)}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-0">
          <span className="inline-block py-1.5 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs tracking-[0.2em] uppercase mb-3 md:mb-4 animate-fade-in-up">
            {getContent(currentContent.subtitle)}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-white mb-3 md:mb-4 animate-fade-in-up delay-100 leading-tight">
            {getContent(currentContent.title)}
          </h1>
          <p className="text-white/90 text-sm md:text-lg font-light leading-relaxed max-w-xl md:max-w-2xl mx-auto animate-fade-in-up delay-200 px-4 md:px-0">
            {getContent(currentContent.description)}
          </p>
        </div>
      </div>

      {/* Filter Tabs - Sticky */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 relative">
          {/* Left fade indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none md:hidden" />

          <div className="flex items-center justify-start md:justify-center gap-2 md:gap-8 py-4 overflow-x-auto no-scrollbar px-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                aria-label={`Filter by ${t(`villa.categories.${cat.id}`)}`}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm tracking-wide transition-all duration-300 whitespace-nowrap active:scale-95
                  ${activeTab === cat.id
                    ? 'bg-forest-green text-white shadow-lg shadow-forest-green/20'
                    : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                <cat.icon size={16} />
                <span>{t(`villa.categories.${cat.id}`)}</span>
              </button>
            ))}
          </div>

          {/* Right fade indicator */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none md:hidden" />
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-4 py-20 md:py-28 min-h-[600px]">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// Helper Component for Villa Card (Reused)
const VillaCard: React.FC<{ villa: any }> = ({ villa }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language?.split('-')[0] || 'id') as 'id' | 'en' | 'zh' | 'de' | 'fr' | 'ja' | 'ko';

  // Get localized villa name if available, else fallback to plain name
  const getVillaName = () => {
    if (villa.localizedName) {
      return villa.localizedName[lang] || villa.localizedName['en'] || villa.name;
    }
    return villa.name;
  };

  // Helper to format capacity display
  const getCapacityDisplay = (capacity: string) => {
    // If capacity string already contains "Pax" or "orang", just use it but maybe replace "orang" with localized term for consistency
    if (capacity.toLowerCase().includes('pax')) return capacity;
    return capacity.replace(/orang/i, t('villa.pax', 'Pax'));
  };

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-pointer active:scale-[0.98]"
      onClick={() => {
        const event = new CustomEvent('navigate-villa', { detail: villa.id });
        window.dispatchEvent(event);
      }}
    >
      {/* Image Container */}
      <div className="relative h-56 md:h-64 overflow-hidden">
        <img
          src={villa.image}
          alt={villa.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Capacity Badge (Replaces Price) */}
        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm flex items-center gap-2">
          <Users size={16} className="text-white" />
          <p className="font-serif text-lg md:text-xl text-white font-medium">{getCapacityDisplay(villa.capacity)}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-1 group-hover:text-forest transition-colors">
              {getVillaName()}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
              <MapPin size={14} className="text-gold" />
              <span>{t('home.location')}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-xs font-medium text-gray-600">
            <Star size={12} className="fill-gold text-gold" />
            <span>4.9</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 py-4 border-t border-gray-100 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
            <BedDouble size={14} />
            <span>{villa.bedrooms} Bed</span>
          </div>
          <div className="w-px h-3 bg-gray-200" />
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
            <Grid3x3 size={14} />
            <span>{villa.area ? `${villa.area} m²` : t('villa.freeBreakfast', 'Free Breakfast')}</span>
          </div>
        </div>

        {/* Action */}
        <button className="w-full py-3 border-2 border-gray-200 text-gray-600 text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-forest-green hover:text-white hover:border-forest-green transition-all duration-300 rounded-lg flex items-center justify-center gap-2 group-hover:bg-forest-green group-hover:text-white group-hover:border-forest-green active:scale-95">
          <span>{t('home.viewDetails')}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default VillasPage;
