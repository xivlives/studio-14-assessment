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
      bgGradient: "#E00027",
      icon: FaExternalLinkAlt,
      svgPath: "assets/blobs/red_blob.svg"
    },
    {
      id: 2,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic", 
      category: "Secure Base",
      type: "video",
      bgGradient: "#17E4A1",
      icon: FaPlay,
      svgPath: "assets/blobs/cyan_blob.svg"
    },
    {
      id: 3,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base", 
      type: "link",
      bgGradient: "#E00027",
      icon: FaExternalLinkAlt,
      svgPath: "assets/blobs/red_blob.svg"
    },
    {
      id: 4,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Wellbeing",
      type: "video", 
      bgGradient: "#FF603E",
      icon: FaPlay,
      svgPath: "assets/blobs/orange_blob.svg"
    },
    {
      id: 5,
      title: "The ultimate guide to Workplace Chat",
      topic: "Sample Topic",
      category: "Secure Base",
      type: "pdf",
      bgGradient: " #FFE500",
      icon: FaFilePdf,
      svgPath: "assets/blobs/yellow_blob.svg"
    },
    {
      id: 6,
      title: "Taking stock of mental health in your workplace",
      topic: "Sample Topic",
      category: "Secure Base", 
      type: "pdf",
      bgGradient: "#56CCF2",
      icon: FaFilePdf,
      svgPath: "assets/blobs/aqua_blob.svg"
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