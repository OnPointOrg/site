import React from "react";
import { IconButton, toggleColorMode, useColorMode } from "@chakra-ui/core";

const DarkModeLightModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <IconButton
        aria-label={`Switch to ${
          colorMode === "light" ? "dark" : "light"
        } mode`}
        variant="ghost"
        color="current"
        fontSize={["18px", "20px", "20px", "20px"]}
        onClick={toggleColorMode}
        icon={colorMode === "light" ? "moon" : "sun"}
        _focus={{
          outline: "none",
        }}
      />
    </div>
  );
};

export default DarkModeLightModeButton;
