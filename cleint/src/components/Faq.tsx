import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Al Mumtaz provide?",
    answer:
      "Al Mumtaz provides manpower supply services, including skilled and unskilled labor, to meet the needs of various industries.",
  },
  {
    question: "How can I contact Al Mumtaz for inquiries?",
    answer:
      "You can contact us through our website's contact form, email, or by calling our customer service hotline.",
  },
  {
    question: "What industries does Al Mumtaz serve?",
    answer:
      "We serve a wide range of industries, including construction, hospitality, healthcare, and more.",
  },
  {
    question: "Does Al Mumtaz provide international manpower?",
    answer:
      "Yes, we specialize in providing international manpower solutions tailored to your business needs.",
  },
  {
    question: "How does Al Mumtaz ensure quality in its services?",
    answer:
      "We have a rigorous screening and training process to ensure that our workforce meets the highest standards of quality and professionalism.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-center text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked{" "}
          <span className="text-red-600">Questions</span>
        </motion.h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-red-600"
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
