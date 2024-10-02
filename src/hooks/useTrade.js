import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../api/axios";
import useAuth from "./useAuth";
import useLocalStorage from "./useLocalStorage";

const useTrade = (symbol, candlestickData) => {
  const { auth, setAuth } = useAuth(); // Include setAuth to update the auth object
  const [currentPrice, setCurrentPrice] = useState(null);
  const [stake, setStake] = useLocalStorage("stake", null);
  const [selectedMultiplier, setSelectedMultiplier] = useLocalStorage(
    "multiplier",
    "50X"
  );
  const [profitLoss, setProfitLoss] = useState(null);
  const [buyInPrice, setBuyInPrice] = useState(null);
  const [buyOutPrice, setBuyOutPrice] = useState(null);
  const [userTrade, setUserTrade] = useState(null);

  useEffect(() => {
    if (candlestickData && candlestickData.length > 0) {
      setCurrentPrice(candlestickData[candlestickData.length - 1].close);
    }
  }, [candlestickData]);

  const calculateWinNum = (profitLoss, multiplier, stake) => {
    switch (multiplier) {
      case "25X":
        return profitLoss * 25 * stake;
      case "50X":
        return profitLoss * 50 * stake;
      case "75X":
        return profitLoss * 75 * stake;
      case "100X":
        return profitLoss * 100 * stake;
      default:
        return 0;
    }
  };

  const buyIn = (price) => {
    if (!price) return;
    setBuyInPrice(price);
    toast.success("Buy In successful");
  };

  const buyOut = async (price) => {
    if (!buyInPrice || !price) return;
    setBuyOutPrice(price);
    const profitLossPercentage = (price - buyInPrice) / buyInPrice;
    setProfitLoss(profitLossPercentage);
    toast.success("Buy Out successful");
  };

  useEffect(() => {
    if (stake && selectedMultiplier && profitLoss !== null) {
      const tradeData = {
        isDemo: false,
        tradePair: symbol,
        tradeEntry: buyInPrice,
        tradeClosePrice: buyOutPrice,
        profitVal: profitLoss,
        stake: stake,
        tradeType: "multiplier",
        multiplier: selectedMultiplier,
        tradeWinNum: calculateWinNum(profitLoss, selectedMultiplier, stake),
        tradeUserId: auth.user.id,
      };

      setUserTrade(tradeData);
      console.log("User Trade", JSON.stringify(tradeData));
    }
  }, [profitLoss, stake, selectedMultiplier]);

  const handleCreateTrade = async () => {
    if (!userTrade) return;
    try {
      console.log("Creating Trade[inside func]", userTrade);
      const response = await axios.post("/trades", userTrade, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Trade Created", response.data);
      toast.success("Trade created successfully");
    } catch (error) {
      console.log("Error creating trade", error);
      toast.error("Error creating trade");
    }
  };

  const handleWalletUpdate = async (updatedBalance) => {
    try {
      const data = {
        userId: auth.user.id,
        amount: updatedBalance,
        type: "trade",
      };
      console.log("Data", data);

      const response = await axios.post("/users/update-wallet", data);
      console.log("Wallet Updated", response.data);
    } catch (error) {
      console.log("Error updating wallet", error);
    }
  };

  const handleBuyIn = async () => {
    if (auth.wallet.balance >= stake) {
      const updatedBalance = auth.wallet.balance - stake;
      await handleWalletUpdate(updatedBalance);
      setAuth({
        ...auth,
        wallet: {
          ...auth.wallet,
          balance: updatedBalance,
        },
      });
      localStorage.setItem(
        "auth",
        JSON.stringify({
          ...auth,
          wallet: {
            ...auth.wallet,
            balance: updatedBalance,
          },
        })
      );
      buyIn(currentPrice); // Set buy-in price to current price
    } else {
      toast.error("Insufficient balance");
    }
  };

  const handleBuyOut = async () => {
    try {
      if (buyInPrice !== null && currentPrice !== null) {
        await buyOut(currentPrice); // Wait for buyOut to finish
  
        const winAmount = calculateWinNum(profitLoss, selectedMultiplier, stake);
        const updatedBalance = auth.wallet.balance + winAmount; // Update balance with the winnings
  
        // Update the auth state with the new balance
        setAuth((prevAuth) => ({
          ...prevAuth,
          wallet: {
            ...prevAuth.wallet,
            balance: updatedBalance,
          },
        }));
  
        console.log("Win Amount", winAmount);
        console.log("Trade before [[function]]", userTrade);
  
        await handleCreateTrade(); // Log the trade
        await handleWalletUpdate(updatedBalance); // Update the wallet on the server
      } else {
        toast.error("Buy in before attempting to buy out");
      }
    } catch (error) {
      console.error("Error during buyout process:", error);
      toast.error("An error occurred during the buyout process. Please try again.");
    }
  };
  
  return {
    stake,
    setStake,
    selectedMultiplier,
    setSelectedMultiplier,
    currentPrice,
    handleBuyIn,
    handleBuyOut,
  };
};

export default useTrade;
