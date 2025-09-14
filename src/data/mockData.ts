import { User, FlightLog, FlightSummary, WingRental } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sky Walker',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.6762, lng: 139.6503 },
    isOnline: true,
    photos: [
      {
        id: '1',
        url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '今日は雲の上まで飛べました！最高の眺めです 🌤️',
        timestamp: '2024-01-15T14:30:00Z',
        likes: 24,
        comments: []
      }
    ]
  },
  {
    id: '2',
    name: 'Cloud Rider',
    avatar: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.6895, lng: 139.6917 },
    isOnline: true,
    photos: [
      {
        id: '2',
        url: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '夕日と一緒に飛ぶのは本当に幻想的でした ✨',
        timestamp: '2024-01-15T17:45:00Z',
        likes: 18,
        comments: []
      }
    ]
  },
  {
    id: '3',
    name: 'Wind Dancer',
    avatar: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: { lat: 35.6684, lng: 139.6833 },
    isOnline: false,
    photos: [
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: '都市の上空からの景色は息を呑むほど美しい 🏙️',
        timestamp: '2024-01-15T12:20:00Z',
        likes: 31,
        comments: []
      }
    ]
  }
];

export const myPhotos = [
  {
    id: 'my1',
    url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '今朝の飛行から。朝日が雲海を照らす瞬間を捉えました',
    timestamp: '2024-01-16T06:30:00Z',
    likes: 42,
    comments: []
  },
  {
    id: 'my2',
    url: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: '友達と一緒に編隊飛行！チームワークが重要です',
    timestamp: '2024-01-15T15:20:00Z',
    likes: 28,
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