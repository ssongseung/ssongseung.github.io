import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Career from "../components/sections/Career";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Marquee from "../components/Marquee";
import { profile } from "../data/profileList";

const Home = () => {
    return (
        <>
            <Hero />
            <Marquee items={profile.stack} />
            <About />
            <Career />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
