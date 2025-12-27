'use client'

import { useState } from 'react'
import SendQuoteModal from './SendQuoteModal'
const GetQuoteButton = ({ product, className, label }) => {
      const [showModal, setShowModal] = useState(false)

      return (
            <>

                  <button
                        onClick={() => setShowModal(true)}
                        className={`px-10 cursor-pointer md:px-20 md:py-6 md:text-lg mt-5 md:mt-6 ${className || ''}`}>{label || "Get Quote"}</button>
                  {/* Donation Modal */}
                  {showModal && <SendQuoteModal product={product} onClose={() => setShowModal(false)} />}
            </>
      )
}

export default GetQuoteButton
