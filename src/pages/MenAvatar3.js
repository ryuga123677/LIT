import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath0 from "../common/assets/Avatar/malechar/Male R 03.png";
import shirt1 from "../common/assets/Avatar/malechar/shirts/shirt.png";
import shirt2 from "../common/assets/Avatar/malechar/shirts/Male3_2.png";
import shirt3 from "../common/assets/Avatar/malechar/shirts/shirt3_M3.png";
import shirt4 from "../common/assets/Avatar/malechar/shirts/shirt4.png";
import shirt5 from "../common/assets/Avatar/malechar/shirts/Male3_5.png";
import shirt6 from "../common/assets/Avatar/malechar/shirts/Male3_6.png";
import shirt7 from "../common/assets/Avatar/malechar/shirts/Male3_7.png";
import shirt8 from "../common/assets/Avatar/malechar/shirts/Male3_8.png";
import shirt9 from "../common/assets/Avatar/malechar/shirts/shirtM3_9.png";
import shirt10 from "../common/assets/Avatar/malechar/shirts/shirtM3_10.png";
import shirt11 from "../common/assets/Avatar/malechar/shirts/shirt11.png";
import shirt12 from "../common/assets/Avatar/malechar/shirts/M3Shirt11.png";
import shirt13 from "../common/assets/Avatar/malechar/shirts/shirt13.png";
import shirt14 from "../common/assets/Avatar/malechar/shirts/Male3_14.png";
import shirt15 from "../common/assets/Avatar/malechar/shirts/shirt15.png";

//imported shirts images

import pant1 from "../common/assets/Avatar/malechar/pants/M3_1.png";
import pant2 from "../common/assets/Avatar/malechar/pants/M3_2.png";
import pant3 from "../common/assets/Avatar/malechar/pants/pantM3_3.png";
import pant4 from "../common/assets/Avatar/malechar/pants/M3_4.png";
import pant5 from "../common/assets/Avatar/malechar/pants/M3_5.png";
//import pant6 from "../common/assets/Avatar/malechar/pants/pant6.png";
import pant7 from "../common/assets/Avatar/malechar/pants/M3_7.png";
import pant8 from "../common/assets/Avatar/malechar/pants/Male3_9.png";
import pant9 from "../common/assets/Avatar/malechar/pants/pantM3_10.png";
import pant10 from "../common/assets/Avatar/malechar/pants/pantM3_11.png";
//import pant11 from "../common/assets/Avatar/malechar/pants/pantM3_12.png";
//imported pant images
import bg from "../common/assets/Bgdark.jpg"; //imported background image
import bg1 from "../common/assets/Bgcroqui3.jpg";
import { useMediaQuery } from "@mui/material";

