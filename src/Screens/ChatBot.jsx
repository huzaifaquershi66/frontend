import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BASE_URL } from "../api/axios";
const ChatBot = () => {
  const [err, setErr] = useState("");
  const [value, setValue] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setErr("");
    setValue("");
    setChatHistory([]);
  };

  const getResponse = async () => {
    if (!value) {
      setErr("Please enter a question");
      return;
    }
    try {
      setLoading(true);
      const data = {
        message: value,
        chatHistory,
      };
      const response = await fetch(`${BASE_URL}/gemini`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
      // Update chat history with user and model responses
      setChatHistory((prev) => [
        ...prev,
        { role: "user", parts: value },
        { role: "model", parts: result.message }, // Assuming result.message contains the response text
      ]);
      setValue(""); // Clear the input after sending
    } catch (error) {
      console.error(error);
      setErr("Error fetching response");
    } finally {
      setLoading(false);
    }
  };

  const surpriseOptions = [
    "Surprise me with the latest on Derivatives Trading!",
    "Interested in learning how to trade Synthetic Indices? Let’s explore the options!",
    "Would you like a quick guide on Forex Trading strategies?",
    "Surprise me with some effective risk management strategies for trading!",
    "How about tips on the best times to trade synthetic indices?",
  ];

  const surprise = () => {
    const randomIndex = Math.floor(Math.random() * surpriseOptions.length);
    setValue(surpriseOptions[randomIndex]);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl overflow-hidden ">
      <section className="p-6">
        <h2 className="text-xl font-semibold text-primary mb-4">
          What do you want to know?
          <button
            onClick={surprise}
            className="ml-2 bg-accent text-white py-1 px-3 rounded-full text-sm hover:bg-opacity-80"
          >
            Surprise me
          </button>
        </h2>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask your questions..."
            className="w-[900px] p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-accent"
          />
          {!err ? (
            <button
              onClick={getResponse}
              className="ml-3 bg-primary text-white py-3 px-5 rounded-md transition duration-200 hover:bg-opacity-80"
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                "Send"
              )}
            </button>
          ) : (
            <button
              onClick={handleClear}
              className="ml-3 bg-secondary text-white py-2 px-4 rounded-md transition duration-200 hover:bg-opacity-80"
            >
              Clear
            </button>
          )}
        </div>
        {err && <p className="text-red-500 mt-2">{err}</p>}
        <div className="mt-4">
          {chatHistory.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-md max-h-96 overflow-y-auto">
              {chatHistory.map((chat, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    chat.role === "user" ? "text-primary" : "text-gray-700"
                  }`}
                >
                  <strong>
                    {chat.role.charAt(0).toUpperCase() + chat.role.slice(1)}:
                  </strong>{" "}
                  <ReactMarkdown>{chat.parts}</ReactMarkdown>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ChatBot;
