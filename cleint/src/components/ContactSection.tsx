// ContactSection.tsx
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🚨 Here you can integrate API / email service
      await new Promise((resolve) => setTimeout(resolve, 1500)); // fake delay
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let’s <span className="text-red-600">Connect</span>
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left side - Contact Info */}
        <motion.div
          className="flex flex-col gap-8 justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Phone className="text-red-600" size={28} />
            </div>
            <p className="text-lg text-gray-700 font-medium">+971 50 123 4567</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <Mail className="text-red-600" size={28} />
            </div>
            <p className="text-lg text-gray-700 font-medium">info@almumtaz.com</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-red-100 p-3 rounded-full">
              <MapPin className="text-red-600" size={28} />
            </div>
            <p className="text-lg text-gray-700 font-medium leading-snug">
              Office 123, Business Bay, Dubai, UAE
            </p>
          </div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6 border border-gray-100"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <p className="text-green-600 font-medium text-center">
              ✅ Thank you! Your message has been sent.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