const MenAvatar3 = () => {
  //Hook for navigation
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  // State for shirt and pant images, positions, and scales
  const [shirtImage, setShirtImage] = useState(shirt13); //starting or initial cloth
  const [pantImage, setPantImage] = useState(pant8);
  const [value1, setValue1] = useState(50); //setvalues for sliders
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(50);
  const [value4, setValue4] = useState(50);

  const [shirtPosition, setShirtPosition] = useState({ x: 219, y: 68 }); //starting or initial cloth positioning values
  const [shirtScale, setShirtScale] = useState({
    width: 183,
    height: 299,
  });
  // shirt13, 215, 68, 189, 299
  // shirt3, 212, 97, 197, 271
  // (shirt7, 180, 90, 264, 241
  const [pantPosition, setPantPosition] = useState({ x: 99, y: -79 });
  const [pantScale, setPantScale] = useState({ width: 409, height: 829 });
  // pant7, 191, 295, 231, 315)
  //99, -79, 409, 829;
  const isXsScreen = useMediaQuery("(max-width:600px)");
  // References for canvas and images

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

  const pantref1 = useRef(null);
  const pantref2 = useRef(null);
  const pantref3 = useRef(null);
  const pantref4 = useRef(null);
  const pantref5 = useRef(null);
  //const pantref6 = useRef(null);
  const pantref7 = useRef(null);
  const pantref8 = useRef(null);
  const pantref9 = useRef(null);
  const pantref10 = useRef(null);
  const pantref11 = useRef(null);

  const background = useRef(null);
  const background1 = useRef(null);
  const myP5Ref = useRef(null);
  // using slider so to get a position value for cloth!!

  const handleSliderChange1 = (event) => {
    setValue1(event.target.value);
    setPantPosition((prevState) => ({ ...prevState, x: event.target.value }));
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
  // Effect hook to set up the p5.js sketch
  useEffect(() => {
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath0);
        shirtref1.current = p.loadImage(shirtImage);
        pantref1.current = p.loadImage(pantImage);
        background.current = p.loadImage(bg);
        background1.current = p.loadImage(bg1);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    // Function to set up the p5.js sketch
    const setupSketch = (p) => {
      try {
        p.setup = () => {
          const canvasWidth = window.innerWidth;
          const canvasHeight = window.innerHeight;
          p.createCanvas(canvasWidth, canvasHeight);
        };
        p.draw = () => {
          p.background(background.current);
          p.image(background1.current, 85, 20, 450, 640); //-9, 0, 650, 840 bigcentre....0, 90, 550, 640.
          p.image(imgRef.current, 90, 20, 450, 640);

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
        // Initializing p5.js sketch
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
  // Function to handle shirt change
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
  // Function to handle pant change
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
              onClick={() => handleChangeshirt(shirt1, 208, 90, 203, 271)}
            >
              <img src={shirt1} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt2, 97, -82, 411, 816)}
            >
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 98, -91, 410, 845)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt4, 95, 84, 428, 555)}>
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt5, 72, -102, 457, 890)}
            >
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 73, -76, 457, 796)}
            >
              <img src={shirt6} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt7, 93, -82, 419, 817)}
            >
              <img src={shirt7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt8, 88, -91, 426, 844)}
            >
              <img src={shirt8} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt9, 87, -101, 437, 883)}
            >
              <img src={shirt9} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt10, 102, -92, 402, 848)}
            >
              <img src={shirt10} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt12, 66, 4, 485, 725)}>
              <img src={shirt12} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt13, 215, 68, 189, 299)}
            >
              <img src={shirt13} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt14, 96, -106, 418, 900)}
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
            <button onClick={() => handleChangepant(pant1, 88, -97, 427, 858)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 82, -76, 441, 817)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 92, -83, 421, 837)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 92, -83, 421, 837)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 98, -51, 408, 776)}>
              <img src={pant5} height="100px" width="100px" />
            </button>

            <button onClick={() => handleChangepant(pant7, 83, 22, 446, 615)}>
              <img src={pant7} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant8, 99, -79, 409, 829)}>
              <img src={pant8} height="100px" width="100px" />
            </button>

            <button onClick={() => handleChangepant(pant10, 85, -74, 433, 814)}>
              <img src={pant10} height="100px" width="100px" />
            </button>
          </div>
          <div>
            <div>
              <label>Slider 1</label>
              <input
                type="range"
                min="-900"
                max="900"
                value={value1}
                onChange={handleSliderChange1}
              />
              <span>{value1}</span>
            </div>
            <div>
              <label>Slider 2</label>
              <input
                type="range"
                min="-900"
                max="900"
                value={value2}
                onChange={handleSliderChange2}
              />
              <span>{value2}</span>
            </div>
            <div>
              <label>Slider 3</label>
              <input
                type="range"
                min="-900"
                max="900"
                value={value3}
                onChange={handleSliderChange3}
              />
              <span>{value3}</span>
            </div>
            <div>
              <label>Slider 4</label>
              <input
                type="range"
                min="-900"
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

export default MenAvatar3;
