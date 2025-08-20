import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const partners = Array.from({ length: 40 }, (_, index) => ({
  name: `Partner ${index + 1}`,
  logo: `Home/Brands/1 (${index + 1}).png`,
}));

const Partners = () => {
  return (
    <section className="w-full py-16">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={6000}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
          1280: { slidesPerView: 6, spaceBetween: 30 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center min-w-[160px] p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-500 ease-in-out hover:scale-105">
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                loading="lazy"
                className="w-36 h-20 object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;
