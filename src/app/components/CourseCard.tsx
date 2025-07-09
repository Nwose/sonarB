import { FC } from "react";
import { FiCalendar } from "react-icons/fi";
import Image from "next/image";

type CourseCardProps = {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | string;
  price: string;
  category?: string;
  tags?: string[];
};

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  image,
  duration,
  level,
  price,
  // category,
  // tags,
}) => {
  const levelColors: { [key: string]: string } = {
    Beginner: "bg-green-600",
    Intermediate: "bg-yellow-600",
    Advanced: "bg-red-600",
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md relative group transition transform hover:scale-105 duration-300">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />

        {/* Level Badge */}
        <span
          className={`absolute top-2 left-2 text-xs font-bold px-3 py-1 text-white rounded-full ${
            levelColors[level] || "bg-gray-500"
          }`}
        >
          {level}
        </span>

        {/* Price Badge */}
        <span className="absolute top-2 right-2 bg-blue-800 text-white px-3 py-1 text-xs font-bold rounded-full">
          {price}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <FiCalendar className="mr-2" />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
