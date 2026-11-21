# React Portfolio Page

A single page portfolio application built with React. Focused on component structure, custom hooks and client side form validation.

## Features

- **Header:** Smooth section scrolling and dynamic show/hide behavior based on scroll direction.
- **Projects section:** Responsive grid of project cards.
- **Contact form:** Form validation and simulated API submission handled via a custom hook (`useSubmit`) and React Context for toast alerts.

## Structure

```text
src/
  components/   Page sections and UI cards (Header, Landing, Projects, ContactMe, Footer)
  context/      Global alert notification state
  hooks/        Custom hook for async form submission

How to run
npm install
npm start
