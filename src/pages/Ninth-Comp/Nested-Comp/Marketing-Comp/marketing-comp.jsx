import React, { useState, useEffect } from "react";
import { ImageServer } from "../../../../img/imageServer";
import "./marketing-comp.scss";


const Phone1 = `${ImageServer}img/images/iPhone2.png`;
const Phone2 = `${ImageServer}img/images/iPhone1.png`;
const Phone3 = `${ImageServer}img/images/iPhone3.png`;

export default function MarketingComp(props) {

    const [phoneOne, setPhoneOne] = useState(false)
    const [phoneTwo, setPhoneTwo] = useState(true)
    const [phoneThree, setPhoneThree] = useState(false)
    const [headingVisibility, setHeadingVisibility] = useState(true)

    useEffect(() => {
       props.HeadingAnime && setPhoneOne(true)
       props.HeadingAnime && setPhoneTwo(false)
       props.HeadingAnime && setHeadingVisibility(true)

       props.HeadingAnime && setTimeout(() => {
            setPhoneOne(false)
            setPhoneTwo(true)

        }, 1000)

       props.HeadingAnime && setTimeout(() => {
            setPhoneTwo(false)
            setPhoneThree(true)

        }, 2000)
       props.HeadingAnime && setTimeout(() => {
            setPhoneTwo(true)
            setPhoneThree(false)

        }, 3000)

       props.HeadingAnime && setTimeout(() => {
            setHeadingVisibility(false)
        }, 4500)

    }, [props.HeadingAnime])

    return (
        <>
            <div className="marketing-comp-main-container">
                <div className="heading-div"
                    style={{
                        animation: !headingVisibility && "headingKeyframe 0.5s",
                        opacity: !headingVisibility && "0"
                    }}
                >
                    <h1 className="headingOne"
                        style={{
                            transform: phoneOne && `scale(${1.2})`,
                            color: phoneOne && "#ff4d4d",
                            filter: !phoneOne && `blur(${2}px)`

                        }}
                    >SWIPE</h1>
                    <h1 className="headingTwo"
                        style={{
                            transform: phoneTwo && `scale(${1.2})`,
                            color: phoneTwo && "#ff4d4d",
                            filter: !phoneTwo && `blur(${2}px)`
                        }}
                    >TAP</h1>
                    <h1 className="headingThree"
                        style={{
                            transform: phoneThree && `scale(${1.2})`,
                            color: phoneThree && "#ff4d4d",
                            filter: !phoneThree && `blur(${2}px)`


                        }}
                    >RENT</h1>
                </div>

                <div className="phones-div">
                    <div className="phone1-img-div"
                        style={{
                            transform: phoneOne && `scale(${1.2})`,
                            marginTop: phoneOne && "-15%",
                            transition: "0.5s"
                        }}
                    >
                        <img src={Phone1} alt="" />

                    </div>
                    <div className="phone2-img-div"
                        style={{
                            transform: phoneTwo && `scale(${1.2})`,
                            marginTop: phoneTwo && "-15%",
                            transition: "0.5s"
                        }}
                    >
                        <img src={Phone2} alt="" />

                    </div>
                    <div className="phone3-img-div"
                        style={{
                            transform: phoneThree && `scale(${1.2})`,
                            marginTop: phoneThree && "-15%",
                            transition: "0.5s"
                        }}
                    >
                        <img src={Phone3} alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}