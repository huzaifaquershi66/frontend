import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-primaryblue-100 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primaryblue-900 leading-tight mb-4">
            About Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-primaryblue-700 mb-12">
              We are a forward-thinking trading platform dedicated to empowering
              our users with the tools they need to succeed in today's dynamic
              financial markets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-primaryblue-50 shadow-lg rounded-lg p-8">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-primaryblue-800">
                Our Mission
              </h3>
            </div>
            <p className="text-primaryblue-600">
              To provide a seamless and intuitive trading experience that allows
              users to maximize their potential in the financial markets.
            </p>
          </div>

          <div className="bg-primaryblue-50 shadow-lg rounded-lg p-8">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-primaryblue-800">
                Our Vision
              </h3>
            </div>
            <p className="text-primaryblue-600">
              To become the leading platform for trading synthetic indices,
              offering innovative tools and insights to our global user base.
            </p>
          </div>

          <div className="bg-primaryblue-50 shadow-lg rounded-lg p-8">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-primaryblue-800">
                Our Values
              </h3>
            </div>
            <p className="text-primaryblue-600">
              Transparency, innovation, and customer satisfaction are at the
              core of everything we do. We strive to build lasting relationships
              with our users based on trust and reliability.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-primaryblue-700">
            Join us on our journey as we continue to innovate and push the
            boundaries of what's possible in trading.
          </p>
          <button className="mt-6 px-8 py-3 bg-primary text-white rounded-full shadow-lg transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
