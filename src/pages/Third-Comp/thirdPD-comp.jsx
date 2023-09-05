import React, { useState } from "react";
import "./thirdPD-comp.scss";
import ThirdPDCardComp from "./thirdPD-card-comp";
import thirdPDCompData from "./thirdPDCompData";
import ProfilingCard from "./Nested-Comp/Profiling-Card-Comp/profiling-card";
import MoveInPhotosCard from "./Nested-Comp/Move-In-Photos-Card-Comp/move-in-photos-card";
import RscoreCard from "./Nested-Comp/Rscore-Card-Comp/rscore-card";
import RentalManagementCard from "./Nested-Comp/Rental-Management-Card-Comp/rental-management-card";


export default function ThirdPDComp() {

    const [hiddenHoverDiv, setHiddenHoverDiv] = useState(false)
    let [cardItemID, setCardItemID] = useState(0)


    let [cardNum, setCardNum] = useState(0);

    function handleMouseTrueEven() {
        setHiddenHoverDiv(true)

        // console.log("True got called")
    }

    function handleMouseFalseEven() {
        setHiddenHoverDiv(false)
    }

    function handleCardItemID(itemID) {
        setCardItemID(cardItemID = itemID + 1)

    }

    function cardNumberFunction(num) {
        setCardNum(cardNum = num + 1)
        // console.log("Number got called")

    }



    return (
        <>
            <div className="thirdPD-comp-main-container">
                <div className="hidden-hover-div"
                    style={{
                        visibility: hiddenHoverDiv && "visible"
                    }}
                    onClick={handleMouseFalseEven}

                >
                    <div className="hidden-content-div"
                    // onClick={handleMouseFalseEven}
                    >
                        {
                            cardItemID === 1 ? <ProfilingCard HiddenHoverDiv={hiddenHoverDiv} /> :
                                cardItemID === 2 ? <MoveInPhotosCard HiddenHoverDiv={hiddenHoverDiv} /> :
                                    cardItemID === 3 ? <RscoreCard HiddenHoverDiv={hiddenHoverDiv} /> :
                                        cardItemID === 4 && <RentalManagementCard HiddenHoverDiv={hiddenHoverDiv} />
                        }
                    </div>

                </div>
                <div className="top-part-div">
                    <div className="right-div">
                        <div className="shape1">
                            <h3>The Solution</h3>
                        </div>
                    </div>
                    <div className="left-div">
                        <hr />
                        <h3>
                            Together, let’s organize <br />
                            <span>
                                THE RENTAL MARKET!
                            </span>
                        </h3>
                    </div>
                </div>
                <div className="bottom-part-div">

                    {thirdPDCompData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onMouseEnter={() => { cardNumberFunction(index) }}
                                onMouseLeave={() => { cardNumberFunction(-1) }}

                            >
                                <ThirdPDCardComp
                                    id={index}
                                    Heading={item.heading}
                                    Para={item.para}
                                    cardNumber={cardNum}
                                    // HandleHoverOnCard={handleHoverOnCard}
                                    // IsHoverOnCardDiv={isHoverOnCardDiv}
                                    HandleMouseFalseEven={handleMouseFalseEven}
                                    HandleMouseTrueEven={handleMouseTrueEven}
                                    // CardNumberFunction={cardNumberFunction}
                                    CardItemID={cardItemID}
                                    HandleCardItemID={handleCardItemID}

                                /></div>
                        )
                    })}

                </div>

            </div>
        </>
    );
}