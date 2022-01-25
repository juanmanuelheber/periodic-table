import React from 'react';
import { Link } from 'react-router-dom';
import { roundOneDecimal } from '../../utils/functions';
import './MiniCard.scss'

export const MiniCard = ({...props}) => {
  return(
      <div className={`element-${props.atomicNumber} period-${props.period} group-${props.group} block-${props.block}`}>
        <Link to={`/element/${props.symbol}`}>
            <div className='container-element centrado card border-warning p-0 p-md-2'>
                <div className='d-none d-xl-block element-number'>{props.atomicNumber}</div>
                <div className='d-none d-xl-block element-mass'>{roundOneDecimal(props.atomicMass)}</div>
                <div className='d-none d-xl-block element-name'>{props.name}</div>
                <div className='element-symbol'>{props.symbol}</div>
            </div>
        </Link>
      </div>
);
};
