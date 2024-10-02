import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Buttons = () => {
  const [instruction, setInstruction] = useState("");
 

  const handleButtonClick = (type) => {
    if (type === "how-to-withdraw") {
      setInstruction(`
        How to Withdraw:
        1. Log in to Your SyntoNext Account:
           - Open the SyntoNext platform.
           - Use your username and password to log in to your account.
        2. Navigate to the Withdrawal Section:
           - On your dashboard, locate the "Withdraw" or "Funds" section.
           - Select the Withdrawal option to proceed.
        3. Select Your Withdrawal Method:
           - Choose from the following supported gateways:
             - Stripe: For international withdrawals using debit/credit cards.
             - Easypaisa: For local payments (Pakistan).
        4. Enter Your Card Number:
           - SyntoNext only requires your card number for Stripe-based withdrawals.
           - Ensure that your card is authorized for online transactions and supports withdrawals.
           - Important: Double-check your card number for accuracy.
        5. Authentication and Authorization:
           - SyntoNext will automatically authenticate and authorize your card details.
           - The system will verify whether your card is valid for withdrawal.
           - If necessary, the platform might prompt for additional authentication (OTP or 2FA).
           - Enter the withdrawal amount.
           - Ensure that the amount does not exceed your account balance.
        6. Stripe Gateway:
        7. Easypaisa Gateway:
           - If there are any issues, contact SyntoNext support for assistance.
      `);
    } else if (type === "withdraw-support-methods") {
      setInstruction("Withdraw Support Methods: \n- Stripe \n- Easypaisa");
    } else if (type === "how-to-deposit") {
      setInstruction(`
        How to Deposit:
        1. Log in to Your SyntoNext Account:
           - Open the SyntoNext platform.
           - Use your username and password to log in to your account.
        2. Navigate to the Deposit Section:
           - On your dashboard, locate the deposit section.
           - Select the deposit option to proceed.
        3. Select Your Deposit Method:
           - Choose from the following supported gateways:
             - Stripe: For international deposits using debit/credit cards.
             - Easypaisa: For local payments (Pakistan).
        4. Enter Your Card Number:
           - SyntoNext only requires your card number for Stripe-based deposits.
           - Ensure that your card is authorized for online transactions and supports deposits.
           - Important: Double-check your card number for accuracy.
        5. Authentication and Authorization:
           - SyntoNext will automatically authenticate and authorize your card details.
           - The system will verify whether your card is valid for deposit.
           - If necessary, the platform might prompt for additional authentication (OTP or 2FA).
           - Enter the deposit amount.
        6. Stripe Gateway:
        7. Easypaisa Gateway:
           - If there are any issues, contact SyntoNext support for assistance.
      `);
    } else if (type === "deposit-support-methods") {
      setInstruction("Deposit Support Methods: \n- Stripe \n- Easypaisa");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <button onClick={() => handleButtonClick("how-to-withdraw")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">How to Withdraw</button>
      <button onClick={() => handleButtonClick("withdraw-support-methods")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Withdraw Support Methods</button>
      <button onClick={() => handleButtonClick("how-to-deposit")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">How to Deposit</button>
      <button onClick={() => handleButtonClick("deposit-support-methods")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Deposit Support Methods</button>
      <Link to="/customer-support">
      <button  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"> Deposit Problems</button>
      </Link>
      <Link to="/customer-support">
      <button  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Withdraw Problems</button>
      </Link>
      {/* Display Instructions */}
  
      {instruction && (
        <div className="mt-4 p-4 border rounded border-gray-300 bg-gray-100">
          <pre>{instruction}</pre>
        </div>
      )}
    </div>
  );
};

export default Buttons;
