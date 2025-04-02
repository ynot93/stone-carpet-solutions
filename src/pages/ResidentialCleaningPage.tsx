import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import floorWashing from "../assets/Floor washing.png";
import roofWashing from "../assets/Roof washing.png";
import windowCleaning from "../assets/Window cleaning.png";
import stairsWashing from "../assets/Stairs washing.png";

// Define TypeScript type for services
interface Service {
  title: string;
  description: string;
  image: any;
  reverse: boolean;
}

// Code to display residential cleaning services
const services: Service[] = [
  {
    title: "Window Cleaning",
    description:
      "Our professional window cleaning services ensure spotless, streak-free glass, enhancing your home's appearance and allowing more natural light in. We use eco-friendly cleaning solutions and advanced techniques to remove even the toughest grime. Whether it's residential or commercial, we have the right tools to get the job done efficiently. Say goodbye to smudges and water spots, and enjoy crystal-clear windows year-round. Regular maintenance extends the lifespan of your windows and keeps them looking their best. Book a session today and experience the transformation!",
    image: windowCleaning,
    reverse: false,
  },
  {
    title: "Pressure Washing",
    description:
      "Our high-pressure washing services remove dirt, grime, and mildew from driveways, patios, and walls, leaving surfaces looking brand new. We specialize in restoring concrete, brick, wood, and other exterior surfaces to their original condition. Our professional-grade equipment ensures effective cleaning without causing damage. Say goodbye to stubborn stains, mold, and algae buildup that can deteriorate your outdoor spaces. Protect your investment with regular pressure washing and boost your property’s curb appeal instantly. Schedule your service today for a spotless exterior!",
    image: stairsWashing,
    reverse: true,
  },
  {
    title: "Soft Washing",
    description:
      "Gentle yet effective soft washing safely cleans delicate surfaces like roofs and siding without causing damage, extending their lifespan. Unlike traditional pressure washing, soft washing uses a low-pressure application of specialized cleaning solutions to break down dirt, mold, and algae at the molecular level. This method is ideal for shingle roofs, painted surfaces, and areas prone to water damage. Soft washing also prevents future buildup, keeping your home cleaner for longer. Protect your home with our expert soft washing services today!",
    image: roofWashing,
    reverse: false,
  },
  {
    title: "Floor Washing",
    description:
      "We use advanced cleaning techniques to remove dirt and stains from various flooring types, ensuring a spotless and hygienic environment. Our floor washing service includes deep scrubbing, sanitization, and polishing to restore your floors to their original shine. Whether you have hardwood, tile, vinyl, or concrete, we have specialized treatments for every surface. Say goodbye to scuff marks, grime, and dull-looking floors. A clean floor not only looks great but also improves indoor air quality. Book our professional floor washing service for a healthier home today!",
    image: floorWashing,
    reverse: true,
  },
];

const ResidentialCleaning = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col">
      {services.map((service, index) => (
        <div
          key={index}
          id={service.title.toLowerCase().replace(/ /g, "-")}
          className={`flex flex-col md:flex-row ${
            service.reverse ? "md:flex-row-reverse" : ""
          } items-center justify-center min-h-60 p-8 bg-gray-100`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            <section className="bg-amber-500 text-white rounded-2xl mt-2 p-6">
              <div className="flex flex-row items-center justify-between text-center md:text-left">
                <div className="md:mt-0 mr-2">
                  <h2 className="text-3xl text-blue-700 font-semibold mb-2">Ready For Our Service?</h2>
                  <p className='text-lg'>
                    Click or call today for a free no obligation quote. We will get you
                    scheduled ASAP and you can look forward to a cleaner house, office or warehouse.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 items-center mb-4">
                  <a href="tel:+254722000000">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-8 w-full whitespace-nowrap rounded">
                      Call Now
                    </button>
                  </a>
                  <Link to={"/get-quote"}>
                    <button className="bg-amber-700 hover:bg-amber-300 text-white font-bold py-2 px-8 w-full whitespace-nowrap rounded">
                      Get Quote
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      ))}
      </div>
      <Footer />
    </>
  );
};

export default ResidentialCleaning;
