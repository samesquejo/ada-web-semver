// LIBRARIES
import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(avatarAnatomy.keys);

const sizes = {
  topbar: definePartsStyle({
    container: defineStyle({
      width: 10,
      height: 10,
      borderRadius: "lg",
    }),
  }),
};

export const avatarTheme = defineMultiStyleConfig({ sizes });
