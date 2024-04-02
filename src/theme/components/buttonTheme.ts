// LIBRARIES
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = {
  backgroundColor: "admin.primary.500",
  color: "#fff",
  size: "lg",
  w: "full",
  _after: defineStyle({
    content: '""',
    position: "absolute",
    height: "100%",
    left: 0,
    background: "admin.secondary.500",
    rounded: "md",
    right: "100%",
    transition: "right 200ms ease-in",
  }),
  _hover: defineStyle({
    _after: {
      right: "0%",
    },
  }),
};

const variants = {
  primary,
};

export const buttonTheme = defineStyleConfig({
  variants,
});
