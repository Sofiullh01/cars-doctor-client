import person from '../../../public/images/about_us/person.jpg'
import parst from '../../../public/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen my-8 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
        <img
          src={person}
          className="w-3/4 lg:h-96 object-cover rounded-lg shadow-2xl"
        />
        <img
          src={parst}
          className="w-2/4 rounded-lg shadow-2xl lg:h-72 object-cover absolute lg:right-5 lg:top-2/4 border-8 border-white"
        />
        </div>
        <div className='lg:w-1/2'>
            <h3 className='text-lg font-bold text-custom-500 mb-3'>About Us</h3>
          <h1 className="text-5xl font-bold lg:pr-32">We are qualified & of experience in this field</h1>
          <p className="py-6 text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="text-gray-500">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-transparent my-7 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
