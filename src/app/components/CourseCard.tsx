// export const CourseCard = ({
//   title,
//   description,
//   image,
//   level,
//   duration,
//   price,
//   tags,
// }: any) => {
//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
//       <div className="relative">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//         <span className="absolute top-3 left-3 bg-sonarb-navy text-white text-xs font-bold px-3 py-1 rounded-full shadow">
//           {level}
//         </span>
//       </div>
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
//         <p className="text-gray-600 text-sm mb-2">{description}</p>
//         <div className="text-sm text-gray-500">
//           <span>{duration}</span> • <span>{price}</span>
//         </div>
//         <div className="mt-3 flex flex-wrap gap-2">
//           {tags.map((tag: string, idx: number) => (
//             <span
//               key={idx}
//               className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import { FiCalendar } from "react-icons/fi";

const CourseCard = ({
  title,
  description,
  image,
  duration,
  level,
  price,
  category,
  tags,
}: any) => {
  const levelColors: { [key: string]: string } = {
    Beginner: "bg-green-600",
    Intermediate: "bg-yellow-600",
    Advanced: "bg-red-600",
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md relative group transition transform hover:scale-105 duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

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
