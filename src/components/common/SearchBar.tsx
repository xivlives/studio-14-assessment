import React from 'react';
import {
  Box,
  InputGroup,
  InputElement,
  Input,
} from '@chakra-ui/react';
import { useColorModeValue } from '../ui/color-mode';
import { LuSearch } from 'react-icons/lu';
import { useApp } from '../../hooks';

const SearchBar: React.FC = () => {
  const { state, dispatch } = useApp();
  const inputBg = useColorModeValue('white', 'white');
  const borderColor = useColorModeValue('gray.400', 'gray.400'); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: event.target.value });
  };

  return (
    <Box w="100%" maxW="800px">
      <InputGroup
        startElement={
          <InputElement pointerEvents="none" pl={10}>
            <LuSearch size={20} color="black" style={{ marginRight: '6px' }} />
          </InputElement>
        }
      >
        <Input
          placeholder="Search by title or keyword"
          value={state.searchQuery}
          onChange={handleSearchChange}
          bg={inputBg}
          border="1px solid"
          borderColor={borderColor}
          borderRadius="8px"
          fontSize="16px"
          h="56px"
          color="gray.800"
          _placeholder={{
            color: 'gray.600',
            fontSize: '15px',
          }}
          _focus={{
            borderColor: '#4285F4',
            boxShadow: '0 0 0 1px #4285F4',
          }}
          _hover={{
            borderColor: 'gray.400',
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
