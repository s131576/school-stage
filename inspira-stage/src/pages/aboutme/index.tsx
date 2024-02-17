import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className='bg-gradient-to-b from-transparent to-bg-start via-bg-end min-h-screen p-8'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mt-4 text-white'>Rachad Bouhjar</h1>
          <p className='text-lg mt-2 text-gray-300'>Passionate Programmer</p>
        </div>

        <div className='mt-8 text-white'>
          <h2 className='text-2xl font-bold mb-2'>Education:</h2>
          <p>A2 diploma TSO Elektriciteit/Elektronica (2015-2016)</p>
          <p>VCA diploma (2020-2030)</p>

          <h2 className='text-2xl font-bold mt-4 mb-2'>Work Experience:</h2>
          {/* ... Add the rest of your work experiences */}

          <h2 className='text-2xl font-bold mt-4 mb-2'>Language Skills:</h2>
          <p>Nederlands: Moedertaal</p>
          <p>Frans: Basis kennis</p>
          <p>Engels: Zeer goed</p>

          <h2 className='text-2xl font-bold mt-4 mb-2'>Computer Programs:</h2>
          {/* ... Add the rest of your computer programs and skills */}

          <h2 className='text-2xl font-bold mt-4 mb-2'>Skills:</h2>
          <p>Basis PHP: Developing web applications with PHP.</p>
          {/* ... Add the rest of your skills */}

          <h2 className='text-2xl font-bold mt-4 mb-2'>Projects:</h2>
          {/* ... Add the rest of your projects */}
        </div>
      </div>
    </div>
  );
}
