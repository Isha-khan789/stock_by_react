import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/Mask group.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      {/* Logo Image at Top Center */}
      <div className="flex justify-center mb-4">
        <img
          src={logo} // Replace this with actual logo path
          alt="Sports Stock Exchange Logo"
          className="h-26"
        />
      </div>

      {/* Logo Text Below Image */}
      <div className="flex justify-center mb-8"></div>

      {/* Footer Links */}
      <div className="max-w-6xl font-display mx-auto grid md:grid-cols-4 gap-8 border-t border-b border-[#B84136] py-10">
        <div>
          <h3 className="text-[#B84136] font-semibold mb-2">
            Consent Preferences
          </h3>
          <div className="space-y-1 text-sm text-gray-300">
            <p>
              Do Not Sell or Share My Personal Information Limit the Use Of My
              Sensitive Personal Information
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-[#B84136] font-semibold mb-2">Products</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Help Center</li>
            <li>My Account</li>
            <li>Mobile App (iOS & Android)</li>
            <li>API</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#B84136] font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Blog</li>
            <li>FAQ</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#B84136] font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-[#FFFFFF]">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-[#2B56AA] items-center pt-6 text-sm ">
        <p>© 2025. All rights reserved.</p>

        <div className="flex space-x-4 my-4 md:my-0 text-red-500 text-xl">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2  border-[#B84136] mb-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2  border-[#B84136] mb-4">
            <FaInstagram className="cursor-pointer hover:text-white" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-2  border-[#B84136] mb-4">
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>
        </div>

        <div className="space-x-4">
          <a href="#" className="hover:text-white text-[#2B56AA]">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white text-[#2B56AA]">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
