import React from 'react'
import '../ComponentStyles/BigFeatureCards.css'

function BigFeatureCards({text}) {
    return (
        <div className='big_feaure_cards'>
            <div className='text_number_big'>
                <p className='text_big'>{text}</p>
            </div>
        </div>
    )
}

export default BigFeatureCards
