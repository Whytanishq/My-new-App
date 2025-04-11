// products.js
import product1 from './assets/images/1.png';
import product2 from './assets/images/2.png';
import product3 from './assets/images/3.png';
import product4 from './assets/images/4.png';
import product5 from './assets/images/5.png';
import product6 from './assets/images/6.png';
import product7 from './assets/images/7.png';
import product8 from './assets/images/8.png';
import product9 from './assets/images/9.png';
import product10 from './assets/images/10.png';

const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 899,
    image: product1,
    slug: 'modern-sofa',
    description: 'Contemporary sofa with clean lines and premium upholstery',
    material: 'Fabric, Wood',
    dimensions: '84"W x 36"D x 32"H',
    category: 'living-room'
  },
  {
    id: 2,
    name: 'Dining Table',
    price: 1299,
    image: product2,
    slug: 'dining-table',
    description: 'Solid wood dining table with extendable leaves',
    material: 'Oak',
    dimensions: '72"W x 42"D x 30"H',
    category: 'dining-room'
  },
  // Add 8 more products following the same structure
  {
    id: 3,
    name: 'Leather Recliner',
    price: 799,
    image: product3,
    slug: 'leather-recliner',
    description: 'Premium leather recliner with adjustable positions',
    material: 'Genuine Leather',
    dimensions: '40"W x 40"D x 42"H',
    category: 'living-room'
  },
  {
    id: 4,
    name: 'Bookshelf',
    price: 349,
    image: product4,
    slug: 'bookshelf',
    description: '5-tier wooden bookshelf with ample storage',
    material: 'Pine Wood',
    dimensions: '30"W x 12"D x 60"H',
    category: 'office'
  },
  {
    id: 5,
    name: 'Queen Bed',
    price: 1599,
    image: product5,
    slug: 'queen-bed',
    description: 'Solid wood queen bed with upholstered headboard',
    material: 'Mahogany',
    dimensions: '64"W x 86"D x 48"H',
    category: 'bedroom'
  },
  {
    id: 6,
    name: 'Coffee Table',
    price: 299,
    image: product6,
    slug: 'coffee-table',
    description: 'Modern glass-top coffee table with metal frame',
    material: 'Glass, Metal',
    dimensions: '48"W x 24"D x 18"H',
    category: 'living-room'
  },
  {
    id: 7,
    name: 'Office Chair',
    price: 249,
    image: product7,
    slug: 'office-chair',
    description: 'Ergonomic office chair with lumbar support',
    material: 'Mesh, Aluminum',
    dimensions: '27"W x 27"D x 45"H',
    category: 'office'
  },
  {
    id: 8,
    name: 'Nightstand',
    price: 199,
    image: product8,
    slug: 'nightstand',
    description: 'Wooden nightstand with drawer and shelf',
    material: 'Cherry Wood',
    dimensions: '20"W x 16"D x 24"H',
    category: 'bedroom'
  },
  {
    id: 9,
    name: 'Bar Stool',
    price: 149,
    image: product9,
    slug: 'bar-stool',
    description: 'Adjustable height bar stool with cushioned seat',
    material: 'Metal, PU Leather',
    dimensions: '18"W x 18"D x 30-42"H',
    category: 'dining-room'
  },
  {
    id: 10,
    name: 'TV Stand',
    price: 499,
    image: product10,
    slug: 'tv-stand',
    description: 'Modern TV stand with storage compartments',
    material: 'MDF, Metal',
    dimensions: '60"W x 20"D x 24"H',
    category: 'living-room'
  }
];

export default products;