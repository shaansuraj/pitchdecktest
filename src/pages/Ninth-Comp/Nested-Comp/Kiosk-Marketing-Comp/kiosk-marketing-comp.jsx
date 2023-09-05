import React from "react";
import { ImageServer } from "../../../../img/imageServer";
import "./kiosk-marketing-comp.scss";


const Frame1 = `${ImageServer}img/Pitch-Deck/ninth-comp-img/frame583.png`;

export default function KioskMarketingComp() {
    return (<>
        <div className="kiosk-marketing-comp-main-container">
            <img src={Frame1} alt="" />

        </div>
    </>)
}