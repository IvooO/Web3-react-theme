import React from "react"

const AboutTeamBigCard = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="bg-lightblack w-full h-full flex flex-row justify-between rounded-xl xxs:flex-col sm:flex-row">
        <img
          className="w-3/4 object-cover h-96 rounded-l-lg xxs:w-full sm:w-3/4"
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        ></img>
        <div className="flex flex-col justify-between">
          <div className="text-white text-right m-6 font-poppins xxs:text-center sm:text-right">
            <h1 className="text-5xl font-bold">Tim Lake</h1>
            <h3 className="text-lg font-bold opacity-50">Founder</h3>
          </div>
          <p className="text-white p-6 text-xl text-right xxs:text-center sm:text-right">
          We are creating the foundations for a better web built on blockchain.
          We build this together with many other developers and entrepreneurs, 
          they are innovating in sectors as diverse as social media, healthcare, mobility, educational certification, regulatory compliance, identity, supply chains and provenance, payments, asset trading and charitable aid.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutTeamBigCard
