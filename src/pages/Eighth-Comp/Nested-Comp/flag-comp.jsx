import React from "react";
import "./flag-comp.scss";
import { ImageServer } from "../../../img/imageServer";



const PanIndia = `${ImageServer}img/Pitch-Deck/eight-comp-img/Pan-India.png`;

export default function FlagComp(props) {

   
    return (
        <>
            <div className="flag-comp-main-container"
                // onMouseEnter={handleHover}
                // onMouseLeave={handleHover}
            >
                <div className="flag-div"

                >
                    <div className="vr-line-div">

                        <div className="shadow-div"></div>
                        <div className="white-ract-div"></div>
                    </div>
                    <div className="shape1-div">
                        <div className="ractangle-div"
                            // style={{ backgroundColor: props.IsHover === props.flagNumber && "#ff4f4f" }}
                        ></div>
                        <div className="arrow-right-div"
                            // style={{ borderLeft: props.IsHover === props.flagNumber && "55px solid #ff4f4f" }}

                        ></div>
                    </div>
                    <div className="shape2-div"

                    >
                        <div className="ractangle-div"
                            // style={{ backgroundColor: props.IsHover === props.flagNumber && "#ffffff" }}

                        ><p
                            // style={{ color: props.IsHover === props.flagNumber && "#ff4f4f" }}

                        >{props.date}</p></div>
                        <div className="arrow-right-div"
                            // style={{ borderLeft: props.IsHover === props.flagNumber && "40px solid #ffffff" }}

                        ></div>
                    </div>



                </div>
                <div className="rigth-div">
                    {/* ------------------------------------------------------------- */}
                    <div className="content-one-div"
                        style={{ visibility: props.flagNumber === 1 && "visible" }}
                    >
                        <h1 className="heading-1">Launch </h1>
                        <h1
                            className="heading-2"
                            style={{
                                // color: props.IsHover === 1 && "#1ad221",
                                // textTransform: props.IsHover === 1 && "uppercase",
                                // animation: props.IsHover === 1 && "blinkEffect 0.6s"
                            }}
                        > Gurgaon</h1>

                    </div>
                    {/* ------------------------------------------------------------- */}


                    {/* ------------------------------------------------------------- */}
                    <div className="content-two-div"
                        style={{ visibility: props.flagNumber === 2 && "visible" }}
                    >
                        <h1
                            style={{
                                // color: props.IsHover === 2 && "#1ad221",
                                // textTransform: props.IsHover === 2 && "uppercase",
                                // animation: props.IsHover === 2 && "blinkEffect 0.6s"


                            }}

                        >
                            Delhi NCR
                        </h1>
                    </div>
                    {/* ------------------------------------------------------------- */}


                    {/* ------------------------------------------------------------- */}
                    <div className="content-three-div"
                        style={{ visibility: props.flagNumber === 3 && "visible" }}
                    >
                        <h1>Tier 1<span> Cities</span></h1>
                        <p
                            style={{
                                // color: props.IsHover === 3 && "#1ad221",
                                // textTransform: props.IsHover === 3 && "uppercase",
                                // animation: props.IsHover === 3 && "blinkEffect 0.6s"

                            }}

                        >Mumbai, Bangalore, Pune, Chennai, Kolkata</p>
                    </div>
                    {/* ------------------------------------------------------------- */}


                    {/* ------------------------------------------------------------- */}
                    <div className="content-four-div"
                        style={{ visibility: props.flagNumber === 4 && "visible" }}
                    >
                        <h1
                            style={{
                                // color: props.IsHover === 4 && "#1ad221",
                                // textTransform: props.IsHover === 4 && "uppercase",
                                // animation: props.IsHover === 4 && "blinkEffect 0.6s"


                            }}

                        >Pan India</h1><span><img src={PanIndia} alt="" /></span>
                    </div>
                    {/* ------------------------------------------------------------- */}


                </div>

            </div>
        </>
    )
}