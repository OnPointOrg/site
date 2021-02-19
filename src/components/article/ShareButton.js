import React from 'react';
import { Button, toast, useToast } from '@chakra-ui/core';

import { FaShareSquare } from 'react-icons/fa';

export const ShareButton = () => {
    const toast = useToast();
    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                console.log(window.location.href);
                toast({
                    title: 'Link Copied',
                    description:
                        'The Article Link Has Been Copied And Is Now Shareable',
                    status: 'success',
                    duration: 5000,
                    isClosable: true
                });
            }}
        >
            <FaShareSquare size="1.5rem" color="white" />
        </Button>
    );
};

export default ShareButton;
