import React, { useState, useEffect } from "react";
import "./digital-marketing-comp.scss";
import DotButton from "../News-Paper-Ads/dot-buttons";
import { ImageServer } from "../../../../img/imageServer";



const Frame1 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame1.1.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame1.2.png`;
const Frame3 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame1.3.png`;


export default function DigitalMarketingComp(props) {

    const imgArry = [
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


    const [stopTimeout, setStopTimeOut] = useState(true)

    let [x, setX] = useState(0)

    function handleSlides() {
        x === (imgArry.length-1 )* 100 ? setX(0) : setX(x + 100)
    }
    // props.NavItems === 1 && setTimeout(() => {
    //     handleSlides()
    // }, 4000)


    // props.NavItems
    const dotNavigation = (id) => {
        setX(x = id * 100);
    }
    function handleMouseEvents() {
        setStopTimeOut(prev => {
            return !prev
        })

    }

    let timeoutId;

    useEffect(() => {
        if (stopTimeout && props.NavItems === 1) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timeoutId = setTimeout(handleSlides, 4000);

        } else {
            clearTimeout(timeoutId)

        }
    }, [x, stopTimeout])



    return (
        <>
            <div className="digital-marketing-comp-main-component">
                <div className="shape1-div"></div>
                <div className="slider-div">
                    <div className="upper-div"></div>
                    <div className="lower-div"></div>
                    <div className="slides-div">

                        {imgArry.map((item, index) => {
                            return (
                                
                                    <div className="img-div"
                                        key={index}
                                        style={{
                                            // backgroundColor: item.color,
                                            transform: `translate(${-x}%)`

                                        }}><img src={item.imgURL} alt="" />

                                    </div>
                                
                            )
                        })}


                    </div>
                </div>
                <div className="dot-container">
                    {imgArry.map((items, index) => {
                        return (<>
                            <div className="dot-button-div" key={index}
                                onMouseEnter={handleMouseEvents}
                                onMouseLeave={handleMouseEvents}

                            >
                                <DotButton
                                    itemId={index}
                                    handleDotNav={dotNavigation}
                                    currentItemId={x}
                                />
                            </div>
                        </>)


                    })}

                </div>
            </div>
        </>
    )
}