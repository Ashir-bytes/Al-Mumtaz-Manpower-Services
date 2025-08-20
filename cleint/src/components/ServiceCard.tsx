import { Briefcase, Users, Search, UserCheck, FileCheck } from "lucide-react";

const services = [
  {
    imgSrc: "../Home/Contract-Staffing.webp",
    caption: "Professional Contract Staffing",
    link: "#",
    icon: <Briefcase size={28} />,
  },
  {
    imgSrc: "../Home/HR-Outsourcing.webp",
    caption: "Expert HR Outsourcing",
    link: "#",
    icon: <Users size={28} />,
  },
  {
    imgSrc: "../Home/manpower-dubai-executive-search-1.webp",
    caption: "Executive Search & Recruitment",
    link: "#",
    icon: <Search size={28} />,
  },
  {
    imgSrc: "../Home/Manpower-Supply-.webp",
    caption: "ReliableAl Mumtaz  Supply",
    link: "#",
    icon: <UserCheck size={28} />,
  },
  {
    imgSrc: "../Home/Recruitment.webp",
    caption: "Efficient Hiring Solutions",
    link: "#",
    icon: <FileCheck size={28} />,
  },
];

export default function ServiceCard() {
  return (
    <section className="py-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="w-full px-6">
        <h2 className="text-6xl font-bold text-center mb-6">
          Al Mumtaz Solutions in <span className="text-orange-600">UAE</span>
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600">
          At Al Mumtaz - ANY WORK. OUR COMPANY!, a trusted Al Mumtaz supplier in
          Dubai, UAE, we provide various professional Al Mumtaz solutions
          tailored for your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md border border-white/40 hover:scale-[1.02] hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <img
                src={service.imgSrc}
                alt={service.caption}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Text & Icon */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-semibold">{service.caption}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
