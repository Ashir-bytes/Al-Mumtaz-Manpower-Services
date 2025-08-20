import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // <-- Ye import add kiya

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
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 70 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.1 },
    },
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
      <div className="bg-orange-400 hidden md:flex justify-around items-center px-6 lg:px-20 py-2 text-sm">
        <div className="flex gap-6">
          <Link
            to="/about"
            className="text-white font-bold hover:text-orange-900 transition duration-300"
          >
            Want to grow your business? Start today!
          </Link>
        </div>
        <div className="flex gap-6 items-center text-white">
          <span className="flex items-center gap-1  font-bold  hover:text-orange-900 transition duration-300">
            <Phone size={16} /> +971-4-3438006
          </span>
          <span className="flex items-center gap-1  font-bold  hover:text-orange-900 transition duration-300">
            <Mail size={16} /> info@AlMumtaz.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-around items-center px-6 lg:px-20 py-4 relative">
        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
          <Link to="/">
            <img
              className="w-16 h-auto object-cover"
              src="/Qiz-logo.webp"
              alt="Al Mumtaz - ANY WORK. OUR COMPANY!"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-zinc-800 hover:text-orange-600 transition flex items-center gap-1">
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
                    { name: "Al Mumtaz Supply", path: "/services/supply" },
                    { name: "Recruitment", path: "/services/recruitment" },
                    { name: "Contract Staffing", path: "/services/staffing" },
                    { name: "Executive Search", path: "/services/executive" },
                    { name: "HR Outsourcing", path: "/services/hr" },
                    { name: "Security Solutions", path: "/services/security" },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" className="text-zinc-800 hover:text-orange-600 transition">
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-zinc-800 hover:text-orange-500 font-semibold"
          >
            Contact Us
          </Link>
          <Link
            to="/book"
            className="border border-orange-500 text-gray-800 px-5 py-2 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            Book Service
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-800 hover:text-orange-500 text-2xl"
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
              className="text-2xl mb-6 hover:text-orange-500"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-6 font-medium">
              <details>
                <summary className="cursor-pointer hover:text-orange-600">
                  Services
                </summary>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {[
                    { name: "Al Mumtaz Supply", path: "/services/supply" },
                    { name: "Recruitment", path: "/services/recruitment" },
                    { name: "Contract Staffing", path: "/services/staffing" },
                    { name: "Executive Search", path: "/services/executive" },
                    { name: "HR Outsourcing", path: "/services/hr" },
                    { name: "Security Solutions", path: "/services/security" },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="text-gray-700 hover:text-orange-600 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>
              <Link to="/about" className="hover:text-orange-600">
                About Us
              </Link>
              <Link to="/contact" className="text-orange-500 font-semibold">
                Contact Us
              </Link>
              <Link
                to="/book"
                className="border border-orange-500 text-gray-800 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition"
              >
                Book Service
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
