import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  VStack,
  Drawer,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { FaBars } from "react-icons/fa6";
import { Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useApp } from "../../hooks";
import { useDisclosure } from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("gray.200", "gray.200");
  const { state, dispatch } = useApp();
  const { open, onOpen, onClose } = useDisclosure();

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
      px={6}
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
          <Box w={{ base: "85px", md: "140px" }}>
            <img
              src="/logo.svg"
              alt="Logo"
              style={{
                width: "30%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </HStack>

        {/* Desktop Nav */}
        <HStack
          gap={8}
          flexGrow={1}
          justify="center"
          display={{ base: "none", md: "flex" }}
        >
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
                  _after={{
                    content: isActive ? '""' : "none",
                    display: isActive ? "block" : "none",
                    position: "absolute",
                    bottom: "-20px",
                    left: 0,
                    right: 0,
                    height: "3px",
                    bg: "#4285F4",
                    borderRadius: "2px",
                  }}
                >
                  {item.name}
                </Text>
              )}
            </NavLink>
          ))}
        </HStack>

        {/* Right Section - Desktop Only */}
        <HStack gap={6} align="center" display={{ base: "none", md: "flex" }}>
          <Switch.Root
            size="md"
            colorPalette="blue"
            checked={state.isEmployee}
            onCheckedChange={() => dispatch({ type: "TOGGLE_EMPLOYEE" })}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>
          <Text color="gray.800">switch to employee</Text>

          {/* Avatar */}
          <Avatar.Root size="sm" colorPalette="teal">
            <Avatar.Fallback name="Jonathan" />
          </Avatar.Root>
        </HStack>

        {/* Right Section - Mobile Only */}
        <HStack gap={4} display={{ base: "flex", md: "none" }} align="center">
          {/* Toggle */}
          <Switch.Root
            size="md"
            colorPalette="blue"
            checked={state.isEmployee}
            onCheckedChange={() => dispatch({ type: "TOGGLE_EMPLOYEE" })}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>

          {/* Vertical Divider */}
          <Box w="1px" h="24px" bg="gray.300" />

          {/* Avatar */}
          <Avatar.Root size="sm" colorPalette="teal">
            <Avatar.Fallback name="Jonathan" />
          </Avatar.Root>

          {/* Hamburger Button */}
          <IconButton
            aria-label="Open Menu"
            onClick={onOpen}
            variant="ghost"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          >
            <FaBars style={{ color: "#1A202C", fontSize: "22px" }} />
          </IconButton>
        </HStack>
      </Flex>

      {/* Mobile Drawer (Chakra v3 API) */}
      <Drawer.Root open={open} onOpenChange={onClose}>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content color={"gray.800"} bg="gray.200">
            <Drawer.Header borderBottomWidth="1px">
              <Text fontSize="18px" fontWeight="600">
                Menu
              </Text>
            </Drawer.Header>
            <Drawer.Body>
              <VStack align="stretch" gap={6}>
                {/* Mobile Navigation Links */}
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={onClose}
                    style={{ textDecoration: "none" }}
                  >
                    {({ isActive }) => (
                      <Text
                        fontSize="18px"
                        fontWeight={isActive ? "600" : "500"}
                        color={isActive ? "#4285F4" : "gray.700"}
                        py={2}
                      >
                        {item.name}
                      </Text>
                    )}
                  </NavLink>
                ))}

                {/* Mobile Switch Section */}
                <Box pt={4} borderTop="1px" borderColor="gray.200">
                  <VStack align="stretch" gap={4}>
                    <HStack gap={3} justify="space-between">
                      <Text fontSize="16px" fontWeight="500" color="gray.700">
                        Switch to Employee
                      </Text>
                      <Switch.Root
                        size="md"
                        colorPalette="blue"
                        checked={state.isEmployee}
                        onCheckedChange={() =>
                          dispatch({ type: "TOGGLE_EMPLOYEE" })
                        }
                      >
                        <Switch.HiddenInput />
                        <Switch.Control />
                      </Switch.Root>
                    </HStack>

                    {/* Mobile User Profile */}
                    <HStack gap={3} cursor="pointer">
                      <Avatar.Root size="sm" colorPalette="teal">
                        <Avatar.Fallback name="Jonathan" />
                      </Avatar.Root>
                      <VStack align="start" gap={0}>
                        <Text fontSize="16px" fontWeight="500" color="gray.800">
                          Jonathan
                        </Text>
                        <Text fontSize="14px" color="gray.500">
                          View Profile
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  );
};

export default Header;
