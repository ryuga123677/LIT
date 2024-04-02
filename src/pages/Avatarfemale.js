import React, { useEffect, useRef, useState } from "react";

import p5 from "p5";
import imgPath from "../common/assets/Avatar/femalechar/female.png";
import imgPath2 from "../common/assets/Avatar/femalechar/femalehair.png";
import imgPath3 from "../common/assets/Avatar/femalechar/femaleEye.png";
import imgPath4 from "../common/assets/Avatar/femalechar/femalenose.png";
import imgPath5 from "../common/assets/Avatar/femalechar/femalemouth2.png";
import imgPath6 from "../common/assets/shirt_1.png";
import imgPath7 from "../common/assets/pant_1.png";
import imgPath8 from "../common/assets/hair_2.png";

const Avatarfemale = () => {
  const canvasRef = useRef(null);
//   const [hairImage, setHairImage] = useState(imgPath2);
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const imgRef5 = useRef(null);
  const imgRef6 = useRef(null);
  const imgRef7 = useRef(null);
  const imgRef8 = useRef(null);
  const myP5Ref = useRef(null);

  useEffect(() => {
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath);
        imgRef2.current = p.loadImage(imgPath2);
        imgRef3.current = p.loadImage(imgPath3);
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
          p.createCanvas(window.innerWidth, window.innerHeight);
          //   p.createCanvas();
        };

        p.draw = () => {
          p.background(0);
          if (imgRef.current) {
            p.image(imgRef.current, 450, 120, 600, 600);
            
            p.image(imgRef3.current, 715, 154, 43, 15);
            p.image(imgRef2.current, 699, 110, 78, 140);
            p.image(imgRef4.current, 731, 162, 13, 25);
            p.image(imgRef5.current, 727, 184, 20, 15);
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
  }, []);

  return (
    <div>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default Avatarfemale;
