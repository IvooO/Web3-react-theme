import React from "react"
import Fade from "react-reveal/Fade"

const AboutHeader = () => {
  return (
    <Fade bottom cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670"></img>
        </div> 
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">About us</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            We're on a mission to reinvent the web. Our passion is delivering decentralized web applications 
            where users control their own data, identity and destiny.
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
