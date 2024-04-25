import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
// Importing images
import imgPath1 from "../common/assets/Avatar/malechar/Male R 01_.png";
import shirt1 from "../common/assets/Avatar/malechar/shirts/shirt.png";
import shirt2 from "../common/assets/Avatar/malechar/shirts/shirt2.png";
import shirt3 from "../common/assets/Avatar/malechar/shirts/shirt3.png";
import shirt4 from "../common/assets/Avatar/malechar/shirts/shirt4.png";
import shirt5 from "../common/assets/Avatar/malechar/shirts/shirt5.png";
import shirt6 from "../common/assets/Avatar/malechar/shirts/shirt6.png";
import shirt7 from "../common/assets/Avatar/malechar/shirts/shirt7.png";
import shirt8 from "../common/assets/Avatar/malechar/shirts/shirt8.png";
import shirt9 from "../common/assets/Avatar/malechar/shirts/shirt9.png";
import shirt10 from "../common/assets/Avatar/malechar/shirts/shirt10.png";
import shirt11 from "../common/assets/Avatar/malechar/shirts/shirt11.png";
import shirt12 from "../common/assets/Avatar/malechar/shirts/shirt12.png";
import shirt13 from "../common/assets/Avatar/malechar/shirts/shirt13.png";
import shirt14 from "../common/assets/Avatar/malechar/shirts/shirt14.png";
import shirt15 from "../common/assets/Avatar/malechar/shirts/shirt15.png";
import pant1 from "../common/assets/Avatar/malechar/pants/pant.png";
import pant2 from "../common/assets/Avatar/malechar/pants/pant2.png";
import pant3 from "../common/assets/Avatar/malechar/pants/pant3.png";
import pant4 from "../common/assets/Avatar/malechar/pants/pant4.png";
import pant5 from "../common/assets/Avatar/malechar/pants/pant5.png";
import pant6 from "../common/assets/Avatar/malechar/pants/pant6.png";
import pant7 from "../common/assets/Avatar/malechar/pants/pant7.png";
import bg from "../common/assets/bg.jpg";
import {
  useMediaQuery,
} from "@mui/material";
// MenAvatar1 component
const MenAvatar1 = () => {
  // Hook for navigation
  const navigate = useNavigate();

  const canvasRef = useRef(null);
  // State for shirt and pant images, positions, and scales
  const [shirtImage, setShirtImage] = useState(shirt5);
  const [pantImage, setPantImage] = useState(pant3);
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(50);
  const [value4, setValue4] = useState(50);

  const [shirtPosition, setShirtPosition] = useState({ x: 192, y: 61 });
  const [shirtScale, setShirtScale] = useState({ width: 238, height: 260 });

  const [pantPosition, setPantPosition] = useState({ x: 187, y: 215 });
  const [pantScale, setPantScale] = useState({ width: 260, height: 400 });

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
  const pantref1 = useRef(null);
  const pantref2 = useRef(null);
  const pantref3 = useRef(null);
  const pantref4 = useRef(null);
  const pantref5 = useRef(null);
  const pantref6 = useRef(null);
  const pantref7 = useRef(null);
  const background = useRef(null);

  const myP5Ref = useRef(null);
  // Slider change handlers
  const handleSliderChange1 = (event) => {
    setValue1(event.target.value);
    setShirtPosition((prevState) => ({ ...prevState, x: event.target.value }));
  };

  const handleSliderChange2 = (event) => {
    setValue2(event.target.value);
    setShirtPosition((prevState) => ({ ...prevState, y: event.target.value }));
  };

  const handleSliderChange3 = (event) => {
    setValue3(event.target.value);
    setShirtScale((prevState) => ({ ...prevState, width: event.target.value }));
  };

  const handleSliderChange4 = (event) => {
    setValue4(event.target.value);
    setShirtScale((prevState) => ({
      ...prevState,
      height: event.target.value,
    }));
  };

  // Effect hook to set up the p5.js sketch
  useEffect(() => {
    // Function to preload images
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath1);
        shirtref1.current = p.loadImage(shirtImage);
        pantref1.current = p.loadImage(pantImage);
        background.current = p.loadImage(bg);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    // Function to set up the p5.js sketch
    const setupSketch = (p) => {
      try {
        p.setup = () => {
          const canvasWidth = canvasRef.current.offsetWidth;
          const canvasHeight = canvasRef.current.offsetHeight;
          p.createCanvas(canvasWidth, canvasHeight);
        };
        p.draw = () => {
          p.background(background.current);
          p.image(imgRef.current, 89, 20, 450, 640);
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
      // Initializing p5.js sketch
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

  return (
    <>
      {/* Display canvas and image buttons */}
      {!isXsScreen && (<div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap",
          height: "100vh",
        }}
      >
        {/* Canvas */}
        <div ref={canvasRef} style={{ width: "50%"  }}></div>
        {/* Image buttons */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Buttons for selecting shirt images */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "400px",
            }}
          >
            <button
              onClick={() => handleChangeshirt(shirt1, 215, 102, 198, 204)}
            >
              <img src={shirt1} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt2, 217, 98, 194, 268)}
            >
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 225, 100, 180, 270)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt4, 102, 87, 427, 556)}
            >
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt5, 192, 61, 238, 260)}
            >
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 221, 102, 177, 236)}
            >
              <img src={shirt6} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt7, 202, 94, 231, 246)}
            >
              <img src={shirt7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt8, 215, 96, 200, 271)}
            >
              <img src={shirt8} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt9, 199, 120, 223, 215)}
            >
              <img src={shirt9} height="100px" width="100px" />
            </button>

            <button
              onClick={() => handleChangeshirt(shirt11, 199, 120, 223, 215)}
            >
              <img src={shirt11} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt12, 199, 120, 223, 215)}
            >
              <img src={shirt12} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt13, 230, 68, 170, 321)}
            >
              <img src={shirt13} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt14, 145, 72, 338, 300)}
            >
              <img src={shirt14} height="100px" width="100px" />
            </button>
          </div>
          {/* Pant selection */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "400px",
            }}
          >
            <button onClick={() => handleChangepant(pant1, 145, 237, 336, 401)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 171, 257, 286, 367)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 187, 215, 260, 400)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 43, 217, 544, 440)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 185, 235, 265, 390)}>
              <img src={pant5} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant6, 182, 258, 271, 350)}>
              <img src={pant6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant7, 197, 242, 237, 375)}>
              <img src={pant7} height="100px" width="100px" />
            </button>
          </div>
          <div>
            <div>
              <label>Slider 1</label>
              <input
                type="range"
                min="0"
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
                min="0"
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
                max="700"
                value={value4}
                onChange={handleSliderChange4}
              />
              <span>{value4}</span>
            </div>
          </div>
        </div>
      </div>)}
      {isXsScreen && (<div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
         // flexWrap: "wrap",
          height: "100vh",
          width:"100vw"
        }}
      >
        {/* Canvas */}
        <div style={{ width: "100%" ,height:"100%"}}>
        <div ref={canvasRef} style={{ width: "100%" ,height:"100%"}}></div>
        </div>
       
        {/* Image buttons */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Buttons for selecting shirt images */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "400px",
            }}
          >
            <button
              onClick={() => handleChangeshirt(shirt1, 215, 102, 198, 204)}
            >
              <img src={shirt1} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt2, 217, 98, 194, 268)}
            >
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 225, 100, 180, 270)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt4, 102, 87, 427, 556)}
            >
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt5, 192, 61, 238, 260)}
            >
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 221, 102, 177, 236)}
            >
              <img src={shirt6} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt7, 202, 94, 231, 246)}
            >
              <img src={shirt7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt8, 215, 96, 200, 271)}
            >
              <img src={shirt8} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt9, 199, 120, 223, 215)}
            >
              <img src={shirt9} height="100px" width="100px" />
            </button>

            <button
              onClick={() => handleChangeshirt(shirt11, 199, 120, 223, 215)}
            >
              <img src={shirt11} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt12, 199, 120, 223, 215)}
            >
              <img src={shirt12} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt13, 230, 68, 170, 321)}
            >
              <img src={shirt13} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt14, 145, 72, 338, 300)}
            >
              <img src={shirt14} height="100px" width="100px" />
            </button>
          </div>
          {/* Pant selection */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "400px",
            }}
          >
            <button onClick={() => handleChangepant(pant1, 145, 237, 336, 401)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 171, 257, 286, 367)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 187, 215, 260, 400)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 43, 217, 544, 440)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 185, 235, 265, 390)}>
              <img src={pant5} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant6, 182, 258, 271, 350)}>
              <img src={pant6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant7, 197, 242, 237, 375)}>
              <img src={pant7} height="100px" width="100px" />
            </button>
          </div>
          <div>
            <div>
              <label>Slider 1</label>
              <input
                type="range"
                min="0"
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
                min="0"
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
                max="700"
                value={value4}
                onChange={handleSliderChange4}
              />
              <span>{value4}</span>
            </div>
          </div>
        </div>
      </div>)}
    </>
  );
};

export default MenAvatar1;
