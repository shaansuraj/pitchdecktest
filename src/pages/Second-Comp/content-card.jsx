import React from "react";
import "./content-card.scss";
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


export default function ContentCard(props) {

    return (
        <>
            <div className="secondPD-comp-content-card-container">
                <div className="content-card-main-div">
                    <div className="top-part">
                        <div className="icon-div">
                            {
                                props.id === 0 ? <SettingsTwoToneIcon className="icon" /> :
                                    props.id === 1 ? <PersonIcon className="icon" /> :
                                        props.id === 2 && <WarningAmberIcon className="icon" />
                            }
                        </div>
                        <div className="heading-div">
                            <h1
                                // style={{
                                //     paddingLeft: !isHover && "4%",
                                //     color: !isHover && "#ff4d4d"

                                // }}
                                >
                                {props.Heading}
                            </h1>
                        </div>
                    </div>
                    <div className="bottom-part"
                        // onMouseEnter={handleHover}
                        // onMouseLeave={handleHover}
                        style={{
                            // backgroundColor: !isHover && "#333333",
                            // boxShadow: !isHover && "10px 10px 5px gray"

                        }}
                    >
                        <div className="para-div">
                            <div className="list-div">
                                <span
                                style={{
                                    opacity: props.FirstPoint === " " && "0"
                                }}
                                ></span>
                                <p
                                    // style={{ fontWeight: !isHover && "500" }}
                                >{props.FirstPoint}</p>
                            </div>
                            <div className="list-div">
                                <span
                                style={{
                                    opacity: props.SecondPoint === " " && "0"
                                }}
                                ></span>
                                <p
                                    // style={{ fontWeight: !isHover && "500" }}
                                >{props.SecondPoint}</p>
                            </div>
                            <div className="list-div">
                                <span
                                style={{
                                    opacity: props.ThirdPoint === " " && "0"
                                }}
                                ></span>
                                <p
                                    // style={{ fontWeight: !isHover && "500" }}
                                >{props.ThirdPoint}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}