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
        <Box marginY={10}>
          {/* <Text>{adventureSetting.budget}</Text> */}
          {/* <Text>{adventureSetting.duration}</Text> */}
          {/* <Text>{adventureSetting.location}</Text> */}

          <Text>A relaxing coffee break at...</Text>
          <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
            <Image
              src={
                "https://ieatandeat.sg/wp-content/uploads/2015/10/Dutch-colony-coffee-co-1.jpg"
              }
              alt={"image here"}
            />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
            >
              Dutch Colony Coffee Co.
              <br />
              New Tech Park
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
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                Food & Beverages
              </Box>
            </Box>
          </Box>
        </Box>

        <Box marginY={10}>
          {/* <Text>{adventureSetting.budget}</Text> */}
          {/* <Text>{adventureSetting.duration}</Text> */}
          {/* <Text>{adventureSetting.location}</Text> */}

          <Text>A nice cool dessert at...</Text>
          <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
            <Image
              src={"https://www.addressguru.sg/images/1054124559.jpg"}
              alt={"image here"}
            />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
            >
              Wimbly Lu - Jalan Riang
            </Box>
            <Divider />
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 5 ? "teal.500" : "gray.300"} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {adventureSetting.budget}
              </Box>
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                Cafe
              </Box>
            </Box>
          </Box>
        </Box>

        <Box marginY={10}>
          {/* <Text>{adventureSetting.budget}</Text> */}
          {/* <Text>{adventureSetting.duration}</Text> */}
          {/* <Text>{adventureSetting.location}</Text> */}

          <Text>Indulge in some lesser known delights...</Text>
          <Box maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
            <Image
              src={
                "https://c1.staticflickr.com/5/4197/34820527092_ed40fc76e9_b.jpg"
              }
              alt={"image here"}
            />

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={2}
            >
              Hai Wei Yuan BBQ
              <br />
              Chomp Chomp Food Centre
            </Box>
            <Divider />
            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color={i < 3 ? "teal.500" : "gray.300"} />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {adventureSetting.budget}
              </Box>
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                Food & Beverages
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdventurePlan;
