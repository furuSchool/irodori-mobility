import { User, FlightLog, FlightSummary, WingRental,Photo } from '../types';

export const mockUsers: User[] = [
  // 既存のユーザー
  {
    id: '1',
    name: 'Sky Walker',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1715, lng: 136.8821 }, // 名古屋駅周辺
    isOnline: true,
    photos: [
      {
        id: 'photo1',
        url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '今日は雲の上まで飛べました！最高の眺めです 🌤️',
        timestamp: '2025-09-15T14:30:00Z',
        likes: 24,
        comments: []
      }
    ]
  },
  {
    id: '2',
    name: 'Cloud Rider',
    avatar: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1701, lng: 136.8805 }, // 名古屋駅周辺
    isOnline: true,
    photos: [
      {
        id: 'photo2',
        url: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '夕日と一緒に飛ぶのは本当に幻想的でした ✨',
        timestamp: '2025-09-15T17:45:00Z',
        likes: 18,
        comments: []
      }
    ]
  },
  {
    id: '3',
    name: 'Wind Dancer',
    avatar: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1728, lng: 136.8799 }, // 名古屋駅周辺
    isOnline: false,
    photos: [
      {
        id: 'photo3',
        url: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '都市の上空からの景色は息を呑むほど美しい 🏙️',
        timestamp: '2025-09-15T12:20:00Z',
        likes: 31,
        comments: []
      }
    ]
  },
  // 以下、追加のユーザーデータ
  {
    id: '4',
    name: 'Aero Ace',
    avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1695, lng: 136.8832 },
    isOnline: true,
    photos: [
      {
        id: 'photo4',
        url: 'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '名古屋城を見下ろしながら。歴史を感じるフライトでした 🏯',
        timestamp: '2025-09-14T11:00:00Z',
        likes: 45,
        comments: []
      }
    ]
  },
  {
    id: '5',
    name: 'Glide Master',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1731, lng: 136.8814 },
    isOnline: false,
    photos: [
      {
        id: 'photo5',
        url: 'https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '霧の中を突き進む感覚、最高にスリリング！',
        timestamp: '2025-09-14T08:15:00Z',
        likes: 39,
        comments: []
      }
    ]
  },
  {
    id: '6',
    name: 'Summit Soarer',
    avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1689, lng: 136.8788 },
    isOnline: true,
    photos: [
      {
        id: 'photo6',
        url: 'https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '南国の島の上をフライト！海の色が信じられないくらい綺麗でした。',
        timestamp: '2025-09-13T16:50:00Z',
        likes: 62,
        comments: []
      }
    ]
  },
  {
    id: '7',
    name: 'Feather Fin',
    avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1722, lng: 136.8845 },
    isOnline: true,
    photos: [
      {
        id: 'photo7',
        url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '夜景フライトは格別。街の光が宝石箱みたい 💎',
        timestamp: '2025-09-13T20:30:00Z',
        likes: 78,
        comments: []
      }
    ]
  },
  {
    id: '8',
    name: 'Airborne Artist',
    avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1708, lng: 136.8779 },
    isOnline: false,
    photos: [
      {
        id: 'photo8',
        url: 'https://images.pexels.com/photos/15286/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '森の息吹を感じながら。自然と一体になれた瞬間。',
        timestamp: '2025-09-12T13:00:00Z',
        likes: 51,
        comments: []
      }
    ]
  },
  {
    id: '9',
    name: 'Vortex Voyager',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1740, lng: 136.8828 },
    isOnline: true,
    photos: [
      {
        id: 'photo9',
        url: 'https://images.pexels.com/photos/2088205/pexels-photo-2088205.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '渓谷を駆け抜けるスリル！翼が風を切る音が心地いい。',
        timestamp: '2025-09-12T15:25:00Z',
        likes: 48,
        comments: []
      }
    ]
  },
  {
    id: '10',
    name: 'Cirrus Strider',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1681, lng: 136.8819 },
    isOnline: false,
    photos: [
      {
        id: 'photo10',
        url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'オーロラと一緒に飛ぶ夢が叶いました…！言葉にならない。',
        timestamp: '2025-09-11T23:50:00Z',
        likes: 120,
        comments: []
      }
    ]
  },
  {
    id: '11',
    name: 'Sky Captain',
    avatar: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1752, lng: 136.8803 },
    isOnline: true,
    photos: [
      {
        id: 'photo11',
        url: 'https://images.pexels.com/photos/1581373/pexels-photo-1581373.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '雨上がりの虹を追いかけて。ラッキーなフライトでした 🌈',
        timestamp: '2025-09-11T16:00:00Z',
        likes: 55,
        comments: []
      }
    ]
  },
  {
    id: '12',
    name: 'Nimbus Nomad',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1699, lng: 136.8851 },
    isOnline: false,
    photos: [
      {
        id: 'photo12',
        url: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '夕焼けに染まる雲が、まるで炎の海のようだった。',
        timestamp: '2025-09-10T18:10:00Z',
        likes: 88,
        comments: []
      }
    ]
  },
  {
    id: '13',
    name: 'Atmos Explorer',
    avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1725, lng: 136.8781 },
    isOnline: true,
    photos: [
      {
        id: 'photo13',
        url: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '雪山の頂上からダイブ！空気が澄んでて気持ちいい！',
        timestamp: '2025-09-10T10:45:00Z',
        likes: 67,
        comments: []
      }
    ]
  },
  {
    id: '14',
    name: 'Gale Runner',
    avatar: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1703, lng: 136.8839 },
    isOnline: true,
    photos: [
      {
        id: 'photo14',
        url: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '湖の上を低空飛行。水面に自分の影が映って不思議な感じ。',
        timestamp: '2025-09-09T14:00:00Z',
        likes: 41,
        comments: []
      }
    ]
  },
  {
    id: '15',
    name: 'Helios Hawk',
    avatar: 'https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1718, lng: 136.8795 },
    isOnline: false,
    photos: [
      {
        id: 'photo15',
        url: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '天の川フライト。満点の星空に包まれて感動… 🌌',
        timestamp: '2025-09-09T01:30:00Z',
        likes: 95,
        comments: []
      }
    ]
  },
  {
    id: '16',
    name: 'Zephyr Zenith',
    avatar: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1736, lng: 136.8823 },
    isOnline: true,
    photos: [
      {
        id: 'photo16',
        url: 'https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'どこまでも続くハイウェイ。車より速いって最高！',
        timestamp: '2025-09-08T12:00:00Z',
        likes: 33,
        comments: []
      }
    ]
  },
  {
    id: '17',
    name: 'Cloudpiercer',
    avatar: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1685, lng: 136.8808 },
    isOnline: false,
    photos: [
      {
        id: 'photo17',
        url: 'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '雷雲を遠くに眺めながら。自然の力はすごい。',
        timestamp: '2025-09-08T17:15:00Z',
        likes: 58,
        comments: []
      }
    ]
  },
  {
    id: '18',
    name: 'Strato Sprinter',
    avatar: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1729, lng: 136.8836 },
    isOnline: true,
    photos: [
      {
        id: 'photo18',
        url: 'https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'カラフルな街並みの上を散歩。楽しいフライトでした！',
        timestamp: '2025-09-07T13:40:00Z',
        likes: 49,
        comments: []
      }
    ]
  },
  {
    id: '19',
    name: 'Tempest Tamer',
    avatar: 'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1706, lng: 136.8792 },
    isOnline: true,
    photos: [
      {
        id: 'photo19',
        url: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '山の夜明け。太陽が昇る瞬間の神々しさは忘れられない。',
        timestamp: '2025-09-07T05:50:00Z',
        likes: 72,
        comments: []
      }
    ]
  },
  {
    id: '20',
    name: 'Horizon Hopper',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.1711, lng: 136.8811 },
    isOnline: false,
    photos: [
      {
        id: 'photo20',
        url: 'https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '砂漠の上をどこまでも。地平線が丸く見えた！',
        timestamp: '2025-09-06T11:20:00Z',
        likes: 65,
        comments: []
      }
    ]
  }
];

