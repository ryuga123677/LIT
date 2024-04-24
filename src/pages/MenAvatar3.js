import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath0 from "../common/assets/Avatar/malechar/Male R 03.png";
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

//imported shirts images

import pant1 from "../common/assets/Avatar/malechar/pants/pant.png";
import pant2 from "../common/assets/Avatar/malechar/pants/pant2.png";
import pant3 from "../common/assets/Avatar/malechar/pants/pant3.png";
import pant4 from "../common/assets/Avatar/malechar/pants/pant4.png";
import pant5 from "../common/assets/Avatar/malechar/pants/pant5.png";
import pant6 from "../common/assets/Avatar/malechar/pants/pant6.png";
import pant7 from "../common/assets/Avatar/malechar/pants/pant7.png";
//imported pant images
import bg from "../common/assets/bg.jpg"; //imported background image

const MenAvatar2 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [shirtImage, setShirtImage] = useState(shirt13); //starting or initial cloth
  const [pantImage, setPantImage] = useState(pant7);
  const [value1, setValue1] = useState(50); //setvalues for sliders
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(50);
  const [value4, setValue4] = useState(50);

  const [shirtPosition, setShirtPosition] = useState({ x: 215, y: 68 }); //starting or initial cloth positioning values
  const [shirtScale, setShirtScale] = useState({
    width: 189,
    height: 299,
  });
  // shirt13, 215, 68, 189, 299
  // shirt3, 212, 97, 197, 271
  // (shirt7, 180, 90, 264, 241
  const [pantPosition, setPantPosition] = useState({ x: 191, y: 295 });
  const [pantScale, setPantScale] = useState({ width: 231, height: 315 });
  // pant7, 191, 295, 231, 315)

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
  // using slider so to get a position value for cloth!!

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

  useEffect(() => {
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath0);
        shirtref1.current = p.loadImage(shirtImage);
        pantref1.current = p.loadImage(pantImage);
        background.current = p.loadImage(bg);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

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
          gap: 20,
          flexWrap: "wrap",
          height: "100vh",
        }} //buttoms for shirts
      >
        <div ref={canvasRef} style={{ width: "50%" }}></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "400px",
            }}
          >
            <button
              onClick={() => handleChangeshirt(shirt1, 208, 90, 203, 271)}
            >
              <img src={shirt1} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt2, 209, 87, 201, 271)}
            >
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 212, 97, 197, 271)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt4, 95, 84, 428, 555)}>
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt5, 198, 30, 217, 358)}
            >
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 221, 102, 177, 236)}
            >
              <img src={shirt6} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt7, 180, 90, 264, 241)}
            >
              <img src={shirt7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt8, 203, 93, 215, 266)}
            >
              <img src={shirt8} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt9, 205, 105, 211, 236)}
            >
              <img src={shirt9} height="100px" width="100px" />
            </button>

            <button
              onClick={() => handleChangeshirt(shirt11, 206, 104, 203, 237)}
            >
              <img src={shirt11} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt12, 207, 105, 204, 237)}
            >
              <img src={shirt12} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt13, 215, 68, 189, 299)}
            >
              <img src={shirt13} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt14, 129, 60, 362, 351)}
            >
              <img src={shirt14} height="100px" width="100px" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "400px",
            }}
          >
            <button onClick={() => handleChangepant(pant1, 128, 283, 358, 348)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 174, 304, 261, 310)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 181, 289, 253, 319)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 28, 263, 550, 385)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 179, 266, 259, 349)}>
              <img src={pant5} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant6, 174, 290, 272, 330)}>
              <img src={pant6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant7, 191, 295, 231, 315)}>
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
      </div>
    </>
  );
};

export default MenAvatar2;
