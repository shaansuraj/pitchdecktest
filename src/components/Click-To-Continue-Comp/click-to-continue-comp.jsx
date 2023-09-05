import { useState, useEffect } from "react";
import "./click-to-continue-comp.scss";

export default function ClickToContinueComp(props) {

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])

    const [ClickHereBtn, setClickHereBtn] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setClickHereBtn(true)
        }, 3000)
    }, [])

    return (<>

        <div className="click-to-continue-comp-main-container"
            style={{
                display: props.OnLoadEvent && "none"
            }}
        >
            <div className="instruction-bar-div" >
                <img className="instruction-img" src="https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/navigation-comp-img/frame581.png" alt="" />

                <div className="click-to-continue-btn-div"
                    style={{
                        visibility: !ClickHereBtn ? "hidden" : "visible"
                    }}
                >
                    <p
                        style={{
                            animation: upDownEffect && "ClickHereToContinue-keyframe 0.2s",
                            visibility: !ClickHereBtn ? "hidden" : "visible"
                        }}
                    >Click here to continue</p>
                </div>

            </div>
        </div>



    </>)
}