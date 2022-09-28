import React from 'react'
import "./HealthGold.scss"

function HealthGold({ gold, hp }) {
    return (
        <div className='price-wrapper d-flex' >
            <span className='price-hp py-1 px-2' > +{hp} HP</span>
            <span className='price-gold py-1 px-2' > +{gold} GOLD</span>
        </div>
    )
}

export default HealthGold