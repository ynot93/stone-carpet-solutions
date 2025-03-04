import { Link } from "react-router-dom";
import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import commClean from '../assets/Commercial & Storefront illustration .png';
import dronePower from '../assets/Drone powered power washing.png';
import stoneCarpetLogo from '../assets/Stone Carpet Logo.png';
import powerWashOutdoor from '../assets/power wash outdoor.jpg';
import extHouseWash from '../assets/Exterior house washing illustration 2.png';
import resClean from '../assets/Residential deep cleaning illustration.png';
import truckWash from '../assets/Truck washing illustration .png';
import washCurb from '../assets/power wash curb.jpg';
import extWash from '../assets/Exterior house washing illustration.png';
import tireWash from '../assets/Tire wash.jpg'

// Define service names as a union type
type ServiceType = 'Residential Cleaning' | 'Exterior Washing' | 'Commercial Cleaning' | 'Specialized Services';

const services: ServiceType[] = ['Residential Cleaning', 'Exterior Washing', 'Commercial Cleaning', 'Specialized Services'];

// Create a record type for serviceImages
const serviceImages: Record<ServiceType, string> = {
  'Residential Cleaning': resClean,
  'Exterior Washing': extHouseWash,
  'Commercial Cleaning': commClean,
  'Specialized Services': truckWash,
};

