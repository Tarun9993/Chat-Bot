import React from 'react'
const Response = ({ response }) => {
  if (!response || !response.candidates) {
    return null
  }

  return (
    <div className='h-[400px] overflow-auto custom-scrollbar'>
  <div className='lg:mx-30 mx-6 bg-[#F9F9F9] shadow-xl rounded-xl p-4 border-neutral-800'>
    {response.candidates.map((candidate, index) => (
      <div key={index}>
        <p className='text-neutral-900 font-serif text-justify'>
          {candidate.content?.parts?.[0]?.text || "No response available"}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};


export default Response
