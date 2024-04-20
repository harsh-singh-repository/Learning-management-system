import { Container, Heading, Text, VStack,Box, Button } from '@chakra-ui/react';
import React from 'react'

const Subscribe = () => {
  return (
    <>
       <Container h={"90vh"} p='16'>
          <Heading children={"Welcome"} my={"8"} textAlign={"center"}/>

          <VStack boxShadow={"lg"} alignItems={"stretch"} borderRadius={"lg"} spacing={"0"}>
            <Box p={"4"} css={{
                borderRadius: "8px 8px 0 0",
                backgroundColor : "#2DAE50"
            }} textAlign={"center"} color={"white"} >
                <Text children={"Pro Pack = $20.00"} as={"b"} fontSize={"xl"}/>
            </Box>

            <Box p={"4"}>
                <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}>
                <Text color={"black"} children={"Join Pro Pack to all Content."}/>
                <Heading size={"md"} children={"$20.00 only"}/>
                <Button my={"8"} width={"full"} css={{
                    backgroundColor:"#2DAE50",
                    color:"white"
                }} variant={"solid"}>Buy Now</Button>
                </VStack>
            </Box>

          <Box p={"4"} css={{borderRadius:"0 0 8px 8px", backgroundColor:"#323733"}}>
             <Heading color={"White"} textTransform={"uppercase"} size={"sm"} children={"100% refund after Cancellation"}/>
             <Text fontSize={"xs"} children={"***Terms & Condition Apply"} color={"white"}/>
          </Box>
          </VStack>
       </Container>
    </>
  )
}

export default Subscribe;