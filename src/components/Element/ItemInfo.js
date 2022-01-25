import React from 'react';
import { capitalizeString } from '../../utils/functions';

export const ItemInfo = ({name, value}) => {
  return (
    <div className='col-12 col-md-6 col-lg-4 my-1 my-md-2 my-lg-3 text-capitalize'>
        <p>{capitalizeString(name)}: {value}</p>
    </div>
  )
};
