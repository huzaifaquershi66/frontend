import React, { useState } from "react";

const ChatBox = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = {
    "What's new in derivatives trading?": {
      answer: "Options trading is on the rise! 'Iron Condor' strategies are gaining popularity, especially with AI-powered predictions. Curious to dive deeper?",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What are the top derivatives to trade?",
        "How do I choose a derivatives trading strategy?"
      ]
    },
    "What are the top derivatives to trade?": {
      answer: "The most traded derivatives include futures and options on indices, commodities, and forex. The choice depends on your market knowledge and risk tolerance.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What's new in derivatives trading?",
        "How do I choose a derivatives trading strategy?"
      ]
    },
    "How do I choose a derivatives trading strategy?": {
      answer: "Choosing a strategy involves understanding market trends and volatility. Popular strategies include 'Straddles' for volatile markets and 'Iron Condor' for range-bound markets.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What's new in derivatives trading?",
        "What are the top derivatives to trade?"
      ]
    },
    "How do I start trading synthetic indices?": {
      answer: "Synthetic indices offer 24/7 trading, mirroring real markets. Begin with price action strategies and tools like RSI. Timing your trades is crucial! Want to explore further? 📊",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What are synthetic indices?",
        "Can I use leverage with synthetic indices?"
      ]
    },
    "What are synthetic indices?": {
      answer: "Synthetic indices are financial instruments that mimic the behavior of real-world indices but are not affected by real-world events like economic news.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "How do I start trading synthetic indices?",
        "Can I use leverage with synthetic indices?"
      ]
    },
    "Can I use leverage with synthetic indices?": {
      answer: "Yes, leverage can be used when trading synthetic indices. However, it's important to understand the risks involved, as leverage can amplify both gains and losses.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "How do I start trading synthetic indices?",
        "What are synthetic indices?"
      ]
    },
    "Can I get a quick overview of Forex trading strategies?": {
      answer: "Absolutely! Consider strategies like 'Trend Following' or 'Carry Trade.' Also, keep an eye on economic events—they can create big moves! Interested in more insights? 🌐",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What is the best time frame for Forex trading?",
        "How do I manage risk in Forex trading?"
      ]
    },
    "What is the best time frame for Forex trading?": {
      answer: "The best time frame depends on your trading style. Scalpers prefer 1-15 minute charts, while swing traders use 1-hour to daily charts for broader trends.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "Can I get a quick overview of Forex trading strategies?",
        "How do I manage risk in Forex trading?"
      ]
    },
    "How do I manage risk in Forex trading?": {
      answer: "Risk management in Forex trading involves using stop-loss orders, proper position sizing, and avoiding over-leveraging. Stick to the '1% Rule' to protect your capital.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "Can I get a quick overview of Forex trading strategies?",
        "What is the best time frame for Forex trading?"
      ]
    },
    "What are some effective risk management tips?": {
      answer: "Stick to the '1% Rule' and use stop-loss orders. Diversifying your portfolio is also essential. Consistent risk management is the cornerstone of successful trading! Need additional advice? 🛡️",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What is the 1% rule in trading?",
        "How do I set up stop-loss orders?"
      ]
    },
    "What is the 1% rule in trading?": {
      answer: "The '1% Rule' means risking no more than 1% of your capital on a single trade. This strategy helps minimize losses and protect your account from significant drawdowns.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What are some effective risk management tips?",
        "How do I set up stop-loss orders?"
      ]
    },
    "How do I set up stop-loss orders?": {
      answer: "Stop-loss orders can be set at a specific price point, percentage loss, or support/resistance level. This automates selling when the market moves against your position.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "What are some effective risk management tips?",
        "What is the 1% rule in trading?"
      ]
    },
    "When is the best time to trade synthetic indices?": {
      answer: "Peak trading happens during global market overlaps. Early and late session hours also offer good opportunities. Want more timing tips? ⏰",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "How do market overlaps affect trading?",
        "What are the best hours for synthetic indices?"
      ]
    },
    "How do market overlaps affect trading?": {
      answer: "Market overlaps occur when major trading sessions are open simultaneously, increasing volatility and liquidity, offering more trading opportunities.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "When is the best time to trade synthetic indices?",
        "What are the best hours for synthetic indices?"
      ]
    },
    "What are the best hours for synthetic indices?": {
      answer: "The best hours depend on your strategy, but early morning and late evening (in your local time) often present good opportunities due to market activity.",
      link: "https://wa.me/1234567890",
      moreQuestions: [
        "When is the best time to trade synthetic indices?",
        "How do market overlaps affect trading?"
      ]
    },
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(questions[question]);
  };

  const startNewChat = () => {
    setChatStarted(true);
    setSelectedQuestion(null);
  };

  return (
    <div className="fixed right-8 bottom-20 w-64 rounded-lg shadow-lg mt-2 bg-primaryblue-50">
      <div className="h-full flex flex-col">
        <div className="bg-primary text-white text-center py-2 rounded-t-lg">
          Chat with us
        </div>
        <div className="flex-1 overflow-y-auto p-2 max-h-72 min-h-72">
          {!chatStarted ? (
            <button
              onClick={startNewChat}
              type="button"
              className="bg-primary text-white text-center py-4 px-6 rounded-b-lg"
            >
              Start a new chat
            </button>
          ) : selectedQuestion ? (
            <>
              <div className="mb-2">
                <div className="bg-primary text-white p-2 rounded-lg">
                  {selectedQuestion.answer}
                </div>
                <div className="mt-2">
                  <a href={selectedQuestion.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Chat with our representative on WhatsApp
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <strong>Related Questions:</strong>
                <ul className="list-disc list-inside">
                  {selectedQuestion.moreQuestions.map((q, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-blue-500 mt-1 hover:underline"
                      onClick={() => handleQuestionClick(q)}
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div>
              {Object.keys(questions).map((q, index) => (
                <div
                  key={index}
                  className="cursor-pointer mb-2 p-2 bg-gray-100 rounded-lg"
                  onClick={() => handleQuestionClick(q)}
                >
                  {q}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
