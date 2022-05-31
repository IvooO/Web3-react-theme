import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VitalikButerinProfile.jpg/1920px-VitalikButerinProfile.jpg"
        position="Vitalik, CTO"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ibGfhAS4ZQ6k/v1/1200x-1.jpg"
        position="Zhu Su, CEO"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://api.time.com/wp-content/uploads/2014/03/nakamoto.jpg"
        position="Satochi, Manager"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://www.whizlabs.com/blog/wp-content/uploads/2019/03/adam-back-1.jpg"
        position="Adam Back, Designer"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://en.bitcoinwiki.org/upload/en/images/2/28/Elizabeth_Stark.jpg"
        position="Elizabeth, Manager"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://imageio.forbes.com/specials-images/imageserve/5fb49945fed0df3140c26ca4/0x0.jpg?format=jpg&crop=1080,1080,x0,y0,safe&height=416&width=416&fit=bounds"
        position="Jack, Developer"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
