import React from "react";
import "./card-container-comp.scss";
import ContentCard from "./content-card";

export default function CardContainerComp(props) {
    return (
        <>
            <div className="card-container-comp-main-container">
                {props.Item.map((item, index) => {
                    return (
                        <div key={index}>
                            <ContentCard
                                id={index}
                                Heading={item.heading}
                                FirstPoint={item.firstPoint}
                                SecondPoint={item.secondPoint}
                                ThirdPoint={item.thirdPoint}
                            />
                        </div>
                    );
                })}

            </div>
        </>
    );
}