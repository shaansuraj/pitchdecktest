import React, { useState, useEffect } from "react";
import "./profiling-card.scss";



const Shape1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/shape1.png";
const Shape2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/shape2.png";
const MockUp = "https://rentblob.blob.core.windows.net/pitch/img/profiling-img/mock-up.png";
const Screen = "https://rentblob.blob.core.windows.net/pitch/img/profiling-img/phone-screen.png";

export default function ProfilingCard(props) {

    let [Y, setY] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            /* eslint-disable */
            Y === 70 ? setY(Y = 0) : setY(Y = 70);
        }, 1000)

    }, [props.HiddenHoverDiv])


    setTimeout(() => {
        Y === 70 ? setY(Y = 0) : setY(Y = 70);
    }, 20000)


    return (
        <>
            <div className="profiling-card-main-container"
                style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                <div className="left-part">
                    <div className="shape1-div">
                        <img src={Shape1} alt="" />
                    </div>
                    <div className="headings-div">
                        <h1>
                            BENEFITS OF<br />
                            <span className="span1">COMPLETING</span><br />
                            <span className="span2">YOUR PROFILE</span>
                        </h1>
                    </div>
                    <div className="property-list-div">
                        <ul>
                            <li><span></span>Detailed overview of tenant profiles and properties.</li>
                            <li><span></span>Legal verification of tenants.</li>
                            <li><span></span>Find top-rated brokers based on reviews.</li>
                            <li><span></span>Handy application form.</li>

                        </ul>
                    </div>
                </div>

                <div className="right-part">
                    <div className="shape2-div">
                        <img src={Shape2} alt="" />
                    </div>
                    <div className="phone-mockup-div">
                        <img src={MockUp} alt="" />
                        <div className="screen-div">
                            <img src={Screen} alt=""
                                style={{
                                    transform: `translateY(${-Y}%)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}