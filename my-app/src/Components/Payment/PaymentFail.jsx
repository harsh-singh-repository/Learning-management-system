import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Heading,VStack,Box,Text, Button} from '@chakra-ui/react';
import {RiErrorWarningFill} from "react-icons/ri"


const NotFound = () => {
  return (
    <>
             <Container h={"90vh"} p="16">
              <VStack justifyContent={"center"} h={"full"} spacing={"4"}>

              <Heading>
                    <RiErrorWarningFill size={"5rem"}/>
              </Heading>

              <Heading my={"8"} textAlign ={"center"} textTransform={"uppercase"}>
                  Payment Fail
              </Heading>

               <Link to="/subscribe">
                   <Button variant={"ghost"}>Try Again</Button>
               </Link>

          </VStack>
      </Container>
    </>
  )
}

export default NotFound