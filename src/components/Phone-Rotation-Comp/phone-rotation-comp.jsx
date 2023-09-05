import React from "react";
// import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import "./phone-rotation-comp.scss";

export default function PhoneRotationComp() {

    // const [rotation, setRotation] = useState(true)



    return (<>
        <div className="phone-rotation-comp-main-container">
            <div className="message1">
                Please rotate your device
            </div>
            <div className="phone">
                <div className="mock-up"></div>
                <div className="small-circle"></div>
            </div>
            <div className="message2">
                For better experience!
            </div>
        </div>
    </>)
}