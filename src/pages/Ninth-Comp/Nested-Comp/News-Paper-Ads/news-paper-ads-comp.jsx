import React, { useState, useEffect } from "react";

import "./news-paper-ads-comp.scss";
import DotButton from "./dot-buttons";



const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/ninth-comp-img/frame3.1.png";
const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/ninth-comp-img/frame3.2.png";
const Frame3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/ninth-comp-img/frame3.3.png";

export default function NewsPaperAdsComp(props) {

    const NPACompData = [
        {
            imgURL: Frame1
        },
        {
            imgURL: Frame2
        },
        {
            imgURL: Frame3
        }
    ]


    const [stopTimeout, setStopTimeOut] = useState(true)

    let [x, setX] = useState(0)

    const dotNavigation = (id) => {
        setX(x = id * 100);
    }

    function handleSlides() {
        x === (NPACompData.length - 1) * 100 ? setX(0) : setX(x + 100)
    }

    function handleMouseEvents() {
        setStopTimeOut(prev => {
            return !prev
        })
    }

    let timeoutId;


    useEffect(() => {
        if (props.NavItems === 4 && stopTimeout) {

            // eslint-disable-next-line react-hooks/exhaustive-deps
            timeoutId = setTimeout(handleSlides, 4000);

        } else {
            clearTimeout(timeoutId)

        }
    }, [x, stopTimeout])


    return (
        <>
            <div className="news-paper-ads-comp-main-container">

                <div className="shape1-div"></div>
                <div className="slider-div">

                    <div className="slides-div">

                        {NPACompData.map((item, index) => {
                            return (
                                <>
                                    <div className="img-div"
                                        key={index.toString()}
                                        style={{
                                            // backgroundColor: item.color,
                                            transform: `translate(${-x}%)`

                                        }}><img src={item.imgURL} alt="" />

                                    </div>
                                </>
                            )
                        })}


                    </div>
                </div>
                <div className="dot-container">
                    {NPACompData.map((items, index) => {
                        return (<>
                            <div className="dot-button-div" key={index}
                                onMouseEnter={handleMouseEvents}
                                onMouseLeave={handleMouseEvents}

                            >
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