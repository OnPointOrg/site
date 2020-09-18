import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

import { FiUpload } from "react-icons/fi";

import { Button } from "@chakra-ui/core";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
  const changeHandler = (e) => {
    console.log("changed");
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please Select An Allowed Image File(.png, .jpg, .jpeg, .gif)");
    }
  };

  return (
    <div>
      <label>
        <Button rightIcon={FiUpload} variant="outline">
          Upload Thumbnail File
          <input
            type="file"
            onChange={changeHandler}
            style={{ opacity: "0" }}
          />
        </Button>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </div>
  );
};

export default UploadForm;
