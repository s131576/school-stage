import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gray-100">

      <header className="fixed top-0 left-0 right-0 bg-white shadow-lg p-4"  style={{zIndex: 3 }}>
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="https://www.ap.be/themes/custom/ap_hogeschool/src/images/logo-ap.svg" width="200" alt="Logo" />
          </Link>

          <nav id='navbarNav' className="flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-green-500 cursor-pointer">Home</Link> 
            <Link href="/posts" className="text-gray-800 hover:text-green-500  cursor-pointer">Blog</Link>
            <Link href="/aboutme" className="text-gray-800 hover:text-green-500 cursor-pointer">About Me</Link>
           
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 flex-grow mt-16">
        <Component {...pageProps} key={router.route} />
      </main>

      <footer className="bg-secondary py-5 top-0 w-full bg-white shadow-lg">
        <div className="container mx-auto pt-sm-2 pt-md-3 pt-lg-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-md-5 mb-4">
            <div className="col flex justify-center items-center">
              <a href="https://www.ap.be/" className="navbar-brand d-inline-flex">
                <img src="https://www.ap.be/themes/custom/ap_hogeschool/src/images/logo-ap.svg" width="200" alt="" />
              </a>
            </div>
            <div className="col text-center">
              <a href="index.html" className="navbar-brand d-inline-flex align-items-center mt-0 mb-lg-4 mb-3 text-nav">
                Inspira
              </a>
              <div className="mt-3 flex justify-center space-x-3">
                <a href="https://www.facebook.com/inspirabvba/" className="btn btn-secondary btn-icon btn-sm btn-facebook rounded-circle" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/inspira-bvba/" className="btn btn-secondary btn-icon btn-sm btn-linkedin rounded-circle" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a href="https://twitter.com/Inspira_bvba/" className="btn btn-secondary btn-icon btn-sm btn-x rounded-circle" aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col flex justify-center">
              <ul className="nav flex-column mb-0">
                <li className="nav-item mb-2">
                  <a href="tel:+15262200444" className="nav-link p-0">Adres: Vrijheid 63 bus 1 2370 Arendonk</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="tel:+15262200444" className="nav-link p-0">Tel: +32 14 89 65 89</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="mailto:info@inspira.be" className="nav-link p-0">E-mail: info@inspira.be</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center fs-sm text-body-secondary">&copy; All rights reserved. Made by <span>Rachad Bouhjar</span></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
