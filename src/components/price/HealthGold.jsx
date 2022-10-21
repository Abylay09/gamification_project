import React from 'react'
import "./HealthGold.scss"

import { useSelector } from 'react-redux'
function HealthGold({ gold, hp }) {
    const language = useSelector(state => state.language.language)
    return (
        <div className='price-wrapper d-flex' >
            <span className='price-hp py-1 px-2' > +{hp} XP</span>
            <span className='price-gold py-1 px-2' > +{gold} {language.gold}</span>
        </div>
    )
}

export default HealthGold