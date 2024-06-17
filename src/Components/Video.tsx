import React, {useEffect} from 'react';
import {CardText} from "./CardText";


interface VideoProps {
    play: boolean
    setPlay: (play: boolean) => void
    videoRef: any
    videoSource: string
}

export const Video = ({ setPlay, play, videoRef, videoSource }: VideoProps) => {
    useEffect(() => {
        if (play) {
            videoRef.current?.play();
            videoRef.current.muted = false;
        } else {
            videoRef.current?.pause();
            videoRef.current.muted = true;
        }
    }, [play]);

    const handleMouseEnter = () => {
        setPlay(true);
    };

    const handleMouseLeave = () => {
        setPlay(false);
    };

    return (
        <div className="image-container">
            <video
                ref={videoRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                src={videoSource}
                className="card-video"
            />
            <div className="image-text"><CardText /></div>
        </div>
    );
}