export const myPhotos: Photo[] = [
  // 既存の写真
  {
    id: 'my1',
    url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '今朝の飛行から。朝日が雲海を照らす瞬間を捉えました。',
    timestamp: '2025-09-16T06:30:00Z',
    likes: 42,
    comments: []
  },
  {
    id: 'my2',
    url: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '友達と一緒に編隊飛行！チームワークが重要です。',
    timestamp: '2025-09-15T15:20:00Z',
    likes: 28,
    comments: []
  },
  // 以下、追加の写真データ
  {
    id: 'my3',
    url: 'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'JRセントラルタワーズのすぐそばを飛んでみた。すごい迫力！',
    timestamp: '2025-09-15T11:00:00Z',
    likes: 58,
    comments: []
  },
  {
    id: 'my4',
    url: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '今日の夕焼けは本当に綺麗だった。翼を休めてしばらく眺めてた。',
    timestamp: '2025-09-14T18:30:00Z',
    likes: 76,
    comments: []
  },
  {
    id: 'my5',
    url: 'https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '静かな夜のフライト。星がいつもより近く感じたな。',
    timestamp: '2025-09-14T22:15:00Z',
    likes: 64,
    comments: []
  },
  {
    id: 'my6',
    url: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '上昇気流に乗って一気に高度を上げるのが得意です！',
    timestamp: '2025-09-13T14:00:00Z',
    likes: 41,
    comments: []
  },
  {
    id: 'my7',
    url: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'モノクロームの世界。たまにはこういう静かなフライトもいい。',
    timestamp: '2025-09-13T09:30:00Z',
    likes: 35,
    comments: []
  },
  {
    id: 'my8',
    url: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '積乱雲。近づきすぎないようにしないとね。すごい迫力だった。',
    timestamp: '2025-09-12T16:20:00Z',
    likes: 53,
    comments: []
  },
  {
    id: 'my9',
    url: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '海の上を飛ぶのはやっぱり最高！風が気持ちいい。',
    timestamp: '2025-09-12T11:45:00Z',
    likes: 68,
    comments: []
  },
  {
    id: 'my10',
    url: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '風力発電の風車と並んで飛んでみた。結構大きい！',
    timestamp: '2025-09-11T13:10:00Z',
    likes: 47,
    comments: []
  },
  {
    id: 'my11',
    url: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'ハート形の島、見つけちゃった！良いことありそう。',
    timestamp: '2025-09-11T10:05:00Z',
    likes: 89,
    comments: []
  },
  {
    id: 'my12',
    url: 'https://images.pexels.com/photos/2449600/pexels-photo-2449600.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'ビル群の光の川。眠らない街を上から眺める。',
    timestamp: '2025-09-10T21:00:00Z',
    likes: 71,
    comments: []
  },
  {
    id: 'my13',
    url: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '嵐の前の静けさ。空気が張り詰めてる感じがした。',
    timestamp: '2025-09-10T15:30:00Z',
    likes: 61,
    comments: []
  },
  {
    id: 'my14',
    url: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'ダイヤモンドダスト、見えるかな？寒かったけど綺麗だった！',
    timestamp: '2025-09-09T07:15:00Z',
    likes: 55,
    comments: []
  },
  {
    id: 'my15',
    url: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '高速道路を追い越してみた。ちょっとした優越感（笑）',
    timestamp: '2025-09-08T14:55:00Z',
    likes: 43,
    comments: []
  },
  {
    id: 'my16',
    url: 'https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'オアシス21の「水の宇宙船」の上をぐるっと一周！',
    timestamp: '2025-09-08T11:20:00Z',
    likes: 66,
    comments: []
  },
  {
    id: 'my17',
    url: 'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: '入道雲の中はどんな感じかなって思ったけど、やめておきました。',
    timestamp: '2025-09-07T15:00:00Z',
    likes: 50,
    comments: []
  },
  {
    id: 'my18',
    url: 'https://images.pexels.com/photos/733339/pexels-photo-733339.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '飛行機と競争！…もちろん負けました✈️',
    timestamp: '2025-09-07T10:10:00Z',
    likes: 48,
    comments: []
  },
  {
    id: 'my19',
    url: 'https://images.pexels.com/photos/4067765/pexels-photo-4067765.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '港に並ぶコンテナがカラフルで、おもちゃみたいだった。',
    timestamp: '2025-09-06T13:25:00Z',
    likes: 52,
    comments: []
  },
  {
    id: 'my20',
    url: 'https://images.pexels.com/photos/355952/pexels-photo-355952.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '今日のフライトはここまで。翼を畳んでおやすみなさい。',
    timestamp: '2025-09-06T19:00:00Z',
    likes: 39,
    comments: []
  }
];

