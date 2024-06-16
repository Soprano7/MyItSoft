// @flow
import * as React from 'react';
import '../App.css';
import Arrow from './../Assests/Vector (5).svg'

type Props = {

};
export const CardText = (props: Props) => {
    return (
        <div>
            <p className="cardHeader">Unilever</p>
            <p className="CardTextMain">Inspiring Action</p>
            <a href="" className="UnderLink"> See More <img src={Arrow} className="UnderArrow" alt=""/></a>
        </div>
    );
};