import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Logo & Social */}
          <div className="space-y-4 col-span-2">
            <h2 className="text-2xl font-bold text-red-600">
              Al Mumtaz.<span className="text-black"></span>
            </h2>
            <p className="text-sm tracking-wide text-gray-500">
              ANY WORK. OUR Al Mumtaz!
            </p>

            <div>
              <h3 className="font-semibold mb-2">CONNECT WITH US</h3>
              <div className="flex gap-3 text-white">
                <a href="#" className="bg-black p-2 rounded-full hover:bg-red-600 transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="bg-black p-2 rounded-full hover:bg-red-600 transition">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="bg-black p-2 rounded-full hover:bg-red-600 transition">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <SiGoogle className="text-2xl text-red-500" />
              <span className="text-sm font-medium">Review us on Google</span>
            </div>

            <p className="text-sm text-gray-600 leading-6">
              #1st Floor, Office No - 103 & 104, Al Mozna Building,<br />
              Near Al Nahda Metro Station, Al Qusais,<br />
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* The Company */}
          <div>
            <h4 className="font-bold mb-3">The Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {["About", "Clients", "Projects", "Contact Us"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative transition-colors duration-300 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Al Mumtaz Services */}
          <div>
            <h4 className="font-bold mb-3">Al Mumtaz Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "Al Mumtaz Supply",
                "Recruitment",
                "Contract Staffing",
                "Executive Search",
                "HR Outsourcing",
                "Security Solutions"
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative transition-colors duration-300 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors We Serve */}
          <div>
            <h4 className="font-bold mb-3">Sectors We Serve</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "Oil and Gas",
                "Civil Construction",
                "Facility Management",
                "Logistics",
                "Manufacturing",
                "Mechanical & Electrical Plumbing"
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative transition-colors duration-300 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="border-t border-red-200 mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom section */}
        <motion.div
          className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Copyright © 2023. Al Mumtaz ANY WORK. OUR COMPANY! All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            {["Privacy Policy", "Terms and Conditions"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="relative transition-colors duration-300 hover:text-red-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
