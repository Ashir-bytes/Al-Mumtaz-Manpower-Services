// NotFound.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/30 shadow-xl rounded-2xl p-10 max-w-lg w-full text-center"
      >
        <h1 className="text-9xl font-extrabold text-orange-600 drop-shadow-lg">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-3 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
