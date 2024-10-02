export const markets = [
    {
      title: "Commodities",
      submarkets: [
        {
          title: "Metals",
          symbols: [
            { symbol: "frxXAUUSD", displayName: "Gold/USD", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxXPDUSD", displayName: "Palladium/USD", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxXPTUSD", displayName: "Platinum/USD", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxXAGUSD", displayName: "Silver/USD", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        }
      ]
    },
    {
      title: "Cryptocurrencies",
      submarkets: [
        {
          title: "Cryptocurrencies",
          symbols: [
            { symbol: "cryBTCUSD", displayName: "BTC/USD", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "cryETHUSD", displayName: "ETH/USD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        }
      ]
    },
    {
      title: "Derived",
      submarkets: [
        {
          title: "Forex Basket",
          symbols: [
            { symbol: "WLDAUD", displayName: "AUD Basket", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "WLDEUR", displayName: "EUR Basket", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "WLDGBP", displayName: "GBP Basket", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "WLDUSD", displayName: "USD Basket", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Daily Reset Indices",
          symbols: [
            { symbol: "RDBEAR", displayName: "Bear Market Index", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "RDBULL", displayName: "Bull Market Index", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Crash/Boom Indices",
          symbols: [
            { symbol: "BOOM300N", displayName: "Boom 300 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "BOOM500", displayName: "Boom 500 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "BOOM1000", displayName: "Boom 1000 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "CRASH300N", displayName: "Crash 300 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "CRASH500", displayName: "Crash 500 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "CRASH1000", displayName: "Crash 1000 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Commodities Basket",
          symbols: [
            { symbol: "WLDXAU", displayName: "Gold Basket", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Jump Indices",
          symbols: [
            { symbol: "JD10", displayName: "Jump 10 Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "JD25", displayName: "Jump 25 Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "JD50", displayName: "Jump 50 Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "JD75", displayName: "Jump 75 Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "JD100", displayName: "Jump 100 Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Step Indices",
          symbols: [
            { symbol: "stpRNG", displayName: "Step 100 Index", pip: "0.1", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "stpRNG2", displayName: "Step 200 Index", pip: "0.1", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "stpRNG5", displayName: "Step 500 Index", pip: "0.1", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Continuous Indices",
          symbols: [
            { symbol: "1HZ10V", displayName: "Volatility 10 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "R_10", displayName: "Volatility 10 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "1HZ25V", displayName: "Volatility 25 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "R_25", displayName: "Volatility 25 Index", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "1HZ50V", displayName: "Volatility 50 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "R_50", displayName: "Volatility 50 Index", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "1HZ75V", displayName: "Volatility 75 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "R_75", displayName: "Volatility 75 Index", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "1HZ100V", displayName: "Volatility 100 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "R_100", displayName: "Volatility 100 Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "1HZ150V", displayName: "Volatility 150 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "1HZ250V", displayName: "Volatility 250 (1s) Index", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        }
      ]
    },
    {
      title: "Forex",
      submarkets: [
        {
          title: "Major Pairs",
          symbols: [
            { symbol: "frxAUDJPY", displayName: "AUD/JPY", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxAUDUSD", displayName: "AUD/USD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURAUD", displayName: "EUR/AUD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURCAD", displayName: "EUR/CAD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURCHF", displayName: "EUR/CHF", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURGBP", displayName: "EUR/GBP", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURJPY", displayName: "EUR/JPY", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURUSD", displayName: "EUR/USD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPAUD", displayName: "GBP/AUD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPJPY", displayName: "GBP/JPY", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPUSD", displayName: "GBP/USD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDCAD", displayName: "USD/CAD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDCHF", displayName: "USD/CHF", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDJPY", displayName: "USD/JPY", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "Minor Pairs",
          symbols: [
            { symbol: "frxAUDCAD", displayName: "AUD/CAD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxAUDCHF", displayName: "AUD/CHF", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxAUDNZD", displayName: "AUD/NZD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxEURNZD", displayName: "EUR/NZD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPCAD", displayName: "GBP/CAD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPCHF", displayName: "GBP/CHF", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPNOK", displayName: "GBP/NOK", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxGBPNZD", displayName: "GBP/NZD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxNZDJPY", displayName: "NZD/JPY", pip: "0.001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxNZDUSD", displayName: "NZD/USD", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDMXN", displayName: "USD/MXN", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDNOK", displayName: "USD/NOK", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDPLN", displayName: "USD/PLN", pip: "0.0001", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "frxUSDSEK", displayName: "USD/SEK", pip: "0.00001", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        }
      ]
    },
    {
      title: "Stock Indices",
      submarkets: [
        {
          title: "Asian indices",
          symbols: [
            { symbol: "OTC_AS51", displayName: "Australia 200", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_HSI", displayName: "Hong Kong 50", pip: "0.01", exchangeIsOpen: "No", isTradingSuspended: "No" },
            { symbol: "OTC_N225", displayName: "Japan 225", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "European indices",
          symbols: [
            { symbol: "OTC_SX5E", displayName: "Euro 50", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_FCHI", displayName: "France 40", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_GDAXI", displayName: "Germany 40", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_AEX", displayName: "Netherlands 25", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_SSMI", displayName: "Swiss 20", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_FTSE", displayName: "UK 100", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        },
        {
          title: "American indices",
          symbols: [
            { symbol: "OTC_SPC", displayName: "US 500", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_NDX", displayName: "US Tech 100", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" },
            { symbol: "OTC_DJI", displayName: "Wall Street 30", pip: "0.01", exchangeIsOpen: "Yes", isTradingSuspended: "No" }
          ]
        }
      ]
    }
  ];
  