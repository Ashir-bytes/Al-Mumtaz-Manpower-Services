import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
    {
        name: "John Doe",
        role: "CEO, Example Corp",
        feedback:
            "Al Mumtaz provided exceptional service and helped us achieve our goals efficiently.",
        image: "/Home/Testimonials/1.jpg",
    },
    {
        name: "Jane Smith",
        role: "Manager, ABC Ltd",
        feedback:
            "The team at Al Mumtaz is professional and highly skilled. Highly recommended!",
        image: "/Home/Testimonials/2.jfif",
    },
    {
        name: "Ali Khan",
        role: "Director, XYZ Pvt",
        feedback:
            "Their dedication and expertise are unmatched. We are extremely satisfied with their work.",
        image: "/Home/Testimonials/3.jfif",
    },
    {
        name: "Emily Davis",
        role: "Project Manager, BuildTech",
        feedback:
            "Al Mumtaz's team exceeded our expectations with their professionalism and expertise.",
        image: "/Home/Testimonials/4.jfif",
    },
    {
        name: "Michael Brown",
        role: "Operations Head, Innovate Inc",
        feedback:
            "Their attention to detail and commitment to quality are truly commendable.",
        image: "/Home/Testimonials/5.jfif",
    },
    {
        name: "Sophia Wilson",
        role: "HR Manager, TalentHub",
        feedback:
            "Working with Al Mumtaz has been a seamless and rewarding experience.",
        image: "/Home/Testimonials/6.jfif",
    },
];

const Testimonials = () => {
    return (
      <section className="w-full py-16">
        <h2 className="text-6xl font-bold text-center mb-10 text-gray-800">
          What Our <span className="text-red-600"> Clients Say</span>
        </h2>
  
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3} // Show 3 at once
          pagination={{ clickable: false }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="max-w-6xl mx-auto"
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center h-[350px]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 mb-4"
                />
                <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
                <h4 className="font-semibold text-lg text-gray-800">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default Testimonials;