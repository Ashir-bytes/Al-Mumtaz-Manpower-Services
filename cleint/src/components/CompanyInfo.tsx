// CompanyInfo.tsx
import { motion } from "framer-motion";

export default function CompanyInfo() {
  return (
    <motion.section
      className="bg-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-lg mx-auto md:mx-0">
          Manpower UAE has been connecting top talent with leading companies since 2005.
          Our mission is to provide reliable staffing solutions tailored to your business needs.
        </p>
        <button className="border border-orange-600 text-orange-600 font-bold px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition">
          Learn More
        </button>
      </div>

      {/* Image */}
      <div className="flex-1">
        <motion.img
          src="/Home/Contract-Staffing.webp" // from /public/Home/
          alt="Team"
          className="rounded-xl shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  );
}
