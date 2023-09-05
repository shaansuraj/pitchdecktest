import React, { useState } from "react";
import "./billboard-marketing-comp.scss";
import { ImageServer } from "../../../../img/imageServer";



const Frame1 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame2.1.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame2.2.png`;
const Frame3 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame2.3.png`;




export default function BillboardMarketingComp(props) {

    const [x, setX] = useState(0)

    const BBMCompData = [
        {
            imgURL: Frame1
        },
        {
            imgURL: Frame2
        },
        {
            imgURL: Frame3
        }
    ]

    function handleSlider() {
        x === (BBMCompData.length - 1) ? setX(0) : setX(x + 1)
    }

    props.NavItems === 2 && setTimeout(() => {
        handleSlider()
    }, 3000)

    return (
        <>
            <div className="billboard-marketing-comp-main-container">
                <div className="slider">
                    {
                        BBMCompData.map((item, id) => {
                            return (
                                <div className="slide" key={id} style={{
                                    opacity: id === x ? "1" : "0"
                                    // backgroundColor: item.color

                                }} ><img src={item.imgURL} alt="" />
                                </div>
                            );
                        })
                    }

                </div>

            </div>
        </>
    )
}