import React from "react"
import Fade from "react-reveal/Fade"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 h-full overflow-hidden gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3">
          <div className="col-start-1 col-end-3 h-96 overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://pbs.twimg.com/media/Ey8ljgHVcAM5QnO.jpg"
            ></img>
          </div>
          <div className="col-start-3 overflow-hidden rounded-xl h-96 xxs:col-start-1 sm:col-start-3">
            <img
              className="object-cover h-96"
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
            ></img>
          </div>
        </div>
      </Fade>
      <div className="grid grid-cols-4">
        <p className="col-start-3 col-end-5 text-white text-3xl leading-normal mt-10 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
        We consult, design & develop applications for a decentralized web that fuel innovation & deliver digital success! At Web3 Factory we believe that every project is an important milestone in our journey. 
        So we position ourselves as a boutique digital agency, custom tailoring impactful digital solutions with industry best practices.
        
        </p>
      </div>
    </div>
  )
}

export default AboutMore
