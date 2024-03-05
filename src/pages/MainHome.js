import React from "react";
import Navbar from "../common/components/Navbar";

import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ParticleComponent from "../common/components/ParticleComponent";
import Play from "../common/assets/play.png";
import Socials from "../common/assets/socialspace.png";
import Ir from "../common/assets/ir.png";
import Avatar from "../common/assets/avatar.png";
import Logo from "../common/assets/logo.png";
import Lit from "../common/assets/litstore.png";
import bg from "../common/assets/bg.png";
import { useNavigate } from "react-router-dom";
import { useDb } from "../common/context/DbContext";
import { ScaleLoader } from "react-spinners";
import NavbarMainPage from "../common/components/NavbarMainPage";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";

function MainHome() {
  const navigate = useNavigate();
  const { loading } = useDb();
  const isXsScreen = useMediaQuery("(max-width:600px)");

  const imageLinks = [
    {
      id: 2,
      image: Socials,
      link: "/",
      title: "Social Space",
      quote: "Fashion is a trend. Style lives within a person.",
    },
    {
      id: 3,
      image: Ir,
      link: "/",
      title: "IR ICON",
      quote: "Dress like you’re already famous.",
    },
    {
      id: 5,
      image: Avatar,
      link: "/",
      title: "Avatar store",
      quote: "Give a girl the right shoes, and she can conquer the world.",
    },
    {
      id: 6,
      image: Lit,
      link: "/marketplace",
      title: "Lit Store",
      quote: "Discover unique treasures in the marketplace.",
    },
  ];

  if (loading) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScaleLoader color="white" width={6} height={42} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",

        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavbarMainPage />

      <Box
        sx={{
          marginTop: {xs:"10px",sm:"20px"},
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
    
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {!isXsScreen && (
            <Box
              onClick={() => {
                navigate("/home");
              }}
              sx={{
                marginTop: "20px",
            

                height: "190px",
                width: "190px",
              }}
              mb={8}
            >
              <img
                src={Play}
                style={{ height: "100%", width: "100%", cursor: "pointer" }}
              />
            </Box>
          )}
          {isXsScreen&&(<Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
  
        >
          <img
            src={Logo}
            alt="Logo"
            style={{  height: "120px", width: "120px", }}
          />
        </Box>)}

          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            {imageLinks.map((item) => (
              <Grid
                item
                key={item.id}
                xs={6} // On extra small screens, take up 6 columns (half of the container)
                sm={6} // On small screens and above, take up 3 columns
                md={3} // On medium screens and above, take up 3 columns
                lg={3} // On large screens and above, take up 3 columns
                xl={3} // On extra large screens and above, take up 3 columns
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    justifyContent: "center",
                  }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: { xs: "120px", sm: "190px" },
                      width: { xs: "120px", sm: "190px" },
                      backgroundColor: "transparent",

                      borderRadius: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <CardMedia
                      image={item.image}
                      component="img"
                      alt={`Image ${item.id}`}
                      height="100%"
                      sx={{ objectFit: "cover", borderRadius: 2 }}
                    />
                  </Card>
                  <Typography
                    textAlign="center"
                    fontWeight="600"
                    fontFamily="CDGordon"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {isXsScreen && (
        <Box
          onClick={() => {
            navigate("/home");
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          mb={2}
          mt={1}
        >
          <img
            src={Play}
            style={{ height: "120px", width: "120px", cursor: "pointer" }}
          />
        </Box>
      )}
      <Box display="flex" justifyContent="center">
        <Typography fontFamily="CDGordon">
          SUBSCRIBE TO LIT NEWSLETTER
        </Typography>
      </Box>
      <Box
        display="flex"
        marginTop="10px"
        marginBottom="60px"
        justifyContent="center"
      >
        <Box
          sx={{ width: "220px", height: "30px" }}
          border={2}
          borderRadius={1}
          borderColor="white"
          display="flex"
          flexDirection="row-reverse"
        >
          <MarkEmailUnreadOutlinedIcon />
        </Box>
      </Box>
    </Box>
  );
}

export default MainHome;
