import React, { useState, useEffect } from "react";
import "./sixPD-comp.scss";
import { listData } from "./sixPDCompData";
import TouchAppIcon from '@mui/icons-material/TouchApp';

//-----------------Sub Comp-------------------------------------
import CompOne from "./Nested-Comp/Comp-One/comp-one";
import CompTwo from "./Nested-Comp/Comp-Two/comp-two";
import CompThree from "./Nested-Comp/Comp-Three/comp-three";
import CompFour from "./Nested-Comp/Comp-Four/comp-four";
import CompFive from "./Nested-Comp/Comp-Five/comp-five";
import CompSix from "./Nested-Comp/Comp-Six/comp-six";
import CompSeven from "./Nested-Comp/Comp-Seven/comp-seven";
import CompEight from "./Nested-Comp/Comp-Eight/comp-eight";
import CompNine from "./Nested-Comp/Comp-Nine/comp-nine";


//--------------------------------------------------------------

const BgImg = "https://rentblob.blob.core.windows.net/pitch/img/Pitch-Deck/sixth-comp-img/frame487.png";
// import Logo from "../../img/sixth-comp-img/logo.png";


const Logo = "https://rentblob.blob.core.windows.net/pitch/img/logo3.svg";

export default function SixPDComp() {
    const [listId, setListId] = useState(0);
    // eslint-disable-next-line
    const [hoverID, setHoverID] = useState(0);


    function handleMouseEnterEvent(id) {
        setListId(id)
        setHoverID(id + 1)
    }

    function handleMouseLeaveEvent() {
        setHoverID(0)
    }

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])


    //   let mediaQuery = window.matchMedia(`(max-width: 926px)`);
    //   const [queryOne, setQuery] = useState(mediaQuery.matches);

    //   useEffect(() => {
    //     window.onresize = () => {
    //       setQuery(mediaQuery.matches)

    //     };

    //   }, [mediaQuery])





    return (
        <>
            <div className="sixPD-comp-main-container">
                <img src={BgImg} alt="" />

                <div className="left-div">
                    <div className="top-div">
                        <div className="heading-div">
                            <div className="logo-img-div">
                                <img className="logo-img" src={Logo} alt="" />
                            </div>
                            <div className="logo-heading">
                                <h1>APP
                                    <span> flow</span>
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div className="bottom-div">
                        <div className="list-div">

                            <div className="hr-line-div"
                                style={{
                                    top: `calc(${(listId * 10) + 5}%)`,
                                    marginLeft: "-4%",
                                }}
                            >
                                <img src={Logo} alt="" />

                            </div>

                            {listData.map((item, index) => {
                                return (

                                    <div
                                        key={index}
                                        className="properties-para"
                                    >
                                        <p
                                            onMouseOver={() => {
                                                handleMouseEnterEvent(index)
                                            }}
                                            onMouseLeave={handleMouseLeaveEvent}
                                            style={{
                                                color: listId === index && "#ff4d4d",
                                                transform: listId === index && `scale(${1.08})`,
                                                top: ` calc(${index * 10}%)`,
                                                textTransform: listId === index && "uppercase",

                                            }}
                                        >{item.listPara}
                                            <span className="tap-icon-div"
                                            style={{
                                                visibility: listId === index && "hidden"
                                            }}
                                            >
                                                <TouchAppIcon className="tap-icon"
                                                    style={{
                                                        animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                                                    }}
                                                />
                                            </span>
                                        </p>

                                    </div>

                                );
                            })}

                        </div>

                    </div>
                </div>
                <div className="right-div">

                    {
                        (listId + 1) === 1 ? <CompOne HoverID={listId + 1} /> :
                            (listId + 1) === 2 ? <CompTwo HoverID={listId + 1} /> :
                                (listId + 1) === 3 ? <CompThree HoverID={listId + 1} /> :
                                    (listId + 1) === 4 ? <CompFour HoverID={listId + 1} /> :
                                        (listId + 1) === 5 ? <CompFive HoverID={listId + 1} /> :
                                            (listId + 1) === 6 ? <CompSix HoverID={listId + 1} /> :
                                                (listId + 1) === 7 ? <CompSeven HoverID={listId + 1} /> :
                                                    (listId + 1) === 8 ? <CompEight HoverID={listId + 1} /> :
                                                        (listId + 1) === 9 && <CompNine HoverID={listId + 1} />
                    }



                </div>
            </div>
        </>
    );
}