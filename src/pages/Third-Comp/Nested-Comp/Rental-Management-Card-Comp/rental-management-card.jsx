import React, { useState, useEffect } from "react";
import "./rental-management-card.scss";



const Phone1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone1.png";
const Phone2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone2.png";
const Phone3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone3.png";
const Phone4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/iPhone4.png";

export default function RentalManagementCard(props) {

    const [phoneAnime, setPhoneAnime] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPhoneAnime(prev => {
                return !prev;
            })
        }, 3000)
    }, [phoneAnime])


    return (
        <>
            <div className="user-management-card-main-container"
                style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                {/* <div className="para-div">
                    <p>"We Will Keep You Free Because
                        <br /><span>Rentainance</span> Take Care Of<br />
                        Records Better."</p>
                </div> */}
                <div className="property-list-div">
                    <ul>
                        <li><span></span>Stay updated with latest rental properties.</li>
                        <li><span></span>Track ongoing and upcoming deals.</li>
                        <li><span></span>Share and connect via unified profiles created.</li>
                        <li><span></span>Handy application form.</li>
                        <li><span></span>Smooth association between the 3 parties.</li>
                        <li><span></span>Tenant star based review on landlord and property.</li>

                    </ul>
                </div>

                <div className="para1-div">
                    <p>BENEFITS OF <br /><span className="span1">RENTAL</span> <span className="span2" >MANAGEMENT.</span></p>
                </div>

                <div className="shape1-div"></div>
                <div className="phones-frame-div">
                    <div className="phone1-img-div">
                        <img src={Phone1} alt=""
                            style={{
                                top: phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>
                    <div className="phone2-img-div">
                        <img src={Phone2} alt=""
                            style={{
                                top: !phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>
                    <div className="phone3-img-div">
                        <img src={Phone3} alt=""
                            style={{
                                top: phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>
                    <div className="phone4-img-div">
                        <img src={Phone4} alt=""
                            style={{
                                top: !phoneAnime ? "35%" : "0"
                            }}
                        />
                    </div>

                </div>


            </div>
        </>
    );
}