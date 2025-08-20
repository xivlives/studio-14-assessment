import React from 'react';
import {
  Box,
  InputGroup,
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
    <Box w="100%" maxW={{ base: '90%', md: '800px' }}>
      <InputGroup
        startElement={<LuSearch size={20} color="black" />}
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
          h={{ base: '48px', md: '56px' }}
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