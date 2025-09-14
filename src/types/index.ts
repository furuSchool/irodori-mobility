export interface User {
  id: string;
  name: string;
  avatar: string;
  location: {
    lat: number;
    lng: number;
  };
  photos: Photo[];
  isOnline: boolean;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  timestamp: string;
  location?: {
    lat: number;
    lng: number;
  };
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  text: string;
  timestamp: string;
}

export interface FlightLog {
  id: string;
  timestamp: string;
  message: string;
  icon: string;
  type: 'takeoff' | 'altitude' | 'landmark' | 'landing';
}

export interface FlightSummary {
  distance: string;
  duration: string;
  calories: number;
}

export interface WingRental {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  availableWings: number;
  pricePerHour: number;
  stationName: string;
}