import React, { useState, useEffect } from "react";
import "./comp-four.scss";
const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame499.png";
const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone6.png";
const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone7.png";


export default function CompFour(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 4 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-four-main-container"
            // onMouseEnter={handleMouseEvent}
            // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame} alt="" />
                    <div className="heading-div">
                        <h1>Select your<br />
                            <span>Preferred Tenant</span>
                        </h1>
                    </div>
                </div>
                <div className="phone2--mg-div"
                    style={{
                        transform: isHover && `scale(1.3) translate(11%, -10%)`,
                        transition: "0.8s"

                    }}
                >

                    <img src={Phone2} alt="" className="phone2-img" />
                </div>
                <img src={Phone1} alt="" className="phone1-img" />
            </div>


        </>
    )
}