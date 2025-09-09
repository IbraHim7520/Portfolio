import Image from 'next/image';
import React from 'react';

const SkillPage = () => {
    return (
        <div className='p-5 min-h-screen space-y-6 text-white flex flex-col lg:justify-center'>
<div className='w-full flex flex-col items-center p-6'>

  {/* Heading */}
  <h1 className='text-4xl w-full mt-12 lg:text-5xl font-bold text-accent-col border-l-4 border-primary pl-4 mb-12'>
    SKILLS & TOOLS
  </h1>

  {/* ========== Languages ========== */}
  <div className="w-full mb-12" data-aos="fade-up">
    <h2 className="text-2xl font-semibold text-accent mb-6">Languages</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8'>

      {/* Item Card */}
      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
        <Image src="/html.png" width={80} height={80} alt="HTML" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">HTML</p>
      </div>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="50">
        <Image src="/css.png" width={80} height={80} alt="CSS" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">CSS</p>
      </div>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
        <Image src="/s.png" width={80} height={80} alt="JavaScript" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">JavaScript</p>
      </div>

            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
        <Image src="/python.png" width={80} height={80} alt="JavaScript" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">Python</p>
      </div>
      
    </div>
  </div>

  {/* ========== Libraries / Frameworks ========== */}
  <div className="w-full mb-12" data-aos="fade-up">
    <h2 className="text-2xl font-semibold text-accent mb-6">Libraries & Frameworks</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8'>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
        <Image src="/react.png" width={80} height={80} alt="React" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">React.js</p>
      </div>
      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
        <Image src="/nextjs.png" width={80} height={80} alt="React" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">Next.js</p>
      </div>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
        <Image src="/tailwind.png" width={80} height={80} alt="React" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">Tailwind Css</p>
      </div>

            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
        <Image src="/react-qry.png" width={80} height={80} alt="React" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">React Query</p>
      </div>

         <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="50">
        <Image src="/jwt.png" width={80} height={80} alt="JWT" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">JWT</p>
      </div>


      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="100">
        <Image src="/nodejs.png" width={80} height={80} alt="Node.js" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">Node.js</p>
      </div>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="150">
        <Image src="/express.png" width={80} height={80} alt="Express.js" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">Express.js</p>
      </div>
    </div>
  </div>



    <div className="w-full mb-12" data-aos="fade-up">
    <h2 className="text-2xl font-semibold text-accent mb-6">Database</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8'>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
        <Image src="/mongodb.png" width={80} height={80} alt="MongoDB" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">MongoDB</p>
      </div>

    </div>
  </div>

  {/* ========== Tools ========== */}
  <div className="w-full" data-aos="fade-up">
    <h2 className="text-2xl font-semibold text-accent mb-6">Tools & Others</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8'>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in">
        <Image src="/irebase.png" width={80} height={80} alt="Firebase" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">Firebase</p>
      </div>

      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="50">
        <Image src="/jwt.png" width={80} height={80} alt="JWT" className="object-contain mb-3" />
        <p className="text-sm md:text-base font-medium text-center">JWT</p>
      </div>



      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay="200">
        <Image src="/github.png" width={80} height={80} alt="GitHub" className="object-contain text-white mb-3" />
        <p className="text-sm md:text-base font-medium text-center">GitHub</p>
      </div>
    </div>
  </div>
</div>


</div>

    );
};

export default SkillPage;
