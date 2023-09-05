import React from "react";
import "./progress-circle.scss";



export default function ProgressCircle(props) {
    const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventh-comp-img/frame-452.png";
    const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventh-comp-img/frame-453.png";
    const Frame3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventh-comp-img/frame-454.png";


    return (
        <>
            <div className="progress-circle-main-container">

                <div className="circle-img-div1">
                    <img src={Frame3} alt=""
                        style={{
                            transform: !props.ProgressBar && `scale(${2.52})`,
                            bottom: !props.ProgressBar && "18.4%",
                            right: !props.ProgressBar && "-16%",
                            transition: !props.ProgressBar && "0.9s"

                        }}
                    />
                    <h1
                        style={{
                            bottom: !props.ProgressBar && "82%",
                            right: !props.ProgressBar && "10%",
                            transition: !props.ProgressBar && "0.9s"


                        }}
                    >TAM</h1>


                </div>
                <div className="circle-img-div2">
                    <img src={Frame1} alt=""
                        style={{
                            transform: !props.ProgressBar && `scale(${1.95})`,
                            bottom: !props.ProgressBar && "8.6%",
                            right: !props.ProgressBar && "-20%",
                            transition: !props.ProgressBar && "0.9s"

                        }}
                    />
                    <h1
                        style={{
                            bottom: !props.ProgressBar && "62%",
                            right: !props.ProgressBar && "10%",
                            transition: !props.ProgressBar && "0.9s"


                        }}
                    >SAM</h1>


                </div>
                <div className="circle-img-div3">
                    <img src={Frame2} alt=""
                        style={{
                            transform: !props.ProgressBar && `scale(${1.45})`,
                            bottom: !props.ProgressBar && "-1.6%",
                            right: !props.ProgressBar && "-22%",
                            transition: !props.ProgressBar && "0.9s"

                        }}
                    />
                    <h1
                        style={{
                            bottom: !props.ProgressBar && "28%",
                            right: !props.ProgressBar && "10%",
                            transition: !props.ProgressBar && "0.9s"


                        }}
                    >SOM</h1>

                </div>


            </div>
        </>
    );
}