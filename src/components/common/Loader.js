import React from 'react'
import './Loader.scss'

export const Loader = () => {
    return (
        <div className='h-100 centrado'>
            <div className="spinner spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
