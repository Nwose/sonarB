// components/UpcomingEvents.tsx
import React from "react";
import Link from "next/link";
import EventCard from "./EventCard";
import Button from "./Buttons";

const events = [
  {
    title: "Tech Innovation Summit 2024",
    description: "Latest tech trends & innovations with experts.",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop",
    date: "Dec 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "SonarB Tech Campus",
    type: "Summit",
  },
  {
    title: "AI & ML Workshop",
    description: "Hands-on with AI & ML frameworks in Python.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
    date: "Dec 22, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual",
    type: "Workshop",
  },
];

const UpcomingEvents = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join our community events and workshops
          </p>
        </div>
        <Link href="/events">
          <Button
            variant="outline"
            className="border-[#020233] text-[#020233] hover:bg-[#020233] hover:text-white"
          >
            View All Events
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
