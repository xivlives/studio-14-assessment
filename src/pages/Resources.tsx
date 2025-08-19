import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "../components/sections/HeroSection";
import MainContent from "../components/sections/MainContent";

const Resources: React.FC = () => {
  return (
    <Box width="100vw" minHeight="100vh" bg="white">
      <HeroSection />
      <MainContent />
    </Box>
  );
};

export default Resources;
