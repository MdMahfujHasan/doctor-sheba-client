import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContactUs from "../ContactUs/ContactUs";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <Contact />
            <OurServices />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;