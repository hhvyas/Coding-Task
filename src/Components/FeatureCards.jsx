import React from 'react'

function FeatureCards({text, widgets}) {
    return (
        <div className='feaure_cards'>
            <i class='material-icons card_icon'>{widgets}</i>
            <div className='text_number'>
                <p className='text'>{text}</p>
                <p className='number'>1704</p>
            </div>
        </div>
    )
}

export default FeatureCards
