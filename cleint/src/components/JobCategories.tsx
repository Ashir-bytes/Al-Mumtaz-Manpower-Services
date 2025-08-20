// JobCategoriesGrid.tsx
import { motion } from "framer-motion";
import {
  User,
  Hammer,
  Building,
  FileText,
  Users,
  Trash2,
} from "lucide-react";

const jobCategories = [
  {
    icon: <User size={32} />,
    title: "Civil Al Mumtaz Supply",
    description:
      "For the Civil domain projects, we supply a professional team of Construction Al Mumtaz. Our team will ensure that you get the right quantity and quality of Al Mumtaz as per your requirements.",
  },
  {
    icon: <Hammer size={32} />,
    title: "Mechanical Al Mumtaz Supply",
    description:
      "Working on a project with a deadline puts extra pressure on the existing team. Our Mechanical Al Mumtaz Supply will get you ready to deliver according to the due dates and achieve all your short term goals.",
  },
  {
    icon: <Building size={32} />,
    title: "Electrical Al Mumtaz Supply",
    description:
      "No matter what industry or domain you work for, a secure electrical setup is the first layer of protection you can provide. We provide experienced teams to work for you for a designated time period.",
  },
  {
    icon: <FileText size={32} />,
    title: "Plumbing Al Mumtaz Supply",
    description:
      "We have been keen on the performance and quality of work of our professionals. Besides selecting qualified plumbers, we conduct periodic examination to confirm their capabilities.",
  },
  {
    icon: <Users size={32} />,
    title: "Helper Al Mumtaz Supply",
    description:
      "Helper is someone who assists you in timely finishing the task at hand. We have a large pool of reliable helpers who can work on your terms and requirements.",
  },
  {
    icon: <Trash2 size={32} />,
    title: "Cleaning Al Mumtaz Supply",
    description:
      "Cleaner is someone who assists you in timely finishing the task at hand. We have a large pool of reliable cleaners, who can work on your terms and requirements.",
  },
];

export default function JobCategories() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Al Mumtaz Supply Services in Dubai, UAE
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At almumtazmanpowerservices, a trusted Al Mumtaz supplier in Dubai, UAE, our main
          aim is to supply skilled workers for short & long term at affordable
          rates. To attain this objective, we offer services like:
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {jobCategories.map((job, index) => (
          <motion.div
            key={index}
            className="relative p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg 
                       hover:shadow-2xl transition-all duration-500 cursor-pointer 
                       flex flex-col items-start gap-4 group border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.03 }}
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent 
                            group-hover:border-orange-500/50 transition-all duration-500"></div>

            <div className="text-orange-600 group-hover:scale-110 transform transition-transform duration-300">
              {job.icon}
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
              {job.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {job.description}
            </p>

            {/* Underline Animation */}
            <a
              className="mt-auto relative text-orange-600 font-semibold flex items-center gap-1 
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 
                         after:h-[2px] after:w-0 after:bg-gradient-to-r from-orange-500 to-pink-500 
                         after:transition-all after:duration-500 group-hover:after:w-full"
              href="#"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
