import React from "react";
import "./card2-comp.scss";

export default function Card2Comp(props) {
    return (
        <>
            <div className="card2-comp-main-container"
                style={{ backgroundColor: !props.PropertyThree && "#ff4d4d" }}
            >
                <div className="circle-div"
                    style={{ backgroundColor: !props.PropertyThree && "#333333" }}

                >
                    <div className="check-mark-div"></div>
                </div>
                <h4
                    style={{ 
                        color: !props.Property && "#ffffff",

                    }}

                >{props.details1}<br /><span className="span1"
                    style={{ 
                        color: !props.Property && "#ffffff",

                    }}

                >{props.details2}</span><span className="span2"
                    style={{ 
                        color: !props.Property && "#ffffff",

                    }}

                >{props.details3}</span></h4>
                <h1
                    style={{ color: !props.Property && "#ffffff" }}

                >{props.details4}</h1>

            </div>
        </>
    );
}