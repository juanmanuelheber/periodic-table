import React from 'react'
import './PageTitle.scss'

export const PageTitle = ({title=""}) => {
    const hasNavigator = !!navigator.share
    const share = () => {
        if (hasNavigator) {
            navigator.share({
                text:"Table periodica de los elementos",
                title: "Tabla Periódica",
                url:"https://google.com.ar"
            })
        } else {
            alert('No sharing support')
        }
    }
    return (
        <div className='container-title'>
            <h1 className='text-center p-3 p-md-3'>{title}</h1>
            <button type="button" onClick={share}>Share</button>
        </div>
    )
}
