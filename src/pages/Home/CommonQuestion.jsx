import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
  },
  {
    question: "Q. What are your delivery hours?",
    answer:
      "We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient for you.",
  },
  {
    question: "Q. What is your policy on refunds?",
    answer:
      "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
  },
  {
    question: "Q. What about the prices?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
  {
    question: "Q. Do you serve my area?",
    answer:
      "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
  },
];

const CommonQuestion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-12">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center cursor-pointer">
          <h2 className="text-[#2D3A3F] text-[20px] font-[400] text-center mb-4">
            Common Questions
          </h2>
        </div>

        <div className="mx-32 space-y-4 mb-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer CommonQContainer rounded-lg"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer flex items-center justify-between w-full px-4 py-3"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  className={`w-7 h-7 cursor-pointer text-black font-bold transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-0" : "-rotate-180"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center">
          <Link className="text-center text-[#FF6F71] text-base underline">
            Have further questions?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CommonQuestion;
