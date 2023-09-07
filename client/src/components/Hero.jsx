import React from 'react'
import Typed from 'react-typed'
import Link from 'next/link'

const Hero = () => {

  return (
    <div className="text-white ">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-white font-bold p-2">UNLEASH THE POWER OF THE NEW V99 CHAT SPACE</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase">Connect with V99</h1>
          <div className="flex justify-center items-center">
            <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2" 
             strings={["COMMUNICATION", "SHARING", "ASSIGNING TASKS"]}
             typeSpeed={120}
             backSpeed={140}
             loop
            />
          </div>
          <p className="md:text-2xl text-x l font-bold text-amber-400 py-3">
          A chat space website where you can communicate, share various files, assign tasks and stay connected.
          </p>
          <button className="bg-[cyan] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black">
            <Link href="/login">Get Started</Link>
          </button>
        </div>
    </div>
  )
}

export default Hero