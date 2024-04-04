import React, { useEffect, useRef, useState } from "react";

import p5 from "p5";
import imgPath from "../common/assets/Avatar/femalechar/female.png";
import imgPath2 from "../common/assets/Avatar/femalechar/femalehair.png";
import imgPath22 from "../common/assets/Avatar/femalechar/femalehair2.png";
import imgPath23 from "../common/assets/Avatar/femalechar/femalehair3.png";
import imgPath24 from "../common/assets/Avatar/femalechar/femalehair4.png";
import imgPath25 from "../common/assets/Avatar/femalechar/femalehair5.png";
import imgPath26 from "../common/assets/Avatar/femalechar/femalehair6.png";
import imgPath3 from "../common/assets/Avatar/femalechar/femaleEye.png";
import imgPath32 from "../common/assets/Avatar/femalechar/femaleEye2.png";
import imgPath33 from "../common/assets/Avatar/femalechar/femaleEye3.png";
import imgPath34 from "../common/assets/Avatar/femalechar/femaleEye4.png";
import imgPath35 from "../common/assets/Avatar/femalechar/femaleEye5.png";
import imgPath4 from "../common/assets/Avatar/femalechar/femalenose.png";
import imgPath5 from "../common/assets/Avatar/femalechar/femalemouth2.png";
import { useNavigate } from "react-router-dom";
// import imgPath6 from "../common/assets/shirt_1.png";
// import imgPath7 from "../common/assets/pant_1.png";
// import imgPath8 from "../common/assets/hair_2.png";

const Avatarfemale = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [hairImage, setHairImage] = useState(imgPath26);
  const [hairPosition, setHairPosition] = useState({ x: 291, y: 33 });
  const [hairScale, setHairScale] = useState({ width: 92, height: 175 });

  const [eyeImage, setEyeImage] = useState(imgPath35);
  const [eyePosition, setEyePosition] = useState({ x: 318, y: 81 });
  const [eyeScale, setEyeScale] = useState({ width: 40, height: 14 });
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const imgRef5 = useRef(null);
  const imgRef22 = useRef(null);
  const myP5Ref = useRef(null);

  useEffect(() => {
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath);
        imgRef2.current = p.loadImage(hairImage);
        // imgRef22.current = p.loadImage(imgPath22);
        imgRef3.current = p.loadImage(eyeImage);
        imgRef4.current = p.loadImage(imgPath4);
        imgRef5.current = p.loadImage(imgPath5);
        // imgRef6.current = p.loadImage(imgPath6);
        // imgRef7.current = p.loadImage(imgPath7);
        // imgRef8.current = p.loadImage(imgPath8);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    const setupSketch = (p) => {
      try {
        p.setup = () => {
          const canvasWidth = canvasRef.current.offsetWidth;
          const canvasHeight = canvasRef.current.offsetHeight;
          p.createCanvas(canvasWidth / 2, canvasHeight);
          // p.background(255, 255, 255);
        };

        p.draw = () => {
          p.background(255);
          if (imgRef.current) {
            p.image(imgRef.current, 100, 40, 500, 630);

            p.image(
              imgRef3.current,
              eyePosition.x,
              eyePosition.y,
              eyeScale.width,
              eyeScale.height
            );
            p.image(
              imgRef2.current,
              hairPosition.x,
              hairPosition.y,
              hairScale.width,
              hairScale.height
            );
            p.image(imgRef4.current, 332, 90, 13, 25);
            p.image(imgRef5.current, 328, 110, 20, 15);
            // p.image(imgRef7.current, 649, 415, 194, 150);
            // p.image(imgRef6.current, 625, 243, 230, 240);
          }
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
  }, [hairImage, hairPosition, hairScale, eyeImage, eyePosition, eyeScale]);

  const handleChange = (newHairImage, newX, newY, newWidth, newHeight) => {
    setHairImage(newHairImage);
    setHairPosition({ x: newX, y: newY });
    setHairScale({ width: newWidth, height: newHeight });
  };
  const handleChangeEye = (newEyeImage, newX, newY, newWidth, newHeight) => {
    setEyeImage(newEyeImage);
    setEyePosition({ x: newX, y: newY });
    setEyeScale({ width: newWidth, height: newHeight });
  };
  return (
    <>
      <div className="bg-orange-300 flex flex-row justify-end items-end ">
        <button
          onClick={() => {
            navigate("/avatar");
          }}
        >
          Male
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div ref={canvasRef} style={{ width: "100%", height: "100vh" }}></div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* for hair */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => handleChange(imgPath2, 303, 37, 72, 140)}>
              <img src={imgPath2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath22, 293, 20, 84, 165)}>
              <img src={imgPath22} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath23, 298, 20, 75, 100)}>
              <img src={imgPath23} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath24, 294, 33, 97, 180)}>
              <img src={imgPath24} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath26, 291, 33, 92, 175)}>
              <img src={imgPath26} height="100px" width="100px" />
            </button>
          </div>
          {/* for Eye  */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => handleChangeEye(imgPath3, 321, 82, 35, 15)}>
              <img src={imgPath3} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeEye(imgPath32, 316, 82, 43, 15)}>
              <img src={imgPath32} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeEye(imgPath33, 318, 81, 40, 15)}>
              <img src={imgPath33} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeEye(imgPath34, 318, 81, 40, 15)}>
              <img src={imgPath34} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChangeEye(imgPath35, 318, 81, 40, 14)}>
              <img src={imgPath35} height="100px" width="100px" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatarfemale;
