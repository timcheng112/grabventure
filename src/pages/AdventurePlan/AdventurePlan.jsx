import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Header from "../../components/Header";

const AdventurePlan = ({ adventureSetting }) => {
  return (
    <>
      <Box>
        <Header name="Adventure Plan" />
        <Text>{adventureSetting.budget}</Text>
        <Text>{adventureSetting.duration}</Text>
        <Text>{adventureSetting.location}</Text>
      </Box>
    </>
  );
};

export default AdventurePlan;
