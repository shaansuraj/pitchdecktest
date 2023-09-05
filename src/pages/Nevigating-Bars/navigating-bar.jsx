import React, { useState } from "react";
// import React, { useEffect, useRef } from 'react';
import "./navigating-bar.scss";
import { navigatingBarData } from "./NevigatingBarData";


export default function NavigatingBar(props) {

  let [itemID, setItemID] = useState(0)




  function handleItemId(id) {
    setItemID(id)
  }


  return (
    <>
      <div className="navigating-bar-main-container"

        onMouseLeave={props.HandleNavbarVisibilityFalse}
        style={{
          bottom: !props.NavbarVisibility && "-730%"
        }}
      >
        <div className="top-layer">
          <div className="hidden-layer-div"
            onMouseEnter={props.HandleNavbarVisibilityTrue}
          ></div>
          {/* <hr className="hr-1" /> */}
          <p>{props.NavID + 1} / {navigatingBarData.length}</p>

          <hr className="hr-2" />

          <p>Quick Access Bar</p>

          <hr className="hr-3" />

          <div className="para-div">{
            navigatingBarData.map((item, index) => {
              return <p key={index}>{props.NavID === index && item.name}</p>
            })


          }
          </div>
        </div>
        <div className="middle-layer">
        </div>
        <div className="bottom-layer">
          {navigatingBarData.map((item, index) => {
            let heightValue
            index % 2 === 0 ? heightValue = 65 : heightValue = 50

            return (
              <div
                className="btn-div" key={index}
                style={{
                  height: itemID === index ? "100%" : `${heightValue}%`,
                  boxShadow: itemID === index && "3px 3px 2px gray"
                }}
              >
                <button
                  key={index}
                  onMouseEnter={() => {
                    handleItemId(index)
                  }}
                  onMouseLeave={() => {
                    handleItemId(-1)
                  }}
                  onClick={() => {
                    props.HandleClick(index)
                  }}
                >
                  {
                    itemID === index ?
                      <img className="imgOne" src={item.imgURL2} alt="" /> :
                      <img className="imgOne" src={item.imgURL1} alt="" />
                  }
                </button>

                {/* <div className="name-div"
                    style={{
                      opacity: itemID === index ? "1" : "0"

                    }}
                  >
                    <p>{item.name}</p>
                  </div> */}
                <div className="name-div2"
                  style={{
                    opacity: itemID === index ? "0" : "1",
                    // height: itemID === index ? "100%" : `${heightValue}%`,
                    // top: heightValue === 65 ? "20%" : heightValue === 50 && "-0%"



                  }}
                >
                  <p>{item.shortName}</p>
                </div>

              </div>
            )
          })}
        </div>


      </div>
    </>
  )
}