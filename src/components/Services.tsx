import React from "react";
import { Link } from "react-router-dom";
import extHouseWash from '../assets/Exterior house washing illustration 2.png';
import resClean from '../assets/Residential deep cleaning illustration.png';
import truckWash from '../assets/Truck washing illustration .png';
import commClean from '../assets/Commercial & Storefront illustration .png';

// Define service names as a union type
type ServiceType = 'Residential Cleaning' | 'Exterior Washing' | 'Commercial Washing' | 'Specialized Services';

const services: ServiceType[] = ['Residential Cleaning', 'Exterior Washing', 'Commercial Washing', 'Specialized Services'];

// Create a record type for serviceImages
const serviceImages: Record<ServiceType, string> = {
  'Residential Cleaning': resClean,
  'Exterior Washing': extHouseWash,
  'Commercial Washing': commClean,
  'Specialized Services': truckWash,
};

// Create a record type for serviceImages
const serviceDescription: Record<ServiceType, string> = {
  'Residential Cleaning': 'Comprehensive residential cleaning covers deep interior sanitization...',
  'Exterior Washing': 'Exterior house washing and restoration services, exclusively for...',
  'Commercial Washing': 'Commercial cleaning services provide professional exterior and common...',
  'Specialized Services': 'Specialized premium cleaning services offer advanced solutions...',
};

// Create a record type for service paths
const servicePaths: Record<ServiceType, string> = {
  'Residential Cleaning': '/residential-cleaning',
  'Exterior Washing': '/residential-cleaning#pressure-washing',
  'Commercial Washing': '/commercial-washing#corporate-washing',
  'Specialized Services': '/commercial-washing#corporate-carpet-cleaning',
};

const Services: React.FC = () => {
  return (
    <section className="py-12 px-12 bg-gray-100">
      <div className='container mx-auto'>
        <div className="flex flex-col lg:items-center justify-between">
          <h2 className="text-3xl font-bold mx-auto mb-6 lg:mb-4 lg:flex-1/3">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded-lg lg:mt-0 h-auto"
              >
                <img 
                  src={serviceImages[service]} 
                  alt={service} 
                  className="w-full h-68 object-cover rounded-t-lg" 
                />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className='font-normal mb-2'>{serviceDescription[service]}</p>
                <Link to={servicePaths[service]}><button className="bg-orange-500 text-white px-4 py-2 rounded">{service}</button></Link>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center text-center'>
          <p className="mt-8">Contact us today for a free estimate and to schedule an appointment with one of our cleaning professionals.</p>
          <Link to={"/get-quote"}>
            <button className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-3 rounded mt-4">Get Free Estimate</button>
          </Link>
        </div>
      </div>
    </section>
  )
};

export default Services;