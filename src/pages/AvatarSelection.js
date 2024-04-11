import React from "react";
import { useNavigate } from "react-router-dom";

import maleImg1 from "../common/assets/Avatar/malechar/Male Croqui 1.png";
import maleImg2 from "../common/assets/Avatar/malechar/Male Croqui 2.png";
import maleImg3 from "../common/assets/Avatar/malechar/Male Croqui 3.png";
import femaleImg1 from "../common/assets/Avatar/femalechar/Female Croqui 1.png";
import femaleImg2 from "../common/assets/Avatar/femalechar/Female croqui 2.png";
import femaleImg3 from "../common/assets/Avatar/femalechar/Female croqui 3.png";

const AvatarSelection = () => {
const navigate=useNavigate();
  return (
    <><div>chooose charater</div>
      <div style={{ display: "flex", flexDirection: "column",justifyContent:"center", alignItems: "center" ,height:"100%",width:"100%"}}>
        <div style={{ display: "flex", flexDirection: "row",justifyContent:"center" ,alignContent:"center", flexWrap: "wrap",height:"100%",width:"100%"}}>
          <img onClick={()=>navigate('/menavatar1')} src={maleImg1} alt="Male Avatar 1" style={{ width: "33%",height:"100%" }} />
          <img src={maleImg2} alt="Male Avatar 2" style={{ width: "33%" ,height:"100%"}} />
          <img src={maleImg3} alt="Male Avatar 3" style={{ width: "33%",height:"100%" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "row",justifyContent:"center" ,alignContent:"center", flexWrap: "wrap",height:"100%",width:"100%",}}>
          <img src={femaleImg1} alt="Female Avatar 1" style={{ width: "33%",height:"100%" }} />
          <img src={femaleImg2} alt="Female Avatar 2" style={{ width: "33%",height:"100%" }} />
          <img src={femaleImg3} alt="Female Avatar 3" style={{ width: "33%",height:"100%" }} />
        </div>
      </div>
    </>
  );
};

export default AvatarSelection;
