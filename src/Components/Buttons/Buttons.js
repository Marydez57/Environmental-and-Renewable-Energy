import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css'
const STYLE = ['btn-primary', 'btn-outline']

const SIZES = ['btn-medium', 'btn-large' ]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize }) => {
        const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

        return (
            <Link to='/contact' className='btn-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
                    {children}
                </button>
                 
            </Link>
        )
};
        
export default Button;