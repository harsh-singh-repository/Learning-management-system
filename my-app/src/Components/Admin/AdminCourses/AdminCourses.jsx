import React from 'react';
import {
  Grid,
  Box,
  Heading,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Tbody,
  Td,
  HStack,
  Button,
  Th,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import SideBar from '../Dashbord/SideBar.jsx';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from './CourseModel.jsx';

function Row({ item, courseDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'green.500'}
            onClick={() => courseDetailsHandler(item._id)}
          >
            View Lectures
          </Button>
          <Button
            color={'green.600'}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

const AdminCourses = () => {
  const courses = [
    {
      id: 'uhuiwef',
      title: 'React Course',
      category: 'web development',
      poster: {
        url: 'https://picsum.photos/200/300',
      },
      createdBy: 'John Doe',
    },
  ];
  const { isOpen, onClose,onOpen } = useDisclosure();

  const courseDetailsHandler = () => {
    onOpen();
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  const deleteLectureButtonHandler = (courseId, lectureId) => {
    console.log(courseId);
    console.log(lectureId);
  };

  const addLectureHandler=(e, courseId, title, description, video)=>{
    e.preventDefault();
  }

  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading
            textTransform={'uppercase'}
            children={'All Users'}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <TableContainer w={['100vh', 'Full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>
                All Available courses in the databases
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Title</Th>
                  <Th>Poster</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>View</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courses.map(item => (
                  <Row
                    key={item._id}
                    item={item}
                    courseDetailsHandler={courseDetailsHandler}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModel
            isOpen={isOpen}
            onClose={onClose}
            courseId={courses.id}
            deleteButtonHandler={deleteLectureButtonHandler}
            addLectureHandler={addLectureHandler}
            courseTitle="React Course"
          />
        </Box>
        <SideBar />
      </Grid>
    </>
  );
};

export default AdminCourses;
