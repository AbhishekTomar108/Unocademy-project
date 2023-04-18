import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing'>
        <h2>Pricing <b>Plans</b></h2>

        <div className='pricing-summary'>
            <div className='summary-1'>

                <div className='price-thumb'>
                    <div className='responsive-thumb-1'>
                    <div className='thumb-1'>
                        <span>1. Program Fees</span>
                    </div>

                    <div className='thumb-2'>
                        <span>INR 85,000 + GST</span>
                        <strong>INR 1,55,000</strong>
                    </div>
                    </div>


                    <div className='thumb-3'>
                        <span>View Plans</span>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>

            <div className='summary-2'>
            <div className='price-thumb'>
                    <div className='thumb-1'>
                        <span>2. Pay After Placement</span>
                    </div>

                    <div className='thumb-2'>
                        <span>INR 49,000 + GST + </span>
                            <span>INR 70,000 + GST</span>
                     
                        <strong>Upfront Payment </strong>
                        <strong>Upfront Payment </strong>
                    
                    </div>

                    <div className='thumb-3'>
                        <span>View Plans</span>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing