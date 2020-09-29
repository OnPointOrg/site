import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

import { Progress } from "@chakra-ui/core";

export let thumbnailImage = "";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file, "BlogThumbnail");

  useEffect(() => {
    if (url) {
      setFile(null);
    }
    thumbnailImage = url;
    console.log(thumbnailImage);
    // return thumbnailImage;
  }, [url, setFile]);

  return <Progress hasStripe value={progress} />;
};

export default ProgressBar;
