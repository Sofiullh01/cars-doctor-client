import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import logining from "../../../public/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = {name, email, password};
    console.log(loginInfo);

    // createUser
    createUser(email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      toast.success('Create user successful')
    })
    .catch((error) => {
      toast.error(error.message)
    });


  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src={logining} alt="login image" className="lg:mr-4" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100">
          <div className="w-full max-w-md mx-auto px-12 py-6 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 border border-[#D0D0D0]">
            <h1 className="text-3xl font-bold text-center mt-4">Register</h1>
            <form
              onSubmit={handleRegister}
              className="space-y-6  px-6 py-10  rounded-md"
            >
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400  border"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400  border"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="block dark:text-gray-400 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 border"
                />
                <div className="flex justify-end text-xs dark:text-gray-400">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="block  p-3 text-center rounded-md dark:text-gray-900 text-white btn btn-block  bg-custom-500 hover:bg-red-500 duration-700">
                Sign Up
              </button>
            </form>
            <div className="flex items-center  space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <div className="flex justify-center space-x-4">
                <p className="bg-gray-100 p-2.5 rounded-full">
                  <FcGoogle className=" text-2xl"></FcGoogle>
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <p className="bg-gray-100 p-2.5 rounded-full">
                  <AiFillFacebook className=" text-2xl text-blue-600"></AiFillFacebook>
                </p>
              </div>
              <div className="flex justify-center space-x-4">
                <p className="bg-gray-100 p-2.5 rounded-full">
                  <FaLinkedinIn className=" text-2xl text-blue-600"></FaLinkedinIn>
                </p>
              </div>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
              Do you have an account?
              <Link to="/login">
                <span className="text-base font-semibold text-custom-500">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
