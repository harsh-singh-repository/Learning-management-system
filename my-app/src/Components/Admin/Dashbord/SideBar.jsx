import { VStack,Button} from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'


const SideBar = () => {

    const location = useLocation();
  return (
      <>
        <VStack spacing={"8"} p="16" boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}>
               <LinkButton url={"dashboard"} Icon={RiDashboardFill} text={"Dashboard"} active={location.pathname === "/admin/dashboard"}/>
               <LinkButton url={"createcourses"} Icon={RiAddCircleFill} text={"Create Courses"}  active={location.pathname === "/admin/createcourses"}/>
               <LinkButton url={"courses"} Icon={RiEyeFill} text={"Courses"}  active={location.pathname === "/admin/courses"}/>
               <LinkButton url={"users"} Icon={RiUser3Fill} text={"Users"}  active={location.pathname === "/admin/users"}/>
        </VStack>
      </>
  )
}

export default SideBar;

function LinkButton({url,Icon,text,active}){
    return(
        <Link to={`/admin/${url}`}>
        <Button fontSize={"larger"} variant={"ghost"} colorScheme={active?"whatsapp":""}>
           <Icon/>{text}
        </Button>
        </Link>
    )
}