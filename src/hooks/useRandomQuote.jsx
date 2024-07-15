import { useState, useEffect } from "react";

const useRandomQuote = () => {
  const API_URL = "https://api.quotable.io/quotes/random";
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const getQuote = async () => {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setQuote(data[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return { quote, loading, getQuote };
};

export default useRandomQuote;
