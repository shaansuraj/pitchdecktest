import React, { useState } from "react";
import "./thirteenthPD-comp.scss";


<<<<<<< HEAD
// const Frame1 = "https://rentweb.s3.ap-south-1.amazonaws.com/img/Pitch-Deck/thirteenth-comp-img/frame545.png"
const Frame1 = "https://rentweb.s3.ap-south-1.amazonaws.com/img/Pitch-Deck/thirteenth-comp-img/Group545.png"

const logo = "https://rentweb.s3.ap-south-1.amazonaws.com/img/logo3.svg";
=======
const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/thirteenth-comp-img/frame545.png"
const logo = "https://rentblob.blob.core.windows.net/pitch/img/logo3.svg";
>>>>>>> 9ff1a74fc0fb4c226e469fabad9193ff6c4a995f

export default function ThirteenthPDComp() {

    const [isHover, setIsHover] = useState(false)

    function handleHover() {
        setIsHover(true)
    }

    return (
        <>
            <div className="thirteenthPD-comp-main-container">
                <div className="hidden-hover-div"
                    onMouseEnter={handleHover}
                ></div>
                <div className="heading-div">
                    <div className="shape1-div"></div>
                    <h1>Our Ask</h1>

                </div>


                <div className="funding-request-div">
                    <h1>Funding Request</h1>
                    <h2>Currently <br /><span>Seeking</span></h2>

                    <div className="hr-line-div"></div>
                    <div className="amount-div">
                        <p className="para1">&#8377;</p><p className="para2">2</p><p className="para3">cr</p>
                    </div>
                </div>
                <div className="use-of-funds-div">
                    <div className="propertyOne-hr"
                        style={{
                            borderTop: isHover && "2px solid #FF62E8",
                            borderRight: isHover && "2px solid #FF62E8",
                            transition: "0.8s"

                        }}

                    ></div>
                    <div className="propertyTwo-hr"
                        style={{
                            borderTop: isHover && "2px solid #0FEDD2",
                            borderRight: isHover && "2px solid #0FEDD2",
                            transition: "0.8s"

                        }}

                    ></div>
                    <div className="propertyThree-hr"
                        style={{
                            borderBottom: isHover && "2px solid #FFD23B",
                            borderRight: isHover && "2px solid #FFD23B",
                            transition: "0.8s"

                        }}

                    ></div>
                    <div className="propertyFour-hr"
                        style={{
                            borderTop: isHover && "2px solid #F46D1C",
                            borderLeft: isHover && "2px solid #F46D1C",
                            transition: "0.8s"

                        }}

                    ></div>
                    <div className="propertyFive-hr"
                        style={{
                            borderBottom: isHover && "2px solid #2F72C3",
                            borderLeft: isHover && "2px solid #2F72C3",
                            transition: "0.8s"

                        }}

                    ></div>

                    <div className="propertyOne-name-div">
                        <div className="shape"></div>
                        <p
                            style={{
                                opacity: isHover ? "1" : "0",
                                transition: "0.8s",
                                transitionDelay:"1.5s"
                            }}
                        >Capex</p>
                    </div>
                    <div className="propertyTwo-name-div">
                        <div className="shape"></div>
                        <p
                            style={{
                                opacity: isHover ? "1" : "0",
                                transition: "0.8s",
                                transitionDelay:"2.2s"

                            }}
                        >Opex</p>
                    </div>
                    <div className="propertyThree-name-div">
                        <div className="shape"></div>
                        <p
                            style={{
                                opacity: isHover ? "1" : "0",
                                transition: "0.8s",
                                transitionDelay:"2.9s"

                            }}
                        >Salary</p>
                    </div>
                    <div className="propertyFour-name-div">
                        <div className="shape"></div>
                        <p
                            style={{
                                opacity: isHover ? "1" : "0",
                                transition: "0.8s",
                                transitionDelay:"3.6s"

                            }}
                        >Cash Reserve</p>
                    </div>
                    <div className="propertyFive-name-div">
                        <div className="shape"></div>
                        <p
                            style={{
                                opacity: isHover ? "1" : "0",
                                transition: "0.8s",
                                transitionDelay:"4.3s"

                            }}
                        >Marketing</p>
                    </div>



                    <div className="hr-line-2-div"></div>
                    <div className="heading-two-div">
                        <h1>Use Of<span> Funds</span></h1>
                    </div>
                    <div className="circle-div">
                        <img className="img-one" src={Frame1} alt="" />
                        <div className="small-circle-div"
                            style={{
                                transform: !isHover && `scale(${3})`,
                                transition: "1s"
                            }}
                        >
                            <img className="img-two" src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}