import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

import { FiUpload } from "react-icons/fi";

import {
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  ThemeProvider,
} from "@chakra-ui/core";

import { thumbnailImage } from "../components/ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  const changeHandler = async (e) => {
    let selected = e.target.files[0];
    console.log(selected);
    await console.log("changed");

    if (selected && types.includes(selected.type)) {
      console.log(thumbnailImage);
      setFile(selected);
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
                style={{ display: "none" }}
                ref={hiddenFileInput}
              />
              Upload Thumbnail File
            </Button>
          </InputGroup>
        </FormControl>
      </Flex>
      <div className="output">
        {error && <Text color="tomato">{error}</Text>}
        {file && <Text>{file.name}</Text>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </ThemeProvider>
  );
};

export default UploadForm;
