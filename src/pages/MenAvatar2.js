import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath0 from "../common/assets/Avatar/malechar/Male R02 new.png";
import shirt1 from "../common/assets/Avatar/malechar/shirts/shirt.png";
import shirt2 from "../common/assets/Avatar/malechar/shirts/shirt_2.png";
import shirt3 from "../common/assets/Avatar/malechar/shirts/shirt3.png";
import shirt4 from "../common/assets/Avatar/malechar/shirts/shirt4.png";
import shirt5 from "../common/assets/Avatar/malechar/shirts/shirt_5.png";
import shirt6 from "../common/assets/Avatar/malechar/shirts/shirt_6.png";
import shirt7 from "../common/assets/Avatar/malechar/shirts/shirt_7.png";
import shirt8 from "../common/assets/Avatar/malechar/shirts/shirt_8.png";
import shirt9 from "../common/assets/Avatar/malechar/shirts/shirt_9.png";
import shirt10 from "../common/assets/Avatar/malechar/shirts/shirt_10.png";
import shirt11 from "../common/assets/Avatar/malechar/shirts/M2_11.png";
import shirt12 from "../common/assets/Avatar/malechar/shirts/M2_12.png";
import shirt13 from "../common/assets/Avatar/malechar/shirts/shirt12.png";
import shirt14 from "../common/assets/Avatar/malechar/shirts/shirt_14.png";

//imported shirts images

import pant1 from "../common/assets/Avatar/malechar/pants/pant_1.png";
import pant2 from "../common/assets/Avatar/malechar/pants/pant2.png";
import pant3 from "../common/assets/Avatar/malechar/pants/pant3.png";
import pant4 from "../common/assets/Avatar/malechar/pants/pant_4.png";
import pant5 from "../common/assets/Avatar/malechar/pants/pant5.png";
import pant6 from "../common/assets/Avatar/malechar/pants/pant6.png";
import pant7 from "../common/assets/Avatar/malechar/pants/pant_7.png";
import pant8 from "../common/assets/Avatar/malechar/pants/pant8.png";
import pant9 from "../common/assets/Avatar/malechar/pants/pant9.png";
import pant10 from "../common/assets/Avatar/malechar/pants/Hair1.png";
import pant11 from "../common/assets/Avatar/malechar/pants/Hair2.png";
import pant12 from "../common/assets/Avatar/malechar/pants/Hair3.png";
import pant13 from "../common/assets/Avatar/malechar/pants/Hair4.png";

//imported pant images

