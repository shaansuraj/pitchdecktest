import React, { useState, useEffect } from "react";
import "./progress-arrows.scss";
import { ImageServer } from "../../../img/imageServer";

import TouchAppIcon from '@mui/icons-material/TouchApp';


const Frame4 = `${ImageServer}img/Pitch-Deck/eight-comp-img/group497.png`;
const Frame5 = `${ImageServer}img/Pitch-Deck/eight-comp-img/group499.png`;
const Frame6 = `${ImageServer}img/Pitch-Deck/eight-comp-img/group500.png`;
const Frame1 = `${ImageServer}img/Pitch-Deck/eight-comp-img/frame506.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/eight-comp-img/frame507.png`;
const Frame3 = `${ImageServer}img/Pitch-Deck/eight-comp-img/frame672.png`;


export default function ProgressArrows(props) {

    const [infoVisibility, setInfoVisibility] = useState(false);
    const [itemID, setItemID] = useState(0)


    function handleHoverTrueEvent() {
        setInfoVisibility(true)
    }
    function handleHoverFalseEvent() {
        setInfoVisibility(false)
    }
    function handleItemID(id) {
        setItemID(id)
    }


    const [OnLoadEvent, setOnLoadEvent] = useState(true)

    function handleOnLoadEvent() {
        setOnLoadEvent(false)
    }

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])

    return (
        <>
            <div className="progress-arrows-main-container">
                <div className="info-hidden-div"
                    style={{
                        top: !infoVisibility && "200%",
                        transition: infoVisibility && "0.5s"
                    }}
                >
                    {
                        itemID === 1 ? <img src={Frame4} alt="" /> :
                            itemID === 2 ? <img src={Frame5} alt="" /> :
                                itemID === 3 && <img src={Frame6} alt="" />

                    }

                </div>
                <div className="img-div-one"
                    style={{
                        left: "0.5%"
                    }}
                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(1)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}

                >
                    <div className="content-div">
                        <p>CREATING<br /><span>BROKER<br /></span>NETWORK</p>
                        <div className="tap-icon-div"
                            onMouseEnter={handleOnLoadEvent}
                            style={{
                                visibility:  itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: OnLoadEvent && upDownEffect && "tapIconKeyFrame 0.2s"

                                }}
                            />
                        </div>
                    </div>
                    <img src={Frame1} alt="" />

                </div>
                <div className="img-div-two"
                    style={{
                        left: props.SlideLeft && "36%",
                        opacity: props.SlideLeft && "1"
                    }}

                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(2)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}
                >
                    <div className="content-div">
                        <p> BROKER <br />INCENTIVE<span>  STRATEGY</span> </p>
                        <div className="tap-icon-div"
                            onMouseEnter={handleOnLoadEvent}
                            style={{
                                visibility: itemID !== 2 && OnLoadEvent ? "visible" : "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: OnLoadEvent && upDownEffect && "tapIconKeyFrame 0.2s"

                                }}
                            />
                        </div>


                    </div>
                    <img src={Frame3} alt="" />

                </div>
                <div className="img-div-three"
                    style={{
                        left: props.SlideLeft && "71.5%",
                        opacity: props.SlideLeft && "1",
                        transitionDelay: props.SlideLeft && "1s"
                    }}

                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(3)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}
                >
                    <div className="content-div">
                        <p>ACTIVATE MARKETING <br /><span className="span2"> SWIPE. <span className="span1"> TAP. </span> RENT.</span> </p>
                        <div className="tap-icon-div"
                            onMouseEnter={handleOnLoadEvent}
                            style={{
                                visibility: itemID !== 3 && OnLoadEvent ? "visible" : "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: OnLoadEvent && upDownEffect && "tapIconKeyFrame 0.2s"

                                }}
                            />
                        </div>


                    </div>
                    <img src={Frame2} alt="" />

                </div>
            </div>
        </>
    )
}