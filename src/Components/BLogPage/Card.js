

import React from 'react';
import { CardStyle } from './CardStyle';

export const Card = (props) => {
  return (
    <CardStyle className='section-page'>
        <div className='card-img'>
                    {/* card img */}
                    <img width='100px' src={props.image}
                    alt={props.id} />
                </div>
                <div className='card-content'>
                    <h1>{props.header}</h1>
                    <small>{props.time}</small>
                    <p>{props.paragraph}</p>

                    <button type='submit'>read more</button>
                </div>
        </CardStyle>
  )
}

