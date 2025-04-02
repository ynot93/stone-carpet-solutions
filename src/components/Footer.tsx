import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
    <div className='container mx-auto'>
      {/* <h3 className="text-2xl font-bold">CarWashPro</h3> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className='flex flex-col gap-4'>
          <h4 className="font-semibold text-xl">Quick Links</h4>
          <ul>
            <Link to="/" className="hover:text-gray-500"><li>Home</li></Link>
            <Link to="/residential-cleaning" className="hover:text-gray-500"><li>Residential Services</li></Link>
            <Link to="/commercial-washing" className="hover:text-gray-500"><li>Commercial</li></Link>
            <Link to="/our-story" className="hover:text-gray-500"><li>Discover Our Story</li></Link>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className="font-semibold text-xl">Others</h4>
          <ul>
            <li>Blogs</li>
            <li>News</li>
            <li>Careers</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className="font-semibold text-xl">Contact</h4>
          <p>Nairobi, Kenya</p>
          <p>0722000000</p>
          <p>info@carwashpro.com</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h4 className="font-semibold text-xl">Opening Hours</h4>
          <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;