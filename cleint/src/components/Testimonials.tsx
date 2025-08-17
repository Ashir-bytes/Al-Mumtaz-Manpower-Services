import React, { useState } from "react";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, Example Corp",
        feedback: "Al Mumtaz provided exceptional service and helped us achieve our goals efficiently.",
        image: "/Home/Testimonials/1.jpg",
    },
    {
        name: "Jane Smith",
        role: "Manager, ABC Ltd",
        feedback: "The team at Al Mumtaz is professional and highly skilled. Highly recommended!",
        image: "/Home/Testimonials/2.jfif",
    },
    {
        name: "Ali Khan",
        role: "Director, XYZ Pvt",
        feedback: "Their dedication and expertise are unmatched. We are extremely satisfied with their work.",
        image: "/Home/Testimonials/3.jfif",
    },
    {
        name: "Emily Davis",
        role: "Project Manager, BuildTech",
        feedback: "Al Mumtaz's team exceeded our expectations with their professionalism and expertise.",
        image: "/Home/Testimonials/4.jfif",
    },
    {
        name: "Michael Brown",
        role: "Operations Head, Innovate Inc",
        feedback: "Their attention to detail and commitment to quality are truly commendable.",
        image: "/Home/Testimonials/5.jfif",
    },
    {
        name: "Sophia Wilson",
        role: "HR Manager, TalentHub",
        feedback: "Working with Al Mumtaz has been a seamless and rewarding experience.",
        image: "/Home/Testimonials/6.jfif",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-full bg-gray-100 py-12 px-6 rounded-2xl shadow-md">

            <div className="relative w-full max-w-5xl mx-auto">
                {/* Testimonial Cards */}
                <div className="flex overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-1/3  px-4 transition-transform duration-500 ${index >= currentIndex && index < currentIndex + 3
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-90"
                                }`}
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-auto h-24 rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                <p className="mt-4 text-center text-gray-600 italic">
                                    "{testimonial.feedback}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-800 text-white p-2 rounded-full shadow-md hover:bg-red-700"
                >
                    &#8592;
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-800 text-white p-2 rounded-full shadow-md hover:bg-red-700"
                >
                    &#8594;
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-red-800" : "bg-red-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;