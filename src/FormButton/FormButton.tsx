import { Center, Button } from '@chakra-ui/react'
import { login } from '../services/login';

export const FormButton = () => {

    return (
        <Center>
            <Button onClick={login} size={{ base: 'sm', md: 'md', lg: 'lg' }} marginTop={"10px"} width={{ base: "100%", md: "100%" }} colorScheme='pink' >Login</Button>
        </Center>


    )


}

