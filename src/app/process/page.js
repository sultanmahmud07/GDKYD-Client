import React from 'react'
import ProductProcesses from '../../components/Pages/Process/ProductProcess'
import TopGap from '../../components/Shared/TopGap/TopGap'
import HowWorks from '../../components/Pages/Home/HowWorks/HowWorks'
export const metadata = {
  title: "Streamline Your Workflow Top Process Management Solutions KYD",
  description: "High-speed mask machine manufacturing process for global buyers, featuring automatic medical mask machines, non-woven production lines, disposable hygiene product machines, trusted medical equipment manufacturer, and reliable face mask machine supplier worldwide."
};
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
