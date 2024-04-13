import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath1 from "../common/assets/Avatar/malechar/Male Croqui 1.png";
import nose1 from "../common/assets/Avatar/malechar/nose/mens_nose1.png";
import nose2 from "../common/assets/Avatar/malechar/nose/mens_nose2.png";
import nose3 from "../common/assets/Avatar/malechar/nose/mens_nose3.png";
import nose4 from "../common/assets/Avatar/malechar/nose/mens_nose4.png";
import nose5 from "../common/assets/Avatar/malechar/nose/mens_nose5.png";
import eye1 from "../common/assets/Avatar/malechar/eye/mens_eye1.png";
import eye2 from "../common/assets/Avatar/malechar/eye/mens_eye2.png";
import eye3 from "../common/assets/Avatar/malechar/eye/mens_eye3.png";
import lip1 from "../common/assets/Avatar/malechar/lips/mens_lip1.png";
import lip2 from "../common/assets/Avatar/malechar/lips/mens_lip2.png";
import lip3 from "../common/assets/Avatar/malechar/lips/mens_lip3.png";
import lip4 from "../common/assets/Avatar/malechar/lips/mens_lip4.png";
import lip5 from "../common/assets/Avatar/malechar/lips/mens_lip5.png";
import lip6 from "../common/assets/Avatar/malechar/lips/mens_lip6.png";
const MenAvatar1 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
   const [noseImage, setNoseImage] = useState(nose1);
  const [eyeImage, setEyeImage] = useState(eye1);
  const [lipImage, setLipImage] = useState(lip1);

  const [nosePosition, setNosePosition] = useState({ x: 328, y: 160 });
  const [noseScale, setNoseScale] = useState({ width: 20, height: 16 });
  const [eyePosition, setEyePosition] = useState({ x: 318, y: 152 });
  const [eyeScale, setEyeScale] = useState({ width: 40, height: 16});
  const [lipPosition, setLipPosition] = useState({ x: 329, y: 176 });
  const [lipScale, setLipScale] = useState({ width: 18, height: 10 });
  const imgRef = useRef(null);
  const noseref1 = useRef(null);
  const noseref2 = useRef(null);
  const noseref3 = useRef(null);
  const noseref4 = useRef(null);
  const noseref5= useRef(null);
  const eyeref1 = useRef(null);
  const eyeref2 = useRef(null);
  const eyeref3 = useRef(null);
  const lipref1 = useRef(null);
  const lipref2 = useRef(null);
  const lipref3 = useRef(null);
  const lipref4 = useRef(null);
  const lipref5 = useRef(null);
  const lipref6 = useRef(null);
  const myP5Ref = useRef(null);

  useEffect(() => {
    console.log('hello');
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath1);
        noseref1.current = p.loadImage(noseImage);
        noseref2.current = p.loadImage(nose2);
        noseref3.current = p.loadImage(nose3);
        noseref4.current = p.loadImage(nose4);
        noseref5.current = p.loadImage(nose5);
        eyeref1.current = p.loadImage(eyeImage);
        eyeref2.current = p.loadImage(eye2);
        eyeref3.current = p.loadImage(eye3);
        lipref1.current = p.loadImage(lipImage);
        lipref2.current = p.loadImage(lip2);
        lipref3.current = p.loadImage(lip3);
        lipref4.current = p.loadImage(lip4);
        lipref5.current = p.loadImage(lip5);
        lipref6.current = p.loadImage(lip6);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    const setupSketch = (p) => {
      try {
        p.setup = () => {
          const canvasWidth = canvasRef.current.offsetWidth;
          const canvasHeight = canvasRef.current.offsetHeight;
          p.createCanvas(canvasWidth , canvasHeight);
          p.background(255, 255, 255);
        };
        p.draw = () => {
          p.image(imgRef.current, 70, 0, 550, 750);
           p.image(noseref1.current , nosePosition.x, nosePosition.y, noseScale.width,noseScale.height );
           p.image(eyeref1.current,eyePosition.x, eyePosition.y,eyeScale.width,eyeScale.height );
          p.image(  lipref1.current,lipPosition.x,lipPosition.y,lipScale.width,lipScale.height);
        //   p.image(imgRef4.current, 185, 165, 10, 20);
        //   p.image(imgRef5.current, 179, 183, 22, 15);
  
        //   p.image(
        //     imgRef6.current,
        //     shirtPosition.x,
        //     shirtPosition.y,
        //     shirtScale.width,
        //     shirtScale.height
        //   );
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
      noseImage,
    nosePosition,
    noseScale,
    eyeImage,
    eyePosition,
    eyeScale,
    lipImage,
    lipPosition,
    lipScale,
  ]);

  const handleChangenose = (newHairImage, newX, newY, newWidth, newHeight) => {
    setNoseImage(newHairImage);
    setNosePosition({ x: newX, y: newY });
    setNoseScale({ width: newWidth, height: newHeight });
  };
  const handleChangeeye = (
    newEyeImage,
    newX,
    newY,
    newWidth,
    newHeight
  ) => {
    setEyeImage(newEyeImage);
    setEyePosition({ x: newX, y: newY });
    setEyeScale({ width: newWidth, height: newHeight });
  };
  const handleChangelip = (newPantImage, newX, newY, newWidth, newHeight) => {
    setLipImage(newPantImage);
    setLipPosition({ x: newX, y: newY });
    setLipScale({ width: newWidth, height: newHeight });
  };
return (
  <>
    <div style={{ display: "flex", flexDirection: "row",gap:10}}>
      <div ref={canvasRef} style={{ width: "50%", height: "100vh" }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" , overflowX: "auto", maxWidth: "350px"}}>
          <button onClick={() => handleChangenose(nose1, 155, 115, 80, 65)}>
            <img src={nose1} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangenose(nose2, 155, 115, 80, 65)}>
            <img src={nose2} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangenose(nose3, 155, 120, 65, 60)}>
            <img src={nose3} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangenose(nose4, 155, 110, 67, 67)}>
            <img src={nose4} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangenose(nose5, 155, 115, 70, 65)}>
            <img src={nose5} height="100px" width="100px" />
          </button>
        
        </div>
        <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", maxWidth: "350px" }}>
          <button onClick={() => handleChangeeye(eye1, 155, 115, 80, 65)}>
            <img src={eye1} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangeeye(eye2, 155, 115, 80, 65)}>
            <img src={eye2} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangeeye(eye3, 155, 120, 65, 60)}>
            <img src={eye3} height="100px" width="100px" />
          </button>
    
        
        </div>
        <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", maxWidth: "350px" }}>
          <button onClick={() => handleChangelip(lip1, 155, 115, 80, 65)}>
            <img src={lip1} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangelip(lip2, 155, 115, 80, 65)}>
            <img src={lip2} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangelip(lip3, 155, 120, 65, 60)}>
            <img src={lip3} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangelip(lip4, 155, 115, 80, 65)}>
            <img src={lip4} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangelip(lip5, 155, 115, 80, 65)}>
            <img src={lip5} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangelip(lip6, 155, 120, 65, 60)}>
            <img src={lip6} height="100px" width="100px" />
          </button>
    
    
        
        </div>
      </div>
    </div>
  </>
);


};

export default MenAvatar1;
