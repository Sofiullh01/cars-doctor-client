import personImg1 from "../../../../public/images/team/1.jpg";
import personImg2 from "../../../../public/images/team/2.jpg";
import personImg3 from "../../../../public/images/team/3.jpg";
import Social from "./Social";
import {FaCertificate} from 'react-icons/fa';

const Meet = () => {
  return (
    <div className="my-8 ">
      <div className="space-y-4 text-center my-3">
        <h5 className="text-custom-500 font-bold">Team</h5>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="text-gray-400">
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. 
        </p>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-2 gap-4">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src={personImg2} alt="profile-picture" className="h-full object-cover" />
          </div>
          <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-1">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Heanry Brooks
            </h4>
            <FaCertificate className="text-blue-500"></FaCertificate>
            </div>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              Drive Expert
            </p>
            <Social></Social>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src={personImg3} alt="profile-picture" className="h-full object-cover" />
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-1">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Sofiul Islam
            </h4>
            <FaCertificate className="text-blue-500"></FaCertificate>
            </div>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            Engine Expert
            </p>
            <Social></Social>
          </div>
        </div>
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
            <img src={personImg1} alt="profile-picture" className="h-full object-cover" />
          </div>
          <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-1">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
              Alba Alin
            </h4>
            <FaCertificate className="text-blue-500"></FaCertificate>
            </div>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              Engine Expert
            </p>
          <Social></Social>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
