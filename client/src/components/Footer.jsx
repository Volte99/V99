import React from 'react'
import { 
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
       <div>
       <h1 className="w-full text-3xl font-bold text-white">V99.</h1>
       <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto in, consectetur, provident odit dolore beatae maiores rerum earum dolorem nobis natus esse delectus temporibus tempore cumque doloremque non. Labore, temporibus.</p>
       <div className="flex justify-between md:w-[75%] my-6 ">
         <FaFacebookSquare size={30}/>
         <FaInstagramSquare size={30}/>
         <FaGithubSquare size={30}/>
         <FaTwitterSquare size={30}/>
         <FaYoutubeSquare size={30}/>
       </div>
       </div>
       <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Stats</h6>
          <ul className="py-2">
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul className="py-3">
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul className="py-3">
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Carrers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul className="py-3">
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
         
       </div>
    </div>
  )
}

export default Footer