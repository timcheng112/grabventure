import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Preferences from "./pages/Preferences/Preferences";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="App"></div>

      <Routes>
        <Route
          path="/"
          element={
            <Button colorScheme="Gray" size="lg" variant="outline">
              Start
            </Button>
          }
        />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </>
  );
}

export default App;
