import logo from './logo.svg';
import './App.css';
import Preferences from './pages/Preferences/Preferences';
import { Container, Box, Heading } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

const Homepage = () => {
  return (
    <Container maxW='xl'>
      <Heading textAlign='center' marginY={10}>
        GrabVenture
      </Heading>
      <Box width='full' height='100vh' bg='tomato'></Box>
    </Container>
  );
};

function App() {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/preferences' element={<Preferences />} />
      </Routes>
      <Navigation />
    </Box>
  );
}

export default App;
