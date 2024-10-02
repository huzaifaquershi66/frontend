"use client"

import React, { useState } from 'react'
import { FaHeadset, FaEnvelope, FaPhone, FaWhatsapp, FaQuestionCircle } from 'react-icons/fa'
import { MdLiveHelp } from 'react-icons/md'
import { motion } from 'framer-motion'

const ChatBox = () => {
  const [chatStarted, setChatStarted] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState(null)

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
  }

  const handleQuestionClick = (question) => {
    setSelectedQuestion(questions[question])
  }

  const startNewChat = () => {
    setChatStarted(true)
    setSelectedQuestion(null)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Live Chat Support</h2>
      <div className="h-96 overflow-y-auto border border-gray-200 rounded-lg p-4">
        {!chatStarted ? (
          <button
            onClick={startNewChat}
            type="button"
            className="bg-primary text-primary-foreground text-center py-4 px-6 rounded-lg w-full"
          >
            Start a new chat
          </button>
        ) : selectedQuestion ? (
          <>
            <div className="mb-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-lg">
                {selectedQuestion.answer}
              </div>
              <div className="mt-4">
                <a href={selectedQuestion.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  Chat with our representative on WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-4">
              <strong>Related Questions:</strong>
              <ul className="list-disc list-inside mt-2">
                {selectedQuestion.moreQuestions.map((q, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-blue-500 mt-2 hover:underline"
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
                className="cursor-pointer mb-2 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => handleQuestionClick(q)}
              >
                {q}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">Customer Support</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SupportCard
              icon={<FaHeadset className="text-4xl text-primary" />}
              title="24/7 Support"
              description="Our dedicated team is available round the clock to assist you with any queries or issues."
            />
            <SupportCard
              icon={<FaEnvelope className="text-4xl text-primary" />}
              title="Email Support"
            link="mailto:support@example.com"
            
              description="Reach out to us via email for detailed inquiries and we'll respond promptly."
            />
            <SupportCard
              icon={<FaPhone className="text-4xl text-primary" />}
              title="Phone Support"
                link="tel:+923198396277"
              description="For immediate assistance, call our support hotline and speak directly with an expert."
            />
            <SupportCard
              icon={<FaWhatsapp className="text-4xl text-primary" />}
              title="WhatsApp Support"
                link="https://wa.me/+923198396277"
              description="Connect with us on WhatsApp for quick and convenient support on the go."
            />
            <SupportCard
              icon={<FaQuestionCircle className="text-4xl text-primary" />}
              title="FAQ"
              description="Browse our comprehensive FAQ section for answers to common questions."
            />
            <SupportCard
              icon={<MdLiveHelp className="text-4xl text-primary" />}
              title="Live Chat"
              description="Get real-time support through our live chat feature available on our website."
            />
          </div>
        </div>
        <div className="lg:col-span-1">
          <ChatBox />
        </div>
      </div>
    </div>
  )
}

const SupportCard = ({ icon, title, description, link }) => (
  <motion.a
    href={link || '#'}
    target={link && link.startsWith('http') ? '_blank' : '_self'} // Null check added for link
    rel="noopener noreferrer"
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-4">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.a>
)
