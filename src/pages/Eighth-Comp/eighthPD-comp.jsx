import React, { useState } from "react";
import "./eighthPD-comp.scss";
import ProgressArrows from "./Nested-Comp/progress-arrows";
import FlagComp from "./Nested-Comp/flag-comp";
import { ImageServer } from "../../img/imageServer";



const BGFrame = `${ImageServer}img/Pitch-Deck/eight-comp-img/frame508.png`;
const BGShape1 = `${ImageServer}img/Pitch-Deck/eight-comp-img/vector481.png`;
const BGShape2 = `${ImageServer}img/Pitch-Deck/eight-comp-img/vector480.png`;



export default function EighthPDComp() {


    const [slideLeft, setSlideLeft] = useState(false);
    const [isHover, setIsHover] = useState(0)

    function handleHover(id) {
        setIsHover(id)
    }


    function handleAnimation() {
        setSlideLeft(true)
    }

    return (
        <>
            <div className="eighthPD-comp-main-container">
                <div className="hover-div"
                onMouseEnter={handleAnimation}
                style={{
                    zIndex: slideLeft ? "0" : "1"
                }}
                ></div>
                <div className="top-part-div">
                    <div className="shape1-div"></div>
                    <div className="bg-shape2-div">
                        <img src={BGShape2} alt="" />
                    </div>
                    <div className="heading-div">
                        <h1>Go To Market</h1>
                    </div>

                </div>
                <div className="middle-part-div">
                    <div className="middle-container">

                        <div className="left-div">
                            <h1>Launch <br /><span>Strategy</span></h1>
                            <span className="question-mark">?</span>
                        </div>
                        <div className="right-div">
                            <ProgressArrows 
                            SlideLeft={slideLeft}
                            />
                        </div>

                    </div>
                </div>
                <div className="bottom-part-div">
                    {/* <div className="hr-line-div"></div> */}
                    <div className="bg-img-div">
                        <img src={BGFrame} alt="" />
                    </div>
                    <div className="bg-shape-div">
                        <img src={BGShape1} alt="" />
                    </div>
                    <div className="flag1-comp-div"
                        onMouseEnter={() => { handleHover(1) }}
                        onMouseLeave={() => { handleHover(0) }}
                        style={{
                            // transform: isHover === 1 && `scale(${1.2})`,
                            // marginBottom: isHover === 1 && "2.7%",
                            // marginLeft: isHover === 1 && "2.4%"
                        }}

                    >
                        <FlagComp
                            date="1st Feb"
                            flagNumber={1}
                            IsHover={isHover}
                        />
                    </div>
                    <div className="flag2-comp-div"
                        onMouseEnter={() => { handleHover(2) }}
                        onMouseLeave={() => { handleHover(0) }}
                        style={{
                            // transform: isHover === 2 && `scale(${1.2})`,
                            // marginBottom: isHover === 2 && "2.7%",
                            // marginLeft: isHover === 2 && "2.4%"
                        }}

                    >
                        <FlagComp
                            date="3 Months Later"
                            flagNumber={2}
                            IsHover={isHover}
                        />
                    </div>
                    <div className="flag3-comp-div"
                        onMouseEnter={() => { handleHover(3) }}
                        onMouseLeave={() => { handleHover(0) }}
                        style={{
                            // transform: isHover === 3 && `scale(${1.2})`,
                            // marginBottom: isHover === 3 && "2.7%",
                            // marginLeft: isHover === 3 && "2.4%"
                        }}

                    >
                        <FlagComp
                            date="6 Months Later"
                            flagNumber={3}
                            IsHover={isHover}
                        />
                    </div>
                    <div className="flag4-comp-div"
                        onMouseEnter={() => { handleHover(4) }}
                        onMouseLeave={() => { handleHover(0) }}
                        style={{
                            // transform: isHover === 4 && `scale(${1.2})`,
                            // marginBottom: isHover === 4 && "2.7%",
                            // marginLeft: isHover === 4 && "2.4%"
                        }}

                    >
                        <FlagComp
                            date="9 Months Later"
                            flagNumber={4}
                            IsHover={isHover}
                        />
                    </div>


                </div >


            </div >
        </>
    )
}