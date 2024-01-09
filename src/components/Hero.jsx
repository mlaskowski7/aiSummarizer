import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center flex-col">
      <nav className="flex justify-between items-center flex-row w-full pt-3">

        <img src={logo} alt="my logo" className='w-24 object-contain' />

        <button type="button" onClick={() => window.open('https://github.com/mlaskowski7/aiSummarizer')} className='black_btn'>
          GitHub Repo
        </button>

      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className='max-md:hidden'/>  <span className='blue_gradient'>OpenAI's GPT-4</span>
      </h1>
 
    </header>
  )
}

export default Hero