
import slider1 from '../../../assets/images/slider/slider-1.png'
import slider2 from '../../../assets/images/slider/slider-2.jpg'
import slider3 from '../../../assets/images/slider/slider-3.jpg'
import slider4 from '../../../assets/images/slider/slider-4.jpg'

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px] ">
                <div id="item1" className="carousel-item w-full">
                    <img src={slider1} className="w-full  rounded-xl" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slider2} className="w-full rounded-xl" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slider3} className="w-full rounded-xl" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slider4} className="w-full rounded-xl" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;