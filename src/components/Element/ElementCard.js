import React from 'react';
import { roundOneDecimal } from '../../utils/functions';
import './ElementCard.scss'
import { ItemInfo } from './ItemInfo';

export const ElementCard = ({...props}) => {

    const getNuetrons = Math.round(roundOneDecimal(props.atomicMass) - props.atomicNumber);

    const requiredData = {
        symbol: props.symbol,
        atomicNumber: props.atomicNumber,
        atomicMass: props.atomicMass,
        protons: props.atomicNumber,
        electrons: props.atomicNumber,
        neutrons: getNuetrons,
        block: props.block,
        period: props.period,
        group: props.group,
        groupBlock: props.groupBlock,
        standardState: props.standardState,
        bondingType: props.bondingType,
        meltingPoint: props.meltingPoint,
        boilingPoint: props.boilingPoint,
        electronegativity: props.electronegativity,
    }
  return (
      <div id='single-element'>
        <div className="card w-75 p-2 p-md-5">
            <div className="row">
                {Object.entries(requiredData).map(([key,value])=>(
                    <ItemInfo key={`property-${key}`} name={key} value={value} />
                ))}
            </div>
        </div>
      </div>
    )
};
