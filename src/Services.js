import React from "react";

const Services = () => {
  return (
    <div className="bg-[#016162] py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Cloud App Dev Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-justify flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Cloud App Development
            </h3>
            <p className="text-black font-bold mb-4">
              Unlock your business's potential with custom cloud applications designed to meet your unique needs.
            </p>
            <div className="font-regular text-black">
              At <span className="text-[#CC3333] font-bold">Nugo Tech</span>, we develop scalable, secure, and efficient solutions powered by industry-leading platforms like AWS and Azure. <br /><br />
            </div>
            <p className="text-black mb-4 text-center">
              <b>Our Services Include:</b>
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>Custom applications tailored to your workflows.</li>
              <li>Seamless integration with CRMs, ERPs, and other systems.</li>
              <li>Regular updates and maintenance for long-term reliability.</li>
            </ul>
            <br />
            {/* Call to Action */}
            <div className="text-center mt-auto">
              <a
                href="/Services"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
                aria-label="Learn More"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Homepage Design Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-justify flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Homepage Design
            </h3>
            <p className="text-black font-bold mb-4">
              First impressions matter. Our responsive, user-friendly homepage designs captivate visitors and turn them into customers.
            </p>
            <div className="text-black font-regular">
              Whether you're building your brand or launching an eCommerce site, <span className="text-[#CC3333] font-bold">Nugo Tech</span> creates designs that resonate.<br /><br />
            </div>
            <p className="text-black mb-4 text-center">
              <b>What We Offer:</b>
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>SEO-optimized designs to enhance visibility.</li>
              <li>Seamless eCommerce integration for online stores.</li>
              <li>Focused on branding and user engagement.</li>
            </ul>
            <br />
            {/* Call to Action */}
            <div className="text-center mt-auto">
            <a
                href="/Services"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
                aria-label="Learn More"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Web Hosting Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-justify flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Web Hosting
            </h3>
            <p className="text-black font-bold mb-4">
              Your website deserves a secure, fast, and reliable home.
            </p>
            <div className="text-black font-regular">
              With <span className="text-[#CC3333] font-bold">Nugo Tech's</span> hosting packages, you get 24/7 support, domain management, and SSL certification to keep your site safe and running smoothly.<br /><br />
            </div>
            <p className="text-black mb-4 text-center">
              <b>Hosting Highlights:</b>
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>Scalable plans to grow with your business.</li>
              <li>Performance monitoring for optimal uptime.</li>
              <li>End-to-end domain and SSL management.</li>
            </ul>
            <br />
            {/* Call to Action */}
            <div className="text-center mt-auto">
            <a
                href="/Services"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
                aria-label="Learn More"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
