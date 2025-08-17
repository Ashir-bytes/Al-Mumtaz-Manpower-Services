import { motion } from "framer-motion";

const partners = Array.from({ length: 40 }, (_, index) => ({
  name: `Partner ${index + 1}`,
  logo: `Home/Brands/1 (${index + 1}).png`,
}));

const Partners = () => {
  return (
    <section className="md:w-screen sm:w-2xs py-16">
      {/* Desktop - Auto marquee */}
      <div className="hidden lg:block overflow-hidden relative group">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 60, // speed
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" as any }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px] p-4 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:scale-110"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-28 h-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </motion.div>

        {/* gradient mask */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Tablet & Mobile - Scrollable */}
      <div className="lg:hidden overflow-x-auto flex gap-6 px-4 snap-x scrollbar-hide">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px] flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 sm:w-24 md:w-28 h-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
