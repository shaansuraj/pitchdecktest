import React from 'react';
import './raia-comp.scss';
import { ImageServer } from '../../img/imageServer';

const Frame1 = `${ImageServer}img/Pitch-Deck/fourth-comp-img/frame1.png`;
const Frame2 = `${ImageServer}img/Pitch-Deck/fourth-comp-img/frame2.png`;
const MockUp = `${ImageServer}img/Pitch-Deck/fourth-comp-img/mock-up.png`;
const ChatImg = `${ImageServer}img/Pitch-Deck/fourth-comp-img/chat-img.png`;
const BackBTN = `${ImageServer}img/Pitch-Deck/fourth-comp-img/back-btn.png`;



export default function RaiaComp(props) {
    return (
        <div className="raia-comp-main-component">
            <button className="back-btn">
                <img src={BackBTN} alt=""
                    onClick={() => {
                        props.SetRaia(false)
                        props.HandleFrameVisibilityFalse(false)
                    }} />
            </button>
            <div className="top-frame-div">

                <img src={Frame1} alt="" />
            </div>
            <div className="bottom-frame-div">

                <img src={Frame2} alt="" />
                <div className="mobile-mock-up-div">
                    <img src={MockUp} alt="" className="mobile-mock-up" />
                    <div className="chat-screen">
                        <img src={ChatImg} alt="" />

                    </div>
                </div>
            </div>

        </div>)
}
