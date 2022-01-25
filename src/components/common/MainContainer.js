import React from 'react'
import './MainContainer.scss'

export const MainContainer = ({children}) => {
    return (
        <div className='row m-0 container-main centrado'>
            {children}
        </div>
    )
}
