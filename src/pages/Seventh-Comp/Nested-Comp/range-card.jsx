import React from "react";
import "./range-card.scss";

export default function RangeCard(props) {
    return (
        <>
            <div className="range-card-main-container">
                <div className="top-part-div">
                    <div className="left-part-div">
                        <p>{props.mainDetail}<br />
                            <span>
                                {props.censusYear}
                            </span>
                        </p>
                    </div>
                    <div className="rigth-part-div">
                        <h1>{props.censusCount} <span>{props.censusUnit}</span></h1>
                    </div>
                </div>
                <div className="bottom-part-div">
                    <div className="main-div">
                        <div className="div1"
                        style={{
                            width: !props.ProgressBar && `${props.progressValue}%`
                        }}
                        ></div>
                        <div className="div2"
                        style={{
                            width: !props.ProgressBar && `${props.progressValue}%`                       
                        }}
                        ></div>
                        <div className="div3"
                        style={{
                            width: !props.ProgressBar && `${props.progressValue}%`                        
                        }}
                        ></div>
                    </div>

                </div>

            </div>
        </>
    )
}