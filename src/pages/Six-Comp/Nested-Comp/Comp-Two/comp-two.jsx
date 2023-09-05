import React, { useState, useEffect } from "react";
import "./comp-two.scss";


const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone3.png";
const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone4.png";
const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame1-part1.png";
const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame1-part2.png";
const Frame3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame1-part3.png";
const Frame4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame1-part4.png";
const Frame5 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame1-part5.png";
const Frame6 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame1-part6.png";

export default function CompTwo(props) {

    const [frameAnime, setFrameAnime] = useState(true)

    function handleMouseEvent() {
        setFrameAnime(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 2 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-two-main-container"
                // onMouseEnter={handleMouseEvent}
                // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">

                    <div className="frame-div">
                        <img className="frame-part1-img" src={Frame1} alt=""
                            style={{

                            }} />
                        <img className="frame-part2-img" src={Frame2} alt=""
                            style={{

                                transform: !frameAnime && `rotate(${15}deg)`,
                                top: !frameAnime && "20%"
                            }} />
                        <img className="frame-part3-img" src={Frame3} alt=""
                            style={{
                                left: !frameAnime && "66%"

                            }} />
                        <img className="frame-part4-img" src={Frame4} alt=""
                            style={{
                                top: !frameAnime && "28%"

                            }} />
                        <img className="frame-part5-img" src={Frame5} alt=""
                            style={{
                                left: !frameAnime && "64%"


                            }} />
                        <img className="frame-part6-img" src={Frame6} alt=""
                            style={{
                                top: !frameAnime && "30%",
                                left: !frameAnime && "45%"

                            }} />
                    </div>

                    <div className="heading-div"

                        style={{
                            top: !frameAnime && "18%",
                            left: !frameAnime && "10%",
                            transition: "0.8s"

                        }}
                    >
                        <p>Share properties according to</p>
                        <h1>Tenant
                            <span>'s Preferences.</span>
                        </h1>
                    </div>
                    <div className="phones-div"
                        style={{
                            bottom: !frameAnime && "4%",
                            transition: "0.8s"
                        }}
                    >
                        <img className="phone1" src={Phone1} alt=""
                            style={{
                                transform: !frameAnime && `scale(${0.90})`,
                                left: !frameAnime && "-1%",
                                top: !frameAnime && "12%",
                                transition: "1s"
                            }}
                        />
                        <img className="phone2" src={Phone2} alt=""
                            style={{
                                transform: !frameAnime && `scale(${0.74})`,
                                left: !frameAnime && "26.5%",
                                top: !frameAnime && "-18%",
                                transition: "0.8s"
                            }}
                        />

                    </div>

                </div>

            </div>

        </>
    )
}