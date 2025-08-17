import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import RightSideCard from '../components/RightSideCard'
import JourneySection from '../components/JourneySection'
import CompanyInfo from '../components/CompanyInfo'
import JobCategories from '../components/JobCategories'
import Testimonials from '../components/Testimonials'
import Partners from '../components/Partners'
import Faq from '../components/Faq'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='overflow-x-hidden'>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* Services */}
            <section className="flex items-center justify-center  w-full py-16 bg-gray-50">
                <div className=" mx-auto px-6">
                    <ServiceCard />
                </div>
            </section>

            {/* Company Info */}
            <section className="w-full py-16">
                <div className="container mx-auto px-6">
                    <CompanyInfo />
                </div>
            </section>

            {/* Job Categories */}
            <section className="w-full py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <JobCategories />
                </div>
            </section>

            {/* Highlight Card */}
            <section className="w-full py-16">
                <div className="container mx-auto px-6">
                    <RightSideCard
                        header="AI in 2025"
                        content="Artificial Intelligence is transforming industries with automation and predictive insights."
                        imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_M5-bdyk28ZfXAjLL_9lqRb63UlMCFA9jA&s"
                    />
                </div>
            </section>

            {/* Journey */}
            <section className="w-full py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <JourneySection />
                </div>
            </section>

            {/* Testimonials */}
            <section className="w-full py-16">
                <div className="container mx-auto px-6">
                    <Testimonials />
                </div>
            </section>

            {/* Partners */}
            <section className="w-full py-20 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
                        Our Trusted <span className="text-red-600">Partners</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        We’re proud to be supported and trusted by industry-leading companies worldwide.
                    </p>

                    {/* Partner Logos */}
                    <div className="w-full overflow-hidden">
                        <Partners />
                    </div>
                </div>
            </section>


            {/* Contact */}
            <section className="w-full py-16">
                <div className="container mx-auto px-6">
                    <ContactSection />
                </div>
            </section>

            {/* FAQ */}
            <section className="w-full py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <Faq />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}
