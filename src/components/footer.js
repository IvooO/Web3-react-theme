import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white text-4xl text-bold">Web3 Factory</h1>
          <p className="text-white text-sm mt-5 opacity-50">
          We consult, design & develop applications for a decentralized web that fuel innovation & deliver digital success!
          © Copyright 2011-2022
          </p>
          <h1 className="text-white text-lg mt-20 ">
            © copyright{" "}
            <a href="https://www.web3factory.com/">web3factory.com</a>
          </h1>
        </div>
        <div className="place-self-end self-center xxs:hidden lg:block">
          <ul className="text-xl font-poppins font-bold">
            <li>
              <Link to="/">Demos</Link>
            </li>
            <li>
              <Link to="/">Company</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>{" "}
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
