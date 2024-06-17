// @flow
import * as React from 'react';
import '../App.css';
import RectangleImage from './../Assests/Rectangle-332.webp'
import RectangleImageTwo from './../Assests/Rectangle-292.webp'
import RectangleImageThree from './../Assests/Rectangle-293.webp'
import RectangleImageFive from './../Assests/Rectangle-333.webp'
import ArrowBtn from './../Assests/Vector (6).svg'
import {SmallCard} from "./SmallCard";
import video1 from './../Assests/Video5.mp4'
import video2 from './../Assests/Video6.mp4'


type Props = {

};
export const Main = (props: Props) => {
    return (
        <div>
            <div className="header">
                <p className="text-1">OUR WORKS</p>
                <p className="text-2">Make engaging experiences happen</p>
                <hr className="underline" />
            </div>
            <div className="image-grid">
                <SmallCard
                    videoSource1={video1}
                    videoSource2={video1}
                    videoSource3={video2}
                    videoSource4={video2}

                />
            </div>
            <button className="view-more-button">View More Case Studies <img src={ArrowBtn} alt="" /></button>
        </div>
    );
};