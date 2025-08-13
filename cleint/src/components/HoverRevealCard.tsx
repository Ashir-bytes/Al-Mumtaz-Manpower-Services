import { motion } from "framer-motion";

interface HoverRevealCardProps {
    imgSrc: string;
    caption: string;
    link: string;
}

const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
    imgSrc,
    caption,
    link,
}) => {
    return (
        <motion.a
            href={link}
            className="relative max-w-xs overflow-hidden rounded-lg cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Image */}
            <motion.img
                src={imgSrc}
                alt={caption}
                className="rounded-lg w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Caption */}
            <motion.div
                className="absolute bottom-0 w-full p-4 bg-black/60 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {caption}
            </motion.div>
        </motion.a>
    );
};

export default HoverRevealCard;