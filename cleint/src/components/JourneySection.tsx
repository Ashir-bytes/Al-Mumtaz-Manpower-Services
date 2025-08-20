import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { target: 250, label: "Ongoing projects", desc: "We believe in offering innovative and cutting-edge Al Mumtaz supply services to help you get the best results." },
  { target: 550, label: "Happy clients", desc: "Al Mumtaz has earned the trust of all its clients. We are known for having high satisfaction rates." },
  { target: 1000, label: "Completed projects", desc: "Our team has worked in the backdrop of various industry-leading Al Mumtaz supply projects in the UAE." },
  { target: 10000, label: "Trained Al Mumtaz", desc: "With a network of trained individuals, Al Mumtaz has also assisted in the successful completion of multiple projects." },
];

// Counter that only starts when visible
const Counter = ({ target, start }: { target: number; start: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // ⛔ don’t start until visible

    let startNum = 0;
    const duration = 2000; // 2s
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      startNum += increment;
      if (startNum >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(startNum));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [target, start]);

  return <motion.span>{count}+</motion.span>;
};

const JourneySection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full bg-gradient-to-r from-orange-600 to-orange-400 py-12 shadow-md"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-gray-100 mb-10"
      >
        The Journey of <span className="text-white">Al Mumtaz</span>
        <br />
        <span className="text-gray-100 text-lg">ANY WORK. OUR COMPANY!</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="text-center text-white p-6 border-r last:border-none border-orange-300"
          >
            <h3 className="text-4xl font-extrabold">
              <Counter target={stat.target} start={inView} />
            </h3>
            <p className="mt-2 text-lg font-semibold">{stat.label}</p>
            <p className="mt-2 text-sm text-gray-100">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneySection;
