import ImgGallery from "../../imgGallery/ImgGallery";
import Hiring from "../Hiring/Hiring";
import Quality from "../Quality/Quality";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="mt-4">
            <Slider></Slider>
            <ImgGallery></ImgGallery>
            <Quality></Quality>
            <Hiring></Hiring>
        </div>
    );
};

export default Home;