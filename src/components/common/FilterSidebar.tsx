import React from 'react';
import {
  Box,
  VStack,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import { useApp } from '../../hooks';
import type { FilterState } from '../../types';

const FilterSidebar: React.FC = () => {
  const { state, dispatch } = useApp();

  const handleFilterChange = (filterName: keyof FilterState, value: boolean) => {
    dispatch({ 
      type: 'UPDATE_FILTER', 
      payload: { filterName, value } 
    });
  };

  return (
    <Box w="280px" flexShrink={0}>
      <VStack align="stretch" spaceY={6}>
        {/* Filters Title */}
        <Text fontSize="20px" fontWeight="600" color="gray.800">
          Filters
        </Text>

        {/* Key Foundational Principles */}
        <VStack align="stretch" spaceY={3}>
          <Text fontSize="16px" fontWeight="600" color="gray.800">
            Key Foundational Principles
          </Text>
          <VStack align="stretch" spaceY={2} pl={2}>
            <Checkbox.Root
              checked={state.filters.secureBase}
              onCheckedChange={(e) => handleFilterChange('secureBase', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Secure Base</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.senseOfAppreciation}
              onCheckedChange={(e) => handleFilterChange('senseOfAppreciation', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Sense of Appreciation</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.learningOrganisation}
              onCheckedChange={(e) => handleFilterChange('learningOrganisation', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Learning Organisation</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.missionAndVision}
              onCheckedChange={(e) => handleFilterChange('missionAndVision', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Mission and Vision</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.wellbeing}
              onCheckedChange={(e) => handleFilterChange('wellbeing', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Wellbeing</Text>
              </Checkbox.Label>
            </Checkbox.Root>
          </VStack>
        </VStack>

        {/* Document Type */}
        <VStack align="stretch" spaceY={3}>
          <Text fontSize="16px" fontWeight="600" color="gray.800">
            Document type
          </Text>
          <VStack align="stretch" spaceY={2} pl={2}>
            <Checkbox.Root
              checked={state.filters.doc}
              onCheckedChange={(e) => handleFilterChange('doc', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">DOC</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.link}
              onCheckedChange={(e) => handleFilterChange('link', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Link</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.pdf}
              onCheckedChange={(e) => handleFilterChange('pdf', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">PDF</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root
              checked={state.filters.video}
              onCheckedChange={(e) => handleFilterChange('video', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Video</Text>
              </Checkbox.Label>
            </Checkbox.Root>
          </VStack>
        </VStack>

        {/* Categories */}
        <VStack align="stretch" spaceY={3}>
          <Text fontSize="16px" fontWeight="600" color="gray.800">
            Categories
          </Text>
          <VStack align="stretch" spaceY={2} pl={2}>
            <Checkbox.Root
              checked={state.filters.sample}
              onCheckedChange={(e) => handleFilterChange('sample', !!e.checked)}
              colorPalette="gray"
              size="md"
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Sample</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root colorPalette="gray" size="md">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Sample</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root colorPalette="gray" size="md">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Sample</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root colorPalette="gray" size="md">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Sample</Text>
              </Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root colorPalette="gray" size="md">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                <Text fontSize="14px" color="gray.700">Sample</Text>
              </Checkbox.Label>
            </Checkbox.Root>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default FilterSidebar;