export interface Destination {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
