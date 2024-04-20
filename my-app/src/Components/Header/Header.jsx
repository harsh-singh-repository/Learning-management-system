import React from 'react';
import {Link} from "react-router-dom";
import {Drawer,DrawerOverlay,DrawerContent,DrawerHeader,DrawerBody, useDisclosure,VStack,Button,HStack} from '@chakra-ui/react'; 
import "./header.css"
import {Menu,LogOut} from "react-feather"
import {RiDashboardFill} from "react-icons/ri"

const logOutHandler = ()=>{
  console.log("Logout");
  onclose();
}

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();

  const isAuthenticated = true;

  const user = {
    role:'admin',
  }

  return (
    <>
      <div className='nav-container' onClick={onOpen}>
           <div className='nav-button'>
               <Menu className='menu'/>
           </div>
      </div>

      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
         <DrawerOverlay/>
         <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
            <DrawerBody>
                 <VStack spacing={'4'} alignItems={'flex-start'}>

                 <Link to={"/"} onClick={onClose}>
                    <Button variant={"ghost"}>Home</Button>
                </Link>

                 <Link to={"/courses"} onClick={onClose}>
                     <Button variant={"ghost"}>Courses</Button>
                </Link>

                 <Link to="/about" onClick={onClose}>
                     <Button variant={"ghost"}>About Us</Button>
                </Link>
                
                 <Link to="/request" onClick={onClose}>
                     <Button variant={"ghost"}>Request a Course</Button>
                </Link>

                 <Link to="/contact" onClick={onClose}>
                     <Button variant={"ghost"}>Contact Us</Button>
                </Link>

                     <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"}>
                      

                      {isAuthenticated?(<>
                          <VStack spacing={"1rem"}>
                               <HStack>
                                <Link to="/profile" onClick={onClose}>
                                  <Button variant={"solid"} colorScheme='whatsapp'>Profile</Button>
                                </Link>

                                <Button variant={"ghost"} onClick={logOutHandler}>
                                    <LogOut/>
                                    Logout
                                </Button>
                               </HStack>


                               {
                                user && user.role === "admin" && 
                                <Link to="/admin/dashboard" onClick={onClose}>
                                  <Button variant={"ghost"}>
                                      <RiDashboardFill style={{margin:"4px"}}/>
                                       Dashboard
                                  </Button>
                                </Link>
                               }
                          </VStack>
                      </>):(
                        <>
                          <Link to="/login" onClick={onClose}>
                             <Button colorScheme={'green'}>Login</Button>
                          </Link>

                          <p>OR</p>

                          <Link to="/register" onClick={onClose}>
                             <Button colorScheme={'green'}>Sign Up</Button>
                          </Link>
                        </>
                      )}
                      

                     </HStack>
                 </VStack>
            </DrawerBody>
         </DrawerContent>
      </Drawer>
      
    </>
  )
}

export default Header;

