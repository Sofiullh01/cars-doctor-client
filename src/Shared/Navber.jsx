import { Link } from "react-router-dom";
import logo from '../../public/logo.svg'

const Navber = () => {
  const navLinks = <>
  <li className="font-bold"><Link to='/'>Home</Link></li>
  <li className="font-bold"><Link to='/login'>Login</Link></li>
  
  </>
  return (
    <div className="navbar bg-base-100 h-24 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl"><img className="w-20" src={logo} alt="logo" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      <button className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white ">Appointment</button>
      </div>
    </div>
  );
};

export default Navber;
