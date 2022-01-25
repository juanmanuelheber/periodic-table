import React from 'react'
import './Layout.scss'
import image from './background.webp'

export const Layout = ({children}) => {
    return (
        <div id='container-layout' style={{ backgroundImage: image }}>
            {children}
        </div>
    )
}
