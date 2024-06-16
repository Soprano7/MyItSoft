// @flow
import * as React from 'react';
import RectangleImage from './../Assests/Rectangle-332.webp'
import RectangleImageTwo from './../Assests/Rectangle-292.webp'
import RectangleImageThree from './../Assests/Rectangle-293.webp'
import RectangleImageFive from './../Assests/Rectangle-333.webp'
import {CardText} from "./CardText";

type Props = {

};

export const SmallCard = (props: Props) => {
    return (
        <div className="smallCard">
            <div className="smallCard-images">
                <div className="image-container">
                    <img src={RectangleImage} />
                    <div className="image-text"><CardText/> </div>
                </div>
                <div className="image-container">
                    <img src={RectangleImageTwo} />
                    <div className="image-text">
                       <CardText/>
                    </div>
                </div>
                <div className="image-container">
                    <img src={RectangleImageThree} />
                    <div className="image-text"><CardText/></div>
                </div>
                <div className="image-container">
                    <img src={RectangleImageFive} />
                    <div className="image-text"><CardText/></div>
                </div>
            </div>

        </div>
    );
};