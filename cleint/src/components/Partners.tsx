import React from "react";

const partners = Array.from({ length: 40 }, (_, index) => ({
  name: `Partner ${index + 1}`,
  logo: `Home/Brands/1 (${index + 1}).png`,
}));

const Partners = () => {
  return (
    <div className="w-full py-12 px-6 rounded-2xl shadow-md">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Our Trusted <span className="text-red-600">Partners</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;