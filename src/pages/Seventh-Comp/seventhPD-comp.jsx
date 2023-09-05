import React, { useState } from "react";
import "./seventhPD-comp.scss";
import RangeCard from "./Nested-Comp/range-card";
import ProgressCircle from "./Nested-Comp/progress-circle";
import InfoCard from "./Nested-Comp/info-card";



export default function SeventhPDComp() {
    const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventh-comp-img/frame-451.png";
    const Logo = "https://rentblob.blob.core.windows.net/pitch/img/logo.svg";

    // const [censusPopup, setCensusPopup] = useState(false);


    const [progressBar, setProgressBar] = useState(true)

    function handleMouseEvents() {
        setProgressBar(false)
    }

    // useEffect(() => {
    //     !progressBar && setTimeout(() => {
    //         setCensusPopup(true)
    //     }, 1600)
    // }, [progressBar])


    return (
        <>
            <div className="seventhPD-comp-main-container">
                <div className="hover-hidden-div"
                    onMouseEnter={handleMouseEvents}
                    onMouseLeave={handleMouseEvents}
                ></div>
                <img className="bg-img" src={Frame1} alt="" />

                <div className="left-div">
                    <div className="top-div">
                        <h3><span> Market Scope</span> (Residential)</h3>
                        <h4>Nearly 30% of people in urban
                            <span> INDIA </span>
                            on<span> RENT.</span>
                        </h4>
                    </div>
                    <div className="bottom-div">
                        <RangeCard
                            mainDetail="Composition of rented households."
                            censusYear="( 2011 census )"
                            censusCount="21.0"
                            censusUnit="M"
                            progressValue="75"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="YOY demand in rental housing growth."
                            censusYear=""
                            censusCount="6.7"
                            censusUnit="%"
                            progressValue="65"
                            ProgressBar={progressBar}
                        />
                         <RangeCard
                            mainDetail="Adjusted According To YOY Growth."
                            censusYear="2023"
                            censusCount="45.7"
                            censusUnit="M"
                            progressValue="80"
                            ProgressBar={progressBar}
                        />
                        <RangeCard
                            mainDetail="YOY Online listings growth."
                            censusYear=""
                            censusCount="101.5"
                            censusUnit="%"
                            progressValue="80"
                            ProgressBar={progressBar}
                        />
                        
                    </div>
                    <div className="blank-div"></div>


                </div>
                <div className="right-div">

                    <div className="left-part">
                        <div className="progress-circle-div">
                            <ProgressCircle
                                ProgressBar={progressBar}
                            />
                        </div>
                    </div>
                    <div className="right-part">
                        {/* <div className="census-year-div">
                            <p
                                style={{
                                    transform: censusPopup && `scale(${2})`,
                                    opacity: censusPopup ? "1" : "0",
                                    transition: "0.5s"
                                }}
                            ><span>( 2011</span> CENSUS )</p>
                        </div> */}
                        <div className="logo-div">
                            <img src={Logo} alt="" />
                        </div>

                        <div className="info-div"
                            style={{
                                animation: !progressBar && "infoCardsAnime 1.2s",
                                opacity: !progressBar && "1"
                            }}
                        >
                            <div className="info-card1-div">
                                <InfoCard
                                    CensusHeading="TOTAL AVAILABLE"
                                    CalValueOne="45.7 M."
                                    CalValueTwo="1500"
                                    CalValueEquation="x"
                                    CensusResult="6,859.3"
                                    ResultUnit="Cr/year"
                                    CircleColor="#FF6812"
                                />
                            </div>
                            <div className="info-card2-div">
                                <InfoCard
                                    CensusHeading="SERVICEABLE AVAILABLE"
                                    CalValueOne="13.7 M."
                                    CalValueTwo="30%"
                                    CalValueEquation="x"
                                    CensusResult="2,057.8"
                                    ResultUnit="Cr/year"
                                    CircleColor="#333333"
                                />
                            </div>
                            <div className="info-card3-div">
                                <InfoCard
                                    CensusHeading="SERVICEABLE OBTAINABLE"
                                    CalValueOne="4.11 M."
                                    CalValueTwo="30%"
                                    CalValueEquation="x"
                                    CensusResult="617.34"
                                    ResultUnit="Cr/year"
                                    CircleColor="#FF1212"
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}