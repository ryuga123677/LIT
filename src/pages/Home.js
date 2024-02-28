import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  Link,
  CardContent,
} from "@mui/material";
import Navbar from "../common/components/Navbar";
import Watch from "../common/assets/watch.jpg";
import Bags from "../common/assets/bags.png";
import Clothes from "../common/assets/clothes.png";
import Ring from "../common/assets/ring.jpg";
import Shoes from "../common/assets/shoes.png";
import MarketPlace from "../common/assets/glasses.png";
import { useAuth } from "../common/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDb } from "../common/context/DbContext";
import { ScaleLoader } from "react-spinners";
import ParticleComponent from "../common/components/ParticleComponent";

const Home = () => {
  const { userId, isAuthenticated } = useAuth();
  // const { loading, gameData } = useDb();
  const navigate = useNavigate();

  const imageLinks = [
    // {
    //   id: 1,
    //   image: Watch,
    //   link: "/watch",
    //   title: "Watch",
    //   quote: "Time is an illusion.",
    // },
    {
      id: 2,
      image: Bags,
      link: "/bags",
      title: "Bags",
      quote: "Fashion is a trend. Style lives within a person.",
    },
    {
      id: 3,
      image: Clothes,
      link: "/clothes",
      title: "Clothes",
      quote: "Dress like you’re already famous.",
    },
    // {
    //   id: 4,
    //   image: Ring,
    //   link: "/ring",
    //   title: "Ring",
    //   quote: "A ring is a halo on your finger.",
    // },
    {
      id: 5,
      image: Shoes,
      link: "/shoes",
      title: "Shoes",
      quote: "Give a girl the right shoes, and she can conquer the world.",
    },
    {
      id: 6,
      image: MarketPlace,
      link: "/marketplace",
      title: "Accessories",
      quote: "Discover unique treasures in the marketplace.",
    },
  ];

  const { gameDataFetch } = useDb();

  useEffect(() => {
    gameDataFetch();
  }, []);

  // console.log(loading);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <ParticleComponent />

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
          <Typography mb={4} variant="h5" fontWeight={700}>
            CATEGORIES!
          </Typography>
          <Grid container spacing={4}>
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
                <Box>
                  <Card
                    elevation={3}
                    sx={{
                      height: 250,
                      width: 250,
                      backgroundColor: "transparent",
                      borderRadius: 2,
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => {
                      if (isAuthenticated) {
                        navigate(item.link);
                      } else {
                        navigate("/login");
                      }
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
                    mt={2}
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
    </Box>
  );
};

export default Home;
