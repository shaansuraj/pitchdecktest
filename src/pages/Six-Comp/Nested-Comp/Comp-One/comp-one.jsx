import React, { useState, useEffect } from "react";
import "./comp-one.scss";



const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone1.png";
const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/phone2.png";
const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/real-estate-agent-holding-house-key.png";

export default function CompOne(props) {
    const [isHover, setIsHover] = useState(true);



    function handleMouseHoverEvent() {
        setIsHover(prev => { return !prev })
    }
    useEffect(() => {
        props.HoverID === 1 && setTimeout(handleMouseHoverEvent, 200)
    }, [props.HoverID])

    return (
        <>
            <div className="comp-one-main-container">
                <div className="content-container">
                    <img className="bg-img" src={Frame1} alt=""
                    // onMouseEnter={handleMouseHoverEvent}
                    // onMouseLeave={handleMouseHoverEvent}
                    />
                    <div className="phones-div">
                        <img className="phone1-img" src={Phone1} alt=""
                            style={{
                                transform: !isHover && `scale(1.2) translate(-26%, -12%)`,

                            }}
                        />
                        <img className="phone2-img" src={Phone2} alt=""
                            style={{
                                transform: !isHover && `scale(${1.2}) translate(26%, -18%)`,
                                
                            }}
                        />

                    </div>

                </div>

            </div>
        </>
    )
}