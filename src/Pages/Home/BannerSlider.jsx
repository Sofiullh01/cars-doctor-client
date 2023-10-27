import image1 from "../../../public/images/banner/1.jpg";
import image2 from "../../../public/images/banner/2.jpg";
import image3 from "../../../public/images/banner/3.jpg";
import image4 from "../../../public/images/banner/4.jpg";
import image5 from "../../../public/images/banner/5.jpg";
import image6 from "../../../public/images/banner/6.jpg";

const BannerSlider = () => {
  return (
    <div className="carousel w-full h-[540px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} className="w-full rounded-lg " />
        <div className=" items-center  justify-center absolute flex h-full flex-col space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ">
          <div className="text-white space-y-6 pl-9">
            <h4 className="text-6xl font-bold lg:pr-[700px] ">
              Affordable Price For  Car Servicing
            </h4>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5 ">
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
              Discover More
            </button>
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
            Latest Project
            </button>
          </div>
          </div>
          
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-lg " />
        <div className=" items-center  justify-center absolute flex h-full flex-col space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ">
          <div className="text-white space-y-6 pl-9">
            <h4 className="text-6xl font-bold lg:pr-[700px] ">
              Affordable Price For  Car Servicing
            </h4>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5 ">
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
              Discover More
            </button>
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
            Latest Project
            </button>
          </div>
          </div>
          
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-lg " />
        <div className=" items-center  justify-center absolute flex h-full flex-col space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ">
          <div className="text-white space-y-6 pl-9">
            <h4 className="text-6xl font-bold lg:pr-[700px] ">
              Affordable Price For  Car Servicing
            </h4>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5 ">
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
              Discover More
            </button>
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
            Latest Project
            </button>
          </div>
          </div>
          
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-lg " />
        <div className=" items-center  justify-center absolute flex h-full flex-col space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ">
          <div className="text-white space-y-6 pl-9">
            <h4 className="text-6xl font-bold lg:pr-[700px] ">
              Affordable Price For  Car Servicing
            </h4>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5 ">
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
              Discover More
            </button>
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
            Latest Project
            </button>
          </div>
          </div>
          
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={image5} className="w-full rounded-lg " />
        <div className=" items-center  justify-center absolute flex h-full flex-col space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ">
          <div className="text-white space-y-6 pl-9">
            <h4 className="text-6xl font-bold lg:pr-[700px] ">
              Affordable Price For  Car Servicing
            </h4>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5 ">
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
              Discover More
            </button>
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
            Latest Project
            </button>
          </div>
          </div>
          
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide6"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={image6} className="w-full rounded-lg " />
        <div className=" items-center  justify-center absolute flex h-full flex-col space-y-7 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-lg ">
          <div className="text-white space-y-6 pl-9">
            <h4 className="text-6xl font-bold lg:pr-[700px] ">
              Affordable Price For  Car Servicing
            </h4>
            <p>
              There are many variations of passages of available,<br /> but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5 ">
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
              Discover More
            </button>
            <button className="btn bg-transparent text-white hover:bg-[#FF3811] ">
            Latest Project
            </button>
          </div>
          </div>
          
        </div>

        <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle hover:bg-[#FF3811] duration-500 text-white bg-transparent"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
