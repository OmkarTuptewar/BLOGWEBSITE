import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";

import React from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
  

const Hompage = () => {
  
    
       
      
  return (
    <div>
      <Box
        d="flex"
        justifyContent="center"
        p={0}
        bg={"white"}
        w="100%"
        m="4px 0 1px 0"
      
        borderWidth="20px"
    
      >
        <Text
          fontSize="4xl"
          fontWeight="400"
          color="black"
          fontStyle="normal"
          textAlign="center"
        >
          ...BLOG-SPHERE...
        </Text>
      </Box>
      

      <Box 
         d="flex"
        justifyContent="center" 
        width="100%"
        padding={10}
        margin="4px 0 1px 0"
        
       
       >

      <Tabs  variant='soft-rounded' colorScheme='blue'
        
        
        >
        <TabList mb="1em">
          <Tab
            width="50%"
          >LOGIN</Tab>
          <Tab  width="50%"
          >SIGNUP</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>

            {/* login form  here  */}
           <Login/>


          </TabPanel>
          <TabPanel>

            {/* signUp form here */}
          <SignUp/>


          </TabPanel>
        </TabPanels>
      </Tabs>


      </Box>
     
    </div>
  );
};

export default Hompage;
