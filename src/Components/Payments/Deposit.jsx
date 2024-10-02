import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Modal from "../Modal";

const Deposit = ({ onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { auth, setAuth } = useAuth();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("stripe"); // New state for payment method
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleDeposit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (paymentMethod === "stripe") {
      if (!stripe || !elements) {
        return;
      }

      const cardElement = elements.getElement(CardElement);
      const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (paymentError) {
        setError(paymentError.message);
        return;
      }

      try {
        const response = await axios.post("/payment/deposit", {
          email: auth.user.email,
          amount: parseFloat(amount),
          paymentMethodId: paymentMethod.id,
        });

        setAuth((prev) => ({
          ...prev,
          wallet: {
            ...response.data,
          },
        }));

        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...auth,
            wallet: {
              ...response.data,
            },
          })
        );

        setMessage(response.data.message);
        setAmount("");
      } catch (error) {
        console.error("Error during deposit:", error.response || error);
        setError("Failed to process deposit");
      }
    } else if (paymentMethod === "easypaisa") {
      // Handle Easypaisa payment logic here
      try {
        const response = await axios.post("/payment/deposit", {
          email: auth.user.email,
          amount: parseFloat(amount),
        });

        setAuth((prev) => ({
          ...prev,
          wallet: {
            ...response.data,
          },
        }));

        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...auth,
            wallet: {
              ...response.data,
            },
          })
        );

        setMessage(response.data.message);
        setAmount("");
      } catch (error) {
        console.error("Error during Easypaisa deposit:", error.response || error);
        setError("Failed to process Easypaisa deposit");
      }
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="max-w-xs mx-auto">
        <h3 className="font-bold text-3xl py-1">Deposit Funds</h3>
        <form onSubmit={handleDeposit}>
          <div className="mt-4">
            <label htmlFor="amount" className="font-semibold text-base">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-bgOne"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Payment method selection */}
          <div className="mt-4">
            <label className="font-semibold text-base">Select Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-bgOne"
            >
              <option value="stripe">Stripe</option>
              <option value="easypaisa">Easypaisa</option>
            </select>
          </div>

          {/* Conditional rendering for payment forms */}
          {paymentMethod === "stripe" && (
            <div className="mt-4">
              <label htmlFor="card" className="font-semibold text-base">
                Card Information
              </label>
              <CardElement className="w-full mt-1 p-2 rounded bg-bgOne" />
            </div>
          )}

          {/* Easypaisa doesn't require CardElement */}
          {paymentMethod === "easypaisa" && (
            <div className="mt-4">
                  <input type="text" placeholder="Transaction Id" className="w-full mt-1 p-2 rounded bg-bgOne" />
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              className="w-full p-2 rounded bg-primary text-white font-semibold text-xl"
              disabled={!stripe && paymentMethod === "stripe"}
            >
              Deposit
            </button>
          </div>

          {error && <div className="text-red-500 mt-2">{error}</div>}
          {message && <div className="text-green-500 mt-2">{message}</div>}
        </form>
      </div>
    </Modal>
  );
};

export default Deposit;
