import React, { useState,useEffect } from "react";
import "./comp-eight.scss";



const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/stack-cardboard-boxes-living-room.png";
const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/images/iPhone4.png";

export default function CompEight(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }
    useEffect(() => {
        props.HoverID === 8 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-eight-main-container"
                // onMouseEnter={handleMouseEvent}
                // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame} alt=""
                        style={{
                            left: isHover && "-5%"
                        }}
                    />
                    <div className="heading-div"
                        style={{
                            transform: isHover && `scale(${0.92})`,
                            top: isHover && "25%",
                            left: isHover && "10%",
                            transition: "0.8s"
                        }}
                    >
                        <h1><span>Move In</span><br />
                            Photos
                        </h1>
                    </div>
                    <img src={Phone1} alt="" className="phone1-img"/>
                    <img src={Phone1} alt="" className="phone2-img"
                    style={{
                        opacity: isHover && "1"
                        

                    }}
                    />

                </div>
            </div>

        </>
    )
}