import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const TopProductsSlider = () => {
    const products = [
        {
    "foodId": 1,
    "foodName": "Cheeseburger",
    "sellerName": "Food R Us Local",
    "sellerEmail": "contact@foodruslocal.com",
    "price": 89.99,
    "rating": 5.7,
    "availableQuantity": 25,
    "pictureURL": "https://i.ibb.co.com/MxFnmxQF/Double-Cheeseburger-square-FS-42.webp",
    "subCategory": "Burgers"
  },
  {
    "foodId": 2,
    "foodName": "French Fries",
    "sellerName": "The Crispy Corner",
    "sellerEmail": "sales@crispycorner.com",
    "price": 24.99,
    "rating": 4.9,
    "availableQuantity": 120,
    "pictureURL": "https://i.ibb.co.com/WpYd5QY9/french-fries.jpg",
    "subCategory": "Sides"
  },
  {
    "foodId": 4,
    "foodName": "Pepperoni Pizza",
    "sellerName": "Classic Pizzeria",
    "sellerEmail": "support@classicpizza.com",
    "price": 55.00,
    "rating": 4.8,
    "availableQuantity": 30,
    "pictureURL": "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop",
    "subCategory": "Pizza"
  },
  {
    "foodId": 14,
    "foodName": "Nachos",
    "sellerName": "Crunch Time",
    "sellerEmail": "snacks@crunchtime.com",
    "price": 25.00,
    "rating": 4.6,
    "availableQuantity": 110,
    "pictureURL": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1000&auto=format&fit=crop",
    "subCategory": "Appetizers"
  },
  {
    "foodId": 15,
    "foodName": "Potato Wedges",
    "sellerName": "Salty Spuds",
    "sellerEmail": "orders@saltyspuds.com",
    "price": 45.00,
    "rating": 4.4,
    "availableQuantity": 40,
    "pictureURL": "https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=1000&auto=format&fit=crop",
    "subCategory": "Sides"
  },
  {
    "foodId": 16,
    "foodName": "Milkshake",
    "sellerName": "Dairy Dreams",
    "sellerEmail": "support@dairydreams.com",
    "price": 60.00,
    "rating": 4.9,
    "availableQuantity": 35,
    "pictureURL": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop",
    "subCategory": "Desserts"
  },
  {
    "foodId": 17,
    "foodName": "Soft Drink",
    "sellerName": "The Soda Fountain",
    "sellerEmail": "fizz@sodafountain.com",
    "price": 18.00,
    "rating": 4.5,
    "availableQuantity": 200,
    "pictureURL": "https://i.ibb.co.com/0p6WLJKH/Soft-Drink.webp",
    "subCategory": "Beverages"
  },
    ];

    return (
        <div className="my-10 px-5 container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Reting Products</h2>
            
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                // Breakpoints to control how many slides show at different widths
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Mobile: 1 slide
                    },
                    768: {
                        slidesPerView: 2, // Tablet: 2 slides
                    },
                    1024: {
                        slidesPerView: 3, // Desktop: 3 slides (This matches your request)
                    },
                }}
                className="mySwiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.foodId}>
                        {/* Card Component */}
                        <div className="card bg-base-100 shadow-xl border border-gray-100 h-full">
                            {/* Changed h-52 to h-64 for a taller image area */}
                            <figure className="h-64 px-4 pt-4 flex items-center justify-center bg-gray-50">
                                <img
                                    src={product.pictureURL}
                                    alt={product.foodName}
                                    // Changed object-cover to object-contain so the full image is shown
                                    className="rounded-xl max-h-full max-w-full object-contain"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.foodName}</h2>
                                <p className="text-sm text-gray-500">{product.subCategory}</p>
                                <div className="flex justify-between w-full items-center mt-2">
                                    <div className="badge badge-outline">{product.rating} ★</div>
                                    <div className="text-lg font-bold text-primary">${product.price}</div>
                                </div>
                                
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopProductsSlider;