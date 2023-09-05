import React, { useState, useEffect } from "react";
import "./ninthPD-nev-bar.scss";
import NevItem from "./nev-item";
import TouchAppIcon from '@mui/icons-material/TouchApp';


export default function NinthPDNevBar(props) {


    const [nextItemID, setNextItemID] = useState(1)

    function handleClick(id) {
        props.HandleNavItemNumberFunction(id)

        if (id === 5) {
            setNextItemID(1)

        } else {
            setNextItemID(id + 1);
        }
    }


    useEffect(() => {
        props.HeadingAnime && setTimeout(() => {
            handleClick(1)
        }, 5000)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.HeadingAnime])

    const [upDownEffect, setUpDownEffect] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUpDownEffect(prev => {
                return !prev
            })
        }, 800)

    }, [upDownEffect])


    return (
        <>
            <div className="ninthPD-nev-bar-main-container">
                <div className="nev-item-one-div">
                    <button
                        onClick={() => { handleClick(1) }}
                        // onMouseLeave={() => { handleClick(0) }}
                        style={{
                            transform: props.NavItems === 1 && `scale(${1.54})`,
                            right: props.NavItems === 1 && "18%",
                            backgroundColor: props.NavItems === 1 && "#333333",
                            borderTopLeftRadius: props.NavItems === 1 && "1.5vw",
                            animation: props.NavItems === 1 && "btn-keyframe 0.6s"
                        }}
                    >
                        <NevItem
                            name="Digital Marketing"
                            ItemID={props.NavItems}
                            id={1}
                            NextItemID={nextItemID}
                        />
                    </button>
                    <div className="circle-div"
                        style={{
                            left: props.NavItems === 1 && "-22%",
                            backgroundColor: props.NavItems === 1 && "#ff4d4d"

                        }}
                    ><p>1</p></div>
                    <div className="tap-icon-div"
                        style={{
                            visibility: props.NavItems === 1 && "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
                <div className="nev-item-two-div">
                    <button
                        onClick={() => { handleClick(2) }}
                        // onMouseLeave={() => { handleClick(0) }}
                        style={{
                            transform: props.NavItems === 2 && `scale(${1.54})`,
                            right: props.NavItems === 2 && "18%",
                            backgroundColor: props.NavItems === 2 && "#333333",
                            borderTopLeftRadius: props.NavItems === 2 && "20px",
                            animation: props.NavItems === 2 && "btn-keyframe 0.6s"
                        }}
                    >
                        <NevItem
                            name="Billboard Marketing"
                            ItemID={props.NavItems}
                            id={2}
                            NextItemID={nextItemID}
                        />
                    </button>
                    <div className="circle-div"
                        style={{
                            left: props.NavItems === 2 && "-22%",
                            backgroundColor: props.NavItems === 2 && "#ff4d4d"
                        }}
                    ><p>2</p></div>
                    <div className="tap-icon-div"
                        style={{
                            visibility: props.NavItems === 2 && "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
                <div className="nev-item-three-div">
                    <button
                        onClick={() => { handleClick(3) }}
                        // onMouseLeave={() => { handleClick(0) }}
                        style={{
                            transform: props.NavItems === 3 && `scale(${1.54})`,
                            right: props.NavItems === 3 && "18%",
                            backgroundColor: props.NavItems === 3 && "#333333",
                            borderTopLeftRadius: props.NavItems === 3 && "20px",
                            animation: props.NavItems === 3 && "btn-keyframe 0.6s"
                        }}

                    >
                        <NevItem
                            name="Video Marketing"
                            ItemID={props.NavItems}
                            id={3}
                            NextItemID={nextItemID}
                        />
                    </button>
                    <div className="circle-div"
                        style={{
                            left: props.NavItems === 3 && "-22%",
                            backgroundColor: props.NavItems === 3 && "#ff4d4d"
                        }}
                    ><p>3</p></div>
                    <div className="tap-icon-div"
                        style={{
                            visibility: props.NavItems === 3 && "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>
                <div className="nev-item-four-div">
                    <button
                        onClick={() => { handleClick(4) }}
                        // onMouseLeave={() => { handleClick(0) }}
                        style={{
                            transform: props.NavItems === 4 && `scale(${1.54})`,
                            right: props.NavItems === 4 && "18%",
                            backgroundColor: props.NavItems === 4 && "#333333",
                            borderTopLeftRadius: props.NavItems === 4 && "20px",
                            animation: props.NavItems === 4 && "btn-keyframe 0.6s"
                        }}
                    >
                        <NevItem
                            name="Newspaper Ads"
                            ItemID={props.NavItems}
                            id={4}
                            NextItemID={nextItemID}
                        />
                    </button>
                    <div className="circle-div"
                        style={{
                            left: props.NavItems === 4 && "-22%",
                            backgroundColor: props.NavItems === 4 && "#ff4d4d"
                        }}
                    ><p>4</p></div>
                    <div className="tap-icon-div"
                        style={{
                            visibility: props.NavItems === 4 && "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>

                <div className="nev-item-five-div">
                    <button
                        onClick={() => { handleClick(5) }}
                        style={{
                            transform: props.NavItems === 5 && `scale(${1.54})`,
                            right: props.NavItems === 5 && "18%",
                            backgroundColor: props.NavItems === 5 && "#333333",
                            borderTopLeftRadius: props.NavItems === 5 && "20px",
                            animation: props.NavItems === 5 && "btn-keyframe 0.6s"
                        }}
                    >
                        <NevItem
                            name="Kiosk Marketing"
                            ItemID={props.NavItems}
                            id={5}
                            NextItemID={nextItemID}
                        />
                    </button>
                    <div className="circle-div"
                        style={{
                            left: props.NavItems === 5 && "-22%",
                            backgroundColor: props.NavItems === 5 && "#ff4d4d"
                        }}
                    ><p>5</p></div>
                    <div className="tap-icon-div"
                        style={{
                            visibility: props.NavItems === 5 && "hidden"
                        }}
                    >
                        <TouchAppIcon className="tap-icon"
                            style={{
                                animation: upDownEffect && "tapIcon-KeyFrame 0.2s"

                            }}
                        />
                    </div>
                </div>



            </div>
        </>
    )
} 