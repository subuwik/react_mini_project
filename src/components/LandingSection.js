import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hi, I'm Subuwik!";
const bio1 = "A frontend developer";
const bio2 = "building web apps with React & JS";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar name="Subuwik" size="2xl" bg="teal.500" />
      <Heading as="h4" size="md">{greeting}</Heading>
      <VStack spacing={2} pt={4} textAlign="center">
        <Heading as="h1" size="2xl">{bio1}</Heading>
        <Heading as="h1" size="2xl">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
