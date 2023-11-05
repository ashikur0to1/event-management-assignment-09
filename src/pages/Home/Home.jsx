import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Services/Services";
import AboutUs from "../../components/AboutUs/AboutUs";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center text-5xl font-bold mt-28 mb-28">Services</h1>
            <Services services={services}></Services>
            <h1 className="text-center text-5xl font-bold mt-8 mb-28">About Us</h1>
            <AboutUs></AboutUs>
            <h1 className="text-center text-5xl font-bold mt-28 mb-4">Gallery</h1>
            <h2 className="text-center mb-20">Some of our works are shown below</h2>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;