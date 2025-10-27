import React from 'react';

const Product2 = (props) => {
  const { product } = props;
  
  // Comprehensive emoji mapping for fruits and vegetables
  const fruitVegetableEmojis = {
    // 🍎 FRUITS
    "Apple": "🍎",
    "Banana": "🍌",
    "Mango": "🥭",
    "Orange": "🍊",
    "Strawberry": "🍓",
    "Watermelon": "🍉",
    "Grape": "🍇",
    "Pineapple": "🍍",
    "Blueberry": "🫐",
    "Papaya": "🧡",
    "Kiwi": "🥝",
    "Lemon": "🍋",
    "Coconut": "🥥",
    "Peach": "🍑",
    "Cherry": "🍒",
    "Pomegranate": "🍒",
    "Guava": "🍌",
    "Pear": "🍐",
    "Plum": "🍑",
    "Lime": "🍋",
    "Tangerine": "🍊",
    "Grapefruit": "🍊",
    "Avocado": "🥑",
    "Dragonfruit": "🌺",
    "Passion Fruit": "🍌",
    "Mulberry": "🫐",
    "Blackberry": "🫐",
    "Raspberry": "🍓",
    "Cranberry": "🍓",
    
    // 🥬 VEGETABLES
    "Spinach": "🥬",
    "Broccoli": "🥦",
    "Carrot": "🥕",
    "Tomato": "🍅",
    "Cucumber": "🥒",
    "Corn": "🌽",
    "Lettuce": "🥬",
    "Cabbage": "🥬",
    "Cauliflower": "🥦",
    "Bell Pepper": "🫑",
    "Red Pepper": "🫑",
    "Green Pepper": "🫑",
    "Yellow Pepper": "🫑",
    "Onion": "🧅",
    "Garlic": "🧄",
    "Potato": "🥔",
    "Sweet Potato": "🥔",
    "Pumpkin": "🎃",
    "Squash": "🎃",
    "Zucchini": "🥒",
    "Eggplant": "🍆",
    "Peas": "🫘",
    "Beans": "🫘",
    "Chickpeas": "🫘",
    "Lentils": "🫘",
    "Radish": "🥕",
    "Beet": "🍠",
    "Turnip": "🥔",
    "Celery": "🥬",
    "Asparagus": "🌿",
    "Brussels Sprouts": "🥦",
    "Kale": "🥬",
    "Chard": "🥬",
    "Arugula": "🥬",
    "Parsley": "🌿",
    "Cilantro": "🌿",
    "Basil": "🌿",
    "Mint": "🌿",
    "Ginger": "🧄",
    "Turmeric": "🌿",
    
    // 🥜 PROTEIN SOURCES (Vegetarian)
    "Peanuts": "🥜",
    "Almonds": "🌰",
    "Cashews": "🌰",
    "Walnuts": "🌰",
    "Pumpkin Seeds": "🌱",
    "Sunflower Seeds": "🌱",
    "Flax Seeds": "🌱",
    "Chia Seeds": "🌱",
    "Hemp Seeds": "🌱",
    "Sesame Seeds": "🌱",
    "Tofu": "🍲",
    "Tempeh": "🍲",
    "Edamame": "🫘",
    "Chickpeas": "🫘",
    "Black Beans": "🫘",
    "Kidney Beans": "🫘",
    "Lentils": "🫘",
    
    // 🥛 DAIRY & EGGS (Vegetarian)
    "Milk": "🥛",
    "Yogurt": "🥛",
    "Cheese": "🧀",
    "Paneer": "🧀",
    "Eggs": "🥚",
    "Cottage Cheese": "🧀",
    "Butter": "🧈",
    "Ghee": "🧈",
    
    // 🍞 GRAINS & CARBS
    "Bread": "🍞",
    "Rice": "🍚",
    "Wheat": "🌾",
    "Oats": "🌾",
    "Barley": "🌾",
    "Quinoa": "🌾",
    "Pasta": "🍝",
    "Noodles": "🍝",
    "Roti": "🫓",
    "Chapati": "🫓",
    "Paratha": "🫓",
    
    // 🍯 OTHER
    "Honey": "🍯",
    "Nuts": "🌰",
    "Dry Fruits": "🌰"
  };
  
  // Get emoji based on product name, with fallback
  const getEmoji = (productName) => {
    return fruitVegetableEmojis[productName] || "🍎";
  };
  
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
        
        {/* Icon Container */}
        <div className="flex justify-center items-center bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-3 h-40 text-7xl hover:from-purple-200 hover:to-purple-300 transition-all">
          {getEmoji(product.name)}
        </div>
        
        {/* Product Name */}
        <div className="text-center">
          <h2 className="text-lg font-bold py-2 text-gray-800">
            {product.name}
          </h2>
          
          {/* Size Badge */}
          <span className="inline-block bg-gray-200 hover:bg-gray-300 py-1 rounded-full text-sm px-4 mb-2 transition-colors">
            Small
          </span>
          
          {/* Family */}
          <h3 className="text-base py-2 text-gray-600">
            <em>Family: {product.family}</em>
          </h3>
          
          {/* Nutrition Info */}
          <div className="flex justify-center gap-4 text-sm text-gray-700 mb-3">
            <span className="bg-blue-50 py-1 px-3 rounded-full">
              🔥 Calories: {product.nutritions.calories}
            </span>
            <span className="bg-green-50 py-1 px-3 rounded-full">
              🌾 Carbs: {product.nutritions.carbohydrates}g
            </span>
          </div>
          
          {/* Protein Info (if available) */}
          {product.nutritions.protein && (
            <span className="bg-yellow-50 py-1 px-3 rounded-full text-sm text-gray-700">
              💪 Protein: {product.nutritions.protein}g
            </span>
          )}
        </div>
        
        {/* Price and Add Button */}
        <div className="flex justify-between items-center mt-4 px-2">
          <span className="font-bold text-lg text-gray-800">Rs. 500</span>
          <button className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
            ADD
          </button>
        </div>
        
      </div>
    </>
  );
};

export default Product2;