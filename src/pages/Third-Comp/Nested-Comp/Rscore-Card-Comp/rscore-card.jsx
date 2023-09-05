import "./rscore-card.scss";

export default function RscoreCard(props) {
    const Frame2 = "https://rentblob.blob.core.windows.net/pitch/img/rscore-img/frame%20392.png";

    return (
        <>
            <div className="rscore-card-main-contianer"
                style={{
                    opacity: !props.HiddenHoverDiv ? "0" : "1"
                }}
            >
                <div className="main-img-div">
                    <img src={Frame2} alt="" className="bg-img" />
                    <div className="shape1-div"></div>
                    <div className="shape2-div"></div>
                    <div className="heading">
                        <h1> Benefits Of <br />
                            <span>RSCORE</span>
                        </h1>
                    </div>
                </div>

                <div className="contents-div">

                    <ul>
                        <li><span></span>Rent applications can be considered quickly.</li>
                        <li><span></span>Negotiation power for future renting is enhanced.</li>
                        <li><span></span>Authentic financial history is established.</li>
                        <li><span></span>Tenant analysis becomes easy and accurate.</li>
                        <li><span></span>Rental offers can be chosen according to Rscore.</li>
                        <li><span></span> Lease rental discounts based on tenant history.</li>
                        <li><span></span>Minimized rental risks & delayed payments.</li>




                    </ul>
                </div>
            </div>
        </>
    );
}
