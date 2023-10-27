import About from "./About";
import BannerSlider from "./BannerSlider";
import Contact from "./Contact";
import Features from "./Features/Features";
import Meet from "./Meet/Meet";
import Populer from "./PopularProduct/Populer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Populer></Populer>
            <Meet></Meet>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;