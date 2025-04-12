import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import floorWashing from "../assets/Floor washing.png";
import specialDetail from "../assets/Specialized Detailing.png";

// Define TypeScript type for services
interface Service {
  title: string;
  description: string;
  image: any;
  reverse: boolean;
}

// Code to display commercial cleaning services
const services: Service[] = [
  {
    title: "Corporate Washing",
    description:
      "Project an image of unwavering professionalism with our Corporate Washing services. We understand that your building's exterior is the first impression clients and visitors receive so we begin with a thorough evaluation of your building's surfaces to identify specific cleaning needs. Using state-of-the-art equipment, we remove stubborn dirt, grime, and pollutants. We provide streak-free window cleaning and careful facade maintenance, enhancing your building's overall appearance. Our comprehensive approach is designed to elevate your property's curb appeal, reinforcing your commitment to excellence.",
    image: floorWashing,
    reverse: false,
  },
  {
    title: "Specialized Commercial Detailing",
    description:
      "Enhance the finer details of your commercial space with our specialized cleaning and restoration services. We provide meticulous window cleaning, ensuring streak-free clarity that allows natural light to illuminate your storefront and office. Our expertise extends to signage and display cleaning, maintaining the visibility and appeal of your brand. Additionally, we offer outdoor seating and façade restoration, revitalizing these key areas to create a polished and professional look. By choosing our specialized commercial detailing, you invest in the finer points of your business's presentation, creating an environment that is both welcoming and impressive.",
    image: specialDetail,
    reverse: true,
  }
]

const CommercialCleaning = () => {
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
            className={`flex flex-col md:flex-row ${service.reverse ? "md:flex-row-reverse" : ""
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
              <p className="mt-4 text-lg text-gray-600">
                {service.description.split('\n\n').map((paragraph, pIndex) => (
                  <React.Fragment key={pIndex}>
                    {paragraph.split('\n').map((line, lIndex) => (
                      <React.Fragment key={lIndex}>
                        {line}<br />
                      </React.Fragment>
                    ))}
                    <br />
                  </React.Fragment>
                ))}
              </p>
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
                    <a href="tel:+254722688664">
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

export default CommercialCleaning;