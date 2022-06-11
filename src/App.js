import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="App">
        <Button colorScheme="Gray" size="lg" variant="outline">
          Start
        </Button>
      </div>
    </>
  );
}

export default App;
