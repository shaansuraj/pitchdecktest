import React, { useState, useEffect } from "react";
import "./fourteenPD-comp.scss";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ImageServer } from "../../img/imageServer";



const BGFrame = `${ImageServer}img/Pitch-Deck/fourteenth-comp-img/Property-1-MacBook-Pro-14.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/fourteenth-comp-img/frame605.png`;
const Frame3 = `${ImageServer}img/Pitch-Deck/fourteenth-comp-img/frame508.png`;
const Instagram = `${ImageServer}img/blogs-img/linkedin-icon.png`;
// const Frame = `${ImageServer}img/Pitch-Deck/fourteenth-comp-img/component70.png`;

export default function FourteenPDComp() {

    const [detailsHover, setDetailsHover] = useState(false)

    const [itemID, setItemID] = useState(0)

    function handleHoverTrueEvent() {
        setStopEffectOnHover(false)
        setDetailsHover(true)
    }
    function handleHoverFalseEvent() {
        setDetailsHover(false)
    }

    function handleItemID(id) {
        setItemID(id)
    }

    const [stopEffectOnHover, setStopEffectOnHover] = useState(true)
    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])


    // teamText-keyframe

    return (
        <>
            <div className="fourteenPD-comp-main-container">
                <div className="details-hover-div"
                    style={{
                        display: detailsHover ? "block" : "none"
                    }}
                >
                    {
                        itemID === 1 ? <img className="team-img" src={Frame2} alt="" /> :
                            itemID === 2 && <img className="team-img" src={Frame3} alt="" />

                    }

                </div>
                <img className="bg-img" src={BGFrame} alt="" />
                <div className="heading-div">
                    <div className="shape-div"></div>
                    <h1>
                        MEET OUR<span> TEAM</span>
                    </h1>

                    <div className="hr-line-div"></div>
                </div>
                <div className="linked-in-img-div1">
                    <a href="https://www.linkedin.com/in/ishrat-gupta-rentainance/" target="_blank"rel='noreferrer'><img src={Instagram} alt="" /></a>
                </div>
                <div className="linked-in-img-div2">

                    <a href="https://www.linkedin.com/in/devanshu-pasari-931951241/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
                </div>
                <div className="linked-in-img-div3">

                    <a href="https://www.linkedin.com/in/nimain-c-1230a918/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
                </div>






                <div className="tech-team-div"
                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(1)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}
                >
                    <div className="name-heading">
                        <span className="bullet-point"></span>
                        <h2
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >TECH <span>TEAM</span>
                        </h2><h1
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >11</h1>
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemID === 1 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-keyframe 0.2s"

                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="non-tech-team-div"
                    onMouseEnter={() => {
                        handleHoverTrueEvent()
                        handleItemID(2)
                    }}
                    onMouseLeave={() => {
                        handleHoverFalseEvent()
                        handleItemID(0)
                    }}
                >
                    <div className="name-heading">
                        <span className="bullet-point"></span>
                        <h2
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >NON-TECH <span>TEAM</span>
                        </h2><h1
                            style={{
                                animation: stopEffectOnHover && upDownEffect && "teamText-keyframe 0.2s"
                            }}
                        >8</h1>
                        <div className="tap-icon-div"
                            style={{
                                visibility: itemID === 2 && "hidden"
                            }}
                        >
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-keyframe 0.2s"

                                }}
                            />
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}