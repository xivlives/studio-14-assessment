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
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: 8 }}
    >
      <VStack gap={8} maxW="1400px" mx="auto">
        {/* Title */}
        <Heading
          fontSize={{ base: '36px', md: '44px', lg: '62px' }}
          fontWeight="700"
          color="gray.800"
          textAlign="center"
          lineHeight="1.1"
          px={{ base: 4, md: 0 }}
        >
          Resources
        </Heading>

        {/* Description */}
        <Text
          fontSize={{ base: '16px', md: '18px' }}
          color="gray.600"
          textAlign="center"
          maxW={{ base: '90%', md: '600px' }}
          lineHeight="1.6"
          fontWeight="400"
          px={{ base: 4, md: 0 }}
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