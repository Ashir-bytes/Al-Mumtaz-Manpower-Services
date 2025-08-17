import { motion } from "framer-motion";

interface ServiceCardProps {
  imgSrc: string;
  caption: string;
  link: string;
}

const ServiceCard = ({ imgSrc, caption, link }: ServiceCardProps) => {
  return (
    <motion.a
      href={link}
      className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 w-full h-72"
    >
      {/* Image */}
      <img
        src={imgSrc}
        alt={caption}
        className="w-full h-full object-cover group-hover:scale-00 transition-transform duration-700"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600/70 via-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
        <p className="text-white text-lg font-semibold">{caption}</p>
      </div>
    </motion.a>
  );
};

export default function ServicesSection() {
  const services = [
    {
      imgSrc: "../Home/Contract-Staffing.webp",
      caption: "Professional Contract Staffing Services",
      link: "#",
    },
    {
      imgSrc: "../Home/HR-Outsourcing.webp",
      caption: "Expert HR Outsourcing Solutions",
      link: "#",
    },
    {
      imgSrc: "../Home/manpower-dubai-executive-search-1.webp",
      caption: "Executive Search & Recruitment in Dubai",
      link: "#",
    },
    {
      imgSrc: "../Home/Manpower-Supply-.webp",
      caption: "Reliable Manpower Supply Services",
      link: "#",
    },
    {
      imgSrc: "../Home/Recruitment.webp",
      caption: "Efficient Recruitment & Hiring Solutions",
      link: "#",
    },
    {
      imgSrc: "../Home/security-guard.webp",
      caption: "Professional Security Guard Services",
      link: "#",
    },
  ];

  return (
    <section className="w-screen bg-gradient-to-b from-zinc-50 to-white py-16 flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-12 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
          Manpower Solutions in <span className="text-red-600">UAE</span>
        </h1>
        <p className="text-zinc-600 font-mono max-w-2xl mt-3">
          At manpower.ae, a trusted manpower supplier in Dubai, UAE, we provide
          various professional manpower solutions tailored for your business.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-7xl"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
