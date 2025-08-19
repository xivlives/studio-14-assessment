import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { FaChevronDown } from "react-icons/fa6";
import { Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useApp } from "../../hooks";

const Header = () => {
  const bgColor = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("gray.200", "gray.200");
  const { state, dispatch } = useApp();

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Resources", path: "/resources" },
    { name: "Toolkit", path: "/toolkit" },
  ];

  return (
    <Box
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={8}
      py={4}
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        maxW="1400px"
        mx="auto"
      >
        {/* Logo Section */}
        <HStack gap={2}>
          <Box position="relative">
            {/* Colorful logo circles */}
            <Flex align="center" position="relative">
              <Box
                w="12px"
                h="12px"
                bg="#FF6B35"
                borderRadius="full"
                position="absolute"
                top="2px"
                left="2px"
              />
              <Box
                w="12px"
                h="12px"
                bg="#4285F4"
                borderRadius="full"
                position="absolute"
                top="2px"
                right="2px"
              />
              <Box
                w="12px"
                h="12px"
                bg="#34A853"
                borderRadius="full"
                position="absolute"
                bottom="2px"
                left="2px"
              />
              <Box
                w="12px"
                h="12px"
                bg="#1DD1A1"
                borderRadius="full"
                position="absolute"
                bottom="2px"
                right="2px"
              />
              <Box w="28px" h="28px" />
            </Flex>
          </Box>
          <Text fontSize="20px" fontWeight="bold" color="gray.800" ml={2}>
            LOGO
          </Text>
        </HStack>

        {/* Navigation Menu */}
        <HStack gap={8} flexGrow={1} justify="center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <Text
                  fontSize="16px"
                  fontWeight={isActive ? "600" : "500"}
                  color={isActive ? "#4285F4" : "gray.600"}
                  cursor="pointer"
                  position="relative"
                  _hover={{ color: "gray.800" }}
                  _after={
                    isActive
                      ? {
                          content: '""',
                          position: "absolute",
                          bottom: "-20px",
                          left: 0,
                          right: 0,
                          height: "3px",
                          bg: "#4285F4",
                          borderRadius: "2px",
                        }
                      : {}
                  }
                >
                  {item.name}
                </Text>
              )}
            </NavLink>
          ))}
        </HStack>

        {/* Right Section */}
        <HStack gap={6} align="center">
          {/* Switch to Employee */}
          <HStack gap={3}>
            <Switch.Root
              size="lg"
              colorPalette="blue"
              checked={state.isEmployee}
              onCheckedChange={() => dispatch({ type: "TOGGLE_EMPLOYEE" })}
            >
              <Switch.HiddenInput />
              <Switch.Control />
            </Switch.Root>
            <Text fontSize="16px" fontWeight="500" color="gray.700">
              Switch to Employee
            </Text>
          </HStack>

          {/* User Profile */}
          <HStack gap={3} cursor="pointer">
            <Avatar.Root size="sm" colorPalette="teal">
              <Avatar.Fallback name="Jonathan" />
            </Avatar.Root>
            <Text fontSize="16px" fontWeight="500" color="gray.800">
              Jonathan
            </Text>
            <FaChevronDown color="gray.600" />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
