import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath1 from "../common/assets/Avatar/femalechar/Female 2 new.png";

//imported shirts images
import dress1 from "../common/assets/Avatar/femalechar/shirts/f_shirt1.png";
import shirt2 from "../common/assets/Avatar/femalechar/shirts/f_shirt2.png";
import shirt3 from "../common/assets/Avatar/femalechar/shirts/f_shirt3.png";
import shirt4 from "../common/assets/Avatar/femalechar/shirts/f_shirt4.png"; //46,34,536,561.
import shirt5 from "../common/assets/Avatar/femalechar/shirts/f_shirt5.png";
import shirt6 from "../common/assets/Avatar/femalechar/shirts/f_shirt6.png";
import shirt7 from "../common/assets/Avatar/femalechar/shirts/f_shirt7.png";
import shirt8 from "../common/assets/Avatar/femalechar/shirts/f_shirt8.png";
import shirt9 from "../common/assets/Avatar/femalechar/shirts/f_shirt9.png";

import pant1 from "../common/assets/Avatar/femalechar/pants/f_pant.png";
import pant2 from "../common/assets/Avatar/femalechar/pants/pant2.png";
import pant3 from "../common/assets/Avatar/femalechar/pants/pant3.png";
import pant4 from "../common/assets/Avatar/femalechar/pants/f_pant4.png";
import pant5 from "../common/assets/Avatar/femalechar/pants/f_pant5.png";
import pant6 from "../common/assets/Avatar/femalechar/pants/f_pant6.png";
import pant7 from "../common/assets/Avatar/femalechar/pants/pantF2_7.png";
import pant8 from "../common/assets/Avatar/femalechar/pants/Hair1.png";
import pant9 from "../common/assets/Avatar/femalechar/pants/Hair2.png";
import pant10 from "../common/assets/Avatar/femalechar/pants/Hair3.png";
import pant11 from "../common/assets/Avatar/femalechar/pants/Hair4.png";

//imported pant images
import bg from "../common/assets/Bgdark.jpg";
import bg1 from "../common/assets/Bggrey.jpg";
import { useMediaQuery } from "@mui/material";

//imported background image
const Female2 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [shirtImage, setShirtImage] = useState(shirt4); //starting or initial cloth
  const [pantImage, setPantImage] = useState(pant4);
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(50);
  const [value3, setValue3] = useState(50);
  const [value4, setValue4] = useState(50); //setvalues for sliders

  const [shirtPosition, setShirtPosition] = useState({ x: 192, y: 105 }); //starting or initial cloth positioning values
  const [shirtScale, setShirtScale] = useState({ width: 205, height: 158 });

  const [pantPosition, setPantPosition] = useState({ x: 127, y: 206 });
  const [pantScale, setPantScale] = useState({ width: 369, height: 389 });

  const isXsScreen = useMediaQuery("(max-width:600px)");

  const imgRef = useRef(null);
  const dressref1 = useRef(null);
  const shirtref1 = useRef(null);
  const shirtref2 = useRef(null);
  const shirtref3 = useRef(null);
  const shirtref4 = useRef(null);
  const shirtref5 = useRef(null);
  const shirtref6 = useRef(null);
  const shirtref7 = useRef(null);
  const shirtref8 = useRef(null);
  const shirtref9 = useRef(null);
  //const shirtref10 = useRef(null);

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
        imgRef.current = p.loadImage(imgPath1);
        shirtref1.current = p.loadImage(shirtImage);
        pantref1.current = p.loadImage(pantImage);
        background.current = p.loadImage(bg);
        background1.current = p.loadImage(bg1);
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
          p.image(background1.current, 40, 0, 550, 700);
          p.image(imgRef.current, -20, -6, 670, 690);
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
        }}
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
              onClick={() => handleChangeshirt(shirt2, 214, 123, 182, 164)}
            >
              <img src={shirt2} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt3, 163, 77, 245, 285)}
            >
              <img src={shirt3} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt4, 192, 105, 205, 158)}
            >
              <img src={shirt4} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt5, 176, 66, 251, 248)}
            >
              <img src={shirt5} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt6, 189, 109, 224, 165)}
            >
              <img src={shirt6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeshirt(shirt7, 62, 99, 548, 618)}>
              <img src={shirt7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt8, 179, 114, 238, 200)}
            >
              <img src={shirt8} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(shirt9, 202, 102, 194, 204)}
            >
              <img src={shirt9} height="100px" width="100px" />
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
            }} //pant 3 :-91 -9 444 704
          >
            <button onClick={() => handleChangepant(pant1, 133, 263, 359, 326)}>
              <img src={pant1} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant2, 86, 12, 461, 652)}>
              <img src={pant2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant3, 189, 240, 259, 336)}>
              <img src={pant3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant4, 127, 206, 369, 389)}>
              <img src={pant4} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant5, 201, 239, 205, 225)}>
              <img src={pant5} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant6, 74, 244, 458, 405)}>
              <img src={pant6} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant7, 74, 244, 458, 405)}>
              <img src={pant7} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant8, 57, -68, 458, 348)}>
              <img src={pant8} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant9, 117, -79, 365, 272)}>
              <img src={pant9} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant10, 93, -82, 392, 326)}>
              <img src={pant10} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangepant(pant11, 17, -62, 548, 336)}>
              <img src={pant11} height="100px" width="100px" />
            </button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              maxWidth: "500px",
            }} //pant 3 :-91 -9 444 704
          >
            <button
              onClick={() => handleChangeshirt(dress1, 80, 31, 471, 630)} //buttoms for shirts
            >
              <img src={dress1} height="100px" width="100px" />
            </button>
          </div>

          <div>
            <div>
              <label>Slider 1</label>
              <input
                type="range"
                min="-200"
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
                min="-200"
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
                min="-200"
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
                min="-200"
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

export default Female2;
