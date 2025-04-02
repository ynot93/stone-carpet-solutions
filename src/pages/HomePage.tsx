import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";
import ReviewsCarousel from "../components/Testimonial";
import { Link } from "react-router-dom";
// Image imports
import dronePower from '../assets/Drone powered power washing.png';
import washCurb from '../assets/power wash curb.jpg';
import powerWashOutdoor from '../assets/power wash wood.jpg';
import powerWashFloor from '../assets/power wash floor.jpg';

const Home: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <Services />
    <VideoSection />

    {/* Call To Action Section */}
    <section className="bg-amber-500 text-white container mx-auto rounded-4xl m-8">
      <div className="flex md:flex-row py-6 flex-col items-center justify-between text-center md:text-left">
        <div className="md:ml-8 m-4 md:mt-0">
          <h2 className="text-5xl font-semibold mb-2">Ready For Our Service</h2>
          <p className='text-lg'>
            Click or call today for a free no obligation quote. We will get you
            scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center m-4">
          <a href="tel:+254722000000">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-20 w-full whitespace-nowrap rounded">
              Call Now
            </button>
          </a>
          <Link to={"/get-quote"}>
            <button className="bg-amber-700 hover:bg-amber-300 text-white font-bold py-2 px-20 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </Link>
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
    <section className="bg-blue-500 text-white container mx-auto rounded-4xl m-8">
      <div className="flex md:flex-row py-6 flex-col items-center justify-between text-center md:text-left">
        <div className="md:ml-8 m-4 md:mt-0">
          <h2 className="text-5xl font-semibold mb-2">Ready For Our Service</h2>
          <p className='text-lg'>
            Click or call today for a free no obligation quote. We will get you
            scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center m-4">
          <a href="tel:+254722000000">
            <button className="bg-amber-500 hover:bg-amber-300 text-white font-bold py-2 px-20 w-full whitespace-nowrap rounded">
              Call Now
            </button>
          </a>
          <Link to={"/get-quote"}>
            <button className="bg-blue-700 hover:bg-blue-300 text-white font-bold py-2 px-20 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </section>

    {/* Advertisements section */}
    <section className="py-12 px-6">
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
        <img className="w-full lg:w-1/2 h-96 rounded-xl shadow" src={powerWashOutdoor} alt="Power Wash Outdoor" />
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
          <h2 className='text-4xl font-semibold'>Your Happiness, Our Priority</h2>
          <p className='mt-4 font-medium text-xl'>We go above and beyond to exceed your expectations, ensuring your complete satisfaction</p>
          <p className='mt-2'>Your satisfaction is the driving force behind everything we do. We're not satisfied until you are. We believe in going the extra mile, exceeding expectations, and delivering a cleaning experience that leaves you delighted. We value your feedback and use it to continuously improve our services, ensuring that we consistently meet and exceed your needs.</p>
          <p className='mt-2'>We believe in building long-term relationships based on trust and mutual respect. Our commitment to your satisfaction is unwavering, and we're dedicated to ensuring that every interaction is a positive one. Choose us, and experience the peace of mind that comes with a truly customer-centric cleaning service.</p>
        </div>
        <img className="w-full lg:w-1/2 h-96 md:mrl-6 lg:ml-8 mt-6 lg:mt-0 rounded-xl shadow" src={powerWashFloor} alt="Power Wash Floor" />
      </div>
    </section>

    {/* Call To Action Section */}
    <section className="bg-amber-500 text-white container mx-auto rounded-4xl m-8">
      <div className="flex md:flex-row py-6 flex-col items-center justify-between text-center md:text-left">
        <div className="md:ml-8 m-4 md:mt-0">
          <h2 className="text-5xl font-semibold mb-2">Ready For Our Service</h2>
          <p className='text-lg'>
            Click or call today for a free no obligation quote. We will get you
            scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center m-4">
          <a href="tel:+254722000000">
            <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-20 w-full whitespace-nowrap rounded">
              Call Now
            </button>
          </a>
          <Link to={"/get-quote"}>
            <button className="bg-amber-700 hover:bg-amber-300 text-white font-bold py-2 px-20 w-full whitespace-nowrap rounded">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </section>

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h1>
      <ReviewsCarousel />
    </div>    
    <Footer />
  </>
);
export default Home;