import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Preferences from "./pages/Preferences/Preferences";

const Homepage = () => {
  return (
    <>
      <Header name="GrabVenture" />
      <Flex justifyContent="center" marginY={10}>
        <Link to="/preferences">
          <Button
            colorScheme="Gray"
            size="lg"
            variant="outline"
            width="200px"
            height="80px"
          >
            Start
          </Button>
        </Link>
      </Flex>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </>
  );
}

export default App;
