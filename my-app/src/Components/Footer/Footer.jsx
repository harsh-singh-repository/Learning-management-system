import { Box,Stack, VStack ,Heading, HStack} from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular,TiSocialInstagramCircular} from "react-icons/ti"
import {DiGithub} from "react-icons/di"

const Footer = () => {
  return (
      <>
         <Box padding={"4"} bg={"blackAlpha.900"} minH={"10vh"} className="footer">
             <Stack direction={['center','flex-start']} width="full">
                 <VStack alignItems={['center','flex-start']} width={"full"}>
                    <Heading children={"All right reserved"} color={"white"}/>
                    <Heading size={'sm'}children={"@TECH PANDA"} color={"green.400"} fontFamily={"body"} />
                 </VStack>

                 <HStack spacing={['2','10']} justifyContent={"center"} color={"white"} fontSize="50">
                    <a href="https://youtube.com" target='_blank'>
                        <TiSocialYoutubeCircular/>
                    </a>
                    <a href="https://instagram.com" target='_blank'>
                        <TiSocialInstagramCircular/>
                    </a>
                    <a href="https://github.com/harsh-singh-repository" target='_blank'>
                        <TiSocialInstagramCircular/>
                    </a>
                 </HStack>
             </Stack>
         </Box>
      </>
  )
}

export default Footer