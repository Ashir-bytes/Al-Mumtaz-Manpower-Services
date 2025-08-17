import { motion } from "framer-motion";

interface HoverRevealCardProps {
    link: string;
    imgSrc: string;
    caption: string;
}

const HoverRevealCard: React.FC<HoverRevealCardProps> = ({ link, imgSrc, caption }) => {
    const initialAnimation = { opacity: 0, y: 20 };
    const whileInViewAnimation = { opacity: 1, y: 0 };
    const overlayAnimation = { y: 0, opacity: 1 };

    return (
        <motion.a
            href={link}
            className="relative max-w-xs overflow-hidden rounded-lg cursor-pointer group"
            initial={initialAnimation}
            whileInView={whileInViewAnimation}
            transition={{ duration: 0.4 }}
        >
            {/* Image */}
            <motion.img
                src={imgSrc}
                alt={caption || "Image"}
                className="rounded-lg w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Caption */}
            <motion.div
                className="absolute bottom-0 w-full p-4 bg-red-600/60 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={initialAnimation}
                whileHover={overlayAnimation}
                transition={{ duration: 0.3 }}
            >
                {caption}
            </motion.div>
        </motion.a>
    );
};

export default HoverRevealCard;