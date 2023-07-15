import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <OurServices />
            <Contact />
            <Testimonials />
        </div>
    );
};

export default Home;