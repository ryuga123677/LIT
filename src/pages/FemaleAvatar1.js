import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath1 from "../common/assets/Avatar/femalechar/Female AI croqui 01.png";
import shirt1 from "../common/assets/Avatar/femalechar/shirts/f_shirt.png";
import shirt2 from "../common/assets/Avatar/femalechar/shirts/f_shirt2.png";
import shirt3 from "../common/assets/Avatar/femalechar/shirts/f_shirt3.png";
import shirt4 from "../common/assets/Avatar/femalechar/shirts/f_shirt4.png";
import shirt5 from "../common/assets/Avatar/femalechar/shirts/f_shirt5.png";
import shirt6 from "../common/assets/Avatar/femalechar/shirts/f_shirt6.png";

import pant1 from "../common/assets/Avatar/femalechar/pants/f_pant.png";
import pant2 from "../common/assets/Avatar/femalechar/pants/f_pant2.png";
import pant3 from "../common/assets/Avatar/femalechar/pants/pant3.png";
import pant4 from "../common/assets/Avatar/femalechar/pants/f_pant4.png";
import pant5 from "../common/assets/Avatar/femalechar/pants/f_pant5.png";
import pant6 from "../common/assets/Avatar/femalechar/pants/f_pant6.png";

import bg from "../common/assets/bg.jpg";

const FemaleAvatar1 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [shirtImage, setShirtImage] = useState(shirt3);
  const [pantImage, setPantImage] = useState(pant1);
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(50);
  const [value4, setValue4] = useState(50);

  const [shirtPosition, setShirtPosition] = useState({ x: 196, y: 93 });
  const [shirtScale, setShirtScale] = useState({ width: 182, height: 251 });

  // shirt3, 196, 93, 182, 251
  const [pantPosition, setPantPosition] = useState({ x: 155, y: 274 });
  const [pantScale, setPantScale] = useState({ width: 290, height: 282 });

  // pant1, 155, 274, 290, 282)

  const imgRef = useRef(null);
  const shirtref1 = useRef(null);
  const shirtref2 = useRef(null);
  const shirtref3 = useRef(null);
  const shirtref4 = useRef(null);
  const shirtref5 = useRef(null);
  const shirtref6 = useRef(null);

  const pantref1 = useRef(null);
  const pantref2 = useRef(null);
  const pantref3 = useRef(null);
  const pantref4 = useRef(null);
  const pantref5 = useRef(null);
  const pantref6 = useRef(null);

  const background = useRef(null);

  const myP5Ref = useRef(null);

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
        imgRef.current = p.loadImage(imgPath1);
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
            shirtref1.current,
            shirtPosition.x,
            shirtPosition.y,
            shirtScale.width,
            shirtScale.height
          );
          p.image(
            pantref1.current,
            pantPosition.x,
            pantPosition.y,
            pantScale.width,
            pantScale.height
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
        }}
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
              onClick={() => handleChangeshirt(shirt1, 76, 66, 415, 550)}
            >
              <img src={shirt1} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt2, 192, 123, 177, 207)}
            >
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 196, 93, 182, 251)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt4, 200, 97, 182, 181)}
            >
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt5, 199, 63, 196, 255)}
            >
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 210, 107, 170, 185)}
            >
              <img src={shirt6} height="100px" width="100px" />
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
            <button onClick={() => handleChangepant(pant1, 155, 274, 290, 282)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 171, 250, 254, 302)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 197, 240, 212, 310)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 151, 235, 297, 330)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 206, 233, 167, 291)}>
              <img src={pant5} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant6, 100, 257, 380, 331)}>
              <img src={pant6} height="100px" width="100px" />
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

export default FemaleAvatar1;
