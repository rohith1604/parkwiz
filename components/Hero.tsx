import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="z-20 space-y-6 font-sans max-w-4xl px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          <span className="inline-block transform hover:scale-105 transition-transform duration-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              DESIGN
            </span>
          </span>{' '}
          <span className="inline-block text-4xl align-middle mx-2 animate-pulse">*</span>{' '}
          <span className="inline-block transform hover:scale-105 transition-transform duration-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              INSTALL
            </span>
          </span>{' '}
          <span className="inline-block text-4xl align-middle mx-2 animate-pulse">*</span>{' '}
          <span className="inline-block transform hover:scale-105 transition-transform duration-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              OPERATE
            </span>
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold font-mono max-w-3xl mx-auto">
          ONE-STOP SOLUTION FOR AUTOMATED PARKING MANAGEMENT
        </h2>
        <p className="text-lg sm:text-xl font-bold font-mono">
          WE ARE ONE OF THE WORLD&apos;S TOP INNOVATIVE PARKING AGENCIES
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern parking garage"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
    </div>
  )
}

export default Hero

