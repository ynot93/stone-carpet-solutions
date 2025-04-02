import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const OurStory = () => {
    return (
      <>
        <Navbar />
        <div className="container mx-auto my-8">
          <h1 className="text-4xl font-bold text-center mt-8">Our Story</h1>
          <section className="bg-gray-100 p-8 rounded-lg mt-8">
            <p className="text-lg text-gray-600">
              At Stone Carpet Solutions, we understand that true cleanliness is more than just surface level. It's about the small details that make a significant difference. That's why we've honed our techniques and processes to achieve a level of precision that consistently exceeds expectations. From the corners of your home to the intricate surfaces of your business, we leave no stone unturned.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              We don't believe in shortcuts. Our team is trained to adhere to the highest standards of quality, utilizing premium products and proven methods. We're driven by a passion for perfection, ensuring that every cleaning project is executed
              with unwavering attention to detail. When you choose us, you're choosing a commitment to excellence that you can see and feel.
            </p>
          </section>
        </div>
        <Footer />
      </>
    );
  };
  
  export default OurStory;