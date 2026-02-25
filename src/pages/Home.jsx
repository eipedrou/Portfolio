import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import SelectedWork from '../components/SelectedWork'
import Approach from '../components/Approach'
import CoreExpertise from '../components/CoreExpertise'
import EngineeringPhilosophy from '../components/EngineeringPhilosophy'
import TechStack from '../components/TechStack'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="min-h-screen text-white font-sans antialiased selection:bg-blue-600/30 selection:text-blue-100 flex flex-col pt-12 relative">
            <Navbar />
            <Hero />
            <Problems />
            <SelectedWork />
            <div id="abordagem">
                <Approach />
            </div>
            <CoreExpertise />
            <EngineeringPhilosophy />
            <TechStack />
            <About />
            <Footer />
        </div>
    )
}
