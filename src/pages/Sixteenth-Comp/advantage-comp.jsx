import "./advantage-comp.scss";

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export default function AdvantageComp(props) {

    return (
        <>
            <div className="advantage-comp-main-container">

                <div className="left-part-div">
                    <p><span></span>{props.name}</p>
                </div>
                <div className="right-part-div">
                    <p
                        style={{
                            backgroundColor: props.Value1 === "checked" ? "#52d315" : "#ff4f4f"
                        }}
                    >   {
                            props.Value1 === "checked" ?
                                <CheckRoundedIcon className="icon" /> :
                                <CloseRoundedIcon className="icon" />
                        }
                    </p>
                    <p
                        style={{
                            backgroundColor: props.Value2 === "checked" ? "#52d315" : "#ff4f4f"
                        }}
                    >   {
                            props.Value2 === "checked" ?
                                <CheckRoundedIcon className="icon" /> :
                                <CloseRoundedIcon className="icon" />
                        }
                    </p>
                    <p
                        style={{
                            backgroundColor: props.Value3 === "checked" ? "#52d315" : "#ff4f4f"
                        }}
                    >   {
                            props.Value3 === "checked" ?
                                <CheckRoundedIcon className="icon" /> :
                                <CloseRoundedIcon className="icon" />
                        }
                    </p>
                    <p
                        style={{
                            backgroundColor: props.Value4 === "checked" ? "#52d315" : "#ff4f4f"
                        }}
                    >   {
                            props.Value4 === "checked" ?
                                <CheckRoundedIcon className="icon" /> :
                                <CloseRoundedIcon className="icon" />
                        }
                    </p>
                    <p
                        style={{
                            backgroundColor: props.Value5 === "checked" ? "#52d315" : "#ff4f4f"
                        }}
                    >   {
                            props.Value5 === "checked" ?
                                <CheckRoundedIcon className="icon" /> :
                                <CloseRoundedIcon className="icon" />
                        }
                    </p>
                    <p
                        style={{
                            backgroundColor: props.Value6 === "checked" ? "#52d315" : "#ff4f4f"
                        }}
                    >   {
                            props.Value6 === "checked" ?
                                <CheckRoundedIcon className="icon" /> :
                                <CloseRoundedIcon className="icon" />
                        }
                    </p>
                </div>

            </div>
        </>
    )
}