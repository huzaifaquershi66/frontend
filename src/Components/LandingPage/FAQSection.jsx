import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is synthetic indices trading?",
      answer: "Synthetic indices are simulated markets that mimic real-world market conditions. They are not affected by real-world events and are available for trading 24/7.",
    },
    {
      question: "How do I start trading?",
      answer: "To start trading, you need to create an account, deposit funds, and select a market to trade in. You can choose between real and demo trading modes.",
    },
    {
      question: "What is the minimum stake amount?",
      answer: "The minimum stake amount varies depending on the market and trade type. Please check the trading platform for specific details.",
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer: "Yes, you can withdraw your funds at any time. Please ensure your account is verified before initiating a withdrawal.",
    },
  ];

  return (
    <section className="mt-4 py-10 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-primaryblue-800"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-primaryblue-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
