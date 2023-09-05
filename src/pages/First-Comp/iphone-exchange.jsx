import React, { useState, useEffect } from "react";
import "./iphone-exchange.scss";
import { ImageServer } from "../../img/imageServer";



const Iphone1 = `${ImageServer}img/Pitch-Deck/first-comp-img/iPhone1.png`;
const Iphone2 = `${ImageServer}img/Pitch-Deck/first-comp-img/iPhone2.png`;
const Iphone3 = `${ImageServer}img/Pitch-Deck/first-comp-img/iPhone3.png`;

export default function IphoneExchange(props) {
    const [phoneOne, setPhoneOne] = useState(false)
    const [phoneTwo, setPhoneTwo] = useState(true)
    const [phoneThree, setPhoneThree] = useState(true)



    useEffect(() => {

        if (!props.triggerBG) {

            setTimeout(() => {
                setPhoneOne(true)
                setPhoneThree(false)

            }, 2000)
            setTimeout(() => {
                setPhoneThree(true)
                setPhoneTwo(false)
            }, 4000)
            setTimeout(() => {
                setPhoneOne(false)
                setPhoneThree(true)
                setPhoneTwo(true)
            }, 10000)
        }
    }, [props.triggerBG])



    return (
        <>
            <div className="iphone-exchange-main-container">
                <div className="bg-div">

                    <div className="img1-div"
                        style={{
                            transform: !phoneOne && `scale(${2})`,
                            bottom: !phoneOne && "24%",
                            left: !phoneOne && "42%",
                            animation: !props.triggerBG ? "phoneFromDownSideUp 0.8s" : "phoneFromUpSideDown 0.8s"

                        }}
                    >
                        <img src={Iphone1} alt="" />
                    </div>
                    <div className="img2-div"
                        style={{
                            transform: !phoneTwo && `scale(${2})`,
                            left: !phoneThree ? "74%"
                                : !phoneOne ? "10%"
                                    : "42%",

                            bottom: !phoneTwo && "24%"
                        }}
                    >
                        <img src={Iphone2} alt="" />
                    </div>
                    <div className="img3-div"
                        style={{
                            transform: !phoneThree && `scale(${2})`,
                            bottom: !phoneThree && "24%",
                            left: !phoneThree && "42%"

                        }}
                    >
                        <img src={Iphone3} alt="" />
                    </div>


                </div>


            </div>
        </>
    );
}