export const flightLogs: FlightLog[] = [
  {
    id: '1',
    timestamp: '16:30:21',
    message: '東小学校で離陸しました。',
    icon: 'school',
    type: 'takeoff'
  },
  {
    id: '2',
    timestamp: '16:35:43',
    message: '標高100mを越えました。',
    icon: 'trending_up',
    type: 'altitude'
  },
  {
    id: '3',
    timestamp: '16:50:18',
    message: '西川を越えました。',
    icon: 'water',
    type: 'landmark'
  },
  {
    id: '4',
    timestamp: '17:00:49',
    message: '北山を越えました。',
    icon: 'terrain',
    type: 'landmark'
  },
  {
    id: '5',
    timestamp: '17:10:36',
    message: '標高200mを越えました。',
    icon: 'trending_up',
    type: 'altitude'
  },
  {
    id: '6',
    timestamp: '17:25:12',
    message: '目的地に着陸しました。',
    icon: 'landing',
    type: 'landing'
  }
];

export const flightSummary: FlightSummary = {
  distance: '12.5km',
  duration: '55分12秒',
  calories: 320
};

export const wingRentals: WingRental[] = [
  {
    id: '1',
    location: { lat: 35.6762, lng: 139.6503 },
    availableWings: 5,
    pricePerHour: 2000,
    stationName: '東京駅前ステーション'
  },
  {
    id: '2',
    location: { lat: 35.6895, lng: 139.6917 },
    availableWings: 3,
    pricePerHour: 1800,
    stationName: '新宿ステーション'
  },
  {
    id: '3',
    location: { lat: 35.6684, lng: 139.6833 },
    availableWings: 7,
    pricePerHour: 2200,
    stationName: '渋谷センターステーション'
  },
  {
    id: '4',
    location: { lat: 35.6580, lng: 139.7016 },
    availableWings: 2,
    pricePerHour: 1900,
    stationName: '銀座プレミアムステーション'
  }
];