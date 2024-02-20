import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SkillData } from '@/constants';
import { Autoplay } from 'swiper/modules';

export default function AboutMe() {
  return (
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

          <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-2'>Projects:</h2>
            <div className='flex flex-wrap justify-center'>
              <div className='project-link flex flex-col items-center mx-2 my-4 p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105'>
                <a
                  href='https://bouhjar-rachad-website.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
                >
                  Project 1
                </a>
                <p className='project-description text-gray-700 mt-4 text-center'>
                  Developed a website with Gatsby as a tribute to the actor The Rock and a showcase of his best films of my choice. Built an interactive website using Gatsby to create a showcase for the best films of the actor The Rock. Implemented features such as movie overviews to give visitors an overview of his impressive film career.
                </p>
              </div>

              <div className='project-link flex flex-col items-center mx-2 my-4 p-6 bg-white rounded-lg shadow-lg transition duration-300 transform hover:scale-105'>
                <a
                  href='https://project-madrid-4jc13ow2g-rachadbouhjar-hotmailcom.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='project-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300'
                >
                  Project 2
                </a>
                <p className='project-description text-gray-700 mt-4 text-center'>
                  Developed a website with Next.js, Strapi, and Vercel. On this webpage, users can get an overview of various football clubs, with a focus on informative blog posts, information about the clubs, and individual players. Thanks to the power of Next.js, we provide a streamlined and engaging user experience, allowing users to navigate through the information easily.
                </p>
              </div>
            </div>
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
  );
}
