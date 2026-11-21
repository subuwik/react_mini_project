import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Reservation App",
    description:
      "React table booking app with dynamic time slots, form validation, responsive layout, and Jest unit tests.",
    url: "https://github.com/subuwik/front_end_developer_capstone",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Playwright E2E & API Tests",
    description:
      "Automated UI and API test suite built with Playwright, Page Object Model, cross-browser runs, and GitHub Actions CI.",
    url: "https://github.com/subuwik/playwright-tests",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Hair Day Salon Website",
    description:
      "Multi-page responsive HTML and CSS website with semantic markup, grid/flexbox layouts, and CSS animations.",
    url: "https://github.com/subuwik/Professional-services-Hair-Day",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "React Portfolio",
    description:
      "Single-page portfolio built with React, Chakra UI, Formik, and Yup validation with a scroll-aware header.",
    url: "https://github.com/subuwik/react_mini_project",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
