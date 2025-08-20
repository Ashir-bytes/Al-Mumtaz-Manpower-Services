import { motion } from 'framer-motion';
export default function Loader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="w-6 h-6 rounded-lg bg-gradient-to-r from-[#a82dcd] to-purple-500"
                animate={{ scale: [1, 1.3, 1]  }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      );
}
