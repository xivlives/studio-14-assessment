import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../components/sections/header";

const RootLayout: React.FC = () => {
  return (
    <Box minH="100vh" bg="white">
      <Header />
      <Outlet /> {/* this is where page content gets injected */}
    </Box>
  );
};

export default RootLayout;
