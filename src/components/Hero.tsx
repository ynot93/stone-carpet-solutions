import { FaPhone, FaCheckCircle } from 'react-icons/fa';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import suvWallpaper from '../assets/SUV wallpaper.jpg';
import defaultLogo from '../assets/Default Logo.png';
import autoWash from '../assets/Automatic wash.jpg';
import carWash from '../assets/Car wash sign.jpg';
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
      <nav className=" text-white">
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
          <div className="flex justify-between items-center px-4 py-4 text-white container mx-auto">
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[70vh] bg-cover bg-center flex items-center text-white font-bold"
        style={{ backgroundImage: `url(${suvWallpaper})` }}
      >
        <div className='container mx-auto text-center'>
          <h1 className='text-6xl font-medium'>#1 leading pressure washing Company in Nairobi</h1>
        </div>
        
      </section>

      {/* Our Services */}
      <section className="py-12 px-12 bg-gray-100">
        <div className='container mx-auto'>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <h2 className="text-3xl font-bold mx-auto mb-6 lg:mb-4 lg:flex-1">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:flex-2/3">
              {services.map(service => (
                <div className="bg-white p-4 shadow rounded-lg lg:mt-0 h-auto">
                  <img 
                    src={serviceImages[service]} 
                    alt={service} 
                    className="w-full h-68 object-cover rounded-t-lg" 
                  />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className='font-normal mb-2'>This is a short description about the services offered in our car wash. You will leave here extremely satisfied.</p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded">{service}</button>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col items-center text-center'>
            <p className="mt-8">Contact us today for a free estimate and to schedule an appointment with one of our cleaning professionals.</p>
            <button className="bg-blue-400 text-white px-6 py-3 mt-4 rounded">Get a free estimate</button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-6 ">
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <iframe className="w-full lg:w-1/2 h-64 lg:h-96" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video" allowFullScreen></iframe>
          <div className="md:ml-6 lg:ml-8 mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold">Get results.</h2>
            <div className="flex items-center mt-4">
              <FaPhone className="text-orange-500 mr-2" /> 0722000000
            </div>
            <p className="text-gray-600 mt-4">We’re committed to providing top-notch cleaning services to all our clients.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 5000+ Cars Cleaned</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 4.9 Star Rating</li>
              <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> 100% Satisfaction Guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-blue-500 text-white rounded-4xl m-8">
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between text-center md:text-left">
          <img
            src={defaultLogo}
            alt="Logo"
            className="w-auto h-auto max-w-xs" // Adjusted logo size
          />
          <div className="md:ml-8 m-4 md:mt-0">
            <h2 className="text-5xl font-semibold mb-2">Ready For Service</h2>
            <p className='text-lg'>
              Click or call today for a free no obligation quote. Will get you
              scheduled ASAP and you can look forward to a cleaner car.
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-center m-4">
            <button className="bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Call Now
            </button>
            <button className="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-4 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Advertisements section */}
      <section className="py-12 px-6">
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <img className="w-full lg:w-1/2 h-96 rounded-xl shadow" src={autoWash} alt="Auto Wash" />
          <div className='md:ml-6 lg:ml-8 mt-6 lg:mt-0'>
            <h2 className='text-4xl font-semibold'>This is a random title</h2>
            <p className='mt-2'>This is another random piece of text</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit aut omnis, fuga ut doloremque unde, non voluptatem a earum officiis sequi mollitia id culpa ex doloribus. Maxime, necessitatibus eum?</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum id vero quam eveniet! Reprehenderit velit minus incidunt et quae maiores impedit obcaecati eius laborum ipsam. Adipisci cupiditate repellat facere!</p>
          </div>
        </div>
      </section>

      {/* More advertisements section */}
      <section className="py-12 px-6">
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
          <div className=''>
            <h2 className='text-4xl font-semibold'>This is a random title</h2>
            <p className='mt-2'>This is another random piece of text</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt velit aut omnis, fuga ut doloremque unde, non voluptatem a earum officiis sequi mollitia id culpa ex doloribus. Maxime, necessitatibus eum?</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum id vero quam eveniet! Reprehenderit velit minus incidunt et quae maiores impedit obcaecati eius laborum ipsam. Adipisci cupiditate repellat facere!</p>
          </div>
          <img className="w-full lg:w-1/2 h-96 md:mrl-6 lg:ml-8 mt-6 lg:mt-0 rounded-xl shadow" src={carWash} alt="Car Wash" />
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
