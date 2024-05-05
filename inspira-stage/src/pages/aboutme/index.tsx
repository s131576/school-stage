import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SkillData } from '@/constants';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Accordion from '@/components/Accordion';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

export default function AboutMe() {
  const accordionData = [
    {
      title: 'Wat doet Inspira?'
      , desc: 'Met een op maat gemaakte webapplicatie kunt u bedrijfsprocessen automatiseren voor efficiëntere werking.\nMet een op maat gemaakte webapplicatie kunt u uw bedrijfsprocessen automatiseren en efficiënte, duidelijke integratie bieden. Onze jarenlange ervaring stelt ons in staat te analyseren welke bedrijfsprocessen geïntegreerd en geoptimaliseerd kunnen worden. We streven er altijd naar een frisse kijk te bieden op het grote geheel. Ons doel is altijd om slim en gebruiksvriendelijk te werken. Het resultaat? Enorme tijdsbesparingen voor u en uw medewerkers.\n\nWerk efficiënter en sneller\nElk bedrijf heeft zijn eigen manier van werken. Deze manier van werken is in de loop der jaren verbeterd. Zonder deze werking zullen er zeker fouten optreden. Het is deze specifieke manier van werken die we zullen integreren in een op maat gemaakte webapplicatie om het eenvoudiger en efficiënter te maken. Geen onnodige papieren meer. Geen verschillende programma\'s combineren. Dankzij de keuze voor maatwerk kunnen deze bedrijfsprocessen in de toekomst verder worden geoptimaliseerd.\n\nEen op maat gemaakte webapplicatie is overal en altijd beschikbaar\nZo\'n op maat gemaakte webapplicatie is online beschikbaar. U kunt het dus overal ter wereld gebruiken, mits er een internetverbinding is. Dit is veel gemakkelijker dan lokale software. Bovendien zijn er geen extra kosten of vertraging merkbaar wanneer meerdere gebruikers de applicatie gebruiken.\n\nOp maat gemaakte webapplicatie: De werkplek van de toekomst\nOnze service stopt niet na levering. Zodra u begint te werken met uw eigen op maat gemaakte webapplicatie, zullen uw ogen echt opengaan. Heeft u nieuwe ideeën? Of denkt u eraan om een proces te versnellen? U neemt gewoon contact met ons op, en wij gaan aan de slag.'
      , img: "/Inspira-41.jpg"
    },
    { title: 'Technologieën?'
    , desc: 'Mijn rol als stagiair webontwikkelaar houdt in dat ik enthousiast werk met PHP en Javascript om robuuste webapplicaties te creëren. We gebruiken het krachtige Bootstrap-framework voor aantrekkelijke en responsieve gebruikersinterfaces. Mijn dagelijkse taken omvatten ook het beheren van gegevens met MySQL als database.'
    , img: '/Inspira-58.jpg' },
    { title: 'Wat zal ik doen?'
    , desc: 'Ik zal betrokken zijn bij verschillende full-stack projecten, waarbij ik verantwoordelijk zal zijn voor taken die zowel front-end als back-end ontwikkeling omvatten. Dit kan samenwerkingsinspanningen binnen een team inhouden of individuele initiatieven aanpakken.'
    , img: '/Inspira-60.jpg' },
  ];

  const [openItems, setOpenItems] = useState([true, ...Array(accordionData.length - 1).fill(false)]);

  const toggle = (index: any) => {
    const newOpenItems = Array(accordionData.length).fill(false);
    newOpenItems[index] = !openItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <>
      <section className='container mx-auto px-6 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
          <div className='col-span-12 lg:col-span-7 place-self-center'>
            <h1 className='text-black mb-4 text-4xl lg:text-6xl font-extrabold'>
              <span>Hey, Ik ben  {""}</span>
              <TypeAnimation
                sequence={[
                  'Rachad Bouhjar',
                  2000,
                  'een Junior Web Developer',
                  2000,
                ]}
                wrapper="span"
                speed={13}
                style={{ color: "#3a7763" }}
                repeat={Infinity}
              />
            </h1>
            <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
            Welkom in mijn bescheiden portfolio! Als junior webontwikkelaar ben ik enthousiast om mijn eerste stappen te delen in de wereld van creatieve digitale oplossingen. Neem gerust een kijkje en ontdek mijn groeiende verzameling ontwerpen. Geniet van de reis en voel je vrij om te browsen! 🚀
            </p>
            <div className='flex'>
              <a href=""><FaFacebook /></a>
              <a href=""><FaLinkedin /></a>
            </div>
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


      <section className="container text-lg lg:text-xl">
        <h2 className="h1 text-center mt-5">Projecten</h2>
        {/* Stats */}
        <section className="container pb-sm-3 pb-md-4 pb-lg-5 mb-xl-3 mb-xxl-5">
          <div className="bg-light rounded-5 py-4 py-md-5 px-lg-5 mb-5 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-r h-3/5"></div>
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">1</div>
                  <span>Front-end</span>
                </div>
              </div>
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-r h-3/5"></div>
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">2</div>
                  <span>Back-end</span>
                </div>
              </div>
              <div className="col relative flex justify-center items-center text-center md:text-start">
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-r h-3/5"></div>
                <div className="p-3 px-sm-0 py-sm-4">
                  <div className="h2 text-primary text-5xl mb-0">2</div>
                  <span>Full-stack</span>
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
      <section className="container  mb-lg-3 mb-xl-4 mb-xxl-5 flex flex-wrap">
        {/* Item 1 */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
          <Link href="https://bouhjar-rachad-website.netlify.app/" target='_blank'>
            <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
              <div className="card-body flex-grow"> {/* Set a specific height, adjust as needed */}
                <h3 className="h4 card-title mt-0">School project: The Rock showroom</h3>
                <p className="card-text">
                  Ik heb een interactieve website gebouwd met behulp van Gatsby, waarin ik een showroom heb gemaakt voor de beste films van de acteur The Rock. Ik heb functies geïmplementeerd zoals filmrecensies om bezoekers een overzicht te geven van zijn indrukwekkende filmcarrière. Dit is mijn eerste websiteproject.</p>
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
          <Link href="https://project-madrid-4jc13ow2g-rachadbouhjar-hotmailcom.vercel.app/" target='_blank'>
            <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
              <div className="card-body flex-grow"> {/* Set a specific height, adjust as needed */}
                <h3 className="h4 card-title mt-0">School project: Clubs</h3>
                <p className="card-text">Ik heb deze webpagina ontwikkeld met behulp van Next.js, React, Strapi, gehost op Vercel, en geschreven in TypeScript. Op deze website krijgen gebruikers een overzicht van verschillende voetbalclubs, met de nadruk op informatieve blogberichten, clubinformatie en individuele spelers.</p>
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
      <h2 className="h1 text-center">Resume</h2>


      <section className="container pb-1  mb-xl-4 mb-xxl-5 mt-5 flex flex-wrap">
        {/* Left Section - Personalia */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
          <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
            <div className="card-body pb-5 flex-grow w-100">
              <h3 className="card-title mt-0">Curriculum Vitae </h3>
              <ul>
                <li>Naam: Rachad Bouhjar</li>
                <li>Adres: Antwerp</li>
                <li>Geboortedatum: April 5, 1998</li>
                <li>Nationaliteit: Belgisch</li>
                <li>Burgerlijke staat: Ongehuwd</li>
                <li>Rijbewijs: B</li>
              </ul>


              <h3 className="h4 card-title mt-4">Opleiding</h3>
              <ul>
                <li>2021-2024: Graduaat in Programmeren op AP Hogeschool Antwerpen</li>
                <li>2012-2016: Elektriciteit/Elektronica, Stedelijk Lyceum Meir, Antwerp</li>
                <li>2011-2012: Handel, Sint Lievens College, Antwerp</li>
                <li>2010-2011: Moderne Wetenschappen, Sint Lievens College, Antwerp</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Opleiding and Certificaten */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 flex">
          <div className="card card-hover-primary border-0 h-100 text-decoration-none flex flex-col">
            <div className="card-body pb-5 flex-grow w-100">

              <h3 className="h4 card-title mt-0">Diploma's</h3>
              <ul>
                <li>Rolbrug</li>
                <li>Theorie heftruck + ervaring</li>
                <li>2015-2016: A2 diploma in TSO Elektriciteit/Elektronica, Stedelijk Lyceum Meir, Antwerp</li>
                <li>2020-2030: VCA diploma</li>
              </ul>


              <h3 className="h4 card-title mt-4">Werkervaring</h3>
              <ul>
                <li>Cofely-axima Montage/Elektricien 06/2017-09/2017</li>
                <li>Aleris: Process Operator 06/2018-12/2018</li>
                <li>Campine: Process Operator 01/2019-04/2019</li>
                <li>Audi: Technish Operator 09/2019-11/2019</li>
                <li>Still (tijdelijk): Magazijnier 09/2020-12/2020</li>
                <li>Henco: Operator 02/2021-06/2021</li>
                <li>Camin Cargo Warehouse/Samples/SABA 01/2023-03/2023</li>
                <li>icapps Stagiair Communicatiemodel IT-projectstagiair 09/2023-01/2024</li>
                <li>Inspira full stack Webapplicaties 02/2024-05/2024</li>
              </ul>

              <h3 className="h4 card-title mt-4">Taalvaardigheden</h3>
              <ul>
                <li>Nederlands: moedertaal</li>
                <li>Frans: basic kennis</li>
                <li>Engels: zeer goed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/*--------------------------------------------------------------------------------------- */}


      <div className=' bg-gradient-to-b from-transparent to-bg-start flex flex-col items-center justify-center py-5'>
        <div className='flex flex-col max-w-[80%] text-center items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='font-semibold text-primary text-5xl mb-5'>
              Vaardigheden{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'>
                {' '}
                &{' '}
              </span>
              Technologieën
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
        <div>
          <h2 className='h1 text-center lg:ml-4 xl:ml-8 py-5 mt-5'>Web Ontwikkelingsstage bij Inspira</h2>
          {accordionData.map((data, index) => (
            <Accordion
              key={data.title}
              open={openItems[index]}
              title={data.title}
              imgSrc={data.img}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>

    </>
  );
}
