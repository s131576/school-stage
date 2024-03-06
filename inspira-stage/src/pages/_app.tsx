import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // State to track if the user has scrolled down
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 100 pixels
      setHasScrolled(window.scrollY > 100);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg p-4 z-10">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="https://www.ap.be/themes/custom/ap_hogeschool/src/images/logo-ap.svg" width="150" alt="Logo" />
          </Link>
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-green-500 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          {/* Normal Navigation for Medium Screens and Larger */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-green-500 cursor-pointer">Home</Link>
            <Link href="/posts" className="text-gray-800 hover:text-green-500 cursor-pointer">Blog</Link>
            <Link href="/aboutme" className="text-gray-800 hover:text-green-500 cursor-pointer">About me</Link>
          </nav>
        </div>
      </header>

      {/* Responsive Menu for Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4 z-20" style={{ animation: 'slide-down 0.3s ease-in-out' }}>
          <Link href="/" className="block text-white text-m" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/posts" className="block text-white text-m" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/aboutme" className="block text-white text-m" onClick={toggleMenu}>
            About me
          </Link>
        </div>
      )}


      {/* Main Content */}
      <main className="container mx-auto flex-grow mt-4">
        <Component {...pageProps} key={router.route} />
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-5 w-full bg-white shadow-lg">
        {/* <div className="container mx-auto text-center md:text-left fs-sm text-body-secondary">
         

          <div className="mb-2 md:mb-0 md:mr-2 inline-block">
            <p>Section 1 Content</p>
          </div>

         
          <div className="mb-2 md:mb-0 md:mx-2 inline-block">
            <p>Section 2 Content</p>
          </div>

          <div className="inline-block">
            <p>Section 3 Content</p>
          </div>
        </div> */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-circle"
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
          </svg>
        </button>
        <div className="container mx-auto pt-md-3 pt-lg-4 text-center fs-sm text-body-secondary">
          &copy; All rights reserved. Made by <span>Rachad Bouhjar</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
