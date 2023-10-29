import { Center, Box, Input } from '@chakra-ui/react'
import { FormButton } from '../FormButton/FormButton'

export const Form = () => {

  return (

    <Center>
      <Box backgroundColor={"white"} marginTop={"15px"} borderRadius={"25px"} padding={"25px"} width={{ base: "100%", md: "300px" }}>
        <Center marginBottom={5}>
          <h1>Faça o login no DioBank</h1>
        </Center>

        <Input placeholder='email' type='email' size={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom={{ base: '5px', md: '10px' }}></Input>

        <Input placeholder='senha' type='password' size={{ base: 'sm', md: 'md', lg: 'lg' }} marginBottom={{ base: '5px', md: '10px' }}></Input>

        <FormButton></FormButton>

      </Box>
    </Center>
  )

}