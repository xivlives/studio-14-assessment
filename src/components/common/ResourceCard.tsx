import React from "react";
import { Card, Box, VStack, Text, Badge, Icon, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { FaPlay } from "react-icons/fa";
import type { ResourceCard as ResourceCardType } from "../../types";

interface ResourceCardProps {
  card: ResourceCardType;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ card }) => {
  const borderColor = useColorModeValue("gray.200", "gray.200");

  return (
    <Card.Root
      borderRadius="16px"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
      bg="white"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      transition="all 0.3s ease"
      cursor="pointer"
    >
      {/* SVG Header */}
      <Box position="relative" h="160px" overflow="hidden">
        <Image
          src={card.svgPath}
          alt={`${card.type} blob`}
          objectFit="cover"
          w="100%"
          h="100%"
        />

        {/* Top-right icon */}
        <Box
          position="absolute"
          top={3}
          right={3}
          p={2}
          bg="rgba(255,255,255,0.2)"
          borderRadius="full"
        >
          <Icon as={card.icon} w={5} h={5} color="black" />
        </Box>

        {/* Type-specific overlays */}
        {card.type === "video" && (
          <Box
            bg="rgba(255,255,255,0.2)"
            borderRadius="full"
            p={4}
            border="2px solid rgba(255,255,255,0.3)"
            position="absolute"
            inset="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={FaPlay} w={6} h={6} color="white" />
          </Box>
        )}
        {card.type === "pdf" && (
          <Box
            bg="rgba(0,0,0,0.6)"
            px={3}
            py={1}
            borderRadius="4px"
            position="absolute"
            bottom={3}
            left={3}
          >
            <Text color="white" fontSize="12px" fontWeight="600">
              PDF
            </Text>
          </Box>
        )}
      </Box>

      {/* Body */}
      <Card.Body p={6}>
        <VStack align="stretch" spaceY={3}>
          <Text fontSize="18px" fontWeight="600" color="gray.800" lineHeight="1.4">
            {card.title}
          </Text>
          <Text fontSize="14px" color="gray.500">
            {card.topic}
          </Text>
          <Badge
            alignSelf="flex-start"
            bg="gray.100"
            color="gray.700"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="12px"
            fontWeight="500"
          >
            {card.category}
          </Badge>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};

export default ResourceCard;
