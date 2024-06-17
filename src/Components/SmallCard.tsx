import React, {useRef, useState} from 'react';
import {Video} from "./Video";


interface SmallCardProps {
    videoSource1: string;
    videoSource2: string;
    videoSource3: string;
    videoSource4: string;

}

export const SmallCard = (props: SmallCardProps) => {
    const [play1, setPlay1] = useState(false);
    const [play2, setPlay2] = useState(false);
    const [play3, setPlay3] = useState(false);
    const [play4, setPlay4] = useState(false);

    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const videoRef3 = useRef<HTMLVideoElement>(null);
    const videoRef4 = useRef<HTMLVideoElement>(null);

    return (
        <div className="smallCard">
            <div className="smallCard-images">
                <Video play={play1} setPlay={setPlay1} videoRef={videoRef1} videoSource={props.videoSource1} />
                <Video play={play2} setPlay={setPlay2} videoRef={videoRef2} videoSource={props.videoSource2}/>
                <Video play={play3} setPlay={setPlay3} videoRef={videoRef3} videoSource={props.videoSource3}/>
                <Video play={play4} setPlay={setPlay4} videoRef={videoRef4} videoSource={props.videoSource4}/>
            </div>
        </div>

    );
};
