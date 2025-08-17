import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="../Home/Hero-bg.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Side: Text */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Your Trusted <span className="text-red-500">Workforce Partner</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl">
            We provide skilled manpower solutions tailored to your business needs. 
            From construction to corporate staffing, we ensure reliable and professional support anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition"
            >
              Get Started <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Visual / Animated Card */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-80 h-80 flex flex-col justify-center items-center shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-red-500">10+ Years</h3>
            <p className="text-gray-200 mt-2 text-center">Industry Experience</p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-white">500+</h4>
                <p className="text-sm text-gray-400">Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-white">2000+</h4>
                <p className="text-sm text-gray-400">Workers</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
