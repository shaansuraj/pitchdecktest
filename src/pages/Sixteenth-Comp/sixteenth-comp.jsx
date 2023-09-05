import "./sixteenth-comp.scss";
import AdvantageComp from "./advantage-comp";

import { CompAdvantageData } from "./compAdvantageData";

const Frame1 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/rentLogo.png";
const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/99acres.png";
const Frame3 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/nobrokerLogo.png";
const Frame4 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/housingLogo.png";
const Frame5 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/mbLogo.png";
const Frame6 = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixteenth-comp-img/bnLogo.png";



export default function SixteenthComp() {

    return (
        <>
            <div className="sixteenth-comp-main-container">
                <div className="top-heading">
                    <div className="top-part">
                        <div className="shape-left"></div>
                        <div className="shape-right"></div>

                        <div className="logo-div">
                            <img src={Frame1} alt="" />
                        </div>
                        <div className="heading-div">
                            <div className="shape-div"></div>
                            <p>COMPETITIVE <br />
                                <span>ADVANTAGE</span>
                            </p>
                            <div className="shape-div"></div>

                        </div>
                    </div>
                    <div className="bottom-part">
                        <div className="features-heading-div">
                            <p>FEATURES</p>
                        </div>
                        <div className="right-div">
                            <div className="rentainance-div">
                                <img src={Frame1} alt="" />
                            </div>
                            <div className="_99acres-div">
                                <img src={Frame2} alt="" />
                            </div>
                            <div className="no-brokers-div">
                                <img src={Frame3} alt="" />
                            </div>
                            <div className="housing-div">
                                <img src={Frame4} alt="" />
                            </div>
                            <div className="magic-bricks-div">
                                <img src={Frame5} alt="" />
                            </div>
                            <div className="broker-network-div">
                                <img src={Frame6} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="content-body">

                    <div className="content-item-div">

                        {
                            CompAdvantageData.map((item, i) => {
                                return <AdvantageComp
                                    key={i}
                                    name={item.name}
                                    Value1={item.value1.toLowerCase()}
                                    Value2={item.value2.toLowerCase()}
                                    Value3={item.value3.toLowerCase()}
                                    Value4={item.value4.toLowerCase()}
                                    Value5={item.value5.toLowerCase()}
                                    Value6={item.value6.toLowerCase()}

                                />
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    );
}