// Create a record type for serviceImages
const serviceDescription: Record<ServiceType, string> = {
  'Residential Cleaning': 'Comprehensive residential cleaning covers deep interior sanitization...',
  'Exterior Washing': 'Exterior house washing and restoration services, exclusively for...',
  'Commercial Cleaning': 'Commercial cleaning services provide professional exterior and common...',
  'Specialized Services': 'Specialized premium cleaning services offer advanced solutions...',
};

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className=" text-white z-50">
        <div className='bg-blue-400'>
          <div className="flex justify-between px-4 py-2 text-sm container mx-auto">
            <h1 className='font-medium text-2xl'>#1 rated power washers in Nairobi</h1>
            <div className="flex space-x-4">
              <h1 className='font-medium text-xl'>Call 0722000000</h1>
              <button className="bg-orange-500 px-3 py-1 rounded">Get Free Estimate</button>
            </div>
          </div>
        </div>
        <div className='bg-amber-500'>
          <div className="flex justify-between items-center text-white container mx-auto">
            <Link to={"/"} className="flex items-center space-x-2">
              <img src={stoneCarpetLogo} alt="Stone Carpet Logo" className="w-auto h-20" />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-blue-500"><li>Home</li></Link>
              <li
                className="relative cursor-pointer"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className="hover:text-blue-500">Residential Power Washing</span>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg">
                    <li><Link to="/residential-cleaning" className="block px-4 py-2 hover:bg-gray-200">Window cleaning</Link></li>
                    <li><Link to="/residential-cleaning" className="block px-4 py-2 hover:bg-gray-200">Carpet cleaning</Link></li>
                    <li><Link to="/residential-cleaning" className="block px-4 py-2 hover:bg-gray-200">Pressure washing</Link></li>
                    <li><Link to="/residential-cleaning" className="block px-4 py-2 hover:bg-gray-200">Soft washing</Link></li>
                    <li><Link to="/residential-cleaning" className="block px-4 py-2 hover:bg-gray-200">Floor Washing</Link></li>
                  </ul>
                )}
              </li>
              <li className="relative cursor-pointer"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
              <span className="hover:text-blue-500">Commercial</span>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg">
                  <li><Link to="/commercial-washing" className="hover:text-blue-500">Commercial Corporate Washing</Link></li>
                  <li><Link to="/commercial-washing" className="hover:text-blue-500">Carpet cleaning</Link></li>
                </ul>
              )}
              </li>
              <li className="relative cursor-pointer">
              <span className="hover:text-blue-500">Discover Our Story</span>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-lg">
                  <li><Link to="/our-story" className="hover:text-blue-500">Blog</Link></li>
                  <li><Link to="/our-story" className="hover:text-blue-500">Contact Us</Link></li>
                </ul>
              )}
              </li>
            </ul>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
          <div>
            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full">
                <ul className="flex flex-col items-center space-y-4 py-6 text-gray-700 text-lg">
                  <li className="hover:text-blue-500 cursor-pointer"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                  <li className="hover:text-blue-500 cursor-pointer"><Link to="residential-cleaning" onClick={() => setIsOpen(false)}>Residential Power Washing</Link></li>
                  <li className="hover:text-blue-500 cursor-pointer"><Link to="commercial-washing" onClick={() => setIsOpen(false)}>Commercial</Link></li>
                  <li className="hover:text-blue-500 cursor-pointer"><Link to="our-story" onClick={() => setIsOpen(false)}>Our Story</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[70vh] bg-cover bg-center flex items-center text-white font-bold"
        style={{ backgroundImage: `url(${powerWashOutdoor})` }}
      >
        <div className='container mx-auto text-center'>
          <h1 className='text-6xl font-medium shadow-gray-600'>Transforming Homes & Businesses with Professional Deep Cleaning & Pressure Washing</h1>
        </div>
        
      </section>

      {/* Our Services */}
      <section className="py-12 px-12 bg-gray-100">
        <div className='container mx-auto'>
          <div className="flex flex-col lg:items-center justify-between">
            <h2 className="text-3xl font-bold mx-auto mb-6 lg:mb-4 lg:flex-1/3">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map(service => (
                <div className="bg-white p-4 shadow rounded-lg lg:mt-0 h-auto">
                  <img 
                    src={serviceImages[service]} 
                    alt={service} 
                    className="w-full h-68 object-cover rounded-t-lg" 
                  />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className='font-normal mb-2'>{serviceDescription[service]}</p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded">{service}</button>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <p className="mt-8">Contact us today for a free estimate and to schedule an appointment with one of our cleaning professionals.</p>
            <button className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 mt-4 rounded">Get a free estimate</button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-6 ">
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <iframe className="w-full lg:w-1/2 h-64 lg:h-96 rounded-2xl" src="https://www.youtube.com/embed/fnjOmFVavxc?si=lLB88uxT1iKROmcY" title="YouTube video" allowFullScreen></iframe>
          <div className="md:ml-6 lg:ml-8 mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold">Experience the Difference.</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> We prioritize meticulous attention to detail ensuring consistently superior cleaning results.</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Our skilled professionals handle diverse cleaning needs with precision.</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Committed to punctuality, transparency, and building lasting customer relationships.</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> From residential to industrial, we are tailored to your specific requirements.</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Your satisfaction is our top priority; we strive to exceed expectations with every job.</li>
            </ul>
            <button className="flex items-center bg-blue-400 hover:bg-blue-600 mt-4 px-6 py-3 rounded text-white">
              <FaPhone className="text-orange-500 mr-2" /> 0722000000
            </button>
            <p className="text-gray-600 mt-4">We're dedicated to delivering exceptional quality in every service, guaranteed. Contact us today for a spotless result you can trust.</p>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-amber-500 text-white rounded-4xl m-8">
        <div className="container mx-auto flex md:flex-row py-6 flex-col items-center justify-between text-center md:text-left">
          <img
            src={stoneCarpetLogo}
            alt="Logo"
            className="w-auto h-auto max-w-xs"
          />
          <div className="md:ml-8 m-4 md:mt-0">
            <h2 className="text-5xl font-semibold mb-2">Ready For Our Service</h2>
            <p className='text-lg'>
              Click or call today for a free no obligation quote. We will get you
              scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-center m-4">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Call Now
            </button>
            <button className="bg-amber-700 hover:bg-amber-300 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Advertisements section */}
      <section className="py-12 px-6">
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <img className="w-full lg:w-1/2 h-96 rounded-xl shadow" src={washCurb} alt="Auto Wash" />
          <div className='md:ml-6 lg:ml-8 mt-6 lg:mt-0'>
            <h2 className='text-4xl font-semibold'>Expect Nothing Less Than Exceptional Clean</h2>
            <p className='mt-4 font-medium text-xl'>Our commitment to meticulous detail ensures a spotless result, every time.</p>
            <p className='mt-4'>At Stone Carpet Solutions, we understand that true cleanliness is more than just surface level. It's about the small details that make a significant difference. That's why we've honed our techniques and processes to achieve a level of precision that consistently exceeds expectations. From the corners of your home to the intricate surfaces of your business, we leave no stone unturned.</p>
            <p className='mt-2'>We don't believe in shortcuts. Our team is trained to adhere to the highest standards of quality, utilizing premium products and proven methods. We're driven by a passion for perfection, ensuring that every cleaning project is executed with unwavering attention to detail. When you choose us, you're choosing a commitment to excellence that you can see and feel.</p>
          </div>
        </div>
      </section>

      {/* More advertisements section */}
      <section className="py-12 px-6">
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <div className=''>
            <h2 className='text-4xl font-semibold'>Skilled Professionals, Advanced Solutions</h2>
            <p className='mt-4 font-medium text-xl'>Our team's specialized training tackles diverse cleaning challenges with unparalleled precision.</p>
            <p className='mt-2'>Cleaning isn't just a task; it's an art. Our professionals are not just cleaners; they're specialists in their field, equipped with in-depth knowledge and advanced techniques. We handle everything from delicate upholstery to heavy-duty industrial cleaning, ensuring that every service is tailored to the specific needs of your environment.</p>
            <p className='mt-2'>We invest in continuous training and stay up-to-date with the latest industry innovations. This allows us to provide specialized solutions that address even the most challenging cleaning requirements. Whether you need drone-powered exterior cleaning for high-rise buildings or meticulous restoration of resin-washed stone floors, our expertise ensures exceptional results.</p>
          </div>
          <img className="w-full lg:w-1/2 h-96 md:mrl-6 lg:ml-8 mt-6 lg:mt-0 rounded-xl shadow" src={dronePower} alt="Car Wash" />
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-blue-500 text-white rounded-4xl m-8">
        <div className="container mx-auto flex md:flex-row py-6 flex-col items-center justify-between text-center md:text-left">
          <img
            src={stoneCarpetLogo}
            alt="Logo"
            className="w-auto h-auto max-w-xs"
          />
          <div className="md:ml-8 m-4 md:mt-0">
            <h2 className="text-5xl font-semibold mb-2">Ready For Our Service</h2>
            <p className='text-lg'>
              Click or call today for a free no obligation quote. We will get you
              scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-center m-4">
            <button className="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Call Now
            </button>
            <button className="bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Advertisements section */}
      <section className="py-12 px-6">
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <img className="w-full lg:w-1/2 h-96 rounded-xl shadow" src={tireWash} alt="Auto Wash" />
          <div className='md:ml-6 lg:ml-8 mt-6 lg:mt-0'>
            <h2 className='text-4xl font-semibold'>Tailored Services for Every Need</h2>
            <p className='mt-4 font-medium text-xl'>From residential deep cleaning to specialized industrial solutions, we offer a full spectrum of services</p>
            <p className='mt-4'>No two cleaning projects are alike. That's why we offer a comprehensive range of services, designed to meet the unique needs of our diverse clientele. Whether you're a homeowner seeking a spotless living space, a business owner needing a professional storefront, or an industrial facility requiring heavy-duty cleaning, we have you covered.</p>
            <p className='mt-2'>Our versatility is our strength. We pride ourselves on our ability to adapt to any cleaning challenge, providing tailored solutions that deliver exceptional results. From routine maintenance to specialized restoration, we're your one-stop shop for all your cleaning needs. Experience the convenience and peace of mind that comes with a truly comprehensive cleaning service.</p>
          </div>
        </div>
      </section>

      {/* More advertisements section */}
      <section className="py-12 px-6">
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <div className=''>
            <h2 className='text-4xl font-semibold'>Your Happiness, Our Priority: Satisfaction You Can Count On</h2>
            <p className='mt-4 font-medium text-xl'>We go above and beyond to exceed your expectations, ensuring your complete satisfaction</p>
            <p className='mt-2'>Your satisfaction is the driving force behind everything we do. We're not satisfied until you are. We believe in going the extra mile, exceeding expectations, and delivering a cleaning experience that leaves you delighted. We value your feedback and use it to continuously improve our services, ensuring that we consistently meet and exceed your needs.</p>
            <p className='mt-2'>We believe in building long-term relationships based on trust and mutual respect. Our commitment to your satisfaction is unwavering, and we're dedicated to ensuring that every interaction is a positive one. Choose us, and experience the peace of mind that comes with a truly customer-centric cleaning service.</p>
          </div>
          <img className="w-full lg:w-1/2 h-96 md:mrl-6 lg:ml-8 mt-6 lg:mt-0 rounded-xl shadow" src={extWash} alt="Car Wash" />
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-amber-500 text-white rounded-4xl m-8">
        <div className="container mx-auto flex md:flex-row py-6 flex-col items-center justify-between text-center md:text-left">
          <img
            src={stoneCarpetLogo}
            alt="Logo"
            className="w-auto h-auto max-w-xs"
          />
          <div className="md:ml-8 m-4 md:mt-0">
            <h2 className="text-5xl font-semibold mb-2">Ready For Our Service</h2>
            <p className='text-lg'>
              Click or call today for a free no obligation quote. We will get you
              scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-center m-4">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Call Now
            </button>
            <button className="bg-amber-700 hover:bg-amber-300 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className='container mx-auto'>
          {/* <h3 className="text-2xl font-bold">CarWashPro</h3> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
      </footer>
    </div>
  );
};

export default Hero;
