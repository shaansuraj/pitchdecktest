import React from "react";
import "./dot-buttons.scss";

export default function DotButton(props) {

    const X = (props.currentItemId / 100);



    return (
        <>
            <button
                className="dotButton"
                style={{
                    backgroundColor: X === props.itemId && "#FF4D4D",
                    transform: X === props.itemId && `scale(${1.5})`,
                    boxShadow: X === props.itemId && "0px 2px 2px grey",
                    transition: "0.5s"
                }}
                onClick={() => {
                    props.handleDotNav(props.itemId);
                }}
               

            ></button>
        </>
    );
}