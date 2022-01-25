import React from 'react';
import { Link } from 'react-router-dom';
import './BtnHome.scss';

export const BtnHome = () => {
  return (
    <button type='button' className='btn btn-warning btn-home'>
        <Link to='/'>
            Home
        </Link>
    </button>
  )
};
