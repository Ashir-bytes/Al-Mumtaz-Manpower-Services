import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* <img
          src="/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        /> */}
        <video 
        src="../Home/Hero-bg.mp4" 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover"></video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-12 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Your Trusted <span className="text-red-500">Workforce Partner</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Providing skilled manpower solutions tailored to your needs — anytime, anywhere.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-semibold transition">
            Get Started
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
