// import { FaPhone, FaCheckCircle, FaStar } from 'react-icons/fa';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import suvWallpaper from '../assets/SUV wallpaper.jpg';
// import autoWash from '../assets/Automatic wash.jpg';
// import carWash from '../assets/Car wash.jpg';
import cleanInterior from '../assets/Clean interior.jpg';
// import garageLit from '../assets/Garage lit.jpg';
// import mercedesInterior from '../assets/Mercedes interior.jpg';
import polishServices from '../assets/Polishiing services.jpg';
import soapyHood from '../assets/Soapy hood.jpg';
// import tireWash from '../assets/Tire wash.jpg';

// Define service names as a union type
type ServiceType = 'Interior Washing' | 'Polishing' | 'Deep Cleaning';

const services: ServiceType[] = ['Interior Washing', 'Polishing', 'Deep Cleaning'];

// Create a record type for serviceImages
const serviceImages: Record<ServiceType, string> = {
  'Interior Washing': cleanInterior,
  'Polishing': polishServices,
  'Deep Cleaning': soapyHood,
};

const Hero: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className=" bg-blue-400 text-white">
        <div className="flex justify-between px-4 py-2 text-sm">
          <h1 className='font-bold text-2xl'>#1 rated power washers in Nairobi</h1>
          <div className="flex space-x-4">
            <h1 className='font-bold text-xl'>Call 0722000000</h1>
            <button className="bg-orange-500 px-3 py-1 rounded">Get Free Estimate</button>
          </div>
        </div>
        <div className="bg-amber-500 flex justify-between items-center px-4 py-4 text-white shadow">
          <div className="text-3xl font-bold">CarWashPro</div>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li className="group relative">
              Residential Power Washing
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
                <li>Window cleaning</li>
                <li>Carpet cleaning</li>
                <li>Pressure washing</li>
                <li>Soft washing</li>
                <li>Floor Washing</li>
              </ul>
            </li>
            <li className="group relative">
              Commercial
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
                <li>Commercial Corporate Washing</li>
                <li>Carpet cleaning</li>
              </ul>
            </li>
            <li className="group relative">
              Discover Our Story
              <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2">
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[70vh] bg-cover bg-center flex items-center justify-center mx-auto text-white font-bold" style={{ backgroundImage: `url(${suvWallpaper})` }}>
        <h1 className='text-6xl'>#1 leading pressure washing Company in Nairobi</h1>
      </section>

      {/* Our Services */}
      <section className="py-12 px-12 bg-gray-100">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <h2 className="text-3xl font-bold mb-6 lg:mb-0">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <div className="bg-white p-4 shadow rounded-lg -mt-12 lg:mt-0 h-80">
                <img 
                  src={serviceImages[service]} 
                  alt={service} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">{service}</button>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <p className="mt-8">Contact us today for a free estimate and to schedule an appointment with one of our cleaning professionals.</p>
          <button className="bg-blue-400 text-white px-6 py-3 mt-4 rounded">Get a free estimate</button>
        </div>
        
      </section>

      {/* Video Section */}
      <section className="py-12 px-6 flex flex-col lg:flex-row items-center">
        <iframe className="w-full lg:w-1/2 h-64 lg:h-96" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen></iframe>
        <div className="lg:ml-8 mt-6 lg:mt-0">
          <h2 className="text-2xl font-bold">Get results.</h2>
          <div className="flex items-center mt-4">
            {/* <FaPhone className="text-orange-500 mr-2" /> 0722000000 */}
          </div>
          <p className="text-gray-600 mt-4">We’re committed to providing top-notch cleaning services to all our clients.</p>
          <ul className="mt-4 space-y-2">
            {/* <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 5000+ Cars Cleaned</li> */}
            {/* <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 4.9 Star Rating</li>
            <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 100% Satisfaction Guarantee</li> */}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-2xl font-bold">CarWashPro</h3>
          </div>
          <div className='flex flex-col gap-4'>
            <h4 className="font-semibold text-xl">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Residential Services</li>
              <li>Commercial</li>
              <li>Discover Our Story</li>
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
      </footer>
    </div>
  );
};

export default Hero;
