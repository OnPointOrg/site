import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

import { Progress } from "@chakra-ui/core";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <Progress hasStripe value={progress} />;
};

export default ProgressBar;
