import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" w-screen z-50 h-28 bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className=" text-2xl md:text-3xl flex flex-row gap-10 m-2 md:m-3 ">
      <Link to="https://github.com/nandini2727" target="_blank"><FaGithub /></Link>
      <Link to="https://www.linkedin.com/in/nandini-upadhyay-803150211/" target="_blank"><FaLinkedin/></Link>
      </div>
      <p className=" text-sm md:text-md  border-t p-2 text-center w-8/12 md:w-1/3 border-gray-600"><span className="text-gray-400 mr-1">Crafted by</span> Nandini Upadhyay</p>
    </div>
  )
}

export default Footer
