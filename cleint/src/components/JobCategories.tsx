// JobCategoriesGrid.tsx
import { motion } from "framer-motion";
import React from "react";
import {
    User,
    Hammer,
    Building,
    FileText,
    Users,
    Trash2
} from "lucide-react"; // icons from lucide-react

const jobCategories = [
    {
        icon: <User size={32} />,
        title: "Civil Manpower Supply",
        description: "For the Civil domain projects, we supply a professional team of Construction Manpower. Our team will ensure that you get the right quantity and quality of Manpower as per your requirements.",
    },
    {
        icon: <Hammer size={32} />,
        title: "Mechanical Manpower Supply",
        description: "Working on a project with a deadline puts extra pressure on the existing team. Our Mechanical Manpower Supply will get you ready to deliver according to the due dates and achieve all your short term goals.",
    },
    {
        icon: <Building size={32} />,
        title: "Electrical Manpower Supply",
        description: "No matter what industry or domain you work for, a secure electrical setup is the first layer of protection you can provide. We provide experienced teams to work for you for a designated time period.",
    },
    {
        icon: <FileText size={32} />,
        title: "Plumbing Manpower Supply",
        description: "We have been keen on the performance and quality of work of our professionals. Besides selecting qualified plumbers, we conduct periodic examination to confirm their capabilities.",
    },
    {
        icon: <Users size={32} />,
        title: "Helper Manpower Supply",
        description: "Helper is someone who assists you in timely finishing the task at hand. We have a large pool of reliable helpers who can work on your terms and requirements.",
    },
    {
        icon: <Trash2 size={32} />,
        title: "Cleaning Manpower Supply",
        description: "Cleaner is someone who assists you in timely finishing the task at hand. We have a large pool of reliable cleaners, who can work on your terms and requirements.",
    },
];

export default function JobCategories() {
    return (
        <section className="bg-gray-50 py-20 px-6 md:px-20 ">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-1 text-center">
                    Al Mumtaz Supply Services in Dubai, UAE
                </h2>
                <p className="text-center">At manpower.ae, a trusted Manpower supplier in Dubai, UAE,
                    our main aim is to supply skilled workers for short & long term at affordable
                    rates. To attain this objective, we offer services like:</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {jobCategories.map((job, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-start gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-red-600">{job.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-gray-500">{job.description}</p>
                        <a className="mt-auto text-red-600 font-medium flex items-center gap-1" href="#">
                            Read More &rarr;
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
