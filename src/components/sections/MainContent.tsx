import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaPlay, FaFilePdf } from 'react-icons/fa';
import FilterSidebar from '../common/FilterSidebar';
import ResourceCard from '../common/ResourceCard';
import type { ResourceCard as ResourceCardType } from '../../types';

const MainContent: React.FC = () => {
  const bgColor = useColorModeValue('white', 'white');

  const resourceCards: ResourceCardType[] = [
    {
      id: 1,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "link",
      bgGradient: "linear(to-r, #DC143C, #FF69B4)",
      icon: FaExternalLinkAlt
    },
    {
      id: 2,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic", 
      category: "Secure Base",
      type: "video",
      bgGradient: "linear(45deg, #1DD1A1, #00CED1)",
      icon: FaPlay
    },
    {
      id: 3,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base", 
      type: "link",
      bgGradient: "linear(45deg, #DC143C, #FF1493)",
      icon: FaExternalLinkAlt
    },
    {
      id: 4,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Wellbeing",
      type: "video", 
      bgGradient: "linear(45deg, #FF4500, #FF6347)",
      icon: FaPlay
    },
    {
      id: 5,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "pdf",
      bgGradient: "linear(45deg, #FFD700, #FFA500)",
      icon: FaFilePdf
    },
    {
      id: 6,
      title: "Taking stock of mental health in your workplace",
      topic: "Sample Topic",
      category: "Secure Base", 
      type: "pdf",
      bgGradient: "linear(45deg, #87CEEB, #4169E1)",
      icon: FaFilePdf
    }
  ];

  return (
    <Box bg={bgColor} py={8} px={8} minH="100vh">
      <Flex maxW="1400px" mx="auto" gap={8} align="flex-start">
        {/* Filters Sidebar */}
        <FilterSidebar />

        {/* Resource Cards Grid */}
        <Box flex={1}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
            {resourceCards.map((card) => (
              <ResourceCard key={card.id} card={card} />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainContent;