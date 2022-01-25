import React from 'react';
import { Link } from 'react-router-dom';
import { roundOneDecimal } from '../../utils/functions';
import './MiniCard.scss'

export const MiniCard = ({...props}) => {
  return(
      <div className={`element-${props.atomicNumber} period-${props.period} group-${props.group} block-${props.block}`}>
        <Link to={`/element/${props.symbol}`}>
            <div className='container-element centrado card border-warning'>
                <div className='element-number'>{props.atomicNumber}</div>
                <div className='element-mass'>{roundOneDecimal(props.atomicMass)}</div>
                <div className='element-symbol'>{props.symbol}</div>
                <div className='element-name'>{props.name}</div>
            </div>
        </Link>
      </div>
);
};
