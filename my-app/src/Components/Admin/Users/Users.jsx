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
} from '@chakra-ui/react';
import SideBar from '../Dashbord/SideBar.jsx';
import { RiDeleteBin7Fill } from 'react-icons/ri';

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'green.500'}
            onClick={() => updateHandler(item._id)}
          >
            Change Role
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

const Users = () => {
  const users = [
    {
      _id: 'uhuiwef',
      name: 'Harsh',
      role: 'admin',
      subscription: {
        status: 'active',
      },
      email: 'harsh@gmail.com',
    },
  ];

  const updateHandler = userId => {
    console.log(userId);
  };

  const deleteButtonHandler = userId => {
    console.log(userId);
  };

  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '16']} overflowX={'auto'}>
          <Heading
            textTransform={'uppercase'}
            children={'All Users'}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <TableContainer w={['100vh', 'Full']}>
            <Table variant={'simple'} size={'lg'}>
              <TableCaption>All Available users in the databases</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map(item => (
                  <Row
                    key={item._id}
                    item={item}
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <SideBar />
      </Grid>
    </>
  );
};

export default Users;
