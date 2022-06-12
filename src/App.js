import { useState } from "react";
import Header from "./components/Header";
import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import Preferences from "./pages/Preferences/Preferences";
import AdventurePlan from "./pages/AdventurePlan/AdventurePlan";

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
  const [adventureSetting, setAdventureSetting] = useState({
    budget: "",
    duration: "",
    location: "",
  });

  const submitAdventureSettings = (budget, duration, location) => {
    setAdventureSetting({
      budget,
      duration,
      location,
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/preferences"
          element={
            <Preferences submitAdventureSettings={submitAdventureSettings} />
          }
        />
        <Route
          path="/adventurePlan"
          element={<AdventurePlan adventureSetting={adventureSetting} />}
        />
      </Routes>
    </>
  );
}

export default App;
