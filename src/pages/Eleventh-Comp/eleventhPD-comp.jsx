import React, { useState, useEffect } from "react";
import "./eleventhPD-comp.scss";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import { ImageServer } from "../../img/imageServer";


const Frame1 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame547.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame548.png`;
const Frame3 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame549.png`;
const Frame4 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame550.png`;
const Frame5 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame552.png`;
const Frame6 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/closeup-hands-passing-contract-unrecognizable-businessman.png`;
const Frame7 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/house-key-home-insurance-broker-agent-s-hand-protection-salesman-person-giving-buyer-customer-owner.png`;
const Frame8 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/tingey-injury-law-firm-nSpj-Z12lX0-unsplash.png`;
const Frame9 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame606.png`;
const Frame10 = `${ImageServer}img/Pitch-Deck/eleventh-comp-img/frame607.png`;



const logo = "https://rentblob.blob.core.windows.net/pitch/img/logo3.svg";

export default function EleventhPDComp() {

    const [priceChartBouncing, setPriceChartBouncing] = useState(true)

    const [itemID, setItemID] = useState(0);

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 1000)

    }, [upDownEffect])

    function handleHover(id) {
        setItemID(id)
    }

    function handleBouncing() {
        setPriceChartBouncing(false)
    }
    return (<>
        <div className="eleventhPD-comp-main-container" >

            <h1 className="heading">BUSINESS <br /><span>Model</span></h1>

            {/* --------------------------------------PRICING DETAILS------------------------------ */}
            <div className="pricing-details-div-one"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 1 && "1",
                    zIndex: itemID === 1 ? "6" : "0"

                }}
            >
                <div className="pricing-img-div">
                    <img className="pricing-img" src={Frame1} alt="" />
                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>
                </div>
            </div>
            <div className="pricing-details-div-five"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 5 && "1",
                    zIndex: itemID === 5 ? "6" : "0"

                }}
            >
                <div className="pricing-img-div">
                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame10} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-two"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 2 && "1",
                    zIndex: itemID === 2 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame2} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-three"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 3 && "1",
                    zIndex: itemID === 3 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame3} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-six"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 6 && "1",
                    zIndex: itemID === 6 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame9} alt="" />
                </div>
            </div>
            <div className="pricing-details-div-four"
                onClick={() => { handleHover(0) }}
                style={{
                    opacity: itemID === 4 && "1",
                    zIndex: itemID === 4 ? "6" : "0",
                    animation: priceChartBouncing && "priceChart-keyframe 0.2s"
                }}
            >
                <div className="pricing-img-div">

                    <div className="cross-icon-div"
                        onClick={() => { handleHover(0) }}
                    ><CloseRoundedIcon className="cross-icon" />
                    </div>

                    <img className="pricing-img" src={Frame4} alt="" />
                </div>
            </div>
            {/* --------------------------------------PRICING DETAILS END HERE------------------------------ */}


            <div className="circle-div">
                <div className="small-circle-div">
                    <img className="img-two" src={logo} alt="" />

                </div>
                <div className="img-div-one" style={{ background: itemID === 1 && "none" }}>
                    <img src={Frame7} alt="" style={{ opacity: itemID === 1 && "0" }} />

                </div>
                <div className="img-div-two" style={{ background: itemID === 2 && "none" }}>
                    <img src={Frame5} alt="" style={{ opacity: itemID === 2 && "0" }} />

                </div>
                <div className="img-div-three" style={{ background: itemID === 3 && "none" }} >
                    <img src={Frame6} alt="" style={{ opacity: itemID === 3 && "0" }} />

                </div>
                <div className="img-div-four" style={{ background: itemID === 4 && "none" }}>
                    <img src={Frame8} alt="" style={{ opacity: itemID === 4 && "0" }} />

                </div>

            </div>
            <div className="shape-one"></div>
            <div className="shape-two"></div>
            <div className="shape-three"></div>
            <div className="shape-four"></div>

            <div className="hrline-one"></div>
            <div className="hrline-five"></div>
            <div className="hrline-two"></div>
            <div className="hrline-three"></div>
            <div className="hrline-six"></div>
            <div className="hrline-four"> </div>


            {/* --------------------------------------PROPERTY PARA------------------------------ */}

            <div className="property-para-one">
                <p>Landlord Pays For <br /><span> Adding Property</span></p>

                <div className="price-chart-btn-div">
                    <p className="price-chart-btn"
                        onClick={() => {
                            handleBouncing()
                            handleHover(1)
                        }}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Price Chart</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>

            </div>
            <div className="property-para-five">
                <p>Rent With <br /><span>RENTAINANCE</span></p>

                <div className="price-chart-btn-div">
                    <p className="price-chart-btn"
                        onClick={() => {
                            handleBouncing()
                            handleHover(5)
                        }}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Price Chart</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>

            </div>
            <div className="property-para-two">
                <p>Landlord & Tenant Pays<br /> To View <span>Rscore</span> History</p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(2)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Price Chart</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="property-para-three">
                <p>Landlord Pays For <br /><span> Lease Creation</span></p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(3)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Price Chart</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="property-para-six">
                <p><span>Broker <br /></span>Dashboard Price</p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(6)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Price Chart</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="property-para-four">
                <p>Landlord Pays To Get Tenant's<br /><span> Verification Details</span></p>

                <div className="price-chart-btn-div"
                    onClick={() => {
                        handleBouncing()
                        handleHover(4)
                    }}
                >
                    <p className="price-chart-btn"
                        onClick={handleBouncing}
                        style={{
                            animation: upDownEffect && priceChartBouncing &&
                                "priceChart-keyframe 0.2s",
                            paddingBottom: upDownEffect && priceChartBouncing &&
                                "0%"
                        }}
                    >Price Chart</p>
                    <div className="tap-icon-div"
                        style={{
                            // visibility: itemID !== 1 && OnLoadEvent ? "visible" : "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
            </div>
            {/* --------------------------------------PROPERTY PARA END HERE------------------------------ */}



        </div>
    </>)
}



