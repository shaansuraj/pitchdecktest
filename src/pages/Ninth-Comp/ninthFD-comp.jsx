import React, { useState } from "react";
import "./ninthFD-comp.scss";
import NinthPDNevBar from "./Nested-Comp/ninthPD-nev-bar";
import { ImageServer } from "../../img/imageServer";
import MarketingComp from "./Nested-Comp/Marketing-Comp/marketing-comp";
import DigitalMarketingComp from "./Nested-Comp/Digital-Marketing-Comp/digital-marketing-comp";
import VideoMarketingComp from "./Nested-Comp/Video-Marketing/video-marketing-comp";
import NewsPaperAdsComp from "./Nested-Comp/News-Paper-Ads/news-paper-ads-comp";
import BillboardMarketingComp from "./Nested-Comp/Billboard-Marketing-Comp/billboard-marketing-comp";
import KioskMarketingComp from "./Nested-Comp/Kiosk-Marketing-Comp/kiosk-marketing-comp";

const GoogleAds = `${ImageServer}img/Pitch-Deck/ninth-comp-img/google-ads.png`;

const Facebook = `${ImageServer}img/blogs-img/facebook-icon.png`;
const Instagram = `${ImageServer}img/blogs-img/instagram-icon.png`;
// const Linkedin = `${ImageServer}img/blogs-img/linkedin-icon.png`;
// const Twitter = `${ImageServer}img/blogs-img/twitter-icon.png`;


export default function NinthFDComp(props) {

    const [navItems, setNavItems] = useState(0);
    const [headingAnime, setHeadingAnime] = useState(false)


    function handleNavItemNumber(id) {
        setNavItems(id)

    }

    function handleMouseEvent() {
        setHeadingAnime(true)

    }

    return (
        <>
            <div className="ninthFD-comp-main-container">
                <div className="hidden-div"
                    onMouseEnter={handleMouseEvent}
                    style={{
                        zIndex: !headingAnime && "2"
                    }}
                ></div>
                <div className="left-part-div">
                    <div className="top-part-div">

                        <div className="heading-div">
                            <div className="shape1-div"></div>
                            <button
                            ><span>Marketing</span></button>

                        </div>
                        <div className="social-media-icons-div">
                            <a href="https://www.facebook.com/Rentainance-109704091972749" target="_blank" rel='noreferrer'><img src={Facebook} alt="" target="_blank" /></a>
                            <a href="https://www.instagram.com/rentainance/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a>
                            <a href="###" target="_blank" rel='noreferrer'><img src={GoogleAds} alt="" /></a>
                        </div>
                        <div className="heading2-div">
                            <div className="main-heading-div"
                                style={{
                                    borderBottom: headingAnime && "2px solid #333333",
                                    transition: "0.2s",
                                    transitionDelay: headingAnime && "5.5s"


                                }}
                            >

                                <div className="para">
                                    <p>OUR CAMPAIGN</p>
                                </div>
                                <div className="headings">
                                    <h1
                                        style={{
                                            animation: headingAnime && "headingKeyframe2 0.5s",
                                            animationDelay: headingAnime && "4.8s",
                                            opacity: headingAnime && "1",
                                            transitionDelay: headingAnime && "4.8s"
                                        }}
                                    >SWIPE,
                                        <span>TAP</span>, RENT
                                    </h1>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bottom-part-div">
                        {navItems === 0 && <MarketingComp HeadingAnime={headingAnime} />}
                        {navItems === 1 && <DigitalMarketingComp NavItems={navItems} />}
                        {navItems === 2 && <BillboardMarketingComp NavItems={navItems} />}
                        {navItems === 3 && <VideoMarketingComp NavItems={navItems} />}
                        {navItems === 4 && <NewsPaperAdsComp NavItems={navItems} />}
                        {navItems === 5 && <KioskMarketingComp NavItems={navItems} />}

                    </div>


                </div>
                <div className="right-part-div">
                    <NinthPDNevBar
                        HandleNavItemNumberFunction={handleNavItemNumber}
                        NavItems={navItems}
                        HeadingAnime={headingAnime}
                    />
                </div>


            </div>
        </>
    )
}