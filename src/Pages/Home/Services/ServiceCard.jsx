import PropTypes from 'prop-types';
import { AiOutlineArrowRight} from "react-icons/ai";

const ServiceCard = ({service}) => {
    const {img,price,title,description} = service || {};
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={title}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0,70)} ...<span className='font-bold'>More</span> </p>
        <div className='flex justify-between items-center  text-custom-500'>
        <p className='font-bold'>Price: ${price}</p>
        <AiOutlineArrowRight  className='text-xl'/>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}
export default ServiceCard;
