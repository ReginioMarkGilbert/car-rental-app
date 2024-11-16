import React from 'react';

const vehicles = [
  {
    id: 1,
    name: 'BMW M5',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070',
    price: '99',
    category: 'Luxury Sedan',
    specs: '600 HP • 0-60 in 3.2s'
  },
  {
    id: 2,
    name: 'Porsche 911',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070',
    price: '149',
    category: 'Sports Car',
    specs: '450 HP • 0-60 in 3.0s'
  },
  {
    id: 3,
    name: 'Mercedes GLE',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071',
    price: '129',
    category: 'Luxury SUV',
    specs: '375 HP • AWD'
  }
];

const FeaturedVehicles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                     transition-all duration-300 border border-gray-100"
        >
          <div className="relative h-72 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">{vehicle.category}</p>
                <h3 className="text-2xl font-semibold text-gray-900">{vehicle.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">from</p>
                <p className="text-2xl font-bold text-gray-900">${vehicle.price}</p>
                <p className="text-sm text-gray-500">/day</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">{vehicle.specs}</p>
            <button className="w-full bg-gray-900 text-white py-3 rounded-xl
                           hover:bg-gray-800 transition-colors duration-300">
              Reserve Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedVehicles;
