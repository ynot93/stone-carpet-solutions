import React from 'react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

import extHouseWash from '../assets/Exterior house washing illustration 2.png';
import resClean from '../assets/Residential deep cleaning illustration.png';
import truckWash from '../assets/Truck washing illustration .png';
import commClean from '../assets/Commercial & Storefront illustration .png';

const Blogs: React.FC = () => {
  const blogPosts = [
    {
      slug: 'ultimate-guide-to-power-washing',
      date: '2025-04-01',
      imageUrl: extHouseWash,
      title: 'The Ultimate Guide to Power Washing Your Home',
      excerpt: 'Discover the benefits, techniques, and when to call a professional for power washing your home...',
    },
    {
      slug: 'revive-your-deck-and-patio',
      date: '2025-03-25',
      imageUrl: resClean,
      title: 'Revive Your Deck and Patio: The Power Washing Secret',
      excerpt: 'Learn how power washing can transform your outdoor living spaces into areas you’ll love...',
    },
    {
      slug: 'commercial-power-washing-importance',
      date: '2025-03-18',
      imageUrl: truckWash,
      title: 'Don\'t Let Grime Win: Essential Power Washing for Commercial Properties',
      excerpt: 'Understand why professional power washing is crucial for maintaining the image and integrity of commercial buildings...',
    },
    {
      slug: 'unexpected-benefits-of-power-washing',
      date: '2025-03-10',
      imageUrl: commClean,
      title: 'More Than Just Cleaning: The Unexpected Benefits of Power Washing',
      excerpt: 'Explore the surprising advantages of power washing beyond just removing dirt and grime...',
    },
  ];
  return(
    <>
      <Navbar />
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Blogs;