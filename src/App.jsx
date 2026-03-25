import React from 'react'
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main>
            <div>
                <NavBar />
                <Hero />
                {/*<ShowcaseSection />*/}
                {/*<LogoSection/>*/}
                <div className="mt-10 md:mt-20 lg:mt-20"></div>
                <FeatureCards/>
                <ExperienceSection />
                <TechStack/>
                <Contact/>
                <Footer/>
            </div>
        </main>

    )
}
export default App
