import { useState, useRef, useEffect } from "react";
import "./App.scss";
import React from "react";
import { navigatingBarData } from "./pages/Nevigating-Bars/NevigatingBarData";

import FirstPDComp from "./pages/First-Comp/firstPD-comp";
import SecondPDComp from "./pages/Second-Comp/secondPD-comp";
import ThirdPDComp from "./pages/Third-Comp/thirdPD-comp";
import FourthPDComp from "./pages/Fourth-Comp/fourthPD-comp";

import FifthPDComp from "./pages/Fifth-Comp/fifthPD-comp";
import SixPDComp from "./pages/Six-Comp/sixPD-comp";
import SeventhPDComp from "./pages/Seventh-Comp/seventhPD-comp";
import EighthFDComp from "./pages/Eighth-Comp/eighthPD-comp";

import NinthFDComp from "./pages/Ninth-Comp/ninthFD-comp";
import NavigatingBar from "./pages/Nevigating-Bars/navigating-bar";
import TenthPDComp from "./pages/Tenth-Comp/tenthPD-comp";
import EleventhPDComp from "./pages/Eleventh-Comp/eleventhPD-comp";

import TwelvethPDComp from "./pages/Twelveth-comp/twelvethPD-comp";
// import ThirteenthPDComp from "./pages/Thirteenth-Comp/thirteenthPD-comp";
import ThirteenthPDComp2 from "./pages/Thirteenth-Comp2/thirteenthPD2-comp";
import FourteenPDComp from "./pages/Fourteen-Comp/fourteenPD-comp";
import FifteenthPDComp from "./pages/Fifteen-Comp/fifteenthPD-comp";
import SixteenthComp from "./pages/Sixteenth-Comp/sixteenth-comp";
import SeventeenthComp from "./pages/Seventeenth-Comp/seventeenth-comp";


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ClickToContinueComp from "./components/Click-To-Continue-Comp/click-to-continue-comp";
import PhoneRotationComp from "./components/Phone-Rotation-Comp/phone-rotation-comp";


export default function App() {

  let [navID, setNavID] = useState(0)

  const [navbarVisibility, setNavbarVisibility] = useState(false);

  function handleNavbarVisibilityTrue() {
    setNavbarVisibility(true)
  }
  function handleNavbarVisibilityFalse() {
    setNavbarVisibility(false)
  }


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const ref9 = useRef(null);
  const ref10 = useRef(null);
  const ref11 = useRef(null);
  const ref12 = useRef(null);

  const ref13 = useRef(null);
  const ref14 = useRef(null);
  const ref15 = useRef(null);
  const ref16 = useRef(null);
  const ref17 = useRef(null);






  const handleClick = (id) => {
    id === 0 && ref1.current.scrollIntoView({ behavior: 'smooth' });
    id === 1 && ref2.current.scrollIntoView({ behavior: 'smooth' });
    id === 2 && ref3.current.scrollIntoView({ behavior: 'smooth' });
    id === 3 && ref4.current.scrollIntoView({ behavior: 'smooth' });

    id === 4 && ref5.current.scrollIntoView({ behavior: 'smooth' });
    id === 5 && ref6.current.scrollIntoView({ behavior: 'smooth' });
    id === 6 && ref7.current.scrollIntoView({ behavior: 'smooth' });
    id === 7 && ref8.current.scrollIntoView({ behavior: 'smooth' });

    id === 8 && ref9.current.scrollIntoView({ behavior: 'smooth' });
    id === 9 && ref10.current.scrollIntoView({ behavior: 'smooth' });
    id === 10 && ref11.current.scrollIntoView({ behavior: 'smooth' });
    id === 11 && ref12.current.scrollIntoView({ behavior: 'smooth' });

    id === 12 && ref13.current.scrollIntoView({ behavior: 'smooth' });
    id === 13 && ref14.current.scrollIntoView({ behavior: 'smooth' });
    id === 14 && ref15.current.scrollIntoView({ behavior: 'smooth' });
    id === 15 && ref16.current.scrollIntoView({ behavior: 'smooth' });
    id === 16 && ref17.current.scrollIntoView({ behavior: 'smooth' });


    setNavID(id)


  };

  function handleRightClick() {

    if (navID === navigatingBarData.length - 1) {
      setNavID(navID = 0)

    } else {
      setNavID(navID = navID + 1)

    }
    handleClick(navID)
  }

  function handleLeftClick() {

    if (navID === 0) {
      setNavID(navID = navigatingBarData.length - 1)

    } else {
      setNavID(navID = navID - 1)

    }
    handleClick(navID)
  }



  const [OnLoadEvent, setOnLoadEvent] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setOnLoadEvent(false)
    }, 1000)
  }, [])

  function handleOnLoadEvent() {
    setOnLoadEvent(true)
  }

  let mediaQuery = window.matchMedia(`(max-width: 630px)`);
  const [query, setQuery] = useState(mediaQuery.matches);

  useEffect(() => {
    window.onresize = () => {
      setQuery(mediaQuery.matches)

    };

  }, [mediaQuery])

  function handleOnLoadPhoneRotateEven() {
    setQuery(false)
  }

  return (
    <>
      <div className="app-main" >

        <div className="click-to-continue-comp-div"
          onClick={handleOnLoadEvent}

          style={{
            visibility: OnLoadEvent && "hidden",
          }}
        >
          <ClickToContinueComp
            OnLoadEvent={OnLoadEvent}
          />

        </div>
        <div className="phone-rotation-indication-div"
          onClick={handleOnLoadPhoneRotateEven}
          style={{
            display: !query && "none"
          }}
        >
          <PhoneRotationComp />
        </div>

        <div
          className="App-main-bottom-nav"
          onMouseEnter={handleNavbarVisibilityTrue}
        >
          <NavigatingBar
            HandleNavbarVisibilityTrue={handleNavbarVisibilityTrue}
            HandleNavbarVisibilityFalse={handleNavbarVisibilityFalse}
            NavbarVisibility={navbarVisibility}
            HandleClick={handleClick}
            NavID={navID}

          />

        </div>

        <div className="app-left-btn-nav"
          onClick={handleLeftClick}
        >
          <ArrowBackIosIcon
            className="arrow-icon"
            style={{
              color: "#ffffff"
            }}
          /><p>BACK</p></div>
        <div className="app-right-btn-nav"
          onClick={handleRightClick}
        >
          <p>NEXT</p>
          <ArrowForwardIosIcon
            className="arrow-icon"
            style={{
              color: "#ffffff"
            }}
          />

        </div>


        <div style={{ minWidth: "100%" }} ref={ref1}><FirstPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref2}><SecondPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref3}><ThirdPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref4}><FourthPDComp /></div>

        <div style={{ minWidth: "100%" }} ref={ref5}><FifthPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref6}><SixPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref7}><SeventhPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref8}><EighthFDComp /></div>

        <div style={{ minWidth: "100%" }} ref={ref9}><NinthFDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref10}><TenthPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref11}><SixteenthComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref12}><EleventhPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref13}><SeventeenthComp /></div>

        <div style={{ minWidth: "100%" }} ref={ref14}><TwelvethPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref15}><ThirteenthPDComp2 /></div>
        <div style={{ minWidth: "100%" }} ref={ref16}><FourteenPDComp /></div>
        <div style={{ minWidth: "100%" }} ref={ref17}><FifteenthPDComp /></div>


      </div>
    </>
  );
}