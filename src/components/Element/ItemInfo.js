import React from 'react';
import { capitalizeString } from '../../utils/functions';

export const ItemInfo = ({name, value}) => {
  return (
    <div className='col-4 my-3 text-capitalize'>
        <p>{capitalizeString(name)}: {value}</p>
    </div>
  )
};
