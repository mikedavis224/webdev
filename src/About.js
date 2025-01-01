import React from "react";

const About = () => {
  return (
    <div className="bg-[#016162] py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          About Nugo Tech
        </h1>
        <img src="/nugo-hero.png" className="bg-white opacity-95"></img><br /><br />

        {/* Three-Column Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Who We Are */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Who We Are
            </h2>
            <p className="text-black text-justify flex-grow">
              Nugo Tech was founded with one goal in mind: to empower businesses
              in the DMV area with modern, scalable IT solutions. From custom
              cloud applications to engaging homepage designs, we provide the
              tools you need to thrive in a fast-paced digital world.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-black text-justify flex-grow">
              To help businesses unlock their full potential through innovative
              technology, exceptional service, and a commitment to excellence.
            </p>
          </div>

          {/* What We Value */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              What We Value
            </h2>
            <ul className="text-black list-disc pl-5 space-y-2 text-justify flex-grow">
              <li>
                <span className="font-bold">Partnership:</span> Your success is
                our success.
              </li>
              <li>
                <span className="font-bold">Innovation:</span> We stay ahead of
                the curve to bring you the latest in tech.
              </li>
              <li>
                <span className="font-bold">Reliability:</span> Your systems are
                our priority.
              </li>
            </ul>
          </div>
        </div>

        {/* Why We're Different */}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
            Why We're Different
          </h2>
          <p className="text-black text-justify">
            Unlike big-name providers, we’re local, approachable, and focused
            on your unique needs. With a unified approach to development,
            design, and hosting, Nugo Tech offers everything you need under one
            roof.
          </p>
          <div className="text-center mt-6">
            <a
              href="/team"
              className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
