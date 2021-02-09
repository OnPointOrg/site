import React, { useEffect, useState } from 'react';
import useStorage from '../../hooks/useStorage';

import { FiUpload } from 'react-icons/fi';

import {
    Button,
    Text,
    Flex,
    FormControl,
    FormLabel,
    InputGroup,
    Progress
} from '@chakra-ui/core';

export let fileURL =
    'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/imageplaceholder.png?alt=media&token=ce8b4cfa-b3c5-4177-9431-deedad0383ce';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file, 'ArticleThumbnail');

    useEffect(() => {
        if (url) {
            setFile(null);
        }
        fileURL = url;
    }, [url, setFile]);

    return <Progress hasStripe className="progress-bar" value={progress} />;
};

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [fileName, setFileName] = useState('');

    const hiddenFileInput = React.useRef(null);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

    const changeHandler = e => {
        let selected = e.target.files[0];
        console.log(selected);
        console.log('changed');

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            console.log(selected.name);
            setFileName(selected.name);
            setError('');
        } else {
            setFile(null);
            setError(
                'Please Select An Allowed Image File(.png, .jpg, .jpeg, .gif)'
            );
        }
    };

    return (
        <div>
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
                            color="white"
                            background="black"
                        >
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                ref={hiddenFileInput}
                            />
                            {fileURL !==
                            'https://firebasestorage.googleapis.com/v0/b/onpointnewsorg.appspot.com/o/imageplaceholder.png?alt=media&token=ce8b4cfa-b3c5-4177-9431-deedad0383ce'
                                ? 'File Uploaded!'
                                : 'Upload Thumbnail Image'}
                        </Button>
                    </InputGroup>
                </FormControl>
            </Flex>
            <Text textAlign="center">{fileName}</Text>

            <div className="output">
                {file && (
                    <ProgressBar
                        file={file}
                        setFile={setFile}
                        fileName={fileName}
                    />
                )}
                {error && (
                    <Text textAlign="center" color="tomato">
                        {error}
                    </Text>
                )}
                {file && (
                    <Text textAlign="center">File Uploading: {file.name}</Text>
                )}
            </div>
        </div>
    );
};

export default UploadForm;
