const messages = {
  "en-US": {
    message: {
      hello: "hello world",
      noofclick: "Number of click",
      greeting: "Have a good day.",
    },
    currency: {
      style: "currency",
      currency: "USD",
      notation: "standard",
    },
    decimal: {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
  "ja-JP": {
    message: {
      hello: "こんにちは、世界",
      noofclick: "クリック数",
      greeting: "すてきな一日を",
    },
    currency: {
      style: "currency",
      currency: "JPY",
      useGrouping: true,
      currencyDisplay: "symbol",
    },
    decimal: {
      style: "decimal",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 5,
    },
    percent: {
      style: "percent",
      useGrouping: false,
    },
  },
};

export { messages };
