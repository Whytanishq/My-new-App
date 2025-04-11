import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import products from '../products';
import { FiArrowLeft } from 'react-icons/fi';

const Detail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = products.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/not-found');
    }
  }, [slug, navigate]);

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id,
      quantity: quantity
    }));
    alert(`${product.name} added to cart!`);
  };

  if (!product) return <div className="container mx-auto px-4 py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <FiArrowLeft className="mr-2" />
        Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover"/>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-blue-600 font-bold mb-6">${product.price}</p>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center border rounded-md overflow-hidden mr-4">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-6 py-2">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md"
            >
              Add to Cart
            </button>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Material: {product.material}</li>
              <li>• Dimensions: {product.dimensions}</li>
              <li>• Category: {product.category.replace('-', ' ')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;