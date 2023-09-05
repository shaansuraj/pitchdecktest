import React, { useState,useEffect } from "react";
import "./comp-five.scss";

const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame500.png";
const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone8.png";
const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone9.png";


export default function CompFive(props) {

    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 5 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])


    return (
        <>
            <div className="comp-five-main-container"
                // onMouseEnter={handleMouseEvent}
                // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame} alt=""
                        style={{
                            left: isHover && "-20%"
                        }}
                    />
                    <div className="heading-div"
                        style={{
                            transform: isHover && `scale(${0.82})`,
                            top: isHover && "15%",
                            left: isHover && "18%",
                            transition: "0.8s"
                        }}
                    >
                        <h1>KYC<br />
                            <span>VERIFICATION</span>
                        </h1>
                    </div>
                    <img src={Phone1} alt="" className="phone2-img"
                        style={{
                            transform: isHover && `scale(1.6) translate(-24%, -14%)`,
                            transition: "0.8s"
                        }}
                    />
                    <img src={Phone2} alt="" className="phone1-img"
                        style={{
                            transform: isHover && `scale(1.6) translate(-45%, -14%)`,
                            transition: "0.8s"
                        }}
                    />
                </div>
            </div>
        </>
    )
}