import React, { useState, useEffect } from "react";
import "./comp-nine.scss";



const Frame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/hand-holding-house-real-estate-property-model.png";
const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/images/iPhone3.png";
const Phone3 = "https://rentblob.blob.core.windows.net/pitch/img/images/iPhone2.png";
const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/images/iPhone1.png";
export default function CompNine(props) {
    const [isHover, setHover] = useState(false)

    function handleMouseEvent() {
        setHover(prev => { return !prev })
    }

    useEffect(() => {
        props.HoverID === 9 && setTimeout(handleMouseEvent, 200)
    }, [props.HoverID])


    return (
        <>
            <div className="comp-nine-main-container"
            // onMouseEnter={handleMouseEvent}
            // onMouseLeave={handleMouseEvent}
            >
                <div className="content-container">
                    <img className="bg-img" src={Frame} alt=""
                        style={{
                            height: isHover && "180%",
                            width: isHover && "120%",
                            left: isHover && "0%"
                        }}
                    />
                    <div className="para1-div"
                        style={{
                            top: isHover && "10%"
                        }}
                    >
                        <p>Tenant, Landlord & Broker</p>
                    </div>
                    <div className="para2-div"
                        style={{
                            top: isHover && "13%",
                            left: isHover && "50%"
                        }}
                    >
                        <p
                            style={{
                                transform: isHover && `scale(${1.2})`
                            }}
                        >Dashboard</p>
                    </div>

                    <img src={Phone1} alt="" className="phone1-img"
                        style={{
                            transform: isHover && `scale(1.3) translate(-12%, -12%)`,
                        }}
                    />
                    <img src={Phone2} alt="" className="phone2-img"
                        style={{
                            transform: isHover && `scale(1.46) translate(-36%, -16%)`,
                        }}
                    />
                    <img src={Phone3} alt="" className="phone3-img"
                        style={{
                            transform: isHover && `scale(1.63) translate(-68%, -20%)`,
                        }}
                    />

                </div>
            </div>

        </>
    )
}