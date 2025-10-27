import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-700 mb-2">
          About <span className="text-yellow-600">Fruitify</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Freshness you can taste. Nutrition you can trust.
          We bring you nature’s best handpicked, locally sourced, and delivered fresh every day.
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <img
          src="/images/pomo3.png"
          alt="Pomegranate"
          className="w-full lg:w-1/2 rounded-3xl shadow-lg object-cover"
        />
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            The Pride of Our Collection — Pomegranate ❤️
          </h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Known as the "Ruby Fruit," pomegranates are rich in antioxidants and vitamins.
            We source our pomegranates directly from organic farms to ensure the juiciest and
            most flavorful experience for you.
          </p>
          
        </div>
      </div>

      {/* Fruit Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { name: "Apple", img: "/images/apple.png", color: "text-red-600" },
          { name: "Banana", img: "/images/banana.png", color: "text-yellow-600" },
          { name: "Strawberry", img: "/images/s.png", color: "text-pink-600" },
        ].map((fruit, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <img
              src={fruit.img}
              alt={fruit.name}
              className="w-90 h-40 object-contain mx-auto mb-2"
            />
            <h3 className={`text-2xl font-bold ${fruit.color}`}>{fruit.name}</h3>
            <p className="text-gray-600 mt-2">
              Fresh, juicy, and full of natural goodness. Taste the best of {fruit.name}s
              from our trusted farms.
            </p>
          </div>
        ))}
      </div>

      {/* Mission Section */}
      <div className="bg-yellow-50 rounded-3xl p-8 shadow-inner text-center">
        <h2 className="text-3xl font-bold text-yellow-700 mb-4">
          🌱 Our Mission
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          To reconnect people with the joy of healthy eating.  
          We aim to make fresh fruits accessible to every household
          supporting farmers, promoting sustainability, and spreading smiles one basket at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
