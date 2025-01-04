import React from "react";

const Services = () => {
  return (
    <div className="bg-[#016162] py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Cloud App Development Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Cloud App Development
            </h3>
            <p className="text-black mb-4 text-justify">
              Unlock your business's potential with custom cloud applications
              designed to meet your unique needs.
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>Custom applications tailored to your workflows.</li>
              <li>Seamless integration with CRMs, ERPs, and other systems.</li>
              <li>Regular updates and maintenance for long-term reliability.</li>
            </ul>
            <div className="text-center mt-6">
              <a
                href="#contact"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Additional Sections */}
          {/* Add other service sections here (e.g., Web Hosting, IT Service Desk) */}
        </div>
      </div>
    </div>
  );
};

export default Services;
