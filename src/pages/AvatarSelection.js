import React from "react";
import { useNavigate } from "react-router-dom";

// Importing images for male avatars
import maleImg1 from "../common/assets/Avatar/malechar/Male R01 new.png";
import maleImg2 from "../common/assets/Avatar/malechar/Male R02 new.png";
import maleImg3 from "../common/assets/Avatar/malechar/Male R03 new.png";

// Importing images for female avatars
import femaleImg1 from "../common/assets/Avatar/femalechar/Female 1 croqui  new.png";
import femaleImg2 from "../common/assets/Avatar/femalechar/Female AI croqui 2 new1.png";
import femaleImg3 from "../common/assets/Avatar/femalechar/Female 3  croqui new .png";
import { useMediaQuery } from "@mui/material";

// AvatarSelection component
const AvatarSelection = () => {
  // Hook for navigation
  const navigate = useNavigate();
  const isXsScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      {!isXsScreen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            alignItems: "center",
            height: "max-height",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              onClick={() => navigate("/menavatar1")}
              src={maleImg1}
              alt="Male Avatar 1"
              style={{ width: "33%", height: "100%" }}
            />
            <img
              onClick={() => navigate("/menavatar2")}
              src={maleImg2}
              alt="Male Avatar 2"
              style={{ width: "33%", height: "100%" }}
            />

            <img
              onClick={() => navigate("/menavatar3")}
              src={maleImg3}
              alt="Male Avatar 3"
              style={{ width: "33%", height: "100%", cursor: "pointer" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={femaleImg1}
              onClick={() => navigate("/femaleavatar1")}
              alt="Female Avatar 1"
              style={{ width: "33%", height: "100%" }}
            />
            <img
              src={femaleImg2}
              onClick={() => navigate("/female2")}
              alt="Female Avatar 2"
              style={{ width: "33%", height: "100%" }}
            />

            <img
              onClick={() => navigate("/femaleavatar3")}
              src={femaleImg3}
              alt="Female Avatar 3"
              style={{ width: "33%", height: "100%", cursor: "pointer" }}
            />
          </div>
        </div>
      )}
      {isXsScreen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            alignItems: "center",
            height: "max-height",
            width: "100%",
          }}
        >
          <img
            onClick={() => navigate("/menavatar1")}
            src={maleImg1}
            alt="Male Avatar 1"
            style={{ width: "33%", height: "100%" }}
          />
          <img
            onClick={() => navigate("/menavatar2")}
            src={maleImg2}
            alt="Male Avatar 2"
            style={{ width: "33%", height: "100%" }}
          />

          <img
            onClick={() => navigate("/menavatar3")}
            src={maleImg3}
            alt="Male Avatar 3"
            style={{ width: "33%", height: "100%", cursor: "pointer" }}
          />

          <img
            src={femaleImg1}
            onClick={() => navigate("/femaleavatar1")}
            alt="Female Avatar 1"
            style={{ width: "33%", height: "100%" }}
          />
          <img
            src={femaleImg2}
            onClick={() => navigate("/female2")}
            alt="Female Avatar 2"
            style={{ width: "33%", height: "100%" }}
          />

          <img
            onClick={() => navigate("/femaleavatar3")}
            src={femaleImg3}
            alt="Female Avatar 3"
            style={{ width: "33%", height: "100%", cursor: "pointer" }}
          />
        </div>
      )}
    </>
  );
};

export default AvatarSelection;
