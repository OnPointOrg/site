import React, { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

import { Progress } from "@chakra-ui/core";

export let thumbnailImage = "";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file, "BlogThumbnail");

  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    const setData = async () => {
      if (url) {
        // console.log(url);
        setFile(null);
      }
      await setFileUrl(url);
      console.log(url);
    };
    setData();
  }, [url, setFile]);

  return <Progress hasStripe value={progress} fileUrl={fileUrl} />;
};

export default ProgressBar;
