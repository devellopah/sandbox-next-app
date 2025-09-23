export interface Sneaker {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export const sneakers: Sneaker[] = [
  {
    id: '1',
    name: 'Air Max 270',
    brand: 'Nike',
    price: 150,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    category: 'Running',
    description: 'Comfortable running shoes with Air Max technology.'
  },
  {
    id: '2',
    name: 'Ultra Boost 22',
    brand: 'Adidas',
    price: 180,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    category: 'Running',
    description: 'Energy-returning running shoes for maximum performance.'
  },
  {
    id: '3',
    name: 'Air Jordan 1',
    brand: 'Nike',
    price: 170,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    category: 'Basketball',
    description: 'Iconic basketball shoes with legendary style.'
  },
  {
    id: '4',
    name: 'Yeezy Boost 350',
    brand: 'Adidas',
    price: 300,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    category: 'Lifestyle',
    description: 'Minimalist design with Boost technology.'
  },
  {
    id: '5',
    name: 'Converse Chuck Taylor',
    brand: 'Converse',
    price: 60,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
    category: 'Casual',
    description: 'Classic canvas sneakers for everyday wear.'
  },
  {
    id: '6',
    name: 'Puma RS-X',
    brand: 'Puma',
    price: 110,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop',
    category: 'Lifestyle',
    description: 'Retro-inspired sneakers with modern comfort.'
  }
];

export const categories = [
  { name: 'Running', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
  { name: 'Basketball', image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&h=300&fit=crop' },
  { name: 'Casual', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=300&fit=crop' },
  { name: 'Lifestyle', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop' }
];
