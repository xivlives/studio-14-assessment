import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import SearchBar from '../common/SearchBar';

const HeroSection: React.FC = () => {
  const bgColor = useColorModeValue('#F8F9FA', '#F8F9FA');

  return (
    <Box
      bg={bgColor}
      py={16}
      px={8}
    >
      <VStack gap={8} maxW="1400px" mx="auto">
        {/* Title */}
        <Heading
          fontSize={{ base: '48px', md: '64px' }}
          fontWeight="700"
          color="gray.800"
          textAlign="center"
          lineHeight="1.1"
        >
          Resources
        </Heading>

        {/* Description */}
        <Text
          fontSize="18px"
          color="gray.600"
          textAlign="center"
          maxW="600px"
          lineHeight="1.6"
          fontWeight="400"
        >
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo
          nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
        </Text>

        {/* Search Bar */}
        <SearchBar />
      </VStack>
    </Box>
  );
};

export default HeroSection;