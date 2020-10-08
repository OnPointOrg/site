import React, { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";

import { FiUpload } from "react-icons/fi";

import {
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  ThemeProvider,
  Progress,
} from "@chakra-ui/core";

export let fileURL = "";

const ProgressBar = ({ file, setFile }, props) => {
  const { url, progress } = useStorage(file, "BlogThumbnail");

  const sendData = () => {
    fileURL = url;
  };

  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    const setData = async () => {
      if (url) {
        setFile(null);
      }
      await setFileUrl(url);
      fileURL = url;
      sendData();
      console.log(fileURL);
    };
    setData();
  }, [url, setFile]);

  return <Progress hasStripe className="progress-bar" value={progress} />;
};

const UploadForm = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const hiddenFileInput = React.useRef(null);

  // const callbackFunction = () => {
  //   console.log("DATA -----");
  //   console.log(fileURL);
  // };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    console.log("changed");

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      console.log(selected.name);
      setError("");
    } else {
      setFile(null);
      setError("Please Select An Allowed Image File(.png, .jpg, .jpeg, .gif)");
    }
  };

  return (
    <ThemeProvider>
      <Flex align="center" justify="center">
        <FormControl isRequired margin="25px">
          <FormLabel>Upload A Thumbnail For Your Article</FormLabel>
          <InputGroup>
            <Button
              rightIcon={FiUpload}
              variant="outline"
              onClick={handleClick}
              onChange={changeHandler}
              width="400px"
            >
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={hiddenFileInput}
              />
              Upload Thumbnail File
            </Button>
          </InputGroup>
        </FormControl>
      </Flex>
      <div className="output">
        {file && (
          <ProgressBar
            file={file}
            setFile={setFile}
            // parentCallback={callbackFunction}
          />
        )}
        {error && (
          <Text textAlign="center" color="tomato">
            {error}
          </Text>
        )}
        {file && <Text textAlign="center">File Uploaded: {file.name}</Text>}
      </div>
    </ThemeProvider>
  );
};

export default UploadForm;
