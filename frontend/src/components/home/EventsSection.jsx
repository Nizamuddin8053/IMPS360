import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

const events = [
  {
    day: "12",
    month: "JUN",
    title: "Annual Sports Meet 2026",
    time: "08:30 AM - 04:00 PM",
    venue: "Main Stadium Grounds"
  },
  {
    day: "19",
    month: "JUN",
    title: "Parent-Teacher Interactive Forum",
    time: "09:00 AM - 01:00 PM",
    venue: "Auditorium Hall B"
  },
  {
    day: "04",
    month: "JUL",
    title: "Inter-House Debate Championship",
    time: "10:30 AM - 02:30 PM",
    venue: "Seminar Conference Room"
  }
];

const EventsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        
        <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
          Upcoming Events
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 flex gap-5 items-center hover:shadow-xl transition"
            >
              {/* Date Box */}
              <div className="bg-blue-700 text-white rounded-lg flex flex-col justify-center items-center px-4 py-3 min-w-18.75 text-center shadow-md">
                <span className="text-2xl font-bold tracking-tight">{event.day}</span>
                <span className="text-xs font-semibold uppercase">{event.month}</span>
              </div>

              {/* Event Info */}
              <div className="space-y-1.5">
                <h3 className="font-bold text-lg text-gray-900 hover:text-blue-700 cursor-pointer transition line-clamp-1">
                  {event.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-yellow-500 text-xs" /> {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-blue-700 text-xs" /> {event.venue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventsSection;