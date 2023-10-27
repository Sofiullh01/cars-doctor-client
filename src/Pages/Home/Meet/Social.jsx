import { FaSquareFacebook } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitter,FaCertificate} from 'react-icons/fa';

const Social = () => {
    return (
        <div className='flex justify-center items-center mt-2 space-x-2' >
            <a href="https://www.facebook.com/"><FaSquareFacebook className='text-2xl text-blue-700'></FaSquareFacebook></a>
            <a href="https://www.facebook.com/"><FaTwitter className='text-2xl text-blue-500'></FaTwitter></a>
            <a href="https://www.facebook.com/"><BsInstagram className='text-2xl text-black  '></BsInstagram></a>
        </div>
    );
};

export default Social;