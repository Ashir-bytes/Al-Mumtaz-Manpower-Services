import React, { useState } from "react";

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
    <div className="w-full bg-gray-100 py-12 px-6 rounded-2xl shadow-md">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Frequently Asked <span className="text-red-600">Questions</span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span className="text-gray-500">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;