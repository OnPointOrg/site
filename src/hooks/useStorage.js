import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase';

const useStorage = (file, location) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(`${location}/` + file.name);

        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                let percentage =
                    (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url);
            }
        );
    }, [file, location]);

    return { progress, url, error };
};

export default useStorage;
