import powerWashOutdoor from '../assets/power wash outdoor.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center flex items-center text-white font-bold"
      style={{ backgroundImage: `url(${powerWashOutdoor})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b  via-transparent to-blue-300"></div>
      <div className='container mx-auto z-10 text-center'>
        <h1 className='text-6xl font-bold drop-shadow-xl'>Transforming Homes & Businesses with Professional Deep Cleaning & Pressure Washing</h1>
      </div>
    </div>
  );
};

export default Hero;
