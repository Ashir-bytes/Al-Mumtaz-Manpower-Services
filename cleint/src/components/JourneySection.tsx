import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { target: 250, label: "Ongoing projects", desc: "We believe in offering innovative and cutting-edge Al Mumtaz supply services to help you get the best results." },
  { target: 550, label: "Happy clients", desc: "Al Mumtaz has earned the trust of all its clients. We are known for having high satisfaction rates." },
  { target: 1000, label: "Completed projects", desc: "Our team has worked in the backdrop of various industry-leading Al Mumtaz supply projects in the UAE." },
  { target: 10000, label: "Trained Al Mumtaz", desc: "With a network of trained individuals, Al Mumtaz has also assisted in the successful completion of multiple projects." },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2s
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [target]);

  return <motion.span>{count}+</motion.span>;
};

const JourneySection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-red-400 py-12 rounded-2xl shadow-md">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        The Journey of <span className="text-red-600">Al Mumtaz</span>
        <br />
        <span className="text-gray-600 text-lg">ANY WORK. OUR COMPANY!</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center text-white p-6 border-r last:border-none border-red-300">
            <h3 className="text-4xl font-extrabold">
              <Counter target={stat.target} />
            </h3>
            <p className="mt-2 text-lg font-semibold">{stat.label}</p>
            <p className="mt-2 text-sm text-gray-100">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneySection;
