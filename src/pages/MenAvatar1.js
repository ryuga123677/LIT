import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useNavigate } from "react-router-dom";
import imgPath1 from "../common/assets/Avatar/malechar/Male R 01_.png";
import shirt1 from "../common/assets/Avatar/malechar/shirts/shirt.png";
import shirt2 from "../common/assets/Avatar/malechar/shirts/shirt2.png";
import shirt3 from "../common/assets/Avatar/malechar/shirts/shirt3.png";
import shirt4 from "../common/assets/Avatar/malechar/shirts/shirt4.png";
import shirt5 from "../common/assets/Avatar/malechar/shirts/shirt5.png";
import shirt6 from "../common/assets/Avatar/malechar/shirts/shirt6.png";
import shirt7 from "../common/assets/Avatar/malechar/shirts/shirt7.png";
import shirt8 from "../common/assets/Avatar/malechar/shirts/shirt8.png";
import pant1 from "../common/assets/Avatar/malechar/pants/pant.png";
import pant2 from "../common/assets/Avatar/malechar/pants/pant2.png";
import pant3 from "../common/assets/Avatar/malechar/pants/pant3.png";
import pant4 from "../common/assets/Avatar/malechar/pants/pant4.png";
import pant5 from "../common/assets/Avatar/malechar/pants/pant5.png";
import pant6 from "../common/assets/Avatar/malechar/pants/pant6.png";
import pant7 from "../common/assets/Avatar/malechar/pants/pant7.png";

const MenAvatar1 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
   const [shirtImage, setShirtImage] = useState(shirt7);
   const [pantImage, setPantImage] = useState(pant3);


   const [shirtPosition, setShirtPosition] = useState({ x: 205, y: 75});
  const [shirtScale, setShirtScale] = useState({ width: 270, height: 300 });
  const [pantPosition, setPantPosition] = useState({ x: 187, y: 240});
  const [pantScale, setPantScale] = useState({ width: 300, height: 420});

  const imgRef = useRef(null);
  const shirtref1 = useRef(null);
  const shirtref2 = useRef(null);
  const shirtref3 = useRef(null);
  const shirtref4 = useRef(null);
  const shirtref5 = useRef(null);
  const shirtref6 = useRef(null);
  const shirtref7 = useRef(null);
  const shirtref8 = useRef(null);
  const pantref1= useRef(null); 
  const pantref2= useRef(null); 
  const pantref3= useRef(null); 
  const pantref4= useRef(null); 
  const pantref5= useRef(null); 
  const pantref6= useRef(null); 
  const pantref7= useRef(null); 

  const myP5Ref = useRef(null);

  useEffect(() => {
    
    const preloadImage = (p) => {
      try {
        imgRef.current = p.loadImage(imgPath1);
        shirtref1.current = p.loadImage(shirtImage);
        pantref1.current = p.loadImage(pantImage);
 
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
          p.image(imgRef.current, 84, 0, 505, 700);
          p.image(shirtref1.current , shirtPosition.x, shirtPosition.y, shirtScale.width,shirtScale.height );
          p.image(pantref1.current , pantPosition.x, pantPosition.y, pantScale.width,pantScale.height );

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
    
  ]);

  const handleChangeshirt = (newShirtImage, newX, newY, newWidth, newHeight) => {
    setShirtImage(newShirtImage);
   setShirtPosition({ x: newX, y: newY });
    setShirtScale({ width: newWidth, height: newHeight });

  };
  const handleChangepant = (
    newPantImage,
    newX,
    newY,
    newWidth,
    newHeight
  ) => {
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
    <div style={{ display: "flex", flexDirection: "row",gap:20,flexWrap:"wrap",height:"100vh"}}>
      <div ref={canvasRef} style={{ width: "50%" }}></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" , overflowX: "auto", maxWidth: "400px"}}>
          <button onClick={() => handleChangeshirt(shirt1, 155, 115, 80, 65)}>
            <img src={shirt1} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangeshirt(shirt2, 155, 115, 80, 65)}>
            <img src={shirt2} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangeshirt(shirt3, 155, 120, 65, 60)}>
            <img src={shirt3} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangeshirt(shirt4, 155, 110, 67, 67)}>
            <img src={shirt4} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangeshirt(shirt5, 155, 115, 70, 65)}>
            <img src={shirt5} height="100px" width="100px" />
          </button>
        
        </div>
        <div style={{ display: "flex", flexDirection: "row", overflowX: "auto", maxWidth: "400px" }}>
          <button onClick={() => handleChangepant(pant1, 185, 25, 80, 65)}>
            <img src={pant1} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangepant(pant2, 155, 115, 80, 65)}>
            <img src={pant2} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangepant(pant3, 155, 120, 65, 60)}>
            <img src={pant3} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangepant(pant4, 155, 115, 80, 65)}>
            <img src={pant4} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangepant(pant5, 155, 115, 80, 65)}>
            <img src={pant5} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangepant(pant6, 155, 120, 65, 60)}>
            <img src={pant6} height="100px" width="100px" />
          </button>
          <button onClick={() => handleChangepant(pant7, 155, 120, 65, 60)}>
            <img src={pant7} height="100px" width="100px" />
          </button>
    
        
        </div>

      </div>
    </div>
  </>
);


};

export default MenAvatar1;
