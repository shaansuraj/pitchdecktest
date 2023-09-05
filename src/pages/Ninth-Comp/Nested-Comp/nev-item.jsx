import React, { useState, useEffect } from "react";
import "./nev-item.scss";

export default function NevItem(props) {

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])

    return (
        <>
            <div className="nev-item-main-conainer">
                <hr
                    style={{
                        width: props.ItemID === props.id && "100%",
                        right: props.ItemID === props.id && "8%",
                        top: props.ItemID === props.id && "50%",
                        backgroundColor: props.ItemID === props.id && "#333333",
                        zIndex: props.ItemID === props.id && "-1",
                        animation: props.ItemID === props.id && "hr-line-keyframe 0.5s"

                    }}
                />
                <p
                    style={{
                        textShadow: props.ItemID === props.id && "1px 1px #333333",
                        fontWeight: props.ItemID === props.id && "500",
                        border: props.ItemID === props.id && "none",
                        height: props.ItemID === props.id && "100%",
                        animation:
                            props.NextItemID === props.id && upDownEffect && "paraDown-keyframe 0.2s" ,
                        
                    }}
                >{props.name}</p>

            </div>
        </>
    )
}