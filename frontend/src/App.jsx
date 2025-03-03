import React, { useState } from 'react';
import Input from './components/Input';
import Response from './components/Response';
import { fetchChatResponse } from "./sevices/Api";

const App = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    setQuestion(question);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response");
    }
    setLoading(false);
  };

  return (
    <div className='bg-[#FFFFFF] min-h-screen'>
      <header className='bg-slate-700 text-white text-center py-2'>
        <h1 className='font-bold text-2xl md:text-4xl font-mono'>Chat-Bot</h1>
      </header>
      <div className='mt-5 bg-white rounded-2xl shadow-2xl h-[640px] w-[90%] md:w-[75%] mx-auto p-4 md:p-6'>
        <div className='text-end px-4 md:px-30 pt-8 md:pt-16 pb-6 md:pb-10'>
          {question ? (
            <span className="rounded-xl p-3 bg-[#F3F3F3] text-base md:text-lg font-semibold font-serif text-neutral-900">
              {question}
            </span>
          ) : (
            <div className="text-center pt-20 md:pt-48">
              <h1 className="font-bold text-neutral-600 text-lg md:text-3xl tracking-wide">
                What can I help with?
              </h1>
            </div>
          )}
        </div>
        {loading ? (
          <div className="flex justify-center items-center mt-4">
            <div className="w-8 md:w-10 h-8 md:h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <Response response={response} />
        )}
        <Input onSubmit={handleQuestionSubmit} />
      </div>
    </div>
  );
};

export default App;
