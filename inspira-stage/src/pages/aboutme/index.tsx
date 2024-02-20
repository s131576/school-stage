import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SkillData } from '@/constants';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <>
      <section className="container py-5 mt-5">
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





      <div className='min-h-screen bg-gradient-to-b from-transparent to-bg-start flex flex-col items-center justify-center'>
        <div className='mx-auto p-8 text-center'>
          <h1 className='text-4xl font-bold text-white mb-4'>Rachad Bouhjar</h1>
          <p className='text-lg text-gray-300 mb-8'>Passionate Programmer</p>

          <div className='text-white'>
            <section className='mb-8'>
              <h2 className='text-2xl font-bold mb-2'>Education:</h2>
              <p>A2 diploma TSO Elektriciteit/Elektronica (2015-2016)</p>
              <p>VCA diploma (2020-2030)</p>
            </section>
          </div>
        </div>

        <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
          <div className='flex flex-col items-center gap-4'>
            <h1 className='font-semibold text-white text-5xl'>
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
      </div>
    </>
  );
}