import bg from "../common/assets/Bgdark.jpg";
import bg1 from "../common/assets/Bgcroqui3.jpg";
//imported background image
import { useMediaQuery } from "@mui/material";
const MenAvatar2 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [shirtImage, setShirtImage] = useState(shirt2); //starting or initial cloth
  const [pantImage, setPantImage] = useState(pant7);
  const [value1, setValue1] = useState(50); //setvalues for sliders
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(50);
  const [value4, setValue4] = useState(50);

  const [shirtPosition, setShirtPosition] = useState({ x: 81, y: 22 }); //starting or initial cloth positioning values
  const [shirtScale, setShirtScale] = useState({
    width: 463,
    height: 626,
  });

  const [pantPosition, setPantPosition] = useState({ x: 84, y: 46 });
  const [pantScale, setPantScale] = useState({ width: 458, height: 614 });
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const imgRef = useRef(null);
  const shirtref1 = useRef(null);
  const shirtref2 = useRef(null);
  const shirtref3 = useRef(null);
  const shirtref4 = useRef(null);
  const shirtref5 = useRef(null);
  const shirtref6 = useRef(null);
  const shirtref7 = useRef(null);
  const shirtref8 = useRef(null);
  const shirtref9 = useRef(null);
  const shirtref10 = useRef(null);
  const shirtref11 = useRef(null);
  const shirtref12 = useRef(null);
  const shirtref13 = useRef(null);

  const pantref1 = useRef(null);
  const pantref2 = useRef(null);
  const pantref3 = useRef(null);
  const pantref4 = useRef(null);
  const pantref5 = useRef(null);
  const pantref6 = useRef(null);
  const pantref7 = useRef(null);
  const pantref8 = useRef(null);
  const pantref9 = useRef(null);
  const pantref10 = useRef(null);
  const pantref11 = useRef(null);
  const pantref12 = useRef(null);
  const pantref13 = useRef(null);

  const background = useRef(null);
  const background1 = useRef(null);

  const myP5Ref = useRef(null);
  // using slider so to get a position value for cloth!!
  const handleSliderChange1 = (event) => {
    setValue1(event.target.value);
    setPantPosition((prevState) => ({ ...prevState, x: event.target.value })); //here give a shirt slider but for pant setPantposition
  };

  const handleSliderChange2 = (event) => {
    setValue2(event.target.value);
    setPantPosition((prevState) => ({ ...prevState, y: event.target.value }));
  };

  const handleSliderChange3 = (event) => {
    setValue3(event.target.value);
    setPantScale((prevState) => ({ ...prevState, width: event.target.value }));
  };

  const handleSliderChange4 = (event) => {
    setValue4(event.target.value);
    setPantScale((prevState) => ({
      ...prevState,
      height: event.target.value,
    }));
  };

  useEffect(() => {
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath0);
        shirtref1.current = p.loadImage(shirtImage);
        pantref1.current = p.loadImage(pantImage);
        background1.current = p.loadImage(bg1);
        background.current = p.loadImage(bg);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    const setupSketch = (p) => {
      try {
        p.setup = () => {
          const canvasWidth = window.innerWidth;
          const canvasHeight = window.innerHeight;
          p.createCanvas(canvasWidth, canvasHeight);
        };
        p.draw = () => {
          p.background(background.current);
          p.image(background1.current, -3, 19, 635, 640);
          p.image(imgRef.current, -3, 19, 635, 640);

          p.image(
            pantref1.current,
            pantPosition.x,
            pantPosition.y,
            pantScale.width,
            pantScale.height
          );
          p.image(
            shirtref1.current,
            shirtPosition.x,
            shirtPosition.y,
            shirtScale.width,
            shirtScale.height
          );
        };
      } catch (error) {
        console.error("Error setting up sketch:", error);
      }
    };

    try {
      myP5Ref.current = new p5(setupSketch, canvasRef.current);
      preloadImage(myP5Ref.current);
    } catch (error) {
      console.error("Error initializing p5.js sketch:", error);
    }

    return () => {
      try {
        myP5Ref.current.remove();
      } catch (error) {
        console.error("Error removing p5.js sketch:", error);
      }
    };
  }, [
    shirtImage,
    shirtPosition,
    shirtScale,
    pantImage,
    pantPosition,
    pantScale,
    value1,
    value2,
    value3,
    value4,
  ]);

  const handleChangeshirt = (
    newShirtImage,
    newX,
    newY,
    newWidth,
    newHeight
  ) => {
    setShirtImage(newShirtImage);
    setShirtPosition({ x: newX, y: newY });
    setShirtScale({ width: newWidth, height: newHeight });
  };
  const handleChangepant = (newPantImage, newX, newY, newWidth, newHeight) => {
    setPantImage(newPantImage);
    setPantPosition({ x: newX, y: newY });
    setPantScale({ width: newWidth, height: newHeight });
  };
  const handleChangelip = (newPantImage, newX, newY, newWidth, newHeight) => {
    //setLipImage(newPantImage);
    //setLipPosition({ x: newX, y: newY });
    //setLipScale({ width: newWidth, height: newHeight });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "140px",

          flexWrap: "wrap",
          height: "100vh",
        }} //buttoms for shirts
      >
        <div ref={canvasRef} style={{ width: "50%" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            maxHeight: "700px",
            paddingTop: "70px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              Width: "500px",
              height: "200px",
              gap: "5px",
            }}
          >
            <button
              onClick={() => handleChangeshirt(shirt1, 217, 102, 195, 231)} //102
            >
              <img src={shirt1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt2, 81, 22, 463, 626)}>
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 224, 103, 182, 270)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt4, 70, 94, 488, 554)}>
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt5, 83, 1, 462, 741)}>
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 228, 113, 181, 231)}
            >
              <img src={shirt6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt7, 89, 19, 451, 643)}>
              <img src={shirt7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt8, 216, 100, 201, 255)}
            >
              <img src={shirt8} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt9, 85, 22, 457, 629)}>
              <img src={shirt9} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt10, 80, 10, 467, 700)}
            >
              <img src={shirt10} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt11, 74, 2, 482, 747)}>
              <img src={shirt11} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt12, 83, 13, 460, 679)}
            >
              <img src={shirt12} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt13, 221, 109, 191, 241)}
            >
              <img src={shirt13} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt14, 80, 10, 467, 700)}
            >
              <img src={shirt14} height="100px" width="100px" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              Width: "400px",
              height: "200px",
              gap: "5px",
            }}
          >
            <button onClick={() => handleChangepant(pant1, 77, 16, 475, 653)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 191, 286, 248, 349)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 192, 271, 255, 358)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 85, 38, 456, 617)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 186, 251, 265, 373)}>
              <img src={pant5} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant6, 189, 265, 260, 360)}>
              <img src={pant6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant7, 84, 46, 458, 614)}>
              <img src={pant7} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant8, 168, 279, 297, 350)}>
              <img src={pant8} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant9, 175, 297, 285, 318)}>
              <img src={pant9} height="100px" width="100px" />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              Width: "400px",
              height: "200px",
              gap: "5px",
            }}
          >
            <button onClick={() => handleChangepant(shirt4, 70, 94, 488, 554)}>
              <img src={shirt4} height="100px" width="100px" />
            </button>

            <button
              onClick={() => handleChangepant(pant10, 185, -126, 314, 396)}
            >
              <img src={pant10} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangepant(pant11, 165, -188, 354, 510)}
            >
              <img src={pant11} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangepant(pant12, 144, -156, 354, 451)}
            >
              <img src={pant12} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangepant(pant13, 162, -157, 354, 451)}
            >
              <img src={pant13} height="100px" width="100px" />
            </button>
          </div>

          <div>
            <div>
              <label>Slider 1</label>
              <input
                type="range"
                min="-700"
                max="700"
                value={value1}
                onChange={handleSliderChange1}
              />
              <span>{value1}</span>
            </div>
            <div>
              <label>Slider 2</label>
              <input
                type="range"
                min="-700"
                max="700"
                value={value2}
                onChange={handleSliderChange2}
              />
              <span>{value2}</span>
            </div>
            <div>
              <label>Slider 3</label>
              <input
                type="range"
                min="0"
                max="700"
                value={value3}
                onChange={handleSliderChange3}
              />
              <span>{value3}</span>
            </div>
            <div>
              <label>Slider 4</label>
              <input
                type="range"
                min="0"
                max="900"
                value={value4}
                onChange={handleSliderChange4}
              />
              <span>{value4}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenAvatar2;
