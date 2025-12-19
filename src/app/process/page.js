import React from 'react'
import ProductProcesses from '../../components/Pages/Process/ProductProcess'
import TopGap from '../../components/Shared/TopGap/TopGap'
import HowWorks from '../../components/Pages/Home/HowWorks/HowWorks'

const page = () => {
      return (
            <div>
                  <TopGap></TopGap>
                  <ProductProcesses />
                  <HowWorks></HowWorks>
            </div>
      )
}

export default page
