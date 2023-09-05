import React, { useState, useEffect } from "react";
import "./comp-three.scss";

const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame498.png";
const Phone = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone5.png";


export default function CompThree(props) {

    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }


    useEffect(() => {
        props.HoverID === 3 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-three-main-container"
                // onMouseEnter={handleMouseEvent}
                // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame1} alt=""
                        // isHover
                        style={{
                            transform: isHover && `scale(${1.2})`,
                            transition: "0.8s"
                        }}

                    />
                    <img className="phone-img" src={Phone} alt=""

                        style={{
                            transform: isHover && `scale(${1.4})`,
                            top: isHover && "58%",
                            left: isHover && "48%",
                            transition: "0.8s"
                        }}
                    />
                    <div className="heading-div"
                        style={{
                            left: isHover && "30%",
                            top: isHover && "22%",
                            transition: "0.8s"

                        }}
                    >
                        <h1
                            style={{
                                transform: isHover && `scale(${1.3})`,
                                transition: "0.8s"

                            }}
                        ><span className="span1">Choose your</span><br />
                            <span className="span2">Favourite Property</span>
                        </h1>
                    </div>
                </div>
            </div>


        </>
    )
}