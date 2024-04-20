import { Avatar, Button, Container, HStack, Heading, Stack, Text, VStack,Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody,Input, ModalFooter, useDisclosure, ModalHeader } from '@chakra-ui/react';
import React, { useState } from 'react'
import {RiDeleteBin7Fill} from 'react-icons/ri';
import {Link} from 'react-router-dom';

const Profile = () => {

  const user = {
    name : "Harsh",
    email :"harsh@gmail.com",
    createdAt: String(new Date().toISOString()),
    role:"user",
    subscription:{
       status:"notactive"
    },
    playlist:[{
       course:"sadasda",
       poster:"https://cdn.pixabay.com/photo/2016/12/16/15/25/christmas-1911637_1280.jpg"
    }]
  }

  const removeFromPlaylistHandler = () =>{
    console.log("clicked");
  }

  
  const changeImageSumbitHandler = (e,img)=>{
       e.preventDefault();
       
  };

  const {isOpen,onClose,onOpen} = useDisclosure();




  return (
      <>
         <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
            <Heading children={"Profile"} m="8" textTransform={"uppercase"}/>
                 <Stack justifyContent={"flex-start"} direction={["column","row"]} alignItems={"center"} spacing={["8","16"]} padding={"8"}>
                     <VStack>
                       <Avatar boxSize={"48"}/>
                       <Button colorScheme='green' variant={"ghost"} onClick={onOpen}>
                          Change Photo
                       </Button>
                     </VStack>

                     <VStack spacing={"4"} alignItems={["center","flex-start"]}>
                          <HStack>
                             <Text children={"Name:"} fontWeight={"bold"}/>
                             <Text children={user.name} fontWeight={"bold"}/>
                          </HStack>

                          <HStack>
                             <Text children={"Email:"} fontWeight={"bold"}/>
                             <Text children={user.email} fontWeight={"bold"}/>
                          </HStack>

                          <HStack>
                             <Text children={"Created At:"} fontWeight={"bold"}/>
                             <Text children={user.createdAt.split("T")[0]} fontWeight={"bold"}/>
                          </HStack>

                            {
                              user.role !== "admin" && <HStack>
                                <Text children={"Subscription"} fontWeight={"bold"}/>
                                {user.subscription.status === "active"?(
                                  <Button color={"whatsapp"} variant={"unstyled"}>Cancel Subscription</Button>
                                ):(
                                  <Link to={"green"}>
                                    <Button colorScheme='green'>Subscribe</Button>
                                  </Link>
                                )}
                              </HStack>
                            }

                            <Stack direction={["column","row"]} alignItems={"center"}>
                              <Link to={"/updateprofile"}>
                                <Button>Update Profile</Button>
                              </Link>

                              <Link to={"/changepassword"}>
                                <Button>Change Password</Button>
                              </Link>
                            </Stack>
                     </VStack>
                 </Stack>
                 
          <Heading children={"Playlist"} size={"md"} my={"8"}/>
              {
                user.playlist.length > 0 && (
                  <Stack direction={["column","row"]} alignItems={"center"} flexWrap={"wrap"} p={"4"}>
                      {user.playlist.map((element,index)=>(
                          <VStack w={"48"} m="2" key={element.course}>
                             <Image boxSize={"full"} objectFit="contain" src={element.poster}/>

                            <HStack>
                               <Link to={`/courses/${element.course}`}>
                                  <Button variant={"ghost"} colorScheme='green'>Watch Now</Button>
                               </Link>

                               <Button onClick={removeFromPlaylistHandler}><RiDeleteBin7Fill/></Button>
                            </HStack>
                          </VStack>
                      ))
                      }
                  </Stack>
                )
              } 
          <ChangePhotoBox changeImageSumbitHandler={changeImageSumbitHandler} isOpen={isOpen} onClose={onClose}/>

         </Container>
      </>
  )
}

export default Profile;

function ChangePhotoBox({isOpen,onClose,changeImageSumbitHandler}){
    
  const [img,setImg] = useState(' ');
  const [imgPrev,setImgPrev] = useState(' ');


  const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: 'green',
    backgroundColor: 'white',
    }

  const changeImageHandler=(e)=>{
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () =>{
        setImgPrev(reader.result);
        setImg(file);
      }
  }

  const closeHandle = ()=>{
    onClose();
    setImg(" ");
    setImgPrev(" ");
  }

    return (
      <>
         <Modal isOpen={isOpen} onClose={closeHandle}>
            <ModalOverlay backdropFilter={'blur(10px)'}/>

            <ModalContent>
              <ModalHeader>Change Photo</ModalHeader>
              <ModalCloseButton/>
              <ModalBody>
                 <Container>
                    <form onSubmit={(e)=>changeImageSumbitHandler(e,img)}>
                        <VStack spacing={"8"}>
                            {imgPrev && <Avatar src={imgPrev} boxSize={"48"}/>}
                            <Input type={"file"}
                                css={{"&::file-selector-button":fileUploadCss}}
                                onChange={changeImageHandler}
                            />

                            <Button w={"full"} colorScheme='whatsapp' type='submit'>
                              Change
                            </Button>
                        </VStack>
                    </form>
                 </Container>
              </ModalBody>

              <ModalFooter>
                <Button mr={"3"} onClick={closeHandle}>
                   Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
         </Modal>
      </>
    )
}