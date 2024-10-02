import React from "react";
import img1 from "./about-us-desires.png";
import img2 from "./about-us-work-step-1.png";
import img3 from "./about-us-work-step-2.png";
import img4 from "./about-us-work-step-3.png";
import img5 from "./about-us-work-step-4.png";

const AboutScreen = () => {
  return (
    <div className=" text-white">
      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">About us</h1>
          <h2 className="text-2xl font-semibold mt-4">
            SynthoNext — It is a new level trading platform.
          </h2>
          <p className="mt-6 text-lg">
            Our team launched the project in 2019 but has already managed to
            declare itself. Each of our developers is a specialist of the
            highest level with many years of experience. Some of them gave more
            than 10 years of their life to upgrade their development skills, and
            the team's total experience is 200 years. This experience helped us
            to find the best mechanisms to create a modern platform.
          </p>
        </div>
      </section>

      <hr className="border-1 border-gray-400" />
      {/* Innovation Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Placeholder for Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img src={img1} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold">
                We want everyone to be able to fulfill their desires and
                opportunities.
              </h2>
              <p className="mt-4 text-lg">
                Our team has created not just another project for traders. First
                of all, we developed a platform for the widest possible
                audience. For people who want to learn how to use advanced
                financial instruments and develop their financial skills.
              </p>
              <p className="mt-4 text-lg">
                Speaking of tools, SynthoNext provides over 400 free tools to each
                client so that you can trade and earn money the way you like.
                Choose any assets: currency quotes, stocks, majors, metals, oil
                or gas, as well as the main trend of recent years -
                cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-1 border-gray-400" />
      {/* Modern Platform Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            A modern platform for modern people
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Platform Benefits */}
            {[
              "Premium quality",
              "Manual control",
              "Custom environment",
              "24/7 support",
            ].map((benefit, index) => (
              <div key={index} className="bg-primaryblue-900 p-6 rounded-lg">
                <p className="text-lg font-semibold mb-4">{benefit}</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  est tam dissimile homini.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the platform works */}
      <section className="py-20  ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How does the platform work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "We choose", image: img2 },
              { title: "Install", image: img3 },
              { title: "We do", image:img4},
              { title: "We get", image: img5 },
            ].map((step, index) => (
              <div
                key={index}
                className=" rounded-lg text-center"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="mb-4 mx-auto w-400"
                />
                <h3 className="text-xl font-semibold ">{step.title}</h3>
                {/* <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  est tam dissimile homini.
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Account Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Any doubts? Practice without risk with a demo account.
          </h2>
          <p className="mb-6 text-lg">
            We are open to our visitors. Therefore, if you have distrust and
            hundreds of projects related to trading do not inspire confidence,
            we invite you to evaluate us.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg">
            Login
          </button>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default AboutScreen;
