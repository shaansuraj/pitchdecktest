import React from "react";
import "./info-card.scss";

export default function InfoCard(props) {

    return (
        <>
            <div className="info-card-main-container">
                <div className="left-part-div">
                    <div className="shape-div">
                        <div className="hr-div"></div>
                        <div className="circle-div"
                        style={{
                            backgroundColor: props.CircleColor
                        }}
                        ></div>
                    </div>

                </div>
                <div className="right-part-div">
                    <div className="census-heading-div">
                        <p>{props.CensusHeading}<br />
                            <span>
                                MARKET
                            </span>
                        </p>
                    </div>
                    <div className="census-calculation-div">
                        <p>{props.CalValueOne}
                            <span className="span1"> {props.CalValueEquation}</span>
                            <span className="span2"> {props.CalValueTwo}</span>
                        </p>
                    </div>
                    <div className="census-result-div">
                        <h1>{props.CensusResult}
                            <span> {props.ResultUnit}</span>
                        </h1>
                    </div>
                </div>

            </div>
        </>
    );
}