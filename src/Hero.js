import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col lg:flex-row items-center bg-[#016162]">
      {/* Left Column - Background Video */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/tech-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* Right Column - Content */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-start px-8 lg:px-16 py-6 relative">
        {/* Dark Filter for Text Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <img
            src="/nugo-hero.png"
            alt="Nugo Logo"
            className="w-36 lg:w-48 h-auto mb-4"
          />

          {/* Headline */}
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Empowering Your Business with Cutting-Edge Cloud Solutions
          </h1>

          {/* Subtext */}
          <p className="text-sm lg:text-lg text-gray-300 mb-4 lg:mb-6 max-w-lg text-justify">
            Welcome to <span className="font-bold text-white">Nugo Tech</span>,
            your trusted partner for cloud application development, captivating
            homepage designs, and reliable web hosting services. We specialize
            in helping small and medium-sized businesses grow and thrive in the
            digital age.
            <br />
            <br />
            With our tailored solutions, you can streamline operations, enhance
            customer engagement, and scale your business effortlessly. Let us
            take care of your IT needs so you can focus on what matters most—
            running your business.
            <br />
            <br />
            <b>Your Growth Starts Here.</b> Ready to transform your business?
            Schedule your free consultation today and discover how Nugo Tech
            can take your IT to the next level.
          </p>

          {/* Call-to-Action Button */}
          <div className="text-center lg:text-left">
            <a
              href="#contact"
              className="bg-[#CC3333] text-white py-2 px-4 lg:px-6 rounded-lg hover:bg-red-700 transition-all"
              aria-label="Get Started Now"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Hero;
