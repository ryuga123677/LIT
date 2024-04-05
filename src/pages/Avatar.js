import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";

import imgPath from "../common/assets/male.png";
import imgPath2 from "../common/assets/hair_1.png";
import imgPath3 from "../common/assets/eye_1.png";
import imgPath4 from "../common/assets/nose_1.png";
import imgPath5 from "../common/assets/mouth_2.png";
import imgPath6 from "../common/assets/shirt_1.png";
import imgPath7 from "../common/assets/pant_1.png";
import imgPath8 from "../common/assets/hair_2.png";
import imgPath9 from "../common/assets/hair_3.png";
import imgPath10 from "../common/assets/hair_4.png";
import imgPath11 from "../common/assets/shirt_2.png";
import imgPath12 from "../common/assets/pant_2.png";
import imgPath13 from "../common/assets/hair_5.png";
const Avatar = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [hairImage, setHairImage] = useState(imgPath2);
  const [shirtImage, setShirtImage] = useState(imgPath6);
  const [pantImage, setPantImage] = useState(imgPath7);

  const [hairPosition, setHairPosition] = useState({ x: 155, y: 115 });
  const [hairScale, setHairScale] = useState({ width: 80, height: 60 });
  const [shirtPosition, setShirtPosition] = useState({ x: 100, y: 197 });
  const [shirtScale, setShirtScale] = useState({ width: 185, height: 184 });
  const [pantPosition, setPantPosition] = useState({ x: 121, y: 335 });
  const [pantScale, setPantScale] = useState({ width: 152, height: 107 });
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const imgRef5 = useRef(null);
  const imgRef6 = useRef(null);
  const imgRef7 = useRef(null);
  const imgRef8 = useRef(null);
  const imgRef9 = useRef(null);
  const imgRef10 = useRef(null);
  const imgRef11 = useRef(null);
  const imgRef12 = useRef(null);
  const imgRef13 = useRef(null);
  const myP5Ref = useRef(null);

  useEffect(() => {
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath);
        imgRef2.current = p.loadImage(hairImage);
        imgRef3.current = p.loadImage(imgPath3);
        imgRef4.current = p.loadImage(imgPath4);
        imgRef5.current = p.loadImage(imgPath5);
        imgRef6.current = p.loadImage(shirtImage);
        imgRef7.current = p.loadImage(pantImage);
        imgRef8.current = p.loadImage(imgPath8);
        imgRef9.current = p.loadImage(imgPath9);
        imgRef10.current = p.loadImage(imgPath10);
        imgRef11.current = p.loadImage(imgPath11);
        imgRef12.current = p.loadImage(imgPath12);
        imgRef13.current = p.loadImage(imgPath13);
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
          p.background(255, 255, 255);
        };
        p.draw = () => {
          p.image(imgRef.current, 100, 140, 200, 500);
          p.image(
            imgRef2.current,
            hairPosition.x,
            hairPosition.y,
            hairScale.width,
            hairScale.height
          );
          p.image(imgRef3.current, 167, 150, 45, 30);
          p.image(imgRef4.current, 185, 165, 10, 20);
          p.image(imgRef5.current, 179, 183, 22, 15);
          p.image(
            imgRef7.current,
            pantPosition.x,
            pantPosition.y,
            pantScale.width,
            pantScale.height
          );
          p.image(
            imgRef6.current,
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
    hairImage,
    hairPosition,
    hairScale,
    shirtImage,
    shirtPosition,
    shirtScale,
    pantImage,
    pantPosition,
    pantScale,
  ]);

  const handleChange = (newHairImage, newX, newY, newWidth, newHeight) => {
    setHairImage(newHairImage);
    setHairPosition({ x: newX, y: newY });
    setHairScale({ width: newWidth, height: newHeight });
  };
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

  return (
    <>
      <div className="bg-orange-300 flex flex-row justify-end items-end ">
        <button
          onClick={() => {
            navigate("/avatarfemale");
          }}
        >
          female
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div ref={canvasRef} style={{ width: "100%", height: "100vh" }}></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button onClick={() => handleChange(imgPath2, 155, 115, 80, 65)}>
              <img src={imgPath2} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath8, 155, 120, 65, 60)}>
              <img src={imgPath8} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath9, 155, 110, 67, 67)}>
              <img src={imgPath9} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath10, 155, 115, 70, 65)}>
              <img src={imgPath10} height="100px" width="100px" />
            </button>
            <button onClick={() => handleChange(imgPath13, 162, 117, 56, 64)}>
              <img src={imgPath13} height="100px" width="100px" />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => handleChangeshirt(imgPath11, 102, 204, 185, 175)}
            >
              <img src={imgPath11} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangeshirt(imgPath6, 100, 197, 185, 184)}
            >
              <img src={imgPath6} height="100px" width="100px" />
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={() => handleChangepant(imgPath7, 121, 335, 152, 107)}
            >
              <img src={imgPath7} height="100px" width="100px" />
            </button>
            <button
              onClick={() => handleChangepant(imgPath12, 115, 335, 164, 250)}
            >
              <img src={imgPath12} height="100px" width="100px" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
