import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SkillData } from '@/constants';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';


export default function AboutMe() {
  return (
    <>
      <section className='container mx-auto px-6 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-12 lg:col-span-7 place-self-center'>
            <h1 className='text-black mb-4 text-4xl lg:text-6xl font-extrabold'>
              <span>Hello, I'm {""}</span>
              <TypeAnimation
                sequence={[
                  'Rachad Bouhjar',
                  2000,
                  'Junior Web Developer',
                  2000,
                ]}
                wrapper="span"
                speed={13}
                style={{ color: "#3a7763" }}
                repeat={Infinity}
              />
            </h1>
            <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
              Welcome to my humble portfolio! As a junior web developer, I'm excited to share my initial steps in the world of creative digital solutions. Take a look around and explore my growing collection of designs. Enjoy the journey and feel free to browse! 🚀
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 place-self-center mt-4 lg:mt-0">
            <div className='rounded-full overflow-hidden bg-[#3a7763] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] mx-auto relative'>
              <Image
                src={"/welcome.jpg"}
                alt='user image'
                layout="fill"
                objectFit="cover"
                className='object-center object-cover'
              />
            </div>
          </div>
        </div>
      </section>


      <section className="container py-5 mt-5 text-lg lg:text-xl">
        <h2 className="h1 text-center">Projecten</h2>
        {/* Stats */}
        <section className="container pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
          <div className="bg-light rounded-5 py-4 py-md-5 px-lg-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-r h-3/5"></div>
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">1</div>
                  <span>Front-end ontwikkelaar</span>
                </div>
              </div>
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-r h-3/5"></div>
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">2</div>
                  <span>Back-end ontwikkelaar</span>
                </div>
              </div>
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-r h-3/5"></div>
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">2</div>
                  <span>Full-stack ontwikkelaar</span>
                </div>
              </div>
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">5</div>
                  <span>Project</span>
                </div>
              </div>
              {/* Repeat similar structure for other stats */}
            </div>
          </div>
        </section>
      </section>
      <section className="container pb-5 mb-lg-3 mb-xl-4 mb-xxl-5 mt-5 flex flex-wrap">
        {/* Item 1 */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
          <Link href="https://bouhjar-rachad-website.netlify.app/">
            <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
              <div className="card-body pb-5 flex-grow"> {/* Set a specific height, adjust as needed */}
                <h3 className="h4 card-title mt-0">School project: The Rock showroom</h3>
                <p className="card-text">Built an interactive website using Gatsby to create a showroom for the best films of the actor The Rock. Implemented features such as film reviews to give visitors an overview of his impressive film career.</p>
              </div>
              <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Item 2 */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
          <Link href="https://bouhjar-rachad-website.netlify.app/">
            <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
              <div className="card-body pb-5 flex-grow"> {/* Set a specific height, adjust as needed */}
                <h3 className="h4 card-title mt-0">School project: Clubs</h3>
                <p className="card-text">I developed this webpage using Next.js, Strapi, hosted on Vercel, and written in TypeScript. On this website, users get an overview of various football clubs, focusing on informative blog posts, club information, and individual players.</p>
              </div>
              <div className="card-footer border-0 py-3 my-3 mb-sm-4">
                <div className="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/*--------------------------------------------------------------------------------------- */}

      <section className="container pb-1  mb-xl-4 mb-xxl-5 mt-5 flex flex-wrap">
        {/* Left Section - Personalia */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
        <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
            <div className="card-body pb-1 flex-grow w-100">
              <h3 className="card-title mt-0">Personalia</h3>
              <ul>
              <li>Naam: Rachad Bouhjar</li>
              <li>Plaats: Antwerpen</li>
              <li>Geboortedatum: 5 april 1998</li>
              <li>Geboorteplaats: Wilrijk</li>
              <li>Nationaliteit: Belgisch</li>
              <li>Burgerlijke staat: Ongehuwd</li>
              <li>Rijbewijs: B</li>
              </ul>

              <h3 className="h4 card-title mt-4">Opleiding</h3>
              <ul>
                <li>2021-heden: Graduaat Programmeren, Ap Hogeschool, Antwerpen</li>
                <li>2012-2016: Elektriciteit/Elektronica, Stedelijk Lyceum Meir, Antwerpen</li>
                <li>2011-2012: Handel, Sint-Lievenscollege, Antwerpen</li>
                <li>2010-2011: Moderne Wetenschappen, Sint-Lievenscollege, Antwerpen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Opleiding and Certificaten */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
        <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
            <div className="card-body pb-5 flex-grow w-100">

              <h3 className="h4 card-title mt-0">Certificaten</h3>
              <ul>
                <li>Rolbrug</li>
                <li>Theorie heftruck + ervaring</li>
                <li>2015-2016: A2 diploma TSO Elektriciteit/Elektronica Stedelijk Lyceum Meir, Antwerpen</li>
                <li>2020-2030: VCA diploma</li>
              </ul>

              <h3 className="h4 card-title mt-4">Werkervaring</h3>
              <ul>
                <li>Cofely-axima Montage/Elektricien 06/2017-09/2017</li>
                <li>Aleris: Proces operator 06/2018-12/2018</li>
                <li>Campine: Proces operator 01/2019-04/2019</li>
                <li>Audi: Technisch operator 09/2019-11/2019</li>
                <li>Still (tijdelijk): Magazijnier 09/2020-12/2020</li>
                <li>Henco: Operator 02/2021-06/2021</li>
                <li>Camin Cargo Magazijn/Stalen/SABA 01/2023-03/2023</li>
              </ul>

              <h3 className="h4 card-title mt-4">Taalvaardigheden</h3>
              <ul>
                <li>Nederlands: moedertaal</li>
                <li>Frans: basis kennis</li>
                <li>Engels: zeer goed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/*--------------------------------------------------------------------------------------- */}


      {/* <div className='min-h-screen bg-gradient-to-b from-transparent to-bg-start flex flex-col items-center justify-center mt-0'>
        <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='font-semibold text-primary text-5xl'>
              Skills{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                {' '}
                &{' '}
              </span>
              Technologies
            </h1>
          </div>

          <div className='max-w-[80%]'>
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              modules={[Autoplay]}
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              speed={5000}
              modules={[Autoplay]}
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div> */}
    </>
  );
}
