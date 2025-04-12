import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Replace with your actual EmailJS service ID, template ID, and public key
const SERVICE_ID = 'service_sr5qvol';
const TEMPLATE_ID = 'template_oqxjwyh';
const PUBLIC_KEY = 'sGOZWsfwRYibctXKj';

const GetQuotePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.currentTarget,
        PUBLIC_KEY
      );
      console.log('SUCCESS!', result.text);
      setIsSubmitted(true);
    } catch (error) {
      console.error('FAILED...', error);
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto p-8 lg:mb-20">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700">
            Your quote request has been submitted successfully. We will be in touch with you shortly to discuss your needs further.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Get a Quote for Washing Services</h1>
        <p className="text-lg text-gray-700 mb-6">
          Please fill out the form below to request a free quote for our washing services. We will review your request and get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceType">
              Service Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="serviceType"
              name="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="">Select a Service</option>
              <option value="Corporate Washing">Corporate Washing</option>
              <option value="Corporate Carpet Cleaning">Corporate Carpet Cleaning</option>
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Exterior Washing">Exterior Washing</option>
              <option value="Specialized Services">Specialized Services</option>
              {/* Add other service types as needed */}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
              Additional Details
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="details"
              name="details"
              rows={4}
              placeholder="Please provide any additional details about your request (e.g., size of area, specific needs, urgency)."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default GetQuotePage;