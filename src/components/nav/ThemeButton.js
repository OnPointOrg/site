import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/core";

const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        size="lg"
        aria-label={`Switch to ${
          colorMode === "light" ? "dark" : "light"
        } mode`}
        variant="outline"
        color="current"
        fontSize={["20px", "20px", "20px", "20px"]}
        onClick={toggleColorMode}
        icon={colorMode === "light" ? "moon" : "sun"}
        _focus={{
          outline: "none",
        }}
      />
    </div>
  );
};

export default ThemeButton;