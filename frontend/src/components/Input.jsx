import React, { useState } from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
const Input = ({onSubmit}) => {

    const [question, setQuestion] = useState("")
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(question.trim()){
        onSubmit(question)
        setQuestion("")
      }
    }
    return (
      <div className='lg:px-30 md:px-30 px-4 absolute bottom-0 w-[420px] md:w-[1200px]'>
        <form onSubmit={handleSubmit} className='w-full p-5'>
          <div className='text-center py-5'>
            <div className=''>
              <div className='flex border rounded-xl'>
                <input
                  type='text'
                  id='question'
                  name='question'
                  placeholder='Enter your Question'
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className='p-3 md:w-full w-full outline-none focus:ring-0 focus:border-transparent rounded-2xl  text-lg'
                />
                <button type='submit' className='w-12 cursor-pointer'>
                  <BsArrowRightCircleFill size={30} />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

export default Input
