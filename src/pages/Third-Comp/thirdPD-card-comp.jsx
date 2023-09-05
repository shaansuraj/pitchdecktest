import React from "react";
import "./thirdPD-card-comp.scss";


const Icon1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/icon1.png";
const Icon2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/icon2.png";
const Icon3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/third-comp-img/icon3.png";

export default function ThirdPDCardComp(props) {

    return (
        <>
            <div className="thirdPD-card-comp-main-container">
               
                <div className="top-part">
                    <div className="icon-div">
                        {
                            props.id === 0 ? <img src={Icon1} alt="" /> :
                                props.id === 1 ? <img src={Icon2} alt="" /> :
                                    props.id === 2 ? <img src={Icon3} alt="" /> :
                                        props.id === 3 && <img src={Icon1} alt="" />
                        }
                    </div>
                </div>
                <div className="bottom-part">
                    <h1>{props.Heading}</h1>
                    <p>{props.Para}</p>

                    <div className="more-btn-div"
                        // onMouseLeave={props.HandleMouseFalseEven}
                        onClick={() => {
                            props.HandleMouseTrueEven()
                            props.HandleCardItemID(props.id)
                        }}



                        // CardItemID
                        // HandleCardItemID


                        // onMouseEnter={() => {
                        //     props.HandleMouseTrueEven()
                        //     props.CardNumberFunction(props.id)
                        // }}
                       
                        style={{
                            boxShadow: (props.id + 1) === props.cardNumber ? "2px 4px 5px #333333" : "none"
                        }}
                    >
                        {/* <div className="hover-div"
                            onMouseEnter={props.HandleHoverOnCard}
                            // onMouseLeave={props.HandleHoverOnCard}
                            style={{
                                visibility: (props.id + 1) === props.cardNumber ? "visible" : "hidden",
                                backgroundColor: "#333"
                            }}
                        ></div> */}
                        <p>MORE DETAILS</p>
                    </div>

                </div>
            </div>
        </>
    );
}