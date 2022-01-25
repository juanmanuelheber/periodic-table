import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { ALL_ELEMENTS } from '../../utils/const';
import { Loader } from '../common/Loader';
import { MiniCard } from './MiniCard';
import './Table.scss'

export const Table = () => {
    const { data, loading } = useFetch(ALL_ELEMENTS)

    if (loading) { return <Loader /> }  

  return (
    <div className='table'>
        {data.length>0 && data.map(elem=>(
            <MiniCard key={elem.symbol} {...elem} /> 
        ))}
    </div>
  )
};
