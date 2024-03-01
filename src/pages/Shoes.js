import { Box } from "@mui/material";
import React from "react";
import Navbar from "../common/components/Navbar";
import { useDb } from "../common/context/DbContext";
import Game from "../common/components/Game";
import bg2 from "../common/assets/bg2.png";
function Shoes() {
  const { gameData } = useDb();
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      {gameData && <Game gameData={gameData.shoes} from="shoes" />}
    </Box>
  );
}

export default Shoes;
