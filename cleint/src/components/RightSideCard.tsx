import { motion } from "framer-motion";

interface RightSideCardProps {
  header: string;
  content: string;
  imgSrc: string;
}

function RightSideCard({ header, content, imgSrc }: RightSideCardProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row w-full rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-700 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="md:w-1/3 relative min-h-[200px]">
        <img
          src={imgSrc}
          alt={header}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <h5 className="text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {header}
        </h5>
        <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </motion.div>
  );
}

export default RightSideCard;
