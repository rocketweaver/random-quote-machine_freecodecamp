import React from "react";
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";
import Spinner from "./suspense/Spinner";
import useRandomQuote from "../hooks/useRandomQuote";

const QuoteBox = () => {
  const { quote, loading, getQuote } = useRandomQuote();

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote?.content || ""}" - ${quote?.author || ""}`
  )}`;

  return (
    <div
      className="w-1/2 bg-white shadow-lg pb-10 pt-14 px-8 rounded-lg border border-slate-200 transition-all"
      id="quote-box"
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex gap-2">
            <FaQuoteLeft />
            <p className="text-xl" id="text">
              {quote?.content || ""}
            </p>
          </div>
          <small id="author" className="text-end block mt-8">
            - {quote?.author || ""}
          </small>
        </>
      )}

      <div className="flex justify-between mt-8">
        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="socmed-link"
          id="tweet-quote"
        >
          <FaTwitter className="text-amber-500 text-2xl hover:scale-75 cursor-pointer transition-all" />
        </a>
        <button
          className="px-4 py-2 border border-amber-500 bg-amber-500 text-sm text-white rounded hover:transform hover:scale-75 transition-all duration-300"
          onClick={getQuote}
          id="new-quote"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
