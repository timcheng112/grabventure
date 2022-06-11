import { Flex, IconButton, Box } from '@chakra-ui/react';
import {
  CalendarIcon,
  BellIcon,
  SettingsIcon,
  ChatIcon,
  StarIcon,
} from '@chakra-ui/icons';

export default function Navigation() {
  return (
    <Box position='fixed' bottom={0} width='full'>
      <Flex
        justifyContent='space-evenly'
        alignItems='center'
        bg='gray.900'
        py={4}
      >
        <IconButton icon={<StarIcon />} />
        <IconButton icon={<CalendarIcon />} />
        <IconButton icon={<BellIcon />} />
        <IconButton icon={<ChatIcon />} />
        <IconButton icon={<SettingsIcon />} />
      </Flex>
    </Box>
  );
}
