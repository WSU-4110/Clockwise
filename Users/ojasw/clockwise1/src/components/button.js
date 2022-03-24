import React from 'react'
import'./button.css'

const STYLES =[
    'btn--primay',
    'btn--outline',
]

const SIZES= [
    'btn--medium',
    'btn--large',
]

export const Button =({
    childern,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}
)=>
    {
        const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle: STYLES[0]
        return(
            <button className={'btn ${checkButtonStyle} ${checkButtonSize}'}
            type={type}>
            {childern}
            </button>
        )
    }

