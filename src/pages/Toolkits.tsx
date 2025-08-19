import React from "react";
import { Heading, Text, Container, SimpleGrid, Card, } from "@chakra-ui/react";

const Toolkit: React.FC = () => {
  return (
    <Container maxW="7xl" minW="100vw" py={8}>
      <Heading mb={6}>Toolkit</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        <Card.Root>
          <Card.Body>
            <Heading size="md">Tool A</Heading>
            <Text mt={2}>This is a placeholder for Tool A.</Text>
          </Card.Body>
        </Card.Root>
        <Card.Root>
          <Card.Body>
            <Heading size="md">Tool B</Heading>
            <Text mt={2}>This is a placeholder for Tool B.</Text>
          </Card.Body>
        </Card.Root>
        <Card.Root>
          <Card.Body>
            <Heading size="md">Tool C</Heading>
            <Text mt={2}>This is a placeholder for Tool C.</Text>
          </Card.Body>
        </Card.Root>
      </SimpleGrid>
    </Container>
  );
};

export default Toolkit;
