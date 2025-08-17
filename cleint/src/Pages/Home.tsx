import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HoverRevealCard from '../components/HoverRevealCard'
import RightSideCard from '../components/RightSideCard'
import JourneySection from '../components/JourneySection'
import CompanyInfo from '../components/CompanyInfo'
import JobCategories from '../components/JobCategories'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div >
            <Navbar />

            <HeroSection />

            <div className="w-screen min-h-1/2 flex flex-col justify-center items-center gap-4 py-12">
                {/* Heading */}
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className="text-6xl font-medium text-center text-shadow-zinc-300 ">
                        Manpower Solutions in UAE
                    </h1>
                    <p className='text-zinc-600 font-mono'>At manpower.ae, a trusted Manpower supplier in Dubai, UAE, provides Various Manpower solutions like:</p>
                </div>
                {/* First Row */}
                <div className="flex flex-col sm:flex-row justify-around items-center gap-6 w-3/4">
                    <HoverRevealCard
                        imgSrc="../Home/Contract-Staffing.webp"
                        caption="Professional Contract Staffing Services"
                        link="#"
                    />
                    <HoverRevealCard
                        imgSrc="../Home/HR-Outsourcing.webp"
                        caption="Expert HR Outsourcing Solutions"
                        link="#"
                    />
                    <HoverRevealCard
                        imgSrc="../Home/manpower-dubai-executive-search-1.webp"
                        caption="Executive Search & Recruitment in Dubai"
                        link="#"
                    />
                </div>

                {/* Second Row */}
                <div className="flex flex-col sm:flex-row justify-around items-center gap-6 w-3/4">
                    <HoverRevealCard
                        imgSrc="../Home/Manpower-Supply-.webp"
                        caption="Reliable Manpower Supply Services"
                        link="#"
                    />
                    <HoverRevealCard
                        imgSrc="../Home/Recruitment.webp"
                        caption="Efficient Recruitment & Hiring Solutions"
                        link="#"
                    />
                    <HoverRevealCard
                        imgSrc="../Home/security-guard.webp"
                        caption="Professional Security Guard Services"
                        link="#"
                    />
                </div>
            </div>

            <div className='w-screen h-1/2 px-40 flex flex-col sm:flex-row justify-center items-center gap-4 py-4 mb-6 '>
                <CompanyInfo />

            </div>
            <div className='w-screen h-1/2 px-40 flex flex-col sm:flex-row justify-center items-center gap-4 py-4 mb-6 '>
                <JobCategories />
            </div>
            <div className='w-screen h-1/2 px-40 flex flex-col sm:flex-row justify-center items-center gap-4 py-4 mb-6 '>
                <RightSideCard
                    header="AI in 2025"
                    content={`Artificial Intelligence is transforming industries with automation and predictive insights`}
                    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_M5-bdyk28ZfXAjLL_9lqRb63UlMCFA9jA&s"
                />
            </div>



            <div className="w-screen min-h-1/2 px-10 flex flex-col justify-center items-center gap-8 p-12">
                <JourneySection />
            </div>

            <div className="w-screen min-h-1/2 px-10 flex flex-col justify-center items-center gap-8 p-12">
                <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8">
                    What Our Clients Say
                </h1>
                <Testimonials />
            </div>
            {/* <hr className='bg-zinc-600' /> */}

            <div className="w-screen min-h-1/2 px-10 flex flex-col justify-center items-center gap-8 p-12">
                <h1 className="text-4xl font-bold text-center text-zinc-800 mb-8">
                    Our Trusted Partners
                </h1>
                <Partners />
            </div>

            <Faq />
            <Footer />
        </div >
    )
}
