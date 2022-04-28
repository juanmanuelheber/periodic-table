import React from 'react'
import './PageTitle.scss'

export const PageTitle = ({title=""}) => {
    return (
        <div className='container-title'>
            <h1 className='text-center p-3 p-md-3'>{title}</h1>z
        </div>
    )
}
