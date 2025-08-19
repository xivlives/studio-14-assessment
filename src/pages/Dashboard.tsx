import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import { useApp } from "../hooks";

const Dashboard: React.FC = () => {
    const { state } = useApp();
  return (
    <Container minW="100vw" maxW="6xl"  py={8}>
      <Heading mb={4}>Dashboard</Heading>
      <Text>Welcome to the Dashboard (dummy page).</Text>
      <Text color="black" mt={2}>
        {state.isEmployee
          ? "You are logged in as an employee."
          : "You are logged in as a non-employee."}
      </Text>
    </Container>
  );
};

export default Dashboard;
