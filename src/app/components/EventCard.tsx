// components/EventCard.tsx
import React from "react";
import Image from "next/image";

const EventCard = ({
  title,
  description,
  image,
  date,
  time,
  location,
  type,
}) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
    <Image
      src={image}
      alt={title}
      width={500}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="text-sm text-gray-500 space-y-1">
        <p>📅 {date}</p>
        <p>⏰ {time}</p>
        <p>📍 {location}</p>
        <p>📌 {type}</p>
      </div>
    </div>
  </div>
);

export default EventCard;
