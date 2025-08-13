import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 70 } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.1 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-white" : "bg-white"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gray-100 hidden md:flex justify-around items-center px-6 lg:px-20 py-2 text-sm">
        <div className="flex gap-6">
          {["About us", "Projects", "Clients", "Insights"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-red-950 hover:text-red-600 transition"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex gap-6 items-center text-red-600">
          <span className="flex items-center gap-1">
            <Phone size={16} /> 055 - 12345678
          </span>
          <span className="flex items-center gap-1">
            <Phone size={16} /> +971 50 1234567
          </span>
          <span className="flex items-center gap-1">
            <Mail size={16} /> info@AlMumtaz.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-around items-center px-6 lg:px-20 py-4 relative">
        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl tracking-wide text-red-500 font-bold">
            Al Mumtaz
          </h1>
          <p className="text-xs tracking-wide text-red-600 font-semibold">
            ANY WORK. OUR COMPANY!
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-zinc-800 hover:text-red-600 transition flex items-center gap-1">
              Services ▼
            </button>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden w-56 z-50"
                >
                  {[
                    "Manpower Supply",
                    "Recruitment",
                    "Contract Staffing",
                    "Executive Search",
                    "HR Outsourcing",
                    "Security Solutions",
                  ].map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      {service}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#sectors" className="text-zinc-800 hover:text-red-600 transition">
            About Us
          </a>
          <a href="#contact" className="text-zinc-800 hover:text-red-500 font-semibold">
            Contact Us
          </a>
          <button className="border border-red-500 text-gray-800 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
            Book Service
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-800 hover:text-red-500 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl mb-6 hover:text-red-500"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-6 font-medium">
              <details>
                <summary className="cursor-pointer hover:text-red-600">
                  Services
                </summary>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {[
                    "Manpower Supply",
                    "Recruitment",
                    "Contract Staffing",
                    "Executive Search",
                    "HR Outsourcing",
                    "Security Solutions",
                  ].map((service) => (
                    <a
                      key={service}
                      href="#"
                      className="text-gray-700 hover:text-red-600 text-sm"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </details>
              <a href="#sectors" className="hover:text-red-600">Sectors We Serve</a>
              <a href="#contact" className="text-red-500 font-semibold">Contact Us</a>
              <button className="border border-red-500 text-gray-800 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
                Book Service
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
