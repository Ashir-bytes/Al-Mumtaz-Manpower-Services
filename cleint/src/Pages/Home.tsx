import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HoverRevealCard from '../components/HoverRevealCard'
import RightSideCard from '../components/RightSideCard'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />

            <HeroSection />

            <div className="w-screen min-h-screen px-10 py-5 flex flex-col justify-center items-center gap-8">
                {/* Heading */}
                <h1 className="text-4xl font-bold text-center text-shadow-zinc-700">
                    Manpower Solutions in UAE
                </h1>

                {/* First Row */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
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
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
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


            <div className='w-screen h-2.5 px-40 flex flex-col sm:flex-row justify-center items-center gap-4 py-4 mb-36 '>
                <RightSideCard
                    header="AI in 2025"
                    content={`Artificial Intelligence is transforming industries with automation and predictive insights`}
                    imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_M5-bdyk28ZfXAjLL_9lqRb63UlMCFA9jA&s"
                />
            </div>
            
            <hr className='bg-zinc-600'/>

            <Footer />
        </div>
    )
}
