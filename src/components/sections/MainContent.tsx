import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Button,
  Drawer,
  Text,
  Container,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { useDisclosure } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPlay, FaFilePdf } from "react-icons/fa";
import FilterSidebar from "../common/FilterSidebar";
import ResourceCard from "../common/ResourceCard";
import type { ResourceCard as ResourceCardType } from "../../types";
import { useApp } from "../../hooks";

const MainContent: React.FC = () => {
  const bgColor = useColorModeValue("white", "white");
  const { open, onOpen, onClose } = useDisclosure();

  const resourceCards: ResourceCardType[] = [
    {
      id: 1,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "link",
      bgGradient: "#E00027",
      icon: FaExternalLinkAlt,
      svgPath: "assets/blobs/red_blob.svg",
    },
    {
      id: 2,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "video",
      bgGradient: "#17E4A1",
      icon: FaPlay,
      svgPath: "assets/blobs/cyan_blob.svg",
    },
    {
      id: 3,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "link",
      bgGradient: "#E00027",
      icon: FaExternalLinkAlt,
      svgPath: "assets/blobs/red_blob.svg",
    },
    {
      id: 4,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Wellbeing",
      type: "video",
      bgGradient: "#FF603E",
      icon: FaPlay,
      svgPath: "assets/blobs/orange_blob.svg",
    },
    {
      id: 5,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "pdf",
      bgGradient: " #FFE500",
      icon: FaFilePdf,
      svgPath: "assets/blobs/yellow_blob.svg",
    },
    {
      id: 6,
      title: "Taking stock of mental health in your workplace",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "pdf",
      bgGradient: "#56CCF2",
      icon: FaFilePdf,
      svgPath: "assets/blobs/aqua_blob.svg",
    },
  ];

  const { state } = useApp();

  // Filter cards based on search query and filters
  const filteredCards = resourceCards.filter((card) => {
    const matchesSearch =
      state.searchQuery === "" ||
      card.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      card.topic.toLowerCase().includes(state.searchQuery.toLowerCase());

    // note filter logic can be added here for more functionality
    return matchesSearch;
  });

  return (
    <Box
      bg={bgColor}
      py={{ base: 6, md: 12 }}
      px={{ base: 4, md: 8 }}
      minH="100vh"
    >
      {/* Desktop Layout */}
      <Flex
        maxW="1400px"
        mx="auto"
        gap={8}
        align="flex-start"
        display={{ base: "none", lg: "flex" }}
      >
        {/* Filters Sidebar */}
        <FilterSidebar />

        {/* Resource Cards Grid */}
        <Box flex={1}>
          <SimpleGrid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {filteredCards.map((card) => (
              <ResourceCard key={card.id} card={card} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Mobile Layout */}
      <Box display={{ base: "block", lg: "none" }} maxW="1400px" mx="auto">
        {/* Mobile Filter Button */}
        <Container mb={6} px={4}>
          <Button
            onClick={onOpen}
            variant="outline"
            w="full"
            h="52px"
            borderColor="gray.200"
            bg="gray.50"
            _hover={{
              bg: "gray.100",
              borderColor: "gray.300",
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {/* hamburger icon */}
            <Box display="flex" flexDirection="column" gap="4px">
              <Box w="22px" h="2px" bg="gray.700" borderRadius="sm" />
              <Box w="18px" h="2px" bg="gray.700" borderRadius="sm" />
              <Box w="14px" h="2px" bg="gray.700" borderRadius="sm" />
            </Box>
            <Text ml={2} fontSize="16px" fontWeight="500" color="gray.800">
               Show Filters
            </Text>
          </Button>
        </Container>

        {/* Mobile Resource Cards Grid */}
        <SimpleGrid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
          px={4}
        >
          {filteredCards.map((card) => (
            <ResourceCard key={card.id} card={card} />
          ))}
        </SimpleGrid>
      </Box>

      {/* Mobile Filter Drawer */}
      <Drawer.Root open={open} onOpenChange={onClose} placement="top" size="sm">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bg="gray.200">
            <Drawer.Header borderBottomWidth="1px" pb={4}>
              <Text fontSize="20px" fontWeight="600" color="gray.800">
                Filters
              </Text>
            </Drawer.Header>
            <Drawer.Body px={6} py={6}>
              <FilterSidebar />
            </Drawer.Body>
            <Drawer.Footer borderTopWidth="1px" pt={4}>
              <Button
                variant="outline"
                onClick={onClose}
                w="full"
                size="lg"
                fontWeight="500"
              >
                Apply Filters
              </Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
};

export default MainContent;
