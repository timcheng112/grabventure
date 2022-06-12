import React from "react";
import { Box, Divider, Text, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Header from "../../components/Header";

const renderActivity = ({ adventureSetting }) => {
  return (
    <Box>
      <image></image>
      <Divider></Divider>

      <Text>Name</Text>
      <Text>Location</Text>
      <Divider></Divider>

      <Text>Stars, {adventureSetting.budget} , location type</Text>
    </Box>
  );
};
const AdventurePlan = ({ adventureSetting }) => {
  return (
    <Box>
      <Header name="Adventure Plan" />
      <Box marginX={5}>
        <Text fontSize="2xl">Activity List</Text>
        <Box>
          <Text>{adventureSetting.budget}</Text>
          <Text>{adventureSetting.duration}</Text>
          <Text>{adventureSetting.location}</Text>

          <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
            <Image src={"https://bit.ly/2Z4KKcF"} alt={"image here"} />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
            >
              NAME OF THE PLACE
            </Box>
            <Divider />
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 4 ? "teal.500" : "gray.300"} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {adventureSetting.budget}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdventurePlan;
