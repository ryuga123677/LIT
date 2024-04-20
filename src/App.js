import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider } from "./common/context/AuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Bags from "./pages/Bags";
import Clothes from "./pages/Clothes";
import Ring from "./pages/Ring";
import Shoes from "./pages/Shoes";
import Watch from "./pages/Watch";
import { DbProvider } from "./common/context/DbContext";
import MarketPlace from "./pages/MarketPlace";
import MainHome from "./pages/MainHome";
import Avatar from "./pages/Avatar";
import Avatarfemale from "./pages/Avatarfemale";
import AvatarSelection from "./pages/AvatarSelection";
import MenAvatar1 from "./pages/MenAvatar1";
import MenAvatar2 from "./pages/MenAvatar2";
import MenAvatar3 from "./pages/MenAvatar3";
import FemaleAvatar1 from "./pages/FemaleAvatar1";
//import FemaleAvatar3 from "./pages/Female1";
import FemaleAvatar3 from "./pages/FemaleAvatar3";

const theme = createTheme({
  typography: {
    color: "white",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <DbProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/bags" element={<Bags />} />
                <Route path="/clothes" element={<Clothes />} />
                <Route path="/ring" element={<Ring />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/watch" element={<Watch />} />
                <Route path="/marketplace" element={<MarketPlace />} />

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/avatar" element={<AvatarSelection />} />

                <Route path="/menavatar1" element={<MenAvatar1 />} />
                <Route path="/menavatar2" element={<MenAvatar2 />} />
                <Route path="/menavatar3" element={<MenAvatar3 />} />
                <Route path="/femaleavatar1" element={<FemaleAvatar1/>} />
                
                <Route path="/femaleavatar3" element={<FemaleAvatar3 />} />
              </Routes>
            </BrowserRouter>
          </DbProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
