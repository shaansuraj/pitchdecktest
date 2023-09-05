import React from "react";
import "./card1-comp.scss";

export default function Card1Comp(props) {
    return (
        <>
            <div className="card1-comp-main-container" >

                <div className="circle-div">
                    <div className="check-mark-div"></div>
                </div>
                <h4>{props.details1}<br /><span className="span1">{props.details2}</span><span className="span2">{props.details3}</span></h4>
                <h1>{props.details4}</h1>
        
            </div>
        </>
    );
}