import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between h-16 md:h-32">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-bold flex items-center">
              Portfolio
              <span className="live-circle" />
            </Link>
          </div>
          <div className="flex mt-4 md:mt-0">
            <Link href="/" className="text-xl md:mr-4">Home</Link>
            <Link href="/posts" className="text-xl md:mr-4">Blog</Link>
            <Link href="/aboutme" className="text-xl md:mr-4">About me</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4 flex-grow">
        <Component {...pageProps} key={router.route} />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <div className="container mx-auto">
          <p>© 2023</p>
          <div className="flex justify-center mt-4">
            <a href="https://twitter.com/?lang=nl" className="mr-4 hover:underline">Twitter</a>
            <a href="https://www.facebook.com/?locale=nl_NL" className="mr-4 hover:underline">Facebook</a>
          </div>
        </div>
      </footer>

      <style jsx>
        {`
          .live-circle {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            animation: pulse 1s infinite;
          }

          @keyframes pulse {
            0% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(0.8);
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;