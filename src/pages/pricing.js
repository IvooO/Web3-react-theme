import React from "react"
import Layout from "../components/layout"
import PricingHeader from "../components/Pricing/pricingHeader"
import PricingMain from "../components/Home/pricing"
import PricingFAQ from "../components/Pricing/pricingFAQ"
import PricingCTA from "../components/Pricing/pricingCTA"
import AboutTeamBigCard from "../components/about/aboutTeamBigCard"
import BlogsContainer from "../components/Blog/blogsContainer"

const Pricing = () => {
  return (
    <Layout>
      <AboutTeamBigCard></AboutTeamBigCard>
      
      <BlogsContainer></BlogsContainer>
      {/* <PricingHeader></PricingHeader>
      <div className="mt-20">
        <PricingMain></PricingMain>
      </div> */}
      <PricingFAQ></PricingFAQ>
      {/* <PricingCTA></PricingCTA> */}
    </Layout>
  )
}

export default Pricing
