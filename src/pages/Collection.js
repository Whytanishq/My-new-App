import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'living-room',
    name: 'Living Room',
    description: 'Elegant and comfortable furniture for your living space',
    image: '/images/living-room.jpg'
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    description: 'Create your perfect sleep sanctuary',
    image: '/images/bedroom.jpg'
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    description: 'Gather around beautiful dining sets',
    image: '/images/dining-room.jpg'
  },
  {
    id: 'office',
    name: 'Office',
    description: 'Productive and stylish workspace solutions',
    image: '/images/office.jpg'
  }
];

const Collection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Collections</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map(collection => (
          <div key={collection.id} className="relative rounded-lg overflow-hidden shadow-lg h-64">
            <img 
              src={collection.image} 
              alt={collection.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
              <p className="mb-4">{collection.description}</p>
              <Link 
                to={`/shop?category=${collection.id}`}
                className="bg-white text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                View Collection
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;