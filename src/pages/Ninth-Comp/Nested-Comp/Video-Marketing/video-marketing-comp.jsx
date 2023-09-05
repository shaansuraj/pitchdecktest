import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./video-marketing-comp.scss";
import DotButton from "../News-Paper-Ads/dot-buttons";
import { ImageServer } from "../../../../img/imageServer";

export default function VideoMarketingComp(props) {
    const VMCompData = [
        {
            videoURL: `${ImageServer}videos/Rentainance-coming-soon-video.mp4`
        },
        {
            videoURL: `${ImageServer}videos/LandLord.mp4`
        },
        {
            videoURL: `${ImageServer}videos/Burden-Video.mp4`
        }
    ]


    let [x, setX] = useState(0)

    const dotNavigation = (id) => {
        setX(x = id * 100);
    }

    function handleSlidesRight() {
        x === (VMCompData.length - 1) * 100 ? setX(0) : setX(x + 100)
    }

    function handleSlidesLeft() {
        x === (0) ? setX((VMCompData.length - 1) * 100) : setX(x - 100)
    }






    return (
        <>
            <div className="video-marketing-comp-main-component">
                <div className="btn-one-div"><button
                    onClick={handleSlidesLeft}
                >PREV</button></div>
                <div className="btn-two-div"><button
                    onClick={handleSlidesRight}>NEXT</button></div>

                <div className="slider-div">

                    <div className="slides-div">

                        {VMCompData.map((item, index) => {
                            return (
                                <>
                                    <div className="img-div"
                                        key={index.toString()}
                                        style={{
                                            backgroundColor: item.color,
                                            transform: `translate(${-x}%)`

                                        }}>
                                        <ReactPlayer
                                            // onMouseEnter={handleHoverEvents}
                                            width="100%"
                                            height="104%"
                                            autoPlay
                                            controls={true}
                                            loop={true}
                                            // muted
                                            // onStart={setVideoUrl(RscoreVideo)}
                                            // light = {item.videoURL}
                                            // playing={playPause}
                                            url={item.videoURL}
                                            onError={() => { console.log("There is an error with url.") }}

                                        />

                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
                <div className="dot-container">
                    {VMCompData.map((items, index) => {
                        return (<>
                            <div className="dot-button-div" key={index}>
                                <DotButton
                                    itemId={index}
                                    handleDotNav={dotNavigation}
                                    currentItemId={x}
                                />
                            </div>
                        </>)


                    })}

                </div>

            </div>
        </>
    )
}