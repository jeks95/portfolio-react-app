import React from 'react'
import BackgroundImg from '../assets/quote-generator.png'
import QuoteImg from '../assets/joke-teller.png'
import GradientImg from '../assets/background-generator.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className="py-6">\\ Check out some of my recent work // </p>
            </div>

                {/* Container */}
           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* Grid Item */}
             <div style={{ backgroundImage: `url(${BackgroundImg})` }}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        Quote Generator
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://my-qoute-generator.netlify.app/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="https://github.com/jeks95/quote-generator">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
             </div>
             <div
             style={{ backgroundImage: `url(${QuoteImg})` }}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        Joke Teller
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://my-joke-teller-project.netlify.app/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="https://github.com/jeks95/joke-teller">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
             </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${GradientImg})` }}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        Background Gradient
                    </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
             </div>
             <div
             style={{ backgroundImage: `url(${QuoteImg})` }}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        Background Generator
                    </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
             </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${BackgroundImg})` }}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        Background Generator
                    </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
             </div>
             <div
             style={{ backgroundImage: `url(${QuoteImg})` }}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                         Generator
                    </span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                        </a>
                        <a href="/">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                        </a>

                    </div>
                </div>
             </div>
           </div>

        </div>
    </div>
  )
}

export default Work