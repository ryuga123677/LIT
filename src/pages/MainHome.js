import React from "react";
import Navbar from "../common/components/Navbar";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ParticleComponent from "../common/components/ParticleComponent";
import Play from "../common/assets/play.png";
import Socials from "../common/assets/socialspace.png";
import Ir from "../common/assets/ir.png";
import Avatar from "../common/assets/avatar.png";
import Logo from "../common/assets/logo.png";
import Lit from "../common/assets/litstore.png";
import { useNavigate } from "react-router-dom";
import { useDb } from "../common/context/DbContext";
import { ScaleLoader } from "react-spinners";
import NavbarMainPage from "../common/components/NavbarMainPage";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';

function MainHome() {
  const navigate = useNavigate();
  const { loading } = useDb();

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
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ScaleLoader color="white" width={6} height={42} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarMainPage />
   
      <Box maxWidth="150px">
        <img src={Logo} height="150px" />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
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
          <Box
            onClick={() => {
              navigate("/home");
            }}
            sx={{ marginTop: "-50px" }}
            mb={6}
          >
            <img src={Play} style={{ height: "200px",width:"205px", cursor: "pointer" }} />
          </Box>

          <Grid container spacing={1}>
            {imageLinks.map((item) => (
              <Grid
                item
                key={item.id}
                xs={3}
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
                      height: 190,
                      width: 190,
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
      <Box display="flex"  justifyContent="center">
        <Typography fontFamily='CDGordon'>SUBSCRIBE TO LIT NEWSLETTER</Typography>
      </Box>
      <Box display="flex" marginBottom="30px" justifyContent="center">
        <Box
          width="220px"
          paddingTop="-20px"
          border={2}
          borderRadius={1}
          borderColor="white"
          height="30px"
          display="flex"
          flexDirection='row-reverse'

        >
          <MarkEmailUnreadOutlinedIcon/>
        </Box>
      </Box>
    </Box>
  );
}

export default MainHome;
