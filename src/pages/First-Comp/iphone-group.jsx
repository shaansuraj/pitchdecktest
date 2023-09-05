import "./iphone-group.scss";
import { ImageServer } from "../../img/imageServer";



const Frame1 = `${ImageServer}img/Pitch-Deck/first-comp-img/Frame-430.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/first-comp-img/Frame-431.png`;
const Frame3 = `${ImageServer}img/Pitch-Deck/first-comp-img/Frame-432.png`;
const Frame4 = `${ImageServer}img/Pitch-Deck/first-comp-img/Frame-425.png`;


export default function IphoneGroup(props) {


    return (
        <>
            <div className="firstPD-comp-iphone-group-main-container">

                <img src={Frame1} alt="" className="image1"
                    style={{
                        animation: props.triggerTwo && 'groupPhone1 0.8s',
                        opacity: props.triggerTwo ? "1" : "0"

                    }}
                />
                <img src={Frame2} alt="" className="image2"
                    style={{
                        animation: props.triggerThree && 'groupPhone2 0.8s',
                        opacity: props.triggerThree ? "1" : "0"

                    }}
                />
                <div className="phone-div">
                    <img src={Frame3} alt=""
                        style={{
                            animation: props.triggerOne ? 'singlePhone1 0.8s' :
                                props.triggerFour && "singlePhone2 0.8s",

                            opacity: props.triggerOne ? "1" : "0"

                        }}
                    />
                </div>
                <img src={Frame4} alt="" className="image3"
                    style={{
                        animation: props.triggerFour ? 'groupPhone3 1s' : 'groupPhone4 1s',
                        opacity: props.triggerFour ? "1" : "0",
                        transition: "1s"
                        

                    }}
                />


            </div>
        </>
    );
}