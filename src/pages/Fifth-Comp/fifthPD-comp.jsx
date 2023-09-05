import React, { useState } from "react";
import "./fifthPD-comp.scss";
import ReactPlayer from "react-player";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import RscoreVideo from "../../videos/Rscore-slide.mp4";
import { ImageServer } from "../../img/imageServer";

export default function FifthPDComp() {

    const RscoreVideo = `${ImageServer}videos/RScore-slide2.mp4`;


    const [playPause, setPlayPause] = useState(false);

    function handleTrueEvents() {
        setPlayPause(true)

    }
    function handleFalseEvents() {
        setPlayPause(false)

    }
    function handleHoverEvents() {
        setPlayPause(prev => {
            return !prev;
        })
    }

    return (
        <>
            <div className="fifthPD-comp-main-container">

                <div className="hidden1-div"
                    onMouseEnter={handleTrueEvents}
                    onMouseLeave={handleFalseEvents}
                    onClick={handleHoverEvents}
                ></div>
                <div className="hidden2-div">
                    {
                        !playPause && <div className="play-icon-div"><PlayArrowIcon className="play-icon" /></div>
                    }
                </div>

                <ReactPlayer
                    // onMouseEnter={handleHoverEvents}
                    width="100%"
                    height="104%"
                    autoPlay
                    controls={true}
                    loop={true}
                    // muted
                    // onStart={setVideoUrl(RscoreVideo)}
                    playing={playPause}
                    url={RscoreVideo}
                    onError={() => { console.log("There is an error with url.") }}

                />

            </div>
        </>
    )
}

//onClick={e => e.target.play()} 