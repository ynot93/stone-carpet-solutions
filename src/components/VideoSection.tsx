import { FaPhone, FaCheckCircle } from 'react-icons/fa'

const VideoSection: React.FC = () => {
  return (
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
  )
};

export default VideoSection;