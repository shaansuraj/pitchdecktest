import React, { useState, useEffect } from "react";
import "./rscore-comp.scss";
import Card1Comp from "./Nasted-Comp/Card1-Comp/card1-comp";
import Card2Comp from "./Nasted-Comp/Card2-Comp/card2-comp";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ImageServer } from "../../img/imageServer";


const BackBTN = `${ImageServer}img/Pitch-Deck/fourth-comp-img/back-btn.png`;
const Logo = `${ImageServer}img/Pitch-Deck/fourth-comp-img/Frame-453.png`;
const RscoreFrame = `${ImageServer}img/Pitch-Deck/fourth-comp-img/iphone13.png`;
const Icon1 = `${ImageServer}img/Pitch-Deck/fourth-comp-img/icon1.png`;
const Icon2 = `${ImageServer}img/Pitch-Deck/fourth-comp-img/icon2.png`;
const Icon3 = `${ImageServer}img/Pitch-Deck/fourth-comp-img/icon3.png`;

const Frame = `${ImageServer}img/Pitch-Deck/fourth-comp-img/work-rscore-chart1.png`;

export default function RscoreComp(props) {

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])





    const [chartView, setChartView] = useState(false)

    function handleChartViewTrue() {
        setChartView(true)
    }
    function handleChartViewFalse() {
        setChartView(false)
    }


    const [phoneAmine, setPhoneAnime] = useState(false);
    const [hrLineVisibility, setHrLineVisibility] = useState(false);

    const [propertyOne, setPropertyOne] = useState(true);
    const [propertyTwo, setPropertyTwo] = useState(true);
    const [propertyThree, setPropertyThree] = useState(true);
    const [propertyFour, setPropertyFour] = useState(true);

    const [cardOne, setCardOne] = useState(false);
    const [cardTwo, setCardTwo] = useState(false);
    const [cardThree, setCardThree] = useState(false);
    const [cardFour, setCardFour] = useState(false);

    // const[isHover, setIsHover] =useState(false)

    function handleHover() {
        setTimeout(() => {
            setPhoneAnime(true)
        }, 200)

    }

    useEffect(() => {
        phoneAmine && setTimeout(() => {
            setHrLineVisibility(true)
        }, 1000)
    }, [phoneAmine])

    useEffect(() => {

        hrLineVisibility && setTimeout(() => { setCardOne(true) }, 1000)

        hrLineVisibility && setTimeout(() => { setCardTwo(true) }, 3500)

        hrLineVisibility && setTimeout(() => { setCardThree(true) }, 6000)

        hrLineVisibility && setTimeout(() => { setCardFour(true) }, 8500)


    }, [hrLineVisibility])
    useEffect(() => {
        cardOne && setTimeout(() => { setPropertyOne(false) }, 500)
    }, [cardOne])
    useEffect(() => {
        cardTwo && setTimeout(() => { setPropertyTwo(false) }, 500)
    }, [cardTwo])
    useEffect(() => {
        cardThree && setTimeout(() => { setPropertyThree(false) }, 500)
    }, [cardThree])
    useEffect(() => {
        cardFour && setTimeout(() => { setPropertyFour(false) }, 500)
    }, [cardFour])


    return (
        <>
            <div className="rscore-comp-main-container">
                <button className="back-btn">
                    <img src={BackBTN} alt=""
                        onClick={() => {
                            props.SetRscore(false)
                            props.HandleFrameVisibilityFalse()
                        }} />
                </button>

                <div className="chart-view-btn-div"
                    onClick={handleChartViewTrue}
                >
                    <p className="chart-view-btn"

                        style={{
                            animation:
                                !chartView && upDownEffect && "paraDown-keyframe 0.2s",

                        }}
                    >CHART VIEW</p>
                    <div className="tap-icon-div"
                        style={{
                            visibility: chartView && "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
                <div className="hidden-div-second"
                    onClick={handleChartViewFalse}
                    style={{
                        opacity: chartView ? "1" : "0",
                        zIndex: chartView ? "4" : "0"
                    }}
                >
                    <img src={Frame} alt="" />
                </div>

                <div className="hidden-div"
                    onMouseEnter={handleHover}
                ></div>
                <div className="left-part-div">
                    <div className="logo-div">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="content-div">
                        <div className="para-div">
                            <div className="list-div">
                                <span><img src={Icon1} alt="" /></span>
                                <p>Rscore is a patent pending AI based algorithm which helps a landlord mitigate risks while choosing a tenant.</p>
                            </div>
                            <div className="list-div">
                                <span><img src={Icon2} alt="" /></span>
                                <p>Derived in consideration of a tenant’s rental history.</p>
                            </div>
                            <div className="list-div">
                                <span><img src={Icon3} alt="" /></span>
                                <p>Works as a risk and reward platform. Higher the Rscore, lower the rent. Lower the Rscore, higher the rent.</p>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-para-div">
                        <div className="top-div">
                            <p>Watch Next Slide For Better<br /> Understanding Of Rscore</p>
                        </div>
                        <div className="bottom-div">
                            <div className="shape1-div"></div>
                            <div className="hr-div"></div>
                        </div>
                    </div>

                </div>

                <div className="right-part-div">
                    <div className="shape1-div"></div>
                    <div className="img-div">
                        <img src={RscoreFrame} alt=""
                            style={{
                                animation: phoneAmine && "rscoreImgKF 1s",
                                visibility: phoneAmine && "visible"
                            }}
                        />


                        {/* --------------------HR LINES---------------------- */}

                        <div className="hr-group1-div"
                            style={{
                                visibility: hrLineVisibility && "visible"
                                // visibility: hrLineVisibility ? "visible" : "hidden"

                            }}
                        >
                            <div className="hrline-1-div"
                                style={{
                                    borderLeft: !propertyOne && "3px solid #5CD348",
                                    borderBottom: !propertyOne && "3px solid #5CD348"
                                }}
                            ></div>
                            <div className="hrline-2-div"
                                style={{
                                    borderLeft: !propertyOne && "3px solid #5CD348",
                                    borderBottom: !propertyOne && "3px solid #5CD348"
                                }}
                            ></div>

                        </div>
                        <div className="hr-group2-div"
                            style={{
                                visibility: hrLineVisibility ? "visible" : "hidden"

                            }}
                        >
                            <div className="hrline-1-div"
                                style={{
                                    borderLeft: !propertyTwo && "3px solid #5CD348",
                                    borderBottom: !propertyTwo && "3px solid #5CD348"
                                }}
                            ></div>
                            <div className="hrline-2-div"
                                style={{
                                    borderRight: !propertyTwo && "3px solid #5CD348",
                                    borderBottom: !propertyTwo && "3px solid #5CD348"
                                }}
                            ></div>

                        </div>
                        <div className="hr-group3-div"
                            style={{
                                visibility: hrLineVisibility ? "visible" : "hidden"

                            }}
                        >
                            <div className="hrline-1-div"
                                style={{
                                    borderRight: !propertyThree && "3px solid #ff4d4d",
                                    borderBottom: !propertyThree && "3px solid #ff4d4d"
                                }}
                            ></div>
                            <div className="hrline-2-div"
                                style={{
                                    borderRight: !propertyThree && "3px solid #ff4d4d",
                                    borderBottom: !propertyThree && "3px solid #ff4d4d"
                                }}
                            ></div>

                        </div>
                        <div className="hr-group4-div"
                            style={{
                                visibility: hrLineVisibility ? "visible" : "hidden"

                            }}
                        >
                            <div className="hrline-div"
                                style={{
                                    borderTop: !propertyFour && "3px solid #ff4d4d",
                                    borderRight: !propertyFour && "3px solid #ff4d4d"
                                }}
                            ></div>
                        </div>
                        {/* -------------------------------------------------- */}

                        {/* -------------------------CARDS-------------------- */}
                        <div className="card1-div"
                            style={{
                                transform: !propertyOne && `scale(${1.2})`,
                                visibility: cardOne && "visible",
                                transition: cardOne && "1s"
                            }}
                        >
                            <Card1Comp
                                details1="ON TIME RENT PAYMENT"
                                details2="05/11/2022"
                                details3=""
                                details4="+08"

                            />
                        </div>
                        <div className="card2-div"
                            style={{
                                transform: !propertyTwo && `scale(${1.2})`,
                                visibility: cardTwo && "visible",
                                transition: cardTwo && "1s"
                            }}
                        >
                            <Card1Comp
                                details1="ELECTRICITY BILL"
                                details2="06/11/2022"
                                details3="( UTILITY )"
                                details4="+02"


                            />
                        </div>
                        <div className="card3-div"
                            style={{
                                transform: !propertyThree && `scale(${1.2})`,
                                visibility: cardThree && "visible",
                                transition: cardThree && "1s"
                            }}
                        >
                            <Card2Comp
                                details1="PENDING WATER BILL"
                                details2="06/11/2022"
                                details3="( UTILITY )"
                                details4="-02"
                                Property={propertyThree}


                            />
                        </div>
                        <div className="card4-div"
                            style={{
                                transform: !propertyFour && `scale(${1.2})`,
                                visibility: cardFour && "visible",
                                transition: cardFour && "1s"
                            }}
                        >
                            <Card2Comp
                                details1="DELAYED RENT PAYMENT"
                                details2="06/11/2022"
                                details3=""
                                details4="-04"
                                Property={propertyFour}


                            />

                        </div>



                        {/* -------------------------------------------------- */}

                    </div>
                    <div className="shape2-div"></div>

                </div>
            </div>
        </>
    );
}