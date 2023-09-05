import "./seventeenth-comp.scss";
import React, { useState, useEffect } from "react";
import TouchAppIcon from '@mui/icons-material/TouchApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

// ImageServer

const BGFrame = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame623.png";
const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame618.png";
const Frame3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame619.png";
const Frame4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame629.png";
const Frame5 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame628.png";
const group1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/group545.png";
const Icon1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/family-icon.png";
const Icon2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/no-alcohol-icon.png";
const Icon3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/no-smoking-icon.png";
const Icon4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/non-veg-icon.png";
const Frame6 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame544.png";
const Logo2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/seventeenth-comp-img/frame637.png";


export default function SeventeenthComp() {
    // const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/rentLogo.png";

    const [moreBtnAnimation, setMoreBtnAnimation] = useState(0);
    const [tenantView, setTenantView] = useState(false);
    const [landlordView, setLandlordView] = useState(false)
    const [upDownEffect, setUpDownEffect] = useState(false);
    const [moreBtnPopup, setMoreBtnPopup] = useState(false)
    const [RscoreMonetizationVisibility, setRscoreMonetizationVisibility] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])


    function handleTenantView() {
        setTenantView(true)
    }
    function handleLandlordView() {

        setLandlordView(true)
    }


    useEffect(() => {
        moreBtnAnimation === 0 && setTimeout(() => {
            setMoreBtnAnimation(1);
        }, 500)
    }, [moreBtnAnimation])
    useEffect(() => {
        moreBtnAnimation === 1 && setTimeout(() => {
            setMoreBtnAnimation(2);
        }, 450)
    }, [moreBtnAnimation])
    useEffect(() => {
        moreBtnAnimation === 2 && setTimeout(() => {
            setMoreBtnAnimation(3);
        }, 400)
    }, [moreBtnAnimation])
    useEffect(() => {
        moreBtnAnimation === 3 && setTimeout(() => {
            setMoreBtnAnimation(0);
        }, 1500)
    }, [moreBtnAnimation])

    function handleMOreBtnPopupTrue() {
        setMoreBtnPopup(true)
    }
    function handleRSoreMonetizatioVisibility() {
        setRscoreMonetizationVisibility(true)
    }
    function hiddenContentPopup() {
        setMoreBtnPopup(false)
        setRscoreMonetizationVisibility(false)
    }

    function manageDashbordDetails() {
        if (tenantView) {
            setTenantView(false)
            setLandlordView(true)

        }
        else if (landlordView) {
            setLandlordView(false)
            setTenantView(true)


        }
    }


    return (
        <>
            <div className="seventeenth-comp-main-container">
                <div
                    className="hidden-details-contents-div"
                    onClick={hiddenContentPopup}
                    style={{
                        visibility: moreBtnPopup || RscoreMonetizationVisibility ? "visible" : "hidden"
                    }}
                >
                    {
                        moreBtnPopup ? <img src={group1} alt="" /> :
                            RscoreMonetizationVisibility && <img src={Frame6} alt="" />
                    }

                    <CloseRoundedIcon className="cross-icon" onClick={hiddenContentPopup} />

                </div>
                <div className="tenant-data-hidden-div"
                    style={{
                        display: !tenantView ? "none" : "block"
                    }}
                    onClick={() => {
                        setTenantView(false);
                    }}
                >

                </div>
                <div className="landlord-data-hidden-div"
                    style={{
                        display: !landlordView ? "none" : "block"
                    }}
                    onClick={() => {
                        setLandlordView(false);
                    }}
                >

                </div>

                <div className="top-heading-div">
                    <div className="rscore-monetization-div"
                        onClick={handleRSoreMonetizatioVisibility}

                        style={{
                            // opacity: tenantView ? "0" : landlordView && "0",
                            transition: !tenantView ? "0.4s" : !landlordView && "0.4s",
                            animation: moreBtnAnimation === 3 && 'moreButtonAnim3 0.6s',

                        }}>
                        <img src={Logo2} alt="" />

                    </div>
                    <div className="middle-heading-div">
                        <h1
                            className="heading-before"
                            style={{
                                opacity: tenantView ? "0" : landlordView && "0"
                            }}
                        >
                            <span className="span1">with this kind of data</span>
                            <span className="span2"> Monetization </span>
                            <span className="span3">possibilities are endless</span>
                        </h1>
                        <h1
                            className="heading-after"
                            style={{
                                opacity: tenantView ? "1" : landlordView && "1",
                                top: tenantView ? "20%" : landlordView && "20%",
                                left: tenantView ? "0%" : landlordView && "0%"
                            }}
                        >
                            <span className="span1">with this kind of data</span>
                            <span className="span2"> Monetization </span>
                            <span className="span3">possibilities are endless</span>
                        </h1>

                    </div>
                    <div className="more-details-btn"
                        onClick={handleMOreBtnPopupTrue}
                        style={{
                            opacity: tenantView ? "0" : landlordView && "0",
                            animation: moreBtnAnimation === 1 ? 'moreButtonAnim1 0.4s' :
                                moreBtnAnimation === 2 ? 'moreButtonAnim2 0.4s' :
                                    moreBtnAnimation === 3 && 'moreButtonAnim3 0.6s',

                        }}
                    >MORE DETAILS</div>
                    <div className="view-dashboard-btn"
                        onClick={manageDashbordDetails}
                        style={{
                            opacity: tenantView ? "1" : landlordView && "1",
                            zIndex: tenantView ? "2" : landlordView && "2",
                        }}
                    ><span></span>VIEW {tenantView ? "LANDLORD'S" : landlordView && "TENANT'S"} DASHBOARD</div>
                </div>
                <div className="bottom-part-div">
                    <img className="bg-img" src={BGFrame} alt="" />
                    <div className="dashbord-name-div"

                        style={{
                            top: tenantView ? "5%" : landlordView && "0%",
                            opacity: tenantView ? "1" : landlordView && "1",
                            transition: tenantView ? "0.4s" : landlordView && "0.4s",

                        }}>
                        {tenantView && <p>{"TENANT"} DASHBORD</p>}
                        {landlordView && <p>{"LANDLORD"} DASHBORD</p>}

                    </div>


                    {/* -------------------------------------------------------------------- */}

                    <div className="tenant-data-div"
                        style={{
                            transform: tenantView && `translate(12%, -10%) scale(1.15) `,
                            bottom: landlordView && "-120%",
                        }}

                    >
                        <div className="top-div">
                            <p>TENANT'S{" "}
                                <span>
                                    DATA
                                </span>
                            </p>
                            <div className="toggle-div" >
                                <div className="toggle-circle"></div>
                            </div>
                        </div>
                        <img src={Frame2} alt="" />
                        <div className="view-btn"
                            onClick={handleTenantView}
                            style={{
                                animation: moreBtnAnimation === 3 && 'viewButtonAnim1 0.4s',

                            }}
                        >
                            <p>VIEW</p>
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-KeyFrame 0.2s",
                                    opacity: tenantView && "0",

                                }}
                            />
                        </div>
                    </div>
                    <div className="tenant-content-div"
                        style={{
                            opacity: !landlordView && "0",
                            zIndex: landlordView ? "2" : "0"

                        }}
                    >
                        <div className="content-img-div">
                            <img className="landlord-content-img" src={Frame5} alt="" />

                        </div>
                        <div className="cross-btn"
                            onClick={() => {
                                setLandlordView(false)
                            }}
                        >
                            &#x2715;
                        </div>
                    </div>
                    <div className="landlord-content-div"
                        style={{
                            opacity: !tenantView && "0",
                            zIndex: tenantView ? "2" : "0"
                        }}
                    >
                        <div className="content-img-div">
                            <img src={Frame4} alt="" />

                        </div>
                        <div className="cross-btn"
                            onClick={() => {
                                setTenantView(false)
                            }}
                        >
                            &#x2715;
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------- */}
                    <div className="landlord-data-div"
                        style={{
                            bottom: tenantView && "-120%",
                            transform: landlordView && `scale(0.85) translate(0, -9%)`,
                        }}
                    >
                        <img src={Frame3} alt="" />

                        <div className="view-btn"
                            onClick={handleLandlordView}
                            style={{
                                animation: moreBtnAnimation === 3 && 'viewButtonAnim2 0.4s',

                            }}
                        >
                            <p>VIEW</p>
                            <TouchAppIcon className="tap-icon"
                                style={{
                                    animation: upDownEffect && "tapIcon-KeyFrame 0.2s",
                                    opacity: landlordView && "0",

                                }}
                            />
                        </div>

                        <div className="landlord-data-top-div">
                            <p
                                style={{
                                    opacity: tenantView && "0"
                                }}
                            >LANDLORD'S{" "}
                                <span>DATA</span>
                            </p>
                            <div className="landlord-icon-div"
                                style={{
                                    opacity: tenantView && "0"
                                }}
                            >
                                <div className="family-icon-div">
                                    <img src={Icon1} alt="" />
                                </div>
                                <div className="no-alocohol-icon-div">
                                    <img src={Icon2} alt="" className="no-alocohol-icon" />
                                </div>
                                <div className="non-veg-icon-div">
                                    <img src={Icon4} alt="" className="non-veg-icon" />
                                </div>
                                <div className="no-smoking-icon-div">
                                    <img src={Icon3} alt="" className="no-smoking-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}