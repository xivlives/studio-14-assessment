import React from "react";
import { Box } from "@chakra-ui/react";
import { AppProvider } from "./contexts";
import Header from "./components/sections/header";
import HeroSection from "./components/sections/HeroSection";
import MainContent from "./components/sections/MainContent";
import { Provider } from "./components/ui/provider";

const App: React.FC = () => {
  return (
    <Provider>
      <AppProvider>
        <Box as="main" minHeight="100vh" minWidth="100vw" bg="white">
          <Header />
          <HeroSection />
          <MainContent />
        </Box>
      </AppProvider>
    </Provider>
  );
};

export default App;
