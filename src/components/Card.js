import { Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <VStack
      backgroundColor="white"
      textColor="black"
      borderRadius="xl"
      spacing={4}
      alignItems="flex-start"
      overflow="hidden"
    >
      <Image src={imageSrc} alt={title} borderRadius="xl" w="100%" objectFit="cover" />
      <VStack px={4} pb={4} alignItems="flex-start" spacing={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="md">
          {description}
        </Text>
        <Link href={url} isExternal _hover={{ textDecoration: "underline" }}>
          <HStack spacing={2} pt={2}>
            <Text fontWeight="bold" fontSize="md">View on GitHub</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Card;
