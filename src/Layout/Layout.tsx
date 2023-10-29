import { ChakraProvider, Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react';


export const Layout = ({ children }: {children: ReactNode}) => {

    return (
        
        <ChakraProvider>
            <Box minHeight={"100vh"} backgroundColor={'#FFFFFF'} padding={"25px"}>
                    {children}
                </Box>
        </ChakraProvider>

    )

}
